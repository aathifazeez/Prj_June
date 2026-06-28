import { getServerSession } from "next-auth";
import { authOptions } from "@/lib/auth";
import { getServerSupabase } from "@/lib/supabase/server";
import { ensureAuctionStateRowId } from "@/lib/supabase/auction-state";
import { NextRequest } from "next/server";

export async function POST(req: NextRequest) {
  const session = await getServerSession(authOptions);
  if (!session) return Response.json({ error: "Unauthorized" }, { status: 401 });

  try {
    const body     = await req.json();
    const supabase = getServerSupabase();

    const rowId = await ensureAuctionStateRowId(supabase);

    // Look up the player currently up for auction
    const { data: stateRow, error: stateErr } = await supabase
      .from("auction_state")
      .select("current_player_id")
      .eq("id", rowId)
      .single();

    if (stateErr) {
      return Response.json({ error: `state read failed: ${stateErr.message}` }, { status: 500 });
    }
    if (!stateRow?.current_player_id) {
      return Response.json({ error: "No player is currently up for auction" }, { status: 400 });
    }
    const playerId = stateRow.current_player_id;

    // ── UNSOLD path ──────────────────────────────────────────────
    if (body.mark_unsold) {
      const [playerRes, stateRes] = await Promise.all([
        supabase.from("players")
          .update({ status: "unsold", team_id: null, sold_for: null })
          .eq("id", playerId),
        supabase.from("auction_state")
          .update({ status: "idle", current_player_id: null })
          .eq("id", rowId),
      ]);

      if (playerRes.error) {
        return Response.json({ error: `player update failed: ${playerRes.error.message}` }, { status: 500 });
      }
      if (stateRes.error) {
        return Response.json({ error: `state update failed: ${stateRes.error.message}` }, { status: 500 });
      }
      return Response.json({ success: true });
    }

    // ── SOLD path ───────────────────────────────────────────────
    const { team_id, sold_for } = body;
    if (!team_id || sold_for === undefined || sold_for === null || sold_for === "") {
      return Response.json({ error: "team_id and sold_for are required" }, { status: 400 });
    }
    const price = Number(sold_for);
    if (!Number.isFinite(price) || price <= 0) {
      return Response.json({ error: "sold_for must be a positive number" }, { status: 400 });
    }

    // Read team's current budget_used so we can increment it (single-admin = no race)
    const { data: team, error: teamErr } = await supabase
      .from("teams")
      .select("budget, budget_used")
      .eq("id", team_id)
      .single();

    if (teamErr || !team) {
      return Response.json({ error: `team not found: ${teamErr?.message ?? team_id}` }, { status: 400 });
    }

    const [playerRes, teamRes, stateRes] = await Promise.all([
      supabase.from("players").update({
        status:   "sold",
        team_id,
        sold_for: price,
      }).eq("id", playerId),

      supabase.from("teams").update({
        budget_used: (team.budget_used ?? 0) + price,
      }).eq("id", team_id),

      supabase.from("auction_state")
        .update({ status: "idle", current_player_id: null })
        .eq("id", rowId),
    ]);

    if (playerRes.error) {
      return Response.json({ error: `player update failed: ${playerRes.error.message}` }, { status: 500 });
    }
    if (teamRes.error) {
      return Response.json({ error: `team update failed: ${teamRes.error.message}` }, { status: 500 });
    }
    if (stateRes.error) {
      return Response.json({ error: `state update failed: ${stateRes.error.message}` }, { status: 500 });
    }

    return Response.json({ success: true });
  } catch (err) {
    const msg = err instanceof Error ? err.message : "unknown error";
    return Response.json({ error: msg }, { status: 500 });
  }
}

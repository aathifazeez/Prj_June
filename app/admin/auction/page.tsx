import { getServerSupabase } from "@/lib/supabase/server";
import AuctionControl from "@/components/admin/AuctionControl";

export default async function AuctionPage() {
  const supabase = getServerSupabase();

  const [{ data: stateRaw }, { data: teams }, { data: players }] = await Promise.all([
    supabase
      .from("auction_state")
      .select("*, current_player:players(id, name, photo_url, role, base_points, status)")
      .single(),
    supabase.from("teams").select("*").order("created_at", { ascending: true }),
    supabase.from("players").select("status"),
  ]);

  // Ensure the singleton row exists (auto-create handled by GET API, but seed here for SSR)
  let state = stateRaw;
  if (!state) {
    const { data: created } = await supabase
      .from("auction_state")
      .insert({ status: "idle", current_player_id: null })
      .select("*, current_player:players(id, name, photo_url, role, base_points, status)")
      .single();
    state = created;
  }

  const counts = {
    pending: players?.filter((p) => p.status === "pending").length ?? 0,
    sold:    players?.filter((p) => p.status === "sold").length    ?? 0,
    unsold:  players?.filter((p) => p.status === "unsold").length  ?? 0,
  };

  return (
    <div className="p-8 flex flex-col gap-6">
      <div>
        <h1 className="font-display text-4xl tracking-wide" style={{ color: "var(--color-gold)" }}>
          AUCTION CONTROL
        </h1>
        <p className="mt-1 text-sm" style={{ color: "var(--color-text-muted)" }}>
          Manage the live auction — pick players, assign bids, track budgets
        </p>
      </div>

      {state ? (
        <AuctionControl
          initialState={state}
          initialTeams={teams ?? []}
          initialCounts={counts}
        />
      ) : (
        <p className="text-sm" style={{ color: "var(--color-error)" }}>
          Could not load auction state. Make sure the auction_state table has been set up in Supabase.
        </p>
      )}
    </div>
  );
}

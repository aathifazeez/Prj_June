import { getServerSupabase } from "@/lib/supabase/server";

export async function GET() {
  const supabase = getServerSupabase();

  const start = Date.now();
  const { data, error } = await supabase
    .from("auction_state")
    .select("id, status")
    .limit(1);

  const latencyMs = Date.now() - start;

  if (error) {
    return Response.json(
      { ok: false, error: error.message, latencyMs },
      { status: 503 }
    );
  }

  return Response.json({
    ok:       true,
    latencyMs,
    db:       "supabase",
    tables: {
      auction_state: data?.length ?? 0,
    },
  });
}

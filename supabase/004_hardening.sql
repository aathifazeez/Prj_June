-- ───────────────────────────────────────────────────────────────
-- Moon Night Auction — Hardening migration
-- Run this once in Supabase SQL Editor.
-- It is idempotent: safe to re-run.
-- ───────────────────────────────────────────────────────────────

-- 1) Clean up duplicate auction_state rows (keep most recently updated)
DELETE FROM public.auction_state
WHERE id NOT IN (
  SELECT id FROM public.auction_state
  ORDER BY updated_at DESC NULLS LAST, id ASC
  LIMIT 1
);

-- 2) Enforce singleton: at most ONE row in auction_state, forever
CREATE UNIQUE INDEX IF NOT EXISTS auction_state_singleton
ON public.auction_state ((true));

-- 3) Ensure realtime publication covers our tables.
--    These DO blocks are safe to re-run.
DO $$
BEGIN
  IF NOT EXISTS (
    SELECT 1 FROM pg_publication_tables
    WHERE pubname   = 'supabase_realtime'
      AND schemaname = 'public'
      AND tablename  = 'auction_state'
  ) THEN
    ALTER PUBLICATION supabase_realtime ADD TABLE public.auction_state;
  END IF;
END $$;

DO $$
BEGIN
  IF NOT EXISTS (
    SELECT 1 FROM pg_publication_tables
    WHERE pubname   = 'supabase_realtime'
      AND schemaname = 'public'
      AND tablename  = 'players'
  ) THEN
    ALTER PUBLICATION supabase_realtime ADD TABLE public.players;
  END IF;
END $$;

DO $$
BEGIN
  IF NOT EXISTS (
    SELECT 1 FROM pg_publication_tables
    WHERE pubname   = 'supabase_realtime'
      AND schemaname = 'public'
      AND tablename  = 'teams'
  ) THEN
    ALTER PUBLICATION supabase_realtime ADD TABLE public.teams;
  END IF;
END $$;

-- 4) Trigger to bump updated_at on every UPDATE of auction_state
--    (essential — realtime payload includes updated_at)
CREATE OR REPLACE FUNCTION public.set_updated_at()
RETURNS TRIGGER AS $$
BEGIN
  NEW.updated_at = now();
  RETURN NEW;
END;
$$ LANGUAGE plpgsql;

DROP TRIGGER IF EXISTS auction_state_set_updated_at ON public.auction_state;
CREATE TRIGGER auction_state_set_updated_at
BEFORE UPDATE ON public.auction_state
FOR EACH ROW EXECUTE FUNCTION public.set_updated_at();

-- 5) Sanity check (output rows to verify the migration succeeded)
SELECT
  (SELECT COUNT(*) FROM public.auction_state) AS auction_state_rows,
  (SELECT COUNT(*) FROM public.players)       AS players_rows,
  (SELECT COUNT(*) FROM public.teams)         AS teams_rows;

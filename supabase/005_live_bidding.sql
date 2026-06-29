-- ───────────────────────────────────────────────────────────────
-- Moon Night Auction — Live Bidding columns
-- Adds the fields needed to track the live bid ticker:
--   current_bid       : highest accepted bid amount (in points)
--   current_bid_team  : team that placed that bid (UUID FK, NULL = no bid yet)
--   next_min_bid      : pre-calculated floor for the next bid (per increment rules)
--
-- Run this once in the Supabase SQL Editor. It is idempotent — safe to re-run.
-- ───────────────────────────────────────────────────────────────

ALTER TABLE public.auction_state
  ADD COLUMN IF NOT EXISTS current_bid      integer DEFAULT 0,
  ADD COLUMN IF NOT EXISTS current_bid_team uuid REFERENCES public.teams(id) ON DELETE SET NULL,
  ADD COLUMN IF NOT EXISTS next_min_bid     integer DEFAULT 0;

-- Sanity check — should print the columns we just added
SELECT column_name, data_type, column_default
FROM   information_schema.columns
WHERE  table_schema = 'public'
  AND  table_name   = 'auction_state'
  AND  column_name IN ('current_bid', 'current_bid_team', 'next_min_bid')
ORDER  BY column_name;

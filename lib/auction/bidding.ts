/**
 * Bid increment rules from the client's rulebook.
 *
 * | Current Bid Range      | Minimum Increment |
 * | 500    – 1,000    pts  | +100   pts        |
 * | 1,100  – 3,000    pts  | +200   pts        |
 * | 3,200  – 6,000    pts  | +500   pts        |
 * | 6,500  – 20,000   pts  | +1,000 pts        |
 * | Above 20,000      pts  | +2,000 pts        |
 *
 * Used by BOTH the admin UI (to suggest the next bid) and the
 * /api/auction/bid route (to enforce the floor). Keep this file
 * as the single source of truth.
 */

export function getMinIncrement(currentBid: number): number {
  if (currentBid < 500)    return 0;     // below the base-price floor — no increment yet
  if (currentBid <= 1000)  return 100;
  if (currentBid <= 3000)  return 200;
  if (currentBid <= 6000)  return 500;
  if (currentBid <= 20000) return 1000;
  return 2000;
}

export function getNextMinBid(currentBid: number): number {
  return currentBid + getMinIncrement(currentBid);
}

export function isValidBid(currentBid: number, proposed: number): boolean {
  return Number.isFinite(proposed) && proposed >= getNextMinBid(currentBid);
}

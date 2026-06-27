export type PlayerRole = "batsman" | "bowler" | "allrounder" | "wicketkeeper";
export type PlayerStatus = "pending" | "sold" | "unsold";
export type AuctionStatus = "idle" | "rolling" | "bidding" | "sold" | "ended";

export interface Team {
  id: string;
  name: string;
  logo_url: string | null;
  color_hex: string;
  budget: number;
  budget_used: number;
  created_at: string;
}

export interface Player {
  id: string;
  name: string;
  photo_url: string | null;
  role: PlayerRole;
  base_points: number;
  status: PlayerStatus;
  team_id: string | null;
  sold_for: number | null;
  auction_order: number | null;
  created_at: string;
  team?: Team;
}

export interface AuctionState {
  id: string;
  status: AuctionStatus;
  current_player_id: string | null;
  updated_at: string;
  current_player?: Player;
}

export interface DashboardStats {
  totalPlayers: number;
  totalTeams: number;
  playersSold: number;
  playersUnsold: number;
  playersPending: number;
  totalBidValue: number;
}

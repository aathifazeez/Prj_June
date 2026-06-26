# APL Auction App

A real-time cricket auction web app built with React, Tailwind CSS, and Supabase.

## Features
- **Real-time Bidding**: Owners can place bids with sub-second latency.
- **Casino Shuffle Reveal**: An animated reveal for the next player on the block.
- **Dual Projector Screen**: A dedicated public screen showing live standings, current player, and ticker.
- **Auctioneer Console**: A robust dashboard to manage the queue, approve bids, and lock sales.

## Setup Instructions

1. **Create a Supabase Project**:
   - Go to [Supabase](https://supabase.com) and create a new project.
   
2. **Database Setup**:
   - Navigate to the **SQL Editor** in your Supabase dashboard.
   - Run the contents of `supabase/schema.sql` to create all tables and setup real-time.
   - Run the contents of `supabase/seed.sql` to populate the teams and initial players.
   
3. **Configure Environment Variables**:
   - The `.env.example` contains placeholders.
   - In AI Studio, open the Secrets panel.
   - Add `VITE_SUPABASE_URL` and set it to your project URL.
   - Add `VITE_SUPABASE_ANON_KEY` and set it to your anon key.

4. **Edge Functions (Optional but recommended)**:
   - For maximum security, deploy the edge functions located in `supabase/functions/`.
   - The current React code simulates these functions via direct Supabase client calls so the preview works seamlessly out of the box if you provide the keys.

## Pages
- `/join`: Login screen for team owners (use PINs like '1111', '2222').
- `/bid`: Mobile-first bidding interface for team owners.
- `/screen`: Widescreen projector view for the live audience.
- `/auctioneer`: Desktop admin control panel to manage the auction.

import React from "react";

export default function AuctioneerPage() {
  return (
    <div className="bg-surface-container-lowest text-on-surface h-screen w-screen overflow-hidden flex flex-col font-body-md select-none">
      {/* Header: War Room Status */}
      <header className="h-16 shrink-0 bg-surface-container-low border-b border-border-overlay px-6 flex items-center justify-between z-20">
        <div className="flex items-center gap-4">
          <div className="w-10 h-10 bg-error-container/20 text-error flex items-center justify-center rounded-xl border border-error/30">
            <span className="material-symbols-outlined text-2xl">
              admin_panel_settings
            </span>
          </div>
          <div className="flex flex-col">
            <span className="font-headline-lg uppercase text-lg leading-tight tracking-wider">
              Master Control
            </span>
            <span className="font-label-mono text-[10px] text-error uppercase tracking-widest flex items-center gap-1">
              <span className="w-1.5 h-1.5 rounded-full bg-error animate-pulse"></span>
              Live Session Active
            </span>
          </div>
        </div>

        <div className="flex items-center gap-4">
          <button className="bg-surface-container hover:bg-surface-container-high border border-border-overlay px-4 py-2 rounded-lg font-label-mono text-xs uppercase tracking-wider flex items-center gap-2 transition-colors">
            <span className="material-symbols-outlined text-sm">pause</span>
            Pause Auction
          </button>
          <button className="bg-surface-container hover:bg-surface-container-high border border-border-overlay px-4 py-2 rounded-lg font-label-mono text-xs uppercase tracking-wider flex items-center gap-2 transition-colors">
            <span className="material-symbols-outlined text-sm">undo</span>
            Undo Last Action
          </button>
        </div>
      </header>

      {/* Main Workspace */}
      <main className="flex-1 flex overflow-hidden relative z-10 p-6 gap-6">
        {/* Left Panel: Roster Management */}
        <aside className="w-[320px] shrink-0 flex flex-col gap-4">
          <div className="bg-surface-container rounded-2xl border border-border-overlay flex flex-col h-full overflow-hidden">
            <div className="p-4 border-b border-border-overlay bg-surface-container-low/50">
              <h2 className="font-label-mono text-xs uppercase tracking-[0.2em] text-on-surface-variant flex items-center justify-between">
                <div className="flex items-center gap-2">
                  <span className="material-symbols-outlined text-base">
                    group
                  </span>
                  Player Roster
                </div>
                <span className="text-primary-fixed">142 Left</span>
              </h2>

              <div className="mt-3 relative">
                <span className="material-symbols-outlined absolute left-3 top-1/2 -translate-y-1/2 text-on-surface-variant text-sm">
                  search
                </span>
                <input
                  type="text"
                  placeholder="SEARCH PLAYERS..."
                  className="w-full bg-surface-container-highest border border-border-overlay rounded-lg py-2 pl-9 pr-4 text-xs font-label-mono text-on-surface focus:outline-none focus:border-primary-fixed placeholder:text-on-surface-variant/50"
                />
              </div>
            </div>

            <div className="flex-1 overflow-y-auto custom-scrollbar flex flex-col divide-y divide-border-overlay">
              {/* Player Item (Next Up) */}
              <div className="p-4 hover:bg-surface-container-high cursor-pointer transition-colors relative">
                <div className="absolute left-0 top-0 bottom-0 w-1 bg-bid-glow"></div>
                <div className="flex justify-between items-start mb-1">
                  <span className="font-headline-md text-base uppercase text-white">
                    Shakib Al Hasan
                  </span>
                  <span className="font-label-mono text-[9px] text-bid-glow border border-bid-glow/30 px-1.5 py-0.5 rounded bg-bid-glow/10">
                    Next
                  </span>
                </div>
                <div className="flex justify-between items-center text-on-surface-variant">
                  <span className="font-label-mono text-[10px] uppercase">
                    All-Rounder
                  </span>
                  <span className="font-label-mono text-[10px] uppercase">
                    Base: 3,000
                  </span>
                </div>
              </div>

              {/* Player Item (Queued) */}
              <div className="p-4 hover:bg-surface-container-high cursor-pointer transition-colors opacity-70">
                <div className="flex justify-between items-start mb-1">
                  <span className="font-headline-md text-base uppercase text-on-surface">
                    Trent Boult
                  </span>
                  <span className="font-label-mono text-[9px] text-on-surface-variant">
                    Lot #044
                  </span>
                </div>
                <div className="flex justify-between items-center text-on-surface-variant">
                  <span className="font-label-mono text-[10px] uppercase">
                    Bowler
                  </span>
                  <span className="font-label-mono text-[10px] uppercase">
                    Base: 4,000
                  </span>
                </div>
              </div>

              {/* Player Item (Queued) */}
              <div className="p-4 hover:bg-surface-container-high cursor-pointer transition-colors opacity-70">
                <div className="flex justify-between items-start mb-1">
                  <span className="font-headline-md text-base uppercase text-on-surface">
                    Quinton de Kock
                  </span>
                  <span className="font-label-mono text-[9px] text-on-surface-variant">
                    Lot #045
                  </span>
                </div>
                <div className="flex justify-between items-center text-on-surface-variant">
                  <span className="font-label-mono text-[10px] uppercase">
                    Wicketkeeper
                  </span>
                  <span className="font-label-mono text-[10px] uppercase">
                    Base: 3,500
                  </span>
                </div>
              </div>
            </div>
          </div>
        </aside>

        {/* Center: Auction Control */}
        <section className="flex-1 flex flex-col gap-6">
          {/* Current Player Block */}
          <div className="bg-surface-container-low rounded-2xl border border-border-overlay p-6 flex gap-6 shadow-lg">
            {/* Mini Portrait */}
            <div className="w-32 h-40 bg-surface-container-highest rounded-xl border border-border-overlay flex items-center justify-center relative overflow-hidden shrink-0">
              <span className="material-symbols-outlined text-6xl text-on-surface-variant/20">
                person
              </span>
              <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent"></div>
              <span className="absolute bottom-2 left-0 right-0 text-center font-label-mono text-[10px] uppercase tracking-widest text-error font-bold">
                On The Block
              </span>
            </div>

            {/* Details */}
            <div className="flex-1 flex flex-col justify-center">
              <span className="font-label-mono text-[10px] text-primary-fixed uppercase tracking-[0.3em] mb-1">
                Lot #042
              </span>
              <h2 className="font-headline-lg text-5xl uppercase tracking-tighter leading-none text-white mb-4">
                Rashid Khan
              </h2>

              <div className="flex gap-8">
                <div className="flex flex-col">
                  <span className="font-label-mono text-[9px] text-on-surface-variant uppercase tracking-widest">
                    Role
                  </span>
                  <span className="font-headline-md text-lg">All-Rounder</span>
                </div>
                <div className="flex flex-col">
                  <span className="font-label-mono text-[9px] text-on-surface-variant uppercase tracking-widest">
                    Base Price
                  </span>
                  <span className="font-headline-md text-lg text-white">
                    2,000 CR
                  </span>
                </div>
                <div className="flex flex-col">
                  <span className="font-label-mono text-[9px] text-on-surface-variant uppercase tracking-widest">
                    Country
                  </span>
                  <span className="font-headline-md text-lg">Afghanistan</span>
                </div>
              </div>
            </div>
          </div>

          {/* Bidding Action Area */}
          <div className="flex-1 flex gap-6">
            {/* Manual Bid Entry / Overrides */}
            <div className="w-1/3 bg-surface-container rounded-2xl border border-border-overlay flex flex-col p-6 gap-6">
              <div>
                <span className="font-label-mono text-sm text-bid-glow uppercase tracking-[0.2em] font-bold block mb-4">
                  Current High Bid
                </span>
                <div className="font-headline-lg text-6xl text-white tracking-tighter tabular-nums mb-2">
                  4,500
                </div>
                <div className="bg-surface-container-highest border border-border-overlay px-4 py-2 rounded-lg inline-flex items-center gap-2">
                  <span className="w-2 h-2 rounded-full bg-error animate-pulse"></span>
                  <span className="font-label-mono text-[10px] uppercase tracking-widest">
                    Galle Gladiators
                  </span>
                </div>
              </div>

              <div className="mt-auto flex flex-col gap-3">
                <label className="font-label-mono text-[10px] text-on-surface-variant uppercase tracking-widest">
                  Manual Bid Override
                </label>
                <div className="flex gap-2">
                  <select className="flex-1 bg-surface-container-highest border border-border-overlay rounded-lg px-3 text-xs font-label-mono text-on-surface focus:outline-none focus:border-primary-fixed">
                    <option>Select Team</option>
                    <option>Galle Gladiators</option>
                    <option>Colombo Kings</option>
                  </select>
                  <input
                    type="number"
                    placeholder="Amount"
                    className="w-24 bg-surface-container-highest border border-border-overlay rounded-lg px-3 text-xs font-label-mono text-on-surface focus:outline-none focus:border-primary-fixed tabular-nums"
                  />
                </div>
                <button className="w-full bg-surface-container-highest hover:bg-surface-container-highest/80 border border-border-overlay py-3 rounded-lg font-label-mono text-xs uppercase tracking-widest transition-colors">
                  Submit Manual Bid
                </button>
              </div>
            </div>

            {/* Primary Controls */}
            <div className="flex-1 grid grid-cols-2 grid-rows-2 gap-4">
              <button className="bg-surface-container hover:bg-surface-container-high border border-border-overlay rounded-2xl p-6 flex flex-col items-center justify-center gap-3 transition-colors group">
                <div className="w-16 h-16 rounded-full bg-surface-container-highest border border-border-overlay flex items-center justify-center group-hover:bg-primary/10 group-hover:text-primary-fixed group-hover:border-primary/30 transition-all">
                  <span className="material-symbols-outlined text-3xl">
                    sell
                  </span>
                </div>
                <span className="font-headline-md text-xl uppercase tracking-widest">
                  Sell Player
                </span>
                <span className="font-label-mono text-[10px] text-on-surface-variant text-center px-4">
                  Closes bidding and assigns player to highest bidder
                </span>
              </button>

              <button className="bg-surface-container hover:bg-surface-container-high border border-border-overlay rounded-2xl p-6 flex flex-col items-center justify-center gap-3 transition-colors group">
                <div className="w-16 h-16 rounded-full bg-surface-container-highest border border-border-overlay flex items-center justify-center group-hover:bg-error/10 group-hover:text-error group-hover:border-error/30 transition-all">
                  <span className="material-symbols-outlined text-3xl">
                    block
                  </span>
                </div>
                <span className="font-headline-md text-xl uppercase tracking-widest">
                  Unsold
                </span>
                <span className="font-label-mono text-[10px] text-on-surface-variant text-center px-4">
                  Marks player as unsold and moves to next
                </span>
              </button>

              {/* Call Warning Buttons */}
              <button className="bg-surface-container hover:bg-surface-container-high border border-border-overlay rounded-2xl p-6 flex flex-col items-center justify-center gap-2 transition-colors">
                <span className="font-headline-lg text-4xl text-on-surface-variant">
                  I
                </span>
                <span className="font-label-mono text-[10px] uppercase tracking-widest">
                  Fair Warning
                </span>
              </button>

              <button className="bg-surface-container hover:bg-surface-container-high border border-border-overlay rounded-2xl p-6 flex flex-col items-center justify-center gap-2 transition-colors">
                <span className="font-headline-lg text-4xl text-on-surface-variant">
                  II
                </span>
                <span className="font-label-mono text-[10px] uppercase tracking-widest">
                  Final Call
                </span>
              </button>
            </div>
          </div>
        </section>
      </main>

      <style
        dangerouslySetInnerHTML={{
          __html: `
        /* Custom scrollbar for webkit */
        .custom-scrollbar::-webkit-scrollbar {
            width: 4px;
        }
        .custom-scrollbar::-webkit-scrollbar-track {
            background: transparent;
        }
        .custom-scrollbar::-webkit-scrollbar-thumb {
            background-color: var(--color-border-overlay);
            border-radius: 4px;
        }
        .custom-scrollbar::-webkit-scrollbar-thumb:hover {
            background-color: rgba(255,255,255,0.2);
        }
      `,
        }}
      />
    </div>
  );
}

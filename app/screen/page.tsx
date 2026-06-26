import React from "react";

export default function ScreenPage() {
  return (
    <div className="bg-surface-container-lowest text-on-surface h-screen w-screen overflow-hidden flex flex-col font-body-md select-none">
      {/* Ambient Background Effects */}
      <div className="absolute inset-0 pointer-events-none overflow-hidden opacity-30 mix-blend-screen z-0">
        <div className="absolute top-[-20%] left-[-10%] w-[800px] h-[800px] bg-primary/20 rounded-full blur-[150px]"></div>
        <div className="absolute bottom-[-20%] right-[-10%] w-[800px] h-[800px] bg-error/10 rounded-full blur-[150px]"></div>
      </div>

      {/* Header: Broadcast Info */}
      <header className="h-24 shrink-0 bg-surface/80 backdrop-blur-2xl border-b border-border-overlay px-12 flex items-center justify-between relative z-20">
        <div className="flex items-center gap-6">
          <div className="w-16 h-16 bg-surface-container-highest rounded-2xl flex items-center justify-center border border-border-overlay shadow-lg">
            <span className="material-symbols-outlined text-bid-glow text-4xl">
              gavel
            </span>
          </div>
          <div className="flex flex-col">
            <h1 className="font-headline-lg text-4xl uppercase tracking-tighter leading-none text-white drop-shadow-md">
              APL Auction 2024
            </h1>
            <div className="flex items-center gap-4 mt-1">
              <span className="font-label-mono text-xs text-on-surface-variant uppercase tracking-[0.3em]">
                Live Broadcast Session
              </span>
              <span className="w-1 h-1 rounded-full bg-border-overlay"></span>
              <span className="font-label-mono text-xs text-primary-fixed uppercase tracking-widest">
                Akkaraipattu
              </span>
            </div>
          </div>
        </div>

        <div className="flex items-center gap-12">
          {/* Global Purse */}
          <div className="flex flex-col items-end">
            <span className="font-label-mono text-[10px] text-on-surface-variant uppercase tracking-widest">
              Base Purse Cap
            </span>
            <div className="flex items-baseline gap-2">
              <span className="font-headline-lg text-3xl text-white">
                50,000
              </span>
              <span className="font-label-mono text-xs text-on-surface-variant">
                CR
              </span>
            </div>
          </div>

          <div className="w-px h-12 bg-border-overlay"></div>

          {/* Live Status */}
          <div className="bg-error-container/20 border border-error/30 px-6 py-3 rounded-full flex items-center gap-3 shadow-[0_0_20px_rgba(255,180,171,0.15)]">
            <span className="w-3 h-3 rounded-full bg-error animate-pulse shadow-[0_0_10px_rgba(255,180,171,0.8)]"></span>
            <span className="font-label-mono text-error font-bold tracking-[0.2em] text-sm uppercase">
              Live
            </span>
          </div>
        </div>
      </header>

      {/* Main Grid Layout */}
      <main className="flex-1 flex overflow-hidden relative z-10 p-8 gap-8">
        {/* Left Panel: Standing / Roster Status */}
        <aside className="w-[380px] shrink-0 flex flex-col gap-4">
          <div className="bg-surface/60 backdrop-blur-xl border border-border-overlay rounded-3xl flex flex-col h-full overflow-hidden shadow-2xl">
            <div className="p-6 border-b border-border-overlay bg-surface-container-low/50">
              <h2 className="font-label-mono text-sm uppercase tracking-[0.2em] text-on-surface-variant flex items-center gap-2">
                <span className="material-symbols-outlined text-lg">
                  format_list_numbered
                </span>
                Franchise Standings
              </h2>
            </div>

            <div className="flex-1 overflow-y-auto p-4 flex flex-col gap-3 custom-scrollbar">
              {/* Team Card (Active/Leading) */}
              <div className="p-5 rounded-2xl border border-bid-glow bg-bid-glow/5 relative overflow-hidden">
                <div className="absolute left-0 top-0 bottom-0 w-1.5 bg-bid-glow shadow-[0_0_10px_rgba(228,93,53,0.8)]"></div>

                <div className="flex justify-between items-start mb-3 pl-2">
                  <h3 className="font-headline-md text-xl uppercase tracking-wider text-white">
                    Galle Gladiators
                  </h3>
                  <span className="font-label-mono text-[10px] text-bid-glow tracking-widest px-2 py-1 bg-bid-glow/10 rounded border border-bid-glow/20">
                    Active Bid
                  </span>
                </div>
                <div className="flex justify-between items-end pl-2">
                  <div className="flex flex-col">
                    <span className="font-label-mono text-[9px] text-on-surface-variant uppercase tracking-widest">
                      Remaining
                    </span>
                    <span className="font-headline-md text-2xl text-primary-fixed">
                      15,000{" "}
                      <span className="text-xs text-on-surface-variant">
                        CR
                      </span>
                    </span>
                  </div>
                  <div className="flex flex-col items-end">
                    <span className="font-label-mono text-[9px] text-on-surface-variant uppercase tracking-widest">
                      Squad
                    </span>
                    <span className="font-headline-md text-xl">12/15</span>
                  </div>
                </div>
              </div>

              {/* Team Card (Normal) */}
              <div className="p-5 rounded-2xl border border-border-overlay bg-surface-container/50">
                <div className="flex justify-between items-start mb-3">
                  <h3 className="font-headline-md text-xl uppercase tracking-wider text-on-surface">
                    Colombo Kings
                  </h3>
                  <span className="font-label-mono text-[10px] text-on-surface-variant tracking-widest px-2 py-1 bg-surface-container-high rounded border border-border-overlay">
                    Waiting
                  </span>
                </div>
                <div className="flex justify-between items-end">
                  <div className="flex flex-col">
                    <span className="font-label-mono text-[9px] text-on-surface-variant uppercase tracking-widest">
                      Remaining
                    </span>
                    <span className="font-headline-md text-2xl">
                      28,500{" "}
                      <span className="text-xs text-on-surface-variant">
                        CR
                      </span>
                    </span>
                  </div>
                  <div className="flex flex-col items-end">
                    <span className="font-label-mono text-[9px] text-on-surface-variant uppercase tracking-widest">
                      Squad
                    </span>
                    <span className="font-headline-md text-xl">8/15</span>
                  </div>
                </div>
              </div>

              {/* Team Card (Normal) */}
              <div className="p-5 rounded-2xl border border-border-overlay bg-surface-container/50">
                <div className="flex justify-between items-start mb-3">
                  <h3 className="font-headline-md text-xl uppercase tracking-wider text-on-surface">
                    Jaffna Stallions
                  </h3>
                  <span className="font-label-mono text-[10px] text-on-surface-variant tracking-widest px-2 py-1 bg-surface-container-high rounded border border-border-overlay">
                    Waiting
                  </span>
                </div>
                <div className="flex justify-between items-end">
                  <div className="flex flex-col">
                    <span className="font-label-mono text-[9px] text-on-surface-variant uppercase tracking-widest">
                      Remaining
                    </span>
                    <span className="font-headline-md text-2xl">
                      41,200{" "}
                      <span className="text-xs text-on-surface-variant">
                        CR
                      </span>
                    </span>
                  </div>
                  <div className="flex flex-col items-end">
                    <span className="font-label-mono text-[9px] text-on-surface-variant uppercase tracking-widest">
                      Squad
                    </span>
                    <span className="font-headline-md text-xl">3/15</span>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </aside>

        {/* Center Stage: The Player */}
        <section className="flex-1 flex flex-col items-center justify-center relative">
          {/* Spotlight effect */}
          <div className="absolute top-[-10%] w-[600px] h-[800px] bg-white/5 blur-[100px] rounded-full pointer-events-none transform -rotate-12"></div>

          <div className="w-full max-w-[560px] flex flex-col items-center z-10 relative">
            {/* Status Tag */}
            <div className="bg-error text-on-error px-6 py-2 rounded-full font-label-mono text-xs uppercase tracking-[0.3em] font-bold shadow-[0_0_20px_rgba(255,180,171,0.4)] mb-8 transform -translate-y-4">
              On The Block
            </div>

            {/* Player Card/Portrait (Highly Stylized) */}
            <div className="w-full aspect-[3/4] rounded-[2.5rem] bg-surface-container-high border-2 border-border-overlay overflow-hidden relative shadow-2xl group">
              <div className="absolute inset-0 bg-gradient-to-br from-surface-container-lowest to-surface-container"></div>

              <div className="absolute inset-0 flex items-center justify-center opacity-60 mix-blend-luminosity grayscale contrast-125">
                <span className="material-symbols-outlined text-[300px] text-on-surface-variant/20">
                  person
                </span>
              </div>

              <div className="absolute inset-0 bg-gradient-to-t from-black via-black/20 to-transparent"></div>
              <div className="absolute inset-0 bg-gradient-to-b from-black/40 via-transparent to-transparent"></div>

              {/* Player Details Overlay */}
              <div className="absolute bottom-0 inset-x-0 p-10 flex flex-col items-center text-center">
                <span className="font-label-mono text-sm text-primary-fixed uppercase tracking-[0.4em] mb-2 shadow-black drop-shadow-md">
                  Lot #042
                </span>
                <h2 className="font-headline-lg text-[72px] uppercase tracking-tighter leading-[0.85] text-white drop-shadow-xl mb-6 text-shadow-glow">
                  Rashid Khan
                </h2>

                <div className="flex items-center justify-center gap-4 bg-black/40 backdrop-blur-md px-6 py-3 rounded-2xl border border-white/10">
                  <span className="font-headline-md text-xl text-surface-tint tracking-widest uppercase">
                    All-Rounder
                  </span>
                  <span className="w-1.5 h-1.5 rounded-full bg-border-overlay"></span>
                  <span className="font-headline-md text-xl text-surface-tint tracking-widest uppercase">
                    Afghanistan
                  </span>
                </div>
              </div>
            </div>

            {/* Core Stats Board */}
            <div className="w-full grid grid-cols-3 gap-4 mt-8">
              <div className="bg-surface/80 backdrop-blur-md border border-border-overlay rounded-2xl p-6 text-center shadow-lg">
                <p className="font-label-mono text-[10px] text-on-surface-variant uppercase tracking-[0.2em] mb-2">
                  Base Price
                </p>
                <p className="font-headline-lg text-3xl text-white">2,000</p>
              </div>
              <div className="bg-surface/80 backdrop-blur-md border border-border-overlay rounded-2xl p-6 text-center shadow-lg">
                <p className="font-label-mono text-[10px] text-on-surface-variant uppercase tracking-[0.2em] mb-2">
                  T20I SR
                </p>
                <p className="font-headline-lg text-3xl text-white">137.4</p>
              </div>
              <div className="bg-surface/80 backdrop-blur-md border border-border-overlay rounded-2xl p-6 text-center shadow-lg">
                <p className="font-label-mono text-[10px] text-on-surface-variant uppercase tracking-[0.2em] mb-2">
                  Econ
                </p>
                <p className="font-headline-lg text-3xl text-white">6.18</p>
              </div>
            </div>
          </div>
        </section>

        {/* Right Panel: Bidding Action */}
        <aside className="w-[420px] shrink-0 flex flex-col gap-6">
          {/* Current High Bid */}
          <div className="bg-surface/80 backdrop-blur-xl border border-border-overlay rounded-3xl p-10 flex flex-col items-center justify-center text-center relative overflow-hidden shadow-2xl shrink-0 h-[360px]">
            <span className="material-symbols-outlined absolute -top-12 -right-12 text-[250px] text-on-surface-variant/5 rotate-[-15deg] pointer-events-none">
              gavel
            </span>

            <div className="relative z-10 flex flex-col items-center">
              <span className="font-label-mono text-sm text-bid-glow uppercase tracking-[0.3em] font-bold mb-6">
                Current High Bid
              </span>

              <div className="font-headline-lg text-[100px] leading-none text-white tracking-tighter tabular-nums drop-shadow-[0_0_30px_rgba(255,255,255,0.2)] mb-8">
                4,500
              </div>

              <div className="bg-surface-container-highest/80 border border-border-overlay rounded-2xl px-6 py-4 flex flex-col items-center gap-2 w-full max-w-[280px]">
                <span className="font-label-mono text-[10px] text-on-surface-variant uppercase tracking-[0.2em]">
                  Leading Franchise
                </span>
                <span className="font-headline-md text-2xl uppercase tracking-wider text-white text-center leading-tight">
                  Galle Gladiators
                </span>
              </div>
            </div>
          </div>

          {/* Bid History Log */}
          <div className="bg-surface/60 backdrop-blur-xl border border-border-overlay rounded-3xl flex-1 flex flex-col overflow-hidden shadow-2xl">
            <div className="p-6 border-b border-border-overlay bg-surface-container-low/50 flex justify-between items-center">
              <h2 className="font-label-mono text-sm uppercase tracking-[0.2em] text-on-surface-variant flex items-center gap-2">
                <span className="material-symbols-outlined text-lg">
                  history
                </span>
                Bid History
              </h2>
              <span className="w-2 h-2 rounded-full bg-bid-glow animate-pulse"></span>
            </div>

            <div className="flex-1 overflow-y-auto p-3 flex flex-col gap-2 custom-scrollbar">
              <div className="p-4 rounded-xl bg-bid-glow/10 border border-bid-glow/30 flex justify-between items-center">
                <div className="flex items-center gap-4">
                  <span className="font-headline-md text-xl font-bold text-bid-glow uppercase">
                    GG
                  </span>
                  <span className="font-headline-lg text-2xl text-white">
                    4,500
                  </span>
                </div>
                <span className="font-label-mono text-[10px] text-on-surface-variant">
                  Just now
                </span>
              </div>

              <div className="p-4 rounded-xl bg-surface-container hover:bg-surface-container-high transition-colors flex justify-between items-center">
                <div className="flex items-center gap-4">
                  <span className="font-headline-md text-xl text-on-surface-variant uppercase">
                    CK
                  </span>
                  <span className="font-headline-lg text-2xl text-on-surface">
                    4,000
                  </span>
                </div>
                <span className="font-label-mono text-[10px] text-on-surface-variant/50">
                  12s ago
                </span>
              </div>

              <div className="p-4 rounded-xl bg-surface-container hover:bg-surface-container-high transition-colors flex justify-between items-center">
                <div className="flex items-center gap-4">
                  <span className="font-headline-md text-xl text-on-surface-variant uppercase">
                    JS
                  </span>
                  <span className="font-headline-lg text-2xl text-on-surface">
                    3,500
                  </span>
                </div>
                <span className="font-label-mono text-[10px] text-on-surface-variant/50">
                  28s ago
                </span>
              </div>
              <div className="p-4 rounded-xl bg-surface-container hover:bg-surface-container-high transition-colors flex justify-between items-center">
                <div className="flex items-center gap-4">
                  <span className="font-headline-md text-xl text-on-surface-variant uppercase">
                    GG
                  </span>
                  <span className="font-headline-lg text-2xl text-on-surface">
                    3,000
                  </span>
                </div>
                <span className="font-label-mono text-[10px] text-on-surface-variant/50">
                  45s ago
                </span>
              </div>
              <div className="p-4 rounded-xl bg-surface-container-low flex justify-between items-center border border-dashed border-border-overlay">
                <div className="flex items-center gap-4">
                  <span className="font-headline-md text-sm text-on-surface-variant uppercase">
                    Base Price
                  </span>
                  <span className="font-headline-lg text-xl text-on-surface-variant">
                    2,000
                  </span>
                </div>
                <span className="font-label-mono text-[10px] text-on-surface-variant/50">
                  Start
                </span>
              </div>
            </div>
          </div>
        </aside>
      </main>

      {/* Bottom Ticker */}
      <footer className="h-16 shrink-0 bg-primary-fixed text-on-primary-fixed flex items-center relative z-20 overflow-hidden shadow-[0_-10px_30px_rgba(218,226,253,0.1)]">
        <div className="absolute left-0 top-0 bottom-0 bg-on-primary-fixed text-primary-fixed flex items-center px-8 z-10 border-r border-border-overlay shadow-[10px_0_20px_rgba(0,0,0,0.5)]">
          <span className="material-symbols-outlined mr-3">history_edu</span>
          <span className="font-headline-md text-lg uppercase tracking-widest font-bold whitespace-nowrap">
            Recently Sold
          </span>
          <div className="absolute right-0 top-0 bottom-0 w-12 bg-gradient-to-r from-on-primary-fixed to-transparent translate-x-full"></div>
        </div>

        <div className="flex-1 flex overflow-hidden h-full">
          <div className="flex items-center gap-16 whitespace-nowrap px-16 ml-[300px]">
            <div className="flex items-center gap-4">
              <span className="font-headline-md text-xl font-bold uppercase">
                Virat Kohli
              </span>
              <span className="font-headline-lg text-2xl font-black">
                20,500
              </span>
              <span className="font-label-mono text-[10px] uppercase font-bold tracking-widest opacity-60">
                To
              </span>
              <span className="font-headline-md text-xl font-bold uppercase">
                Maruthamunai Marvels
              </span>
            </div>

            <span className="w-2 h-2 rounded-full bg-on-primary-fixed/30"></span>

            <div className="flex items-center gap-4 opacity-70">
              <span className="font-headline-md text-xl font-bold uppercase">
                Mitchell Starc
              </span>
              <span className="font-headline-lg text-2xl font-black">
                24,750
              </span>
              <span className="font-label-mono text-[10px] uppercase font-bold tracking-widest opacity-60">
                To
              </span>
              <span className="font-headline-md text-xl font-bold uppercase">
                Colombo Kings
              </span>
            </div>

            <span className="w-2 h-2 rounded-full bg-on-primary-fixed/30"></span>

            <div className="flex items-center gap-4 opacity-50">
              <span className="font-headline-md text-xl font-bold uppercase">
                Babar Azam
              </span>
              <span className="font-headline-lg text-2xl font-black">
                18,000
              </span>
              <span className="font-label-mono text-[10px] uppercase font-bold tracking-widest opacity-60">
                To
              </span>
              <span className="font-headline-md text-xl font-bold uppercase">
                Jaffna Stallions
              </span>
            </div>
          </div>
        </div>
      </footer>

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

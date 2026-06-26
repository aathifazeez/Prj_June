import React from "react";
import Link from "next/link";

export default function AdminPage() {
  return (
    <div className="bg-surface-container-lowest text-on-surface min-h-screen w-screen flex flex-col font-body-md select-none">
      {/* Header */}
      <header className="h-16 shrink-0 bg-surface-container-low border-b border-border-overlay px-6 flex items-center justify-between z-20">
        <div className="flex items-center gap-4">
          <div className="w-10 h-10 bg-primary-container/20 text-primary-fixed flex items-center justify-center rounded-xl border border-primary-fixed/30">
            <span className="material-symbols-outlined text-2xl">settings</span>
          </div>
          <div className="flex flex-col">
            <span className="font-headline-lg uppercase text-lg leading-tight tracking-wider">
              System Configuration
            </span>
            <span className="font-label-mono text-[10px] text-on-surface-variant uppercase tracking-widest">
              Pre-Auction Setup
            </span>
          </div>
        </div>

        <div className="flex items-center gap-4">
          <Link
            href="/auctioneer"
            className="bg-bid-glow hover:bg-bid-glow/90 text-surface-container-lowest border border-bid-glow px-6 py-2 rounded-lg font-label-mono text-xs uppercase tracking-wider flex items-center gap-2 transition-colors font-bold shadow-[0_0_15px_rgba(228,93,53,0.3)]"
          >
            <span className="material-symbols-outlined text-sm">
              play_arrow
            </span>
            Start Auction
          </Link>
        </div>
      </header>

      {/* Main Workspace */}
      <main className="flex-1 flex flex-col p-6 max-w-7xl mx-auto w-full gap-8">
        {/* Tabs */}
        <div className="flex gap-4 border-b border-border-overlay pb-px">
          <button className="px-4 py-2 border-b-2 border-primary-fixed text-primary-fixed font-label-mono text-xs uppercase tracking-widest font-bold">
            Teams (3/8)
          </button>
          <button className="px-4 py-2 border-b-2 border-transparent text-on-surface-variant hover:text-on-surface font-label-mono text-xs uppercase tracking-widest transition-colors">
            Players (142)
          </button>
          <button className="px-4 py-2 border-b-2 border-transparent text-on-surface-variant hover:text-on-surface font-label-mono text-xs uppercase tracking-widest transition-colors">
            Auction Rules
          </button>
        </div>

        {/* Tab Content: Teams */}
        <div className="flex flex-col gap-6">
          <div className="flex justify-between items-center">
            <h2 className="font-headline-md text-2xl uppercase tracking-wider">
              Franchise Management
            </h2>
            <button className="bg-surface-container hover:bg-surface-container-high border border-border-overlay px-4 py-2 rounded-lg font-label-mono text-xs uppercase tracking-wider flex items-center gap-2 transition-colors">
              <span className="material-symbols-outlined text-sm">add</span>
              Add Team
            </button>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {/* Team Card */}
            <div className="bg-surface-container-low border border-border-overlay rounded-2xl p-6 flex flex-col gap-4 relative overflow-hidden group">
              <div className="flex justify-between items-start">
                <div className="flex items-center gap-4">
                  <div className="w-12 h-12 rounded-full bg-primary-container text-on-primary-container flex items-center justify-center font-headline-md text-xl border border-border-overlay">
                    GG
                  </div>
                  <div>
                    <h3 className="font-headline-md text-lg uppercase tracking-wider">
                      Galle Gladiators
                    </h3>
                    <span className="font-label-mono text-[10px] text-on-surface-variant uppercase tracking-widest">
                      Owner: Nadeem
                    </span>
                  </div>
                </div>
                <div className="flex gap-2 opacity-0 group-hover:opacity-100 transition-opacity">
                  <button className="text-on-surface-variant hover:text-white transition-colors">
                    <span className="material-symbols-outlined text-sm">
                      edit
                    </span>
                  </button>
                  <button className="text-error hover:text-error/80 transition-colors">
                    <span className="material-symbols-outlined text-sm">
                      delete
                    </span>
                  </button>
                </div>
              </div>
              <div className="flex justify-between items-center bg-surface-container px-4 py-2 rounded-lg border border-border-overlay">
                <span className="font-label-mono text-[10px] text-on-surface-variant uppercase tracking-widest">
                  Owner PIN
                </span>
                <span className="font-label-mono text-sm tracking-[0.2em]">
                  ••••
                </span>
              </div>
            </div>

            {/* Team Card */}
            <div className="bg-surface-container-low border border-border-overlay rounded-2xl p-6 flex flex-col gap-4 relative overflow-hidden group">
              <div className="flex justify-between items-start">
                <div className="flex items-center gap-4">
                  <div className="w-12 h-12 rounded-full bg-surface-container-high text-on-surface flex items-center justify-center font-headline-md text-xl border border-border-overlay">
                    CK
                  </div>
                  <div>
                    <h3 className="font-headline-md text-lg uppercase tracking-wider">
                      Colombo Kings
                    </h3>
                    <span className="font-label-mono text-[10px] text-on-surface-variant uppercase tracking-widest">
                      Owner: Rizwan
                    </span>
                  </div>
                </div>
                <div className="flex gap-2 opacity-0 group-hover:opacity-100 transition-opacity">
                  <button className="text-on-surface-variant hover:text-white transition-colors">
                    <span className="material-symbols-outlined text-sm">
                      edit
                    </span>
                  </button>
                  <button className="text-error hover:text-error/80 transition-colors">
                    <span className="material-symbols-outlined text-sm">
                      delete
                    </span>
                  </button>
                </div>
              </div>
              <div className="flex justify-between items-center bg-surface-container px-4 py-2 rounded-lg border border-border-overlay">
                <span className="font-label-mono text-[10px] text-on-surface-variant uppercase tracking-widest">
                  Owner PIN
                </span>
                <span className="font-label-mono text-sm tracking-[0.2em]">
                  ••••
                </span>
              </div>
            </div>

            {/* Add Team Placeholder */}
            <button className="bg-surface-container-lowest border border-dashed border-border-overlay hover:border-primary-fixed/50 hover:bg-surface-container-lowest/80 rounded-2xl p-6 flex flex-col items-center justify-center gap-3 transition-colors min-h-[160px]">
              <div className="w-12 h-12 rounded-full bg-surface-container border border-border-overlay flex items-center justify-center text-on-surface-variant">
                <span className="material-symbols-outlined text-2xl">add</span>
              </div>
              <span className="font-label-mono text-[10px] text-on-surface-variant uppercase tracking-widest">
                Create New Franchise
              </span>
            </button>
          </div>
        </div>
      </main>
    </div>
  );
}

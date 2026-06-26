"use client";
import React, { useState } from "react";
import MobileOnlyWrapper from "@/components/MobileOnlyWrapper";
import BottomNavBar from "@/components/BottomNavBar";
import Image from "next/image";

// ── style tokens ─────────────────────────────────────────────────────────────
const BG           = "#101415";
const CARD_BG      = "rgba(16, 20, 21, 0.6)";
const CARD_BORDER  = "1px solid rgba(255, 255, 255, 0.1)";
const ORANGE       = "#e45d35";
const ERROR        = "#ffb4ab";
const TEXT_WHITE   = "#e0e3e4";
const TEXT_DIM     = "#c6c6cd";
const TEXT_MUTED   = "rgba(198,198,205,0.6)";
const TEXT_BLUE    = "#dae2fd";
const TEXT_TERT    = "#d8e2ff";
const SURFACE_HIGH = "#272b2c";
const SURFACE_LOW  = "#181c1d";
const OUTLINE_VAR  = "#45464d";

// ── types ────────────────────────────────────────────────────────────────────
type Tab = "myBids" | "global";

// ── data ─────────────────────────────────────────────────────────────────────
const events = [
  {
    type: "BOUGHT",
    dot: TEXT_BLUE,
    dotGlow: "0 0 8px rgba(218,226,253,0.5)",
    name: "Rashid Khan",
    sub: "All-Rounder • Marquee",
    price: "14.50 CR",
    time: "2m ago",
    img: "https://lh3.googleusercontent.com/aida-public/AB6AXuBMTENxyIYrQ4WwzUvomiFMu9uzLHvXl_2a5OMcb3HmlYIKmGuOSzrINBjPxg1A7R4Yg5dva4TA3Oy5R3SduV758v7F9bqt6FuQGI0eYQs1Y8CPoIE0vHqYcwhV6miB-gV54nmIymBIKB8bSQZDc9RXix8Muz6FkoCaNeHcneqOnKmuSCY8dQtHiKYi-loJQ7Z4SpEZGJwtOR809zkU-CSplY21kEX5gh-MCyLTmfqDyB-NDVtekMVwsdma2psRF0dbRW621RwgB9I",
  },
  {
    type: "OUTBID",
    dot: ORANGE,
    dotGlow: undefined,
    name: "Virat Kohli",
    sub: "Your bid of 11.00 CR was topped",
    price: "11.25 CR",
    time: "12m ago",
  },
  {
    type: "UNSOLD",
    dot: "#c6c6cd",
    dotGlow: undefined,
    name: "David Warner",
    sub: "Base Price: 2.00 CR",
    price: "—",
    time: "24m ago",
  },
  {
    type: "BIDDING WAR",
    dot: "rgba(218,226,253,0.4)",
    dotGlow: undefined,
    name: "Ben Stokes",
    sub: "Titan Kings vs. Royal Blasters",
    price: "9.75 CR",
    time: "Just Now",
    pricePulse: true,
  },
  {
    type: "WITHDRAWN",
    dot: ERROR,
    dotGlow: undefined,
    name: "Mitchell Starc",
    sub: "Player opted out mid-auction",
    price: "—",
    time: "1h ago",
  },
];

// ── component ─────────────────────────────────────────────────────────────────
export default function HistoryPage() {
  const [activeTab, setActiveTab] = useState<Tab>("myBids");

  return (
    <MobileOnlyWrapper>
      <div style={{ background: BG, color: TEXT_WHITE, minHeight: "100vh", fontFamily: "'Inter', sans-serif" }}>

        {/* ── Top App Bar ── */}
        <header style={{
          position: "sticky", top: 0, zIndex: 50,
          background: BG,
          borderBottom: `1px solid ${OUTLINE_VAR}`,
          display: "flex", alignItems: "center", justifyContent: "space-between",
          padding: "16px",
        }}>
          <span style={{
            fontFamily: "'Archivo Narrow', sans-serif",
            fontSize: 28, fontWeight: 700, color: TEXT_BLUE,
            letterSpacing: "-0.5px", textTransform: "uppercase",
          }}>APL AUCTION</span>
          <div style={{ display: "flex", gap: 16 }}>
            {["notifications", "settings"].map((icon) => (
              <span key={icon} className="material-symbols-outlined"
                style={{ color: TEXT_DIM, fontSize: 24, cursor: "pointer" }}>{icon}</span>
            ))}
          </div>
        </header>

        {/* ── Main ── */}
        <main style={{ padding: "24px 16px 100px", maxWidth: 512, margin: "0 auto" }}>

          {/* ── Screen Title ── */}
          <div style={{ display: "flex", alignItems: "center", justifyContent: "space-between", marginBottom: 24 }}>
            <div>
              <h1 style={{
                fontFamily: "'Archivo Narrow', sans-serif",
                fontSize: 24, fontWeight: 600, color: TEXT_WHITE,
                letterSpacing: "-0.2px", textTransform: "uppercase", margin: 0,
              }}>AUCTION HISTORY</h1>
              <p style={{
                fontSize: 10, fontWeight: 500, letterSpacing: "0.1em",
                textTransform: "uppercase", color: TEXT_DIM,
                marginTop: 4, marginBottom: 0,
              }}>Live Activity Log</p>
            </div>
            {/* Live pill */}
            <div style={{
              display: "flex", alignItems: "center", gap: 8,
              background: SURFACE_HIGH, borderRadius: 99,
              padding: "4px 12px", border: "1px solid rgba(255,255,255,0.05)",
            }}>
              <span style={{
                width: 8, height: 8, borderRadius: "50%",
                background: ORANGE, display: "inline-block",
                animation: "pulseDot 2s infinite",
              }} />
              <span style={{
                fontSize: 10, fontWeight: 700, letterSpacing: "0.1em",
                textTransform: "uppercase", color: TEXT_WHITE,
              }}>Live</span>
            </div>
          </div>

          {/* ── Summary Stats ── */}
          <div style={{ display: "grid", gridTemplateColumns: "1fr 1fr", gap: 12, marginBottom: 32 }}>
            {/* Total Bids */}
            <div style={{
              background: CARD_BG, border: CARD_BORDER,
              borderLeft: `2px solid ${ORANGE}`,
              borderRadius: 12, padding: 16,
              display: "flex", flexDirection: "column", justifyContent: "space-between",
            }}>
              <span style={{ fontSize: 10, fontWeight: 500, letterSpacing: "0.1em", textTransform: "uppercase", color: TEXT_DIM }}>
                Total Bids Placed
              </span>
              <span style={{
                fontFamily: "'Archivo Narrow', sans-serif",
                fontSize: 40, fontWeight: 700, color: TEXT_WHITE,
                lineHeight: 1, marginTop: 8,
              }}>42</span>
            </div>
            {/* Successful Wins */}
            <div style={{
              background: CARD_BG, border: CARD_BORDER,
              borderLeft: `2px solid ${TEXT_BLUE}`,
              borderRadius: 12, padding: 16,
              display: "flex", flexDirection: "column", justifyContent: "space-between",
            }}>
              <span style={{ fontSize: 10, fontWeight: 500, letterSpacing: "0.1em", textTransform: "uppercase", color: TEXT_DIM }}>
                Successful Wins
              </span>
              <span style={{
                fontFamily: "'Archivo Narrow', sans-serif",
                fontSize: 40, fontWeight: 700, color: TEXT_BLUE,
                lineHeight: 1, marginTop: 8,
              }}>07</span>
            </div>
          </div>

          {/* ── Tabs ── */}
          <div style={{
            display: "flex", padding: 4,
            background: "#0b0f10", borderRadius: 12,
            marginBottom: 32, border: "1px solid rgba(255,255,255,0.05)",
          }}>
            {(["myBids", "global"] as Tab[]).map((tab) => (
              <button key={tab} onClick={() => setActiveTab(tab)} style={{
                flex: 1, padding: "8px 0",
                borderRadius: 8, border: "none", cursor: "pointer",
                fontFamily: "'Geist', monospace",
                fontSize: 14, fontWeight: 500, letterSpacing: "0.05em",
                background: activeTab === tab ? SURFACE_HIGH : "transparent",
                color: activeTab === tab ? TEXT_WHITE : TEXT_DIM,
                transition: "all 0.2s",
              }}>
                {tab === "myBids" ? "My Bids" : "Global Feed"}
              </button>
            ))}
          </div>

          {/* ── Timeline ── */}
          <div style={{ position: "relative" }}>
            {/* Vertical line */}
            <div style={{
              position: "absolute", left: 20, top: 0, bottom: 0,
              width: 1, background: "rgba(255,255,255,0.05)", zIndex: 0,
            }} />

            <div style={{ display: "flex", flexDirection: "column", gap: 24 }}>
              {events.map((ev, i) => (
                <div key={i} style={{ position: "relative", paddingLeft: 48 }}>
                  {/* Dot */}
                  <div style={{
                    position: "absolute", left: 14, top: 8,
                    width: 12, height: 12, borderRadius: "50%",
                    background: ev.dot,
                    border: `2px solid ${BG}`,
                    zIndex: 1,
                    boxShadow: ev.dotGlow,
                  }} />

                  {/* Card */}
                  <EventCard ev={ev} />
                </div>
              ))}
            </div>
          </div>

        </main>

        <style>{`
          @keyframes pulseDot {
            0% { opacity: 1; transform: scale(1); }
            50% { opacity: 0.4; transform: scale(0.8); }
            100% { opacity: 1; transform: scale(1); }
          }
          @keyframes pulseFade {
            0%, 100% { opacity: 1; }
            50% { opacity: 0.4; }
          }
        `}</style>

        <BottomNavBar />
      </div>
    </MobileOnlyWrapper>
  );
}

// ── Event Card sub-component ──────────────────────────────────────────────────
function EventCard({ ev }: { ev: typeof events[number] }) {
  if (ev.type === "BOUGHT") {
    return (
      <div style={{
        background: CARD_BG, border: CARD_BORDER,
        borderRadius: 12, padding: 16,
      }}>
        <div style={{ display: "flex", justifyContent: "space-between", alignItems: "flex-start", marginBottom: 12 }}>
          <div style={{ display: "flex", alignItems: "center", gap: 12 }}>
            <div style={{
              width: 48, height: 48, borderRadius: "50%",
              overflow: "hidden", border: "1px solid rgba(255,255,255,0.1)",
              background: "#313536", flexShrink: 0, position: "relative",
            }}>
              <Image src={ev.img!} alt={ev.name} fill style={{ objectFit: "cover" }} referrerPolicy="no-referrer" />
            </div>
            <div>
              <h3 style={{ fontFamily: "'Inter', sans-serif", fontSize: 18, fontWeight: 700, color: TEXT_WHITE, margin: 0 }}>{ev.name}</h3>
              <p style={{ fontSize: 10, color: TEXT_DIM, margin: "2px 0 0", letterSpacing: "0.05em" }}>{ev.sub}</p>
            </div>
          </div>
          <div style={{ textAlign: "right" }}>
            <span style={{ fontFamily: "'Geist', monospace", fontSize: 14, fontWeight: 500, color: TEXT_BLUE, letterSpacing: "0.05em" }}>{ev.price}</span>
            <p style={{ fontSize: 10, color: TEXT_MUTED, textTransform: "uppercase", margin: "2px 0 0", letterSpacing: "0.05em" }}>{ev.time}</p>
          </div>
        </div>
        <div style={{ display: "flex", gap: 8, marginTop: 16 }}>
          <span style={{
            padding: "4px 8px", borderRadius: 99,
            background: "rgba(218,226,253,0.1)",
            border: "1px solid rgba(218,226,253,0.2)",
            fontSize: 10, fontWeight: 700, letterSpacing: "0.1em",
            color: TEXT_BLUE,
          }}>BOUGHT</span>
          <span style={{
            padding: "4px 8px", borderRadius: 99,
            background: "rgba(34,197,94,0.1)",
            border: "1px solid rgba(34,197,94,0.2)",
            fontSize: 10, fontWeight: 500, letterSpacing: "0.05em",
            color: "#4ade80",
            display: "flex", alignItems: "center", gap: 4,
          }}>
            <span className="material-symbols-outlined" style={{ fontSize: 12, fontVariationSettings: "'FILL' 1" }}>check_circle</span>
            ACQUIRED
          </span>
        </div>
      </div>
    );
  }

  if (ev.type === "OUTBID") {
    return (
      <div style={{
        background: CARD_BG, border: CARD_BORDER,
        borderLeft: `4px solid rgba(228,93,53,0.5)`,
        borderRadius: 12, padding: 16,
      }}>
        <div style={{ display: "flex", justifyContent: "space-between", alignItems: "flex-start" }}>
          <div>
            <span style={{ fontSize: 10, fontWeight: 700, letterSpacing: "0.1em", textTransform: "uppercase", color: ORANGE }}>{ev.type}</span>
            <h3 style={{ fontFamily: "'Inter', sans-serif", fontSize: 18, fontWeight: 700, color: TEXT_WHITE, margin: "4px 0 0" }}>{ev.name}</h3>
            <p style={{ fontSize: 10, color: TEXT_DIM, margin: "2px 0 0", fontStyle: "italic" }}>{ev.sub}</p>
          </div>
          <div style={{ textAlign: "right" }}>
            <span style={{ fontFamily: "'Geist', monospace", fontSize: 14, fontWeight: 500, color: TEXT_DIM, letterSpacing: "0.05em" }}>{ev.price}</span>
            <p style={{ fontSize: 10, color: TEXT_MUTED, textTransform: "uppercase", margin: "2px 0 0", letterSpacing: "0.05em" }}>{ev.time}</p>
          </div>
        </div>
      </div>
    );
  }

  if (ev.type === "UNSOLD") {
    return (
      <div style={{
        background: CARD_BG, border: CARD_BORDER,
        borderRadius: 12, padding: 16, opacity: 0.7,
      }}>
        <div style={{ display: "flex", justifyContent: "space-between", alignItems: "flex-start" }}>
          <div>
            <span style={{ fontSize: 10, fontWeight: 700, letterSpacing: "0.1em", textTransform: "uppercase", color: TEXT_DIM }}>{ev.type}</span>
            <h3 style={{ fontFamily: "'Inter', sans-serif", fontSize: 18, fontWeight: 700, color: TEXT_WHITE, margin: "4px 0 0" }}>{ev.name}</h3>
            <p style={{ fontSize: 10, color: TEXT_DIM, margin: "2px 0 0" }}>{ev.sub}</p>
          </div>
          <div style={{ textAlign: "right" }}>
            <span style={{ fontFamily: "'Geist', monospace", fontSize: 14, fontWeight: 500, color: TEXT_DIM, letterSpacing: "0.05em" }}>{ev.price}</span>
            <p style={{ fontSize: 10, color: TEXT_MUTED, textTransform: "uppercase", margin: "2px 0 0", letterSpacing: "0.05em" }}>{ev.time}</p>
          </div>
        </div>
      </div>
    );
  }

  if (ev.type === "BIDDING WAR") {
    return (
      <div style={{
        background: `rgba(24,28,29,0.3)`,
        border: "1px solid rgba(255,255,255,0.05)",
        borderRadius: 12, padding: 16,
      }}>
        <div style={{ display: "flex", justifyContent: "space-between", alignItems: "flex-start" }}>
          <div>
            <span style={{ fontSize: 10, fontWeight: 700, letterSpacing: "0.1em", textTransform: "uppercase", color: TEXT_TERT }}>{ev.type}</span>
            <h3 style={{ fontFamily: "'Inter', sans-serif", fontSize: 18, fontWeight: 700, color: TEXT_WHITE, margin: "4px 0 0" }}>{ev.name}</h3>
            <p style={{ fontSize: 10, color: TEXT_DIM, margin: "2px 0 0", fontStyle: "italic" }}>{ev.sub}</p>
          </div>
          <div style={{ textAlign: "right" }}>
            <span style={{
              fontFamily: "'Geist', monospace", fontSize: 14, fontWeight: 500,
              color: TEXT_BLUE, letterSpacing: "0.05em",
              animation: "pulseFade 2s infinite",
              display: "inline-block",
            }}>{ev.price}</span>
            <p style={{ fontSize: 10, color: TEXT_MUTED, textTransform: "uppercase", margin: "2px 0 0", letterSpacing: "0.05em" }}>{ev.time}</p>
          </div>
        </div>
      </div>
    );
  }

  // WITHDRAWN
  return (
    <div style={{
      background: CARD_BG, border: CARD_BORDER,
      borderLeft: `4px solid rgba(255,180,171,0.3)`,
      borderRadius: 12, padding: 16,
    }}>
      <div style={{ display: "flex", justifyContent: "space-between", alignItems: "flex-start" }}>
        <div>
          <span style={{ fontSize: 10, fontWeight: 700, letterSpacing: "0.1em", textTransform: "uppercase", color: ERROR }}>{ev.type}</span>
          <h3 style={{ fontFamily: "'Inter', sans-serif", fontSize: 18, fontWeight: 700, color: TEXT_WHITE, margin: "4px 0 0" }}>{ev.name}</h3>
          <p style={{ fontSize: 10, color: TEXT_DIM, margin: "2px 0 0" }}>{ev.sub}</p>
        </div>
        <div style={{ textAlign: "right" }}>
          <span style={{ fontFamily: "'Geist', monospace", fontSize: 14, fontWeight: 500, color: "rgba(255,180,171,0.6)", letterSpacing: "0.05em" }}>{ev.price}</span>
          <p style={{ fontSize: 10, color: TEXT_MUTED, textTransform: "uppercase", margin: "2px 0 0", letterSpacing: "0.05em" }}>{ev.time}</p>
        </div>
      </div>
    </div>
  );
}
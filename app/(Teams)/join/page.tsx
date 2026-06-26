"use client";
import React, { useState, useEffect } from "react";
import { useRouter } from "next/navigation";
import MobileOnlyWrapper from "@/components/MobileOnlyWrapper";
import FranchiseCarousel, { Franchise } from "@/components/FranchiseCarousel";

/* ─── Main Page ─── */
export default function JoinPage() {
  const [pin, setPin] = useState<string>("");
  const [franchises, setFranchises] = useState<Franchise[]>([]);
  const [selectedFranchise, setSelectedFranchise] = useState<string>("");
  const [verifyState, setVerifyState] = useState<"idle" | "loading" | "granted">("idle");

  // Load franchise data from the public JSON file at runtime.
  useEffect(() => {
    fetch("/franchises.json")
      .then((res) => res.json())
      .then((data: Franchise[]) => {
        setFranchises(data);
        if (data.length > 0) setSelectedFranchise(data[0].name);
      })
      .catch((err) => console.error("Failed to load franchises.json:", err));
  }, []);

  const router = useRouter();
  const handleKeyClick = (num: string) => {
    if (pin.length < 6) setPin((prev) => prev + num);
  };
  const handleBackspace = () => setPin((prev) => prev.slice(0, -1));
  const handleClear = () => setPin("");
  const handleVerify = () => {
    if (pin.length < 6) return;
    setVerifyState("loading");
    setTimeout(() => {
      setVerifyState("granted");
      setTimeout(() => router.push("/bid"), 800);
    }, 1500);
  };

  return (
    <MobileOnlyWrapper>
      <style>{`
        @keyframes pulse-glow {
          0%   { box-shadow: 0 0 5px rgba(228,93,53,0.3); }
          50%  { box-shadow: 0 0 20px rgba(228,93,53,0.6); }
          100% { box-shadow: 0 0 5px rgba(228,93,53,0.3); }
        }
        .pulse-glow { animation: pulse-glow 2s infinite ease-in-out; }

        @keyframes spin-icon { from { transform: rotate(0deg); } to { transform: rotate(360deg); } }
        .spin-icon { animation: spin-icon 1s linear infinite; display: inline-block; }

        @keyframes cfPulseDot {
          0%   { box-shadow: 0 0 0 0 rgba(228,93,53,0.5); }
          60%  { box-shadow: 0 0 0 5px rgba(228,93,53,0); }
          100% { box-shadow: 0 0 0 0 rgba(228,93,53,0); }
        }

        @keyframes cfFadeUp {
          from { opacity: 0; transform: translateY(6px); }
          to   { opacity: 1; transform: translateY(0); }
        }

        .pin-box-filled {
          border-color: rgba(228,93,53,0.6) !important;
          box-shadow: 0 0 10px rgba(228,93,53,0.3);
          transform: scale(1.05);
        }
        .keypad-btn:active {
          transform: scale(0.95);
          background: rgba(228,93,53,0.2) !important;
        }
        .icon-filled  { font-variation-settings: 'FILL' 1; }
        .icon-outline { font-variation-settings: 'FILL' 0; }
      `}</style>

      <div
        className="relative flex flex-col min-h-screen overflow-x-hidden text-[#e0e3e4] font-['Inter',sans-serif]"
        style={{
          background:
            "radial-gradient(circle at 50% 0%, rgba(56,82,131,0.1) 0%, rgb(16,20,21) 80%), linear-gradient(rgb(11,15,16) 0%, rgb(16,20,21) 100%)",
        }}
      >
        {/* ── Header ── */}
        <header
          className="fixed top-0 left-0 right-0 h-16 flex items-center justify-between px-4 z-50 border-b border-white/10"
          style={{ background: "rgba(16,20,21,0.6)", backdropFilter: "blur(20px)" }}
        >
          <div className="flex flex-col">
            <h1 className="font-['Archivo_Narrow',sans-serif] text-2xl font-bold text-[#e45d35] uppercase tracking-tight leading-none m-0">
              APL AUCTION
            </h1>
            <div className="flex items-center gap-2 mt-0.5">
              <span className="pulse-glow w-2 h-2 rounded-full bg-[#ffb4ab] inline-block" />
              <span className="font-['Geist',sans-serif] text-[10px] text-[#909097] uppercase tracking-widest">
                SESSION LIVE
              </span>
            </div>
          </div>
          <div className="flex items-center gap-4">
            <div className="flex flex-col items-end">
              <span className="font-['Geist',sans-serif] text-[10px] text-[#909097] uppercase tracking-widest">
                VERIFICATION
              </span>
              <span className="font-['Geist',sans-serif] text-sm text-[#e0e3e4] tracking-wider">
                OWNER MODE
              </span>
            </div>
            <button className="w-10 h-10 flex items-center justify-center rounded-full bg-transparent border-none cursor-pointer">
              <span className="material-symbols-outlined text-[#c6c6cd] text-2xl">help_outline</span>
            </button>
          </div>
        </header>

        {/* ── Main ── */}
        <main className="flex-1 flex flex-col items-center pt-[88px] pb-24 px-3">

          {/* ── Coverflow Carousel ── */}
          <div className="w-full mb-8">
            {franchises.length > 0 && (
              <FranchiseCarousel
                franchises={franchises}
                selected={selectedFranchise}
                onChange={setSelectedFranchise}
              />
            )}
          </div>

          {/* ── PIN Entry ── */}
          <div className="w-full flex flex-col items-center mb-8 px-3">
            <h2 className="font-['Archivo_Narrow',sans-serif] text-2xl font-bold text-[#e0e3e4] uppercase m-0 mb-1 tracking-wide">
              ENTER SECURE PIN
            </h2>
            <p className="font-['Geist',sans-serif] text-[10px] text-[#45464d] uppercase tracking-widest mb-6">
              Authorized personnel only
            </p>

            <div className="w-full flex flex-col gap-3">
              {/* PIN boxes */}
              <div className="flex gap-1.5">
                {[...Array(6)].map((_, i) => (
                  <div
                    key={i}
                    className={[
                      "flex-1 h-[52px] border rounded-lg flex items-center justify-center",
                      "font-['Archivo_Narrow',sans-serif] text-[22px] font-bold text-[#e45d35] transition-all duration-200",
                      "bg-[rgba(16,20,21,0.6)] border-white/10",
                      i < pin.length ? "pin-box-filled" : "",
                    ].join(" ")}
                    style={{ backdropFilter: "blur(20px)" }}
                  >
                    {i < pin.length ? "●" : ""}
                  </div>
                ))}
              </div>

              {/* Keypad */}
              <div className="grid grid-cols-3 gap-2">
                {["1","2","3","4","5","6","7","8","9"].map((num) => (
                  <button
                    key={num}
                    className="keypad-btn h-14 border border-white/10 rounded-xl flex items-center justify-center font-['Archivo_Narrow',sans-serif] text-2xl font-semibold text-[#e0e3e4] cursor-pointer transition-all duration-150 hover:bg-white/5 bg-[rgba(16,20,21,0.6)]"
                    style={{ backdropFilter: "blur(20px)" }}
                    onClick={() => handleKeyClick(num)}
                  >
                    {num}
                  </button>
                ))}
                <button
                  className="keypad-btn h-14 border border-white/10 rounded-xl flex items-center justify-center font-['Geist',sans-serif] text-xs tracking-wider text-[#ffb4ab] cursor-pointer transition-all duration-150 hover:bg-white/5 bg-[rgba(16,20,21,0.6)]"
                  style={{ backdropFilter: "blur(20px)" }}
                  onClick={handleClear}
                >
                  CLEAR
                </button>
                <button
                  className="keypad-btn h-14 border border-white/10 rounded-xl flex items-center justify-center font-['Archivo_Narrow',sans-serif] text-2xl font-semibold text-[#e0e3e4] cursor-pointer transition-all duration-150 hover:bg-white/5 bg-[rgba(16,20,21,0.6)]"
                  style={{ backdropFilter: "blur(20px)" }}
                  onClick={() => handleKeyClick("0")}
                >
                  0
                </button>
                <button
                  className="keypad-btn h-14 rounded-xl flex items-center justify-center cursor-pointer transition-all duration-150 bg-transparent border-none"
                  onClick={handleBackspace}
                >
                  <span className="material-symbols-outlined text-[28px] text-[#c6c6cd]">backspace</span>
                </button>
              </div>

              {/* Verify button */}
              <button
                onClick={handleVerify}
                disabled={pin.length < 6 || verifyState !== "idle"}
                className={[
                  "w-full h-[60px] rounded-xl font-['Archivo_Narrow',sans-serif] text-lg font-bold uppercase tracking-widest",
                  "flex items-center justify-center gap-2 transition-all duration-300 border",
                  verifyState === "granted"
                    ? "bg-green-700 text-white border-transparent"
                    : pin.length === 6
                    ? "bg-[#e45d35] text-white border-transparent shadow-[0_0_25px_rgba(228,93,53,0.5)]"
                    : "bg-[rgba(144,144,151,0.1)] text-[rgba(224,227,228,0.3)] border-white/5 cursor-not-allowed",
                ].join(" ")}
              >
                {verifyState === "loading" && (
                  <span className="material-symbols-outlined spin-icon text-2xl">sync</span>
                )}
                {verifyState === "granted"
                  ? "ACCESS GRANTED"
                  : verifyState === "loading"
                  ? ""
                  : "VERIFY ACCESS"}
              </button>
            </div>
          </div>
        </main>

        {/* ── Bottom Nav ── */}
        <nav
          className="fixed bottom-0 left-0 right-0 h-20 flex justify-around items-center px-2 z-50 border-t border-white/10"
          style={{ background: "rgba(16,20,21,0.8)", backdropFilter: "blur(24px)" }}
        >
          {[
            { icon: "gavel",    label: "Auction",  active: true  },
            { icon: "groups",   label: "Squad",    active: false },
            { icon: "payments", label: "Budget",   active: false },
            { icon: "reorder",  label: "History",  active: false },
          ].map((item) => (
            <div
              key={item.label}
              className={[
                "flex flex-col items-center justify-center py-1 px-3 rounded-xl cursor-pointer",
                item.active ? "text-[#e45d35] bg-[rgba(228,93,53,0.1)]" : "text-[#c6c6cd] bg-transparent",
              ].join(" ")}
            >
              <span className={`material-symbols-outlined text-2xl ${item.active ? "icon-filled" : "icon-outline"}`}>
                {item.icon}
              </span>
              <span className="font-['Geist',sans-serif] text-sm tracking-wider mt-0.5">
                {item.label}
              </span>
            </div>
          ))}
        </nav>
      </div>
    </MobileOnlyWrapper>
  );
}
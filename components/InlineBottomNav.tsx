"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";

const NAV_ITEMS = [
  { href: "/bid",     icon: "gavel",    label: "Auction" },
  { href: "/squad",   icon: "groups",   label: "Squad"   },
  { href: "/budget",  icon: "payments", label: "Budget"  },
  { href: "/history", icon: "reorder",  label: "History" },
];

export default function InlineBottomNav() {
  const pathname = usePathname();
  return (
    <nav className="shrink-0 flex justify-around items-center h-20 px-2
                    bg-[rgba(16,20,21,0.85)] backdrop-blur-2xl
                    border-t border-white/10">
      {NAV_ITEMS.map((item) => {
        const active = pathname === item.href;
        return (
          <Link
            key={item.href}
            href={item.href}
            className={[
              "flex flex-col items-center justify-center gap-0.5 px-3 py-1 rounded-xl transition-all duration-300",
              active
                ? "text-[#e45d35] bg-[rgba(228,93,53,0.1)]"
                : "text-[#c6c6cd] hover:bg-white/5",
            ].join(" ")}
          >
            <span
              className="material-symbols-outlined text-2xl"
              style={{ fontVariationSettings: active ? "'FILL' 1" : "'FILL' 0" }}
            >
              {item.icon}
            </span>
            <span className="font-['Geist'] text-xs">{item.label}</span>
          </Link>
        );
      })}
    </nav>
  );
}
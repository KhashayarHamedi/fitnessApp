"use client";
import { useMemo } from "react";

const FACTS = [
  "Small daily wins compound into life-changing results.",
  "Protein at breakfast reduces cravings later in the day.",
  "Walking is the most underrated fat-loss tool.",
  "Strength training boosts metabolism and confidence.",
  "Sleep quality predicts workout quality.",
  "Track your steps: 8k–10k is a strong baseline.",
  "Hydration impacts focus and energy more than you think.",
  "Mindset drives behavior; behavior creates results.",
];

export function FactTicker() {
  const line = useMemo(() => FACTS.concat(FACTS).join("  •  "), []);

  return (
    <div className="fixed inset-x-0 bottom-0 z-40">
      <div className="container pointer-events-none">
        <div className="mx-auto mb-3 max-w-4xl overflow-hidden rounded-full border border-white/10 bg-black/60 py-2 text-sm text-white/80 backdrop-blur-sm">
          <div className="relative">
            <div className="pointer-events-none absolute inset-y-0 left-0 w-20 bg-gradient-to-r from-black/60 to-transparent" />
            <div className="pointer-events-none absolute inset-y-0 right-0 w-20 bg-gradient-to-l from-black/60 to-transparent" />
            <div className="marquee whitespace-nowrap px-6">
              {line}
            </div>
          </div>
        </div>
      </div>
      <style jsx global>{`
        .marquee { animation: marqueeLTR 28s linear infinite; }
        @keyframes marqueeLTR { from { transform: translateX(-100%);} to { transform: translateX(100%);} }
      `}</style>
    </div>
  );
}



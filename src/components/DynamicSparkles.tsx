"use client";
import React from "react";

type Spark = {
  left: number;
  top: number;
  size: number;
  dx: number;
  dy: number;
  drift: number; // seconds
  blink: number; // seconds
  delay: number; // seconds
  shine: number; // brightness factor
  key: number;
};

export function DynamicSparkles() {
  const [sparks, setSparks] = React.useState<Spark[] | null>(null);

  React.useEffect(() => {
    // Generate on client to allow true randomness without hydration issues
    const width = window.innerWidth;
    const height = window.innerHeight;
    const area = (width * height) / (1280 * 800); // normalize against ~hd viewport
    const count = Math.min(120, Math.max(48, Math.floor(64 * area))); // 48–120 based on area
    const arr: Spark[] = Array.from({ length: count }).map((_, i) => {
      const left = Math.random() * 100;
      const top = Math.random() * 100;
      const size = 1 + Math.random() * 1.6; // 1–2.6px
      const dx = (Math.random() - 0.5) * 14; // smooth drift x
      const dy = (Math.random() - 0.5) * 14; // smooth drift y
      const drift = 18 + Math.random() * 14; // 18–32s
      const blink = 6 + Math.random() * 10; // 6–16s
      const delay = -Math.random() * blink; // desync
      const shine = 1.2 + Math.random() * 0.7; // 1.2–1.9
      return { left, top, size, dx, dy, drift, blink, delay, shine, key: i };
    });
    setSparks(arr);
  }, []);

  if (!sparks) return null;

  return (
    <div aria-hidden className="pointer-events-none fixed inset-0 z-0 overflow-hidden">
      {sparks.map((s) => (
        <span
          key={s.key}
          className="sparkle"
          style={{
            left: `${s.left}%`,
            top: `${s.top}%`,
            width: `${s.size}px`,
            height: `${s.size}px`,
            // @ts-ignore custom vars
            "--dx": `${s.dx}px`,
            "--dy": `${s.dy}px`,
            "--drift": `${s.drift}s`,
            "--blink": `${s.blink}s`,
            "--shine": `${s.shine}`,
            animationDelay: `${s.delay}s`,
          } as React.CSSProperties}
        />
      ))}
    </div>
  );
}



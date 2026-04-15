import { useEffect, useState } from "react";

interface Particle {
  id: number;
  x: number;
  y: number;
  size: number;
  type: "leaf" | "star" | "sparkle" | "dot";
  delay: number;
  duration: number;
}

export function FloatingDecorations() {
  const [particles] = useState<Particle[]>(() =>
    Array.from({ length: 16 }, (_, i) => ({
      id: i,
      x: Math.random() * 100,
      y: Math.random() * 100,
      size: 10 + Math.random() * 14,
      type: (["leaf", "star", "sparkle", "dot"] as const)[i % 4],
      delay: Math.random() * 5,
      duration: 4 + Math.random() * 4,
    }))
  );

  return (
    <div className="pointer-events-none fixed inset-0 z-0 overflow-hidden">
      {particles.map((p) => (
        <div
          key={p.id}
          className="absolute animate-float opacity-20"
          style={{
            left: `${p.x}%`,
            top: `${p.y}%`,
            fontSize: `${p.size}px`,
            animationDelay: `${p.delay}s`,
            animationDuration: `${p.duration}s`,
          }}
        >
          {p.type === "leaf" && <span className="text-sage">🍂</span>}
          {p.type === "star" && <span className="text-warm">✦</span>}
          {p.type === "sparkle" && <span className="text-peach">✧</span>}
          {p.type === "dot" && <span className="text-blush">●</span>}
        </div>
      ))}
    </div>
  );
}

"use client";

import { useEffect, useState } from "react";

interface Particle {
  id: number;
  left: string;
  width: string;
  animationDuration: string;
  animationDelay: string;
  opacity: number;
}

export default function EmberParticles() {
  const [particles, setParticles] = useState<Particle[]>([]);

  useEffect(() => {
    setParticles(
      Array.from({ length: 22 }, (_, i) => ({
        id: i,
        left: `${10 + Math.random() * 80}%`,
        width: `${2 + Math.random() * 4}px`,
        animationDuration: `${4 + Math.random() * 6}s`,
        animationDelay: `${Math.random() * 8}s`,
        opacity: 0.3 + Math.random() * 0.5,
      }))
    );
  }, []);

  if (particles.length === 0) return null;

  return (
    <div
      className="pointer-events-none absolute inset-0 overflow-hidden"
      aria-hidden="true"
    >
      {particles.map((p) => (
        <span
          key={p.id}
          className="absolute bottom-0 rounded-full bg-ember-500 motion-safe:animate-ember-float"
          style={{
            left: p.left,
            width: p.width,
            height: p.width,
            animationDuration: p.animationDuration,
            animationDelay: p.animationDelay,
            opacity: p.opacity,
          }}
        />
      ))}
    </div>
  );
}

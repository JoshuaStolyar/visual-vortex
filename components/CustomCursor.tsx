"use client";

import { useEffect, useRef, useState } from "react";

interface TrailPoint {
  x: number;
  y: number;
  age: number;
}

export default function CustomCursor() {
  const [pos, setPos] = useState({ x: -200, y: -200 });
  const [isPointer, setIsPointer] = useState(false);
  const trailRef = useRef<TrailPoint[]>([]);
  const [, forceUpdate] = useState(0);
  const rafRef = useRef<number | undefined>(undefined);

  useEffect(() => {
    const onMove = (e: MouseEvent) => {
      setPos({ x: e.clientX, y: e.clientY });

      const target = e.target as HTMLElement;
      const clickable = target.tagName === "A" || target.tagName === "BUTTON" || !!target.closest("a") || !!target.closest("button");
      setIsPointer(clickable);

      trailRef.current.push({ x: e.clientX, y: e.clientY, age: 0 });
      if (trailRef.current.length > 20) trailRef.current.shift();
    };

    const animate = () => {
      trailRef.current = trailRef.current
        .map(p => ({ ...p, age: p.age + 1 }))
        .filter(p => p.age < 20);
      forceUpdate(n => n + 1);
      rafRef.current = requestAnimationFrame(animate);
    };

    window.addEventListener("mousemove", onMove);
    rafRef.current = requestAnimationFrame(animate);

    return () => {
      window.removeEventListener("mousemove", onMove);
      if (rafRef.current) cancelAnimationFrame(rafRef.current);
    };
  }, []);

  return (
    <>
      <style jsx global>{`* { cursor: none !important; }`}</style>

      {/* Trail — shooting star tail */}
      {trailRef.current.map((point, i) => {
        const progress = i / trailRef.current.length;
        const fadeAge = 1 - point.age / 20;
        const opacity = progress * fadeAge * 0.8;
        const size = 2 + progress * 5;
        return (
          <div
            key={i}
            className="fixed pointer-events-none z-[9998] rounded-full"
            style={{
              left: point.x,
              top: point.y,
              width: size,
              height: size,
              transform: "translate(-50%, -50%)",
              opacity,
              background: progress > 0.6
                ? `rgba(255, 255, 255, ${opacity})`
                : progress > 0.3
                ? `rgba(167, 139, 250, ${opacity})`
                : `rgba(96, 165, 250, ${opacity})`,
              boxShadow: progress > 0.7 ? `0 0 ${size * 2}px rgba(255,255,255,0.6)` : undefined,
            }}
          />
        );
      })}

      {/* Star head */}
      <div
        className="fixed pointer-events-none z-[9999]"
        style={{
          left: pos.x,
          top: pos.y,
          transform: `translate(-50%, -50%) scale(${isPointer ? 1.4 : 1})`,
          transition: 'transform 0.1s ease',
        }}
      >
        {/* Outer glow */}
        <div style={{
          position: 'absolute',
          width: 28,
          height: 28,
          marginLeft: -14,
          marginTop: -14,
          borderRadius: '50%',
          background: 'radial-gradient(circle, rgba(255,255,255,0.15) 0%, transparent 70%)',
          boxShadow: '0 0 20px 8px rgba(167,139,250,0.4)',
        }} />
        {/* Bright center */}
        <div style={{
          position: 'absolute',
          width: 6,
          height: 6,
          marginLeft: -3,
          marginTop: -3,
          borderRadius: '50%',
          background: '#fff',
          boxShadow: '0 0 8px 4px rgba(255,255,255,0.9), 0 0 16px 6px rgba(167,139,250,0.7)',
        }} />
        {/* Star rays */}
        {[0, 45, 90, 135].map(deg => (
          <div key={deg} style={{
            position: 'absolute',
            width: 1,
            height: 10,
            marginLeft: -0.5,
            marginTop: -5,
            background: 'linear-gradient(to bottom, transparent, rgba(255,255,255,0.8), transparent)',
            transform: `rotate(${deg}deg)`,
            borderRadius: 1,
          }} />
        ))}
      </div>
    </>
  );
}

"use client";

import { useEffect, useState, useRef } from "react";

interface CursorTrail {
  x: number;
  y: number;
  opacity: number;
  size: number;
}

export default function CustomCursor() {
  const [cursorPosition, setCursorPosition] = useState({ x: -100, y: -100 });
  const [isPointer, setIsPointer] = useState(false);
  const trailRef = useRef<CursorTrail[]>([]);
  const animationFrameRef = useRef<number>();

  useEffect(() => {
    const handleMouseMove = (e: MouseEvent) => {
      setCursorPosition({ x: e.clientX, y: e.clientY });

      // Check if hovering over clickable element
      const target = e.target as HTMLElement;
      const isClickable =
        target.tagName === "A" ||
        target.tagName === "BUTTON" ||
        target.closest("a") ||
        target.closest("button") ||
        window.getComputedStyle(target).cursor === "pointer";

      setIsPointer(!!isClickable);

      // Add trail particle
      trailRef.current.push({
        x: e.clientX,
        y: e.clientY,
        opacity: 1,
        size: isClickable ? 20 : 15,
      });

      // Limit trail length
      if (trailRef.current.length > 15) {
        trailRef.current.shift();
      }
    };

    const handleMouseLeave = () => {
      setCursorPosition({ x: -100, y: -100 });
    };

    window.addEventListener("mousemove", handleMouseMove);
    document.addEventListener("mouseleave", handleMouseLeave);

    // Animate trail fade
    const animateTrail = () => {
      trailRef.current = trailRef.current
        .map((particle) => ({
          ...particle,
          opacity: particle.opacity * 0.9,
          size: particle.size * 0.95,
        }))
        .filter((particle) => particle.opacity > 0.05);

      animationFrameRef.current = requestAnimationFrame(animateTrail);
    };

    animateTrail();

    return () => {
      window.removeEventListener("mousemove", handleMouseMove);
      document.removeEventListener("mouseleave", handleMouseLeave);
      if (animationFrameRef.current) {
        cancelAnimationFrame(animationFrameRef.current);
      }
    };
  }, []);

  return (
    <>
      {/* Hide default cursor */}
      <style jsx global>{`
        * {
          cursor: none !important;
        }
      `}</style>

      {/* Trail particles */}
      {trailRef.current.map((particle, index) => (
        <div
          key={index}
          className="fixed pointer-events-none z-[9999] rounded-full"
          style={{
            left: particle.x,
            top: particle.y,
            width: particle.size,
            height: particle.size,
            transform: "translate(-50%, -50%)",
            background: `radial-gradient(circle, rgba(168, 85, 247, ${particle.opacity * 0.6}), rgba(147, 51, 234, ${particle.opacity * 0.3}), transparent)`,
            opacity: particle.opacity,
          }}
        />
      ))}

      {/* Main cursor */}
      <div
        className="fixed pointer-events-none z-[10000] transition-transform duration-100"
        style={{
          left: cursorPosition.x,
          top: cursorPosition.y,
          transform: `translate(-50%, -50%) scale(${isPointer ? 1.5 : 1})`,
        }}
      >
        {/* Outer glow ring */}
        <div
          className="absolute inset-0 rounded-full border-2 border-purple-400 transition-all duration-300"
          style={{
            width: isPointer ? 40 : 32,
            height: isPointer ? 40 : 32,
            marginLeft: isPointer ? -20 : -16,
            marginTop: isPointer ? -20 : -16,
            boxShadow: "0 0 20px rgba(168, 85, 247, 0.6), 0 0 40px rgba(168, 85, 247, 0.3)",
          }}
        />

        {/* Inner dot */}
        <div
          className="absolute rounded-full bg-gradient-to-br from-purple-400 to-blue-500 transition-all duration-300"
          style={{
            width: isPointer ? 12 : 8,
            height: isPointer ? 12 : 8,
            marginLeft: isPointer ? -6 : -4,
            marginTop: isPointer ? -6 : -4,
            boxShadow: "0 0 10px rgba(168, 85, 247, 0.8)",
          }}
        />

        {/* Rotating ring effect */}
        <div
          className="absolute inset-0 rounded-full border border-purple-500/30 animate-spin-slow"
          style={{
            width: isPointer ? 50 : 40,
            height: isPointer ? 50 : 40,
            marginLeft: isPointer ? -25 : -20,
            marginTop: isPointer ? -25 : -20,
            borderTopColor: "rgba(168, 85, 247, 0.8)",
            borderRightColor: "transparent",
          }}
        />
      </div>
    </>
  );
}

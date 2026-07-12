"use client";

import { useEffect, useRef } from "react";

interface TiltProps {
  children: React.ReactNode;
  /** Max tilt angle in degrees (reached at the card edges) */
  maxTilt?: number;
  /** Show a soft cursor-following glare highlight */
  glare?: boolean;
  /** Border radius class for the glare overlay, e.g. "rounded-2xl" */
  glareRadiusClassName?: string;
  className?: string;
}

/**
 * Tilt — small-angle perspective tilt that follows the cursor, with an
 * optional soft glare highlight tracking the pointer. Direct DOM writes
 * inside a single rAF loop (active only while hovering or settling).
 * Disabled on coarse pointers and under prefers-reduced-motion.
 */
export default function Tilt({
  children,
  maxTilt = 3,
  glare = false,
  glareRadiusClassName = "rounded-2xl",
  className = "",
}: TiltProps) {
  const ref = useRef<HTMLDivElement>(null);
  const glareRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const el = ref.current;
    if (!el) return;
    if (!window.matchMedia("(pointer: fine)").matches) return;
    if (window.matchMedia("(prefers-reduced-motion: reduce)").matches) return;

    const glareEl = glareRef.current;
    let raf = 0;
    let hovering = false;
    let tRotX = 0;
    let tRotY = 0;
    let rotX = 0;
    let rotY = 0;
    let glareX = 50;
    let glareY = 50;
    let rect: DOMRect | null = null;

    const render = () => {
      rotX += (tRotX - rotX) * 0.12;
      rotY += (tRotY - rotY) * 0.12;
      if (hovering || Math.abs(rotX) > 0.02 || Math.abs(rotY) > 0.02) {
        el.style.transform = `perspective(900px) rotateX(${rotX.toFixed(3)}deg) rotateY(${rotY.toFixed(3)}deg)`;
        if (glareEl) {
          glareEl.style.background = `radial-gradient(260px circle at ${glareX}% ${glareY}%, rgba(255,255,255,0.08), transparent 65%)`;
          glareEl.style.opacity = hovering ? "1" : "0";
        }
        raf = requestAnimationFrame(render);
      } else {
        rotX = 0;
        rotY = 0;
        el.style.transform = "";
        el.style.willChange = "";
        if (glareEl) glareEl.style.opacity = "0";
        raf = 0;
      }
    };
    const kick = () => {
      if (!raf) raf = requestAnimationFrame(render);
    };

    const onEnter = () => {
      rect = el.getBoundingClientRect();
      el.style.willChange = "transform";
      hovering = true;
    };
    const onMove = (e: MouseEvent) => {
      if (!rect) rect = el.getBoundingClientRect();
      const px = (e.clientX - rect.left) / rect.width - 0.5;
      const py = (e.clientY - rect.top) / rect.height - 0.5;
      tRotY = px * maxTilt * 2;
      tRotX = -py * maxTilt * 2;
      glareX = (px + 0.5) * 100;
      glareY = (py + 0.5) * 100;
      kick();
    };
    const onLeave = () => {
      hovering = false;
      rect = null;
      tRotX = 0;
      tRotY = 0;
      kick();
    };

    el.addEventListener("mouseenter", onEnter, { passive: true });
    el.addEventListener("mousemove", onMove, { passive: true });
    el.addEventListener("mouseleave", onLeave, { passive: true });
    return () => {
      el.removeEventListener("mouseenter", onEnter);
      el.removeEventListener("mousemove", onMove);
      el.removeEventListener("mouseleave", onLeave);
      cancelAnimationFrame(raf);
    };
  }, [maxTilt]);

  return (
    <div ref={ref} className={`relative ${className}`}>
      {children}
      {glare && (
        <div
          ref={glareRef}
          aria-hidden="true"
          className={`pointer-events-none absolute inset-0 z-10 ${glareRadiusClassName}`}
          style={{ opacity: 0, transition: "opacity 0.4s ease" }}
        />
      )}
    </div>
  );
}

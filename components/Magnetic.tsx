"use client";

import { useEffect, useRef } from "react";

interface MagneticProps {
  children: React.ReactNode;
  /** Fraction of cursor offset applied as translation */
  strength?: number;
  /** Hard cap on translation in px */
  maxShift?: number;
  className?: string;
}

/**
 * Magnetic — wraps a CTA so it subtly follows the cursor while hovered and
 * springs back on leave. Direct DOM transform writes inside a single rAF
 * loop (runs only while hovering or settling), zero React re-renders.
 * Disabled on coarse pointers and under prefers-reduced-motion.
 */
export default function Magnetic({
  children,
  strength = 0.22,
  maxShift = 9,
  className = "",
}: MagneticProps) {
  const ref = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const el = ref.current;
    if (!el) return;
    if (!window.matchMedia("(pointer: fine)").matches) return;
    if (window.matchMedia("(prefers-reduced-motion: reduce)").matches) return;

    let raf = 0;
    let hovering = false;
    let tx = 0;
    let ty = 0;
    let cx = 0;
    let cy = 0;
    let rect: DOMRect | null = null;

    const render = () => {
      cx += (tx - cx) * 0.18;
      cy += (ty - cy) * 0.18;
      if (hovering || Math.abs(cx) > 0.1 || Math.abs(cy) > 0.1) {
        el.style.transform = `translate3d(${cx.toFixed(2)}px, ${cy.toFixed(2)}px, 0)`;
        raf = requestAnimationFrame(render);
      } else {
        cx = 0;
        cy = 0;
        el.style.transform = "";
        el.style.willChange = "";
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
      const dx = e.clientX - (rect.left + rect.width / 2);
      const dy = e.clientY - (rect.top + rect.height / 2);
      tx = Math.max(-maxShift, Math.min(maxShift, dx * strength));
      ty = Math.max(-maxShift, Math.min(maxShift, dy * strength));
      kick();
    };
    const onLeave = () => {
      hovering = false;
      rect = null;
      tx = 0;
      ty = 0;
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
  }, [strength, maxShift]);

  return (
    <div ref={ref} className={className}>
      {children}
    </div>
  );
}

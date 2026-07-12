"use client";

import { useEffect, useRef, useState } from "react";

/**
 * Custom cursor: a bright star-like dot with a soft lagging ring.
 * - Only active on fine pointers (desktop) and when motion is allowed.
 * - Animates via direct DOM style writes in a single rAF loop —
 *   zero React re-renders after mount.
 */
export default function CustomCursor() {
  const [enabled, setEnabled] = useState(false);
  const dotRef = useRef<HTMLDivElement>(null);
  const ringRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const finePointer = window.matchMedia("(pointer: fine)").matches;
    const reducedMotion = window.matchMedia("(prefers-reduced-motion: reduce)").matches;
    if (!finePointer || reducedMotion) return;

    const id = requestAnimationFrame(() => setEnabled(true));
    return () => cancelAnimationFrame(id);
  }, []);

  useEffect(() => {
    if (!enabled) return;

    document.documentElement.classList.add("has-custom-cursor");

    const pos = { x: -200, y: -200 };
    const ring = { x: -200, y: -200 };
    let hovering = false;
    let visible = false;
    let raf = 0;

    const onMove = (e: MouseEvent) => {
      pos.x = e.clientX;
      pos.y = e.clientY;
      if (!visible) {
        visible = true;
        ring.x = pos.x;
        ring.y = pos.y;
        if (dotRef.current) dotRef.current.style.opacity = "1";
        if (ringRef.current) ringRef.current.style.opacity = "1";
      }
      const target = e.target as HTMLElement;
      hovering = !!target.closest("a, button, [role='button'], input, textarea, select, label");
    };

    const onLeave = () => {
      visible = false;
      if (dotRef.current) dotRef.current.style.opacity = "0";
      if (ringRef.current) ringRef.current.style.opacity = "0";
    };

    const animate = () => {
      // Ring eases toward the cursor for a comet-trail feel
      ring.x += (pos.x - ring.x) * 0.16;
      ring.y += (pos.y - ring.y) * 0.16;

      if (dotRef.current) {
        dotRef.current.style.transform = `translate3d(${pos.x}px, ${pos.y}px, 0) translate(-50%, -50%)`;
      }
      if (ringRef.current) {
        const scale = hovering ? 1.6 : 1;
        ringRef.current.style.transform = `translate3d(${ring.x}px, ${ring.y}px, 0) translate(-50%, -50%) scale(${scale})`;
        ringRef.current.style.borderColor = hovering
          ? "rgba(255, 143, 92, 0.9)"
          : "rgba(255, 90, 31, 0.5)";
        ringRef.current.style.background = hovering
          ? "rgba(255, 90, 31, 0.1)"
          : "transparent";
      }
      raf = requestAnimationFrame(animate);
    };

    window.addEventListener("mousemove", onMove, { passive: true });
    document.documentElement.addEventListener("mouseleave", onLeave);
    raf = requestAnimationFrame(animate);

    return () => {
      window.removeEventListener("mousemove", onMove);
      document.documentElement.removeEventListener("mouseleave", onLeave);
      cancelAnimationFrame(raf);
      document.documentElement.classList.remove("has-custom-cursor");
    };
  }, [enabled]);

  if (!enabled) return null;

  return (
    <>
      {/* Lagging ring */}
      <div
        ref={ringRef}
        aria-hidden
        className="fixed left-0 top-0 pointer-events-none z-[9998] rounded-full"
        style={{
          width: 34,
          height: 34,
          border: "1px solid rgba(255,90,31,0.5)",
          opacity: 0,
          transition: "opacity 0.3s ease, border-color 0.25s ease, background 0.25s ease",
        }}
      />
      {/* Star head */}
      <div
        ref={dotRef}
        aria-hidden
        className="fixed left-0 top-0 pointer-events-none z-[9999]"
        style={{ opacity: 0, transition: "opacity 0.3s ease" }}
      >
        <div
          style={{
            width: 6,
            height: 6,
            marginLeft: -3,
            marginTop: -3,
            borderRadius: "50%",
            background: "#fff",
            boxShadow:
              "0 0 8px 3px rgba(255,255,255,0.85), 0 0 18px 6px rgba(255,90,31,0.5)",
          }}
        />
      </div>
    </>
  );
}

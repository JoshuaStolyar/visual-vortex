"use client";

import { useEffect, useRef, useState } from "react";

/**
 * SpaceAmbience — site-wide atmosphere driver. Mounted once in page.tsx.
 *
 * 1. Star parallax: writes --star-shift on <html> from an rAF-throttled
 *    scroll handler; body::before (the fixed, tiled starfield) translates
 *    on the compositor only. Wrapped modulo the tile height so the drift
 *    never runs out of stars.
 * 2. Comets: two fixed streak elements on long CSS animation cycles
 *    (visible ~6% of each cycle). Position/angle re-randomized per
 *    iteration so no two streaks repeat.
 *
 * Reduced motion: parallax and comets are skipped entirely.
 */

const STAR_TILE_H = 780; // must match background-size height in globals.css
const PARALLAX = 0.06;

/** Head-glow tints, matching the section nebula hues: ember, violet, cyan. */
const COMET_TINTS = [
  "rgba(255, 90, 31, 0.25)",
  "rgba(139, 92, 246, 0.25)",
  "rgba(34, 211, 238, 0.22)",
];

function randomizeComet(el: HTMLElement) {
  el.style.setProperty("--comet-x", `${35 + Math.random() * 55}%`);
  el.style.setProperty("--comet-y", `${4 + Math.random() * 42}%`);
  el.style.setProperty("--comet-angle", `${150 + Math.random() * 28}deg`);
  el.style.setProperty("--comet-tint", COMET_TINTS[Math.floor(Math.random() * COMET_TINTS.length)]);
}

export default function SpaceAmbience() {
  const [cometsEnabled, setCometsEnabled] = useState(false);
  const cometsRef = useRef<HTMLDivElement>(null);

  // Scroll → star parallax + progress bar, rAF-throttled
  useEffect(() => {
    const reducedMotion = window.matchMedia("(prefers-reduced-motion: reduce)").matches;
    const root = document.documentElement;
    let raf = 0;

    const update = () => {
      raf = 0;
      if (!reducedMotion) {
        const y = window.scrollY;
        root.style.setProperty("--star-shift", `${-((y * PARALLAX) % STAR_TILE_H)}px`);
      }
    };
    const onScroll = () => {
      if (!raf) raf = requestAnimationFrame(update);
    };

    update();
    window.addEventListener("scroll", onScroll, { passive: true });
    window.addEventListener("resize", onScroll, { passive: true });
    return () => {
      window.removeEventListener("scroll", onScroll);
      window.removeEventListener("resize", onScroll);
      cancelAnimationFrame(raf);
    };
  }, []);

  // Comets only when motion is allowed (rAF-deferred, matching CustomCursor)
  useEffect(() => {
    if (window.matchMedia("(prefers-reduced-motion: reduce)").matches) return;
    const id = requestAnimationFrame(() => setCometsEnabled(true));
    return () => cancelAnimationFrame(id);
  }, []);

  // Re-randomize each comet's path every animation cycle
  useEffect(() => {
    if (!cometsEnabled) return;
    const wrap = cometsRef.current;
    if (!wrap) return;

    const comets = Array.from(wrap.children) as HTMLElement[];
    comets.forEach(randomizeComet);

    const cleanups = comets.map((el) => {
      const onIteration = () => randomizeComet(el);
      el.addEventListener("animationiteration", onIteration);
      return () => el.removeEventListener("animationiteration", onIteration);
    });
    return () => cleanups.forEach((fn) => fn());
  }, [cometsEnabled]);

  return (
    <>
      {cometsEnabled && (
        <div ref={cometsRef} aria-hidden="true">
          <span className="comet" style={{ animationDuration: "17s", animationDelay: "4s" }} />
          <span className="comet" style={{ animationDuration: "29s", animationDelay: "14s" }} />
        </div>
      )}
    </>
  );
}

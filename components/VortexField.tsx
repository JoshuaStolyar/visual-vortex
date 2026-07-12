"use client";

import { useEffect, useRef } from "react";

/**
 * VortexField — atmospheric particle drift layered around the hero's
 * OrbitField orrery.
 *
 * A flattened disc of particles sharing the orrery's center, orbiting with
 * differential rotation (inner particles sweep faster) and a slow inward
 * spiral drift, leaving short motion trails — like dust caught in the
 * orbit paths rather than a literal effect of its own.
 *
 * Perf: single canvas scoped to the hero (not full-page), O(n) per frame,
 * DPR capped at 2, paused when scrolled offscreen. Under
 * prefers-reduced-motion it renders one static frame and never animates.
 */

interface Particle {
  radius: number;
  angle: number;
  speed: number; // base angular factor
  size: number;
  alpha: number;
  warm: boolean; // accent-tinted vs white
  drift: number; // inward px/s
}

const ACCENT_RGB = "255, 106, 51"; // slightly lifted ember for glow on dark
const SQUASH = 0.5; // vertical flattening of the disc

export default function VortexField() {
  const canvasRef = useRef<HTMLCanvasElement>(null);

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;
    const ctx = canvas.getContext("2d");
    if (!ctx) return;

    const reducedMotion = window.matchMedia("(prefers-reduced-motion: reduce)").matches;

    let w = 0;
    let h = 0;
    let cx = 0;
    let cy = 0;
    let particles: Particle[] = [];
    let rafId = 0;
    let running = false;
    let lastTime = 0;

    const spawn = (atEdge = false): Particle => {
      const maxR = Math.max(w, h) * 0.72;
      return {
        radius: atEdge ? maxR * (0.85 + Math.random() * 0.15) : 24 + Math.pow(Math.random(), 0.7) * maxR,
        angle: Math.random() * Math.PI * 2,
        speed: 26 + Math.random() * 34,
        size: 0.6 + Math.random() * 1.2,
        alpha: 0.15 + Math.random() * 0.38,
        warm: Math.random() < 0.22,
        drift: 6 + Math.random() * 16,
      };
    };

    const resize = () => {
      const dpr = Math.min(window.devicePixelRatio || 1, 2);
      w = canvas.clientWidth;
      h = canvas.clientHeight;
      canvas.width = Math.max(1, Math.round(w * dpr));
      canvas.height = Math.max(1, Math.round(h * dpr));
      ctx.setTransform(dpr, 0, 0, dpr, 0, 0);
      cx = w / 2;
      cy = h * 0.42;
      const count = Math.round(Math.min(220, Math.max(110, (w * h) / 7800)));
      particles = Array.from({ length: count }, () => spawn());
      ctx.clearRect(0, 0, w, h);
    };

    const drawParticle = (p: Particle) => {
      const x = cx + Math.cos(p.angle) * p.radius;
      const y = cy + Math.sin(p.angle) * p.radius * SQUASH;
      // Fade out toward the very center so the core stays clean
      const coreFade = Math.min(1, (p.radius - 14) / 60);
      if (coreFade <= 0) return;
      const a = p.alpha * coreFade;
      ctx.fillStyle = p.warm
        ? `rgba(${ACCENT_RGB}, ${a})`
        : `rgba(255, 255, 255, ${a * 0.8})`;
      ctx.beginPath();
      ctx.arc(x, y, p.size, 0, Math.PI * 2);
      ctx.fill();
    };

    const step = (dt: number) => {
      for (const p of particles) {
        // Differential rotation: inner particles sweep faster
        p.angle += (p.speed / (p.radius + 40)) * dt;
        p.radius -= p.drift * dt;
        if (p.radius < 14) {
          const fresh = spawn(true);
          p.radius = fresh.radius;
          p.angle = fresh.angle;
          p.speed = fresh.speed;
          p.size = fresh.size;
          p.alpha = fresh.alpha;
          p.warm = fresh.warm;
          p.drift = fresh.drift;
        }
      }
    };

    const renderStatic = () => {
      ctx.clearRect(0, 0, w, h);
      for (const p of particles) drawParticle(p);
    };

    const frame = (time: number) => {
      if (!running) return;
      const dt = Math.min(0.05, lastTime ? (time - lastTime) / 1000 : 0.016);
      lastTime = time;

      // Fade previous frame slightly instead of clearing → short trails
      ctx.globalCompositeOperation = "destination-out";
      ctx.fillStyle = "rgba(0, 0, 0, 0.16)";
      ctx.fillRect(0, 0, w, h);
      ctx.globalCompositeOperation = "source-over";

      step(dt);
      for (const p of particles) drawParticle(p);

      rafId = requestAnimationFrame(frame);
    };

    const start = () => {
      if (running || reducedMotion) return;
      running = true;
      lastTime = 0;
      rafId = requestAnimationFrame(frame);
    };
    const stop = () => {
      running = false;
      cancelAnimationFrame(rafId);
    };

    resize();
    if (reducedMotion) {
      renderStatic();
    } else {
      start();
    }

    const onResize = () => {
      resize();
      if (reducedMotion) renderStatic();
    };
    window.addEventListener("resize", onResize);

    // Pause the loop while the hero is offscreen
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) start();
        else stop();
      },
      { threshold: 0 }
    );
    observer.observe(canvas);

    return () => {
      stop();
      observer.disconnect();
      window.removeEventListener("resize", onResize);
    };
  }, []);

  return (
    <canvas
      ref={canvasRef}
      aria-hidden="true"
      className="absolute inset-0 w-full h-full pointer-events-none"
      style={{
        maskImage: "radial-gradient(ellipse 90% 80% at 50% 42%, black 45%, transparent 82%)",
        WebkitMaskImage: "radial-gradient(ellipse 90% 80% at 50% 42%, black 45%, transparent 82%)",
      }}
    />
  );
}

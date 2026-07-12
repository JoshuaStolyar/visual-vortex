"use client";

import { useEffect, useRef } from "react";

interface RevealProps {
  children: React.ReactNode;
  /** Stagger delay in ms */
  delay?: number;
  /** Initial vertical offset in px */
  y?: number;
  className?: string;
}

/**
 * Lightweight scroll-reveal wrapper. Fades + slides content in the first
 * time it enters the viewport. Respects prefers-reduced-motion (handled
 * in CSS — the .reveal class is a no-op there).
 */
export default function Reveal({ children, delay = 0, y = 28, className = "" }: RevealProps) {
  const ref = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const el = ref.current;
    if (!el) return;

    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          el.classList.add("is-revealed");
          observer.disconnect();
        }
      },
      { threshold: 0.12, rootMargin: "0px 0px -48px 0px" }
    );

    observer.observe(el);
    return () => observer.disconnect();
  }, []);

  return (
    <div
      ref={ref}
      className={`reveal ${className}`}
      style={{
        "--reveal-delay": `${delay}ms`,
        "--reveal-y": `${y}px`,
      } as React.CSSProperties}
    >
      {children}
    </div>
  );
}

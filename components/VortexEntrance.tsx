"use client";

import { useState, useEffect, useRef } from "react";

interface PaintDrop {
  x: number;
  y: number;
  speedY: number;
  size: number;
  color: string;
  opacity: number;
  splashed: boolean;
}

export default function VortexEntrance() {
  const [isVisible, setIsVisible] = useState(true);
  const canvasRef = useRef<HTMLCanvasElement>(null);
  const dropsRef = useRef<PaintDrop[]>([]);
  const animationFrameRef = useRef<number>();
  const fillHeightRef = useRef(0);
  const bucketYRef = useRef(-200);
  const bucketTiltRef = useRef(0);

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;

    canvas.width = window.innerWidth;
    canvas.height = window.innerHeight;

    const ctx = canvas.getContext("2d");
    if (!ctx) return;

    const colors = [
      "#a855f7", // purple-400
      "#9333ea", // purple-600
      "#3b82f6", // blue-500
      "#2563eb", // blue-600
    ];

    let startTime = Date.now();

    // Easing functions for smooth animation
    const easeOutBounce = (t: number): number => {
      if (t < 1 / 2.75) {
        return 7.5625 * t * t;
      } else if (t < 2 / 2.75) {
        return 7.5625 * (t -= 1.5 / 2.75) * t + 0.75;
      } else if (t < 2.5 / 2.75) {
        return 7.5625 * (t -= 2.25 / 2.75) * t + 0.9375;
      } else {
        return 7.5625 * (t -= 2.625 / 2.75) * t + 0.984375;
      }
    };

    const easeInOutCubic = (t: number): number => {
      return t < 0.5 ? 4 * t * t * t : 1 - Math.pow(-2 * t + 2, 3) / 2;
    };

    const easeOutQuad = (t: number): number => {
      return 1 - (1 - t) * (1 - t);
    };

    // Animation stages
    const animate = () => {
      const elapsed = Date.now() - startTime;

      // Enable antialiasing
      ctx.imageSmoothingEnabled = true;
      ctx.imageSmoothingQuality = 'high';

      ctx.clearRect(0, 0, canvas.width, canvas.height);

      // Stage 1: Bucket drops down (0-1000ms) with bounce
      if (elapsed < 1000) {
        const progress = easeOutBounce(elapsed / 1000);
        bucketYRef.current = -200 + progress * 250;
        drawBucket(ctx, canvas.width / 2, bucketYRef.current, 0);
      }
      // Stage 2: Bucket tilts (1000-1500ms) with smooth easing
      else if (elapsed < 1500) {
        const tiltProgress = easeInOutCubic((elapsed - 1000) / 500);
        bucketTiltRef.current = tiltProgress * 65;
        drawBucket(ctx, canvas.width / 2, 50, bucketTiltRef.current);
      }
      // Stage 3: Paint pours out (1500-3000ms)
      else if (elapsed < 3000) {
        drawBucket(ctx, canvas.width / 2, 50, 65);

        // Create MORE paint drops for smoother flow
        for (let i = 0; i < 3; i++) {
          if (Math.random() < 0.9) {
            const bucketX = canvas.width / 2 + 50;
            dropsRef.current.push({
              x: bucketX + (Math.random() - 0.5) * 25,
              y: 85 + Math.random() * 20,
              speedY: Math.random() * 2 + 10,
              size: Math.random() * 12 + 8,
              color: colors[Math.floor(Math.random() * colors.length)],
              opacity: 1,
              splashed: false,
            });
          }
        }

        // Update and draw drops with smoother rendering
        dropsRef.current.forEach((drop, index) => {
          drop.y += drop.speedY;
          drop.speedY += 0.6; // Gravity

          // Draw drop with gradient and shadow
          ctx.save();

          // Drop shadow
          ctx.shadowColor = 'rgba(0, 0, 0, 0.3)';
          ctx.shadowBlur = 15;
          ctx.shadowOffsetY = 5;

          // Create gradient for drop
          const gradient = ctx.createRadialGradient(
            drop.x - drop.size * 0.3,
            drop.y - drop.size * 0.3,
            0,
            drop.x,
            drop.y,
            drop.size
          );
          gradient.addColorStop(0, drop.color + 'ff');
          gradient.addColorStop(1, drop.color + 'cc');

          ctx.beginPath();
          ctx.ellipse(drop.x, drop.y, drop.size * 0.6, drop.size, Math.PI * 0.1, 0, Math.PI * 2);
          ctx.fillStyle = gradient;
          ctx.fill();

          // Highlight
          ctx.beginPath();
          ctx.arc(drop.x - drop.size * 0.25, drop.y - drop.size * 0.25, drop.size * 0.3, 0, Math.PI * 2);
          ctx.fillStyle = 'rgba(255, 255, 255, 0.4)';
          ctx.fill();

          ctx.restore();

          // Splash when hitting bottom
          if (drop.y >= canvas.height - fillHeightRef.current && !drop.splashed) {
            drop.splashed = true;
            fillHeightRef.current += 1.5;
          }
        });

        // Draw rising paint fill
        if (fillHeightRef.current > 0) {
          const gradient = ctx.createLinearGradient(0, canvas.height - fillHeightRef.current, 0, canvas.height);
          gradient.addColorStop(0, "#a855f7");
          gradient.addColorStop(0.5, "#9333ea");
          gradient.addColorStop(1, "#2563eb");

          ctx.fillStyle = gradient;
          ctx.fillRect(0, canvas.height - fillHeightRef.current, canvas.width, fillHeightRef.current);

          // Add wavy top edge
          ctx.beginPath();
          ctx.moveTo(0, canvas.height - fillHeightRef.current);
          for (let x = 0; x < canvas.width; x += 20) {
            const wave = Math.sin((x + elapsed) * 0.05) * 5;
            ctx.lineTo(x, canvas.height - fillHeightRef.current + wave);
          }
          ctx.lineTo(canvas.width, canvas.height);
          ctx.lineTo(0, canvas.height);
          ctx.closePath();
          ctx.fillStyle = gradient;
          ctx.fill();
        }
      }
      // Stage 4: Fill screen quickly (3000-4000ms) with smooth easing
      else if (elapsed < 4000) {
        const fillProgress = easeOutQuad((elapsed - 3000) / 1000);
        fillHeightRef.current = canvas.height * fillProgress;

        const gradient = ctx.createLinearGradient(0, 0, 0, canvas.height);
        gradient.addColorStop(0, "#a855f7");
        gradient.addColorStop(0.3, "#9333ea");
        gradient.addColorStop(0.7, "#6366f1");
        gradient.addColorStop(1, "#2563eb");

        ctx.fillStyle = gradient;
        ctx.fillRect(0, canvas.height - fillHeightRef.current, canvas.width, fillHeightRef.current);

        // Add smooth wave effect at top
        ctx.beginPath();
        ctx.moveTo(0, canvas.height - fillHeightRef.current);
        for (let x = 0; x <= canvas.width; x += 5) {
          const wave = Math.sin((x * 0.02) + (elapsed * 0.005)) * 10 * (1 - fillProgress);
          ctx.lineTo(x, canvas.height - fillHeightRef.current + wave);
        }
        ctx.lineTo(canvas.width, canvas.height);
        ctx.lineTo(0, canvas.height);
        ctx.closePath();
        ctx.fillStyle = gradient;
        ctx.fill();
      }
      // Stage 5: Fade out (4000-4500ms)
      else if (elapsed < 4500) {
        const fadeProgress = easeInOutCubic((elapsed - 4000) / 500);
        ctx.globalAlpha = 1 - fadeProgress;

        const gradient = ctx.createLinearGradient(0, 0, 0, canvas.height);
        gradient.addColorStop(0, "#a855f7");
        gradient.addColorStop(0.3, "#9333ea");
        gradient.addColorStop(0.7, "#6366f1");
        gradient.addColorStop(1, "#2563eb");

        ctx.fillStyle = gradient;
        ctx.fillRect(0, 0, canvas.width, canvas.height);
        ctx.globalAlpha = 1;
      }
      // Done
      else {
        setIsVisible(false);
        return;
      }

      animationFrameRef.current = requestAnimationFrame(animate);
    };

    // Start animation after short delay
    setTimeout(() => {
      animate();
    }, 300);

    const handleResize = () => {
      if (canvas) {
        canvas.width = window.innerWidth;
        canvas.height = window.innerHeight;
      }
    };

    window.addEventListener("resize", handleResize);

    return () => {
      window.removeEventListener("resize", handleResize);
      if (animationFrameRef.current) {
        cancelAnimationFrame(animationFrameRef.current);
      }
    };
  }, []);

  // Draw bucket function with higher quality
  const drawBucket = (ctx: CanvasRenderingContext2D, x: number, y: number, tilt: number) => {
    ctx.save();
    ctx.translate(x, y);
    ctx.rotate((tilt * Math.PI) / 180);

    // Drop shadow for bucket
    ctx.shadowColor = 'rgba(0, 0, 0, 0.4)';
    ctx.shadowBlur = 20;
    ctx.shadowOffsetY = 10;

    // Bucket body with smooth curves
    ctx.beginPath();
    ctx.moveTo(-45, 0);
    ctx.bezierCurveTo(-45, 0, -38, 65, -35, 70);
    ctx.lineTo(35, 70);
    ctx.bezierCurveTo(38, 65, 45, 0, 45, 0);
    ctx.closePath();

    // Multi-color gradient fill
    const bodyGradient = ctx.createLinearGradient(-20, 0, 20, 70);
    bodyGradient.addColorStop(0, "#c084fc");
    bodyGradient.addColorStop(0.3, "#a855f7");
    bodyGradient.addColorStop(0.7, "#6366f1");
    bodyGradient.addColorStop(1, "#3b82f6");
    ctx.fillStyle = bodyGradient;
    ctx.fill();

    // Inner shadow/depth
    ctx.shadowColor = 'transparent';
    ctx.beginPath();
    ctx.moveTo(-40, 5);
    ctx.bezierCurveTo(-40, 5, -33, 60, -30, 65);
    ctx.lineTo(30, 65);
    ctx.bezierCurveTo(33, 60, 40, 5, 40, 5);
    ctx.strokeStyle = 'rgba(0, 0, 0, 0.2)';
    ctx.lineWidth = 2;
    ctx.stroke();

    // Bucket outline (white rim)
    ctx.beginPath();
    ctx.moveTo(-45, 0);
    ctx.bezierCurveTo(-45, 0, -38, 65, -35, 70);
    ctx.lineTo(35, 70);
    ctx.bezierCurveTo(38, 65, 45, 0, 45, 0);
    ctx.closePath();
    ctx.strokeStyle = "#ffffff";
    ctx.lineWidth = 4;
    ctx.stroke();

    // Highlight on bucket
    ctx.beginPath();
    ctx.moveTo(-30, 10);
    ctx.bezierCurveTo(-25, 35, -20, 50, -18, 60);
    ctx.strokeStyle = 'rgba(255, 255, 255, 0.5)';
    ctx.lineWidth = 3;
    ctx.stroke();

    // Handle with gradient
    ctx.shadowColor = 'rgba(0, 0, 0, 0.3)';
    ctx.shadowBlur = 10;
    ctx.shadowOffsetY = 5;

    ctx.beginPath();
    ctx.arc(0, -5, 50, 0.3, Math.PI - 0.3);
    const handleGradient = ctx.createLinearGradient(-50, -5, 50, -5);
    handleGradient.addColorStop(0, "#f3f4f6");
    handleGradient.addColorStop(0.5, "#ffffff");
    handleGradient.addColorStop(1, "#e5e7eb");
    ctx.strokeStyle = handleGradient;
    ctx.lineWidth = 6;
    ctx.lineCap = 'round';
    ctx.stroke();

    // Handle highlight
    ctx.shadowColor = 'transparent';
    ctx.beginPath();
    ctx.arc(0, -8, 50, 0.4, Math.PI - 0.4);
    ctx.strokeStyle = 'rgba(255, 255, 255, 0.8)';
    ctx.lineWidth = 2;
    ctx.stroke();

    ctx.restore();
  };

  if (!isVisible) return null;

  return (
    <div
      className="fixed inset-0 bg-[#0a0014] flex items-center justify-center"
      style={{ zIndex: 9999 }}
    >
      <canvas ref={canvasRef} className="absolute inset-0" />
    </div>
  );
}

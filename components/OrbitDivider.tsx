/**
 * OrbitDivider — section break drawn in the hero orrery's language: a
 * hairline elliptical arc with a soft glow seam and a small accent
 * planet drifting slowly along the path (CSS offset-path; hidden where
 * unsupported, static under prefers-reduced-motion via globals.css).
 *
 * The glow seam is a color BRIDGE: two overlapping low-opacity blobs —
 * the outgoing section's hue biased up-left, the incoming section's hue
 * biased down-right — so adjacent nebula tints wash into each other
 * instead of cutting from one colored patch to the next. Atmosphere only;
 * the travelling planet dot stays ember (brand accent).
 */

const ARC_PATH = "M20 118 C 260 28, 640 28, 880 118";

/** Nebula hues used across the page's section tints (RGB triplets). */
const HUES = {
  ember: "255, 90, 31",
  violet: "139, 92, 246",
  cyan: "34, 211, 238",
  indigo: "99, 102, 241",
  magenta: "217, 70, 239",
} as const;

type Hue = keyof typeof HUES;

export default function OrbitDivider({
  flip = false,
  from = "ember",
  to = "ember",
}: {
  flip?: boolean;
  from?: Hue;
  to?: Hue;
}) {
  return (
    <div aria-hidden="true" className="relative h-24 md:h-28 overflow-hidden pointer-events-none">
      {/* Glow seam — outgoing hue exits up-left, incoming hue enters down-right */}
      <div
        className="absolute left-1/2 top-1/2 w-[560px] h-[150px] rounded-full blur-[80px]"
        style={{ transform: "translate(-62%, -72%)", background: `rgba(${HUES[from]}, 0.045)` }}
      />
      <div
        className="absolute left-1/2 top-1/2 w-[560px] h-[150px] rounded-full blur-[80px]"
        style={{ transform: "translate(-38%, -28%)", background: `rgba(${HUES[to]}, 0.045)` }}
      />

      {/* Arc + travelling planet, mirrored vertically when flipped */}
      <div
        className="absolute left-1/2 top-1/2 w-[900px] h-[160px]"
        style={{ transform: `translate(-50%, -50%)${flip ? " scaleY(-1)" : ""}` }}
      >
        <svg className="absolute inset-0 w-full h-full" viewBox="0 0 900 160" fill="none">
          <defs>
            <linearGradient id="orbit-divider-grad" x1="0" y1="0" x2="900" y2="0" gradientUnits="userSpaceOnUse">
              <stop offset="0" stopColor="rgba(255,255,255,0)" />
              <stop offset="0.5" stopColor="rgba(255,255,255,0.18)" />
              <stop offset="1" stopColor="rgba(255,255,255,0)" />
            </linearGradient>
          </defs>
          <path d={ARC_PATH} stroke="url(#orbit-divider-grad)" strokeWidth="1" />
        </svg>
        <span className="divider-orbit-dot" style={{ offsetPath: `path("${ARC_PATH}")` }} />
      </div>
    </div>
  );
}

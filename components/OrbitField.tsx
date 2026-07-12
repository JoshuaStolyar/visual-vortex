/**
 * OrbitField — a stylized, minimal orrery for the hero.
 *
 * Thin hairline orbit rings (matching the eyebrow/hairline visual weight
 * used elsewhere in the design system) sweep around a central glowing core,
 * with a handful of simple flat-circle "planets" (one soft rim-light
 * gradient each, no photoreal stacking) moving along them at different
 * speeds. Deliberately geometric/abstract rather than photorealistic —
 * reads as "solar system" without trying to be a literal render of one.
 *
 * Pure CSS: each ring is a circle that gets vertically squashed via
 * scaleY on its wrapper, so a plain `rotate()` on the inner wrapper traces
 * an elliptical path for the planet dot and the ring border alike. No JS,
 * no canvas — animation is disabled entirely under prefers-reduced-motion
 * via the .orbit-spin / .core-pulse rules in globals.css.
 */

interface Orbit {
  diameter: number;
  squash: number;
  duration: number; // seconds per revolution
  phase: number; // 0-360, start position along the ring
  planet: {
    size: number;
    accent?: boolean;
  };
}

const orbits: Orbit[] = [
  { diameter: 190, squash: 0.42, duration: 20, phase: 40,  planet: { size: 7 } },
  { diameter: 320, squash: 0.40, duration: 34, phase: 190, planet: { size: 11, accent: true } },
  { diameter: 460, squash: 0.38, duration: 50, phase: 300, planet: { size: 6 } },
  { diameter: 620, squash: 0.36, duration: 74, phase: 110, planet: { size: 5 } },
];

const neutralPlanet =
  "radial-gradient(circle at 32% 28%, #ffffff 0%, #c7cbd1 35%, #6b6f78 70%, #33353a 100%)";
const emberPlanet =
  "radial-gradient(circle at 32% 28%, #ffe8d9 0%, #ff8a4c 35%, #ff5a1f 65%, #7a2400 100%)";

export default function OrbitField() {
  return (
    <div
      aria-hidden="true"
      className="absolute left-1/2 pointer-events-none"
      style={{ top: "42%", transform: "translate(-50%, -50%)" }}
    >
      {/* Central core — the "sun" the rings orbit */}
      <div
        className="core-pulse absolute rounded-full"
        style={{
          top: 0,
          left: 0,
          width: 16,
          height: 16,
          transform: "translate(-50%, -50%)",
          background: "radial-gradient(circle at 35% 30%, #fff 0%, #ff5a1f 55%, #7a1f00 100%)",
          boxShadow: "0 0 46px 16px rgba(255,90,31,0.32), 0 0 100px 34px rgba(255,90,31,0.12)",
        }}
      />

      {orbits.map((orbit, i) => (
        <div
          key={i}
          className="absolute"
          style={{
            top: 0,
            left: 0,
            width: orbit.diameter,
            height: orbit.diameter,
            transform: `translate(-50%, -50%) scaleY(${orbit.squash})`,
          }}
        >
          {/* Hairline ring */}
          <div
            className="absolute inset-0 rounded-full"
            style={{ border: `1px solid rgba(255,255,255,${0.16 - i * 0.025})` }}
          />

          {/* Rotating wrapper carries the planet around the ring */}
          <div
            className="orbit-spin absolute inset-0"
            style={{
              animationDuration: `${orbit.duration}s`,
              animationDelay: `-${(orbit.phase / 360) * orbit.duration}s`,
            }}
          >
            <div
              className="absolute rounded-full"
              style={{
                top: 0,
                left: "50%",
                width: orbit.planet.size,
                height: orbit.planet.size,
                transform: "translate(-50%, -50%)",
                background: orbit.planet.accent ? emberPlanet : neutralPlanet,
                boxShadow: orbit.planet.accent
                  ? "0 0 16px 3px rgba(255,90,31,0.5)"
                  : "0 0 7px 1px rgba(255,255,255,0.15)",
              }}
            />
          </div>
        </div>
      ))}
    </div>
  );
}

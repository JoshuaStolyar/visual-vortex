/**
 * OrbitReprise — closing bookend behind the Contact footer. The hero
 * orrery's ring-and-planet motif rises from below the page edge like a
 * horizon: concentric squashed hairline rings, an ember core glow sitting
 * on the horizon line, and one accent planet slowly circling the middle
 * ring. Reuses the .orbit-spin / .core-pulse keyframes, so it inherits
 * their prefers-reduced-motion gating from globals.css.
 */

const rings = [
  { diameter: 420, squash: 0.42, opacity: 0.11 },
  { diameter: 700, squash: 0.4, opacity: 0.08 },
  { diameter: 980, squash: 0.38, opacity: 0.05 },
];

const emberPlanet =
  "radial-gradient(circle at 32% 28%, #ffe8d9 0%, #ff8a4c 35%, #ff5a1f 65%, #7a2400 100%)";

export default function OrbitReprise() {
  return (
    <div aria-hidden="true" className="absolute bottom-0 left-0 right-0 h-[280px] pointer-events-none overflow-hidden">
      {/* Ember horizon glow */}
      <div
        className="absolute left-1/2 -translate-x-1/2 bottom-[-160px] w-[900px] h-[340px] rounded-full blur-[90px]"
        style={{ background: "radial-gradient(ellipse, rgba(255,90,31,0.07) 0%, transparent 70%)" }}
      />

      {/* Orbit center sits just below the page edge — only the upper arcs show */}
      <div className="absolute left-1/2 bottom-0">
        {/* Core on the horizon */}
        <div
          className="core-pulse absolute rounded-full"
          style={{
            width: 10,
            height: 10,
            transform: "translate(-50%, -50%)",
            background: "radial-gradient(circle at 35% 30%, #fff 0%, #ff5a1f 55%, #7a1f00 100%)",
            boxShadow: "0 0 34px 12px rgba(255,90,31,0.28), 0 0 80px 26px rgba(255,90,31,0.1)",
          }}
        />

        {rings.map((ring, i) => (
          <div
            key={i}
            className="absolute"
            style={{
              top: 0,
              left: 0,
              width: ring.diameter,
              height: ring.diameter,
              transform: `translate(-50%, -50%) scaleY(${ring.squash})`,
            }}
          >
            <div
              className="absolute inset-0 rounded-full"
              style={{ border: `1px solid rgba(255,255,255,${ring.opacity})` }}
            />
            {/* One accent planet circling the middle ring */}
            {i === 1 && (
              <div className="orbit-spin absolute inset-0" style={{ animationDuration: "58s" }}>
                <div
                  className="absolute rounded-full"
                  style={{
                    top: 0,
                    left: "50%",
                    width: 8,
                    height: 8,
                    transform: "translate(-50%, -50%)",
                    background: emberPlanet,
                    boxShadow: "0 0 14px 3px rgba(255,90,31,0.45)",
                  }}
                />
              </div>
            )}
          </div>
        ))}
      </div>
    </div>
  );
}

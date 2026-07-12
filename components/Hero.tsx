import AnimatedCounter from "./AnimatedCounter";
import Reveal from "./Reveal";
import OrbitField from "./OrbitField";
import VortexField from "./VortexField";
import Magnetic from "./Magnetic";

const stats = [
  { end: 250, suffix: "M+", label: "Long Form Views/Month" },
  { end: 999, suffix: "M+", label: "Short Form Views/Month" },
  { end: 72,  suffix: "+",  label: "Creators & Channels" },
];

export default function Hero() {
  return (
    <section id="home" className="relative min-h-screen flex items-center justify-center overflow-hidden">

      {/* ─── ORRERY BACKDROP ─── */}
      <div className="absolute inset-0 pointer-events-none">
        {/* Single soft ember glow behind the headline, centered on the orbit core */}
        <div
          className="absolute left-1/2"
          style={{
            top: "42%",
            width: 760,
            height: 460,
            borderRadius: "50%",
            transform: "translate(-50%, -50%)",
            background: "radial-gradient(ellipse, rgba(255,90,31,0.08) 0%, transparent 70%)",
            filter: "blur(50px)",
          }}
        />
        <OrbitField />
        {/* Atmospheric particle drift layered around the orbit rings */}
        <VortexField />
      </div>

      {/* ─── BOTTOM FADE ─── */}
      <div
        className="absolute bottom-0 left-0 right-0 h-64 pointer-events-none"
        style={{ background: "linear-gradient(to bottom, transparent 0%, #08080a 100%)", zIndex: 4 }}
      />

      {/* ─── HERO CONTENT ─── */}
      <div className="relative z-10 container mx-auto px-6 pt-40 pb-28 text-center">
        <div className="max-w-5xl mx-auto">

          <Reveal y={20}>
            <div className="flex flex-wrap items-center justify-center gap-x-5 gap-y-3">
              <p className="eyebrow">Content Growth Agency</p>
              <span className="inline-flex items-center gap-2 rounded-full border border-accent/30 bg-accent/[0.07] px-3.5 py-1.5 text-[11px] font-semibold uppercase tracking-[0.18em] text-accent">
                <span className="relative flex h-1.5 w-1.5" aria-hidden="true">
                  <span className="absolute inline-flex h-full w-full rounded-full bg-accent opacity-60 motion-safe:animate-ping" />
                  <span className="relative inline-flex h-1.5 w-1.5 rounded-full bg-accent" />
                </span>
                2 spots open
              </span>
            </div>
          </Reveal>

          <Reveal delay={100} y={26}>
            <h1 className="font-display text-[2.75rem] leading-[1.08] md:text-6xl lg:text-7xl xl:text-[5.25rem] font-bold tracking-tight text-white mt-8 text-balance">
              The team behind
              <br />
              <span className="text-accent">the biggest creators &amp; brands</span>
            </h1>
          </Reveal>

          <Reveal delay={200} y={24}>
            <p className="text-lg md:text-xl lg:text-2xl max-w-2xl mx-auto text-white/60 font-light mt-7">
              Building the future of content.
            </p>
          </Reveal>

          <Reveal delay={300} y={22}>
            <div className="flex flex-col sm:flex-row gap-4 justify-center mt-10">
              <Magnetic className="flex sm:inline-flex">
                <a href="#contact" className="btn-primary group w-full sm:w-auto px-8 py-4 text-base md:text-lg">
                  Apply to Work Together
                  <svg className="w-4 h-4 transition-transform duration-300 group-hover:translate-x-0.5" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2.2}>
                    <path strokeLinecap="round" strokeLinejoin="round" d="M13.5 4.5L21 12l-7.5 7.5M21 12H3" />
                  </svg>
                </a>
              </Magnetic>
              <a href="#portfolio" className="btn-ghost px-8 py-4 text-base md:text-lg">
                View Work
              </a>
            </div>
          </Reveal>

          {/* Stats — typographic row, hairline-divided */}
          <Reveal delay={420} y={30}>
            <div className="grid grid-cols-1 sm:grid-cols-3 max-w-4xl mx-auto mt-16 divide-y sm:divide-y-0 sm:divide-x divide-white/[0.08] border-y border-white/[0.08]">
              {stats.map((stat) => (
                <div key={stat.label} className="py-8 sm:py-9 px-6">
                  <AnimatedCounter
                    end={stat.end}
                    suffix={stat.suffix}
                    className="font-display text-4xl md:text-5xl font-bold text-white tabular-nums mb-2"
                  />
                  <div className="text-white/45 text-xs md:text-[13px] font-medium tracking-[0.14em] uppercase">{stat.label}</div>
                </div>
              ))}
            </div>
          </Reveal>

          {/* Scroll cue */}
          <Reveal delay={650} y={0}>
            <a
              href="#clients"
              aria-label="Scroll to content"
              className="inline-flex flex-col items-center gap-2 mt-16 text-white/30 hover:text-white/60 transition-colors duration-300"
            >
              <span className="text-[11px] font-medium uppercase tracking-[0.25em]">Scroll</span>
              <svg className="w-4 h-4 animate-scroll-cue" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                <path strokeLinecap="round" strokeLinejoin="round" d="M19 9l-7 7-7-7" />
              </svg>
            </a>
          </Reveal>

        </div>
      </div>
    </section>
  );
}

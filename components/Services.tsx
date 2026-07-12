import { Handshake, TrendingUp, Coins } from "lucide-react";
import Reveal from "./Reveal";
import AnimatedCounter from "./AnimatedCounter";

/* ─── Illustrated figures ───
   Each card gets a real visual centerpiece instead of a corner glyph.
   The `.service-figure` / `.figure-front` / `.figure-halo` / `.service-ring`
   classes drive the springy pop on hover / focus / press — see globals.css
   for the interaction system (incl. reduced-motion and coarse-pointer
   handling). All figures are decorative, so they're aria-hidden. */

/** Editor at a monitor, cutting a video together — custom line-art SVG
    matching the site's hairline / lucide stroke aesthetic. */
function AgencyFigure() {
  return (
    <svg
      viewBox="0 0 220 150"
      fill="none"
      className="w-full max-w-[230px] h-auto"
      aria-hidden="true"
    >
      {/* Back layer: monitor, screen, timeline, desk */}
      <g>
        {/* Monitor frame */}
        <rect x="58" y="14" width="104" height="68" rx="7" stroke="rgba(255,255,255,0.5)" strokeWidth="1.5" />
        {/* Video preview with play button */}
        <rect x="66" y="22" width="60" height="34" rx="3" stroke="rgba(255,255,255,0.28)" strokeWidth="1.25" />
        <path d="M91 32 l13 7 -13 7 z" fill="#ff5a1f" />
        {/* Edit-panel lines */}
        <line x1="133" y1="27" x2="154" y2="27" stroke="rgba(255,255,255,0.28)" strokeWidth="1.5" strokeLinecap="round" />
        <line x1="133" y1="35" x2="149" y2="35" stroke="rgba(255,255,255,0.2)" strokeWidth="1.5" strokeLinecap="round" />
        <line x1="133" y1="43" x2="154" y2="43" stroke="rgba(255,255,255,0.28)" strokeWidth="1.5" strokeLinecap="round" />
        <line x1="133" y1="51" x2="145" y2="51" stroke="rgba(255,255,255,0.2)" strokeWidth="1.5" strokeLinecap="round" />
        {/* Timeline with clips */}
        <rect x="66" y="63" width="88" height="11" rx="2" stroke="rgba(255,255,255,0.28)" strokeWidth="1.25" />
        <rect x="69" y="66" width="17" height="5" rx="1" fill="rgba(255,255,255,0.25)" />
        <rect x="89" y="66" width="13" height="5" rx="1" fill="#ff5a1f" opacity="0.85" />
        <rect x="105" y="66" width="21" height="5" rx="1" fill="rgba(255,255,255,0.25)" />
        <rect x="129" y="66" width="12" height="5" rx="1" fill="rgba(255,255,255,0.16)" />
        {/* Playhead */}
        <line x1="96" y1="59" x2="96" y2="78" stroke="#ff5a1f" strokeWidth="1.5" strokeLinecap="round" />
        {/* Stand + desk */}
        <line x1="110" y1="82" x2="110" y2="96" stroke="rgba(255,255,255,0.35)" strokeWidth="1.5" />
        <line x1="38" y1="102" x2="182" y2="102" stroke="rgba(255,255,255,0.35)" strokeWidth="1.5" strokeLinecap="round" />
        {/* Sparks — the "cooking" */}
        <path d="M175 12 v10 M170 17 h10" stroke="#ff5a1f" strokeWidth="1.5" strokeLinecap="round" />
        <path d="M50 8 v7 M46.5 11.5 h7" stroke="rgba(255,255,255,0.45)" strokeWidth="1.5" strokeLinecap="round" />
      </g>
      {/* Front layer: the editor, seated in front of the desk (pops slightly more) */}
      <g className="figure-front">
        <path d="M64 142 a24 24 0 0 1 48 0" fill="#08080a" stroke="rgba(255,255,255,0.55)" strokeWidth="1.5" />
        <circle cx="88" cy="107" r="12" fill="#08080a" stroke="rgba(255,255,255,0.55)" strokeWidth="1.5" />
        {/* Headphones */}
        <path d="M76.5 105 a11.5 11.5 0 0 1 23 0" stroke="#ff5a1f" strokeWidth="1.5" fill="none" strokeLinecap="round" />
        <circle cx="76.5" cy="106.5" r="2" fill="#ff5a1f" />
        <circle cx="99.5" cy="106.5" r="2" fill="#ff5a1f" />
      </g>
    </svg>
  );
}

/** Handshake elevated into a proper figure — layered depth shadow, halo
    glow, and an orbit ring (with accent dot) that swings on interaction. */
function PartnershipFigure() {
  return (
    <div className="relative w-36 h-36 flex items-center justify-center" aria-hidden="true">
      <div className="figure-halo absolute inset-4 rounded-full bg-accent/20 blur-2xl" />
      <svg viewBox="0 0 144 144" fill="none" className="service-ring absolute inset-0 w-full h-full">
        <circle cx="72" cy="72" r="66" stroke="rgba(255,255,255,0.16)" strokeWidth="1" strokeDasharray="3 7" />
        <circle cx="72" cy="6" r="3" fill="#ff5a1f" />
      </svg>
      {/* Depth shadow copy */}
      <Handshake strokeWidth={1.25} className="absolute w-16 h-16 text-accent/25 blur-[6px] translate-y-2" />
      <Handshake strokeWidth={1.25} className="figure-front figure-tint relative w-16 h-16 text-white/85" />
    </div>
  );
}

/** Animated counter as the centerpiece — counts up to $100K+, backing the
    "six figures a month" claim already established on this card. */
function RevenueFigure() {
  return (
    <div className="relative flex flex-col items-center" aria-hidden="true">
      <div className="figure-halo absolute -inset-x-10 -inset-y-6 rounded-full bg-accent/10 blur-2xl" />
      <Coins strokeWidth={1} className="absolute -top-8 left-1/2 -translate-x-1/2 w-24 h-24 text-white/[0.06]" />
      <div className="figure-front relative flex items-center gap-2">
        <TrendingUp strokeWidth={1.75} className="figure-tint w-6 h-6 text-accent" />
        <div className="flex items-baseline">
          <span className="font-display text-5xl font-bold text-white">$</span>
          <AnimatedCounter
            end={100}
            suffix="K+"
            className="font-display text-5xl font-bold text-white tabular-nums"
          />
        </div>
      </div>
    </div>
  );
}

const services = [
  {
    title: "Agency",
    description:
      "Every service that goes into content — editing, thumbnails, scripts, and strategy, plus anything else your channel needs.",
    figure: AgencyFigure,
  },
  {
    title: "Partnership",
    description:
      "We handle everything from start to end — providing every resource your channel needs to grow.",
    figure: PartnershipFigure,
    badge: "Free",
  },
  {
    title: "Revenue Streams",
    description:
      "Monetization across Spotify, Snapchat, Facebook, and compilation channels — adding six figures a month in new revenue.",
    figure: RevenueFigure,
    badge: "Free",
  },
];

export default function Services() {
  return (
    <section id="services" className="relative py-24 md:py-28 overflow-hidden">
      {/* Cosmic tint: violet-magenta nebula region — atmosphere only, UI accents stay ember */}
      <div className="absolute top-1/3 right-[-8%] w-[400px] h-[400px] rounded-full bg-[#8b5cf6]/[0.055] blur-[100px] pointer-events-none" />
      <div className="absolute bottom-[-10%] left-[-10%] w-[340px] h-[340px] rounded-full bg-[#d946ef]/[0.03] blur-[110px] pointer-events-none" />
      <div className="relative z-10 container mx-auto px-6">
        <div className="max-w-6xl mx-auto">

          <Reveal>
            <div className="text-center mb-14">
              <p className="eyebrow mb-4">What we do</p>
              <h2 className="font-display text-4xl md:text-5xl lg:text-6xl font-bold tracking-tight text-white mb-4">
                Services
              </h2>
              <p className="text-white/50 text-lg max-w-2xl mx-auto">
                Three ways we work with creators and brands
              </p>
            </div>
          </Reveal>

          {/* Hairline grid */}
          <Reveal delay={120}>
            <div className="grid sm:grid-cols-3 gap-px bg-white/[0.08] border border-white/[0.08]">
              {services.map((service, index) => (
                <div
                  key={service.title}
                  tabIndex={0}
                  className="service-card group relative bg-[#08080a] p-8 md:p-10 transition-colors duration-300 hover:bg-white/[0.03]"
                >
                  <span className="absolute top-8 right-8 font-mono text-xs text-white/25 tabular-nums">
                    {String(index + 1).padStart(2, "0")}
                  </span>
                  <div className="service-figure flex items-center justify-center h-40 md:h-44 mb-8">
                    <service.figure />
                  </div>
                  <h3 className="font-display text-xl font-bold text-white mb-2 flex items-center gap-2">
                    {service.title}
                    {service.badge && (
                      <span className="font-sans text-[10px] font-semibold uppercase tracking-widest text-accent/80 border border-accent/30 rounded-full px-2 py-0.5">
                        {service.badge}
                      </span>
                    )}
                  </h3>
                  <p className="text-white/50 text-sm leading-relaxed">{service.description}</p>
                </div>
              ))}
            </div>
          </Reveal>

        </div>
      </div>
    </section>
  );
}

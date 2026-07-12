"use client";

import Image from "next/image";
import { useState } from "react";
import { Eye } from "lucide-react";
import Reveal from "./Reveal";
import { portfolioItems } from "./portfolio-data";

/* ────────────────────────────────────────────────────────────
   Data model
   ──────────────────────────────────────────────────────────── */

type Stat = { value: string; label: string };

type Evidence = {
  src: string;
  alt: string;
  width: number;
  height: number;
  /** Shown in the frame's title bar, e.g. "YouTube Studio — Subscriber growth" */
  caption: string;
  /** "light" for native light-UI captures (YouTube Studio / Analytics, etc.) */
  tone?: "light" | "dark";
};

type CaseStudy = {
  id: string;
  filter: "youtube" | "spotify";
  name: string;
  avatar: string;
  /** Small context line under the name, e.g. "YouTube · 7M subscribers" */
  meta: string;
  /** The headline outcome, rendered in accent */
  headline: string;
  stats: Stat[];
  /** ONE short line of context — what the engagement was. The stat row and
      screenshots carry the story; this is deliberately not a paragraph. */
  context: string;
  evidence: Evidence[];
  /** Matches `client` in portfolio-data — surfaces that client's real work inside the card */
  portfolioClient?: string;
  /**
   * Optional pull-quote. Renders only when present — real testimonials only,
   * dropped in as a one-line data change. Never ship placeholder quotes.
   */
  quote?: { text: string; author: string; role?: string };
};

const caseStudies: CaseStudy[] = [
  {
    id: "tyler-spotify",
    filter: "spotify",
    name: "Tyler Vitelli's Stories",
    avatar: "/tyler.jpg",
    meta: "Spotify · Revenue Streams",
    headline: "Top 100 Podcasts in the USA in 3 months",
    stats: [
      { value: "#92", label: "Top Podcasts — USA" },
      { value: "#47", label: "Comedy Podcasts — AU" },
      { value: "3 mo", label: "Launch to Top 100 USA" },
    ],
    context:
      "Launched Tyler's content as a Spotify podcast under our Revenue Streams model — no fee, percentage only.",
    evidence: [
      { src: "/tyler-podcast-rank.png", alt: "#92 on Spotify Top Podcasts USA", width: 1200, height: 675, caption: "Spotify Charts — #92 Top Podcasts USA", tone: "dark" },
      { src: "/tyler-podcast-comedy-rank.png", alt: "#47 on Spotify Top Comedy Podcasts Australia", width: 1200, height: 675, caption: "Spotify Charts — #47 Comedy AU", tone: "dark" },
    ],
  },
];

/* ────────────────────────────────────────────────────────────
   Building blocks
   ──────────────────────────────────────────────────────────── */

function CaseCard({ children, className = "" }: { children: React.ReactNode; className?: string }) {
  return (
    <div className={`group relative rounded-2xl border border-white/[0.07] bg-gradient-to-b from-white/[0.035] to-white/[0.01] transition-all duration-300 hover:border-white/[0.14] hover:shadow-[0_20px_60px_-25px_rgba(0,0,0,0.8)] ${className}`}>
      {/* Corner brackets */}
      <div className="absolute top-0 left-0 w-6 h-6 border-t-2 border-l-2 border-accent/40 rounded-tl-2xl pointer-events-none transition-colors duration-300 group-hover:border-accent/80" />
      <div className="absolute top-0 right-0 w-6 h-6 border-t-2 border-r-2 border-accent/40 rounded-tr-2xl pointer-events-none transition-colors duration-300 group-hover:border-accent/80" />
      <div className="absolute bottom-0 left-0 w-6 h-6 border-b-2 border-l-2 border-accent/40 rounded-bl-2xl pointer-events-none transition-colors duration-300 group-hover:border-accent/80" />
      <div className="absolute bottom-0 right-0 w-6 h-6 border-b-2 border-r-2 border-accent/40 rounded-br-2xl pointer-events-none transition-colors duration-300 group-hover:border-accent/80" />
      {children}
    </div>
  );
}

/**
 * Slim browser-chrome frame so raw dashboard captures read as intentional
 * evidence. `compact` slims the chrome for supporting shots so the lead
 * capture visibly outranks them.
 */
function BrowserFrame({ shot, compact = false }: { shot: Evidence; compact?: boolean }) {
  return (
    <figure className="rounded-xl overflow-hidden border border-white/[0.08] bg-[#0d0d10] shadow-[0_16px_40px_-24px_rgba(0,0,0,0.9)]">
      <div className={`flex items-center border-b border-white/[0.06] bg-white/[0.03] ${compact ? "gap-2 px-3 py-1.5" : "gap-2.5 px-3.5 py-2"}`}>
        <div className={`flex items-center shrink-0 ${compact ? "gap-1" : "gap-1.5"}`} aria-hidden="true">
          <span className={`rounded-full bg-white/15 ${compact ? "w-1.5 h-1.5" : "w-2 h-2"}`} />
          <span className={`rounded-full bg-white/15 ${compact ? "w-1.5 h-1.5" : "w-2 h-2"}`} />
          <span className={`rounded-full bg-white/15 ${compact ? "w-1.5 h-1.5" : "w-2 h-2"}`} />
        </div>
        <figcaption className={`font-medium uppercase text-white/30 truncate ${compact ? "text-[9px] tracking-[0.14em]" : "text-[10px] tracking-[0.16em]"}`}>
          {shot.caption}
        </figcaption>
      </div>
      <div className={shot.tone === "light" ? "bg-white" : "bg-black/30"}>
        <Image src={shot.src} alt={shot.alt} width={shot.width} height={shot.height} className="w-full h-auto" />
      </div>
    </figure>
  );
}

function CaseStudyCard({ cs }: { cs: CaseStudy }) {
  const clientWork = cs.portfolioClient
    ? portfolioItems
        .filter((item) => item.client === cs.portfolioClient && !item.isShort && item.image)
        .sort((a, b) => (a.category === "thumbnails" ? 0 : 1) - (b.category === "thumbnails" ? 0 : 1))
        .slice(0, 3)
    : [];

  // First evidence entry is the money shot; the rest render smaller beside it.
  const [leadShot, ...supportingShots] = cs.evidence;

  return (
    <CaseCard className="p-6 md:p-8">
      {/* Header */}
      <div className="flex items-center gap-4 mb-7">
        <div className="w-12 h-12 rounded-full overflow-hidden ring-2 ring-white/15 shrink-0">
          <Image src={cs.avatar} alt={cs.name} width={48} height={48} className="w-full h-full object-cover" />
        </div>
        <div className="min-w-0">
          <div className="flex flex-wrap items-baseline gap-x-2.5 gap-y-0.5">
            <span className="text-white font-bold text-base md:text-lg leading-snug">{cs.name}</span>
            <span className="text-white/35 text-xs font-medium tracking-wide">{cs.meta}</span>
          </div>
          <div className="font-display text-xl md:text-2xl font-bold text-accent leading-snug mt-0.5">
            {cs.headline}
          </div>
          {/* Single line of context — the stats and screenshots do the talking */}
          <p className="text-white/45 text-sm leading-relaxed mt-1.5">{cs.context}</p>
        </div>
      </div>

      {/* Headline stats — typographic, hairline-divided (matches hero) */}
      <div className="grid grid-cols-3 divide-x divide-white/[0.08] border-y border-white/[0.08] mb-7">
        {cs.stats.map((stat) => (
          <div key={stat.label} className="py-5 px-3 md:px-5">
            <div className="font-display text-2xl md:text-3xl font-bold text-white tabular-nums">{stat.value}</div>
            <div className="mt-1.5 text-white/40 text-[10px] md:text-[11px] font-medium tracking-[0.12em] uppercase leading-snug">{stat.label}</div>
          </div>
        ))}
      </div>

      {/*
        Evidence carries the whole body: one lead capture at 3/5 width,
        supporting shots stacked beside it at 2/5 — no prose column.
      */}
      <div className="grid gap-3 lg:grid-cols-5 items-start">
        <div className={supportingShots.length > 0 ? "lg:col-span-3" : "lg:col-span-5"}>
          <BrowserFrame shot={leadShot} />
        </div>
        {supportingShots.length > 0 && (
          <div className="lg:col-span-2 grid gap-3 content-start">
            {supportingShots.map((shot) => (
              <BrowserFrame key={shot.src} shot={shot} compact />
            ))}
          </div>
        )}
      </div>

      {/* Optional testimonial — renders only when real quote data exists */}
      {cs.quote && (
        <blockquote className="relative rounded-xl border border-accent/20 bg-accent/[0.05] p-5 mt-6">
          <div className="font-display text-3xl text-accent/60 leading-none select-none" aria-hidden="true">&ldquo;</div>
          <p className="text-white/75 text-sm leading-relaxed mt-1">{cs.quote.text}</p>
          <footer className="mt-3 text-xs font-semibold text-white/45">
            {cs.quote.author}
            {cs.quote.role && <span className="text-white/30 font-normal"> — {cs.quote.role}</span>}
          </footer>
        </blockquote>
      )}

      {/* Real client work — full-width band so the columns above stay balanced */}
      {clientWork.length > 0 && (
        <div className="mt-8 pt-6 border-t border-white/[0.07]">
          <div className="text-[11px] font-semibold uppercase tracking-[0.18em] text-white/35 mb-3">
            The thumbnails behind the growth
          </div>
          <div className="grid grid-cols-3 gap-2.5 md:gap-3.5">
            {clientWork.map((item) => (
              <div key={item.id} className="relative aspect-video rounded-lg overflow-hidden border border-white/[0.08]">
                <Image
                  src={item.image}
                  alt={item.title}
                  fill
                  sizes="(max-width: 768px) 33vw, 300px"
                  className="object-cover"
                />
                {item.views && (
                  <div className="absolute bottom-1.5 right-1.5 inline-flex items-center gap-1 px-1.5 py-0.5 rounded-full bg-black/70 backdrop-blur-sm border border-white/10 text-white/90 text-[10px] font-semibold">
                    <Eye size={10} strokeWidth={2.2} />
                    {item.views}
                  </div>
                )}
              </div>
            ))}
          </div>
        </div>
      )}
    </CaseCard>
  );
}

/* ────────────────────────────────────────────────────────────
   Section
   ──────────────────────────────────────────────────────────── */

export default function CaseStudies() {
  const [activeFilter, setActiveFilter] = useState<"youtube" | "spotify">("youtube");

  const filters = [
    { id: "youtube", label: "YouTube" },
    { id: "spotify", label: "Spotify" },
  ] as const;

  const visibleCases = caseStudies.filter((cs) => cs.filter === activeFilter);
  const isYouTube = activeFilter === "youtube";

  return (
    <section id="case-studies" className="relative py-28 md:py-32 overflow-hidden">
      {/* Stays ember — this is the branded proof section; faint gold companion adds nebula depth */}
      <div className="absolute top-1/2 right-[-5%] w-[400px] h-[400px] rounded-full bg-accent/[0.04] blur-[100px] pointer-events-none" />
      <div className="absolute top-16 left-[-10%] w-[340px] h-[340px] rounded-full bg-[#f59e0b]/[0.025] blur-[110px] pointer-events-none" />

      <div className="relative z-10 container mx-auto px-6">
        <div className="max-w-5xl mx-auto">

          <Reveal>
            <div className="text-center mb-14">
              <p className="eyebrow mb-4">Proof of work</p>
              <h2 className="font-display text-4xl md:text-5xl lg:text-6xl font-bold tracking-tight text-white mb-4">
                Case Studies
              </h2>
              <p className="text-white/50 text-lg">Real channels, real numbers — straight from the dashboards</p>
            </div>
          </Reveal>

          {/* Filter Tabs — segmented control */}
          <Reveal delay={100}>
            <div className="flex justify-center mb-12">
              <div className="inline-flex gap-1 p-1.5 rounded-full border border-white/[0.08] bg-white/[0.03] backdrop-blur-sm">
                {filters.map((filter) => (
                  <button
                    key={filter.id}
                    onClick={() => setActiveFilter(filter.id)}
                    className={`px-6 py-2.5 rounded-full text-sm font-semibold transition-all duration-300 ${
                      activeFilter === filter.id
                        ? "bg-accent text-[#0a0a0a]"
                        : "text-white/55 hover:text-white hover:bg-white/[0.06]"
                    }`}
                  >
                    {filter.label}
                  </button>
                ))}
              </div>
            </div>
          </Reveal>

          {isYouTube ? (
            <div key="youtube" className="grid md:grid-cols-2 gap-6 animate-fadeIn">

              {/* ── Tyler Vitelli ── */}
              <Reveal>
                <CaseCard className="p-5 h-full">
                  <div className="flex items-center gap-3 mb-5">
                    <div className="w-9 h-9 rounded-full overflow-hidden ring-2 ring-white/15 shrink-0">
                      <Image src="/tyler.jpg" alt="Tyler Vitelli" width={36} height={36} className="w-full h-full object-cover" />
                    </div>
                    <div className="text-base md:text-lg font-bold text-white leading-snug">
                      Tyler Vitelli (7M):{" "}
                      <span className="text-accent">100K → 5M+ subs in a year</span>
                    </div>
                  </div>

                  <div className="flex flex-col gap-2">
                    <div className="grid grid-cols-2 gap-2">
                      <div className="rounded-lg overflow-hidden border border-white/[0.07] bg-black/20">
                        <Image src="/betterquality.png" alt="100K → 5M+ Subs" width={600} height={400} className="w-full h-auto" />
                      </div>
                      <div className="rounded-lg overflow-hidden border border-white/[0.07] bg-white flex items-center justify-center p-1">
                        <Image src="/100m in 48 hours .PNG" alt="100M+ views in 48 hours" width={600} height={400} className="w-full h-auto object-contain mx-auto scale-110" />
                      </div>
                    </div>
                    <div className="rounded-lg overflow-hidden border border-white/[0.07] bg-white">
                      <Image src="/tyler-views.png" alt="8.4M views on a single video" width={1200} height={400} className="w-full h-auto" />
                    </div>
                  </div>
                </CaseCard>
              </Reveal>

              {/* ── Dylan Carey ── */}
              <Reveal delay={120}>
                <CaseCard className="p-5 h-full">
                  <div className="flex items-center gap-3 mb-5">
                    <div className="w-9 h-9 rounded-full overflow-hidden ring-2 ring-white/15 shrink-0">
                      <Image src="/dylancarey.jpg" alt="Dylan Carey" width={36} height={36} className="w-full h-full object-cover" />
                    </div>
                    <div className="text-base md:text-lg font-bold text-white leading-snug">
                      Dylan Carey (100K):{" "}
                      <span className="text-accent">20K → 75K subs in 2 weeks</span>
                    </div>
                  </div>

                  <div className="flex flex-col gap-2">
                    <div className="rounded-lg overflow-hidden border border-white/[0.07] bg-white">
                      <Image src="/dylan-stats.png" alt="Dylan Carey stats" width={1364} height={274} className="w-full h-auto" />
                    </div>
                    <div className="rounded-lg overflow-hidden border border-white/[0.07] bg-white">
                      <Image src="/dylan-growth.png" alt="Dylan Carey channel growth" width={2174} height={536} className="w-full h-auto" />
                    </div>
                    <div className="rounded-lg overflow-hidden border border-white/[0.07] bg-white">
                      <Image src="/dylan-50k.webp" alt="Dylan Carey 50K subscribers dashboard" width={1928} height={852} className="w-full h-auto" />
                    </div>
                  </div>
                </CaseCard>
              </Reveal>

            </div>
          ) : (
            <div key="spotify" className="flex flex-col gap-8 animate-fadeIn">
              {visibleCases.map((cs, index) => (
                <Reveal key={cs.id} delay={index * 120}>
                  <CaseStudyCard cs={cs} />
                </Reveal>
              ))}
            </div>
          )}

        </div>
      </div>
    </section>
  );
}

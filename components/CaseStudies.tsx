"use client";

import Image from "next/image";
import { useState } from "react";

export default function CaseStudies() {
  const [activeFilter, setActiveFilter] = useState("youtube");

  const filters = [
    { id: "youtube", label: "YouTube" },
    { id: "spotify", label: "Spotify" },
  ];

  return (
    <section id="case-studies" className="relative py-32 overflow-hidden">
      <div className="absolute top-1/2 right-[-5%] w-[400px] h-[400px] rounded-full bg-purple-700/10 blur-[100px] pointer-events-none" />

      <div className="relative z-10 container mx-auto px-6">
        <div className="max-w-5xl mx-auto">

          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl lg:text-6xl font-bold text-white mb-4">Case Studies</h2>
            <p className="text-white/50 text-lg">Results Speak For Themselves</p>
          </div>

          {/* Filter Tabs */}
          <div className="flex flex-wrap justify-center gap-3 mb-12">
            {filters.map((filter) => (
              <button
                key={filter.id}
                onClick={() => setActiveFilter(filter.id)}
                className={`px-6 py-2.5 rounded-full text-sm font-semibold transition-all duration-200 ${
                  activeFilter === filter.id
                    ? "bg-gradient-to-r from-purple-600 to-blue-600 text-white shadow-[0_0_20px_rgba(139,92,246,0.4)]"
                    : "border border-white/10 text-white/60 hover:border-white/20 hover:text-white hover:bg-white/5"
                }`}
              >
                {filter.label}
              </button>
            ))}
          </div>

          {activeFilter === "youtube" && (
            <div className="grid md:grid-cols-2 gap-6">

              {/* ── Tyler Vitelli ── */}
              <div className="relative rounded-2xl border border-white/5 bg-white/[0.02] p-5">
                <div className="absolute top-0 left-0 w-6 h-6 border-t-2 border-l-2 border-purple-500/50 rounded-tl-2xl pointer-events-none" />
                <div className="absolute top-0 right-0 w-6 h-6 border-t-2 border-r-2 border-purple-500/50 rounded-tr-2xl pointer-events-none" />
                <div className="absolute bottom-0 left-0 w-6 h-6 border-b-2 border-l-2 border-blue-500/50 rounded-bl-2xl pointer-events-none" />
                <div className="absolute bottom-0 right-0 w-6 h-6 border-b-2 border-r-2 border-blue-500/50 rounded-br-2xl pointer-events-none" />

                <div className="flex items-center gap-3 mb-4">
                  <div className="w-8 h-8 rounded-full overflow-hidden ring-2 ring-purple-500/40 shrink-0">
                    <Image src="/tyler.jpg" alt="Tyler Vitelli" width={32} height={32} className="w-full h-full object-cover" />
                  </div>
                  <div>
                    <div className="text-lg font-bold text-white whitespace-nowrap">
                      Tyler Vitelli (7M): <span className="text-transparent bg-clip-text bg-gradient-to-r from-purple-400 to-blue-400">100K → 5M+ subs in a year</span>
                    </div>
                  </div>
                </div>

                <div className="flex flex-col gap-2">
                  <div className="grid grid-cols-2 gap-2">
                    <div className="rounded-lg overflow-hidden border border-white/5 bg-black/20">
                      <Image src="/betterquality.png" alt="100K → 5M+ Subs" width={600} height={400} className="w-full h-auto" />
                    </div>
                    <div className="rounded-lg overflow-hidden border border-white/5 bg-white flex items-center justify-center p-1">
                      <Image src="/100m in 48 hours .PNG" alt="100M+ views in 48 hours" width={600} height={400} className="w-full h-auto object-contain mx-auto scale-110" />
                    </div>
                  </div>
                  <div className="rounded-lg overflow-hidden border border-white/5 bg-white">
                    <Image src="/tyler-views.png" alt="8.4M views on a single video" width={1200} height={400} className="w-full h-auto" />
                  </div>
                </div>
              </div>

              {/* ── Dylan Carey ── */}
              <div className="relative rounded-2xl border border-white/5 bg-white/[0.02] p-5">
                <div className="absolute top-0 left-0 w-6 h-6 border-t-2 border-l-2 border-purple-500/50 rounded-tl-2xl pointer-events-none" />
                <div className="absolute top-0 right-0 w-6 h-6 border-t-2 border-r-2 border-purple-500/50 rounded-tr-2xl pointer-events-none" />
                <div className="absolute bottom-0 left-0 w-6 h-6 border-b-2 border-l-2 border-blue-500/50 rounded-bl-2xl pointer-events-none" />
                <div className="absolute bottom-0 right-0 w-6 h-6 border-b-2 border-r-2 border-blue-500/50 rounded-br-2xl pointer-events-none" />

                <div className="flex items-center gap-3 mb-4">
                  <div className="w-8 h-8 rounded-full overflow-hidden ring-2 ring-purple-500/40 shrink-0">
                    <Image src="/dylancarey.jpg" alt="Dylan Carey" width={32} height={32} className="w-full h-full object-cover" />
                  </div>
                  <div>
                    <div className="text-lg font-bold text-white whitespace-nowrap">
                      Dylan Carey (100K): <span className="text-transparent bg-clip-text bg-gradient-to-r from-purple-400 to-blue-400">20K → 75K subs in 2 weeks</span>
                    </div>
                  </div>
                </div>

                <div className="flex flex-col gap-2">
                  <div className="rounded-lg overflow-hidden border border-white/5 bg-white">
                    <Image src="/dylan-stats.png" alt="Dylan Carey stats" width={1364} height={274} className="w-full h-auto" />
                  </div>
                  <div className="rounded-lg overflow-hidden border border-white/5 bg-white">
                    <Image src="/dylan-growth.png" alt="Dylan Carey channel growth" width={2174} height={536} className="w-full h-auto" />
                  </div>
                  <div className="rounded-lg overflow-hidden border border-white/5 bg-white">
                    <Image src="/dylan-50k.webp" alt="Dylan Carey 50K subscribers dashboard" width={1928} height={852} className="w-full h-auto" />
                  </div>
                </div>
              </div>

            </div>
          )}

          {activeFilter === "spotify" && (
            <div>

              {/* ── Tyler Vitelli's Stories (Podcast) ── */}
              <div className="relative rounded-2xl border border-white/5 bg-white/[0.02] p-8">
                <div className="absolute top-0 left-0 w-6 h-6 border-t-2 border-l-2 border-purple-500/50 rounded-tl-2xl pointer-events-none" />
                <div className="absolute top-0 right-0 w-6 h-6 border-t-2 border-r-2 border-purple-500/50 rounded-tr-2xl pointer-events-none" />
                <div className="absolute bottom-0 left-0 w-6 h-6 border-b-2 border-l-2 border-blue-500/50 rounded-bl-2xl pointer-events-none" />
                <div className="absolute bottom-0 right-0 w-6 h-6 border-b-2 border-r-2 border-blue-500/50 rounded-br-2xl pointer-events-none" />

                <div className="flex items-center gap-3 mb-6">
                  <div className="w-10 h-10 rounded-full overflow-hidden ring-2 ring-purple-500/40 shrink-0">
                    <Image src="/tyler.jpg" alt="Tyler Vitelli" width={40} height={40} className="w-full h-full object-cover" />
                  </div>
                  <div>
                    <div className="text-xl font-bold text-white whitespace-nowrap">
                      Tyler Vitelli&apos;s Stories: <span className="text-transparent bg-clip-text bg-gradient-to-r from-purple-400 to-blue-400">Top 100 Podcasts USA in 3 Months</span>
                    </div>
                  </div>
                </div>

                <div className="grid md:grid-cols-2 gap-4">
                  <div className="rounded-lg overflow-hidden border border-white/5">
                    <Image src="/tyler-podcast-rank.png" alt="#92 on Spotify Top Podcasts USA" width={1200} height={675} className="w-full h-auto" />
                  </div>
                  <div className="rounded-lg overflow-hidden border border-white/5">
                    <Image src="/tyler-podcast-comedy-rank.png" alt="#47 on Spotify Top Comedy Podcasts AU" width={1200} height={675} className="w-full h-auto" />
                  </div>
                </div>
              </div>

            </div>
          )}

        </div>
      </div>
    </section>
  );
}

"use client";

import Image from "next/image";
import AnimatedCounter from "./AnimatedCounter";

export default function CaseStudies() {
  return (
    <section className="relative py-32 bg-[#0a0014] overflow-hidden">
      {/* Background gradient blur effects */}
      <div className="absolute inset-0 overflow-hidden">
        <div className="absolute top-1/3 left-1/4 w-96 h-96 bg-purple-600/20 rounded-full blur-[120px]"></div>
        <div className="absolute bottom-1/3 right-1/4 w-96 h-96 bg-blue-600/15 rounded-full blur-[120px]"></div>
      </div>

      <div className="relative container mx-auto px-6">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-20">
            <h2 className="text-5xl md:text-7xl lg:text-8xl font-bold text-white mb-8">
              Case Studies
            </h2>
            <p className="text-2xl md:text-3xl text-white/60 max-w-3xl mx-auto">
              Real results from real creators
            </p>
          </div>

          {/* Main Case Study */}
          <div className="max-w-6xl mx-auto">
            <div className="p-8 md:p-12 rounded-3xl border border-purple-500/30 backdrop-blur-sm bg-gradient-to-br from-purple-600/10 to-blue-600/10 hover:border-purple-500/50 transition-all duration-300">
              <div className="grid md:grid-cols-2 gap-12 items-start">
                {/* Left side - Creator & Subscriber Growth */}
                <div>
                  {/* Creator Profile */}
                  <div className="flex items-center gap-4 mb-12">
                    <div className="w-16 h-16 rounded-full overflow-hidden border-2 border-purple-400">
                      <Image
                        src="/tyler.jpg"
                        alt="Tyler Vitelli"
                        width={64}
                        height={64}
                        className="w-full h-full object-cover"
                      />
                    </div>
                    <div>
                      <div className="text-2xl font-bold text-white">Tyler Vitelli</div>
                      <div className="text-lg text-purple-400">6M+ Subscribers</div>
                    </div>
                  </div>

                  {/* Subscriber Growth */}
                  <div className="mb-8">
                    <div className="text-6xl md:text-7xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-purple-400 to-blue-500 mb-4">
                      100K → 5M
                    </div>
                    <div className="text-3xl md:text-4xl text-white font-semibold mb-6">
                      Subscribers in 1 Year
                    </div>
                  </div>

                  {/* Current Subscribers Image */}
                  <div className="relative rounded-2xl overflow-hidden border border-white/10 bg-white/5">
                    {/* eslint-disable-next-line @next/next/no-img-element */}
                    <img
                      src="/tyler-stats.png"
                      alt="Tyler Vitelli current subscribers and stats"
                      className="w-full h-auto"
                      style={{
                        imageRendering: '-webkit-optimize-contrast',
                        transform: 'translateZ(0)',
                        backfaceVisibility: 'hidden',
                        display: 'block'
                      }}
                    />
                  </div>
                </div>

                {/* Right side - Views Analytics */}
                <div className="relative">
                  {/* 100M+ Stat */}
                  <div className="mb-8">
                    <div className="text-6xl md:text-8xl font-bold text-purple-400 mb-3">
                      100M+
                    </div>
                    <div className="text-2xl md:text-3xl text-white/80">
                      Last 48 Hours
                    </div>
                  </div>

                  {/* Analytics Image */}
                  <div className="relative rounded-2xl overflow-hidden border border-white/10 bg-white/5 hover:scale-[1.02] transition-transform duration-300">
                    <Image
                      src="/analytics.png"
                      alt="100M+ views in 48 hours analytics"
                      width={600}
                      height={400}
                      className="w-full h-full object-cover rounded-lg"
                    />
                    <div className="absolute top-0 left-0 right-0 bottom-0 bg-gradient-to-t from-purple-600/10 to-transparent pointer-events-none"></div>

                    {/* Verified Badge - Overlaid on image */}
                    <div className="absolute top-4 right-4 px-4 py-2 bg-gradient-to-r from-purple-600 to-blue-600 rounded-full shadow-lg">
                      <div className="text-sm font-bold text-white">
                        VERIFIED RESULTS
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* CTA */}
          <div className="text-center mt-16">
            <a
              href="https://calendly.com/josh-visualvortex"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-block px-8 py-4 bg-gradient-to-r from-purple-600 to-blue-600 rounded-lg font-semibold text-lg text-white hover:shadow-[0_0_40px_rgba(124,58,237,0.5)] transition-all duration-300 hover:-translate-y-1"
            >
              Get Similar Results
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}

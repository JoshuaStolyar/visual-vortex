"use client";

import Image from "next/image";

export default function CaseStudies() {
  return (
    <section id="case-studies" className="relative py-32 overflow-hidden">
      <div className="absolute top-1/2 right-[-5%] w-[400px] h-[400px] rounded-full bg-purple-700/10 blur-[100px] pointer-events-none" />

      <div className="relative z-10 container mx-auto px-6">
        <div className="max-w-5xl mx-auto">
          <div className="text-center mb-16">
            <p className="text-white/40 text-sm font-medium uppercase tracking-widest mb-3">Proof</p>
            <h2 className="text-4xl md:text-5xl lg:text-6xl font-bold text-white mb-4">Case Studies</h2>
            <p className="text-white/50 text-lg">Real results from real creators</p>
          </div>

          {/* Creator Profile */}
          <div className="flex items-center gap-4 mb-10">
            <div className="w-16 h-16 rounded-full overflow-hidden ring-2 ring-purple-500/40">
              <Image src="/tyler.jpg" alt="Tyler Vitelli" width={64} height={64} className="w-full h-full object-cover" />
            </div>
            <div>
              <div className="text-xl font-bold text-white">Tyler Vitelli</div>
              <div className="text-purple-400 text-sm">6M+ Subscribers</div>
            </div>
          </div>

          <div className="grid md:grid-cols-2 gap-6">
            <div>
              <h3 className="text-lg font-bold text-white mb-4">
                <span className="text-transparent bg-clip-text bg-gradient-to-r from-purple-400 to-blue-400">100K → 5M+ Subs</span> in a Year
              </h3>
              <div className="rounded-2xl overflow-hidden border border-white/5 bg-white/[0.03] hover:border-purple-500/30 hover:shadow-[0_0_30px_rgba(139,92,246,0.15)] transition-all duration-300">
                <Image src="/betterquality.png" alt="5.16M subscribers growth" width={800} height={600} className="w-full h-auto" />
              </div>
            </div>
            <div>
              <h3 className="text-lg font-bold text-white mb-4">
                <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-400 to-purple-400">100M+ Views</span> in 48 Hours
              </h3>
              <div className="rounded-2xl overflow-hidden border border-white/5 bg-white/[0.03] hover:border-purple-500/30 hover:shadow-[0_0_30px_rgba(139,92,246,0.15)] transition-all duration-300">
                <Image src="/100m in 48 hours .PNG" alt="102M+ views in 48 hours" width={800} height={600} className="w-full h-auto object-cover" />
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

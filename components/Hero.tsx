import AnimatedCounter from "./AnimatedCounter";

export default function Hero() {
  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden bg-[#0a0014]">
      {/* Background gradient blur effects */}
      <div className="absolute inset-0 overflow-hidden">
        <div className="absolute top-1/4 left-1/4 w-96 h-96 bg-purple-600/30 rounded-full blur-[120px]"></div>
        <div className="absolute bottom-1/4 right-1/4 w-96 h-96 bg-blue-600/20 rounded-full blur-[120px]"></div>
      </div>

      <div className="relative container mx-auto px-6 pt-32 pb-32 text-center text-white">
        <div className="max-w-7xl mx-auto">
          <h1 className="text-6xl md:text-8xl lg:text-9xl font-bold mb-8 leading-tight">
            Building systems that{" "}
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-purple-400 to-blue-500">
              scale creators & brands
            </span>
          </h1>

          <p className="text-2xl md:text-3xl lg:text-4xl mb-16 max-w-5xl mx-auto text-white/80">
            Building the future of content.
          </p>

          <div className="flex flex-col sm:flex-row gap-4 justify-center mb-16">
            <a
              href="https://calendly.com/josh-visualvortex"
              target="_blank"
              rel="noopener noreferrer"
              className="group relative px-8 py-4 bg-gradient-to-r from-purple-600 to-blue-600 rounded-lg font-semibold text-lg hover:shadow-[0_0_40px_rgba(124,58,237,0.5)] transition-all duration-300 hover:-translate-y-1"
            >
              Book a Call
            </a>
            <a
              href="#portfolio"
              className="px-8 py-4 border border-white/20 backdrop-blur-sm rounded-lg font-semibold text-lg hover:bg-white/10 transition-all duration-300"
            >
              See Our Work
            </a>
          </div>

          {/* Stats */}
          <div className="grid grid-cols-2 md:grid-cols-3 gap-6 max-w-5xl mx-auto">
            <div className="p-8 rounded-xl border border-white/10 backdrop-blur-sm bg-white/5">
              <AnimatedCounter
                end={250}
                suffix="M+"
                className="text-5xl md:text-6xl lg:text-7xl font-bold text-purple-400 mb-3"
              />
              <div className="text-base md:text-lg text-white/60">Long Form Views/Month</div>
            </div>
            <div className="p-8 rounded-xl border border-white/10 backdrop-blur-sm bg-white/5">
              <AnimatedCounter
                end={999}
                suffix="M+"
                className="text-5xl md:text-6xl lg:text-7xl font-bold text-blue-400 mb-3"
              />
              <div className="text-base md:text-lg text-white/60">Short Form Views Last Month</div>
            </div>
            <div className="p-8 rounded-xl border border-white/10 backdrop-blur-sm bg-white/5 col-span-2 md:col-span-1">
              <AnimatedCounter
                end={72}
                suffix="+"
                className="text-5xl md:text-6xl lg:text-7xl font-bold text-purple-400 mb-3"
              />
              <div className="text-base md:text-lg text-white/60">Creators & Channels</div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

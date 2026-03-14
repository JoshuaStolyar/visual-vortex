export default function About() {
  return (
    <section id="about" className="relative py-32 overflow-hidden">
      <div className="absolute top-0 right-[-10%] w-[500px] h-[500px] rounded-full bg-blue-700/10 blur-[120px] pointer-events-none" />

      <div className="relative z-10 container mx-auto px-6">
        <div className="max-w-4xl mx-auto">
          <div className="text-center mb-16">
            <p className="text-white/40 text-sm font-medium uppercase tracking-widest mb-3">Who We Are</p>
            <h2 className="text-4xl md:text-5xl lg:text-6xl font-bold text-white mb-6">About Visual Vortex</h2>
            <p className="text-white/70 text-xl leading-relaxed max-w-2xl mx-auto">
              We're a content growth firm specializing in scaling creators and brands through data-driven strategies and world-class production.
            </p>
          </div>

          {/* Stats */}
          <div className="grid grid-cols-2 md:grid-cols-4 gap-4 mt-12">
            {[
              { value: "250M+", label: "Monthly Long-Form Views" },
              { value: "999M+", label: "Monthly Short-Form Views" },
              { value: "72+", label: "Creators & Channels" },
              { value: "3+", label: "Years Experience" },
            ].map((stat) => (
              <div key={stat.label} className="text-center p-6 rounded-2xl border border-white/5 bg-white/[0.03] hover:border-purple-500/30 hover:bg-white/[0.06] transition-all duration-300">
                <div className="text-3xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-purple-400 to-blue-400 mb-2">{stat.value}</div>
                <div className="text-xs text-white/40 font-medium">{stat.label}</div>
              </div>
            ))}
          </div>

          {/* Mission */}
          <div className="mt-10 p-8 rounded-2xl border border-purple-500/20 bg-gradient-to-b from-purple-500/10 to-transparent">
            <h3 className="text-lg font-semibold text-white mb-3">Our Mission</h3>
            <p className="text-white/70 leading-relaxed">
              To empower creators and brands with the tools, strategies, and support they need to build sustainable, scalable content businesses that make a lasting impact.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}

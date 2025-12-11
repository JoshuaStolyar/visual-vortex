export default function About() {
  const valueProps = [
    {
      title: "Systems That Scale",
      description: "We don't just deliver one-off projects. We build repeatable systems that grow with you."
    },
    {
      title: "Creator-First Approach",
      description: "We understand creators because we work with them daily. Your success is our success."
    },
    {
      title: "Data-Driven Results",
      description: "Every decision backed by analytics. We test, optimize, and scale what works."
    }
  ];

  return (
    <section id="about" className="relative py-32 bg-[#0a0014] overflow-hidden">
      {/* Background gradient blur effects */}
      <div className="absolute inset-0 overflow-hidden">
        <div className="absolute bottom-1/3 right-1/4 w-96 h-96 bg-blue-600/20 rounded-full blur-[120px]"></div>
      </div>

      <div className="relative container mx-auto px-6">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-6xl font-bold text-white mb-6">
              Why Visual Vortex?
            </h2>
            <p className="text-xl text-white/60 max-w-3xl mx-auto leading-relaxed">
              We're not just another content agency. We're a team obsessed with helping creators
              and brands dominate their platforms through systematic, scalable growth.
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-6 mb-16">
            {valueProps.map((prop, index) => (
              <div
                key={index}
                className="p-8 rounded-xl border border-white/10 backdrop-blur-sm bg-white/5"
              >
                <h3 className="text-2xl font-bold text-white mb-4">{prop.title}</h3>
                <p className="text-white/60 leading-relaxed">{prop.description}</p>
              </div>
            ))}
          </div>

          <div className="max-w-4xl mx-auto p-8 md:p-12 rounded-2xl border border-white/10 backdrop-blur-sm bg-gradient-to-br from-purple-600/10 to-blue-600/10">
            <h3 className="text-3xl md:text-4xl font-bold text-white mb-6 text-center">
              Our Track Record Speaks
            </h3>
            <div className="grid md:grid-cols-2 gap-8 text-center md:text-left">
              <div>
                <p className="text-white/80 leading-relaxed mb-4">
                  Over <strong className="text-purple-400">250 million long-form views</strong> and{" "}
                  <strong className="text-blue-400">999 million short-form views</strong> last month alone.
                </p>
                <p className="text-white/80 leading-relaxed">
                  We've helped 72+ creators and brands scale their content, optimized strategies
                  for established channels, and built systems that deliver consistent results. We also run our own successful channels.
                </p>
              </div>
              <div className="flex items-center justify-center">
                <a
                  href="https://calendly.com/josh-visualvortex"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-block px-8 py-4 bg-gradient-to-r from-purple-600 to-blue-600 rounded-lg font-semibold text-lg text-white hover:shadow-[0_0_40px_rgba(124,58,237,0.5)] transition-all duration-300 hover:-translate-y-1"
                >
                  Let's Talk Growth
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

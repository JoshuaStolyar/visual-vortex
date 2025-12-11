export default function Services() {
  const services = [
    {
      title: "Video Editing",
      description: "Professional editing that keeps viewers hooked from start to finish. We know what works.",
      icon: "🎬"
    },
    {
      title: "Thumbnail Design",
      description: "Eye-catching thumbnails that stop the scroll and drive clicks. Tested and optimized.",
      icon: "🎨"
    },
    {
      title: "Content Strategy",
      description: "Data-driven strategies that maximize reach and engagement across all platforms.",
      icon: "📊"
    },
    {
      title: "Scriptwriting",
      description: "Compelling scripts that tell stories and convert viewers into loyal subscribers.",
      icon: "✍️"
    },
    {
      title: "Analytics & Growth",
      description: "In-depth analytics to identify what's working and scale your best performing content.",
      icon: "📈"
    },
    {
      title: "Full Production",
      description: "End-to-end content production. From ideation to publishing, we handle it all.",
      icon: "🚀"
    }
  ];

  return (
    <section id="services" className="relative py-32 bg-[#0a0014] overflow-hidden">
      {/* Background gradient blur effects */}
      <div className="absolute inset-0 overflow-hidden">
        <div className="absolute top-1/3 left-1/3 w-96 h-96 bg-purple-600/20 rounded-full blur-[120px]"></div>
      </div>

      <div className="relative container mx-auto px-6">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-20">
            <h2 className="text-5xl md:text-7xl lg:text-8xl font-bold text-white mb-8">
              Everything You Need to{" "}
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-purple-400 to-blue-500">
                Scale
              </span>
            </h2>
            <p className="text-2xl md:text-3xl text-white/60 max-w-3xl mx-auto">
              From editing to strategy, we build complete systems that free you to focus on creating
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {services.map((service, index) => (
              <div
                key={index}
                className="group p-8 rounded-xl border border-white/10 backdrop-blur-sm bg-white/5 hover:bg-white/10 hover:scale-[1.02] transition-all duration-300 hover:shadow-[0_0_30px_rgba(124,58,237,0.3)]"
              >
                <div className="text-5xl mb-4">{service.icon}</div>
                <h3 className="text-2xl font-bold text-white mb-3">{service.title}</h3>
                <p className="text-white/60 leading-relaxed">{service.description}</p>
              </div>
            ))}
          </div>

          <div className="text-center mt-16">
            <p className="text-white/60 mb-6 text-lg">
              Ready to scale your content?
            </p>
            <a
              href="https://calendly.com/josh-visualvortex"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-block px-8 py-4 bg-gradient-to-r from-purple-600 to-blue-600 rounded-lg font-semibold text-lg text-white hover:shadow-[0_0_40px_rgba(124,58,237,0.5)] transition-all duration-300 hover:-translate-y-1"
            >
              Book a Strategy Call
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}

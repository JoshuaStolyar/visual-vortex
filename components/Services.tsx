export default function Services() {
  const services = [
    {
      title: "Thumbnail Design",
      description: "Eye-catching, click-worthy thumbnails that stand out in the feed and drive views.",
      icon: "🎨"
    },
    {
      title: "Video Editing",
      description: "Professional editing that keeps viewers engaged from start to finish.",
      icon: "✂️"
    },
    {
      title: "Content Strategy",
      description: "Data-driven strategies to optimize content performance and audience growth.",
      icon: "📊"
    },
    {
      title: "Channel Management",
      description: "End-to-end management to scale your channel while you focus on creating.",
      icon: "⚙️"
    },
    {
      title: "Short-Form Content",
      description: "Viral-optimized shorts that maximize reach across all platforms.",
      icon: "📱"
    },
    {
      title: "Analytics & Optimization",
      description: "Continuous performance analysis and optimization for maximum ROI.",
      icon: "📈"
    }
  ];

  return (
    <section id="services" className="relative py-32 bg-gray-50 overflow-hidden">
      <div className="relative container mx-auto px-6">
        <div className="max-w-6xl mx-auto">
          {/* Header */}
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl lg:text-6xl font-bold text-gray-900 mb-4">
              Our Services
            </h2>
            <p className="text-lg md:text-xl text-gray-600 max-w-2xl mx-auto">
              Everything you need to scale your content business
            </p>
          </div>

          {/* Services Grid */}
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {services.map((service, index) => (
              <div
                key={index}
                className="p-8 rounded-2xl border border-gray-200 bg-white hover:shadow-lg hover:border-blue-300 transition-all duration-200"
              >
                <div className="text-5xl mb-4">{service.icon}</div>
                <h3 className="text-xl font-bold text-gray-900 mb-3">{service.title}</h3>
                <p className="text-gray-600 leading-relaxed">{service.description}</p>
              </div>
            ))}
          </div>

          {/* CTA */}
          <div className="text-center mt-12">
            <a
              href="#contact"
              className="inline-block px-8 py-4 bg-blue-600 text-white rounded-lg font-semibold text-lg hover:bg-blue-700 transition-all duration-200 shadow-sm hover:shadow-md"
            >
              Get Started
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}

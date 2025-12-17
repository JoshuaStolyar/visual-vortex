import AnimatedCounter from "./AnimatedCounter";

export default function Hero() {
  return (
    <section id="home" className="relative min-h-screen flex items-center justify-center overflow-hidden bg-white">
      {/* Subtle gradient accent - minimal */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <div className="absolute top-0 right-0 w-[500px] h-[500px] bg-gradient-to-br from-blue-50 to-purple-50 rounded-full blur-3xl opacity-30"></div>
      </div>

      <div className="relative container mx-auto px-6 py-32 text-center">
        <div className="max-w-5xl mx-auto space-y-8">
          {/* Main Heading */}
          <h1 className="text-5xl md:text-6xl lg:text-7xl font-bold leading-tight text-gray-900">
            Building systems that{" "}
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-purple-600 to-blue-600">
              scale creators & brands
            </span>
          </h1>

          {/* Subheading */}
          <p className="text-xl md:text-2xl max-w-3xl mx-auto text-gray-600 font-light">
            Building the future of content.
          </p>

          {/* CTA Buttons */}
          <div className="flex flex-col sm:flex-row gap-4 justify-center pt-4">
            <a
              href="https://calendly.com/josh-visualvortex"
              target="_blank"
              rel="noopener noreferrer"
              className="px-8 py-4 bg-blue-600 text-white rounded-lg font-semibold text-lg hover:bg-blue-700 transition-all duration-200 shadow-sm hover:shadow-md"
            >
              Apply to Work Together
            </a>
            <a
              href="#portfolio"
              className="px-8 py-4 border-2 border-gray-200 text-gray-900 rounded-lg font-semibold text-lg hover:border-gray-300 hover:bg-gray-50 transition-all duration-200"
            >
              Portfolio
            </a>
          </div>

          {/* Stats - Clean Cards */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 max-w-4xl mx-auto pt-12">
            <div className="p-10 rounded-2xl border-2 border-gray-200 bg-white shadow-lg hover:shadow-xl hover:border-blue-300 transition-all duration-300 group">
              <AnimatedCounter
                end={250}
                suffix="M+"
                className="text-5xl md:text-6xl font-bold bg-gradient-to-r from-purple-600 to-blue-600 text-transparent bg-clip-text mb-3"
              />
              <div className="text-base text-gray-700 font-semibold">Long Form Views/Month</div>
            </div>
            <div className="p-10 rounded-2xl border-2 border-gray-200 bg-white shadow-lg hover:shadow-xl hover:border-blue-300 transition-all duration-300 group">
              <AnimatedCounter
                end={999}
                suffix="M+"
                className="text-5xl md:text-6xl font-bold bg-gradient-to-r from-purple-600 to-blue-600 text-transparent bg-clip-text mb-3"
              />
              <div className="text-base text-gray-700 font-semibold">Short Form Views/Month</div>
            </div>
            <div className="p-10 rounded-2xl border-2 border-gray-200 bg-white shadow-lg hover:shadow-xl hover:border-blue-300 transition-all duration-300 group">
              <AnimatedCounter
                end={72}
                suffix="+"
                className="text-5xl md:text-6xl font-bold bg-gradient-to-r from-purple-600 to-blue-600 text-transparent bg-clip-text mb-3"
              />
              <div className="text-base text-gray-700 font-semibold">Creators & Channels</div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

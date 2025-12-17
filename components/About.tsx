export default function About() {
  return (
    <section id="about" className="relative py-32 bg-white overflow-hidden">
      <div className="relative container mx-auto px-6">
        <div className="max-w-4xl mx-auto">
          {/* Header */}
          <div className="text-center mb-12">
            <h2 className="text-4xl md:text-5xl lg:text-6xl font-bold text-gray-900 mb-6">
              About Visual Vortex
            </h2>
            <p className="text-xl md:text-2xl text-gray-600 leading-relaxed">
              We're a content growth firm specializing in scaling creators and brands through data-driven strategies and world-class production.
            </p>
          </div>

          {/* Stats */}
          <div className="grid grid-cols-2 md:grid-cols-4 gap-6 mt-16">
            <div className="text-center p-6 rounded-xl border border-gray-200 bg-gray-50">
              <div className="text-3xl font-bold text-gray-900 mb-2">250M+</div>
              <div className="text-sm text-gray-600">Monthly Long-Form Views</div>
            </div>
            <div className="text-center p-6 rounded-xl border border-gray-200 bg-gray-50">
              <div className="text-3xl font-bold text-gray-900 mb-2">999M+</div>
              <div className="text-sm text-gray-600">Monthly Short-Form Views</div>
            </div>
            <div className="text-center p-6 rounded-xl border border-gray-200 bg-gray-50">
              <div className="text-3xl font-bold text-gray-900 mb-2">72+</div>
              <div className="text-sm text-gray-600">Creators & Channels</div>
            </div>
            <div className="text-center p-6 rounded-xl border border-gray-200 bg-gray-50">
              <div className="text-3xl font-bold text-gray-900 mb-2">3+</div>
              <div className="text-sm text-gray-600">Years Experience</div>
            </div>
          </div>

          {/* Mission */}
          <div className="mt-16 p-10 rounded-2xl border-2 border-blue-200 bg-blue-50/50">
            <h3 className="text-2xl font-bold text-gray-900 mb-4">Our Mission</h3>
            <p className="text-lg text-gray-700 leading-relaxed">
              To empower creators and brands with the tools, strategies, and support they need to build sustainable, scalable content businesses that make a lasting impact.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}

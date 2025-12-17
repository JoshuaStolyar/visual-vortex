export default function Contact() {
  return (
    <section id="contact" className="relative py-32 bg-gray-50 overflow-hidden">
      <div className="relative container mx-auto px-6">
        <div className="max-w-4xl mx-auto">
          {/* Header */}
          <div className="text-center mb-12">
            <h2 className="text-4xl md:text-5xl lg:text-6xl font-bold text-gray-900 mb-6">
              Let's Work Together
            </h2>
            <p className="text-xl md:text-2xl text-gray-600 max-w-2xl mx-auto">
              Ready to scale your content? Book a call and let's discuss how we can help you grow.
            </p>
          </div>

          {/* Contact Card */}
          <div className="p-10 md:p-12 rounded-3xl border-2 border-gray-200 bg-white shadow-sm text-center">
            <div className="mb-8">
              <div className="text-6xl mb-6">📞</div>
              <h3 className="text-2xl font-bold text-gray-900 mb-4">Schedule a Discovery Call</h3>
              <p className="text-lg text-gray-600 mb-8 max-w-xl mx-auto">
                We'll discuss your goals, analyze your current performance, and create a custom growth strategy for your channel.
              </p>
            </div>

            <a
              href="https://calendly.com/josh-visualvortex"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-block px-10 py-5 bg-blue-600 text-white rounded-lg font-bold text-xl hover:bg-blue-700 transition-all duration-200 shadow-md hover:shadow-lg"
            >
              Book Your Call Now
            </a>

            <div className="mt-8 pt-8 border-t border-gray-200">
              <p className="text-gray-600">
                Or email us at{" "}
                <a href="mailto:hello@visualvortex.com" className="text-blue-600 hover:text-blue-700 font-semibold">
                  hello@visualvortex.com
                </a>
              </p>
            </div>
          </div>

          {/* Footer */}
          <div className="mt-16 text-center text-gray-600">
            <p className="mb-4">© 2024 Visual Vortex. All rights reserved.</p>
            <div className="flex justify-center gap-6">
              <a href="#" className="hover:text-gray-900 transition-colors">Privacy Policy</a>
              <span>•</span>
              <a href="#" className="hover:text-gray-900 transition-colors">Terms of Service</a>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

export default function Contact() {
  return (
    <section id="contact" className="relative py-32 bg-[#0a0014] overflow-hidden">
      {/* Background gradient blur effects */}
      <div className="absolute inset-0 overflow-hidden">
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] bg-purple-600/30 rounded-full blur-[120px]"></div>
      </div>

      <div className="relative container mx-auto px-6">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-4xl md:text-6xl font-bold text-white mb-6">
            Ready to{" "}
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-purple-400 to-blue-500">
              Scale Your Content?
            </span>
          </h2>
          <p className="text-xl text-white/60 mb-12 max-w-2xl mx-auto">
            Join the top creators who trust Visual Vortex to power their growth.
            Book a call and let's discuss how we can help you dominate your platform.
          </p>

          <div className="flex flex-col sm:flex-row gap-6 justify-center items-center mb-16">
            <a
              href="https://calendly.com/josh-visualvortex"
              target="_blank"
              rel="noopener noreferrer"
              className="group relative px-10 py-5 bg-gradient-to-r from-purple-600 to-blue-600 rounded-lg font-bold text-xl text-white hover:shadow-[0_0_50px_rgba(124,58,237,0.6)] transition-all duration-300 hover:-translate-y-1"
            >
              Book Your Strategy Call
            </a>
          </div>

          <div className="grid md:grid-cols-3 gap-6 max-w-3xl mx-auto">
            <div className="p-6 rounded-xl border border-white/10 backdrop-blur-sm bg-white/5">
              <div className="text-3xl mb-3">⚡</div>
              <h3 className="text-white font-semibold mb-2">Fast Turnaround</h3>
              <p className="text-white/60 text-sm">Quick delivery without compromising quality</p>
            </div>
            <div className="p-6 rounded-xl border border-white/10 backdrop-blur-sm bg-white/5">
              <div className="text-3xl mb-3">🎯</div>
              <h3 className="text-white font-semibold mb-2">Results-Focused</h3>
              <p className="text-white/60 text-sm">Data-driven approach to maximize ROI</p>
            </div>
            <div className="p-6 rounded-xl border border-white/10 backdrop-blur-sm bg-white/5">
              <div className="text-3xl mb-3">🚀</div>
              <h3 className="text-white font-semibold mb-2">Scalable Systems</h3>
              <p className="text-white/60 text-sm">Built to grow with your channel</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

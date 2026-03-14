export default function Contact() {
  return (
    <section id="contact" className="relative py-32 overflow-hidden">
      <div className="absolute bottom-0 right-[-5%] w-[400px] h-[400px] rounded-full bg-purple-700/15 blur-[100px] pointer-events-none" />
      <div className="absolute bottom-0 left-[-5%] w-[300px] h-[300px] rounded-full bg-blue-700/10 blur-[80px] pointer-events-none" />

      <div className="relative z-10 container mx-auto px-6">
        <div className="max-w-2xl mx-auto text-center">
          <p className="text-white/40 text-sm font-medium uppercase tracking-widest mb-3">Get In Touch</p>
          <h2 className="text-4xl md:text-5xl lg:text-6xl font-bold text-white mb-6">Let's Work Together</h2>
          <p className="text-white/70 text-xl mb-12 max-w-lg mx-auto">
            Ready to scale your content? Book a call and let's discuss how we can help you grow.
          </p>

          <div className="p-10 rounded-2xl border border-white/5 bg-white/[0.03]">
            <div className="mb-8">
              <div className="w-16 h-16 rounded-2xl bg-gradient-to-br from-purple-600 to-blue-600 flex items-center justify-center mx-auto mb-6 shadow-[0_0_30px_rgba(139,92,246,0.4)]">
                <svg className="w-8 h-8 text-white" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
                </svg>
              </div>
              <h3 className="text-xl font-bold text-white mb-3">Schedule a Discovery Call</h3>
              <p className="text-white/40 mb-8 max-w-sm mx-auto">
                We'll discuss your goals, analyze your current performance, and create a custom growth strategy for your channel.
              </p>
            </div>

            <a
              href="https://calendly.com/josh-visualvortex"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-block px-10 py-4 bg-gradient-to-r from-purple-600 to-blue-600 text-white rounded-xl font-semibold text-lg hover:from-purple-500 hover:to-blue-500 transition-all duration-200 shadow-[0_0_30px_rgba(139,92,246,0.4)] hover:shadow-[0_0_50px_rgba(139,92,246,0.6)]"
            >
              Book Your Call Now
            </a>

            <div className="mt-8 pt-8 border-t border-white/5">
              <p className="text-white/30 text-sm">
                Or email us at{" "}
                <a href="mailto:visualvortexcreators@gmail.com" className="text-purple-400 hover:text-purple-300 transition-colors">
                  visualvortexcreators@gmail.com
                </a>
              </p>
            </div>
          </div>

          {/* Footer */}
          <div className="mt-16 text-white/20 text-sm">
            <p className="mb-4">© 2025 Visual Vortex. All rights reserved.</p>
            <div className="flex justify-center gap-6">
              <a href="#" className="hover:text-white/40 transition-colors">Privacy Policy</a>
              <span>·</span>
              <a href="#" className="hover:text-white/40 transition-colors">Terms of Service</a>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

"use client";

import { useEffect, useRef, useState } from "react";

export default function Process() {
  const [isVisible, setIsVisible] = useState(false);
  const [modalIndex, setModalIndex] = useState<number | null>(null);
  const sectionRef = useRef<HTMLElement>(null);

  useEffect(() => {
    const observer = new IntersectionObserver(([entry]) => {
      if (entry.isIntersecting) setIsVisible(true);
    }, { threshold: 0.1 });
    if (sectionRef.current) observer.observe(sectionRef.current);
    return () => observer.disconnect();
  }, []);

  useEffect(() => {
    const handleEscape = (e: KeyboardEvent) => { if (e.key === "Escape") setModalIndex(null); };
    window.addEventListener("keydown", handleEscape);
    return () => window.removeEventListener("keydown", handleEscape);
  }, []);

  const steps = [
    {
      number: "01", title: "Apply", description: "Book a call. No fluff, just results-focused conversation.",
      gradient: "from-purple-500 to-violet-500",
      includes: ["Free 30-minute discovery call", "Channel audit & growth assessment", "Custom strategy overview", "Q&A about our process"]
    },
    {
      number: "02", title: "Strategy", description: "Deep dive into your niche. We find what actually works for YOUR audience.",
      gradient: "from-violet-500 to-blue-500",
      includes: ["Competitor analysis", "Content strategy roadmap", "Target audience research", "Growth timeline & milestones"]
    },
    {
      number: "03", title: "Create", description: "Viral thumbnails + retention-focused edits that stop the scroll.",
      gradient: "from-blue-500 to-cyan-500",
      includes: ["Professional thumbnail design", "Full video editing & post-production", "SEO optimization", "Unlimited revisions"]
    },
    {
      number: "04", title: "Scale", description: "Launch, analyze, optimize. Repeat until we hit your goals.",
      gradient: "from-cyan-500 to-purple-500",
      includes: ["Performance tracking & analytics", "A/B testing thumbnails & titles", "Strategy refinement", "Ongoing support & consultation"]
    }
  ];

  return (
    <section id="process" ref={sectionRef} className="relative py-32 overflow-hidden">
      <div className="absolute bottom-0 left-[-10%] w-[500px] h-[500px] rounded-full bg-purple-700/10 blur-[100px] pointer-events-none" />

      <div className="relative z-10 container mx-auto px-6">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-20">
            <p className="text-white/40 text-sm font-medium uppercase tracking-widest mb-3">The Process</p>
            <h2 className="text-4xl md:text-5xl lg:text-6xl font-bold text-white mb-4">How It Works</h2>
            <p className="text-white/70 text-lg max-w-xl mx-auto">Our simple 4-step process to scale your channel</p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-5">
            {steps.map((step, index) => (
              <div
                key={index}
                className={`transition-all duration-500 ${isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-6"}`}
                style={{ transitionDelay: `${index * 100}ms` }}
              >
                <div
                  onClick={() => setModalIndex(index)}
                  className="group relative p-7 rounded-2xl border border-white/5 bg-white/[0.03] hover:border-purple-500/30 hover:bg-white/[0.06] hover:shadow-[0_0_30px_rgba(139,92,246,0.15)] transition-all duration-300 h-full cursor-pointer"
                >
                  <div className={`w-14 h-14 rounded-xl bg-gradient-to-br ${step.gradient} flex items-center justify-center shadow-lg mb-6 group-hover:scale-110 transition-transform duration-300`}>
                    <span className="text-xl font-black text-white">{step.number}</span>
                  </div>
                  <h3 className="text-xl font-bold text-white mb-3">{step.title}</h3>
                  <p className="text-white/70 text-sm leading-relaxed mb-4">{step.description}</p>
                  <div className="flex items-center gap-1.5 text-purple-400 text-sm font-medium">
                    <span>Learn more</span>
                    <svg className="w-3.5 h-3.5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 7l5 5m0 0l-5 5m5-5H6" />
                    </svg>
                  </div>
                </div>
              </div>
            ))}
          </div>

        </div>
      </div>

      {/* Modal */}
      {modalIndex !== null && (
        <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/80 backdrop-blur-sm animate-fadeIn" onClick={() => setModalIndex(null)}>
          <div className="relative rounded-2xl border border-white/10 bg-[#0d0020] max-w-xl w-full max-h-[90vh] overflow-y-auto animate-scaleIn p-8" onClick={(e) => e.stopPropagation()}>
            <button onClick={() => setModalIndex(null)} className="absolute top-5 right-5 w-8 h-8 rounded-full bg-white/5 hover:bg-white/10 flex items-center justify-center text-white/60 hover:text-white transition-all">
              <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
              </svg>
            </button>

            <div className={`w-16 h-16 rounded-xl bg-gradient-to-br ${steps[modalIndex].gradient} flex items-center justify-center mb-6`}>
              <span className="text-2xl font-black text-white">{steps[modalIndex].number}</span>
            </div>
            <h2 className="text-3xl font-bold text-white mb-3">{steps[modalIndex].title}</h2>
            <p className="text-white/60 text-lg mb-8">{steps[modalIndex].description}</p>

            <div className="rounded-xl border border-white/5 bg-white/[0.03] p-6 mb-6">
              <h3 className="text-sm font-semibold text-white/40 uppercase tracking-widest mb-4">What's Included</h3>
              <ul className="space-y-3">
                {steps[modalIndex].includes.map((item, i) => (
                  <li key={i} className="flex items-start gap-3">
                    <svg className="w-5 h-5 text-purple-400 flex-shrink-0 mt-0.5" fill="currentColor" viewBox="0 0 20 20">
                      <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
                    </svg>
                    <span className="text-white/70">{item}</span>
                  </li>
                ))}
              </ul>
            </div>

            {modalIndex === 0 && (
              <a href="https://calendly.com/josh-visualvortex" target="_blank" rel="noopener noreferrer"
                className="block w-full px-8 py-4 bg-gradient-to-r from-purple-600 to-blue-600 text-white rounded-xl font-semibold text-center hover:from-purple-500 hover:to-blue-500 transition-all duration-200">
                Book Your Discovery Call
              </a>
            )}
          </div>
        </div>
      )}
    </section>
  );
}

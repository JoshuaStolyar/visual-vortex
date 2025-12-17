"use client";

import { useEffect, useRef, useState } from "react";

export default function Process() {
  const [isVisible, setIsVisible] = useState(false);
  const [hoveredIndex, setHoveredIndex] = useState<number | null>(null);
  const [modalIndex, setModalIndex] = useState<number | null>(null);
  const sectionRef = useRef<HTMLElement>(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true);
        }
      },
      { threshold: 0.1 }
    );

    if (sectionRef.current) {
      observer.observe(sectionRef.current);
    }

    return () => {
      if (sectionRef.current) {
        observer.unobserve(sectionRef.current);
      }
    };
  }, []);

  // Close modal on escape key
  useEffect(() => {
    const handleEscape = (e: KeyboardEvent) => {
      if (e.key === "Escape") setModalIndex(null);
    };
    window.addEventListener("keydown", handleEscape);
    return () => window.removeEventListener("keydown", handleEscape);
  }, []);

  const steps = [
    {
      number: "01",
      title: "Apply",
      description: "Book a call. No fluff, just results-focused conversation.",
      color: "from-blue-500 to-purple-500",
      includes: [
        "Free 30-minute discovery call",
        "Channel audit & growth assessment",
        "Custom strategy overview",
        "Q&A about our process"
      ]
    },
    {
      number: "02",
      title: "Strategy",
      description: "Deep dive into your niche. We find what actually works for YOUR audience.",
      color: "from-purple-500 to-pink-500",
      includes: [
        "Competitor analysis",
        "Content strategy roadmap",
        "Target audience research",
        "Growth timeline & milestones"
      ]
    },
    {
      number: "03",
      title: "Create",
      description: "Viral thumbnails + retention-focused edits that stop the scroll.",
      color: "from-blue-500 to-cyan-500",
      includes: [
        "Professional thumbnail design",
        "Full video editing & post-production",
        "SEO optimization (titles, tags, descriptions)",
        "Unlimited revisions"
      ]
    },
    {
      number: "04",
      title: "Scale",
      description: "Launch, analyze, optimize. Repeat until we hit your goals.",
      color: "from-green-500 to-emerald-500",
      includes: [
        "Performance tracking & analytics",
        "A/B testing thumbnails & titles",
        "Strategy refinement based on data",
        "Ongoing support & consultation"
      ]
    }
  ];

  return (
    <section id="process" ref={sectionRef} className="relative py-32 bg-gray-50 overflow-hidden">
      {/* Background accent */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <div className="absolute bottom-0 left-0 w-[600px] h-[600px] bg-gradient-to-tr from-blue-50 to-purple-50 rounded-full blur-3xl opacity-30"></div>
      </div>

      <div className="relative container mx-auto px-6">
        <div className="max-w-6xl mx-auto">
          {/* Header */}
          <div className="text-center mb-20">
            <h2 className="text-4xl md:text-5xl lg:text-6xl font-bold text-gray-900 mb-4">
              How It Works
            </h2>
            <p className="text-lg md:text-xl text-gray-600 max-w-2xl mx-auto">
              Our simple 4-step process to scale your channel
            </p>
          </div>

          {/* Steps Grid */}
          <div className="relative grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            {/* Connecting arrows - hidden on mobile, shown on desktop */}
            <div className="hidden lg:block absolute top-24 left-0 right-0 h-1 pointer-events-none">
              <div className="absolute inset-x-0 flex justify-between px-[12.5%]">
                <svg className="w-1/4 h-8" viewBox="0 0 100 20" fill="none">
                  <path d="M0 10 L90 10 L85 5 M90 10 L85 15" stroke="#e5e7eb" strokeWidth="2" />
                </svg>
                <svg className="w-1/4 h-8" viewBox="0 0 100 20" fill="none">
                  <path d="M0 10 L90 10 L85 5 M90 10 L85 15" stroke="#e5e7eb" strokeWidth="2" />
                </svg>
                <svg className="w-1/4 h-8" viewBox="0 0 100 20" fill="none">
                  <path d="M0 10 L90 10 L85 5 M90 10 L85 15" stroke="#e5e7eb" strokeWidth="2" />
                </svg>
              </div>
            </div>

            {steps.map((step, index) => (
              <div
                key={index}
                className={`transition-all duration-500 ${
                  isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-4"
                }`}
                style={{ transitionDelay: `${index * 100}ms` }}
                onMouseEnter={() => setHoveredIndex(index)}
                onMouseLeave={() => setHoveredIndex(null)}
              >
                <div
                  onClick={() => setModalIndex(index)}
                  className={`relative p-8 rounded-2xl border-2 bg-white transition-all duration-300 h-full cursor-pointer ${
                    hoveredIndex === index
                      ? "border-blue-400 shadow-2xl scale-105 -translate-y-1"
                      : "border-gray-200 shadow-lg"
                  }`}
                >
                  {/* Number Badge */}
                  <div className={`w-16 h-16 rounded-xl bg-gradient-to-br ${step.color} flex items-center justify-center shadow-md mb-6 transition-transform duration-300 ${
                    hoveredIndex === index ? "scale-110" : ""
                  }`}>
                    <span className="text-2xl font-black text-white">{step.number}</span>
                  </div>

                  {/* Title */}
                  <h3 className="text-2xl font-bold text-gray-900 mb-4">
                    {step.title}
                  </h3>

                  {/* Description */}
                  <p className="text-gray-600 leading-relaxed text-base mb-4">
                    {step.description}
                  </p>

                  {/* Click to learn more indicator */}
                  <div className="flex items-center gap-2 text-blue-600 font-semibold text-sm">
                    <span>Click to learn more</span>
                    <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 7l5 5m0 0l-5 5m5-5H6" />
                    </svg>
                  </div>
                </div>

                {/* Mobile arrow - shown only on mobile */}
                {index < steps.length - 1 && (
                  <div className="lg:hidden flex justify-center my-4">
                    <svg className="w-8 h-8 text-gray-300" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 14l-7 7m0 0l-7-7m7 7V3" />
                    </svg>
                  </div>
                )}
              </div>
            ))}
          </div>

          {/* CTA */}
          <div className="text-center mt-20">
            <h3 className="text-3xl md:text-4xl font-bold text-gray-900 mb-6">
              Ready to scale?
            </h3>
            <a
              href="https://calendly.com/josh-visualvortex"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-block px-10 py-5 bg-gradient-to-r from-blue-600 to-purple-600 text-white rounded-xl font-semibold text-lg hover:from-blue-700 hover:to-purple-700 transition-all duration-200 shadow-lg hover:shadow-xl hover:scale-105"
            >
              Book Your Free Call
            </a>
          </div>
        </div>
      </div>

      {/* Modal */}
      {modalIndex !== null && (
        <div
          className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/60 backdrop-blur-sm animate-fadeIn"
          onClick={() => setModalIndex(null)}
        >
          <div
            className="relative bg-white rounded-3xl shadow-2xl max-w-2xl w-full max-h-[90vh] overflow-y-auto animate-scaleIn"
            onClick={(e) => e.stopPropagation()}
          >
            {/* Close button */}
            <button
              onClick={() => setModalIndex(null)}
              className="absolute top-6 right-6 w-10 h-10 rounded-full bg-gray-100 hover:bg-gray-200 transition-colors flex items-center justify-center"
            >
              <svg className="w-6 h-6 text-gray-600" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
              </svg>
            </button>

            {/* Modal Content */}
            <div className="p-8 md:p-12">
              {/* Number Badge */}
              <div className={`w-20 h-20 rounded-2xl bg-gradient-to-br ${steps[modalIndex].color} flex items-center justify-center shadow-lg mb-6`}>
                <span className="text-3xl font-black text-white">{steps[modalIndex].number}</span>
              </div>

              {/* Title */}
              <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-4">
                {steps[modalIndex].title}
              </h2>

              {/* Description */}
              <p className="text-xl text-gray-600 mb-8">
                {steps[modalIndex].description}
              </p>

              {/* What's Included */}
              <div className="bg-gray-50 rounded-2xl p-8 mb-8">
                <h3 className="text-2xl font-bold text-gray-900 mb-6">What's Included:</h3>
                <ul className="space-y-4">
                  {steps[modalIndex].includes.map((item, i) => (
                    <li key={i} className="flex items-start gap-4">
                      <svg className="w-6 h-6 text-green-500 flex-shrink-0 mt-0.5" fill="currentColor" viewBox="0 0 20 20">
                        <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
                      </svg>
                      <span className="text-lg text-gray-700">{item}</span>
                    </li>
                  ))}
                </ul>
              </div>

              {/* CTA Button for Apply step */}
              {modalIndex === 0 && (
                <a
                  href="https://calendly.com/josh-visualvortex"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="block w-full px-8 py-5 bg-gradient-to-r from-blue-600 to-purple-600 text-white rounded-xl font-semibold text-lg text-center hover:from-blue-700 hover:to-purple-700 transition-all duration-200 shadow-lg hover:shadow-xl"
                >
                  Book Your Discovery Call
                </a>
              )}
            </div>
          </div>
        </div>
      )}

      <style jsx>{`
        @keyframes fadeIn {
          from {
            opacity: 0;
          }
          to {
            opacity: 1;
          }
        }
        @keyframes scaleIn {
          from {
            opacity: 0;
            transform: scale(0.9);
          }
          to {
            opacity: 1;
            transform: scale(1);
          }
        }
        .animate-fadeIn {
          animation: fadeIn 0.2s ease-out;
        }
        .animate-scaleIn {
          animation: scaleIn 0.3s ease-out;
        }
      `}</style>
    </section>
  );
}

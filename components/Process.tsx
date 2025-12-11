"use client";

import { useState, useEffect, useRef } from "react";

export default function Process() {
  const [visibleSteps, setVisibleSteps] = useState<number[]>([]);
  const [selectedStep, setSelectedStep] = useState<number | null>(null);
  const sectionRef = useRef<HTMLElement>(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          // Animate steps in sequence
          [0, 1, 2, 3, 4].forEach((index) => {
            setTimeout(() => {
              setVisibleSteps((prev) => [...prev, index]);
            }, index * 200);
          });
        }
      },
      {
        threshold: 0.2,
      }
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

  const steps = [
    {
      number: "01",
      title: "Discovery Call",
      icon: "📞",
      description: "We hop on a call to see if you're the right fit. We discuss pricing, posting strategy, and mindset to ensure we're aligned on your growth goals.",
      details: [
        "30-minute strategy consultation",
        "Channel audit & growth potential analysis",
        "Pricing transparency & package selection",
        "Mindset alignment for long-term success"
      ],
      highlight: "Free Consultation"
    },
    {
      number: "02",
      title: "Onboarding & Analysis",
      icon: "📊",
      description: "After agreeing and getting the first payment, we get access to your channel and dive deep into your analytics. Our strategist creates a comprehensive report on what you're doing well and areas for improvement.",
      details: [
        "Full channel access & analytics review",
        "Competitor analysis in your niche",
        "Detailed performance report",
        "Identify quick wins & long-term opportunities"
      ],
      highlight: "Deep Dive Report"
    },
    {
      number: "03",
      title: "Research & Strategy",
      icon: "🎯",
      description: "We research your niche thoroughly and start brainstorming content ideas with thumbnail concepts. We analyze each idea to ensure it's realistic and fits your channel's vision.",
      details: [
        "Niche research & trend analysis",
        "Custom content idea brainstorming",
        "Thumbnail concept development",
        "Video strategy & hook planning"
      ],
      highlight: "Custom Strategy"
    },
    {
      number: "04",
      title: "Implementation",
      icon: "🚀",
      description: "We launch your first post and implement proven strategies. We set up organized systems for content production, and you get 24/7 access to contact our team for updates anytime.",
      details: [
        "Launch first optimized video",
        "Set up production systems & workflows",
        "24/7 team access via Slack/Discord",
        "Real-time updates & quick turnarounds"
      ],
      highlight: "24/7 Support"
    },
    {
      number: "05",
      title: "Growth & Optimization",
      icon: "📈",
      description: "Bi-weekly calls to discuss progress and optimize. All you do is record the content—we handle everything else. Watch your views quadruple and quality metrics soar.",
      details: [
        "Bi-weekly strategy & optimization calls",
        "Continuous performance tracking",
        "A/B testing thumbnails & titles",
        "You record, we handle everything else"
      ],
      highlight: "4x View Growth"
    }
  ];

  return (
    <section ref={sectionRef} className="relative py-32 bg-[#0a0014] overflow-hidden">
      {/* Background gradient blur effects */}
      <div className="absolute inset-0 overflow-hidden">
        <div className="absolute top-1/4 left-1/3 w-96 h-96 bg-purple-600/20 rounded-full blur-[120px]"></div>
        <div className="absolute bottom-1/4 right-1/3 w-96 h-96 bg-blue-600/15 rounded-full blur-[120px]"></div>
      </div>

      <div className="relative container mx-auto px-6">
        <div className="max-w-7xl mx-auto">
          {/* Section Header */}
          <div className="text-center mb-20">
            <h2 className="text-5xl md:text-7xl lg:text-8xl font-bold text-white mb-8">
              Our Process
            </h2>
            <p className="text-2xl md:text-3xl text-white/60 max-w-3xl mx-auto">
              A proven system to scale your content and grow your audience
            </p>
          </div>

          {/* Steps Grid */}
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 mb-16">
            {steps.map((step, index) => (
              <div
                key={index}
                onClick={() => setSelectedStep(index)}
                className={`relative p-8 rounded-2xl border border-white/10 backdrop-blur-sm bg-white/5 hover:bg-white/10 transition-all duration-500 hover:scale-[1.05] hover:shadow-[0_0_50px_rgba(124,58,237,0.5)] cursor-pointer group ${
                  visibleSteps.includes(index)
                    ? "opacity-100 translate-y-0"
                    : "opacity-0 translate-y-8"
                } ${index === 4 ? "md:col-span-2 lg:col-span-1" : ""}`}
              >
                {/* Highlight Badge */}
                <div className="absolute -top-3 -right-3 px-4 py-1 bg-gradient-to-r from-purple-600 to-blue-600 rounded-full text-white text-sm font-bold shadow-lg opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                  {step.highlight}
                </div>

                {/* Icon */}
                <div className="text-6xl mb-4 transform group-hover:scale-110 group-hover:rotate-12 transition-transform duration-300">
                  {step.icon}
                </div>

                {/* Step Number */}
                <div className="text-5xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-purple-400 to-blue-500 mb-4">
                  {step.number}
                </div>

                {/* Step Title */}
                <h3 className="text-2xl font-bold text-white mb-4 group-hover:text-purple-300 transition-colors">
                  {step.title}
                </h3>

                {/* Step Description */}
                <p className="text-white/70 leading-relaxed mb-4">
                  {step.description}
                </p>

                {/* Click to learn more indicator */}
                <div className="flex items-center gap-2 text-purple-400 text-sm font-semibold opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                  <span>Click to learn more</span>
                  <span className="transform group-hover:translate-x-1 transition-transform">→</span>
                </div>

                {/* Animated pulse effect */}
                <div className="absolute inset-0 rounded-2xl bg-gradient-to-r from-purple-600/20 to-blue-600/20 opacity-0 group-hover:opacity-100 animate-pulse pointer-events-none"></div>

                {/* Connector Arrow (hidden on last item and mobile) */}
                {index < steps.length - 1 && (
                  <div className="hidden lg:block absolute top-1/2 -right-4 z-10">
                    <div className="text-3xl text-purple-400 animate-bounce-horizontal">→</div>
                  </div>
                )}
              </div>
            ))}
          </div>

          {/* CTA */}
          <div className="text-center">
            <a
              href="https://calendly.com/josh-visualvortex"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-block px-8 py-4 bg-gradient-to-r from-purple-600 to-blue-600 rounded-lg font-semibold text-lg text-white hover:shadow-[0_0_40px_rgba(124,58,237,0.5)] transition-all duration-300 hover:-translate-y-1"
            >
              Start Your Growth Journey
            </a>
          </div>
        </div>
      </div>

      {/* Modal/Popup */}
      {selectedStep !== null && (
        <div
          className="fixed inset-0 bg-black/80 backdrop-blur-sm flex items-center justify-center p-6 animate-fadeIn"
          style={{ zIndex: 100 }}
          onClick={() => setSelectedStep(null)}
        >
          <div
            className="relative max-w-2xl w-full bg-gradient-to-br from-[#1a0b2e] to-[#0a0014] border border-purple-500/30 rounded-2xl p-8 shadow-[0_0_80px_rgba(124,58,237,0.6)] animate-scaleIn"
            onClick={(e) => e.stopPropagation()}
          >
            {/* Close Button */}
            <button
              onClick={() => setSelectedStep(null)}
              className="absolute top-4 right-4 text-white/60 hover:text-white text-3xl font-bold transition-colors"
            >
              ×
            </button>

            {/* Icon and Number */}
            <div className="flex items-center gap-4 mb-6">
              <div className="text-7xl">{steps[selectedStep].icon}</div>
              <div className="text-6xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-purple-400 to-blue-500">
                {steps[selectedStep].number}
              </div>
            </div>

            {/* Title */}
            <h3 className="text-4xl font-bold text-white mb-4">
              {steps[selectedStep].title}
            </h3>

            {/* Highlight Badge */}
            <div className="inline-block px-4 py-2 bg-gradient-to-r from-purple-600 to-blue-600 rounded-full text-white text-sm font-bold mb-6">
              {steps[selectedStep].highlight}
            </div>

            {/* Description */}
            <p className="text-xl text-white/80 mb-8 leading-relaxed">
              {steps[selectedStep].description}
            </p>

            {/* Details List */}
            <div className="space-y-4 mb-8">
              <h4 className="text-2xl font-bold text-purple-300 mb-4">What's Included:</h4>
              {steps[selectedStep].details.map((detail, idx) => (
                <div
                  key={idx}
                  className="flex items-start gap-3 p-4 rounded-lg bg-white/5 border border-white/10 hover:bg-white/10 transition-all duration-300 hover:translate-x-2"
                >
                  <div className="text-2xl">✓</div>
                  <p className="text-lg text-white/90">{detail}</p>
                </div>
              ))}
            </div>

            {/* CTA Button */}
            <a
              href="https://calendly.com/josh-visualvortex"
              target="_blank"
              rel="noopener noreferrer"
              className="block w-full text-center px-8 py-4 bg-gradient-to-r from-purple-600 to-blue-600 rounded-lg font-semibold text-lg text-white hover:shadow-[0_0_40px_rgba(124,58,237,0.5)] transition-all duration-300 hover:-translate-y-1"
            >
              Book Your Discovery Call
            </a>
          </div>
        </div>
      )}
    </section>
  );
}

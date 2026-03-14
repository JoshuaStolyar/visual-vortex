"use client";

import { useState } from "react";

export default function FAQ() {
  const [openIndex, setOpenIndex] = useState<number | null>(0);

  const faqs = [
    { question: "What exactly does Visual Vortex do?", answer: "We're a full-service content growth agency specializing in YouTube and social media. We handle everything from high-converting thumbnails and professional video editing to content strategy, short-form content creation, and data-driven optimization. Think of us as your complete content team focused on one goal: explosive, sustainable growth." },
    { question: "How quickly will I see results?", answer: "Most creators see noticeable improvements within the first 30 days—higher CTR, better retention, and increased views. Significant subscriber growth typically happens within 3-6 months. Remember, we grew Tyler Vitelli from 100K to 5M+ subscribers in just one year. Results vary by niche and consistency, but our proven systems deliver." },
    { question: "Who is Visual Vortex for?", answer: "We work with serious creators and brands ready to scale. Our clients range from 50K to 6M+ subscribers across all niches—education, entertainment, finance, lifestyle, gaming, and more. If you're consistent with content and ready to invest in growth, we're the right fit." },
    { question: "What's the investment and commitment?", answer: "Investment varies based on your needs and goals. We offer flexible packages including thumbnails-only, full editing, and complete growth partnerships. While we recommend 3-6 month partnerships for best results, we'll discuss the right option for you during our discovery call. Book a call to get a custom quote." },
    { question: "Why choose Visual Vortex over other agencies?", answer: "Three reasons: (1) Results—we generate 250M+ monthly long-form views and 999M+ short-form views across our clients. (2) Full-service—we handle creative AND strategy, not just one piece. (3) Data-driven—every decision is backed by analytics and testing, not guesswork." },
    { question: "How do I get started?", answer: "Simple. Click 'Book a Call', schedule a free discovery call, and we'll analyze your channel together. We'll discuss your goals, current performance, and growth opportunities. If we're a good fit, we'll create a custom strategy and get you onboarded within 7 days." },
  ];

  return (
    <section id="faq" className="relative py-32 overflow-hidden">
      <div className="absolute top-1/2 left-[-5%] w-[400px] h-[400px] rounded-full bg-violet-700/10 blur-[100px] pointer-events-none" />

      <div className="relative z-10 container mx-auto px-6">
        <div className="max-w-3xl mx-auto">
          <div className="text-center mb-16">
            <p className="text-white/40 text-sm font-medium uppercase tracking-widest mb-3">FAQ</p>
            <h2 className="text-4xl md:text-5xl font-bold text-white mb-4">Frequently Asked Questions</h2>
            <p className="text-white/70 text-lg">Everything you need to know about working with Visual Vortex</p>
          </div>

          <div className="space-y-3">
            {faqs.map((faq, index) => (
              <div key={index} className={`rounded-2xl border transition-all duration-300 overflow-hidden ${openIndex === index ? 'border-purple-500/30 bg-white/[0.05]' : 'border-white/5 bg-white/[0.02] hover:border-white/10'}`}>
                <button
                  onClick={() => setOpenIndex(openIndex === index ? null : index)}
                  className="w-full px-7 py-5 text-left flex justify-between items-center gap-4"
                >
                  <h3 className={`text-base md:text-lg font-semibold pr-4 transition-colors ${openIndex === index ? 'text-white' : 'text-white/70'}`}>
                    {faq.question}
                  </h3>
                  <div className={`flex-shrink-0 w-8 h-8 rounded-full border flex items-center justify-center transition-all duration-300 ${openIndex === index ? 'border-purple-500/50 bg-purple-500/20 text-purple-400 rotate-45' : 'border-white/10 text-white/40'}`}>
                    <span className="text-xl leading-none font-light">+</span>
                  </div>
                </button>
                <div className={`overflow-hidden transition-all duration-300 ${openIndex === index ? "max-h-[400px]" : "max-h-0"}`}>
                  <div className="px-7 pb-6 pt-1">
                    <p className="text-white/70 leading-relaxed">{faq.answer}</p>
                  </div>
                </div>
              </div>
            ))}
          </div>

          {/* CTA */}
          <div className="mt-16 text-center p-10 rounded-2xl border border-purple-500/20 bg-gradient-to-b from-purple-500/10 to-blue-500/5">
            <h3 className="text-2xl font-bold text-white mb-3">Ready to scale your channel?</h3>
            <p className="text-white/70 mb-8 max-w-md mx-auto">Book a free discovery call and let's map out your path to explosive growth.</p>
            <a
              href="https://calendly.com/josh-visualvortex"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-block px-10 py-4 bg-gradient-to-r from-purple-600 to-blue-600 text-white rounded-xl font-semibold hover:from-purple-500 hover:to-blue-500 transition-all duration-200 shadow-[0_0_30px_rgba(139,92,246,0.4)] mb-6"
            >
              Book Your Free Call
            </a>
            <div className="pt-6 border-t border-white/5">
              <p className="text-white/30 text-sm">
                Or email us:{" "}
                <a href="mailto:visualvortexcreators@gmail.com" className="text-purple-400 hover:text-purple-300 transition-colors">
                  visualvortexcreators@gmail.com
                </a>
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

"use client";

import { useState } from "react";

export default function FAQ() {
  const [openIndex, setOpenIndex] = useState<number | null>(0);

  const faqs = [
    {
      question: "What exactly does Visual Vortex do?",
      answer: "We're a full-service content growth agency specializing in YouTube and social media. We handle everything from high-converting thumbnails and professional video editing to content strategy, short-form content creation, and data-driven optimization. Think of us as your complete content team focused on one goal: explosive, sustainable growth."
    },
    {
      question: "How quickly will I see results?",
      answer: "Most creators see noticeable improvements within the first 30 days—higher CTR, better retention, and increased views. Significant subscriber growth typically happens within 3-6 months. Remember, we grew Tyler Vitelli from 100K to 5M+ subscribers in just one year. Results vary by niche and consistency, but our proven systems deliver."
    },
    {
      question: "Who is Visual Vortex for?",
      answer: "We work with serious creators and brands ready to scale. Our clients range from 50K to 6M+ subscribers across all niches—education, entertainment, finance, lifestyle, gaming, and more. If you're consistent with content and ready to invest in growth, we're the right fit."
    },
    {
      question: "What's the investment and commitment?",
      answer: "Investment varies based on your needs and goals. We offer flexible packages including thumbnails-only, full editing, and complete growth partnerships. While we recommend 3-6 month partnerships for best results, we'll discuss the right option for you during our discovery call. Book a call to get a custom quote."
    },
    {
      question: "Why choose Visual Vortex over other agencies?",
      answer: "Three reasons: (1) Results—we generate 250M+ monthly long-form views and 999M+ short-form views across our clients. (2) Full-service—we handle creative AND strategy, not just one piece. (3) Data-driven—every decision is backed by analytics and testing, not guesswork. We're not just another editing shop; we're growth partners."
    },
    {
      question: "How do I get started?",
      answer: "Simple. Click the 'Book a Call' button, schedule a free discovery call, and we'll analyze your channel together. We'll discuss your goals, current performance, and growth opportunities. If we're a good fit, we'll create a custom strategy and get you onboarded within 7 days. No pressure, just honest conversation about your growth potential."
    }
  ];

  return (
    <section id="faq" className="relative py-32 bg-white overflow-hidden">
      <div className="relative container mx-auto px-6">
        <div className="max-w-4xl mx-auto">
          {/* Header */}
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl lg:text-6xl font-bold text-gray-900 mb-4">
              Frequently Asked Questions
            </h2>
            <p className="text-lg md:text-xl text-gray-600 max-w-2xl mx-auto">
              Everything you need to know about working with Visual Vortex
            </p>
          </div>

          {/* FAQ Items */}
          <div className="space-y-4">
            {faqs.map((faq, index) => (
              <div
                key={index}
                className="border-2 border-gray-200 rounded-2xl overflow-hidden bg-white hover:border-blue-400 hover:shadow-lg transition-all duration-300"
              >
                <button
                  onClick={() => setOpenIndex(openIndex === index ? null : index)}
                  className="w-full px-8 py-7 text-left flex justify-between items-center gap-4 group"
                >
                  <h3 className="text-lg md:text-xl font-bold text-gray-900 pr-4 group-hover:text-blue-600 transition-colors">
                    {faq.question}
                  </h3>
                  <div className={`flex-shrink-0 w-10 h-10 rounded-full bg-gradient-to-br from-blue-600 to-purple-600 text-white flex items-center justify-center transition-all duration-300 shadow-md ${
                    openIndex === index ? "rotate-45 scale-110" : ""
                  }`}>
                    <span className="text-2xl leading-none font-light">+</span>
                  </div>
                </button>
                <div
                  className={`overflow-hidden transition-all duration-300 ${
                    openIndex === index ? "max-h-[600px]" : "max-h-0"
                  }`}
                >
                  <div className="px-8 pb-7 pt-2 bg-gray-50/50">
                    <p className="text-gray-700 leading-relaxed text-base font-medium">{faq.answer}</p>
                  </div>
                </div>
              </div>
            ))}
          </div>

          {/* CTA */}
          <div className="mt-20 text-center p-12 rounded-3xl bg-gradient-to-br from-blue-50 to-purple-50 border-2 border-blue-200 shadow-lg">
            <h3 className="text-3xl font-bold text-gray-900 mb-4">Ready to scale your channel?</h3>
            <p className="text-xl text-gray-700 mb-8 max-w-2xl mx-auto font-medium">
              Book a free discovery call and let's map out your path to explosive growth. No pressure, just real talk about what's possible.
            </p>
            <a
              href="https://calendly.com/josh-visualvortex"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-block px-10 py-5 bg-gradient-to-r from-blue-600 to-purple-600 text-white rounded-xl font-bold text-lg hover:shadow-2xl hover:scale-105 transition-all duration-300 mb-6"
            >
              Book Your Free Call
            </a>
            <div className="pt-6 border-t border-blue-200">
              <p className="text-gray-700 text-base">
                Prefer email?{" "}
                <a href="mailto:visualvortexcreators@gmail.com" className="text-blue-600 hover:text-blue-700 font-bold underline">
                  visualvortexcreators@gmail.com
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

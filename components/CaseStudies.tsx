"use client";

import Image from "next/image";
import AnimatedCounter from "./AnimatedCounter";

export default function CaseStudies() {
  return (
    <section id="case-studies" className="relative py-32 bg-gray-50 overflow-hidden">
      <div className="relative container mx-auto px-6">
        <div className="max-w-7xl mx-auto">
          {/* Header */}
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl lg:text-6xl font-bold text-gray-900 mb-4">
              Case Studies
            </h2>
            <p className="text-lg md:text-xl text-gray-600 max-w-2xl mx-auto">
              Real results from real creators
            </p>
          </div>

          {/* Main Case Study */}
          <div className="max-w-5xl mx-auto">
            {/* Creator Profile */}
            <div className="flex items-center gap-4 mb-12">
              <div className="w-20 h-20 rounded-full overflow-hidden border-2 border-blue-600">
                <Image
                  src="/tyler.jpg"
                  alt="Tyler Vitelli"
                  width={80}
                  height={80}
                  className="w-full h-full object-cover"
                />
              </div>
              <div>
                <div className="text-3xl font-bold text-gray-900">Tyler Vitelli</div>
                <div className="text-xl text-blue-600">6M+ Subscribers</div>
              </div>
            </div>

            {/* Screenshots Side by Side */}
            <div className="grid md:grid-cols-2 gap-8">
              {/* 100k → 5M in a year */}
              <div>
                <h3 className="text-xl md:text-2xl lg:text-3xl font-black text-gray-900 mb-6 whitespace-nowrap">
                  <span className="text-transparent bg-clip-text bg-gradient-to-r from-purple-600 to-blue-600">100K → 5M+ Subs</span> in a Year
                </h3>
                <div className="rounded-2xl overflow-hidden border-2 border-gray-200 bg-white shadow-lg hover:shadow-xl hover:scale-[1.02] transition-all duration-300">
                  <Image
                    src="/betterquality.png"
                    alt="5.16M subscribers growth"
                    width={800}
                    height={600}
                    className="w-full h-auto"
                  />
                </div>
              </div>

              {/* Billions of views a month */}
              <div>
                <h3 className="text-xl md:text-2xl lg:text-3xl font-black text-gray-900 mb-6 whitespace-nowrap">
                  <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-600 to-purple-600">100M+ Views</span> in 48 Hours
                </h3>
                <div className="rounded-2xl overflow-hidden border-2 border-gray-200 bg-white shadow-lg hover:shadow-xl hover:scale-[1.02] transition-all duration-300">
                  <Image
                    src="/100m in 48 hours .PNG"
                    alt="102M+ views in 48 hours"
                    width={800}
                    height={600}
                    className="w-full h-auto object-cover"
                  />
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

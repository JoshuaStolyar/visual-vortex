"use client";

import { useState, useEffect, useRef } from "react";
import Image from "next/image";

export default function Clients() {
  const clients = [
    { name: "Tyler Vitelli", subscribers: "6M+ subs", initials: "TV", color: "bg-purple-500", image: "/tyler.jpg" },
    { name: "Tech Joyce", subscribers: "2.5M+ subs", initials: "TJ", color: "bg-pink-500", image: "/joyce.jpg" },
    { name: "Mega Builds", subscribers: "1.5M+ subs", initials: "MB", color: "bg-blue-500", image: "/megabuilds.jpg" },
    { name: "Dillon Latham", subscribers: "1M+ subs", initials: "DL", color: "bg-amber-500", image: "/dillon.jpg" },
    { name: "Thomas Minc", subscribers: "600K+ subs", initials: "TM", color: "bg-indigo-500", image: "/thomas.jpg" },
    { name: "Nicholas Berndt", subscribers: "500K+ subs", initials: "NB", color: "bg-violet-500", image: "/nicholas.jpg" },
    { name: "Yoeatz", subscribers: "450K+ subs", initials: "YE", color: "bg-cyan-500", image: "/yoeatz.jpg" },
    { name: "Limmy Talks", subscribers: "350K+ followers", initials: "LT", color: "bg-fuchsia-500", image: "/limmy.jpg" },
    { name: "Mega Proyectos", subscribers: "300K+ subs", initials: "MP", color: "bg-red-500", image: "/megaproyectos.jpg" },
    { name: "Richard Zheng", subscribers: "50K+ followers", initials: "RZ", color: "bg-rose-500", image: "/richard.jpg" },
    { name: "Ape AI", subscribers: "$50K+/month", initials: "AI", color: "bg-teal-500", image: "/apeai.jpg" }
  ];

  const [offset, setOffset] = useState(0);
  const [isVisible, setIsVisible] = useState(false);
  const sectionRef = useRef<HTMLElement>(null);

  // Intersection Observer to detect when section is visible
  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        setIsVisible(entry.isIntersecting);
        // Reset animation when becoming visible
        if (entry.isIntersecting) {
          setOffset(0);
        }
      },
      {
        threshold: 0,
        rootMargin: '500px 0px 0px 0px' // Start 500px before the section enters viewport
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

  // Carousel animation - only runs when visible
  useEffect(() => {
    if (!isVisible) return;

    const interval = setInterval(() => {
      setOffset((prev) => {
        // We need 7 rotations total to show all 10 clients
        // Don't reset until we've completed the 7th rotation
        if (prev >= 7) {
          return 0;
        }
        return prev + 1;
      });
    }, 2000);

    return () => clearInterval(interval);
  }, [isVisible]);

  const getTransformValue = () => {
    // Each card is a fixed width. Shift by exactly one card + gap each time
    // Using calc to precisely account for card width and gap
    return `calc(-${offset} * (250px + 16px))`;
  };

  return (
    <section ref={sectionRef} className="relative pt-0 pb-32 bg-[#0a0014] overflow-hidden">
      {/* Background gradient blur effects */}
      <div className="absolute inset-0 overflow-hidden">
        <div className="absolute top-1/2 right-1/3 w-96 h-96 bg-blue-600/20 rounded-full blur-[120px]"></div>
      </div>

      <div className="relative container mx-auto px-6">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-20">
            <h2 className="text-5xl md:text-7xl lg:text-8xl font-bold text-white mb-8">
              Trusted by 72+ Creators & Brands
            </h2>
            <p className="text-2xl md:text-3xl text-white/60 max-w-3xl mx-auto">
              We scale the biggest creators and businesses in the game
            </p>
          </div>

          <div className="relative mb-12 overflow-hidden">
            {/* Carousel Container */}
            <div className="overflow-hidden max-w-[1048px] mx-auto">
              <div
                className="flex gap-4 transition-transform duration-700 ease-in-out"
                style={{
                  transform: `translateX(${getTransformValue()})`
                }}
              >
                {clients.map((client, index) => (
                  <div
                    key={`${client.name}-${index}`}
                    className="group p-6 rounded-xl border border-white/10 backdrop-blur-sm bg-white/5 hover:bg-white/10 hover:scale-[1.02] transition-all duration-300 hover:shadow-[0_0_30px_rgba(124,58,237,0.3)] flex-shrink-0 w-[250px]"
                  >
                    {client.image ? (
                      <div className="w-16 h-16 rounded-full overflow-hidden mb-4 mx-auto border-2 border-purple-400">
                        <Image
                          src={client.image}
                          alt={client.name}
                          width={64}
                          height={64}
                          className="w-full h-full object-cover"
                        />
                      </div>
                    ) : (
                      <div className={`w-16 h-16 rounded-full ${client.color} flex items-center justify-center text-white font-bold text-xl mb-4 mx-auto`}>
                        {client.initials}
                      </div>
                    )}
                    <div className="text-xl font-bold text-white mb-2 text-center">{client.name}</div>
                    <div className="text-purple-400 font-semibold text-center">{client.subscribers}</div>
                  </div>
                ))}
              </div>
            </div>

            {/* Dots Indicator */}
            <div className="flex justify-center gap-2 mt-8">
              {[0, 1, 2, 3, 4, 5, 6, 7].map((index) => (
                <button
                  key={index}
                  onClick={() => {
                    setOffset(index);
                  }}
                  className={`w-2 h-2 rounded-full transition-all ${
                    offset === index ? "bg-purple-400 w-8" : "bg-white/30"
                  }`}
                  aria-label={`Go to position ${index + 1}`}
                />
              ))}
            </div>
          </div>

          <div className="text-center">
            <a
              href="https://calendly.com/josh-visualvortex"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-block px-8 py-4 bg-gradient-to-r from-purple-600 to-blue-600 rounded-lg font-semibold text-lg text-white hover:shadow-[0_0_40px_rgba(124,58,237,0.5)] transition-all duration-300 hover:-translate-y-1"
            >
              Join Them, Book a Call
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}

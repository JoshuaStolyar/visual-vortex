"use client";

import { useState, useEffect, useRef } from "react";
import Image from "next/image";
import { CheckCircle2 } from "lucide-react";

export default function Clients() {
  const [isVisible, setIsVisible] = useState(false);
  const [animationKey, setAnimationKey] = useState(0);
  const sectionRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setAnimationKey(prev => prev + 1);
          setIsVisible(true);
        } else {
          setIsVisible(false);
        }
      },
      { threshold: 0.2 }
    );
    if (sectionRef.current) observer.observe(sectionRef.current);
    return () => observer.disconnect();
  }, []);

  const clients = [
    { name: "Tyler Vitelli", subscribers: "7M+ subs", image: "/tyler.jpg" },
    { name: "Tech Joyce", subscribers: "2.5M+ subs", image: "/joyce.jpg" },
    { name: "Isaac Explores", subscribers: "2M+ subs", image: "/isaac.jpg" },
    { name: "Mega Builds", subscribers: "1.5M+ subs", image: "/megabuilds.jpg" },
    { name: "Dillon Latham", subscribers: "1M+ subs", image: "/dillon.jpg" },
    { name: "Thomas Minc", subscribers: "600K+ subs", image: "/thomas.jpg" },
    { name: "Nicholas Berndt", subscribers: "500K+ subs", image: "/nicholas.jpg" },
    { name: "Yoeatz", subscribers: "450K+ subs", image: "/yoeatz.jpg" },
    { name: "Limmy Talks", subscribers: "350K+ followers", image: "/limmy.jpg" },
    { name: "Mega Proyectos", subscribers: "300K+ subs", image: "/megaproyectos.jpg" },
    { name: "Chanler Rodgers", subscribers: "250K+ followers", image: "/chanlerrodgers.jpg" },
    { name: "IssaMeZeny", subscribers: "200K+ subs", image: "/issaamezeny.jpg" },
    { name: "Dylan Carey", subscribers: "100K+ subs", image: "/dylancarey.jpg" },
    { name: "NextStepNow", subscribers: "50K+ subs", image: "/nextstepnow.jpg" },
  ];

  const brands = [
    { name: "Whop", image: "/whop.jpg" },
    { name: "Simpletics", image: "/simpletics.jpg" },
    { name: "Brand", image: "/brand4.jpg" },
    { name: "Ape AI", image: "/apeai.jpg" },
  ];

  const duplicatedClients = [...clients, ...clients, ...clients, ...clients];

  return (
    <section id="clients" className="relative py-16 overflow-hidden">
      <div className="absolute top-0 left-0 right-0 h-32 pointer-events-none z-0" style={{ background: 'linear-gradient(to bottom, #030008, transparent)' }} />
      <div className="relative z-10 container mx-auto px-6">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-12">
            <p className="text-white/40 text-sm font-medium uppercase tracking-widest mb-3">Trusted by the best</p>
            <h2 className="text-2xl md:text-3xl text-white font-bold">
              We scale the biggest creators and businesses in the game
            </h2>
          </div>

          {/* Carousel */}
          <div ref={sectionRef} className="relative overflow-hidden py-4">
            <style jsx>{`
              @keyframes scroll {
                from { transform: translate3d(0, 0, 0); }
                to { transform: translate3d(-25%, 0, 0); }
              }
              .animate-scroll {
                animation: scroll 40s linear infinite;
                animation-delay: 0.2s;
                width: fit-content;
                will-change: transform;
              }
              .paused { animation: none; }
            `}</style>

            <div key={animationKey} className={`flex gap-10 items-center ${isVisible ? 'animate-scroll' : 'paused'}`}>
              {duplicatedClients.map((client, index) => (
                <div key={index} className="flex-shrink-0 flex items-center gap-3">
                  <div className="relative w-14 h-14 rounded-full overflow-hidden flex-shrink-0 ring-2 ring-purple-500/20">
                    <Image src={client.image} alt={client.name} fill className="object-cover" />
                  </div>
                  <div>
                    <div className="flex items-center gap-1.5">
                      <h3 className="font-semibold text-white text-sm whitespace-nowrap">{client.name}</h3>
                      <CheckCircle2 className={`w-4 h-4 flex-shrink-0 ${client.subscribers.includes('M') ? 'text-yellow-400 fill-yellow-400' : 'text-white/30 fill-white/30'}`} />
                    </div>
                    <p className="text-xs text-white/40 font-medium">{client.subscribers}</p>
                  </div>
                </div>
              ))}
            </div>

            {/* Gradient fades */}
            <div className="absolute left-0 top-0 bottom-0 w-24 bg-gradient-to-r from-[#030008] to-transparent pointer-events-none z-10" />
            <div className="absolute right-0 top-0 bottom-0 w-24 bg-gradient-to-l from-[#030008] to-transparent pointer-events-none z-10" />
          </div>

          {/* Divider */}
          <div className="w-full h-px bg-white my-12" />

          {/* Brands */}
          <div className="flex flex-wrap justify-center items-center gap-16 py-4">
            {brands.map((brand, index) => (
              <div key={index} className="relative w-16 h-16 rounded-full overflow-hidden ring-1 ring-white/10 opacity-70 hover:opacity-100 transition-opacity">
                <Image src={brand.image} alt={brand.name} fill className="object-cover" />
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}

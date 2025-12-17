"use client";

import { useState, useEffect, useRef } from "react";
import Image from "next/image";
import { CheckCircle2 } from "lucide-react";

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

  // Duplicate the array for seamless infinite scroll
  const duplicatedClients = [...clients, ...clients];

  return (
    <section id="clients" className="relative py-16 bg-white overflow-hidden">
      <div className="relative container mx-auto px-6">
        <div className="max-w-7xl mx-auto">
          {/* Header */}
          <div className="text-center mb-12">
            <h2 className="text-xl md:text-2xl text-gray-900 font-bold">
              We scale the biggest creators and businesses in the game
            </h2>
          </div>

          {/* Carousel */}
          <div className="relative overflow-hidden py-4">
            <style jsx>{`
              @keyframes scroll {
                0% {
                  transform: translateX(0);
                }
                100% {
                  transform: translateX(calc(-300px * ${clients.length}));
                }
              }
              .animate-scroll {
                animation: scroll 35s linear infinite;
              }
            `}</style>

            <div className="flex gap-12 animate-scroll items-center">
              {duplicatedClients.map((client, index) => (
                <div
                  key={index}
                  className="flex-shrink-0 flex items-center gap-4"
                >
                  <div className="relative w-20 h-20 rounded-full overflow-hidden flex-shrink-0">
                    <Image
                      src={client.image}
                      alt={client.name}
                      fill
                      className="object-cover"
                    />
                  </div>
                  <div>
                    <div className="flex items-center gap-2">
                      <h3 className="font-bold text-gray-900 text-lg whitespace-nowrap">
                        {client.name}
                      </h3>
                      <CheckCircle2 className="w-5 h-5 text-white fill-gray-400 flex-shrink-0" />
                    </div>
                    <p className="text-base text-gray-600 font-medium">
                      {client.subscribers}
                    </p>
                  </div>
                </div>
              ))}
            </div>

            {/* Gradient fades on edges */}
            <div className="absolute left-0 top-0 bottom-0 w-24 bg-gradient-to-r from-white via-white/80 to-transparent pointer-events-none z-10"></div>
            <div className="absolute right-0 top-0 bottom-0 w-24 bg-gradient-to-l from-white via-white/80 to-transparent pointer-events-none z-10"></div>
          </div>
        </div>
      </div>
    </section>
  );
}

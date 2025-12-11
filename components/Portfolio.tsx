"use client";

import Image from "next/image";
import { useState } from "react";

export default function Portfolio() {
  const [activeFilter, setActiveFilter] = useState("thumbnails");

  const portfolioItems = [
    {
      id: 1,
      title: "The Insane Engineering of the B-2 Bomber",
      category: "thumbnails",
      image: "https://i.ytimg.com/vi/1wMM87UKr_c/maxresdefault.jpg",
      client: "MegaBuilds",
      views: "4.8M",
      videoId: "1wMM87UKr_c"
    },
    {
      id: 2,
      title: "I got Tricked into Joining a REAL Cult…",
      category: "thumbnails",
      image: "https://i.ytimg.com/vi/oDcXLPUCx3g/hqdefault.jpg",
      client: "Tyler Vitelli",
      views: "1.13M",
      videoId: "oDcXLPUCx3g"
    },
    {
      id: 3,
      title: "Never get into an Uber past midnight..",
      category: "thumbnails",
      image: "https://i.ytimg.com/vi/DQt0eyxmOIs/maxresdefault.jpg",
      client: "Tyler Vitelli",
      views: "2.6M",
      videoId: "DQt0eyxmOIs"
    },
    {
      id: 4,
      title: "I got Revenge on My Childhood Bully..",
      category: "thumbnails",
      image: "https://i.ytimg.com/vi/6zxA4gFLohE/maxresdefault.jpg",
      client: "Tyler Vitelli",
      views: "2.6M",
      videoId: "6zxA4gFLohE"
    },
    {
      id: 5,
      title: "I Investigated a REAL Amber Alert..",
      category: "thumbnails",
      image: "https://i.ytimg.com/vi/zdI_sVNUPr8/maxresdefault.jpg",
      client: "Tyler Vitelli",
      views: "1.1M",
      videoId: "zdI_sVNUPr8"
    },
    {
      id: 6,
      title: "I Survived a REAL School Lockdown..",
      category: "thumbnails",
      image: "https://i.ytimg.com/vi/keKKS1yR3SY/maxresdefault.jpg",
      client: "Tyler Vitelli",
      views: "7.5M",
      videoId: "keKKS1yR3SY"
    },
    {
      id: 7,
      title: "Bali's Insane Plan to Build a $20B Subway",
      category: "thumbnails",
      image: "https://i.ytimg.com/vi/Ta2bj5lpeg0/maxresdefault.jpg",
      client: "Mega Builds",
      views: "150K",
      videoId: "Ta2bj5lpeg0"
    },
    {
      id: 8,
      title: "I Survived a REAL School Lockdown AGAIN..",
      category: "thumbnails",
      image: "https://i.ytimg.com/vi/-EFAaXL8FhU/maxresdefault.jpg",
      client: "Tyler Vitelli",
      views: "1.3M",
      videoId: "-EFAaXL8FhU"
    },
    {
      id: 9,
      title: "My Best Friend Got Me ARRESTED..",
      category: "thumbnails",
      image: "https://i.ytimg.com/vi/CTc4XCYbOQw/maxresdefault.jpg",
      client: "Tyler Vitelli",
      views: "1.3M",
      videoId: "CTc4XCYbOQw"
    },
    {
      id: 10,
      title: "Easy Hair Tutorial",
      category: "shortform",
      image: "https://i.ytimg.com/vi/9Zu3O1W1Tt0/maxresdefault.jpg",
      client: "Dillon Latham",
      views: "TBD",
      videoId: "9Zu3O1W1Tt0",
      isShort: true
    }
  ];

  const filters = [
    { id: "thumbnails", label: "Thumbnails" },
    { id: "longform", label: "Long Form" },
    { id: "shortform", label: "Short Form" }
  ];

  const filteredItems = portfolioItems.filter(item => item.category === activeFilter);

  return (
    <section id="portfolio" className="relative py-32 bg-[#0a0014] overflow-hidden">
      {/* Background gradient blur effects */}
      <div className="absolute inset-0 overflow-hidden">
        <div className="absolute top-1/3 right-1/4 w-96 h-96 bg-purple-600/20 rounded-full blur-[120px]"></div>
        <div className="absolute bottom-1/3 left-1/4 w-96 h-96 bg-blue-600/15 rounded-full blur-[120px]"></div>
      </div>

      <div className="relative container mx-auto px-6">
        <div className="max-w-7xl mx-auto">
          {/* Section Header */}
          <div className="text-center mb-16">
            <h2 className="text-5xl md:text-7xl lg:text-8xl font-bold text-white mb-8">
              Our Portfolio
            </h2>
            <p className="text-2xl md:text-3xl text-white/60 max-w-3xl mx-auto">
              Showcasing our best work in thumbnails and video editing
            </p>
          </div>

          {/* Filter Tabs */}
          <div className="flex flex-wrap justify-center gap-4 mb-16">
            {filters.map((filter) => (
              <button
                key={filter.id}
                onClick={() => setActiveFilter(filter.id)}
                className={`px-6 py-3 rounded-lg font-semibold text-lg transition-all duration-300 ${
                  activeFilter === filter.id
                    ? "bg-gradient-to-r from-purple-600 to-blue-600 text-white shadow-[0_0_30px_rgba(124,58,237,0.5)]"
                    : "border border-white/20 text-white/60 hover:text-white hover:border-white/40"
                }`}
              >
                {filter.label}
              </button>
            ))}
          </div>

          {/* Portfolio Grid */}
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {filteredItems.map((item) => (
              <a
                key={item.id}
                href={item.isShort ? `https://youtube.com/shorts/${item.videoId}` : `https://youtube.com/watch?v=${item.videoId}`}
                target="_blank"
                rel="noopener noreferrer"
                className="group relative rounded-2xl overflow-hidden border border-white/10 backdrop-blur-sm bg-white/5 hover:bg-white/10 transition-all duration-300 hover:scale-[1.02] hover:shadow-[0_0_40px_rgba(124,58,237,0.3)] cursor-pointer"
              >
                {/* Image */}
                <div className="relative aspect-video bg-white/5">
                  <Image
                    src={item.image}
                    alt={item.title}
                    fill
                    className="object-cover"
                  />
                  {/* Overlay on hover */}
                  <div className="absolute inset-0 bg-gradient-to-t from-purple-600/80 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-end p-6">
                    <div className="text-white">
                      <div className="text-xl font-bold mb-2">{item.title}</div>
                      <div className="text-purple-200">Client: {item.client}</div>
                      {!item.isShort && <div className="text-purple-200">{item.views} views</div>}
                    </div>
                  </div>
                </div>

                {/* Info */}
                <div className="p-6">
                  <h3 className="text-xl font-bold text-white mb-2 line-clamp-2">{item.title}</h3>
                  <div className="flex justify-between items-center">
                    <p className="text-purple-400 font-semibold">{item.client}</p>
                    {!item.isShort && <p className="text-white/60 text-sm">{item.views} views</p>}
                  </div>
                </div>
              </a>
            ))}
          </div>

          {/* Empty State */}
          {filteredItems.length === 0 && (
            <div className="text-center py-20">
              <p className="text-2xl text-white/60">No items in this category yet</p>
            </div>
          )}
        </div>
      </div>
    </section>
  );
}

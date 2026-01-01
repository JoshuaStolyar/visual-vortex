"use client";

import Image from "next/image";
import { useState } from "react";
import { X } from "lucide-react";

export default function Portfolio() {
  const [activeFilter, setActiveFilter] = useState("thumbnails");
  const [selectedVideo, setSelectedVideo] = useState<{videoId: string, isShort: boolean} | null>(null);

  const portfolioItems = [
    {
      id: 1,
      title: "Bali's Insane Plan to Build a $20B Subway",
      category: "thumbnails",
      image: "https://i.ytimg.com/vi/Ta2bj5lpeg0/maxresdefault.jpg",
      client: "Mega Builds",
      views: "150K",
      videoId: "Ta2bj5lpeg0"
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
      title: "The Insane Engineering of the B-2 Bomber",
      category: "thumbnails",
      image: "https://i.ytimg.com/vi/1wMM87UKr_c/maxresdefault.jpg",
      client: "MegaBuilds",
      views: "4.8M",
      videoId: "1wMM87UKr_c"
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
      title: "I Investigated a REAL Amber Alert..",
      category: "thumbnails",
      image: "https://i.ytimg.com/vi/zdI_sVNUPr8/maxresdefault.jpg",
      client: "Tyler Vitelli",
      views: "1.1M",
      videoId: "zdI_sVNUPr8"
    },
    {
      id: 8,
      title: "I Survived a REAL School Lockdown",
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
    },
    {
      id: 11,
      title: "Long Form Video 1",
      category: "longform",
      image: "https://i.ytimg.com/vi/dsUH02Lq_Bk/maxresdefault.jpg",
      client: "Tyler Vitelli",
      views: "400K+",
      videoId: "dsUH02Lq_Bk"
    },
    {
      id: 12,
      title: "Long Form Video 2",
      category: "longform",
      image: "https://i.ytimg.com/vi/KYz2LzMF4hk/maxresdefault.jpg",
      client: "Tyler Vitelli",
      views: "2.5M",
      videoId: "KYz2LzMF4hk"
    },
    {
      id: 13,
      title: "Long Form Video 3",
      category: "longform",
      image: "https://i.ytimg.com/vi/gALKT9BeMsQ/maxresdefault.jpg",
      client: "Tyler Vitelli",
      views: "1.5M",
      videoId: "gALKT9BeMsQ"
    },
    {
      id: 14,
      title: "The Bees RUINED My Life..",
      category: "longform",
      image: "https://i.ytimg.com/vi/j_tLSuKBdbw/maxresdefault.jpg",
      client: "Tyler Vitelli",
      views: "1.2M",
      videoId: "j_tLSuKBdbw"
    },
    {
      id: 15,
      title: "Never pick up a Hitchhiker at night..",
      category: "longform",
      image: "https://i.ytimg.com/vi/VjtXbWL5fnU/maxresdefault.jpg",
      client: "Tyler Vitelli",
      views: "2M",
      videoId: "VjtXbWL5fnU"
    },
    {
      id: 16,
      title: "Never Fall Asleep FIRST at a Sleepover..",
      category: "longform",
      image: "https://i.ytimg.com/vi/Q0M2PEPgTcg/maxresdefault.jpg",
      client: "Tyler Vitelli",
      views: "1M",
      videoId: "Q0M2PEPgTcg"
    },
    {
      id: 17,
      title: "I Got My Creepy Teacher FIRED.. (Storytime)",
      category: "longform",
      image: "https://i.ytimg.com/vi/qyG0lVZF7ZA/maxresdefault.jpg",
      client: "Tyler Vitelli",
      views: "2.5M",
      videoId: "qyG0lVZF7ZA"
    },
    {
      id: 18,
      title: "We Have A STALKER..",
      category: "longform",
      image: "https://i.ytimg.com/vi/1fYpW2jpDx0/maxresdefault.jpg",
      client: "Tyler Vitelli",
      views: "1.6M",
      videoId: "1fYpW2jpDx0"
    },
    {
      id: 19,
      title: "I Survived a REAL Kidnapping.. (Storytime)",
      category: "longform",
      image: "https://i.ytimg.com/vi/ohhJIge1sKE/maxresdefault.jpg",
      client: "Tyler Vitelli",
      views: "1.8M",
      videoId: "ohhJIge1sKE"
    }
  ];

  const filters = [
    { id: "thumbnails", label: "Thumbnails" },
    { id: "longform", label: "Long Form" },
    { id: "shortform", label: "Short Form" }
  ];

  const filteredItems = portfolioItems.filter(item => item.category === activeFilter);

  return (
    <section id="portfolio" className="relative py-32 bg-white overflow-hidden">
      <div className="relative container mx-auto px-6">
        <div className="max-w-7xl mx-auto">
          {/* Section Header */}
          <div className="text-center mb-12">
            <h2 className="text-4xl md:text-5xl lg:text-6xl font-bold text-gray-900 mb-4">
              Our Portfolio
            </h2>
            <p className="text-lg md:text-xl text-gray-600 max-w-2xl mx-auto">
              Showcasing our best work in thumbnails and video editing
            </p>
          </div>

          {/* Filter Tabs */}
          <div className="flex flex-wrap justify-center gap-3 mb-12">
            {filters.map((filter) => (
              <button
                key={filter.id}
                onClick={() => setActiveFilter(filter.id)}
                className={`px-6 py-3 rounded-lg font-semibold transition-all duration-200 ${
                  activeFilter === filter.id
                    ? "bg-blue-600 text-white shadow-sm"
                    : "border-2 border-gray-200 text-gray-700 hover:border-gray-300 hover:bg-gray-50"
                }`}
              >
                {filter.label}
              </button>
            ))}
          </div>

          {/* Portfolio Grid */}
          {activeFilter === "longform" ? (
            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
              {filteredItems.map((item) => (
                <div key={item.id} className="rounded-2xl overflow-hidden border-2 border-gray-200 bg-white shadow-lg hover:shadow-2xl hover:border-blue-300 transition-all duration-300">
                  {/* Embedded Video */}
                  <div className="relative bg-black" style={{paddingBottom: '56.25%'}}>
                    <iframe
                      className="absolute top-0 left-0 w-full h-full"
                      src={`https://www.youtube.com/embed/${item.videoId}`}
                      allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                      allowFullScreen
                    />
                  </div>
                  {/* Info */}
                  <div className="p-6">
                    <h3 className="text-xl font-bold text-gray-900 mb-3 line-clamp-2">{item.title}</h3>
                    <div className="flex justify-between items-center">
                      <p className="text-blue-600 font-semibold text-base">{item.client}</p>
                      <p className="text-gray-600 text-base font-medium">{item.views} views</p>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          ) : (
            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
              {filteredItems.map((item) => (
                <div
                  key={item.id}
                  onClick={activeFilter === "shortform" ? () => setSelectedVideo({videoId: item.videoId, isShort: item.isShort || false}) : undefined}
                  className={`group relative rounded-2xl overflow-hidden border-2 border-gray-200 bg-white hover:shadow-2xl hover:border-blue-300 transition-all duration-300 ${activeFilter === "shortform" ? "cursor-pointer" : ""}`}
                >
                  {/* Image */}
                  <div className="relative aspect-video bg-gray-100 overflow-hidden">
                    <Image
                      src={item.image}
                      alt={item.title}
                      fill
                      className="object-cover group-hover:scale-105 transition-transform duration-300"
                    />
                    {/* Overlay on hover */}
                    <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-black/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-200 flex items-end p-6">
                      <div className="text-white">
                        <div className="text-lg font-bold mb-1">{item.title}</div>
                        <div className="text-white/90 text-sm">Client: {item.client}</div>
                        {!item.isShort && <div className="text-white/80 text-sm">{item.views} views</div>}
                      </div>
                    </div>
                  </div>

                  {/* Info */}
                  <div className="p-6">
                    <h3 className="text-xl font-bold text-gray-900 mb-3 line-clamp-2 group-hover:text-blue-600 transition-colors">{item.title}</h3>
                    <div className="flex justify-between items-center">
                      <p className="text-blue-600 font-semibold text-base">{item.client}</p>
                      {!item.isShort && <p className="text-gray-600 text-base font-medium">{item.views} views</p>}
                    </div>
                  </div>
                </div>
              ))}
            </div>
          )}

          {/* Video Modal */}
          {selectedVideo && (
            <div className="fixed inset-0 bg-black/90 z-50 flex items-center justify-center p-4" onClick={() => setSelectedVideo(null)}>
              <button
                onClick={(e) => {
                  e.stopPropagation();
                  setSelectedVideo(null);
                }}
                className="absolute top-4 right-4 text-white hover:text-gray-300 transition-colors z-10"
              >
                <X size={28} />
              </button>
              <div className={`w-full ${selectedVideo.isShort ? 'max-w-sm' : 'max-w-3xl'}`} onClick={(e) => e.stopPropagation()}>
                <div className="relative bg-black rounded-lg overflow-hidden" style={{paddingBottom: selectedVideo.isShort ? '177.78%' : '56.25%'}}>
                  <iframe
                    className="absolute top-0 left-0 w-full h-full"
                    src={`https://www.youtube.com/embed/${selectedVideo.videoId}?autoplay=1`}
                    allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                    allowFullScreen
                  />
                </div>
              </div>
            </div>
          )}

          {/* Empty State */}
          {filteredItems.length === 0 && (
            <div className="text-center py-20">
              <p className="text-xl text-gray-600">No items in this category yet</p>
            </div>
          )}
        </div>
      </div>
    </section>
  );
}

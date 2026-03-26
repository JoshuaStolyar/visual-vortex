"use client";

import Image from "next/image";
import { useState, useEffect } from "react";
import { X } from "lucide-react";

export default function Portfolio() {
  const [activeFilter, setActiveFilter] = useState("thumbnails");
  const [selectedVideo, setSelectedVideo] = useState<{videoId: string, isShort: boolean} | null>(null);

  useEffect(() => {
    const onKey = (e: KeyboardEvent) => { if (e.key === "Escape") setSelectedVideo(null); };
    window.addEventListener("keydown", onKey);
    return () => window.removeEventListener("keydown", onKey);
  }, []);

  useEffect(() => {
    document.body.style.overflow = selectedVideo ? "hidden" : "";
    return () => { document.body.style.overflow = ""; };
  }, [selectedVideo]);

  const portfolioItems = [
    { id: 7,  title: "I Investigated a REAL Amber Alert..",         category: "thumbnails", image: "https://i.ytimg.com/vi/zdI_sVNUPr8/maxresdefault.jpg", client: "Tyler Vitelli",   views: "1.1M",  videoId: "zdI_sVNUPr8" },
    { id: 3,  title: 'I Investigated The "Gates To Hell"',           category: "thumbnails", image: "/isaac-gates.jpg",                                      client: "Isaac Explores", views: "2.2M",  videoId: "" },
    { id: 5,  title: "The Insane Engineering of the B-2 Bomber",     category: "thumbnails", image: "https://i.ytimg.com/vi/1wMM87UKr_c/maxresdefault.jpg", client: "MegaBuilds",     views: "4.8M",  videoId: "1wMM87UKr_c" },
    { id: 4,  title: "I got Revenge on My Childhood Bully..",        category: "thumbnails", image: "https://i.ytimg.com/vi/6zxA4gFLohE/maxresdefault.jpg", client: "Tyler Vitelli",   views: "2.6M",  videoId: "6zxA4gFLohE" },
    { id: 1,  title: "Bali's Insane Plan to Build a $20B Subway",   category: "thumbnails", image: "https://i.ytimg.com/vi/Ta2bj5lpeg0/maxresdefault.jpg", client: "Mega Builds",     views: "150K",  videoId: "Ta2bj5lpeg0" },
    { id: 6,  title: "Lies We All Believed As Kids",                 category: "thumbnails", image: "/lies.jpg",                                             client: "Tyler Vitelli",   views: "1.4M",  videoId: "h7oha8aXuSU" },
    { id: 10, title: "Ranking On Chad LeaderBoard",                  category: "shortform",  image: "https://i.ytimg.com/vi/_ZwL7EVpcRY/hqdefault.jpg",    client: "Simpletics",      views: "",      videoId: "_ZwL7EVpcRY", isShort: true },
    { id: 20, title: "Arch Burger Contreversay",                     category: "shortform",  image: "https://i.ytimg.com/vi/166u7JPkZ5s/hqdefault.jpg",    client: "Dillon Latham",   views: "",      videoId: "166u7JPkZ5s", isShort: true },
    { id: 11, title: "Never Try Skipping School",                    category: "longform",   image: "https://i.ytimg.com/vi/dsUH02Lq_Bk/maxresdefault.jpg", client: "Tyler Vitelli",   views: "400K+", videoId: "dsUH02Lq_Bk" },
    { id: 12, title: "Our Group Chat Got Leaked",                    category: "longform",   image: "https://i.ytimg.com/vi/KYz2LzMF4hk/maxresdefault.jpg", client: "Tyler Vitelli",   views: "2.5M",  videoId: "KYz2LzMF4hk" },
    { id: 13, title: "School Drills Are Dumb",                       category: "longform",   image: "https://i.ytimg.com/vi/gALKT9BeMsQ/maxresdefault.jpg", client: "Tyler Vitelli",   views: "1.5M",  videoId: "gALKT9BeMsQ" },
    { id: 14, title: "The Bees RUINED My Life..",                    category: "longform",   image: "https://i.ytimg.com/vi/j_tLSuKBdbw/maxresdefault.jpg", client: "Tyler Vitelli",   views: "1.2M",  videoId: "j_tLSuKBdbw" },
    { id: 15, title: "Never pick up a Hitchhiker at night..",        category: "longform",   image: "https://i.ytimg.com/vi/VjtXbWL5fnU/maxresdefault.jpg", client: "Tyler Vitelli",   views: "2M",    videoId: "VjtXbWL5fnU" },
    { id: 16, title: "Never Fall Asleep FIRST at a Sleepover..",     category: "longform",   image: "https://i.ytimg.com/vi/Q0M2PEPgTcg/maxresdefault.jpg", client: "Tyler Vitelli",   views: "1M",    videoId: "Q0M2PEPgTcg" },
    { id: 17, title: "I Got My Creepy Teacher FIRED..",              category: "longform",   image: "https://i.ytimg.com/vi/qyG0lVZF7ZA/maxresdefault.jpg", client: "Tyler Vitelli",   views: "2.5M",  videoId: "qyG0lVZF7ZA" },
    { id: 18, title: "We Have A STALKER..",                          category: "longform",   image: "https://i.ytimg.com/vi/1fYpW2jpDx0/maxresdefault.jpg", client: "Tyler Vitelli",   views: "1.6M",  videoId: "1fYpW2jpDx0" },
    { id: 19, title: "I Survived a REAL Kidnapping..",               category: "longform",   image: "https://i.ytimg.com/vi/ohhJIge1sKE/maxresdefault.jpg", client: "Tyler Vitelli",   views: "1.8M",  videoId: "ohhJIge1sKE" },
  ];

  const filters = [
    { id: "thumbnails", label: "Thumbnails" },
    { id: "longform", label: "Long Form" },
    { id: "shortform", label: "Short Form" },
  ];

  const filteredItems = portfolioItems.filter(item => item.category === activeFilter);

  return (
    <section id="portfolio" className="relative py-32 overflow-hidden">
      <div className="absolute top-1/2 right-[-10%] w-[400px] h-[400px] rounded-full bg-blue-700/10 blur-[100px] pointer-events-none" />

      <div className="relative z-10 container mx-auto px-6">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-14">
            <h2 className="text-4xl md:text-5xl lg:text-6xl font-bold text-white mb-4">Our Work</h2>
          </div>

          {/* Filter Tabs */}
          <div className="flex flex-wrap justify-center gap-3 mb-12">
            {filters.map((filter) => (
              <button
                key={filter.id}
                onClick={() => setActiveFilter(filter.id)}
                className={`px-6 py-2.5 rounded-full text-sm font-semibold transition-all duration-200 ${
                  activeFilter === filter.id
                    ? "bg-gradient-to-r from-purple-600 to-blue-600 text-white shadow-[0_0_20px_rgba(139,92,246,0.4)]"
                    : "border border-white/10 text-white/60 hover:border-white/20 hover:text-white hover:bg-white/5"
                }`}
              >
                {filter.label}
              </button>
            ))}
          </div>

          {/* Grid */}
          {activeFilter === "longform" ? (
            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-5">
              {filteredItems.map((item) => (
                <div key={item.id} className="rounded-2xl overflow-hidden border border-white/5 bg-white/[0.03] hover:border-purple-500/30 hover:bg-white/[0.06] transition-all duration-300">
                  <div className="relative bg-black" style={{paddingBottom: '56.25%'}}>
                    <iframe
                      className="absolute top-0 left-0 w-full h-full"
                      src={`https://www.youtube.com/embed/${item.videoId}`}
                      allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                      allowFullScreen
                    />
                  </div>
                  <div className="p-5">
                    <h3 className="text-base font-bold text-white mb-2 line-clamp-2">{item.title}</h3>
                    <div className="flex justify-between items-center">
                      <p className="text-purple-400 font-semibold text-sm">{item.client}</p>
                      <p className="text-white/40 text-sm">{item.views} views</p>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          ) : (
            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-5">
              {filteredItems.map((item) => (
                <div
                  key={item.id}
                  onClick={activeFilter === "shortform" ? () => setSelectedVideo({videoId: item.videoId, isShort: item.isShort || false}) : undefined}
                  className={`group relative rounded-2xl overflow-hidden border border-white/5 bg-white/[0.03] hover:border-purple-500/30 hover:shadow-[0_0_30px_rgba(139,92,246,0.15)] transition-all duration-300 ${activeFilter === "shortform" ? "cursor-pointer" : ""}`}
                >
                  <div className="relative aspect-video bg-black/50 overflow-hidden">
                    <Image src={item.image} alt={item.title} fill className="object-cover group-hover:scale-105 transition-transform duration-300 opacity-90" />
                    <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/10 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-200 flex items-end p-5">
                      <div className="text-white">
                        <div className="text-sm font-bold">{item.client}</div>
                        {!item.isShort && <div className="text-white/70 text-xs">{item.views} views</div>}
                      </div>
                    </div>
                  </div>
                  <div className="p-5">
                    <h3 className="text-base font-bold text-white mb-2 line-clamp-2 group-hover:text-purple-300 transition-colors">{item.title}</h3>
                    <div className="flex justify-between items-center">
                      <p className="text-purple-400 font-semibold text-sm">{item.client}</p>
                      {!item.isShort && <p className="text-white/40 text-sm">{item.views} views</p>}
                    </div>
                  </div>
                </div>
              ))}
            </div>
          )}

          {filteredItems.length === 0 && (
            <div className="text-center py-20">
              <p className="text-white/40">No items in this category yet</p>
            </div>
          )}

          {/* Video Modal */}
          {selectedVideo && (
            <div
              className="fixed inset-0 bg-black/95 z-[500] flex items-center justify-center p-4 animate-fadeIn"
              onMouseDown={() => setSelectedVideo(null)}
            >
              <div
                className={`relative w-full ${selectedVideo.isShort ? "max-w-xs" : "max-w-4xl"}`}
                onMouseDown={(e) => e.stopPropagation()}
              >
                <button
                  onMouseDown={(e) => { e.stopPropagation(); setSelectedVideo(null); }}
                  className="absolute -top-4 -right-4 z-10 w-10 h-10 flex items-center justify-center rounded-full bg-white/15 hover:bg-white/30 text-white border border-white/20 transition-all"
                >
                  <X size={18} />
                </button>
                <div className="relative bg-black rounded-2xl overflow-hidden" style={{ paddingBottom: selectedVideo.isShort ? "177.78%" : "56.25%" }}>
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
        </div>
      </div>
    </section>
  );
}

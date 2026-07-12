"use client";

import Image from "next/image";
import { useState, useEffect, useRef, useCallback } from "react";
import { X, Play, Eye } from "lucide-react";
import Reveal from "./Reveal";
import Tilt from "./Tilt";
import { portfolioItems } from "./portfolio-data";

export default function Portfolio() {
  const [activeFilter, setActiveFilter] = useState("thumbnails");
  const [selectedVideo, setSelectedVideo] = useState<{videoId: string, isShort: boolean} | null>(null);

  /*
   * Hover video preview — desktop / fine-pointer only (same gating as
   * Magnetic/Tilt). Exactly ONE iframe exists at a time: `previewId` names
   * the hovered card, mouseleave unmounts it. A short enter-delay stops the
   * cursor sweeping across the grid from spawning throwaway embeds.
   */
  const canPreview = useRef(false);
  const [previewId, setPreviewId] = useState<number | null>(null);
  const previewTimer = useRef<number | null>(null);

  useEffect(() => {
    canPreview.current =
      window.matchMedia("(pointer: fine)").matches &&
      !window.matchMedia("(prefers-reduced-motion: reduce)").matches;
  }, []);

  const stopPreview = useCallback(() => {
    if (previewTimer.current) window.clearTimeout(previewTimer.current);
    previewTimer.current = null;
    setPreviewId(null);
  }, []);

  const startPreview = useCallback((id: number) => {
    if (!canPreview.current) return;
    if (previewTimer.current) window.clearTimeout(previewTimer.current);
    previewTimer.current = window.setTimeout(() => setPreviewId(id), 160);
  }, []);

  useEffect(() => () => {
    if (previewTimer.current) window.clearTimeout(previewTimer.current);
  }, []);

  useEffect(() => {
    const onKey = (e: KeyboardEvent) => { if (e.key === "Escape") setSelectedVideo(null); };
    window.addEventListener("keydown", onKey);
    return () => window.removeEventListener("keydown", onKey);
  }, []);

  useEffect(() => {
    document.body.style.overflow = selectedVideo ? "hidden" : "";
    return () => { document.body.style.overflow = ""; };
  }, [selectedVideo]);

  const filters = [
    { id: "thumbnails", label: "Thumbnails" },
    { id: "longform", label: "Long Form" },
    { id: "shortform", label: "Short Form" },
  ];

  const filteredItems = portfolioItems.filter(item => item.category === activeFilter);

  return (
    <section id="portfolio" className="relative py-28 md:py-32 overflow-hidden">
      {/* Cosmic tint: teal-cyan nebula region — atmosphere only, UI accents stay ember. */}
      <div className="absolute top-16 left-[-8%] w-[400px] h-[400px] rounded-full bg-[#22d3ee]/[0.05] blur-[100px] pointer-events-none" />
      <div className="absolute bottom-1/4 right-[-10%] w-[360px] h-[360px] rounded-full bg-[#2dd4bf]/[0.03] blur-[110px] pointer-events-none" />

      <div className="relative z-10 container mx-auto px-6">
        <div className="max-w-7xl mx-auto">
          <Reveal>
            <div className="text-center mb-12">
              <p className="eyebrow mb-4">Portfolio</p>
              <h2 className="font-display text-4xl md:text-5xl lg:text-6xl font-bold tracking-tight text-white">
                Our Work
              </h2>
            </div>
          </Reveal>

          {/* Filter Tabs — segmented control */}
          <Reveal delay={100}>
            <div className="flex justify-center mb-12">
              <div className="inline-flex flex-wrap justify-center gap-1 p-1.5 rounded-full border border-white/[0.08] bg-white/[0.03] backdrop-blur-sm">
                {filters.map((filter) => (
                  <button
                    key={filter.id}
                    onClick={() => { stopPreview(); setActiveFilter(filter.id); }}
                    className={`px-5 md:px-6 py-2.5 rounded-full text-sm font-semibold transition-all duration-300 ${
                      activeFilter === filter.id
                        ? "bg-accent text-[#0a0a0a]"
                        : "text-white/55 hover:text-white hover:bg-white/[0.06]"
                    }`}
                  >
                    {filter.label}
                  </button>
                ))}
              </div>
            </div>
          </Reveal>

          {/* Grid — one card treatment for all three tabs. Long/short-form
              open the modal on click; 16:9 items with a videoId play a live
              muted preview on hover (desktop only). */}
          <div key={activeFilter} className="grid md:grid-cols-2 lg:grid-cols-3 gap-5 md:gap-6 animate-fadeIn">
            {filteredItems.map((item) => {
              const clickable = activeFilter !== "thumbnails" && !!item.videoId;
              // Shorts are 9:16 — a letterboxed 16:9 preview looks broken, so they stay static.
              // startPreview itself gates on fine-pointer + motion-ok, so previewId is only
              // ever set on desktop with animations allowed.
              const previewable = !!item.videoId && !item.isShort;
              const previewing = previewable && previewId === item.id;
              return (
                <Tilt key={item.id} maxTilt={2.5} glare glareRadiusClassName="rounded-[1.25rem]" className="h-full">
                <div
                  onClick={clickable ? () => { stopPreview(); setSelectedVideo({videoId: item.videoId, isShort: item.isShort || false}); } : undefined}
                  onMouseEnter={previewable ? () => startPreview(item.id) : undefined}
                  onMouseLeave={previewable ? stopPreview : undefined}
                  className={`group glass-card glass-card-lift relative overflow-hidden h-full ${clickable ? "cursor-pointer" : ""}`}
                >
                  <div className="relative aspect-video bg-black/50 overflow-hidden">
                    <Image
                      src={item.image}
                      alt={item.title}
                      fill
                      sizes="(max-width: 768px) 100vw, (max-width: 1024px) 50vw, 33vw"
                      className="object-cover"
                    />
                    {/* Live preview — muted, looping, mounted only for the hovered card.
                        pointer-events-none keeps hover/click on the card itself. */}
                    {previewing && (
                      <iframe
                        className="absolute inset-0 w-full h-full pointer-events-none animate-fadeIn"
                        src={`https://www.youtube.com/embed/${item.videoId}?autoplay=1&mute=1&controls=0&loop=1&playlist=${item.videoId}&playsinline=1&rel=0&modestbranding=1&iv_load_policy=3&disablekb=1`}
                        title={`${item.title} — preview`}
                        allow="autoplay; encrypted-media"
                        tabIndex={-1}
                        aria-hidden="true"
                      />
                    )}
                    {/* Bottom scrim */}
                    <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 pointer-events-none" />
                    {/* View count chip */}
                    {!item.isShort && item.views && (
                      <div className="absolute bottom-3 right-3 inline-flex items-center gap-1.5 px-2.5 py-1 rounded-full bg-black/60 backdrop-blur-sm border border-white/10 text-white/90 text-xs font-semibold">
                        <Eye size={12} strokeWidth={2.2} />
                        {item.views}
                      </div>
                    )}
                    {/* Play affordance — hidden once a live preview is running */}
                    {clickable && !previewing && (
                      <div className="absolute inset-0 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                        <div className="w-14 h-14 rounded-full bg-white/10 backdrop-blur-md border border-white/25 flex items-center justify-center shadow-[0_10px_40px_-10px_rgba(0,0,0,0.8)] group-hover:scale-105 transition-transform duration-300">
                          <Play size={20} className="text-white ml-0.5" fill="currentColor" />
                        </div>
                      </div>
                    )}
                  </div>
                  <div className="p-5">
                    <h3 className="text-base font-bold text-white mb-2.5 line-clamp-2">{item.title}</h3>
                    <div className="flex justify-between items-center">
                      <p className="text-white/70 font-semibold text-sm">{item.client}</p>
                      {!item.isShort && item.views && (
                        <p className="text-white/40 text-xs font-medium">{item.views} views</p>
                      )}
                    </div>
                  </div>
                </div>
                </Tilt>
              );
            })}
          </div>

          {filteredItems.length === 0 && (
            <div className="text-center py-20">
              <p className="text-white/40">No items in this category yet</p>
            </div>
          )}

          {/* Video Modal */}
          {selectedVideo && (
            <div
              className="fixed inset-0 bg-black/90 backdrop-blur-md z-[500] flex items-center justify-center p-4 animate-fadeIn"
              onMouseDown={() => setSelectedVideo(null)}
            >
              <div
                className={`relative w-full animate-scaleIn ${selectedVideo.isShort ? "max-w-xs" : "max-w-4xl"}`}
                onMouseDown={(e) => e.stopPropagation()}
              >
                <button
                  onMouseDown={(e) => { e.stopPropagation(); setSelectedVideo(null); }}
                  aria-label="Close video"
                  className="absolute -top-4 -right-4 z-10 w-10 h-10 flex items-center justify-center rounded-full bg-white/10 hover:bg-white/25 backdrop-blur-md text-white border border-white/20 transition-all duration-200 hover:scale-105"
                >
                  <X size={18} />
                </button>
                <div
                  className="relative bg-black rounded-2xl overflow-hidden ring-1 ring-white/10 shadow-[0_25px_80px_-20px_rgba(0,0,0,0.8)]"
                  style={{ paddingBottom: selectedVideo.isShort ? "177.78%" : "56.25%" }}
                >
                  <iframe
                    className="absolute top-0 left-0 w-full h-full"
                    src={`https://www.youtube.com/embed/${selectedVideo.videoId}?autoplay=1`}
                    title="Video player"
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

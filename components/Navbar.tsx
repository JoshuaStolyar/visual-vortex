"use client";

import { useState, useEffect } from "react";
import { Menu, X } from "lucide-react";
import Magnetic from "./Magnetic";

const TwitterIcon = () => (
  <svg width="18" height="18" viewBox="0 0 24 24" fill="currentColor">
    <path d="M18.244 2.25h3.308l-7.227 8.26 8.502 11.24H16.17l-4.714-6.231-5.401 6.231H2.744l7.73-8.835L1.254 2.25H8.08l4.259 5.63zm-1.161 17.52h1.833L7.084 4.126H5.117z" />
  </svg>
);

const EmailIcon = () => (
  <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round">
    <rect x="2" y="4" width="20" height="16" rx="2" />
    <path d="m22 7-8.97 5.7a1.94 1.94 0 0 1-2.06 0L2 7" />
  </svg>
);

const navItems = [
  { name: "Work", href: "#portfolio" },
  { name: "Services", href: "#services" },
  { name: "Results", href: "#case-studies" },
  { name: "Contact", href: "#contact" },
];

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 40);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <>
      <nav
        className={`fixed top-0 left-0 right-0 z-50 transition-all duration-500 ${
          scrolled
            ? "bg-[#08080a]/75 backdrop-blur-xl border-b border-white/[0.06] shadow-[0_8px_32px_-12px_rgba(0,0,0,0.6)]"
            : "bg-transparent border-b border-transparent"
        }`}
      >
        <div
          className={`max-w-7xl mx-auto px-6 flex items-center justify-between relative transition-all duration-500 ${
            scrolled ? "py-3.5" : "py-5"
          }`}
        >
          {/* Logo */}
          <a href="#" className="shrink-0 group flex items-center">
            <span className="font-display text-xl md:text-2xl font-bold tracking-tight text-white">
              Visual Vortex<span className="text-accent">.</span>
            </span>
          </a>

          {/* Desktop Nav Links — absolutely centered */}
          <div className="hidden md:flex items-center gap-8 absolute left-1/2 -translate-x-1/2">
            {navItems.map((item) => (
              <a
                key={item.name}
                href={item.href}
                className="nav-link text-sm font-medium tracking-wide"
              >
                {item.name}
              </a>
            ))}
          </div>

          {/* Right side — socials + CTA */}
          <div className="hidden md:flex items-center gap-5">
            <a
              href="https://x.com/VisualV3rtex"
              target="_blank"
              rel="noopener noreferrer"
              className="text-white/40 hover:text-white transition-colors duration-200"
              aria-label="X / Twitter"
            >
              <TwitterIcon />
            </a>
            <a
              href="mailto:visualvortexcreators@gmail.com"
              className="text-white/40 hover:text-white transition-colors duration-200"
              aria-label="Email"
            >
              <EmailIcon />
            </a>
            <Magnetic maxShift={5} strength={0.18}>
              <a
                href="#contact"
                className="btn-primary px-4 py-2 text-sm rounded-lg"
              >
                Work With Us
              </a>
            </Magnetic>
          </div>

          {/* Mobile Menu Button */}
          <button
            onClick={() => setIsOpen(!isOpen)}
            className="md:hidden text-white p-2 -mr-2 rounded-lg hover:bg-white/5 transition-colors"
            aria-label={isOpen ? "Close menu" : "Open menu"}
          >
            {isOpen ? <X size={22} /> : <Menu size={22} />}
          </button>
        </div>
      </nav>

      {/* Mobile Sidebar */}
      <div
        className={`fixed top-0 right-0 h-screen w-72 bg-[#0a0a0c]/95 backdrop-blur-2xl border-l border-white/[0.07] z-50 transform transition-transform duration-500 ease-[cubic-bezier(0.16,1,0.3,1)] ${
          isOpen ? "translate-x-0" : "translate-x-full"
        } md:hidden`}
      >
        <div className="flex flex-col p-6 pt-24 gap-1">
          {navItems.map((item, i) => (
            <a
              key={item.name}
              href={item.href}
              onClick={() => setIsOpen(false)}
              className="text-white/60 hover:text-white hover:pl-2 font-medium text-lg py-3.5 border-b border-white/[0.06] transition-all duration-300"
              style={{ transitionDelay: isOpen ? `${i * 40}ms` : "0ms" }}
            >
              {item.name}
            </a>
          ))}
          <a
            href="#contact"
            onClick={() => setIsOpen(false)}
            className="btn-primary px-5 py-3 mt-8 text-sm"
          >
            Work With Us
          </a>
          <div className="flex items-center gap-5 mt-8">
            <a href="https://x.com/VisualV3rtex" target="_blank" rel="noopener noreferrer" className="text-white/40 hover:text-white transition-colors" aria-label="X / Twitter">
              <TwitterIcon />
            </a>
            <a href="mailto:visualvortexcreators@gmail.com" className="text-white/40 hover:text-white transition-colors" aria-label="Email">
              <EmailIcon />
            </a>
          </div>
        </div>
      </div>

      {isOpen && (
        <div
          className="fixed inset-0 bg-black/60 backdrop-blur-sm z-40 md:hidden animate-fadeIn"
          onClick={() => setIsOpen(false)}
        />
      )}
    </>
  );
}

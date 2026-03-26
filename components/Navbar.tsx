"use client";

import { useState, useEffect } from "react";
import { Menu, X } from "lucide-react";

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
  { name: "Clients", href: "#clients" },
  { name: "Work", href: "#portfolio" },
  { name: "About", href: "#about" },
  { name: "Contact", href: "#contact" },
];

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 40);
    window.addEventListener("scroll", onScroll);
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <>
      <nav className="fixed top-0 left-0 right-0 z-50 bg-transparent">
        <div className="max-w-7xl mx-auto px-6 py-5 flex items-center justify-between relative">

          {/* Logo */}
          <a href="#" className="shrink-0 group flex items-center gap-2">
            <span className="text-2xl font-black tracking-tight text-transparent bg-clip-text bg-gradient-to-r from-purple-300 via-violet-300 to-blue-300 drop-shadow-[0_0_12px_rgba(167,139,250,0.7)]">
              Visual Vortex
            </span>
          </a>

          {/* Desktop Nav Links — absolutely centered */}
          <div className="hidden md:flex items-center gap-8 absolute left-1/2 -translate-x-1/2">
            {navItems.map((item) => (
              <a
                key={item.name}
                href={item.href}
                className="text-white/60 hover:text-white text-sm font-medium tracking-wide transition-colors duration-200"
              >
                {item.name}
              </a>
            ))}
          </div>

          {/* Social Icons */}
          <div className="hidden md:flex items-center gap-4">
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
          </div>

          {/* Mobile Menu Button */}
          <button onClick={() => setIsOpen(!isOpen)} className="md:hidden text-white p-1">
            {isOpen ? <X size={22} /> : <Menu size={22} />}
          </button>
        </div>
      </nav>

      {/* Mobile Sidebar */}
      <div className={`fixed top-0 right-0 h-screen w-64 bg-[#0a0018] border-l border-white/5 z-50 transform transition-transform duration-300 ${isOpen ? "translate-x-0" : "translate-x-full"} md:hidden`}>
        <div className="flex flex-col p-6 pt-20 gap-1">
          {navItems.map((item) => (
            <a
              key={item.name}
              href={item.href}
              onClick={() => setIsOpen(false)}
              className="text-white/60 hover:text-white font-medium text-lg py-3 border-b border-white/5 transition-colors duration-200"
            >
              {item.name}
            </a>
          ))}
          <div className="flex items-center gap-4 mt-6">
            <a href="https://x.com/VisualV3rtex" target="_blank" rel="noopener noreferrer" className="text-white/40 hover:text-white transition-colors">
              <TwitterIcon />
            </a>
            <a href="mailto:visualvortexcreators@gmail.com" className="text-white/40 hover:text-white transition-colors">
              <EmailIcon />
            </a>
          </div>
        </div>
      </div>

      {isOpen && (
        <div className="fixed inset-0 bg-black/60 z-40 md:hidden" onClick={() => setIsOpen(false)} />
      )}
    </>
  );
}

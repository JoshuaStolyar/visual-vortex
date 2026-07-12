import Link from "next/link";
import OrbitReprise from "./OrbitReprise";

/**
 * True final element of the page — the orrery motif rises behind it like
 * a horizon, bookending the hero. Kept separate from Contact so FAQ can
 * sit between the form and this close without breaking the "last thing
 * on the page" effect.
 */
export default function Footer() {
  return (
    <footer className="relative pt-16 pb-12 overflow-hidden">
      {/* No standalone glow blob here — OrbitReprise already carries its own
          ember horizon glow, and Contact directly above has its own closing
          blob, so a third identical glow in a row read as repetitive. */}
      <OrbitReprise />

      <div className="relative z-10 container mx-auto px-6">
        <div className="max-w-5xl mx-auto pt-10 border-t border-white/[0.06]">
          <div className="flex flex-col md:flex-row items-center justify-between gap-6 text-sm">
            <span className="font-display font-bold text-white/80">
              Visual Vortex<span className="text-accent">.</span>
            </span>
            <p className="text-white/25">© {new Date().getFullYear()} Visual Vortex. All rights reserved.</p>
            <div className="flex items-center gap-6 text-white/25">
              <Link href="/privacy" className="hover:text-white/50 transition-colors">Privacy Policy</Link>
              <Link href="/terms" className="hover:text-white/50 transition-colors">Terms of Service</Link>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
}

import Reveal from "./Reveal";
import Magnetic from "./Magnetic";

/**
 * Slim mid-page conversion strip — sits right after Case Studies so
 * visitors who don't scroll to the bottom form still hit a CTA.
 */
export default function CTABanner() {
  return (
    <section className="relative py-4">
      <div className="container mx-auto px-6">
        <Reveal>
          <div className="max-w-6xl mx-auto flex flex-col sm:flex-row items-center justify-between gap-5 border-y border-white/[0.08] py-8 px-2 md:px-4">
            <p className="font-display text-xl md:text-2xl font-bold text-white text-center sm:text-left">
              Want results like these? <span className="text-white/45 font-medium">It starts with one form.</span>
            </p>
            <Magnetic className="shrink-0">
              <a href="#contact" className="btn-primary px-7 py-3.5 text-base whitespace-nowrap">
                Contact Us
              </a>
            </Magnetic>
          </div>
        </Reveal>
      </div>
    </section>
  );
}

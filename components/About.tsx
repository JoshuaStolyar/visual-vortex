import Image from "next/image";

export default function About() {
  return (
    <section id="about" className="relative py-32 overflow-hidden">
      <div className="absolute top-0 right-[-10%] w-[500px] h-[500px] rounded-full bg-blue-700/10 blur-[120px] pointer-events-none" />

      <div className="relative z-10 container mx-auto px-6">
        <div className="max-w-5xl mx-auto">

          {/* Title */}
          <div className="text-center mb-16">
            <div className="flex items-center justify-center gap-4 mb-6">
              <div className="h-px w-16 bg-gradient-to-r from-transparent to-purple-500/50" />
              <h2 className="text-4xl md:text-5xl lg:text-6xl font-bold text-white">About</h2>
              <div className="h-px w-16 bg-gradient-to-l from-transparent to-purple-500/50" />
            </div>
            <p className="text-white/60 text-lg max-w-2xl mx-auto leading-relaxed">
              I'm Josh, a 16-year-old passionate about social media and one of the founders of Visual Vortex.
            </p>
          </div>

          {/* Image + Info */}
          <div className="grid md:grid-cols-2 gap-12 items-start">

            {/* Left — photo */}
            <div className="rounded-2xl overflow-hidden border border-white/5 bg-white/[0.02] max-w-[75%]">
              <Image
                src="/about-photo.jpg"
                alt="Josh — Founder of Visual Vortex"
                width={600}
                height={800}
                className="w-full h-auto object-cover"
              />
            </div>

            {/* Right — info sections */}
            <div className="flex flex-col gap-10 pt-2">

              {/* ── EDIT: update each section below with your own details ── */}

              <div>
                <h3 className="text-transparent bg-clip-text bg-gradient-to-r from-purple-400 to-blue-400 font-bold text-xl mb-2">
                  Experience
                </h3>
                <p className="text-white/60 leading-relaxed">
                  Over 4 years of editing & strategy experience, and have scaled over 10 of my own faceless channels amassing close to 1M subscribers.
                </p>
              </div>

              <div>
                <h3 className="text-transparent bg-clip-text bg-gradient-to-r from-purple-400 to-blue-400 font-bold text-xl mb-2">
                  Accomplishments
                </h3>
                <p className="text-white/60 leading-relaxed">
                  Working with 72+ creators & brands — helping generate over 500M long-form views, 10B+ short-form views, and 10M+ subscribers gained across clients, all in 2025.
                </p>
              </div>

              <div>
                <h3 className="text-transparent bg-clip-text bg-gradient-to-r from-purple-400 to-blue-400 font-bold text-xl mb-2">
                  Location
                </h3>
                <p className="text-white/60 leading-relaxed">
                  Based in the Bay Area, California.
                </p>
              </div>

            </div>
          </div>

        </div>
      </div>
    </section>
  );
}

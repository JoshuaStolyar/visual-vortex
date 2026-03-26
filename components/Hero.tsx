import AnimatedCounter from "./AnimatedCounter";

// Shared ring gradient string for Saturn (reused for back + front half)
const saturnRingBg = `radial-gradient(ellipse at center,
  transparent 23%,
  rgba(60,38,10,0.12) 24.5%,
  rgba(210,168,80,0.50) 26%,
  rgba(252,218,128,0.82) 28.5%,
  rgba(235,190,95,0.70) 31%,
  rgba(80,55,14,0.06) 33%,
  rgba(80,55,14,0.06) 34.5%,
  rgba(195,152,68,0.55) 36.5%,
  rgba(248,208,112,0.75) 40%,
  rgba(210,168,80,0.58) 43.5%,
  rgba(165,128,52,0.38) 47%,
  rgba(228,182,90,0.42) 50.5%,
  rgba(148,112,40,0.20) 54.5%,
  transparent 59%)`;

export default function Hero() {
  return (
    <section id="home" className="relative min-h-screen flex items-center justify-center overflow-hidden">

      {/* ─── BACKGROUND NEBULA ─── */}
      <div className="absolute inset-0 pointer-events-none">
        <div style={{ position:'absolute', top:'-5%', left:'-8%', width:550, height:550, borderRadius:'50%', background:'radial-gradient(circle, rgba(88,28,220,0.14) 0%, transparent 70%)', filter:'blur(50px)' }} />
        <div style={{ position:'absolute', top:'20%', left:'30%', width:400, height:400, borderRadius:'50%', background:'radial-gradient(circle, rgba(37,99,235,0.08) 0%, transparent 70%)', filter:'blur(60px)' }} />
      </div>


      {/* ─── PLANETS ─── */}
      <div className="absolute inset-0 pointer-events-none" style={{ zIndex: 3 }}>

        {/* ══ SUN ══ — bottom-right corner, mostly off-screen */}
        <div style={{
          position:'absolute', bottom:'-12%', right:'-10%',
          width: 320, height: 320, borderRadius:'50%',
        }}>
          {/* Outermost corona */}
          <div style={{ position:'absolute', inset:-120, borderRadius:'50%', background:'radial-gradient(circle, rgba(255,80,0,0.06) 30%, transparent 70%)', filter:'blur(30px)' }} />
          {/* Mid corona */}
          <div style={{ position:'absolute', inset:-60, borderRadius:'50%', background:'radial-gradient(circle, rgba(255,130,20,0.14) 40%, transparent 72%)', filter:'blur(18px)' }} />
          {/* Inner halo */}
          <div style={{ position:'absolute', inset:-20, borderRadius:'50%', background:'radial-gradient(circle, rgba(255,180,50,0.30) 50%, transparent 78%)', filter:'blur(10px)' }} />
          {/* Solar sphere */}
          <div style={{
            width:'100%', height:'100%', borderRadius:'50%',
            background:`
              radial-gradient(circle at 38% 32%, rgba(255,255,220,0.95) 0%, rgba(255,248,160,0.60) 10%, transparent 22%),
              radial-gradient(circle at 62% 68%, rgba(180,60,0,0.30) 0%, transparent 30%),
              radial-gradient(circle at 25% 72%, rgba(200,80,10,0.18) 0%, transparent 22%),
              radial-gradient(circle at 75% 25%, rgba(255,220,120,0.20) 0%, transparent 18%),
              radial-gradient(circle at 45% 42%, #fff5a0 0%, #ffe040 10%, #ffb010 26%, #ff7800 44%, #e04000 62%, #881200 80%, #280400 96%)
            `,
            boxShadow:`
              inset -50px -40px 90px rgba(0,0,0,0.50),
              inset 15px 12px 35px rgba(255,230,100,0.12),
              0 0 90px 50px rgba(255,140,20,0.55),
              0 0 180px 90px rgba(255,90,0,0.28),
              0 0 320px 140px rgba(220,50,0,0.12)
            `,
          }} />
        </div>

        {/* ══ SATURN ══ — top right */}
        <div className="animate-float" style={{ position:'absolute', top:'2%', right:'5%', width:230, height:230, animationDuration:'9s', zIndex:1 }}>
          {/* Atmospheric halo */}
          <div style={{ position:'absolute', inset:-35, borderRadius:'50%', background:'radial-gradient(circle, rgba(210,162,65,0.11) 38%, transparent 68%)', filter:'blur(16px)' }} />

          {/* Ring — back half */}
          <div style={{
            position:'absolute', top:'50%', left:'50%',
            width:420, height:58,
            transform:'translate(-50%,-50%)',
            borderRadius:'50%',
            background: saturnRingBg,
            zIndex:1,
          }} />

          {/* Sphere */}
          <div style={{
            position:'absolute', width:'100%', height:'100%', borderRadius:'50%',
            background:`
              radial-gradient(circle at 28% 22%, rgba(255,250,210,0.72) 0%, rgba(255,235,155,0.28) 10%, transparent 22%),
              radial-gradient(circle at 74% 80%, rgba(0,0,0,0.42) 0%, transparent 28%),
              repeating-linear-gradient(180deg,
                rgba(100,60,18,0.58) 0px,
                rgba(185,138,56,0.68) 10px,
                rgba(222,178,88,0.55) 18px,
                rgba(165,118,44,0.60) 26px,
                rgba(238,192,94,0.52) 37px,
                rgba(142,98,32,0.56) 47px,
                rgba(198,152,68,0.62) 57px,
                rgba(172,128,50,0.50) 67px,
                rgba(218,172,82,0.54) 78px
              ),
              radial-gradient(circle at 40% 34%, #ddb054 0%, #a27c2c 20%, #6c4c1a 48%, #341e08 78%, #100602 100%)
            `,
            boxShadow:`
              inset -44px -32px 85px rgba(0,0,0,0.84),
              inset 12px 10px 28px rgba(255,215,135,0.06),
              0 0 50px rgba(178,128,52,0.22)
            `,
            zIndex:2,
          }} />

          {/* Ring — front half */}
          <div style={{
            position:'absolute', top:'50%', left:'50%',
            width:420, height:58,
            transform:'translate(-50%,-50%)',
            borderRadius:'50%',
            background: saturnRingBg,
            clipPath:'polygon(0% 53%, 100% 53%, 100% 100%, 0% 100%)',
            zIndex:3,
          }} />
        </div>

        {/* ══ VENUS ══ — top left */}
        <div className="animate-float" style={{ position:'absolute', top:'5%', left:'4%', width:95, height:95, animationDuration:'8s', animationDelay:'1.8s', zIndex:1 }}>
          {/* Thick warm atmospheric halo */}
          <div style={{ position:'absolute', inset:-18, borderRadius:'50%', background:'radial-gradient(circle, rgba(240,200,70,0.22) 45%, rgba(220,170,50,0.08) 68%, transparent 82%)', filter:'blur(9px)' }} />
          <div style={{
            width:'100%', height:'100%', borderRadius:'50%',
            background:`
              radial-gradient(circle at 30% 24%, rgba(255,255,235,0.92) 0%, rgba(255,248,195,0.55) 10%, transparent 22%),
              radial-gradient(circle at 66% 44%, rgba(225,188,72,0.40) 0%, transparent 24%),
              radial-gradient(circle at 30% 68%, rgba(200,162,58,0.30) 0%, transparent 18%),
              radial-gradient(circle at 78% 22%, rgba(245,218,95,0.25) 0%, transparent 15%),
              repeating-linear-gradient(172deg,
                rgba(172,138,42,0.24) 0px,
                rgba(225,195,82,0.20) 7px,
                rgba(248,222,105,0.16) 13px,
                rgba(208,175,66,0.22) 20px
              ),
              radial-gradient(circle at 38% 32%, #f8e268 0%, #d4b636 22%, #a88420 50%, #685008 78%, #1c1004 98%)
            `,
            boxShadow:`
              inset -16px -12px 38px rgba(0,0,0,0.62),
              inset 6px 5px 18px rgba(255,232,100,0.10),
              0 0 30px rgba(228,192,65,0.32),
              0 0 65px rgba(228,192,65,0.12)
            `,
          }} />
        </div>

        {/* ══ EARTH ══ — left side, mid height */}
        <div className="animate-float" style={{ position:'absolute', top:'50%', left:'2%', width:120, height:120, animationDuration:'7s', animationDelay:'2.2s', zIndex:1, marginTop:-60 }}>
          {/* Atmospheric scattering halo */}
          <div style={{ position:'absolute', inset:-18, borderRadius:'50%', background:'radial-gradient(circle, rgba(59,130,246,0.24) 48%, rgba(99,102,241,0.08) 66%, transparent 80%)', filter:'blur(9px)' }} />
          <div style={{
            width:'100%', height:'100%', borderRadius:'50%',
            background:`
              radial-gradient(circle at 28% 20%, rgba(255,255,255,0.82) 0%, rgba(255,255,255,0.28) 6%, transparent 15%),
              radial-gradient(circle at 58% 16%, rgba(255,255,255,0.48) 0%, transparent 9%),
              radial-gradient(circle at 20% 52%, rgba(255,255,255,0.30) 0%, transparent 8%),
              radial-gradient(circle at 72% 38%, rgba(34,197,94,0.72) 0%, rgba(22,163,74,0.50) 12%, transparent 24%),
              radial-gradient(circle at 30% 60%, rgba(34,197,94,0.60) 0%, rgba(22,163,74,0.38) 10%, transparent 20%),
              radial-gradient(circle at 62% 68%, rgba(34,197,94,0.42) 0%, transparent 14%),
              radial-gradient(circle at 78% 72%, rgba(255,255,255,0.40) 0%, transparent 11%),
              radial-gradient(circle at 44% 82%, rgba(255,255,255,0.24) 0%, transparent 9%),
              radial-gradient(circle at 18% 28%, rgba(22,163,74,0.35) 0%, transparent 12%),
              radial-gradient(circle at 40% 36%, #1d4fd8 0%, #1a3daa 22%, #0f2468 50%, #060e32 80%, #020510 100%)
            `,
            boxShadow:`
              inset -20px -14px 44px rgba(0,0,0,0.78),
              inset 5px 4px 15px rgba(120,190,255,0.07),
              0 0 35px rgba(37,99,235,0.30),
              0 0 65px rgba(37,99,235,0.10)
            `,
          }} />
        </div>

      </div>{/* end planets */}

      {/* ─── BOTTOM FADE ─── */}
      <div className="absolute bottom-0 left-0 right-0 h-80 pointer-events-none" style={{ background: 'linear-gradient(to bottom, transparent 0%, #030008 100%)' }} />

      {/* ─── HERO CONTENT ─── */}
      <div className="relative z-10 container mx-auto px-6 py-36 text-center">
        <div className="max-w-5xl mx-auto space-y-8">
          <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full border border-purple-500/30 bg-purple-500/10 text-purple-300 text-sm font-medium">
            <span className="w-2 h-2 rounded-full bg-purple-400 animate-pulse" />
            Content Growth Agency
          </div>

          <h1 className="text-5xl md:text-6xl lg:text-7xl font-bold leading-tight text-white">
            Building systems that scale<br />
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-purple-400 via-violet-400 to-blue-400">
              creators & brands
            </span>
          </h1>

          <p className="text-xl md:text-2xl max-w-2xl mx-auto text-white/70 font-light">
            Building the future of content.
          </p>

          <div className="flex flex-col sm:flex-row gap-4 justify-center pt-2">
            <a
              href="https://calendly.com/josh-visualvortex"
              target="_blank"
              rel="noopener noreferrer"
              className="px-8 py-4 bg-gradient-to-r from-purple-600 to-blue-600 text-white rounded-xl font-semibold text-lg hover:from-purple-500 hover:to-blue-500 transition-all duration-200 shadow-[0_0_30px_rgba(139,92,246,0.4)] hover:shadow-[0_0_40px_rgba(139,92,246,0.6)]"
            >
              Apply to Work Together
            </a>
            <a
              href="#portfolio"
              className="px-8 py-4 border border-white/10 text-white/80 rounded-xl font-semibold text-lg hover:border-white/20 hover:bg-white/5 transition-all duration-200"
            >
              View Work
            </a>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-5 max-w-4xl mx-auto pt-10">
            {[
              { end: 250, suffix: "M+", label: "Long Form Views/Month" },
              { end: 999, suffix: "M+", label: "Short Form Views/Month" },
              { end: 72,  suffix: "+",  label: "Creators & Channels" },
            ].map((stat) => (
              <div key={stat.label} className="p-8 rounded-2xl border border-white/5 bg-white/[0.03] backdrop-blur-sm hover:border-purple-500/30 hover:bg-white/[0.06] transition-all duration-300">
                <AnimatedCounter
                  end={stat.end}
                  suffix={stat.suffix}
                  className="text-5xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-purple-400 to-blue-400 tabular-nums mb-2"
                />
                <div className="text-white/70 text-sm font-medium">{stat.label}</div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}

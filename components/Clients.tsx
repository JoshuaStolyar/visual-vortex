import Image from "next/image";
import { CheckCircle2 } from "lucide-react";
import Reveal from "./Reveal";

const clients = [
  { name: "Tyler Vitelli", subscribers: "7.5M+ subs", image: "/tyler.jpg" },
  { name: "His Story", subscribers: "3.06M+ subs", image: "/his-story.jpg" },
  { name: "Tech Joyce", subscribers: "2.5M+ subs", image: "/joyce.jpg" },
  { name: "Isaac Explores", subscribers: "2M+ subs", image: "/isaac.jpg" },
  { name: "Mega Builds", subscribers: "1.5M+ subs", image: "/megabuilds.jpg" },
  { name: "Her Story", subscribers: "1.35M+ subs", image: "/her-story.jpg" },
  { name: "Tyler Vitelli 2", subscribers: "1.3M+ subs", image: "/tyler2.jpg" },
  { name: "Dillon Latham", subscribers: "1M+ subs", image: "/dillon.jpg" },
  { name: "Thomas Minc", subscribers: "600K+ subs", image: "/thomas.jpg" },
  { name: "Nicholas Berndt", subscribers: "500K+ subs", image: "/nicholas.jpg" },
  { name: "Yoeatz", subscribers: "450K+ subs", image: "/yoeatz.jpg" },
  { name: "Limmy Talks", subscribers: "350K+ followers", image: "/limmy.jpg" },
  { name: "Mega Proyectos", subscribers: "300K+ subs", image: "/megaproyectos.jpg" },
  { name: "Chanler Rodgers", subscribers: "250K+ followers", image: "/chanlerrodgers.jpg" },
  { name: "Quinn Mendenhall", subscribers: "250K+ followers", image: "/quinn.webp" },
  { name: "IssaMeZeny", subscribers: "200K+ subs", image: "/issaamezeny.jpg" },
  { name: "Dillon Latham Live", subscribers: "175K+ subs", image: "/dillonlive.jpg" },
  { name: "MerosRBX", subscribers: "130K+ subs", image: "/merosrbx.jpg" },
  { name: "Dylan Carey", subscribers: "100K+ subs", image: "/dylancarey.jpg" },
  { name: "NextStepNow", subscribers: "50K+ subs", image: "/nextstepnow.jpg" },
  { name: "Tyler Vitelli Gaming", subscribers: "10K+ subs", image: "/tylergaming.jpg" },
];

const brands = [
  { name: "Whop", image: "/whop.jpg" },
  { name: "Simpletics", image: "/simpletics.jpg" },
  { name: "Brand", image: "/brand4.jpg" },
  { name: "Ape AI", image: "/apeai.jpg" },
];

const duplicatedClients = [...clients, ...clients, ...clients, ...clients];

function getBadgeClass(subscribers: string) {
  if (subscribers.includes("M")) return "text-white fill-accent";
  const value = parseInt(subscribers, 10);
  if (subscribers.includes("K") && value < 100) return "text-white fill-white/50";
  return "text-white/30 fill-white/30";
}

export default function Clients() {
  return (
    <section id="clients" className="relative py-20 md:py-24 overflow-hidden">
      <div className="absolute top-0 left-0 right-0 h-32 pointer-events-none z-0" style={{ background: 'linear-gradient(to bottom, #08080a, transparent)' }} />
      <div className="relative z-10 container mx-auto px-6">
        <div className="max-w-7xl mx-auto">
          <Reveal>
            <div className="text-center mb-12">
              <p className="eyebrow mb-4">Trusted by the best</p>
              <h2 className="font-display text-2xl md:text-3xl text-white font-bold tracking-tight text-balance">
                We scale the biggest creators and businesses in the game
              </h2>
            </div>
          </Reveal>

          {/* Carousel */}
          <Reveal delay={120}>
            <div className="marquee-mask relative overflow-hidden py-4">
              <div className="marquee-track flex gap-10 items-center">
                {duplicatedClients.map((client, index) => (
                  <div key={index} className="flex-shrink-0 flex items-center gap-3 group">
                    <div className="relative w-14 h-14 rounded-full overflow-hidden flex-shrink-0 ring-2 ring-white/10 group-hover:ring-accent/60 transition-all duration-300">
                      <Image src={client.image} alt={client.name} fill sizes="56px" className="object-cover" />
                    </div>
                    <div>
                      <div className="flex items-center gap-1.5">
                        <h3 className="font-semibold text-white text-sm whitespace-nowrap">{client.name}</h3>
                        <CheckCircle2 strokeWidth={1.5} className={`w-4 h-4 flex-shrink-0 ${getBadgeClass(client.subscribers)}`} />
                      </div>
                      <p className="text-xs text-white/40 font-medium">{client.subscribers}</p>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </Reveal>

          {/* Divider */}
          <div className="w-full h-px bg-gradient-to-r from-transparent via-white/15 to-transparent my-12" />

          {/* Brands */}
          <Reveal delay={100}>
            <div className="text-center">
              <p className="text-[11px] font-semibold uppercase tracking-[0.25em] text-white/35 mb-8">Also trusted by brands</p>
              <div className="flex flex-wrap justify-center items-center gap-12 md:gap-16 py-2">
                {brands.map((brand, index) => (
                  <div
                    key={index}
                    className="relative w-20 h-20 md:w-24 md:h-24 rounded-full overflow-hidden ring-1 ring-white/15 opacity-80 grayscale-[20%] hover:opacity-100 hover:grayscale-0 hover:ring-accent/50 hover:scale-105 transition-all duration-300"
                  >
                    <Image src={brand.image} alt={brand.name} fill sizes="96px" className="object-cover" />
                  </div>
                ))}
              </div>
            </div>
          </Reveal>
        </div>
      </div>
    </section>
  );
}

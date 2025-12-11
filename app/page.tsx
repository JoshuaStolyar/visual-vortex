import Hero from "@/components/Hero";
import Clients from "@/components/Clients";
import Portfolio from "@/components/Portfolio";
import CaseStudies from "@/components/CaseStudies";
import Process from "@/components/Process";
import Services from "@/components/Services";
import About from "@/components/About";
import Contact from "@/components/Contact";
import ParticleBackground from "@/components/ParticleBackground";
import CustomCursor from "@/components/CustomCursor";

export default function Home() {
  return (
    <main className="bg-[#0a0014] relative">
      <ParticleBackground />
      <CustomCursor />
      <div className="relative z-20">
        <Hero />
        <Clients />
        <Portfolio />
        <CaseStudies />
        <Process />
        <Services />
        <About />
        <Contact />
      </div>
    </main>
  );
}

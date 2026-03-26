import Hero from "@/components/Hero";
import Clients from "@/components/Clients";
import Portfolio from "@/components/Portfolio";
import CaseStudies from "@/components/CaseStudies";
import About from "@/components/About";
import Contact from "@/components/Contact";
import CustomCursor from "@/components/CustomCursor";
import Navbar from "@/components/Navbar";

export default function Home() {
  return (
    <main className="relative" style={{background: '#030008'}}>
      <CustomCursor />
      <Navbar />
      <div className="relative">
        <Hero />
        <Clients />
        <Portfolio />
        <CaseStudies />
        <About />
        <Contact />
      </div>
    </main>
  );
}

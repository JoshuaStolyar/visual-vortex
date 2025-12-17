import Hero from "@/components/Hero";
import Clients from "@/components/Clients";
import Portfolio from "@/components/Portfolio";
import CaseStudies from "@/components/CaseStudies";
import Process from "@/components/Process";
import FAQ from "@/components/FAQ";
import CustomCursor from "@/components/CustomCursor";
import Navbar from "@/components/Navbar";

export default function Home() {
  return (
    <main className="bg-white relative">
      <CustomCursor />
      <Navbar />
      <div className="relative">
        <Hero />
        <Clients />
        <Portfolio />
        <CaseStudies />
        <Process />
        <FAQ />
      </div>
    </main>
  );
}

import Hero from "@/components/Hero";
import Clients from "@/components/Clients";
import Services from "@/components/Services";
import Portfolio from "@/components/Portfolio";
import CaseStudies from "@/components/CaseStudies";
import Contact from "@/components/Contact";
import Footer from "@/components/Footer";
import CustomCursor from "@/components/CustomCursor";
import Navbar from "@/components/Navbar";
import SpaceAmbience from "@/components/SpaceAmbience";
import OrbitDivider from "@/components/OrbitDivider";

export default function Home() {
  // NOTE: <main> must stay transparent — body carries the #08080a background
  // and the fixed starfield (body::before) shows through every section.
  return (
    <main className="relative">
      <SpaceAmbience />
      <CustomCursor />
      <Navbar />
      <div className="relative">
        {/* Dividers bridge adjacent nebula tints (from → to) so the scroll
            reads as one continuous color wash: ember → cyan → violet →
            ember (footer close). Sections without a divider carry a faint
            bleed of the previous hue at their top instead. */}
        <Hero />
        <Clients />
        <OrbitDivider from="ember" to="cyan" />
        <Portfolio />
        <OrbitDivider flip from="cyan" to="violet" />
        <Services />
        <OrbitDivider flip from="violet" to="ember" />
        <CaseStudies />
        <Contact />
        <Footer />
      </div>
    </main>
  );
}

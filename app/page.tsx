import { Nav } from "@/components/Nav";
import { Hero } from "@/components/Hero";
import { Services } from "@/components/Services";
import { CaseStudy } from "@/components/CaseStudy";
import { Process } from "@/components/Process";
import { Founder } from "@/components/Founder";
import { FinalCTA } from "@/components/FinalCTA";
import { Footer } from "@/components/Footer";

export default function Home() {
  return (
    <>
      <Nav />
      <main>
        <Hero />
        <Services />
        <CaseStudy />
        <Process />
        <Founder />
        <FinalCTA />
      </main>
      <Footer />
    </>
  );
}

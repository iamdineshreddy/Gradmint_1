import Hero from "@/components/sections/Hero";
import Intro from "@/components/sections/Intro";
import Services from "@/components/sections/Services";
import Blueband from "@/components/sections/Blueband";
import Programs from "@/components/sections/Programs";
import Process from "@/components/sections/Process";
import FAQ from "@/components/sections/FAQ";
import CTA from "@/components/sections/CTA";

export default function Home() {
  return (
    <main id="main">
      <Hero />
      <Intro />
      <Services />
      <Blueband />
      <Programs />
      <Process className="bg-white" />
      <FAQ />
      <CTA />
    </main>
  );
}
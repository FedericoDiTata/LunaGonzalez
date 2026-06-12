import Navbar from "@/components/sections/Navbar";
import Hero from "@/components/sections/Hero";
import Problema from "@/components/sections/Problema";
import Servicios from "@/components/sections/Servicios";
import Promesa from "@/components/sections/Promesa";
import Metodologia from "@/components/sections/Metodologia";
import ParaQuien from "@/components/sections/ParaQuien";
import SobreMi from "@/components/sections/SobreMi";
import Testimonios from "@/components/sections/Testimonios";
import Faq from "@/components/sections/Faq";
import Agendar from "@/components/sections/Agendar";
import Footer from "@/components/sections/Footer";

export default function Home() {
  return (
    <>
      <Navbar />
      <main>
        <Hero />
        <Problema />
        <Servicios />
        <Promesa />
        <Metodologia />
        <ParaQuien />
        <SobreMi />
        <Testimonios />
        <Faq />
        <Agendar />
      </main>
      <Footer />
    </>
  );
}

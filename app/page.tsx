import Header from "@/components/Header";
import Hero from "@/components/Hero";
import Benefits from "@/components/Benefits";
import Results from "@/components/Results";
import PainPoints from "@/components/PainPoints";
import Techniques from "@/components/Techniques";
import Doctor from "@/components/Doctor";
import Testimonials from "@/components/Testimonials";
import Clinics from "@/components/Clinics";
import FAQ from "@/components/FAQ";
import FinalCTA from "@/components/FinalCTA";
import Footer from "@/components/Footer";
import FloatingWhatsApp from "@/components/ui/FloatingWhatsApp";

export default function Home() {
  return (
    <>
      <Header />
      <main id="conteudo-principal">
        <Hero />
        <Benefits />
        <Results />
        <PainPoints />
        <Techniques />
        <Doctor />
        <Testimonials />
        <Clinics />
        <FAQ />
        <FinalCTA />
      </main>
      <Footer />
      <FloatingWhatsApp />
    </>
  );
}

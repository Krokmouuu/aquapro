import { useState } from "react";
import { Header } from "./components/Header";
import { Footer } from "./components/Footer";
import { HeroSection } from "./components/home/HeroSection";
import { ServicesSection } from "./components/home/ServicesSection";
import { WhyChooseUs } from "./components/home/WhyChooseUs";
import { ZoneSection } from "./components/home/ZoneSection";
import { TestimonialsSection } from "./components/home/TestimonialsSection";
import { InterventionsPage } from "./components/pages/InterventionsPage";
import { TarifsPage } from "./components/pages/TarifsPage";

function App() {
  const [currentPage, setCurrentPage] = useState("accueil");

  const handleNavigate = (page: string) => {
    setCurrentPage(page);
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  return (
    <div className="min-h-screen bg-white">
      <Header currentPage={currentPage} onNavigate={handleNavigate} />

      <main>
        {currentPage === "accueil" && (
          <>
            <HeroSection onNavigate={handleNavigate} />
            <ServicesSection />
            <WhyChooseUs />
            <ZoneSection />
            <TestimonialsSection />
          </>
        )}

        {currentPage === "interventions" && <InterventionsPage />}

        {currentPage === "tarifs" && <TarifsPage />}
      </main>

      <Footer onNavigate={handleNavigate} />
    </div>
  );
}

export default App;

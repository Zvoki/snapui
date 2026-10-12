import { useEffect } from "react";
import Header from "./components/Header/Header";
import Hero from "./components/Hero/Hero";
import HowItWorks from "./components/HowItWorks/HowItWorks";
import Demo from "./components/Demo/Demo";
import PilotSection from "./components/Pilot/PilotSection";
import Components from "./components/Components/Components";
import Benefits from "./components/Benefits/Benefits";
import WhyCVTailor from "./components/WhyCVTailor/WhyCVTailor";
import EarlyAccess from "./components/EarlyAccess/EarlyAccess";
import FAQ from "./components/FAQ/FAQ";
import Footer from "./components/Footer/Footer";

function App() {
  useEffect(() => {
    const elements = document.querySelectorAll(".fadeIn");

    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add("visible");
            observer.unobserve(entry.target);
          }
        });
      },
      { threshold: 0.2 }
    );

    elements.forEach((element) => observer.observe(element));
    return () => observer.disconnect();
  }, []);

  return (
    <>
      <Header />
      <Hero />
      <HowItWorks />
      <Demo />
      <PilotSection />
      <Components />
      <WhyCVTailor />
      <Benefits />
      <EarlyAccess />
      <FAQ />
      <Footer />
    </>
  );
  
}

export default App;

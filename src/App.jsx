import { useEffect } from "react";
import Header from "./components/Header/Header";
import Hero from "./components/Hero/Hero";
import HowItWorks from "./components/HowItWorks/HowItWorks";
import Demo from "./components/Demo/Demo";
import SnapUI from "./components/SnapUI/SnapUI";
import Components from "./components/Components/Components";
import Benefits from "./components/Benefits/Benefits";
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
        }
      });
    },
    { threshold: 0.2 }
  );

  elements.forEach((el) => observer.observe(el));
}, []);

  return (
    <>
      <Header />
      <Hero />
      <HowItWorks />
      <Demo />
      <SnapUI />
      <Components />
      <Benefits />
      <EarlyAccess />
      <FAQ />
      <Footer />
    </>
  );
  
}

export default App;

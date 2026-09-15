import { useCallback, useState } from "react";
import { LanguageProvider } from "./LanguageContext";
import Navbar from "./components/Navbar";
import Hero from "./components/Hero";
import Fleet from "./components/Fleet";
import BookingForm from "./components/BookingForm";
import HowItWorks from "./components/HowItWorks";
import WhyUs from "./components/WhyUs";
import About from "./components/About";
import Reviews from "./components/Reviews";
import FAQ from "./components/FAQ";
import Legal from "./components/Legal";
import Contact from "./components/Contact";
import Footer from "./components/Footer";
import MobileBar from "./components/MobileBar";

export default function App() {
  const [presetCar, setPresetCar] = useState(null);

  const handleBookCar = useCallback((car) => {
    setPresetCar(car);
    document.getElementById("booking")?.scrollIntoView({ behavior: "smooth" });
  }, []);

  const consumePreset = useCallback(() => setPresetCar(null), []);

  return (
    <LanguageProvider>
      <a href="#home" className="skip-link">
        Skip to content
      </a>
      <Navbar />
      <main>
        <Hero />
        <Fleet onBookCar={handleBookCar} />
        <BookingForm presetCar={presetCar} onConsumePreset={consumePreset} />
        <HowItWorks />
        <WhyUs />
        <About />
        <Reviews />
        <FAQ />
        <Legal />
        <Contact />
      </main>
      <Footer />
      <MobileBar />
    </LanguageProvider>
  );
}

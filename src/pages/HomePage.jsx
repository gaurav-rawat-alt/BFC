import React from "react";
import Carousel from "../components/Home/Carousel";
import SelectionBar from "../components/Home/SelectionBar";
import InsurancePlans from "../components/Home/InsuarancePlans";
import SearchByCategory from "../components/Home/SearchByCategory";
import Header from "../components/Header/Header";
import Footer from "../components/Footer/Footer";
import WhyLIC from "../components/Home/WhyLIC";
import CalculatorSection from "../components/Home/CalculatorSection";
import { FaWhatsapp } from "react-icons/fa";

function HomePage() {
  return (
    <div>
      <Carousel />
      <SelectionBar />
      <InsurancePlans />
      <SearchByCategory />
      {/* <WhyLIC /> */}
      <CalculatorSection />

      {/* ✅ WhatsApp Floating Button */}
      <a
        href="https://wa.me/91987399199?text=Hi%20I%20am%20interested%20in%20your%20plans"
        target="_blank"
        rel="noopener noreferrer"
        className="fixed bottom-5 right-5 z-50 bg-green-500 hover:bg-green-600 text-white p-4 rounded-full shadow-lg"
      >
        <FaWhatsapp size={24} />
      </a>
    </div>
  );
}

export default HomePage;

import React from "react";
import "../index.css";

import Header from "./components/Header";
import HeroSection from "./components/HeroSection";
import HowItWorks from "./components/HowItWorks";
import Benefits from "./components/Benefits";
import Waitlist from "./components/Waitlist";
import UsersSay from "./components/UsersSay";
import ReadyToTransform from "./components/ReadyToTransform";
import Footer from "./components/Footer";

export default function LandingPage() {
  return (
    <div className="main-container flex flex-col items-start flex-nowrap bg-gray-50 rounded-lg relative overflow-hidden mx-auto w-full">
      <div className="w-full min-h-screen bg-transparent relative">
        <Header />
        <div className="px-0 md:px-[232.5px]">
          <HeroSection />
          <HowItWorks />
          <Benefits />
          <Waitlist />
          <UsersSay />
        </div>
        <ReadyToTransform />
        <Footer />
      </div>
    </div>
  );
}

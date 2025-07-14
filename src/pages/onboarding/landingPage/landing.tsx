import React from "react";
import "@/src/pages/global.css";

import Header from "./components/header";
import HeroSection from "./components/heroSection";
import HowItWorks from "./components/howItWorks";
import Benefits from "./components/benefits";
import Waitlist from "./components/waitlist";
import UsersSay from "./components/usersSay";
import ReadyToTransform from "./components/readyToTransform";
import Footer from "./components/footer";

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

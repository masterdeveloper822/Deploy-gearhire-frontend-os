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
    <div className="main-container flex flex-col min-h-screen bg-gray-50 rounded-lg relative overflow-hidden w-full">
      <Header />
      <main className="flex-1 w-full max-w-screen-xl mx-auto px-4 sm:px-8 md:px-10">
        <HeroSection />
        <HowItWorks />
        <Benefits />
        <Waitlist />
        <UsersSay />
      </main>
      <ReadyToTransform />
      <Footer />
    </div>
  );
}

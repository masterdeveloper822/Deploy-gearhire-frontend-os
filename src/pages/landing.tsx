import React from "react";
import "@/styles/global.css";

import Header from "@/components/layout/header/auth-header";
import HeroSection from "@/components/hero/heroSection";
import HowItWork from "@/components/how-it-work/how-it-work";
import Benefit from "@/components/benefit/benefit";
import Waitlist from "@/components/waitlist/waitlist";
import { UsersSay } from "@/components/users-say/users-say";
import ReadyToTransform from "@/components/ready-to-transform/ready-to-transform";
import Footer from "@/components/layout/footer/footer";

const LandingPage: React.FC = () => {
  return (
    <div className="main-container flex flex-col min-h-screen bg-gray-50 rounded-lg relative overflow-hidden w-full">
      <Header />
      <main className="flex-1 w-full max-w-screen-xl mx-auto px-4 sm:px-8 md:px-10">
        <HeroSection />
        <HowItWork />
        <Benefit />
        <Waitlist />
      </main>
      <UsersSay />
      <ReadyToTransform />
      <Footer />
    </div>
  );
};

export { LandingPage };

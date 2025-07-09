import React from "react";
import "../index.css";

// import cameraIcon from '../../../public/assets/icons/cameraIcon.svg';
// import checkIcon from '../../../public/assets/icons/check.svg';
// import graphIcon from '../../../public/assets/icons/graph.svg';
// import homeIcon from '../../../public/assets/icons/home.svg';
// import moneyIcon from '../../../public/assets/icons/money.svg';
// import networkIcon from '../../../public/assets/icons/network.svg';
// import peopleIcon from '../../../public/assets/icons/people.svg';
// import searchIcon from '../../../public/assets/icons/search.svg';
// import speakerIcon from '../../../public/assets/icons/speaker.svg';
// import starIcon from '../../../public/assets/icons/star.svg';
// import worldIcon from '../../../public/assets/icons/world.svg';

import Header from "@/src/components/LandingPage/Header";
import HeroSection from "@/src/components/LandingPage/HeroSection";
import HowItWorks from "@/src/components/LandingPage/HowItWorks";
import Benefits from "@/src/components/LandingPage/Benefits";
import Waitlist from "@/src/components/LandingPage/Waitlist";
import UsersSay from "@/src/components/LandingPage/UsersSay";
import ReadyToTransform from "@/src/components/LandingPage/ReadyToTransform";
import Footer from "@/src/components/LandingPage/Footer";

export default function LandingPage() {
  return (
    <div className="main-container flex w-[1440px] flex-col items-start flex-nowrap bg-[#fff] rounded-[8px] border-solid border-2 border-[#ced4da] relative overflow-hidden mx-auto my-0">
      <div className="w-[1440px] h-[4390px] shrink-0 bg-[rgba(0,0,0,0)] relative">
        <Header />
        <HeroSection />
        <HowItWorks />
        <Benefits />
        <Waitlist />
        <UsersSay />
        <ReadyToTransform />
        <Footer />
      </div>
    </div>
  );
}

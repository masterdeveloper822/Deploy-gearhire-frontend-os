import React from "react";
import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";

import imgLandingPage from "@/assets/images/landing/landing.png";
import { Typography } from "@/components/ui/typography";

export default function HeroSection() {
  return (
    <section className="w-full flex justify-center pt-8">
      <div className="w-full max-w-[1350px] flex flex-col sm:flex-row gap-6 sm:gap-12 px-4 md:px-0">
        {/* Left: Text */}
        <div className="w-full pt-0 md:pt-5 lg:pt-14 md:w-[670px] flex flex-col items-center md:items-start justify-center">
          <h1 className="text-2xl sm:text-2xl md:text-3xl lg:text-4xl xl:text-6xl font-bold leading-tight text-gray-800 mb-5 md:mb-8">
            Find and Connect with Film Equipment Suppliers
          </h1>
          <p className="text-base sm:text-lg md:text-xl text-gray-600 leading-6 sm:leading-7 mb-6 md:mb-10">
            The easiest way to post RFQs, browse gear, and connect with trusted
            merchants in the film production industry.
          </p>
          <div className="flex gap-4 w-full lg:pr-20 xl:pr-60">
            <Button
              variant="tertiary"
              className="w-full rounded-lg text-base h-[60px]"
            >
              <Link to="/renter-signup">Join as Renter</Link>
            </Button>
            <Button
              variant="outline"
              className="w-full rounded-lg text-base border-2 border-gray-700 h-[60px]"
            >
              <Link to="/renter-signup">Join as Merchant</Link>
            </Button>
          </div>
        </div>
        {/* Right: Image */}
        <div className="w-full md:w-[624px] h-[350px] md:h-[500px] lg: h-[460px] flex items-center justify-center lg:mt-6 xl:mt-[80px]">
          <img
            src={imgLandingPage}
            alt="Film equipment"
            className="w-[312px] h-[312px] md:w-[360px] md:h-[360px] lg:w-[460px] lg:h-[460px] xl:w-[560px] xl:h-[560px] rounded-xl object-cover"
          />
        </div>
      </div>
    </section>
  );
}

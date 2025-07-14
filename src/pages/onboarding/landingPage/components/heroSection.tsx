import React from "react";
import { Link } from "react-router-dom";
import { Button } from "@/src/components/ui/button";

import imgLandingPage from "@/public/assets/images/landing_image.png";
import { Typography } from "@/src/components/ui/typography";


export default function HeroSection() {
  return (
    <section className="w-full flex justify-center py-8 sm:py-14 md:py-0">
      <div className="w-full max-w-[1350px] flex flex-col sm:flex-row gap-6 sm:gap-12 px-4 md:px-0">
        {/* Left: Text */}
        <div className="w-full pt-0 md:pt-5 lg:pt-14 md:w-[670px] flex flex-col items-center md:items-start justify-center">
          <h1 className="font-inter font-bold text-[30px] sm:text-[25px] md:text-[30px] lg:text-[40px] xl:text-[60px] leading-[40px] sm:leading-[30px]
          lg:leading-[45px] xl:leading-[60px] text-gray-800 mb-5 md:mb-8">
            Find and Connect with Film Equipment Suppliers
          </h1>
          <p className="font-inter text-[16px] sm:text-[18px] md:text-[20px] text-gray-600 leading-[25px] sm:leading-[28px] mb-6
          md:mb-10">
            The easiest way to post RFQs, browse gear, and connect with trusted merchants in the film production industry.
          </p>
          <div className="flex gap-4 w-full">
            <a
              href="/renter-signup"
              className="bg-sky-600 text-white rounded-lg h-[60px] w-full flex items-center justify-center text-center text-[16px] font-medium transition hover:bg-sky-700"
            >
              Join as Renter
            </a>
            <a
              href="/merchant-signup"
              className="border-2 border-gray-700 text-gray-800 rounded-lg text-center h-[60px] w-full flex items-center justify-center text-[16px] font-medium transition hover:bg-gray-100"
            >
              Join as Merchant
            </a>
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
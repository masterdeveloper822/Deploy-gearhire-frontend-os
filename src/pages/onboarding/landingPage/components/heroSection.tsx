import React from "react";
import { Link } from "react-router-dom";
import { Button } from "@/src/components/ui/button";

import imgLandingPage from "@/public/assets/images/landing_image.png";
import { Typography } from "@/src/components/ui/typography";

const imgImg = "http://localhost:3845/assets/3a83d8ba059eb727a485e6341fb687c2c3575eb5.png";

export default function HeroSection() {
  return (
    <section className="w-full flex justify-center py-14">
      <div className="w-full max-w-[1350px] flex flex-col md:flex-row items-center md:items-start gap-12 px-4 md:px-0">
        {/* Left: Text */}
        <div className="w-full pt-14 md:w-[670px] flex flex-col justify-center">
          <h1 className="font-inter font-bold text-[40px] md:text-[60px] leading-[48px] md:leading-[60px] text-gray-800 mb-8">
            Find and Connect with Film Equipment Suppliers
          </h1>
          <p className="font-inter text-[18px] md:text-[20px] text-gray-600 leading-[28px] mb-10 max-w-[514px]">
            The easiest way to post RFQs, browse gear, and connect with trusted merchants in the film production industry.
          </p>
          <div className="flex gap-4">
            <a
              href="/renter-signup"
              className="bg-sky-600 text-white rounded-lg h-[60px] w-[172.8px] flex items-center justify-center text-[16px] font-medium transition hover:bg-sky-700"
            >
              Join as Renter
            </a>
            <a
              href="/merchant-signup"
              className="border-2 border-gray-700 text-gray-800 rounded-lg h-[60px] w-[199.7px] flex items-center justify-center text-[16px] font-medium transition hover:bg-gray-100"
            >
              Join as Merchant
            </a>
          </div>
        </div>
        {/* Right: Image */}
        <div className="w-full md:w-[624px] flex justify-center">
          <img
            src={imgImg}
            alt="Film equipment"
            className="w-[312px] h-[312px] md:w-[624px] md:h-[624px] rounded-xl shadow-lg object-cover"
          />
        </div>
      </div>
    </section>
  );
} 
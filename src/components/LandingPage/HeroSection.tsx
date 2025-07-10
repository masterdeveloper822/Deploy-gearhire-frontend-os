import React from "react";
import { Link } from "react-router-dom";
import { Button } from "@/src/components/ui/button";

import imgLandingPage from "@/public/assets/images/landing_image.png";

export default function HeroSection() {
  return (
    <div className="pt-14 pr-20 pl-20">
      <div className="bg-transparent relative z-3 ml-4">
        <div className="flex flex-row w-full items-stretch">
          <div className="flex flex-col flex-1 z-[5] w-full">
            <span className="flex justify-start items-start text-6xl font-bold leading-[60px] text-gray-800 text-left z-[5] pt-14">
              Find and Connect with Film Equipment Suppliers
            </span>
            <div className="z-[4] w-full">
              <span className="flex justify-start items-start text-[20px] font-normal leading-7 text-gray-600 relative text-left z-[6] mt-[20] mr-[32] sm:mt-[40px] sm:mr-[64px] lg:mt-[74.5px] lg:mr-[122px]">
                The easiest way to post RFQs, browse gear, and connect with
                trusted merchants in the film production industry.
              </span>
              <div className="relative z-[7] mt-[33.76px] pr-[250px] flex gap-4 w-full text-base">
                <Button
                  asChild
                  className="bg-sky-600 text-white hover:bg-sky-700 rounded-[8px] w-[173px] h-[60px] min-w-[173px] min-h-[60px] max-w-[173px] max-h-[60px] text-[16px]"
                >
                  <Link
                    to="/renter-signup"
                    className="flex items-center justify-center w-full h-full leading-[19.364px] text-[16px]"
                  >
                    Join as Renter
                  </Link>
                </Button>
                <Button
                  asChild
                  variant="outline"
                  className="border-gray-700 text-gray-900 flex-1 rounded-[8px] h-[60px] min-h-[60px] max-h-[60px] text-[16px] bg-gray-50"
                >
                  <Link
                    to="/merchant-signup"
                    className="flex items-center justify-center h-[60px] w-full font-medium leading-[19.364px]"
                  >
                    Join as Merchant
                  </Link>
                </Button>
              </div>
            </div>
          </div>
          <img
            src={imgLandingPage}
            alt="Film equipment landing"
            className="w-[624px] h-[572px] object-cover rounded-xl z-[13] object-top [object-position:top]"
          />
        </div>
      </div>
    </div>
  );
} 
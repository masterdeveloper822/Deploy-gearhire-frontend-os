import React from "react";
import { Link } from "react-router-dom";
import { Button } from "@/src/components/ui/button";

import imgLandingPage from "@/public/assets/images/landing_image.png";
import { Typography } from "@/src/components/ui/typography";

export default function HeroSection() {
  return (
    <div className="pt-7 md:pt-14 px-4 sm:px-8 md:px-20">
      <div className="bg-transparent relative z-3 ml-0 md:ml-4">
        <div className="flex flex-col md:flex-row w-full items-stretch">
         <div className="flex flex-col md:flex-row w-full items-stretch overflow-x-hidden">
          <div className="flex flex-col flex-1 z-[5] w-full min-w-0 max-w-full md:w-0 md:min-w-0 md:max-w-[calc(100%-624px)]">
            <Typography
              variant="hero"
              className="z-[5] pt-8 md:pt-14 leading-8 md:leading-15 text-center md:text-left"
            >
              Find and Connect with Film Equipment Suppliers
            </Typography>
            <div className="pt-8 md:pt-18 pr-0 md:pr-28 pl-0 md:pl-0 text-center md:text-left">
              <Typography variant="heroSub">
                The easiest way to post RFQs, browse gear, and connect with
                trusted merchants in the film production industry.
              </Typography>
              <div className="relative z-[7] mt-8 md:mt-8 flex gap-4 text-base px-10 md:pr-[150px]">
                <Button variant="skyPrimary" className="w-full md:w-44 h-13 md:h-15">
                  <Link to="/renter-signup">
                    Join as Renter
                  </Link>
                </Button>
                <Button
                  asChild
                  variant="blackBorder"
                  className="w-full md:flex-1 h-13 md:h-[60px]"
                >
                  <Link
                    to="/merchant-signup"
                  >
                    Join as Merchant
                  </Link>
                </Button>
              </div>
            </div>
          </div>
          <div className="flex-shrink-0 pt-10 md:pt-0">
            <img
              src={imgLandingPage}
              alt="Film equipment landing"
              className="w-full max-w-full h-75 xs:h-75 sm:h-85 md:w-156 md:max-w-156 md:min-w-[624px] md:h-[572px] object-cover rounded-xl z-[13] object-top [object-position:top]"
            />
          </div>
        </div>
        </div>
      </div>
    </div>
  );
} 
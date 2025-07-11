import React from "react";
import { Link } from "react-router-dom";
import { Button } from "@/src/components/ui/buttons/button";

import imgLandingPage from "@/public/assets/images/landing_image.png";
import { Typography } from "@/src/components/ui/typography/typography";
import { SkyPrimaryButton } from "@/src/components/ui/buttons/sky-primary-button";
import { BlackBorderButton } from "@/src/components/ui/buttons/black-border-button";

export default function HeroSection() {
  return (
    <div className="pt-7 md:pt-14 px-4 sm:px-8 md:px-20">
      <div className="bg-transparent relative z-3 ml-0 md:ml-4">
        <div className="flex flex-col md:flex-row w-full items-stretch">
         <div className="flex flex-col md:flex-row w-full items-stretch overflow-x-hidden">
          <div className="flex flex-col flex-1 z-[5] w-full min-w-0 max-w-full md:w-0 md:min-w-0 md:max-w-[calc(100%-624px)]">
            <Typography
              variant="hero"
              className="z-[5] pt-8 md:pt-14 leading-[30px] md:leading-[60px] text-center md:text-left"
            >
              Find and Connect with Film Equipment Suppliers
            </Typography>
            <div className="pt-8 md:pt-[74.5px] pr-6 md:pr-[110px] pl-6 md:pl-0 text-center md:text-left">
              <Typography variant="heroSub">
                The easiest way to post RFQs, browse gear, and connect with
                trusted merchants in the film production industry.
              </Typography>
              <div className="relative z-[7] mt-8 md:mt-[33.76px] flex gap-4 text-base pr-0 md:pr-[125px]">
                <SkyPrimaryButton className="w-full md:w-[173px] h-[52px] md:h-[60px]">
                  <Link to="/renter-signup">
                    Join as Renter
                  </Link>
                </SkyPrimaryButton>
                <BlackBorderButton
                  asChild
                  className="w-full md:flex-1 h-[52px] md:h-[60px]"
                >
                  <Link
                    to="/merchant-signup"
                  >
                    Join as Merchant
                  </Link>
                </BlackBorderButton>
              </div>
            </div>
          </div>
          <div className="flex-shrink-0 pt-10 md:pt-0">
            <img
              src={imgLandingPage}
              alt="Film equipment landing"
              className="w-full max-w-full h-[300px] xs:h-[280px] sm:h-[340px] md:w-[624px] md:max-w-[624px] md:min-w-[624px] md:h-[572px] object-cover rounded-xl z-[13] object-top [object-position:top]"
            />
          </div>
        </div>
        </div>
      </div>
    </div>
  );
} 
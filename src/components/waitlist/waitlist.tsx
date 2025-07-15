import React from "react";
import { Button } from "@/components/ui/button";
import { EmailInput } from "@/components/ui/input";
import { SquaredIcon } from "@/components/ui/card";
import { Typography } from "@/components/ui/typography";

import boxesIcon from "@/assets/images/ui/icons/boxes.svg";
import comingSoonImg from "@/assets/images/landing/coming-soon.png";

export default function Waitlist() {
  return (
    <div
      id="waitlist"
      className="relative z-[144] flex justify-center px-0 py-3 md:py-24 sm:px-20 md:px-0 lg:px-[60px]"
    >
      <div className="w-full max-w-5xl flex flex-col md:flex-row items-stretch bg-transparent z-[145] mx-6 md:mx-10 lg:mx-30 xl:mx-40 rounded-2xl shadow-2xl overflow-hidden">
        <div className="w-full md:w-1/2 bg-sky-700 relative flex flex-col justify-center p-10 md:p-12 z-[146]">
          <div className="flex flex-col justify-center h-full">
            <SquaredIcon src={boxesIcon} alt="Box Icon" size={56} />
            <Typography
              variant="h2"
              className="text-white text-left mb-10 mt-1.5"
            >
              Coming Soon: Powerful Inventory System
            </Typography>
            <Typography variant="body" className="text-white text-left mb-5">
              We're building a comprehensive inventory management system to help
              merchants track equipment, manage rentals, and streamline
              operations.
            </Typography>
            <div className="flex flex-col gap-4 px">
              <EmailInput />
              <Button variant="white_sky" className="h-12 text-base text-sky-700">
                Join the Waitlist
              </Button>
            </div>
          </div>
        </div>
        <div className="w-full md:w-1/2 bg-sky-900 flex relative justify-center overflow-hidden z-[161] rounded-r-2xl">
          <img
            src={comingSoonImg}
            alt="Coming Soon"
            className="w-full h-full object-cover"
          />
        </div>
      </div>
    </div>
  );
}

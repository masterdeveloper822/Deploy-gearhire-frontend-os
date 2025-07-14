import React from "react";
import { Button } from "@/src/components/ui/button";
import { EmailInput } from "@/src/components/ui/input";
import { SquaredIcon } from "@/src/components/ui/card";
import { Typography } from "@/src/components/ui/typography";

import boxesIcon from '@/public/assets/icons/boxes.svg';
import comingSoonImg from '@/public/assets/images/comingsoon_img.png';

export default function Waitlist() {
    return (
    <div id="waitlist" className="relative z-[144] flex justify-center py-3 md:py-24 px-0 md:px-20">
      <div className="w-full max-w-5xl flex flex-col md:flex-row items-stretch bg-transparent z-[145] mx-6 md:mx-64 rounded-2xl shadow-2xl overflow-hidden">
        <div className="flex-1 bg-sky-700 relative flex flex-col justify-center p-10 md:p-12 z-[146]">
          <div className="flex flex-col justify-center h-full">
            <SquaredIcon src={boxesIcon} alt="Box Icon" size={56} />
            <Typography variant="h2" className="text-white text-left mb-10 mt-1.5">
              Coming Soon: Powerful Inventory System
            </Typography>
            <Typography variant="body" className="text-white text-left max-w-xs mb-5">
              We're building a comprehensive inventory management system
              to help merchants track equipment, manage rentals, and
              streamline operations.
            </Typography>
            <div className="flex flex-col gap-4 max-w-xs">
              <EmailInput/>
              <Button variant="skyBorder" className="text-sky-700">
                Join the Waitlist
              </Button>
            </div>
          </div>
        </div>
        <div className="bg-sky-900 flex items-center justify-center overflow-hidden z-[161] rounded-r-2xl w-96">
          <img src={comingSoonImg} alt="Coming Soon" className="w-full h-full object-cover" />
        </div>
      </div>
    </div>
    );
}
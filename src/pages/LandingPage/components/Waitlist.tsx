import React from "react";
import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";

import boxesIcon from '@/public/assets/icons/boxes.svg';
import comingSoonImg from '@/public/assets/images/comingsoon_img.png';

export default function Waitlist() {
    return (
    <div id="waitlist" className="relative z-[144] flex justify-center py-24 px-20">
      <div className="w-full max-w-5xl flex flex-col md:flex-row items-stretch bg-transparent z-[145] mx-64 rounded-2xl shadow-2xl overflow-hidden">
        <div className="flex-1 bg-[#0369a1] relative flex flex-col justify-center px-12 py-12 z-[146]">
          <div className="flex flex-col justify-center h-full">
            <div
              className="bg-white/20 rounded-full w-14 h-14 flex items-center justify-center shadow-md mb-1.5"
            >
              <Link className="flex justify-center items-center">
                <img src={boxesIcon} alt="Box Icon" className="w-7 h-6" />
              </Link>
            </div>
            <Link
              className="font-bold text-3xl leading-9 text-white text-left mb-10"
            >
              Coming Soon: Powerful Inventory System
            </Link>
            <Link
              className="text-base font-normal leading-6 text-white text-left max-w-xs mb-5"
            >
              We're building a comprehensive inventory management system
              to help merchants track equipment, manage rentals, and
              streamline operations.
            </Link>
            <div className="flex flex-col gap-4 max-w-xs">
              <input
                type="email"
                placeholder="Enter your email address"
                className="w-full h-12 bg-white rounded-lg text-base font-normal leading-6 text-gray-900 pl-4 py-3 outline-none border-none placeholder:text-base"
              />
              <Button
                className="w-full h-12 bg-white rounded-lg flex justify-center items-center py-3 font-medium text-base leading-5 text-sky-700 text-center whitespace-nowrap hover:bg-sky-50 transition-colors"
              >
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
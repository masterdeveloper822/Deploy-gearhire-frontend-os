import React from "react";
import {Link} from "react-router-dom";

import boxesIcon from '@/public/assets/icons/boxes.svg';

import comingSoonImg from '@/public/assets/images/comingsoon_img.png';

export default function Waitlist() {
    return (
    <div id="waitlist" className="w-[1440px] h-[748px] bg-[#fff] relative z-[144] mt-0 mr-0 mb-0 ml-0">
        <div className="w-[1280px] h-[556px] bg-[rgba(0,0,0,0)] relative z-[145] mt-[96px] mr-0 mb-0 ml-[80px]">
          <div className="w-[768px] h-[556px] bg-[#0369a1] rounded-[16px] relative overflow-hidden shadow-[0_20px_25px_0_rgba(0,0,0,0.1)] z-[146] mt-0 mr-0 mb-0 ml-[256px]">
            <div className="w-[768px] h-[556px] bg-[rgba(0,0,0,0)] absolute top-0 left-0 z-[147]">
              <div className="w-[384px] h-[556px] bg-[rgba(0,0,0,0)] absolute top-0 left-0 z-[148]">
                <div className="w-[51px] h-[56px] bg-[rgba(255,255,255,0.2)] rounded-[8px] relative z-[149] mt-[48px] mr-0 mb-0 ml-[48px]">
                  <div className="w-[27px] h-[29px] bg-[rgba(0,0,0,0)] relative z-[150] pt-[13px] pl-[12px]">
                    <Link className="flex w-[27px] h-[24px] justify-center items-center flex-nowrap relative z-[151] mt-[2px] mr-0 mb-0 ml-0">
                      <img src={boxesIcon} alt="Box Icon" className="w-[27px] h-[24px] shrink-0 relative overflow-hidden z-[152]" />
                    </Link>
                  </div>
                </div>
                <Link className="flex w-[286px] h-[108px] justify-start items-start font-['Inter'] text-[30px] font-bold leading-[36px] text-[#fff] relative text-left z-[153] mt-[6.08px] mr-0 mb-0 ml-[48px]">
                  Coming Soon: Powerful Inventory System
                </Link>
                <Link className="flex w-[258px] h-[120px] justify-start items-start font-['Inter'] text-[16px] font-normal leading-[24px] text-[#fff] relative text-left z-[154] mt-[37.52px] mr-0 mb-0 ml-[48px]">
                  We're building a comprehensive inventory management system
                  to help merchants track equipment, manage rentals, and
                  streamline operations.
                </Link>
                <div className="w-[288px] h-[112px] bg-[rgba(0,0,0,0)] relative z-[155] mt-[20.4px] mr-0 mb-0 ml-[48px]">
                  <input
                    type="email"
                    placeholder="Enter your email address"
                    className="w-[288px] h-[48px] bg-[#fff] rounded-[8px] font-['Inter'] text-[16px] font-normal leading-[24px] text-[#1f2937] pl-[16px] z-[156] mt-0 mr-0 mb-0 ml-0 outline-none border-none"
                    style={{ position: "relative" }}
                  />
                  <div className="w-[288px] h-[48px] bg-[#fff] rounded-[8px] relative z-[159] mt-[16px] mr-0 mb-0 ml-0">
                    <Link className="flex w-[123px] h-[24px] justify-center items-start font-['Inter'] text-[16px] font-medium leading-[19.364px] text-[#0369a1] absolute top-[12.56px] left-[83.281px] text-center whitespace-nowrap z-[160]">
                      Join the Waitlist
                    </Link>
                  </div>
                </div>
              </div>
              <Link className="w-[384px] h-[556px] bg-[#075985] absolute top-0 left-[384px] z-[161]">
                <img src={comingSoonImg} alt="Coming Soon" className="w-[384px] h-[556px] absolute top-0 left-0 z-[162] object-cover" />
              </Link>
            </div>
          </div>
        </div>
      </div>
    );
}
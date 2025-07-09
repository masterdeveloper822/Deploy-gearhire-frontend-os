import React from "react";
import {Link} from "react-router-dom";

import landingImage from "@/public/assets/images/landing_image.png";

export default function HeroSection() {
    return (
        <div className="w-[1280px] h-[624px] bg-[rgba(0,0,0,0)] absolute top-[128px] left-[80px] z-[2]">
          <div className="w-[1248px] h-[624px] bg-[rgba(0,0,0,0)] relative z-[3] mt-0 mr-0 mb-0 ml-[16px]">
            <Link className="w-[624px] h-[624px] bg-[rgba(0,0,0,0)] absolute top-0 left-[624px] z-[12]">
              <img src={landingImage} alt="Landing" className="w-[624px] h-[624px] rounded-[12px] absolute top-0 left-0 z-[13] object-cover" />
            </Link>
            <div className="w-[624px] h-[444.24px] absolute top-[57.76px] left-0 z-[5]">
              <Link className="flex w-[611px] h-[192px] justify-start items-start font-['Inter'] text-[60px] font-bold leading-[60px] text-[#1f2937] absolute top-0 left-0 text-left z-[5]">
                Find and Connect with Film Equipment Suppliers
              </Link>
              <div className="w-[624px] h-[380px] text-[0px] bg-[rgba(0,0,0,0)] absolute top-[64.24px] left-0 z-[4]">
                <Link className="flex w-[514px] h-[84px] justify-start items-start font-['Inter'] text-[20px] font-normal leading-[28px] text-[#4b5563] relative text-left z-[6] mt-[202.24px] mr-0 mb-0 ml-0">
                  The easiest way to post RFQs, browse gear, and connect with
                  trusted merchants in the film production industry.
                </Link>
                <div className="w-[624px] h-[60px] bg-[rgba(0,0,0,0)] relative z-[7] mt-[33.76px] mr-0 mb-0 ml-0">
                  <div className="w-[199.656px] h-[60px] bg-[rgba(0,0,0,0)] rounded-[8px] border-solid border-2 border-[#374151] absolute top-0 left-[188.813px] z-10">
                    <Link className="flex w-[132px] h-[24px] justify-center items-start font-['Inter'] text-[16px] font-medium leading-[19.364px] text-[#1f2937] absolute top-[16.56px] left-[32px] text-center whitespace-nowrap z-[11]">
                      Join as Merchant
                    </Link>
                  </div>
                  <div className="w-[172.813px] h-[60px] bg-[#0284c7] rounded-[8px] absolute top-0 left-0 z-[8]">
                    <Link className="flex w-[109px] h-[24px] justify-center items-start font-['Inter'] text-[16px] font-medium leading-[19.364px] text-[#fff] absolute top-[16.56px] left-[32px] text-center whitespace-nowrap z-[9]">
                      Join as Renter
                    </Link>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
    );
} 
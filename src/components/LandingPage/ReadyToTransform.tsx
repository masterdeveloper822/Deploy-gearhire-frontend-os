import React from "react";
import {Link} from "react-router-dom";

export default function ReadyToTransform() {
    return (
        <div className="w-[1440px] h-[404px] bg-[#0284c7] relative z-[235] mt-0 mr-0 mb-0 ml-0">
          <Link className="flex w-[942px] h-[44px] justify-center items-start font-['Inter'] text-[36px] font-bold leading-[40px] text-[#fff] absolute top-[87.84px] left-[248.906px] text-center whitespace-nowrap z-[237]">
            Ready to Transform Your Film Equipment Experience?
          </Link>
          <div className="w-[1280px] h-[212px] text-[0px] bg-[rgba(0,0,0,0)] absolute top-[96px] left-[80px] z-[236]">
            <Link className="flex w-[613px] h-[56px] justify-center items-start font-['Inter'] text-[20px] font-normal leading-[28px] text-[#fff] relative text-center z-[238] mt-[62.16px] mr-0 mb-0 ml-[334.109px]">
              Join FilmGearHub today and connect with the perfect equipment
              partners for your next production.
            </Link>
            <div className="w-[1248px] h-[60px] bg-[rgba(0,0,0,0)] relative z-[239] mt-[33.84px] mr-0 mb-0 ml-[16px]">
              <Link className="w-[199.656px] h-[60px] bg-[rgba(0,0,0,0)] rounded-[8px] border-solid border-2 border-[#fff] absolute top-0 left-[618.578px] z-[242]">
                <span className="flex w-[132px] h-[24px] justify-center items-start font-['Inter'] text-[16px] font-medium leading-[19.364px] text-[#fff] absolute top-[16.56px] left-[32px] text-center whitespace-nowrap z-[243]">
                  Join as Merchant
                </span>
              </Link>
              <Link className="w-[172.813px] h-[60px] bg-[#fff] rounded-[8px] absolute top-0 left-[429.766px] z-[240]">
                <span className="flex w-[109px] h-[24px] justify-center items-start font-['Inter'] text-[16px] font-medium leading-[19.364px] text-[#0369a1] absolute top-[16.56px] left-[32px] text-center whitespace-nowrap z-[241]">
                  Join as Renter
                </span>
              </Link>
            </div>
          </div>
        </div>
    );
}
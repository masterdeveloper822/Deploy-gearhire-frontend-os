import React from "react";
import {Link} from "react-router-dom";

import reviewIcon from '@/public/assets/icons/review.svg';
import half_reviewIcon from '@/public/assets/icons/half_review.svg';

import woman1Img from '@/public/assets/images/woman1.png';
import man1Img from '@/public/assets/images/man1.png';
import man2Img from '@/public/assets/images/man2.png';

export default function UsersSay() {
    return (
<div className="w-[1440px] h-[588px] bg-[#f9fafb] relative z-[163] mt-0 mr-0 mb-0 ml-0">
          <Link className="flex w-[353px] h-[44px] justify-center items-start font-['Inter'] text-[36px] font-bold leading-[40px] text-[#1f2937] absolute top-[88.28px] left-[543.719px] text-center whitespace-nowrap z-[166]">
            What Our Users Say
          </Link>
          <div className="w-[1280px] h-[396px] bg-[rgba(0,0,0,0)] absolute top-[96px] left-[80px] z-[164]">
            <div className="w-[1248px] h-[84px] bg-[rgba(0,0,0,0)] relative z-[165] mt-0 mr-0 mb-0 ml-[16px]">
              <Link className="flex w-[572px] h-[28px] justify-center items-start font-['Inter'] text-[20px] font-normal leading-[28px] text-[#4b5563] absolute top-[54.08px] left-[336.828px] text-center whitespace-nowrap z-[167]">
                Join these industry professionals already using FilmGearHub
              </Link>
            </div>
            <div className="w-[1248px] h-[248px] bg-[rgba(0,0,0,0)] relative z-[168] mt-[64px] mr-0 mb-0 ml-[16px]">
              <Link className="w-[394.672px] h-[248px] bg-[#fff] rounded-[12px] absolute top-0 left-[426.656px] shadow-[0_4px_6px_0_rgba(0,0,0,0.1)] z-[191]">
                <div className="w-[346.672px] h-[48px] bg-[rgba(0,0,0,0)] relative z-[192] mt-[24px] mr-0 mb-0 ml-[24px]">
                  <img
                    src={woman1Img}
                    alt="Sarah Johnson"
                    className="w-[48px] h-[48px] object-cover rounded-full absolute top-0 left-0 z-[193]"
                  />
                  <div className="w-[205.406px] h-[44px] text-[0px] bg-[rgba(0,0,0,0)] absolute top-[2px] left-[64px] z-[194]">
                    <span className="block h-[24px] font-['Inter'] text-[16px] font-bold leading-[24px] text-[#1f2937] relative text-left whitespace-nowrap z-[195] mt-[-0.88px] mr-0 mb-0 ml-0">
                      Sarah Johnson
                    </span>
                    <span className="block h-[20px] font-['Inter'] text-[14px] font-normal leading-[20px] text-[#4b5563] relative text-left whitespace-nowrap z-[196] mt-[-0.32px] mr-0 mb-0 ml-0">
                      Production Manager, New York
                    </span>
                  </div>
                </div>
                <div className="w-[346.672px] h-[96px] text-[0px] bg-[rgba(0,0,0,0)] relative z-[197] mt-[16px] mr-0 mb-0 ml-[24px]">
                  <span className="block h-[24px] font-['Inter'] text-[16px] font-normal leading-[19.364px] text-[#4b5563] relative text-left whitespace-nowrap z-[198] mt-[0.56px] mr-0 mb-0 ml-0">
                    "The RFQ feature saves me hours of calling
                  </span>
                  <span className="block h-[24px] font-['Inter'] text-[16px] font-normal leading-[19.364px] text-[#4b5563] relative text-left whitespace-nowrap z-[199] mt-0 mr-0 mb-0 ml-0">
                    around for quotes. I can quickly compare
                  </span>
                  <span className="block h-[24px] font-['Inter'] text-[16px] font-normal leading-[19.364px] text-[#4b5563] relative text-left whitespace-nowrap z-[200] mt-0 mr-0 mb-0 ml-0">
                    options and find exactly what my production
                  </span>
                  <span className="block h-[24px] font-['Inter'] text-[16px] font-normal leading-[19.364px] text-[#4b5563] relative text-left whitespace-nowrap z-[201] mt-0 mr-0 mb-0 ml-0">
                    needs."
                  </span>
                </div>
                <div className="w-[346.672px] h-[24px] bg-[rgba(0,0,0,0)] relative z-[202] mt-[16px] mr-0 mb-0 ml-[24px]">
                  <div className="flex w-[20px] h-[16px] justify-center items-center flex-nowrap absolute top-[4px] left-[72px] overflow-hidden z-[211]">
                    <img
                        src={half_reviewIcon}
                        alt="Half Review"
                        className="w-[20px] h-[16px] shrink-0 object-cover relative overflow-hidden z-[212]"
                    />
                  </div>
                  <div className="flex w-[18px] h-[16px] justify-center items-center flex-nowrap absolute top-[4px] left-0 overflow-hidden z-[203]">
                    <img
                        src={reviewIcon}
                        alt="Review"
                        className="w-[18px] h-[16px] shrink-0 object-cover relative overflow-hidden z-[204]"
                    />
                  </div>
                  <div className="flex w-[18px] h-[16px] justify-center items-center flex-nowrap absolute top-[4px] left-[18px] overflow-hidden z-[205]">
                    <img
                        src={reviewIcon}
                        alt="Review"
                        className="w-[18px] h-[16px] shrink-0 object-cover relative overflow-hidden z-[206]"
                    />
                  </div>
                  <div className="flex w-[18px] h-[16px] justify-center items-center flex-nowrap absolute top-[4px] left-[36px] overflow-hidden z-[207]">
                    <img
                        src={reviewIcon}
                        alt="Review"
                        className="w-[18px] h-[16px] shrink-0 object-cover relative overflow-hidden z-[208]"
                    />
                  </div>
                  <div className="flex w-[18px] h-[16px] justify-center items-center flex-nowrap absolute top-[4px] left-[54px] overflow-hidden z-[209]">
                    <img
                        src={reviewIcon}
                        alt="Review"
                        className="w-[18px] h-[16px] shrink-0 object-cover relative overflow-hidden z-[210]"
                    />
                  </div>
                </div>
              </Link>
              <Link className="w-[394.656px] h-[248px] bg-[#fff] rounded-[12px] absolute top-0 left-0 shadow-[0_4px_6px_0_rgba(0,0,0,0.1)] z-[169]">
                <div className="w-[346.656px] h-[48px] bg-[rgba(0,0,0,0)] relative z-[170] mt-[24px] mr-0 mb-0 ml-[24px]">
                  <img
                    src={man1Img}
                    alt="Michael Rodriguez"
                    className="w-[48px] h-[48px] object-cover rounded-full absolute top-0 left-0 z-[171]"
                  />
                  <div className="w-[203.375px] h-[45.12px] absolute top-[0.88px] left-[64px] z-[173]">
                    <span className="flex h-[24px] justify-start items-start font-['Inter'] text-[16px] font-bold leading-[24px] text-[#1f2937] absolute top-0 left-0 text-left whitespace-nowrap z-[173]">
                      Michael Rodriguez
                    </span>
                    <div className="w-[203.375px] h-[44px] bg-[rgba(0,0,0,0)] absolute top-[1.12px] left-0 z-[172]">
                      <span className="flex h-[20px] justify-start items-start font-['Inter'] text-[14px] font-normal leading-[20px] text-[#4b5563] absolute top-[22.8px] left-0 text-left whitespace-nowrap z-[174]">
                        Cinematographer, Los Angeles
                      </span>
                    </div>
                  </div>
                </div>
                <div className="w-[346.656px] h-[96px] text-[0px] bg-[rgba(0,0,0,0)] relative z-[175] mt-[16px] mr-0 mb-0 ml-[24px]">
                  <span className="block h-[24px] font-['Inter'] text-[16px] font-normal leading-[19.364px] text-[#4b5563] relative text-left whitespace-nowrap z-[176] mt-[0.56px] mr-0 mb-0 ml-0">
                    "FilmGearHub has transformed how I source
                  </span>
                  <span className="block h-[24px] font-['Inter'] text-[16px] font-normal leading-[19.364px] text-[#4b5563] relative text-left whitespace-nowrap z-[177] mt-0 mr-0 mb-0 ml-0">
                    equipment for my projects. I've connected
                  </span>
                  <span className="block h-[24px] font-['Inter'] text-[16px] font-normal leading-[19.364px] text-[#4b5563] relative text-left whitespace-nowrap z-[178] mt-0 mr-0 mb-0 ml-0">
                    with several great rental houses I wouldn't
                  </span>
                  <span className="block h-[24px] font-['Inter'] text-[16px] font-normal leading-[19.364px] text-[#4b5563] relative text-left whitespace-nowrap z-[179] mt-0 mr-0 mb-0 ml-0">
                    have found otherwise."
                  </span>
                </div>
                <div className="w-[346.656px] h-[24px] bg-[rgba(0,0,0,0)] relative z-[180] mt-[16px] mr-0 mb-0 ml-[24px]">
                  <div className="flex w-[18px] h-[16px] justify-center items-center flex-nowrap absolute top-[4px] left-0 overflow-hidden z-[181]">
                    <img
                        src={reviewIcon}
                        alt="Review"
                        className="w-[18px] h-[16px] shrink-0 object-cover relative overflow-hidden z-[182]"
                    />
                  </div>
                  <div className="flex w-[18px] h-[16px] justify-center items-center flex-nowrap absolute top-[4px] left-[18px] overflow-hidden z-[183]">
                    <img
                        src={reviewIcon}
                        alt="Review"
                        className="w-[18px] h-[16px] shrink-0 object-cover relative overflow-hidden z-[184]"
                    />
                  </div>
                  <div className="flex w-[18px] h-[16px] justify-center items-center flex-nowrap absolute top-[4px] left-[36px] overflow-hidden z-[185]">
                  <img
                        src={reviewIcon}
                        alt="Review"
                        className="w-[18px] h-[16px] shrink-0 object-cover relative overflow-hidden z-[186]"
                    />
                  </div>
                  <div className="flex w-[18px] h-[16px] justify-center items-center flex-nowrap absolute top-[4px] left-[54px] overflow-hidden z-[187]">
                  <img
                        src={reviewIcon}
                        alt="Review"
                        className="w-[18px] h-[16px] shrink-0 object-cover relative overflow-hidden z-[188]"
                    />
                  </div>
                  <div className="flex w-[18px] h-[16px] justify-center items-center flex-nowrap absolute top-[4px] left-[72px] overflow-hidden z-[189]">
                  <img
                        src={reviewIcon}
                        alt="Review"
                        className="w-[18px] h-[16px] shrink-0 object-cover relative overflow-hidden z-[190]"
                    />
                  </div>
                </div>
              </Link>
              <Link className="w-[394.656px] h-[248px] bg-[#fff] rounded-[12px] absolute top-0 left-[853.328px] shadow-[0_4px_6px_0_rgba(0,0,0,0.1)] z-[213]">
                <div className="w-[346.656px] h-[48px] bg-[rgba(0,0,0,0)] relative z-[214] mt-[24px] mr-0 mb-0 ml-[24px]">
                  <img
                    src={man2Img}
                    alt="David Chen"
                    className="w-[48px] h-[48px] object-cover rounded-full absolute top-0 left-0 z-[215]"
                  />
                  <div className="w-[218px] h-[43.92px] absolute top-[0.88px] left-[64px] z-[218]">
                    <span className="flex h-[24px] justify-start items-start font-['Inter'] text-[16px] font-bold leading-[24px] text-[#1f2937] absolute top-0 left-0 text-left whitespace-nowrap z-[217]">
                      David Chen
                    </span>
                    <div className="w-[216.484px] h-[44px] bg-[rgba(0,0,0,0)] absolute top-[1.12px] left-0 z-[216]" />
                    <span className="flex h-[20px] justify-start items-start font-['Inter'] text-[14px] font-normal leading-[20px] text-[#4b5563] absolute top-[23.92px] left-0 text-left whitespace-nowrap z-[218]">
                      Equipment Rental Owner, Atlanta
                    </span>
                  </div>
                </div>
                <div className="w-[346.656px] h-[96px] text-[0px] bg-[rgba(0,0,0,0)] relative z-[219] mt-[16px] mr-0 mb-0 ml-[24px]">
                  <span className="block h-[24px] font-['Inter'] text-[16px] font-normal leading-[19.364px] text-[#4b5563] relative text-left whitespace-nowrap z-[220] mt-[0.56px] mr-0 mb-0 ml-0">
                    "As a merchant, FilmGearHub has helped me
                  </span>
                  <span className="block h-[24px] font-['Inter'] text-[16px] font-normal leading-[19.364px] text-[#4b5563] relative text-left whitespace-nowrap z-[221] mt-0 mr-0 mb-0 ml-0">
                    reach new clients and grow my business. The
                  </span>
                  <span className="block h-[24px] font-['Inter'] text-[16px] font-normal leading-[19.364px] text-[#4b5563] relative text-left whitespace-nowrap z-[222] mt-0 mr-0 mb-0 ml-0">
                    platform is intuitive and the social features
                  </span>
                  <span className="block h-[24px] font-['Inter'] text-[16px] font-normal leading-[19.364px] text-[#4b5563] relative text-left whitespace-nowrap z-[223] mt-0 mr-0 mb-0 ml-0">
                    build real relationships."
                  </span>
                </div>
                <div className="w-[346.656px] h-[24px] bg-[rgba(0,0,0,0)] relative z-[224] mt-[16px] mr-0 mb-0 ml-[24px]">
                  <div className="flex w-[18px] h-[16px] justify-center items-center flex-nowrap absolute top-[4px] left-0 overflow-hidden z-[225]">
                  <img
                        src={reviewIcon}
                        alt="Review"
                        className="w-[18px] h-[16px] shrink-0 object-cover relative overflow-hidden z-[226]"
                    />
                  </div>
                  <div className="flex w-[18px] h-[16px] justify-center items-center flex-nowrap absolute top-[4px] left-[18px] overflow-hidden z-[227]">
                  <img
                        src={reviewIcon}
                        alt="Review"
                        className="w-[18px] h-[16px] shrink-0 object-cover relative overflow-hidden z-[228]"
                    />
                  </div>
                  <div className="flex w-[18px] h-[16px] justify-center items-center flex-nowrap absolute top-[4px] left-[36px] overflow-hidden z-[229]">
                  <img
                        src={reviewIcon}
                        alt="Review"
                        className="w-[18px] h-[16px] shrink-0 object-cover relative overflow-hidden z-[230]"
                    />
                  </div>
                  <div className="flex w-[18px] h-[16px] justify-center items-center flex-nowrap absolute top-[4px] left-[54px] overflow-hidden z-[231]">
                  <img
                        src={reviewIcon}
                        alt="Review"
                        className="w-[18px] h-[16px] shrink-0 object-cover relative overflow-hidden z-[232]"
                    />
                  </div>
                  <div className="flex w-[18px] h-[16px] justify-center items-center flex-nowrap absolute top-[4px] left-[72px] overflow-hidden z-[233]">
                  <img
                        src={reviewIcon}
                        alt="Review"
                        className="w-[18px] h-[16px] shrink-0 object-cover relative overflow-hidden z-[234]"
                    />
                  </div>
                </div>
              </Link>
            </div>
          </div>
        </div>
    );
}
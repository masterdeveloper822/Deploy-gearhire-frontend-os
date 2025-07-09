import React from "react";
import {Link, Links} from "react-router-dom";

import gearFooterIcon from "@/public/assets/icons/gear_icon_footer.svg";
import instagramIcon from '@/public/assets/icons/instagram.svg';
import twitterIcon from '@/public/assets/icons/twitter.svg';
import facebookIcon from '@/public/assets/icons/facebook.svg';
import linkedinIcon from '@/public/assets/icons/linkedin.svg';

export default function Footer() {
    return (
        <div className="w-[1440px] h-[365px] bg-[#111827] relative z-[244] mt-0 mr-0 mb-0 ml-0">
          <Link to="/" className="flex h-[32px] justify-start items-start font-['Inter'] text-[24px] font-bold leading-[32px] text-[#fff] absolute top-[43.24px] left-[128px] text-left whitespace-nowrap z-[248]">
            FilmGearHub
          </Link>
          <div className="w-[1280px] h-[269px] bg-[rgba(0,0,0,0)] absolute top-[48px] left-[80px] z-[245]">
            <div className="w-[1248px] h-[164px] bg-[rgba(0,0,0,0)] relative z-[246] mt-0 mr-0 mb-0 ml-[16px]">
              <div className="w-[288px] h-[164px] bg-[rgba(0,0,0,0)] absolute top-0 left-0 z-[247]">
                <div className="flex w-[24px] h-[24px] justify-center items-center flex-nowrap relative overflow-hidden z-[249] mt-[3px] mr-0 mb-0 ml-0">
                  <img src={gearFooterIcon} alt="Gear Footer Icon" className="w-[24px] h-[24px] shrink-0 relative overflow-hidden z-[250]" />
                </div>
                <span className="flex w-[256px] h-[48px] justify-start items-start font-['Inter'] text-[16px] font-normal leading-[24px] text-[#9ca3af] relative text-left z-[251] mt-[21.24px] mr-0 mb-0 ml-0">
                  Connecting filmmakers with equipment merchants worldwide.
                </span>
                <div className="w-[288px] h-[28px] bg-[rgba(0,0,0,0)] relative z-[252] mt-[15.76px] mr-0 mb-0 ml-0">
                  <Link to="/twitter" className="flex w-[20px] h-[20px] justify-center items-center flex-nowrap absolute top-[3.5px] left-[33.5px] overflow-hidden z-[255]">
                    <img src={twitterIcon} alt="Twitter" className="w-[20px] h-[20px] shrink-0 relative overflow-hidden z-[256]" />
                  </Link>
                  <Link to="/facebook" className="flex w-[20px] h-[20px] justify-center items-center flex-nowrap absolute top-[3.5px] left-[69.5px] overflow-hidden z-[257]">
                    <img src={facebookIcon} alt="Facebook" className="w-[20px] h-[20px] shrink-0 relative overflow-hidden z-[258]" />
                  </Link>
                  <Link to="/instagram" className="flex w-[17.5px] h-[20px] justify-center items-center flex-nowrap absolute top-[3.5px] left-0 overflow-hidden z-[253]">
                    <img src={instagramIcon} alt="Instagram" className="w-[17.5px] h-[20px] shrink-0 relative overflow-hidden z-[254]" />
                  </Link>
                  <Link to="/linkedin" className="flex w-[17.5px] h-[20px] justify-center items-center flex-nowrap absolute top-[3.5px] left-[105.5px] overflow-hidden z-[259]">
                    <img src={linkedinIcon} alt="Linkedin" className="w-[17.5px] h-[20px] shrink-0 relative overflow-hidden z-[260]" />
                  </Link>
                </div>
              </div>
              <div className="w-[288px] h-[164px] text-[0px] bg-[rgba(0,0,0,0)] absolute top-0 left-[320px] z-[261]">
                <span className="block h-[28px] font-['Inter'] text-[18px] font-semibold leading-[28px] text-[#fff] relative text-left whitespace-nowrap z-[262] mt-[-0.92px] mr-0 mb-0 ml-0">
                  Platform
                </span>
                <div className="w-[288px] h-[120px] bg-[rgba(0,0,0,0)] relative z-[263] mt-[16.92px] mr-0 mb-0 ml-0">
                  <div className="w-[288px] h-[24px] bg-[rgba(0,0,0,0)] relative z-[264] mt-0 mr-0 mb-0 ml-0">
                    <Link
                      to="/#how-it-works"
                      onClick={e => {
                        e.preventDefault();
                        const element = document.getElementById('how-it-works');
                        if (element) {
                          const yOffset = -80; // adjust this offset to match your header height
                          const y = element.getBoundingClientRect().top + window.pageYOffset + yOffset;
                          window.scrollTo({ top: y, behavior: 'smooth' });
                        }
                      }}
                      className="flex h-[24px] justify-start items-start font-['Inter'] text-[16px] font-normal leading-[24px] text-[#9ca3af] absolute top-[-0.88px] left-0 text-left whitespace-nowrap z-[265]"
                    >
                      How It Works
                    </Link>
                  </div>
                  <div className="w-[288px] h-[24px] bg-[rgba(0,0,0,0)] relative z-[266] mt-[8px] mr-0 mb-0 ml-0">
                    <Link to="/features" className="flex h-[24px] justify-start items-start font-['Inter'] text-[16px] font-normal leading-[24px] text-[#9ca3af] absolute top-[-0.88px] left-0 text-left whitespace-nowrap z-[267]">
                      Features
                    </Link>
                  </div>
                  <div className="w-[288px] h-[24px] bg-[rgba(0,0,0,0)] relative z-[268] mt-[8px] mr-0 mb-0 ml-0">
                    <Link to="/pricing" className="flex h-[24px] justify-start items-start font-['Inter'] text-[16px] font-normal leading-[24px] text-[#9ca3af] absolute top-[-0.88px] left-0 text-left whitespace-nowrap z-[269]">
                      Pricing
                    </Link>
                  </div>
                  <div className="w-[288px] h-[24px] bg-[rgba(0,0,0,0)] relative z-[270] mt-[8px] mr-0 mb-0 ml-0">
                    <Link to="/faqs" className="flex h-[24px] justify-start items-start font-['Inter'] text-[16px] font-normal leading-[24px] text-[#9ca3af] absolute top-[-0.88px] left-0 text-left whitespace-nowrap z-[271]">
                      FAQs
                    </Link>
                  </div>
                </div>
              </div>
              <div className="w-[288px] h-[164px] text-[0px] bg-[rgba(0,0,0,0)] absolute top-0 left-[640px] z-[272]">
                <span className="block h-[28px] font-['Inter'] text-[18px] font-semibold leading-[28px] text-[#fff] relative text-left whitespace-nowrap z-[273] mt-[-0.64px] mr-0 mb-0 ml-0">
                  Company
                </span>
                <div className="w-[288px] h-[120px] bg-[rgba(0,0,0,0)] relative z-[274] mt-[16.64px] mr-0 mb-0 ml-0">
                  <div className="w-[288px] h-[24px] bg-[rgba(0,0,0,0)] relative z-[275] mt-0 mr-0 mb-0 ml-0">
                    <Link to="/about-us" className="flex h-[24px] justify-start items-start font-['Inter'] text-[16px] font-normal leading-[24px] text-[#9ca3af] absolute top-[-0.88px] left-0 text-left whitespace-nowrap z-[276]">
                      About Us
                    </Link>
                  </div>
                  <div className="w-[288px] h-[24px] bg-[rgba(0,0,0,0)] relative z-[277] mt-[8px] mr-0 mb-0 ml-0">
                    <Link to="/blog" className="flex h-[24px] justify-start items-start font-['Inter'] text-[16px] font-normal leading-[24px] text-[#9ca3af] absolute top-[-0.88px] left-0 text-left whitespace-nowrap z-[278]">
                      Blog
                    </Link>
                  </div>
                  <div className="w-[288px] h-[24px] bg-[rgba(0,0,0,0)] relative z-[279] mt-[8px] mr-0 mb-0 ml-0">
                    <Link to="/careers" className="flex h-[24px] justify-start items-start font-['Inter'] text-[16px] font-normal leading-[24px] text-[#9ca3af] absolute top-[-0.88px] left-0 text-left whitespace-nowrap z-[280]">
                      Careers
                    </Link>
                  </div>
                  <div className="w-[288px] h-[24px] bg-[rgba(0,0,0,0)] relative z-[281] mt-[8px] mr-0 mb-0 ml-0">
                    <Link to="/contact" className="flex h-[24px] justify-start items-start font-['Inter'] text-[16px] font-normal leading-[24px] text-[#9ca3af] absolute top-[-0.88px] left-0 text-left whitespace-nowrap z-[282]">
                      Contact
                    </Link>
                  </div>
                </div>
              </div>
              <div className="w-[288px] h-[164px] text-[0px] bg-[rgba(0,0,0,0)] absolute top-0 left-[960px] z-[283]">
                <span className="block h-[28px] font-['Inter'] text-[18px] font-semibold leading-[28px] text-[#fff] relative text-left whitespace-nowrap z-[284] mt-[-0.64px] mr-0 mb-0 ml-0">
                  Legal
                </span>
                <div className="w-[288px] h-[88px] bg-[rgba(0,0,0,0)] relative z-[285] mt-[16.64px] mr-0 mb-0 ml-0">
                  <div className="w-[288px] h-[24px] bg-[rgba(0,0,0,0)] relative z-[286] mt-0 mr-0 mb-0 ml-0">
                    <Link to="/terms-of-service" className="flex h-[24px] justify-start items-start font-['Inter'] text-[16px] font-normal leading-[24px] text-[#9ca3af] absolute top-[-0.88px] left-0 text-left whitespace-nowrap z-[287]">
                      Terms of Service
                    </Link>
                  </div>
                  <div className="w-[288px] h-[24px] bg-[rgba(0,0,0,0)] relative z-[288] mt-[8px] mr-0 mb-0 ml-0">
                    <Link to="/privacy-policy" className="flex h-[24px] justify-start items-start font-['Inter'] text-[16px] font-normal leading-[24px] text-[#9ca3af] absolute top-[-0.88px] left-0 text-left whitespace-nowrap z-[289]">
                      Privacy Policy
                    </Link>
                  </div>
                  <div className="w-[288px] h-[24px] bg-[rgba(0,0,0,0)] relative z-[290] mt-[8px] mr-0 mb-0 ml-0">
                    <Link to="/cookie-policy" className="flex h-[24px] justify-start items-start font-['Inter'] text-[16px] font-normal leading-[24px] text-[#9ca3af] absolute top-[-0.88px] left-0 text-left whitespace-nowrap z-[291]">
                      Cookie Policy
                    </Link>
                  </div>
                </div>
              </div>
            </div>
            <div className="w-[1248px] h-[57px] bg-[rgba(0,0,0,0)] relative z-[292] mt-[48px] mr-0 mb-0 ml-[16px] border-t border-t-[#1F2937] box-border">
              <span className="flex w-[312px] h-[24px] justify-center items-start font-['Inter'] text-[16px] font-normal leading-[24px] text-[#6b7280] absolute top-[31.88px] left-[467.266px] text-center whitespace-nowrap z-[293]">
                © 2023 FilmGearHub. All rights reserved.
              </span>
            </div>
          </div>
        </div>
    );
}
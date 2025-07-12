import React from "react";
import { Link } from "react-router-dom";
import InstagramLink from "@/src/components/custom/link/InstagramLink";
import TwitterLink from "@/src/components/custom/link/TwitterLink";
import FacebookLink from "@/src/components/custom/link/FacebookLink";
import LinkedInLink from "@/src/components/custom/link/LinkedInLink";

import gearFooterIcon from "@/public/assets/icons/gear_icon_footer.svg";

export default function Footer() {
  return (
    <footer className="bg-gray-900 w-full mt-0">
      <div className="py-12 px-12 md:px-24 flex flex-col gap-8">
        {/* Top section */}
        <div className="flex flex-col md:flex-row md:items-start gap-8 justify-between">
          {/* Brand and description */}
          <div className="flex flex-col gap-6 flex-1">
            <Link to="/" className="flex items-center gap-2 font-bold text-2xl text-white">
              <img src={gearFooterIcon} alt="Gear Footer Icon" className="w-6 h-6 mt-1" />
              FilmGearHub
            </Link>
            <span className="text-base text-gray-400 pr-0 md:pr-[120px]">
              Connecting filmmakers with equipment merchants worldwide.
            </span>
            <div className="flex gap-4 mt-2">
                <InstagramLink />
                <TwitterLink />
                <FacebookLink />
                <LinkedInLink />
            </div>
          </div>
          <div className="flex flex-col gap-6 flex-1">
            <span className="text-lg font-semibold text-white">Platform</span>
            <div className="flex flex-row md:flex-col gap-2">
              <Link
                to="/#how-it-works"
                onClick={e => {
                  e.preventDefault();
                  const element = document.getElementById('how-it-works');
                  if (element) {
                    const yOffset = -80;
                    const y = element.getBoundingClientRect().top + window.pageYOffset + yOffset;
                    window.scrollTo({ top: y, behavior: 'smooth' });
                  }
                }}
                className="text-base text-gray-400 hover:text-white transition"
              >
                How It Works
              </Link>
              <Link to="/features" className="text-base text-gray-400 hover:text-white transition">
                Features
              </Link>
              <Link to="/pricing" className="text-base text-gray-400 hover:text-white transition">
                Pricing
              </Link>
              <Link to="/faqs" className="text-base text-gray-400 hover:text-white transition">
                FAQs
              </Link>
            </div>
          </div>
          <div className="flex flex-col gap-6 flex-1">
            <span className="text-lg font-semibold text-white">Company</span>
            <div className="flex flex-row md:flex-col gap-2">
              <Link to="/about-us" className="text-base text-gray-400 hover:text-white transition">
                About Us
              </Link>
              <Link to="/blog" className="text-base text-gray-400 hover:text-white transition">
                Blog
              </Link>
              <Link to="/careers" className="text-base text-gray-400 hover:text-white transition">
                Careers
              </Link>
              <Link to="/contact" className="text-base text-gray-400 hover:text-white transition">
                Contact
              </Link>
            </div>
          </div>
          <div className="flex flex-col gap-6 flex-1">
            <span className="text-lg font-semibold text-white">Legal</span>
            <div className="flex flex-row md:flex-col gap-2">
              <Link to="/terms-of-service" className="text-base text-gray-400 hover:text-white transition">
                Terms of Service
              </Link>
              <Link to="/privacy-policy" className="text-base text-gray-400 hover:text-white transition">
                Privacy Policy
              </Link>
              <Link to="/cookie-policy" className="text-base text-gray-400 hover:text-white transition">
                Cookie Policy
              </Link>
            </div>
          </div>
        </div>
        {/* Bottom section */}
        <div className="border-t border-[#1F2937] pt-8 flex justify-center">
          <span className="text-base text-[#6b7280] text-center">
            © 2025 FilmGearHub. All rights reserved.
          </span>
        </div>
      </div>
    </footer>
  );
}
import React from "react"
import { Link } from "react-router-dom"

import { InstagramLink } from "@/components/ui/button"
import { TwitterLink } from "@/components/ui/button"
import { FacebookLink } from "@/components/ui/button"
import { LinkedInLink } from "@/components/ui/button"

import gearFooterIcon from "@/assets/images/ui/gear_icon_footer.svg"

export default function Footer() {
  return (
    <footer className="mt-0 w-full bg-gray-900">
      <div className="flex flex-col gap-8 px-12 py-12 lg:px-24">
        {/* Top section */}
        <div className="flex flex-col justify-between gap-8 md:flex-row md:items-start">
          {/* Brand and description */}
          <div className="flex flex-1 flex-col gap-6">
            <Link
              to="/"
              className="flex items-center gap-2 text-2xl font-bold text-white"
            >
              <img
                src={gearFooterIcon}
                alt="Gear Footer Icon"
                className="mt-1 h-6 w-6"
              />
              FilmGearHub
            </Link>
            <span className="pr-0 text-base text-gray-400 2xl:pr-[120px]">
              Connecting filmmakers with equipment merchants worldwide.
            </span>
            <div className="mt-2 flex gap-4">
              <InstagramLink />
              <TwitterLink />
              <FacebookLink />
              <LinkedInLink />
            </div>
          </div>
          <div className="flex flex-1 flex-col gap-6">
            <span className="h-[20px] text-lg font-semibold text-white">
              Platform
            </span>
            <div className="flex flex-row gap-6 md:flex-col md:gap-2">
              <Link
                to="/#how-it-works"
                onClick={(e) => {
                  e.preventDefault()
                  const element = document.getElementById("how-it-works")
                  if (element) {
                    const yOffset = -80
                    const y =
                      element.getBoundingClientRect().top +
                      window.pageYOffset +
                      yOffset
                    window.scrollTo({ top: y, behavior: "smooth" })
                  }
                }}
                className="text-base text-gray-400 transition hover:text-white"
              >
                How It Works
              </Link>
              <Link
                to="/features"
                className="text-base text-gray-400 transition hover:text-white"
              >
                Features
              </Link>
              <Link
                to="/pricing"
                className="text-base text-gray-400 transition hover:text-white"
              >
                Pricing
              </Link>
              <Link
                to="/faqs"
                className="text-base text-gray-400 transition hover:text-white"
              >
                FAQs
              </Link>
            </div>
          </div>
          <div className="flex flex-1 flex-col gap-6">
            <span className="h-[20px] text-lg font-semibold text-white">
              Company
            </span>
            <div className="flex flex-row gap-6 md:flex-col md:gap-2">
              <Link
                to="/about-us"
                className="text-base text-gray-400 transition hover:text-white"
              >
                About Us
              </Link>
              <Link
                to="/blog"
                className="text-base text-gray-400 transition hover:text-white"
              >
                Blog
              </Link>
              <Link
                to="/careers"
                className="text-base text-gray-400 transition hover:text-white"
              >
                Careers
              </Link>
              <Link
                to="/contact"
                className="text-base text-gray-400 transition hover:text-white"
              >
                Contact
              </Link>
            </div>
          </div>
          <div className="flex flex-1 flex-col gap-6">
            <span className="h-[20px] text-lg font-semibold text-white">
              Legal
            </span>
            <div className="flex flex-row gap-6 md:flex-col md:gap-2">
              <Link
                to="/terms-of-service"
                className="text-base text-gray-400 transition hover:text-white"
              >
                Terms of Service
              </Link>
              <Link
                to="/privacy-policy"
                className="text-base text-gray-400 transition hover:text-white"
              >
                Privacy Policy
              </Link>
              <Link
                to="/cookie-policy"
                className="text-base text-gray-400 transition hover:text-white"
              >
                Cookie Policy
              </Link>
            </div>
          </div>
        </div>
        {/* Bottom section */}
        <div className="flex justify-center border-t border-[#1F2937] pt-8">
          <span className="text-center text-base text-[#6b7280]">
            © 2025 FilmGearHub. All rights reserved.
          </span>
        </div>
      </div>
    </footer>
  )
}

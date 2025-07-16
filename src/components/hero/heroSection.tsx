import React from "react"
import { Link } from "react-router-dom"
import { Button } from "@/components/ui/button"

import imgLandingPage from "@/assets/images/landing/landing.png"
import { Typography } from "@/components/ui/typography"

export default function HeroSection() {
  return (
    <section className="flex w-full justify-center pt-8">
      <div className="flex w-full max-w-[1350px] flex-col gap-6 px-4 sm:flex-row sm:gap-12 md:px-0">
        {/* Left: Text */}
        <div className="flex w-full flex-col items-center justify-center pt-0 md:w-[670px] md:items-start md:pt-5 lg:pt-14">
          <h1 className="mb-5 text-2xl font-bold leading-tight text-gray-800 sm:text-2xl md:mb-8 md:text-3xl lg:text-4xl xl:text-6xl">
            Find and Connect with Film Equipment Suppliers
          </h1>
          <p className="mb-6 text-base leading-6 text-gray-600 sm:text-lg sm:leading-7 md:mb-10 md:text-xl">
            The easiest way to post RFQs, browse gear, and connect with trusted
            merchants in the film production industry.
          </p>
          <div className="flex w-full max-w-[300px] gap-4 sm:max-w-[1350px] lg:pr-20 xl:pr-60">
            <Button
              variant="tertiary"
              className="h-[60px] w-full rounded-lg text-base"
            >
              <Link to="/renter-signup">Join as Renter</Link>
            </Button>
            <Button
              variant="outline"
              className="h-[60px] w-full rounded-lg border-2 border-gray-700 text-base"
            >
              <Link to="/renter-signup">Join as Merchant</Link>
            </Button>
          </div>
        </div>
        {/* Right: Image */}
        <div className="lg: flex h-[350px] w-full items-center justify-center md:h-[500px] md:w-[624px] lg:mt-6 xl:mt-[80px]">
          <img
            src={imgLandingPage}
            alt="Film equipment"
            className="h-[312px] w-[312px] rounded-xl object-cover md:h-[360px] md:w-[360px] lg:h-[460px] lg:w-[460px] xl:h-[560px] xl:w-[560px]"
          />
        </div>
      </div>
    </section>
  )
}

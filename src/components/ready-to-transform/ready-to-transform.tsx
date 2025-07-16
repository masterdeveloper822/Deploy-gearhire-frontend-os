import React from "react"

import { Button } from "@/components/ui/button"
import { Typography } from "@/components/ui/typography"

export default function ReadyToTransform() {
  return (
    <div className="w-full flex-col items-center justify-center bg-sky-600 px-10 py-10 md:px-20 md:py-24">
      <div className="flex w-full flex-col items-center">
        <Typography
          variant="h1"
          className="mb-6 text-center leading-tight text-white"
        >
          Ready to Transform Your Film Equipment Experience?
        </Typography>
        <Typography
          variant="heroSub"
          className="mb-6 max-w-2xl text-center leading-7 text-white md:mb-10"
        >
          Join FilmGearHub today and connect with the perfect equipment partners
          for your next production.
        </Typography>
        <div className="flex w-[300px] flex-col justify-center gap-4 sm:w-full sm:flex-row">
          <Button
            size="lg"
            variant="white_sky"
            className="h-15 px-8 py-4 text-base text-sky-700"
          >
            Join as Renter
          </Button>
          <Button
            variant="tertiary"
            size="lg"
            className="h-15 border-2 border-white px-8 py-4 text-base"
          >
            Join as Merchant
          </Button>
        </div>
      </div>
    </div>
  )
}

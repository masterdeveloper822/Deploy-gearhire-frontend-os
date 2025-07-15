import React from "react";

import { Button } from "@/components/ui/button";
import { Typography } from "@/components/ui/typography";

export default function ReadyToTransform() {
  return (
    <div className="w-full bg-sky-600 fleex-col items-center justify-center py-10 md:py-24 px-10 md:px-20">
      <div className="w-full flex flex-col items-center">
        <Typography
          variant="h1"
          className="text-center text-white mb-6 leading-tight"
        >
          Ready to Transform Your Film Equipment Experience?
        </Typography>
        <Typography
          variant="heroSub"
          className="text-white text-center mb-6 md:mb-10 max-w-2xl leading-7"
        >
          Join FilmGearHub today and connect with the perfect equipment partners
          for your next production.
        </Typography>
        <div className="flex flex-col md:flex-row gap-4 justify-center w-full">
          <Button
            size="lg"
            variant="white_sky"
            className="text-base text-sky-700 h-15 px-8 py-4"
          >
            Join as Renter
          </Button>
          <Button variant="tertiary" size="lg" className="px-8 py-4 border-2 border-white text-base h-15">
            Join as Merchant
          </Button>
        </div>
      </div>
    </div>
  );
}

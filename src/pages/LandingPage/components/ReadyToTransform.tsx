import React from "react";
import { Link } from "react-router-dom";
import { Button } from "@/src/components/ui/buttons/button";

export default function ReadyToTransform() {
  return (
    <div className="w-full bg-sky-600 flex flex-col items-center justify-center py-24 px-20">
      <div className="w-full flex flex-col items-center">
        <Link className="font-bold text-3xl md:text-4xl text-white text-center mb-6 leading-tight">
          Ready to Transform Your Film Equipment Experience?
        </Link>
        <Link className="text-lg md:text-xl text-white text-center mb-10 max-w-2xl font-normal leading-7">
          Join FilmGearHub today and connect with the perfect equipment partners for your next production.
        </Link>
        <div className="flex flex-col md:flex-row gap-4 justify-center w-full">
          <Button 
            size="lg"
            className="flex-1 md:flex-none px-8 py-4 h-15 bg-white text-sky-700 font-medium text-base hover:bg-sky-50 hover:text-black transition-colors"
          >
            Join as Renter
          </Button>
          <Button 
            variant="ghost"
            size="lg"
            className="flex-1 md:flex-none px-8 py-4 h-15 border-2 border-white text-white font-medium text-base bg-transparent hover:bg-white/10 transition-colors"
          >
            Join as Merchant
          </Button>
        </div>
      </div>
    </div>
  );
}
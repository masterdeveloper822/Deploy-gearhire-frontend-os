import React from "react";
import { Link } from "react-router-dom";
import { Button } from "@/src/components/ui/buttons/button";
import gearIcon from "@/public/assets/icons/gear_icon.svg";

export default function CreateAccountHeader() {
  return (
    <header className="bg-white shadow-sm relative z-10 px-4 sm:px-8 lg:px-[80px] h-[74px]">
      <div className="container mx-auto flex items-center justify-between h-[74px] p-4">
          <Link to="/" className="flex items-center">
            <img
              src={gearIcon}
              alt="Gear Icon"
              className="shrink-0 pt-[7px]"
            />
          </Link>
          <Link to="/" className="absolute ml-8 text-lg sm:text-xl lg:text-2xl font-bold text-sky-700 leading-6">
            FilmGearHub
          </Link>
          <div className="flex flex-col sm:flex-row items-end sm:items-center gap-1 sm:gap-2">
            <span className="text-muted-foreground text-sm sm:text-base font-normal leading-6">
              Already have an account?
            </span>
            <Button
              asChild
              variant="link"
              className="text-sky-700 font-medium text-sm sm:text-base pr-0 sm:pr-[8.8px] h-auto no-underline hover:no-underline p-0"
            >
              <Link to="/login" className="no-underline hover:no-underline">Log In</Link>
            </Button>
          </div>
      </div>
    </header>
  );
}
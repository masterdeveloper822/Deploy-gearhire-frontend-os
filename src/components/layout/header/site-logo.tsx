import React from "react";
import { Link } from "react-router-dom";

import gearIcon from "../../../assets/images/ui/gear_icon.svg";
import { Typography } from "@/components/ui/typography";

export function SiteLogo() {
  return (
    <Link
      to="/"
      className="flex items-center cursor-pointer"
      aria-label="Go to homepage"
    >
      <img src={gearIcon} alt="Gear Icon" className="shrink-0 pt-[7px]" />
      <Typography variant="logo" className="ml-2">
        FilmGearHub
      </Typography>
    </Link>
  );
}

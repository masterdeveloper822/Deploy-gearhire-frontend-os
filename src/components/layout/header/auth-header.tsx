import React from "react";
import { Link } from "react-router-dom";

import { NavLink } from "@/components/ui/nav-link";
import { HeaderFrame } from "@/components/layout/header/header-frame";
import { Button } from "@/components/ui/button";

export default function Header() {
  return (
    <HeaderFrame>
      <div className="flex items-center gap-4">
        <div className="hidden md:flex items-center gap-4">
          <NavLink href="#how-it-works">How It Works</NavLink>
          <NavLink href="#benefits">Benefits</NavLink>
          <NavLink href="#waitlist">Waitlist</NavLink>
        </div>
        <div className="flex items-center">
          <div className="flex items-center">
            <Button
              variant="white_sky"
              size="custom1"
              className="rounded-lg px-4 py-2 h-9 md:h-11 text-base font-normal leading-5"
            >
              <Link to="/login">Log In</Link>
            </Button>
            <Button
              variant="tertiary"
              className="rounded-lg px-4 py-2 h-9 md:h-11 text-base font-normal leading-5 ml-1 md:ml-3"
            >
              <Link to="/create-account">Sign Up</Link>
            </Button>
          </div>
        </div>
      </div>
    </HeaderFrame>
  );
}

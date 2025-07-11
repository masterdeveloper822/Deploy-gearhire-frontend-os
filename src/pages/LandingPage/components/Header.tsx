import React from "react";
import {Link} from "react-router-dom";

import { NavLink } from "@/src/components/ui/nav-link";
import HeaderFrame from "@/src/components/ui/header/headerFrame";
import { SkyPrimaryButton } from "@/src/components/ui/buttons/sky-primary-button";
import { SkyBorderButton } from "@/src/components/ui/buttons/sky-border-button";

export default function Header() {
  return (
    <HeaderFrame>
      <div className="flex items-center gap-4">
        <div className="hidden md:flex items-center gap-4">
          <NavLink href="#how-it-works">
            How It Works
          </NavLink>
          <NavLink href="#benefits">
            Benefits
          </NavLink>
          <NavLink href="#waitlist">
            Waitlist
          </NavLink>
        </div>
        <div className="flex items-center">
        <div className="flex items-center">
                <SkyBorderButton
                    className="h-[35px] md:h-[42px]"
                >
                  <Link to="/login">
                    Log In
                  </Link>
                </SkyBorderButton>
                <SkyPrimaryButton
                    className="h-[35px] md:h-[42px] ml-1 md:ml-3"
                  >
                  <Link to="/create-account">
                    Sign Up
                  </Link>
                </SkyPrimaryButton>
              </div>
        </div>
      </div>
    </HeaderFrame>
    
  );
}


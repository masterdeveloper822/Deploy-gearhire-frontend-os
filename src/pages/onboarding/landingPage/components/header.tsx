import React from "react";
import {Link} from "react-router-dom";

import { NavLink } from "@/src/components/ui/nav-link";
import HeaderFrame from "@/src/components/custom/header/headerFrame";
import { Button } from "@/src/components/ui/button";

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
                <Button
                    variant="skyBorder"
                    className="h-[35px] md:h-[42px]"
                >
                  <Link to="/login">
                    Log In
                  </Link>
                </Button>
                <Button
                    variant="skyPrimary"
                    className="h-[35px] md:h-[42px] ml-1 md:ml-3"
                  >
                  <Link to="/create-account">
                    Sign Up
                  </Link>
                </Button>
              </div>
        </div>
      </div>
    </HeaderFrame>
    
  );
}


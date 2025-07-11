import React from "react";
import {Link} from "react-router-dom";

import { Button } from "@/components/ui/button";
import { NavLink } from "@/components/ui/nav-link";
import HeaderFrame from "@/components/ui/headerFrame";

export default function Header() {
  return (
    <HeaderFrame>
      <div className="flex items-center gap-4">
        <div className="flex items-center gap-4">
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
          <Link to="/login" className="no-underline">
            <Button variant="outline-sky">
              Log In
            </Button>
          </Link>
          <Link to="/create-account" className="no-underline">
            <Button variant="primary-sky" className="ml-3">
              Sign Up
            </Button>
          </Link>
        </div>
      </div>
    </HeaderFrame>
  );
}


import React from "react";
import { Link } from "react-router-dom";

import { Button } from "@/src/components/ui/button";
import HeaderFrame from "@/src/components/custom/header/headerFrame";

export default function Header() {
  return (
    <HeaderFrame>
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
    </HeaderFrame>
  );
}
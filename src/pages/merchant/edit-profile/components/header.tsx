import React from "react";

import { HeaderFrame } from "@/components/layout/header/header-frame";
import defaultMerchantProfileIcon from "@/assets/images/ui/icons/defaultMerchantProfile.svg";

export default function Header() {
  return (
    <HeaderFrame>
      <div className="flex flex-col sm:flex-row items-end sm:items-center gap-1 sm:gap-6 mt-0 sm:mt-0 w-full sm:w-auto text-center sm:text-left">
        <span className="text-muted-foreground text-sm sm:text-base font-normal leading-6">
          Merchant Dashboard
        </span>
        <div className="flex items-center gap-2">
          <img
            src={defaultMerchantProfileIcon}
            alt="Profile"
            className="w-4 h-4"
          />
          <span className="text-sky-600 text-base font-medium">Profile</span>
        </div>
      </div>
    </HeaderFrame>
  );
}

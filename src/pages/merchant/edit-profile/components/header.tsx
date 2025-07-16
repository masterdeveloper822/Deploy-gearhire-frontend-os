import React from "react"

import { HeaderFrame } from "@/components/layout/header/auth-header"
import defaultMerchantProfileIcon from "@/assets/images/ui/icons/defaultMerchantProfile.svg"

export default function Header() {
  return (
    <HeaderFrame>
      <div className="mt-0 flex w-full flex-col items-end gap-1 text-center sm:mt-0 sm:w-auto sm:flex-row sm:items-center sm:gap-6 sm:text-left">
        <span className="text-sm font-normal leading-6 text-muted-foreground sm:text-base">
          Merchant Dashboard
        </span>
        <div className="flex items-center gap-2">
          <img
            src={defaultMerchantProfileIcon}
            alt="Profile"
            className="h-4 w-4"
          />
          <span className="text-base font-medium text-sky-600">Profile</span>
        </div>
      </div>
    </HeaderFrame>
  )
}

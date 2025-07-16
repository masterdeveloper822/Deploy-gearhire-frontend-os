import React from "react"

import { Link } from "react-router-dom"
import { Button } from "@/components/ui/button"
import { HeaderFrame } from "@/components/layout/header/auth-header"

export default function Header() {
  return (
    <HeaderFrame>
      <div className="mt-0 flex w-full flex-col items-end gap-1 text-center sm:mt-0 sm:w-auto sm:flex-row sm:items-center sm:gap-6 sm:text-left">
        <span className="text-sm font-normal leading-6 text-muted-foreground sm:text-base">
          Need help?
        </span>
        <Button
          asChild
          variant="link"
          className="h-auto p-0 pr-0 text-sm font-medium text-sky-700 no-underline hover:no-underline sm:pr-[8.8px] sm:text-base"
        >
          <Link
            to="mailto:support@filmgearhub.com"
            className="no-underline hover:no-underline"
          >
            Contact Support
          </Link>
        </Button>
      </div>
    </HeaderFrame>
  )
}

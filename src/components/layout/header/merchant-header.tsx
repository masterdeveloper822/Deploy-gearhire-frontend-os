import React from "react"

import { Link, useNavigate } from "react-router-dom"
import gearIcon from "../../../assets/images/ui/gear_icon.svg"
import { Typography } from "@/components/ui/typography"
import { Button } from "@/components/ui/button"

const imgImg =
  "http://localhost:3845/assets/410c340aa057242400c608368f918307cdd72438.png"

import { faBell, faGear } from "@fortawesome/free-solid-svg-icons"
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"

export function MerchantHeader() {
  const navigate = useNavigate()

  return (
    <header className="w-full bg-white shadow-sm">
      <div className="mx-auto flex h-[74px] max-w-[1550px] items-center justify-between px-4 md:px-8">
        {/* Logo and Brand */}
        <Link
          to="/"
          className="flex cursor-pointer items-center"
          aria-label="Go to homepage"
        >
          <img src={gearIcon} alt="Gear Icon" className="shrink-0 pt-[7px]" />
          <Typography variant="logo" className="ml-2">
            FilmGearHub
          </Typography>
        </Link>
        {/* User Profile and Actions */}
        <div className="flex items-center gap-1 px-2 sm:gap-2 sm:px-0 md:gap-4">
          <div className="pr-2 md:pr-0">
            <img
              src={imgImg}
              alt="Profile"
              className="h-7 w-7 rounded-full sm:h-8 sm:w-8"
            />
          </div>
          <span className="hidden max-w-[80px] truncate text-sm font-medium text-gray-700 sm:max-w-none sm:text-base md:inline">
            ProGear Studios
          </span>
          {/* Notification Icon */}
          <Button
            variant="ghost"
            className="ml-1 sm:ml-3"
            onClick={() => {
              navigate("/merchant-notification")
            }}
          >
            <FontAwesomeIcon
              className="text-gray-600"
              style={{ height: 20, width: 20 }}
              icon={faBell}
            />
          </Button>
          {/* Settings Icon */}
          <Button variant="ghost" className="ml-1 sm:ml-3">
            <FontAwesomeIcon
              className="text-gray-600"
              style={{ height: 20, width: 20 }}
              icon={faGear}
            />
          </Button>
        </div>
      </div>
    </header>
  )
}

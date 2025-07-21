import { Typography } from "@/components/ui/typography"
import React from "react"
import { Link, useNavigate } from "react-router-dom"
import gearIcon from "../../../assets/images/ui/gear_icon.svg"
import { Button } from "@/components/ui/button"

const imgImg =
  "http://localhost:3845/assets/f578f9c2a181ef669150341163e63e6e9da01878.png"
import notificationIcon from "@/assets/images/ui/icons/notification.svg"
const imgFrame1 =
  "http://localhost:3845/assets/9861a0b6e8bb9b630982f192343e0944f05f6199.svg"
import settingIcon from "@/assets/images/ui/icons/setting.svg"

export const RenterHeader = () => {
  const navigate = useNavigate()

  return (
    <header className="w-full bg-white shadow-sm">
      <div className="mx-auto flex h-[74px] max-w-[1550px] items-center justify-between px-4 md:px-8">
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
        <div className="flex items-center gap-1 px-2 sm:gap-2 sm:px-0 md:gap-4">
          <div className="pr-2 md:pr-0">
            <img
              src={imgImg}
              alt="Profile"
              className="h-7 w-7 rounded-full sm:h-8 sm:w-8"
            />
          </div>

          <span className="hidden max-w-[80px] truncate text-sm font-medium text-gray-700 sm:max-w-none sm:text-base md:inline">
            Sarah Chen
          </span>

          <Button variant="ghost" className="relative ml-1 sm:ml-3">
            <img
              src={notificationIcon}
              alt="Notifications"
              className="h-4 w-4 sm:h-5 sm:w-5"
            />
            <span className="absolute -right-1 -top-1 h-3 w-3 rounded-full bg-red-500"></span>
          </Button>

          <Button variant="ghost" className="ml-1 sm:ml-3">
            <img
              src={settingIcon}
              alt="Settings"
              className="h-4 w-4 sm:h-5 sm:w-5"
            />
          </Button>
        </div>
      </div>
    </header>
  )
}

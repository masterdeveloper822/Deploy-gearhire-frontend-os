import { Typography } from "@/components/ui/typography"
import React from "react"
import { Link, useNavigate } from "react-router-dom"
import gearIcon from "../../../assets/images/ui/gear_icon.svg"
import { Button } from "@/components/ui/button"
import {
  Popover,
  PopoverContent,
  PopoverTrigger,
} from "@/components/ui/popover"

const imgImg =
  "http://localhost:3845/assets/f578f9c2a181ef669150341163e63e6e9da01878.png"
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"
import { faBell, faGear } from "@fortawesome/free-solid-svg-icons"
import { LogOut } from "lucide-react"

export const RenterHeader = () => {
  const navigate = useNavigate()

  return (
    <header className="w-full bg-white shadow-sm">
      <div className="mx-auto flex h-[74px] max-w-[1550px] items-center justify-between px-4 md:px-8">
        <Link
          to="/renter-dashboard"
          className="flex cursor-pointer items-center"
          aria-label="Go to homepage"
        >
          <img src={gearIcon} alt="Gear Icon" className="shrink-0 pt-[7px]" />
          <Typography variant="logo" className="ml-2">
            FilmGearHub
          </Typography>
        </Link>
        {/* Navigation */}
        <div className="hidden items-center justify-center gap-8 lg:flex">
          <Link to="/browse-equipment">
            <p
              className={
                window.location.pathname === "/browse-equipment"
                  ? "text-tertiary"
                  : undefined
              }
            >
              Equipment
            </p>
          </Link>
          <Link to="/browse-training-course">
            <p
              className={
                window.location.pathname === "/browse-training-course"
                  ? "text-tertiary"
                  : undefined
              }
            >
              Training Courses
            </p>
          </Link>
          <Link>
            <p>Merchants</p>
          </Link>
        </div>
        {/* User Profile and Actions */}
        <div className="flex items-center gap-1 gap-4 px-2 text-base sm:px-0">
          <Popover>
            <PopoverTrigger className="flex cursor-pointer items-center gap-2 focus:outline-none">
              <div>
                <img
                  src={imgImg}
                  alt="Profile"
                  className="h-7 w-7 rounded-full sm:h-8 sm:w-8"
                />
              </div>
              <span className="hidden max-w-[80px] truncate text-sm font-medium text-gray-700 sm:max-w-none sm:text-base md:inline">
                Sarah Chen
              </span>
            </PopoverTrigger>
            <PopoverContent className="w-30 p-3">
              <Button
                variant="link"
                className="w-full justify-center px-2 text-base text-gray-700"
                onClick={() => navigate("/")}
              >
                Logout
                <LogOut />
              </Button>
            </PopoverContent>
          </Popover>

          {/* Notification Icon */}
          <Link to="/renter-notification">
            <Button variant="ghost" className="relative ml-1 sm:ml-3">
              <FontAwesomeIcon
                className="text-tertiary"
                style={{ height: 20, width: 20 }}
                icon={faBell}
              />
              <span className="absolute -right-3 -top-3 h-3 w-3 rounded-full bg-red-500"></span>
            </Button>
          </Link>
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

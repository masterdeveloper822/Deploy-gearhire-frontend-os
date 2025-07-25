import React from "react"
import { Link, NavLink, useNavigate } from "react-router-dom"
import gearIcon from "../../../assets/images/ui/GearHireLogo-01.svg"
import { Typography } from "@/components/ui/typography"
import { Button } from "@/components/ui/button"
import { useUser } from "@/context/user-context"
import { faGear } from "@fortawesome/free-solid-svg-icons"
import { Popover, PopoverContent, PopoverTrigger } from "@/components/ui/popover"
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"
import { faBell } from "@fortawesome/free-solid-svg-icons"
import { LogOut } from "lucide-react"
import defaultMerchantProfileIcon from "@/assets/images/ui/icons/defaultMerchantProfile.svg"

interface AuthHeaderProps {
  children?: React.ReactNode
}

const AuthHeader: React.FC = () => {
  const { user, logout } = useUser();
  const navigate = useNavigate();
  const BACKEND_URL = "http://localhost:8000";

  const getProfileImageUrl = (image: string) => {
    if (!image) return defaultMerchantProfileIcon;
    if (image.startsWith("http")) return image;
    return `${BACKEND_URL}${image}`;
  }

  return (
    <header className="w-full bg-white shadow-sm">
      <div className="mx-auto flex h-[74px] max-w-[1550px] items-center justify-between px-1 sm:px-4 md:px-8">
        <Link
          to="/"
          className="flex cursor-pointer items-center"
          aria-label="Go to homepage"
        >
          <img src={gearIcon} alt="Gear Icon" className="shrink-0 h-16 sm:block hidden" />
        </Link>
        {user ? (
          <div className="flex items-center gap-1 px-2 sm:gap-2 sm:px-0 md:gap-4">
          <Popover>
            <PopoverTrigger className="flex cursor-pointer items-center gap-2 focus:outline-none">
              <div className="pr-2 md:pr-0">
                <img
                  src={getProfileImageUrl(user.profile_image)}
                  alt="Profile"
                  className="h-7 w-7 rounded-full sm:h-8 sm:w-8"
                />
              </div>
              <span className="hidden max-w-[80px] truncate text-sm font-medium text-gray-700 sm:max-w-none sm:text-base md:inline">
                { user.name || "Profile" }
              </span>
            </PopoverTrigger>
            <PopoverContent className="w-30 p-3">
              <Button
                variant="link"
                className="w-full justify-center px-2 text-base text-gray-700"
                onClick={() => {
                  logout();
                  navigate("/");
                }}
              >
                Logout
                <LogOut />
              </Button>
            </PopoverContent>
          </Popover>
            {user.role === "merchant" ? (
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
            ) : (
              <Button
                variant="ghost"
                className="relative ml-1 sm:ml-3"
                onClick={() => {
                  navigate("/renter-notification")
                }}
              >
                <FontAwesomeIcon
                  className="text-tertiary"
                  style={{ height: 20, width: 20 }}
                  icon={faBell}
                />
                <span className="absolute -right-3 -top-3 h-3 w-3 rounded-full bg-red-500"></span>
              </Button>
            )}
          {/* Settings Icon */}
          <Button variant="ghost" className="ml-1 sm:ml-3">
            <FontAwesomeIcon
              className="text-gray-600"
              style={{ height: 20, width: 20 }}
              icon={faGear}
            />
          </Button>
        </div>
        ) : (
        <div className="flex items-center gap-4">
          <div className="hidden items-center gap-4 md:flex">
            <NavLink to="#how-it-works">How It Works</NavLink>
            <NavLink to="#benefits">Benefits</NavLink>
            <NavLink to="#waitlist">Waitlist</NavLink>
          </div>
          <div className="flex items-center">
            <div className="flex items-center">
              <Button
                variant="white_sky"
                size="custom1"
                className="h-9 rounded-lg px-4 py-2 text-base font-normal leading-5 md:h-11"
              >
                <Link to="/login">Log In</Link>
              </Button>
              <Button
                variant="tertiary"
                className="ml-1 h-9 rounded-lg px-4 py-2 text-base font-normal leading-5 md:ml-3 md:h-11"
              >
                <Link to="/signup">Sign Up</Link>
              </Button>
            </div>
          </div>
        </div>
        )}
      </div>
    </header>
  )
}

export { AuthHeader }

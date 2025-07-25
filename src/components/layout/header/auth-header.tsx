import React from "react"
import { Link } from "react-router-dom"
import gearIcon from "../../../assets/images/ui/gear_icon.svg"
import { Typography } from "@/components/ui/typography"

interface AuthHeaderProps {
  children?: React.ReactNode
}

const AuthHeader: React.FC = ({ children }: AuthHeaderProps) => {
  return (
    <header className="w-full bg-white shadow-sm">
      <div className="mx-auto flex h-[74px] max-w-[1550px] items-center justify-between px-1 sm:px-4 md:px-8">
        <Link
          to="/"
          className="flex cursor-pointer items-center"
          aria-label="Go to homepage"
        >
          <img src={gearIcon} alt="Gear Icon" className="shrink-0 pt-[7px] sm:block hidden" />
          <Typography variant="logo" className="ml-2">
            FilmGearHub
          </Typography>
        </Link>
        {children}
      </div>
    </header>
  )
}

export { AuthHeader }

import React from "react"
import { SiteLogo } from "./siteLogo"

interface HeaderFrameProps {
  children?: React.ReactNode
}

export default function HeaderFrame({ children }: HeaderFrameProps) {
  return (
    <header className="bg-white shadow-sm relative z-10 px-4 sm:px-8 lg:px-20 h-[74px]">
        <div className="container p-0 md:p-4 mx-auto flex items-center justify-between h-[74px]">
            <SiteLogo />
            {children}
        </div>
    </header>
  );
}
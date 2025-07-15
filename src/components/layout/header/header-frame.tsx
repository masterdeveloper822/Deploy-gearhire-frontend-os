import React from "react";
import { SiteLogo } from "./site-logo";

interface HeaderFrameProps {
  children?: React.ReactNode;
}

const HeaderFrame: React.FC = ({ children }: HeaderFrameProps) => {
  return (
    <header className="w-full bg-white shadow-sm">
      <div className="max-w-[1550px] mx-auto flex items-center justify-between px-4 md:px-8 h-[74px]">
  <SiteLogo />
      {children}
      </div>
    </header>
  );
};

export { HeaderFrame };

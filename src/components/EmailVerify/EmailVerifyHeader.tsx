import React from "react";

import gearIcon from "@/public/assets/icons/gear_icon.svg";

export default function EmailVerifyHeader() {
  return (
        <header className="bg-white shadow-sm relative z-10 px-4 sm:px-8 lg:px-[80px] h-[74px]">
          <div className="container mx-auto flex items-center justify-between h-[74px] p-4">
            <div
              className="flex items-center cursor-pointer"
              onClick={() => window.location.href = "/"}
              role="button"
              tabIndex={0}
              onKeyPress={e => {
                if (e.key === "Enter" || e.key === " ") {
                  window.location.href = "/";
                }
              }}
              aria-label="Go to homepage"
            >
              <img
                src={gearIcon}
                alt="Gear Icon"
                className="shrink-0 pt-[7px]"
              />
              <span className="ml-2 text-xl lg:text-2xl font-bold text-sky-700 leading-6">
                FilmGearHub
              </span>
            </div>
            <div className="flex items-center gap-6">
              <span className="text-muted-foreground text-base font-normal leading-6">
                Need help?
              </span>
              <a
                href="mailto:support@filmgearhub.com"
                className="text-sky-600 font-medium text-base leading-6 hover:text-sky-800 transition-colors no-underline"
              >
                Contact Support
              </a>
            </div>
          </div>
        </header>
  );
}


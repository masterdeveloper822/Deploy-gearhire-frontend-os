import React from "react";

import gearIcon from "@/public/assets/icons/gear_icon.svg";

export default function LoginHeader() {
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
            <div className="flex flex-col sm:flex-row items-end sm:items-center gap-1 sm:gap-6 mt-0 sm:mt-0 w-full sm:w-auto text-center sm:text-left">
              <span className="text-gray-500 text-base font-normal leading-6 pr-0 sm:pr-2.5">
                New to FilmGearHub?
              </span>
              <a
                href="/create-account"
                className="text-sky-600 font-medium text-base leading-6 hover:text-sky-800 transition-colors no-underline pr-0 sm:pr-4"
              >
                Sign Up
              </a>
            </div>
          </div>
        </header>
  );
}


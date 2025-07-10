import React from "react";
import {Link} from "react-router-dom";

import { Button } from "../ui/button";

import gearIcon from "@/public/assets/icons/gear_icon.svg";

export default function Header() {
  return (
        <header className="bg-white shadow-sm relative z-10 px-4 sm:px-8 lg:px-20 h-[74px]">
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
                  className="shrink-0 pt-2"
                />
                <span className="ml-2 text-xl lg:text-2xl font-bold text-sky-700 leading-6">
                  FilmGearHub
                </span>
              </div>
            <div className="flex items-center gap-4">
              <div className="flex items-center gap-4">
                <a
                  href="#how-it-works"
                  className="text-base font-normal leading-6 text-gray-700 hover:text-sky-700 transition-colors px-2"
                  onClick={e => {
                    if (window.location.pathname === "/") {
                      e.preventDefault();
                      const el = document.getElementById("how-it-works");
                      if (el) {
                        const y = el.getBoundingClientRect().top + window.pageYOffset - 74;
                        window.scrollTo({ top: y, behavior: "smooth" });
                      }
                    }
                  }}
                >
                  How It Works
                </a>
                <a
                  href="#benefits"
                  className="text-base font-normal leading-6 text-gray-700 hover:text-sky-700 transition-colors px-2"
                  onClick={e => {
                    if (window.location.pathname === "/") {
                      e.preventDefault();
                      const el = document.getElementById("benefits");
                      if (el) {
                        const y = el.getBoundingClientRect().top + window.pageYOffset - 74;
                        window.scrollTo({ top: y, behavior: "smooth" });
                      }
                    }
                  }}
                >
                  Benefits
                </a>
                <a
                  href="#waitlist"
                  className="text-base font-normal leading-6 text-gray-700 hover:text-sky-700 transition-colors px-2"
                  onClick={e => {
                    if (window.location.pathname === "/") {
                      e.preventDefault();
                      const el = document.getElementById("waitlist");
                      if (el) {
                        const y = el.getBoundingClientRect().top + window.pageYOffset - 74;
                        window.scrollTo({ top: y, behavior: "smooth" });
                      }
                    }
                  }}
                >
                  Waitlist
                </a>
              </div>
              <div className="flex items-center">
                <Link to="/login" style={{ textDecoration: "none" }}>
                  <Button
                    variant="outline"
                    className="h-[42px] px-4 py-2 rounded-lg border border-sky-600 text-sky-600 text-base font-normal leading-5 hover:bg-sky-50 transition-colors"
                  >
                    Log In
                  </Button>
                </Link>
                <Link to="/create-account" style={{ textDecoration: "none" }}>
                  <Button
                    className="h-[42px] ml-3 px-4 py-2 rounded-lg bg-sky-600 text-white text-base font-normal leading-5 hover:bg-sky-700 transition-colors"
                  >
                    Sign Up
                  </Button>
                </Link>
              </div>
              </div>
            </div>
        </header>
  );
}


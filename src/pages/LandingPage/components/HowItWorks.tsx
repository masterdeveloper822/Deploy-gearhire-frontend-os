import React from "react";
import { Card, CardContent } from "@/components/ui/card";

import searchIcon from "@/public/assets/icons/search.svg";
import homeIcon from "@/public/assets/icons/home.svg";
import peopleIcon from "@/public/assets/icons/people.svg";
import checkIcon from "@/public/assets/icons/check.svg";

export default function HowItWorks() {
  return (
    <section
      id="how-it-works"
      className="w-full relative bg-gray-50 z-10 flex flex-col items-center p-24"
    >
      <h1
        className="flex justify-center items-center text-3xl sm:text-4xl font-bold leading-tight text-gray-800 text-center mb-5"
        tabIndex={-1}
      >
        How FilmGearHub Works
      </h1>
      <div className="w-full flex flex-col items-center">
        <div className="w-full flex justify-center mb-16">
          <div className="flex justify-center items-center text-lg sm:text-xl font-normal leading-7 text-gray-600 text-center max-w-2xl">
            A streamlined platform connecting filmmakers with the equipment they
            need
          </div>
        </div>
        <div className="w-full flex flex-col md:flex-row gap-8 justify-center items-stretch">
          {/* For Renters */}
          <Card className="flex-1 min-w-72 rounded-xl border border-gray-100 shadow-lg flex flex-col items-start p-8 z-10 bg-gray-50">
            <div className="flex flex-col items-center w-full p-0 mb-5">
              <div className="w-16 h-16 bg-sky-100 rounded-full flex items-center justify-center mb-0 self-start">
                <div className="w-6 h-8 flex items-center justify-center">
                  <img src={searchIcon} alt="Search Icon" className="w-6 h-6" />
                </div>
              </div>
              <p className="text-2xl font-bold text-gray-900 mt-6 w-full text-left">
                For Renters
              </p>
            </div>
            <CardContent className="p-0 w-full">
              <ul className="space-y-4">
                <li className="flex items-start">
                  <img src={checkIcon} alt="Check Icon" className="inline-block mr-2 mt-1"/>
                  <span className="text-base text-gray-900">
                    Search for specific gear across multiple merchants
                  </span>
                </li>
                <li className="flex items-start">
                  <img src={checkIcon} alt="Check Icon" className="inline-block mr-2 mt-1"/>
                  <span className="text-base text-gray-900">
                    Post RFQs and receive competitive quotes
                  </span>
                </li>
                <li className="flex items-start">
                    <img src={checkIcon} alt="Check Icon" className="inline-block mr-2 mt-1"/>
                  <span className="text-base text-gray-900">
                    Build a network of trusted equipment suppliers
                  </span>
                </li>
              </ul>
            </CardContent>
          </Card>
          {/* For Merchants */}
          <Card className="flex-1 min-w-72 rounded-xl border border-gray-100 shadow-lg flex flex-col items-start p-8 z-10 bg-gray-50">
            <div className="flex flex-col items-center w-full p-0 mb-5">
              <div className="w-16 h-16 bg-sky-100 rounded-full flex items-center justify-center mb-0 self-start">
                <div className="w-7 h-8 flex items-center justify-center">
                  <img src={homeIcon} alt="Home Icon" className="w-7 h-6" />
                </div>
              </div>
              <p className="text-2xl font-bold text-gray-900 mt-6 w-full text-left">
                For Merchants
              </p>
            </div>
            <CardContent className="p-0 w-full">
              <ul className="space-y-4">
                <li className="flex items-start">
                  <img src={checkIcon} alt="Check Icon" className="inline-block mr-2 mt-1"/>
                  <span className="text-base text-gray-900">
                    Showcase your inventory to targeted audiences
                  </span>
                </li>
                <li className="flex items-start">
                  <img src={checkIcon} alt="Check Icon" className="inline-block mr-2 mt-1"/>
                  <span className="text-base text-gray-900">
                    Respond to RFQs and connect with new clients
                  </span>
                </li>
                <li className="flex items-start">
                  <img src={checkIcon} alt="Check Icon" className="inline-block mr-2 mt-1"/>
                  <span className="text-base text-gray-900">
                    Build your reputation through reviews and ratings
                  </span>
                </li>
              </ul>
            </CardContent>
          </Card>
          {/* Social Features */}
          <Card className="flex-1 min-w-72 rounded-xl border border-gray-100 shadow-lg flex flex-col items-start p-8 z-10 bg-gray-50">
            <div className="flex flex-col items-center w-full p-0 mb-5">
              <div className="w-16 h-16 bg-sky-100 rounded-full flex items-center justify-center mb-0 self-start">
                <div className="w-7 h-8 flex items-center justify-center">
                  <img src={peopleIcon} alt="People Icon" className="w-7 h-6" />
                </div>
              </div>
              <p className="text-2xl font-bold text-gray-900 mt-6 w-full text-left">
                Social Features
              </p>
            </div>
            <CardContent className="p-0 w-full">
              <ul className="space-y-4">
                <li className="flex items-start">
                  <img src={checkIcon} alt="Check Icon" className="inline-block mr-2 mt-1"/>
                  <span className="font-['Inter'] text-base text-gray-900">
                    Follow merchants and stay updated on new gear
                  </span>
                </li>
                <li className="flex items-start">
                  <img src={checkIcon} alt="Check Icon" className="inline-block mr-2 mt-1"/>
                  <span className="font-['Inter'] text-base text-gray-900">
                    Direct messaging for seamless communication
                  </span>
                </li>
                <li className="flex items-start">
                  <img src={checkIcon} alt="Check Icon" className="inline-block mr-2 mt-1"/>
                  <span className="font-['Inter'] text-base text-gray-900">
                    Review and rate your experiences to help others
                  </span>
                </li>
              </ul>
            </CardContent>
          </Card>
        </div>
      </div>
    </section>
  );
}
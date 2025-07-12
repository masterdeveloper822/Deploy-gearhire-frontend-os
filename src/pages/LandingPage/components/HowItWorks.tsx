import React from "react";
import { Card, CardContent } from "@/src/components/ui/card";

import searchIcon from "@/public/assets/icons/search.svg";
import homeIcon from "@/public/assets/icons/home.svg";
import peopleIcon from "@/public/assets/icons/people.svg";
import checkIcon from "@/public/assets/icons/check.svg";
import { Typography } from "@/src/components/ui/typography";
import { CardIcon } from "@/src/components/custom/cardHeaderIcon";

export default function HowItWorks() {
  return (
    <section
      id="how-it-works"
      className="w-full relative bg-gray-50 z-10 flex flex-col items-center p-6 md:p-24"
    >
      <Typography variant="h1" className="mb-3 md:mb-5">How FilmGearHub Works</Typography>
      <div className="w-full flex flex-col items-center">
        <div className="w-full flex justify-center mb-4 md:mb-16">
          <Typography variant="heroSub" className="max-w-2xl text-center">A streamlined platform connecting filmmakers with the equipment they
          need</Typography>
        </div>
        <div className="w-full flex flex-col md:flex-row gap-8 justify-center items-stretch">
          {/* For Renters */}
          <Card className="flex-1 min-w-72 rounded-xl border border-gray-100 shadow-lg flex flex-col items-start px-8 py-6 md:py-8 z-10 bg-gray-50">
            <div className="flex flex-col items-center w-full p-0 mb-3 md:mb-5">
              <div className="mb-0 self-start hidden md:block">
                <CardIcon src={searchIcon} alt="Search Icon" size={64} />
              </div>
              <div className="mb-2 self-start block md:hidden">
                <CardIcon src={searchIcon} alt="Search Icon" size={48} />
              </div>
              <Typography variant="h3" className="mt-0 md:mt-6 w-full text-left">For Renters</Typography>
            </div>
            <CardContent className="p-0 w-full">
              <ul className="space-y-2 md:space-y-4">
                <li className="flex items-start">
                  <img src={checkIcon} alt="Check Icon" className="inline-block mr-2 mt-1"/>
                  <Typography variant="body">
                    Search for specific gear across multiple merchants
                  </Typography>
                </li>
                <li className="flex items-start">
                  <img src={checkIcon} alt="Check Icon" className="inline-block mr-2 mt-1"/>
                  <Typography variant="body">
                    Post RFQs and receive competitive quotes
                  </Typography>
                </li>
                <li className="flex items-start">
                    <img src={checkIcon} alt="Check Icon" className="inline-block mr-2 mt-1"/>
                  <Typography variant="body">
                    Build a network of trusted equipment suppliers
                  </Typography>
                </li>
              </ul>
            </CardContent>
          </Card>
          {/* For Merchants */}
          <Card className="flex-1 min-w-72 rounded-xl border border-gray-100 shadow-lg flex flex-col items-start px-8 py-6 md:py-8 z-10 bg-gray-50">
            <div className="flex flex-col items-center w-full p-0 mb-3 md:mb-5">
              <div className="mb-0 self-start hidden md:block">
                <CardIcon src={homeIcon} alt="Home Icon" size={64} iconClassName="w-7 h-6" />
              </div>
              <div className="mb-2 self-start block md:hidden">
                <CardIcon src={homeIcon} alt="Home Icon" size={48} iconClassName="w-7 h-6" />
              </div>
              <Typography variant="h3" className="mt-0 md:mt-6 w-full text-left">
                For Merchants
              </Typography>
            </div>
            <CardContent className="p-0 w-full">
              <ul className="space-y-2 md:space-y-4">
                <li className="flex items-start">
                  <img src={checkIcon} alt="Check Icon" className="inline-block mr-2 mt-1"/>
                  <Typography variant="body">
                    Showcase your inventory to targeted audiences
                  </Typography>
                </li>
                <li className="flex items-start">
                  <img src={checkIcon} alt="Check Icon" className="inline-block mr-2 mt-1"/>
                  <Typography variant="body">
                    Respond to RFQs and connect with new clients
                  </Typography>
                </li>
                <li className="flex items-start">
                  <img src={checkIcon} alt="Check Icon" className="inline-block mr-2 mt-1"/>
                  <Typography variant="body">
                    Build your reputation through reviews and ratings
                  </Typography>
                </li>
              </ul>
            </CardContent>
          </Card>
          {/* Social Features */}
          <Card className="flex-1 min-w-72 rounded-xl border border-gray-100 shadow-lg flex flex-col items-start px-8 py-6 md:py-8 z-10 bg-gray-50">
            <div className="flex flex-col items-center w-full p-0 mb-3 md:mb-5">
              <div className="mb-0 self-start hidden md:block">
                <CardIcon src={peopleIcon} alt="People Icon" size={64} iconClassName="w-7 h-6" />
              </div>
              <div className="mb-2 self-start block md:hidden">
                <CardIcon src={peopleIcon} alt="People Icon" size={48} iconClassName="w-7 h-6" />
              </div>
              <Typography variant="h3" className="mt-0 md:mt-6 w-full text-left">
                Social Features
              </Typography>
            </div>
            <CardContent className="p-0 w-full">
              <ul className="space-y-2 md:space-y-4">
                <li className="flex items-start">
                  <img src={checkIcon} alt="Check Icon" className="inline-block mr-2 mt-1"/>
                  <Typography variant="body">
                    Follow merchants and stay updated on new gear
                  </Typography>
                </li>
                <li className="flex items-start">
                  <img src={checkIcon} alt="Check Icon" className="inline-block mr-2 mt-1"/>
                  <Typography variant="body">
                    Direct messaging for seamless communication
                  </Typography>
                </li>
                <li className="flex items-start">
                  <img src={checkIcon} alt="Check Icon" className="inline-block mr-2 mt-1"/>
                  <Typography variant="body">
                    Review and rate your experiences to help others
                  </Typography>
                </li>
              </ul>
            </CardContent>
          </Card>
        </div>
      </div>
    </section>
  );
}
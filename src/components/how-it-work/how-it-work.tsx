import React, { useEffect } from "react"

import { Card, CardContent, CardIcon } from "@/components/ui/card"
import { Typography } from "@/components/ui/typography"

import searchIcon from "@/assets/images/ui/icons/search.svg"
import homeIcon from "@/assets/images/ui/icons/home.svg"
import peopleIcon from "@/assets/images/ui/icons/people.svg"
import checkIcon from "@/assets/images/ui/icons/check.svg"

export default function HowItWork() {
  return (
    <section
      id="how-it-works"
      className="relative z-10 my-6 flex w-full flex-col items-center bg-gray-50 lg:my-10 xl:my-24"
    >
      <Typography variant="h1" className="mb-3 md:mb-5">
        How FilmGearHub Works
      </Typography>
      <div className="flex w-full flex-col items-center">
        <div className="mb-4 flex w-full justify-center md:mb-16">
          <Typography variant="heroSub" className="max-w-2xl text-center">
            A streamlined platform connecting filmmakers with the equipment they
            need
          </Typography>
        </div>
        <div className="flex w-full flex-col items-stretch justify-center gap-8 px-4 lg:flex-row">
          {/* For Renters */}
          <Card className="z-10 flex min-w-72 flex-1 flex-col items-start rounded-xl border border-gray-100 bg-gray-50 px-8 py-6 shadow-lg md:py-8">
            <div className="mb-3 flex w-full flex-col items-center p-0 md:mb-5">
              <div className="mb-0 hidden self-start md:block">
                <CardIcon src={searchIcon} alt="Search Icon" size={64} />
              </div>
              <div className="mb-2 block self-start md:hidden">
                <CardIcon src={searchIcon} alt="Search Icon" size={48} />
              </div>
              <Typography
                variant="h3"
                className="mt-0 w-full text-left md:mt-6"
              >
                For Renters
              </Typography>
            </div>
            <CardContent className="w-full p-0">
              <ul className="space-y-2 md:space-y-4">
                <li className="flex items-start">
                  <img
                    src={checkIcon}
                    alt="Check Icon"
                    className="mr-2 mt-1 inline-block"
                  />
                  <Typography variant="body">
                    Search for specific gear across multiple merchants
                  </Typography>
                </li>
                <li className="flex items-start">
                  <img
                    src={checkIcon}
                    alt="Check Icon"
                    className="mr-2 mt-1 inline-block"
                  />
                  <Typography variant="body">
                    Post RFQs and receive competitive quotes
                  </Typography>
                </li>
                <li className="flex items-start">
                  <img
                    src={checkIcon}
                    alt="Check Icon"
                    className="mr-2 mt-1 inline-block"
                  />
                  <Typography variant="body">
                    Build a network of trusted equipment suppliers
                  </Typography>
                </li>
              </ul>
            </CardContent>
          </Card>
          {/* For Merchants */}
          <Card className="z-10 flex min-w-72 flex-1 flex-col items-start rounded-xl border border-gray-100 bg-gray-50 px-8 py-6 shadow-lg md:py-8">
            <div className="mb-3 flex w-full flex-col items-center p-0 md:mb-5">
              <div className="mb-0 hidden self-start md:block">
                <CardIcon
                  src={homeIcon}
                  alt="Home Icon"
                  size={64}
                  iconClassName="w-7 h-6"
                />
              </div>
              <div className="mb-2 block self-start md:hidden">
                <CardIcon
                  src={homeIcon}
                  alt="Home Icon"
                  size={48}
                  iconClassName="w-7 h-6"
                />
              </div>
              <Typography
                variant="h3"
                className="mt-0 w-full text-left md:mt-6"
              >
                For Merchants
              </Typography>
            </div>
            <CardContent className="w-full p-0">
              <ul className="space-y-2 md:space-y-4">
                <li className="flex items-start">
                  <img
                    src={checkIcon}
                    alt="Check Icon"
                    className="mr-2 mt-1 inline-block"
                  />
                  <Typography variant="body">
                    Showcase your inventory to targeted audiences
                  </Typography>
                </li>
                <li className="flex items-start">
                  <img
                    src={checkIcon}
                    alt="Check Icon"
                    className="mr-2 mt-1 inline-block"
                  />
                  <Typography variant="body">
                    Respond to RFQs and connect with new clients
                  </Typography>
                </li>
                <li className="flex items-start">
                  <img
                    src={checkIcon}
                    alt="Check Icon"
                    className="mr-2 mt-1 inline-block"
                  />
                  <Typography variant="body">
                    Build your reputation through reviews and ratings
                  </Typography>
                </li>
              </ul>
            </CardContent>
          </Card>
          {/* Social Features */}
          <Card className="z-10 flex min-w-72 flex-1 flex-col items-start rounded-xl border border-gray-100 bg-gray-50 px-8 py-6 shadow-lg md:py-8">
            <div className="mb-3 flex w-full flex-col items-center p-0 md:mb-5">
              <div className="mb-0 hidden self-start md:block">
                <CardIcon
                  src={peopleIcon}
                  alt="People Icon"
                  size={64}
                  iconClassName="w-7 h-6"
                />
              </div>
              <div className="mb-2 block self-start md:hidden">
                <CardIcon
                  src={peopleIcon}
                  alt="People Icon"
                  size={48}
                  iconClassName="w-7 h-6"
                />
              </div>
              <Typography
                variant="h3"
                className="mt-0 w-full text-left md:mt-6"
              >
                Social Features
              </Typography>
            </div>
            <CardContent className="w-full p-0">
              <ul className="space-y-2 md:space-y-4">
                <li className="flex items-start">
                  <img
                    src={checkIcon}
                    alt="Check Icon"
                    className="mr-2 mt-1 inline-block"
                  />
                  <Typography variant="body">
                    Follow merchants and stay updated on new gear
                  </Typography>
                </li>
                <li className="flex items-start">
                  <img
                    src={checkIcon}
                    alt="Check Icon"
                    className="mr-2 mt-1 inline-block"
                  />
                  <Typography variant="body">
                    Direct messaging for seamless communication
                  </Typography>
                </li>
                <li className="flex items-start">
                  <img
                    src={checkIcon}
                    alt="Check Icon"
                    className="mr-2 mt-1 inline-block"
                  />
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
  )
}

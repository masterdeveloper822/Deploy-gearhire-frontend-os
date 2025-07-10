import React from "react";
import { Card, CardHeader, CardTitle, CardContent } from "@/src/components/ui/card";

export default function HowItWorks() {
  return (
    <section
      id="how-it-works"
      className="w-full relative bg-gray-50 z-10 pt-20 pb-20 px-4 flex flex-col items-center"
    >
      <h1
        className="flex justify-center items-center text-3xl sm:text-4xl font-bold leading-tight text-gray-800 text-center mb-5"
        tabIndex={-1}
      >
        How FilmGearHub Works
      </h1>
      <div className="w-full max-w-6xl mx-auto flex flex-col items-center mx-[80px]">
        <div className="w-full flex justify-center mb-16">
          <div className="flex justify-center items-center text-lg sm:text-xl font-normal leading-7 text-gray-600 text-center max-w-2xl">
            A streamlined platform connecting filmmakers with the equipment they
            need
          </div>
        </div>
        <div className="w-full flex flex-col md:flex-row gap-8 justify-center items-stretch">
          {/* For Renters */}
          <Card className="flex-1 min-w-[300px] max-w-sm rounded-xl border border-[#f3f4f6] shadow-lg flex flex-col items-start p-8 z-10 bg-gray-50">
            <div className="flex flex-col items-center w-full p-0 mb-[17.96px]">
              <div className="w-16 h-16 bg-[#e0f2fe] rounded-full flex items-center justify-center mb-0 self-start">
                <div className="w-6 h-8 flex items-center justify-center">
                  <div className="w-6 h-6 bg-[url(https://codia-f2c.s3.us-west-1.amazonaws.com/image/2025-07-07/OU1KBkpeDz.png)] bg-cover bg-no-repeat" />
                </div>
              </div>
              <p className="text-2xl font-bold text-[#1f2937] mt-[22px] w-full text-left">
                For Renters
              </p>
            </div>
            <CardContent className="p-0 w-full">
              <ul className="space-y-4">
                <li className="flex items-start">
                  <span className="inline-block w-3.5 h-4 mr-2 mt-1">
                    <span className="block w-3.5 h-4 bg-[url(https://codia-f2c.s3.us-west-1.amazonaws.com/image/2025-07-07/F1aeJ2LjY2.png)] bg-cover bg-no-repeat" />
                  </span>
                  <span className="font-['Inter'] text-base text-[#1f2937]">
                    Search for specific gear across multiple merchants
                  </span>
                </li>
                <li className="flex items-start">
                  <span className="inline-block w-3.5 h-4 mr-2 mt-1">
                    <span className="block w-3.5 h-4 bg-[url(https://codia-f2c.s3.us-west-1.amazonaws.com/image/2025-07-07/csg0thPs9y.png)] bg-cover bg-no-repeat" />
                  </span>
                  <span className="font-['Inter'] text-base text-[#1f2937]">
                    Post RFQs and receive competitive quotes
                  </span>
                </li>
                <li className="flex items-start">
                  <span className="inline-block w-3.5 h-4 mr-2 mt-1">
                    <span className="block w-3.5 h-4 bg-[url(https://codia-f2c.s3.us-west-1.amazonaws.com/image/2025-07-07/Ehoe4ZbfLo.png)] bg-cover bg-no-repeat" />
                  </span>
                  <span className="font-['Inter'] text-base text-[#1f2937]">
                    Build a network of trusted equipment suppliers
                  </span>
                </li>
              </ul>
            </CardContent>
          </Card>
          {/* For Merchants */}
          <Card className="flex-1 min-w-[300px] max-w-sm rounded-xl border border-[#f3f4f6] shadow-lg flex flex-col items-start p-8 z-10 bg-gray-50">
            <div className="flex flex-col items-center w-full p-0 mb-8">
              <div className="w-16 h-16 bg-[#e0f2fe] rounded-full flex items-center justify-center mb-0">
                <div className="w-[27px] h-8 flex items-center justify-center">
                  <div className="w-[27px] h-6 bg-[url(https://codia-f2c.s3.us-west-1.amazonaws.com/image/2025-07-07/SDFhTcE3UQ.png)] bg-cover bg-no-repeat" />
                </div>
              </div>
              <p className="font-['Inter'] text-2xl font-bold text-[#1f2937] mt-8 mb-6 w-full text-left">
                For Merchants
              </p>
            </div>
            <CardContent className="p-0 w-full">
              <ul className="space-y-4">
                <li className="flex items-start">
                  <span className="inline-block w-3.5 h-4 mr-2 mt-1">
                    <span className="block w-3.5 h-4 bg-[url(https://codia-f2c.s3.us-west-1.amazonaws.com/image/2025-07-07/sm3Ps1Zkge.png)] bg-cover bg-no-repeat" />
                  </span>
                  <span className="font-['Inter'] text-base text-[#1f2937]">
                    Showcase your inventory to targeted audiences
                  </span>
                </li>
                <li className="flex items-start">
                  <span className="inline-block w-3.5 h-4 mr-2 mt-1">
                    <span className="block w-3.5 h-4 bg-[url(https://codia-f2c.s3.us-west-1.amazonaws.com/image/2025-07-07/DmnrGeOg7i.png)] bg-cover bg-no-repeat" />
                  </span>
                  <span className="font-['Inter'] text-base text-[#1f2937]">
                    Respond to RFQs and connect with new clients
                  </span>
                </li>
                <li className="flex items-start">
                  <span className="inline-block w-3.5 h-4 mr-2 mt-1">
                    <span className="block w-3.5 h-4 bg-[url(https://codia-f2c.s3.us-west-1.amazonaws.com/image/2025-07-07/tXdyaNqvRy.png)] bg-cover bg-no-repeat" />
                  </span>
                  <span className="font-['Inter'] text-base text-[#1f2937]">
                    Build your reputation through reviews and ratings
                  </span>
                </li>
              </ul>
            </CardContent>
          </Card>
          {/* Social Features */}
          <Card className="flex-1 min-w-[300px] max-w-sm rounded-xl border border-[#f3f4f6] shadow-lg flex flex-col items-start p-8 z-10 bg-gray-50">
            <CardHeader className="flex flex-col items-center w-full p-0 mb-8">
              <div className="w-16 h-16 bg-[#e0f2fe] rounded-full flex items-center justify-center mb-0">
                <div className="w-[30px] h-8 flex items-center justify-center">
                  <div className="w-[30px] h-6 bg-[url(https://codia-f2c.s3.us-west-1.amazonaws.com/image/2025-07-07/5BVKOAHZkd.png)] bg-cover bg-no-repeat" />
                </div>
              </div>
              <CardTitle className="font-['Inter'] text-2xl font-bold text-[#1f2937] mt-8 mb-6 w-full text-left">
                Social Features
              </CardTitle>
            </CardHeader>
            <CardContent className="p-0 w-full">
              <ul className="space-y-4">
                <li className="flex items-start">
                  <span className="inline-block w-3.5 h-4 mr-2 mt-1">
                    <span className="block w-3.5 h-4 bg-[url(https://codia-f2c.s3.us-west-1.amazonaws.com/image/2025-07-07/bzwYRvSw1t.png)] bg-cover bg-no-repeat" />
                  </span>
                  <span className="font-['Inter'] text-base text-[#1f2937]">
                    Follow merchants and stay updated on new gear
                  </span>
                </li>
                <li className="flex items-start">
                  <span className="inline-block w-3.5 h-4 mr-2 mt-1">
                    <span className="block w-3.5 h-4 bg-[url(https://codia-f2c.s3.us-west-1.amazonaws.com/image/2025-07-07/mChK0PtAJo.png)] bg-cover bg-no-repeat" />
                  </span>
                  <span className="font-['Inter'] text-base text-[#1f2937]">
                    Direct messaging for seamless communication
                  </span>
                </li>
                <li className="flex items-start">
                  <span className="inline-block w-3.5 h-4 mr-2 mt-1">
                    <span className="block w-3.5 h-4 bg-[url(https://codia-f2c.s3.us-west-1.amazonaws.com/image/2025-07-07/4gA96jWyKR.png)] bg-cover bg-no-repeat" />
                  </span>
                  <span className="font-['Inter'] text-base text-[#1f2937]">
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
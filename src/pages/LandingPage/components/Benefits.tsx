import React from "react";
import { Card, CardHeader, CardTitle, CardContent } from "@/components/ui/card";

import cameraIcon from "@/public/assets/icons/camera.svg";
import homeIcon from "@/public/assets/icons/home.svg";
import moneyIcon from "@/public/assets/icons/money.svg";
import worldIcon from "@/public/assets/icons/world.svg";
import starIcon from "@/public/assets/icons/star.svg";
import networkIcon from "@/public/assets/icons/network.svg";
import speakerIcon from "@/public/assets/icons/speaker.svg";
import graphIcon from "@/public/assets/icons/graph.svg";

export default function Benefits() {
  return (
    <div id="benefits" className="bg-gray-50 relative z-[80] mx-0 mb-0">
      <div className="flex flex-col items-center py-24 px-24">
        <span className="text-3xl md:text-4xl font-bold leading-10 text-gray-900 text-center mb-5">
          Why Choose FilmGearHub
        </span>
        <span className="text-lg font-normal leading-7 text-gray-600 text-center mb-16">
          Designed specifically for the film production industry
        </span>
        <div className="flex flex-col md:flex-row gap-8 w-full">
          {/* Filmmakers & Crews Card */}
          <Card className="flex-1 bg-white rounded-xl shadow-lg flex flex-col p-0">
            <CardHeader className="flex flex-row items-center gap-4 p-8 pb-0">
              <div className="bg-sky-100 rounded-full flex items-center justify-center w-12 h-12">
                <img src={cameraIcon} alt="Camera Icon" className="w-6 h-6" />
              </div>
              <CardTitle className="text-2xl font-bold leading-8 text-gray-900">
                For Filmmakers & Crews
              </CardTitle>
            </CardHeader>
            <CardContent className="flex flex-col gap-6 p-8 pt-6">
              <div className="flex items-start">
                <img src={moneyIcon} alt="Money Icon" className="w-5 h-5 mr-4 mt-1" />
                <div>
                  <span className="block text-lg font-semibold leading-7 text-gray-900">
                    No Payments, Just Connections
                  </span>
                  <span className="block text-base font-normal leading-6 text-gray-600 mt-1">
                    Connect directly with merchants without platform fees or commissions.
                  </span>
                </div>
              </div>
              <div className="flex items-start">
                <img src={worldIcon} alt="World Icon" className="w-5 h-5 mr-4 mt-1" />
                <div>
                  <span className="block text-lg font-semibold leading-7 text-gray-900">
                    Broader Equipment Access
                  </span>
                  <span className="block text-base font-normal leading-6 text-gray-600 mt-1">
                    Discover specialized equipment that might not be listed on traditional rental platforms.
                  </span>
                </div>
              </div>
              <div className="flex items-start">
                <img src={starIcon} alt="Star Icon" className="w-5 h-5 mr-4 mt-1" />
                <div>
                  <span className="block text-lg font-semibold leading-7 text-gray-900">
                    Vetted Merchant Network
                  </span>
                  <span className="block text-base font-normal leading-6 text-gray-600 mt-1">
                    Work with merchants who have been reviewed by other industry professionals.
                  </span>
                </div>
              </div>
            </CardContent>
          </Card>
          {/* Equipment Merchants Card */}
          <Card className="flex-1 bg-white rounded-xl shadow-lg flex flex-col p-0">
            <CardHeader className="flex flex-row items-center gap-4 p-8 pb-0">
              <div className="bg-sky-100 rounded-full flex items-center justify-center w-12 h-12">
                <img src={homeIcon} alt="Home Icon" className="w-6 h-6" />
              </div>
              <CardTitle className="text-2xl font-bold leading-8 text-gray-900">
                For Equipment Merchants
              </CardTitle>
            </CardHeader>
            <CardContent className="flex flex-col gap-6 p-8 pt-6">
              <div className="flex items-start">
                <img src={networkIcon} alt="Network Icon" className="w-5 h-5 mr-4 mt-1" />
                <div>
                  <span className="block text-lg font-semibold leading-7 text-gray-900">
                    Build Your Network
                  </span>
                  <span className="block text-base font-normal leading-6 text-gray-600 mt-1">
                    Connect with production crews and establish long-term business relationships.
                  </span>
                </div>
              </div>
              <div className="flex items-start">
                <img src={speakerIcon} alt="Speaker Icon" className="w-5 h-5 mr-4 mt-1" />
                <div>
                  <span className="block text-lg font-semibold leading-7 text-gray-900">
                    Enhanced Visibility
                  </span>
                  <span className="block text-base font-normal leading-6 text-gray-600 mt-1">
                    Showcase your inventory to a targeted audience of filmmakers looking for equipment.
                  </span>
                </div>
              </div>
              <div className="flex items-start">
                <img src={graphIcon} alt="Graph Icon" className="w-5 h-5 mr-4 mt-1" />
                <div>
                  <span className="block text-lg font-semibold leading-7 text-gray-900">
                    Business Growth
                  </span>
                  <span className="block text-base font-normal leading-6 text-gray-600 mt-1">
                    Expand your client base and increase equipment utilization rates.
                  </span>
                </div>
              </div>
            </CardContent>
          </Card>
        </div>
      </div>
    </div>
  );
}
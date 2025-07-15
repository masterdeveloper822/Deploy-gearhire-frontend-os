import React from "react";

import {
  Card,
  CardHeader,
  CardTitle,
  CardContent,
  CardIcon,
} from "@/components/ui/card";
import { Typography } from "@/components/ui/typography";

import cameraIcon from "@/assets/images/ui/icons/camera.svg";
import homeIcon from "@/assets/images/ui/icons/home.svg";
import moneyIcon from "@/assets/images/ui/icons/money.svg";
import worldIcon from "@/assets/images/ui/icons/world.svg";
import starIcon from "@/assets/images/ui/icons/star.svg";
import networkIcon from "@/assets/images/ui/icons/network.svg";
import speakerIcon from "@/assets/images/ui/icons/speaker.svg";
import graphIcon from "@/assets/images/ui/icons/graph.svg";

export default function Benefit() {
  return (
    <div id="benefits" className="bg-gray-50 relative z-[80] mx-0 mb-0">
      <div className="flex flex-col items-center p-6">
        <Typography
          variant="h1"
          className="leading-10 text-center mb-3 md:mb-5"
        >
          Why Choose FilmGearHub
        </Typography>
        <Typography variant="heroSub" className="text-center mb-4 md:mb-16">
          Designed specifically for the film production industry
        </Typography>
        <div className="flex flex-col md:flex-row gap-8 w-full">
          {/* Filmmakers & Crews Card */}
          <Card className="flex-1 bg-white rounded-xl shadow-lg flex flex-col p-0">
            <CardHeader className="flex flex-row items-center gap-4 py-8 px-6 md:px-8 pb-0">
              <CardIcon src={cameraIcon} alt="Camera Icon" size={48} />
              <CardTitle>
                <Typography variant="h3">For Filmmakers & Crews</Typography>
              </CardTitle>
            </CardHeader>
            <CardContent className="flex flex-col gap-6 p-8 pt-6">
              <div className="flex items-start">
                <img
                  src={moneyIcon}
                  alt="Money Icon"
                  className="w-5 h-5 mr-4 mt-1"
                />
                <div>
                  <Typography variant="cardSubTitle">
                    No Payments, Just Connections
                  </Typography>
                  <Typography variant="cardBody" className="block mt-1">
                    Connect directly with merchants without platform fees or
                    commissions.
                  </Typography>
                </div>
              </div>
              <div className="flex items-start">
                <img
                  src={worldIcon}
                  alt="World Icon"
                  className="w-5 h-5 mr-4 mt-1"
                />
                <div>
                  <Typography variant="cardSubTitle">
                    Broader Equipment Access
                  </Typography>
                  <Typography variant="cardBody" className="block mt-1">
                    Discover specialized equipment that might not be listed on
                    traditional rental platforms.
                  </Typography>
                </div>
              </div>
              <div className="flex items-start">
                <img
                  src={starIcon}
                  alt="Star Icon"
                  className="w-5 h-5 mr-4 mt-1"
                />
                <div>
                  <Typography variant="cardSubTitle">
                    Vetted Merchant Network
                  </Typography>
                  <Typography variant="cardBody" className="block mt-1">
                    Work with merchants who have been reviewed by other industry
                    professionals.
                  </Typography>
                </div>
              </div>
            </CardContent>
          </Card>
          {/* Equipment Merchants Card */}
          <Card className="flex-1 bg-white rounded-xl shadow-lg flex flex-col p-0">
            <CardHeader className="flex flex-row items-center gap-4 py-8 px-6 md:px-8 pb-0">
              <CardIcon src={homeIcon} alt="Home Icon" size={48} />
              <CardTitle>
                <Typography variant="h3">For Equipment Merchants</Typography>
              </CardTitle>
            </CardHeader>
            <CardContent className="flex flex-col gap-6 p-8 pt-6">
              <div className="flex items-start">
                <img
                  src={networkIcon}
                  alt="Network Icon"
                  className="w-5 h-5 mr-4 mt-1"
                />
                <div>
                  <Typography variant="cardSubTitle">
                    Build Your Network
                  </Typography>
                  <Typography variant="cardBody" className="block mt-1">
                    Connect with production crews and establish long-term
                    business relationships.
                  </Typography>
                </div>
              </div>
              <div className="flex items-start">
                <img
                  src={speakerIcon}
                  alt="Speaker Icon"
                  className="w-5 h-5 mr-4 mt-1"
                />
                <div>
                  <Typography variant="cardSubTitle">
                    Enhanced Visibility
                  </Typography>
                  <Typography variant="cardBody" className="block mt-1">
                    Showcase your inventory to a targeted audience of filmmakers
                    looking for equipment.
                  </Typography>
                </div>
              </div>
              <div className="flex items-start">
                <img
                  src={graphIcon}
                  alt="Graph Icon"
                  className="w-5 h-5 mr-4 mt-1"
                />
                <div>
                  <Typography variant="cardSubTitle">
                    Business Growth
                  </Typography>
                  <Typography variant="cardBody" className="block mt-1">
                    Expand your client base and increase equipment utilization
                    rates.
                  </Typography>
                </div>
              </div>
            </CardContent>
          </Card>
        </div>
      </div>
    </div>
  );
}

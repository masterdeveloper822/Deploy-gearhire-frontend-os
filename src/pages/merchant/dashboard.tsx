import React from "react";

import { Typography } from "@/components/ui/typography";
import { Card } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { RecentActivityCard } from "@/components/ui/card";
import { MerchantHeader } from "@/components/layout/header/merchant-header";

// Figma image assets
const imgFrame =
  "http://localhost:3845/assets/ed4e1169b638e2e838350960320b53c878e45615.svg";
const imgFrame3 =
  "http://localhost:3845/assets/fe78f47cee056f7c1e4da9ef1369e247daf9bdd9.svg";
const imgFrame4 =
  "http://localhost:3845/assets/d610c794e0934493cb23c041b0fe7fe2d768505e.svg";
const imgFrame5 =
  "http://localhost:3845/assets/77ca1e3fa0656777303fbaeb5bd14e35c913d021.svg";
const imgFrame6 =
  "http://localhost:3845/assets/04a1414121a05ee827326ca429ad2c8b4e359e3f.svg";
const imgFrame7 =
  "http://localhost:3845/assets/3d1f1c94bc4cc3cb4c118e0be60cd438bd83c560.svg";
const imgFrame8 =
  "http://localhost:3845/assets/229ba2971361b2bf735f5e0cd6364707b77b9723.svg";
const imgFrame9 =
  "http://localhost:3845/assets/ca64e7fdf51fe8776e021df1937d9fa8931aee9d.svg";
const imgImg1 =
  "http://localhost:3845/assets/ec901f1c0d6bdc3abb3b7f2578c96a444ee001e2.png";
const imgImg2 =
  "http://localhost:3845/assets/bec21fc75386a86210d32bec8ca98fcb2380d21e.png";
const imgImg3 =
  "http://localhost:3845/assets/93261e682a4fc24925831eb042e025379dab45ab.png";

const MerchantDashboard: React.FC = () => {
  return (
    <div className="min-h-screen bg-gray-50">
      {/* Header */}
      <MerchantHeader />

      {/* Main Content */}
      <main className="max-w-[1280px] mx-auto px-4 py-8">
        {/* Welcome Section */}
        <div className="flex flex-col md:flex-row md:items-center md:justify-between gap-4 mb-8">
          <div>
            <div className="pb-4">
              <Typography
                variant="h1"
                className="text-[30px] text-gray-800 mb-1"
              >
                Welcome back, ProGear Studios
              </Typography>
            </div>
            <div>
              <Typography variant="body" className="text-gray-600">
                Manage your equipment listings and connect with renters
              </Typography>
            </div>
          </div>
          <div className="flex items-center bg-green-100 rounded-full px-4 py-2 gap-2">
            <img src={imgFrame3} alt="Verified" className="w-5 h-5" />
            <span className="text-green-800 text-base font-medium">
              Verified Merchant
            </span>
          </div>
        </div>

        {/* Main grid: Quick Access (left) + Sidebar (right) */}
        <div className="flex flex-col lg:flex-row gap-8 mb-8">
          {/* Quick Access Cards */}
          <div className="flex-1 flex-col">
            <div className="mb-6">
              <Typography
                variant="heroSub"
                className="font-semibold text-gray-900"
              >
                Quick Access
              </Typography>
            </div>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
              {/* My Inventory */}
              <Card className="rounded-xl shadow p-6 flex flex-col gap-4">
                <div className="flex items-center gap-4">
                  <div className="bg-sky-100 rounded-lg w-12 h-12 flex items-center justify-center">
                    <img src={imgFrame4} alt="Inventory" className="w-6 h-6" />
                  </div>
                  <div className="flex-1 text-right">
                    <div className="text-2xl font-bold text-gray-800">24</div>
                  </div>
                </div>
                <div>
                  <Typography variant="cardSubTitle">My Inventory</Typography>
                  <div className="text-sm text-gray-600">
                    Manage your equipment listings
                  </div>
                </div>
              </Card>
              {/* RFQs Submitted */}
              <Card className="rounded-xl shadow p-6 flex flex-col gap-4">
                <div className="flex items-center gap-4">
                  <div className="bg-blue-100 rounded-lg w-12 h-12 flex items-center justify-center">
                    <img src={imgFrame5} alt="RFQs" className="w-6 h-6" />
                  </div>
                  <div className="flex-1 text-right">
                    <div className="text-2xl font-bold text-gray-800">8</div>
                  </div>
                </div>
                <div>
                  <Typography variant="cardSubTitle">RFQs Submitted</Typography>
                  <div className="text-sm text-gray-600">
                    View and respond to requests
                  </div>
                </div>
              </Card>
              {/* Reviews Received */}
              <Card className="rounded-xl shadow p-6 flex flex-col gap-4">
                <div className="flex items-center gap-4">
                  <div className="bg-yellow-100 rounded-lg w-12 h-12 flex items-center justify-center">
                    <img src={imgFrame6} alt="Reviews" className="w-6 h-6" />
                  </div>
                  <div className="flex-1 text-right">
                    <div className="text-2xl font-bold text-gray-800">4.8</div>
                  </div>
                </div>
                <div>
                  <Typography variant="cardSubTitle">
                    Reviews Received
                  </Typography>
                  <div className="text-sm text-gray-600">12 reviews</div>
                </div>
              </Card>
              {/* My Training Courses */}
              <Card className="rounded-xl shadow p-6 flex flex-col gap-4">
                <div className="flex items-center gap-4">
                  <div className="bg-green-100 rounded-lg w-12 h-12 flex items-center justify-center">
                    <img src={imgFrame7} alt="Courses" className="w-6 h-6" />
                  </div>
                  <div className="flex-1 text-right">
                    <div className="text-2xl font-bold text-gray-800">5</div>
                  </div>
                </div>
                <div>
                  <Typography variant="cardSubTitle">
                    My Training Courses
                  </Typography>
                  <div className="text-sm text-gray-600">
                    Manage your listed courses
                  </div>
                </div>
              </Card>
            </div>
          </div>

          {/* Sidebar */}
          <div className="w-full lg:w-[400px] flex flex-col gap-6">
            {/* Subscription Status */}
            <Card className="rounded-xl shadow p-6 flex flex-col gap-4">
              <Typography variant="h3" className="text-[18px] text-gray-800">
                Subscription Status
              </Typography>
              <div className="flex items-center gap-2">
                <span className="inline-block w-3 h-3 rounded-full bg-green-500" />
                <span className="text-gray-800 text-base font-medium">
                  Pro Plan Active
                </span>
              </div>
              <div className="text-sm text-gray-600">
                Next billing: Jan 15, 2025
              </div>
              <Button
                variant="tertiary"
                size="lg"
                className="text-white rounded-lg w-full mt-2"
              >
                Manage Subscription
              </Button>
            </Card>
            {/* This Month Stats */}
            <Card className="rounded-xl shadow p-6 flex flex-col gap-4">
              <Typography variant="h3" className="text-[18px] text-gray-800">
                This Month
              </Typography>
              <div className="flex flex-col gap-2">
                <div className="flex items-center justify-between">
                  <span className="text-gray-600">Profile Views</span>
                  <span className="text-gray-800 font-semibold">156</span>
                </div>
                <div className="flex items-center justify-between">
                  <span className="text-gray-600">New Followers</span>
                  <span className="text-gray-800 font-semibold">12</span>
                </div>
                <div className="flex items-center justify-between">
                  <span className="text-gray-600">RFQ Responses</span>
                  <span className="text-gray-800 font-semibold">8</span>
                </div>
              </div>
            </Card>
          </div>
        </div>

        {/* Recent Activity */}
        <Card className="bg-white rounded-xl shadow-sm p-0 mb-8">
          <div className="flex items-center justify-between px-6 py-6">
            <Typography
              variant="h2"
              className="text-lg font-semibold text-gray-900"
            >
              Recent Activity
            </Typography>
            <Button
              variant="ghost"
              className="text-sky-600 hover:bg-white font-medium px-3 py-1 rounded transition"
            >
              View Full Newsfeed
            </Button>
          </div>
          <div className="px-6 pb-2">
            {/* Activity Card 1 */}
            <RecentActivityCard
              avatar={imgImg1}
              name="Sarah Chen"
              time="2 hours ago"
              message="Looking for RED cameras for a 3-day shoot in downtown LA. Any recommendations?"
              commentsCount={12}
              likesCount={3}
              commentsIcon={imgFrame8}
              likesIcon={imgFrame9}
            />
            {/* Activity Card 2 */}
            <RecentActivityCard
              avatar={imgImg2}
              name="Mike Rodriguez"
              time="4 hours ago"
              message="Just added new Arri lighting kit to my inventory! Perfect for studio setups."
              commentsCount={8}
              likesCount={1}
              commentsIcon={imgFrame8}
              likesIcon={imgFrame9}
            />
            {/* Activity Card 3 */}
            <RecentActivityCard
              avatar={imgImg2}
              name="Emma Watson"
              time="6 hours ago"
              message="Thanks to everyone who helped with our documentary project! Great community here."
              commentsCount={24}
              likesCount={7}
              commentsIcon={imgFrame8}
              likesIcon={imgFrame9}
            />
          </div>
        </Card>
      </main>
    </div>
  );
};

export { MerchantDashboard };

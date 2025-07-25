import React from "react"

import { Typography } from "@/components/ui/typography"
import { Card } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { RecentActivityCard } from "@/components/ui/card"
import { Link, useNavigate } from "react-router-dom"
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"
import { faBoxesStacked, faClipboardList, faComment, faGraduationCap, faHeart, faStar } from "@fortawesome/free-solid-svg-icons"
import woman1 from "@/assets/images/avatars/woman1.png"
import man3 from "@/assets/images/avatars/man3.png"
import woman2 from "@/assets/images/avatars/woman2.png"
import { AuthHeader } from "@/components/layout/header/auth-header"

const imgFrame6 =
  "http://localhost:3845/assets/04a1414121a05ee827326ca429ad2c8b4e359e3f.svg"
const imgFrame7 =
  "http://localhost:3845/assets/3d1f1c94bc4cc3cb4c118e0be60cd438bd83c560.svg"
const imgFrame8 =
  "http://localhost:3845/assets/229ba2971361b2bf735f5e0cd6364707b77b9723.svg"
const imgFrame9 =
  "http://localhost:3845/assets/ca64e7fdf51fe8776e021df1937d9fa8931aee9d.svg"
const imgImg1 =
  "http://localhost:3845/assets/ec901f1c0d6bdc3abb3b7f2578c96a444ee001e2.png"
const imgImg2 =
  "http://localhost:3845/assets/bec21fc75386a86210d32bec8ca98fcb2380d21e.png"

const MerchantDashboard: React.FC = () => {
  const navigate = useNavigate()
  return (
    <div className="min-h-screen bg-gray-50">
      {/* Header */}
      <AuthHeader />

      {/* Main Content */}
      <main className="mx-auto max-w-[1280px] px-4 py-8">
        {/* Welcome Section */}
        <div className="mb-8 flex flex-col gap-4 md:flex-row md:items-center md:justify-between">
          <div>
            <div className="pb-4">
              <Typography
                variant="h1"
                className="mb-1 text-[30px] text-gray-800"
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
          <div className="flex items-center gap-2 rounded-full bg-green-100 px-4 py-2">
            <span
              style={{
                display: "inline-flex",
                alignItems: "center",
                justifyContent: "center",
                width: 16,
                height: 16,
                borderRadius: "50%",
                backgroundColor: "#166534",
              }}
            >
              <svg
                width="12"
                height="12"
                viewBox="0 0 12 12"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  d="M3 6.5L5.5 9L9 4.5"
                  stroke="white"
                  strokeWidth="2"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                />
              </svg>
            </span>
            <span className="text-base font-medium text-green-800">
              Verified Merchant
            </span>
          </div>
        </div>

        {/* Main grid: Quick Access (left) + Sidebar (right) */}
        <div className="mb-8 flex flex-col gap-8 lg:flex-row">
          {/* Quick Access Cards */}
          <div className="flex-1 flex-col">
            <div className="mb-8">
              <Typography
                variant="heroSub"
                className="font-semibold text-gray-900"
              >
                Quick Access
              </Typography>
            </div>
            <div className="grid grid-cols-1 gap-6 sm:grid-cols-2">
              {/* My Inventory */}
              <Link to="/merchant-inventory-book">
                <Card className="flex cursor-pointer flex-col gap-4 rounded-xl p-6 shadow transition hover:scale-[1.02] hover:shadow-lg focus:outline-none focus:ring-2 focus:ring-tertiary active:scale-95">
                  <div className="flex items-center gap-4">
                    <div className="flex h-12 w-12 items-center justify-center rounded-lg bg-sky-100">
                      <FontAwesomeIcon icon={faBoxesStacked} className="h-6 w-6 text-tertiary" />
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
              </Link>
              {/* RFQs Submitted */}
              <Link to="/browse-RFQs">
                <Card className="flex cursor-pointer flex-col gap-4 rounded-xl p-6 shadow transition hover:scale-[1.02] hover:shadow-lg focus:outline-none focus:ring-2 focus:ring-tertiary active:scale-95">
                  <div className="flex items-center gap-4">
                    <div className="flex h-12 w-12 items-center justify-center rounded-lg bg-blue-100">
                      <FontAwesomeIcon icon={faClipboardList} className="h-6 w-6 text-colored-blue" />
                    </div>
                    <div className="flex-1 text-right">
                      <div className="text-2xl font-bold text-gray-800">8</div>
                    </div>
                  </div>
                  <div>
                    <Typography variant="cardSubTitle">
                      RFQs Submitted
                    </Typography>
                    <div className="text-sm text-gray-600">
                      View and respond to requests
                    </div>
                  </div>
                </Card>
              </Link>
              {/* Reviews Received */}
              <Link to="/merchant-review">
                <Card className="flex cursor-pointer flex-col gap-4 rounded-xl p-6 shadow transition hover:scale-[1.02] hover:shadow-lg focus:outline-none focus:ring-2 focus:ring-tertiary active:scale-95">
                  <div className="flex items-center gap-4">
                    <div className="flex h-12 w-12 items-center justify-center rounded-lg bg-yellow-100">
                      <FontAwesomeIcon icon={faStar} className="h-6 w-6 text-yellow-500" />
                    </div>
                    <div className="flex-1 text-right">
                      <div className="text-2xl font-bold text-gray-800">
                        4.8
                      </div>
                    </div>
                  </div>
                  <div>
                    <Typography variant="cardSubTitle">
                      Reviews Received
                    </Typography>
                    <div className="text-sm text-gray-600">12 reviews</div>
                  </div>
                </Card>
              </Link>
              {/* My Training Courses */}
              <Link to="/training-course-list">
                <Card className="flex cursor-pointer flex-col gap-4 rounded-xl p-6 shadow transition hover:scale-[1.02] hover:shadow-lg focus:outline-none focus:ring-2 focus:ring-tertiary active:scale-95">
                  <div className="flex items-center gap-4">
                    <div className="flex h-12 w-12 items-center justify-center rounded-lg bg-green-100">
                      <FontAwesomeIcon icon={faGraduationCap} className="h-6 w-6 text-green-500" />
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
              </Link>
            </div>
          </div>

          {/* Sidebar */}
          <div className="flex w-full flex-col flex-wrap gap-6 sm:flex-row lg:w-[400px] lg:flex-col">
            {/* Subscription Status */}
            <Card className="flex min-w-[260px] flex-1 flex-col gap-4 rounded-xl p-6 shadow">
              <Typography variant="h3" className="text-[18px] text-gray-800">
                Subscription Status
              </Typography>
              <div className="flex items-center gap-2">
                <span className="inline-block h-3 w-3 rounded-full bg-green-500" />
                <span className="text-base font-medium text-gray-800">
                  Pro Plan Active
                </span>
              </div>
              <div className="text-sm text-gray-600">
                Next billing: Jan 15, 2025
              </div>
              <Button
                variant="tertiary"
                size="lg"
                className="mt-2 w-full rounded-lg text-white"
                onClick={() => {
                  navigate("/subscription")
                }}
              >
                Manage Subscription
              </Button>
            </Card>
            {/* This Month Stats */}
            <Card className="flex min-w-[260px] flex-1 flex-col gap-4 rounded-xl p-6 shadow">
              <Typography variant="h3" className="text-[18px] text-gray-800">
                This Month
              </Typography>
              <div className="flex flex-col gap-2">
                <div className="flex items-center justify-between">
                  <span className="text-gray-600">Profile Views</span>
                  <span className="font-semibold text-gray-800">156</span>
                </div>
                <div className="flex items-center justify-between">
                  <span className="text-gray-600">New Followers</span>
                  <span className="font-semibold text-gray-800">12</span>
                </div>
                <div className="flex items-center justify-between">
                  <span className="text-gray-600">RFQ Responses</span>
                  <span className="font-semibold text-gray-800">8</span>
                </div>
              </div>
            </Card>
          </div>
        </div>

        {/* Recent Activity */}
        <Card className="mb-8 w-full rounded-xl bg-white p-0 shadow-sm">
          <div className="flex items-center justify-between px-6 py-6">
            <Typography
              variant="h2"
              className="text-lg font-semibold text-gray-900"
            >
              Recent Activity
            </Typography>
            <Button
              variant="ghost"
              className="rounded px-3 py-1 font-medium text-sky-600 transition hover:bg-white"
            >
              View Full Newsfeed
            </Button>
          </div>
          <div className="px-6 pb-2">
            {/* Activity Card 1 */}
            <RecentActivityCard
              avatar={woman1}
              name="Sarah Chen"
              time="2 hours ago"
              message="Looking for RED cameras for a 3-day shoot in downtown LA. Any recommendations?"
              likesCount={12}
              commentsCount={3}
              commentsIcon={<FontAwesomeIcon icon={faComment} className="h-4 w-4 text-gray-500" />}
              likesIcon={<FontAwesomeIcon icon={faHeart} className="h-4 w-4 text-gray-500" />}
            />
            {/* Activity Card 2 */}
            <RecentActivityCard
              avatar={man3}
              name="Mike Rodriguez"
              time="4 hours ago"
              message="Just added new Arri lighting kit to my inventory! Perfect for studio setups."
              likesCount={8}
              commentsCount={1}
              likesIcon={<FontAwesomeIcon icon={faHeart} className="h-4 w-4 text-gray-500" />}
              commentsIcon={<FontAwesomeIcon icon={faComment} className="h-4 w-4 text-gray-500" />}
            />
            {/* Activity Card 3 */}
            <RecentActivityCard
              avatar={woman2}
              name="Emma Watson"
              time="6 hours ago"
              message="Thanks to everyone who helped with our documentary project! Great community here."
              likesCount={24}
              commentsCount={7}
              likesIcon={<FontAwesomeIcon icon={faHeart} className="h-4 w-4 text-gray-500" />}
              commentsIcon={<FontAwesomeIcon icon={faComment} className="h-4 w-4 text-gray-500" />}
            />
          </div>
        </Card>
      </main>
    </div>
  )
}

export { MerchantDashboard }

import { CommonFooter } from "@/components/layout/footer/common"
import { RenterHeader } from "@/components/layout/header/renter-header"
import { Card } from "@/components/ui/card"
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select"
import React from "react"

// Image and SVG asset URLs from Figma export
const imgImg =
  "http://localhost:3845/assets/f578f9c2a181ef669150341163e63e6e9da01878.png"
const imgImg1 =
  "http://localhost:3845/assets/1d5ad8aaf12fd61a75197f707f6ef40c7edd6e1f.png"
const imgImg2 =
  "http://localhost:3845/assets/ec901f1c0d6bdc3abb3b7f2578c96a444ee001e2.png"
const imgImg3 =
  "http://localhost:3845/assets/bec21fc75386a86210d32bec8ca98fcb2380d21e.png"
const imgImg4 =
  "http://localhost:3845/assets/410c340aa057242400c608368f918307cdd72438.png"
const imgImg5 =
  "http://localhost:3845/assets/1ecb12199697dd16c82152392c0b02a04bd85271.png"
const imgImg6 =
  "http://localhost:3845/assets/157a8cae4c47674ef06c93dae0edece12ad3c0a6.png"
const imgFrame =
  "http://localhost:3845/assets/ed4e1169b638e2e838350960320b53c878e45615.svg"
const imgFrame1 =
  "http://localhost:3845/assets/9861a0b6e8bb9b630982f192343e0944f05f6199.svg"
const imgFrame2 =
  "http://localhost:3845/assets/1efdeed862e90b5b080da5ccaa63bb5c3a6cf0bc.svg"
const imgFrame3 =
  "http://localhost:3845/assets/9bbcf70bbe74a66d5be007f363ab45fe565e761f.svg"
const imgFrame4 =
  "http://localhost:3845/assets/bd1717698f752c3deaf3fae1021b3aba1feb3b7d.svg"
const imgFrame5 =
  "http://localhost:3845/assets/481edf7158cd57dd6586673aec6bca09f1194883.svg"
const imgFrame6 =
  "http://localhost:3845/assets/ef9bd8e8713223592c7771abec5a546c7974ea75.svg"
const imgFrame7 =
  "http://localhost:3845/assets/1b82d8ccb02f994df33b26bef246ef1dcb8b6377.svg"
const imgFrame8 =
  "http://localhost:3845/assets/cc764d96982c8c1183db8ca0b40a4a05ba9d96a2.svg"
const imgFrame9 =
  "http://localhost:3845/assets/211493d4aeefd7775e4e226a11e8a3778bf3b893.svg"
const imgFrame10 =
  "http://localhost:3845/assets/78e9ab1fc59463cb9d6d3a448eed66011bff8fb9.svg"
const imgFrame11 =
  "http://localhost:3845/assets/559a70f1bdd03787114705de7e3cef062e1371ec.svg"

const Notification = () => {
  return (
    <div className="relative min-h-screen w-full bg-gray-50">
      <RenterHeader />
      {/* Main Content */}
      <div className="mx-auto mb-10 max-w-4xl px-4 py-8">
        {/* Title and filter */}
        <div className="mb-6 flex items-center justify-between">
          <div>
            <h1 className="mb-4 text-3xl font-bold text-gray-800">
              Notifications
            </h1>
            <p className="text-base text-gray-600">
              Stay updated on your RFQs, messages, and activity
            </p>
          </div>
          <button className="flex items-center gap-2 text-sm font-medium text-sky-600">
            <img src={imgFrame3} alt="mark all as read" className="h-4 w-4" />{" "}
            Mark All as Read
          </button>
        </div>
        {/* Filter */}
        <Card className="mb-8 flex items-center gap-4 rounded-md p-4">
          <span className="text-sm font-medium text-gray-700">Filter by:</span>
          <Select>
            <SelectTrigger className="w-40 rounded-lg border border-gray-300 px-3 py-1.5 text-sm text-gray-900 focus:outline-none focus:ring-2 focus:ring-sky-500">
              <SelectValue placeholder="All Notifications" />
            </SelectTrigger>
            <SelectContent>
              <SelectItem value="all">All Notifications</SelectItem>
              {/* Add more filter options here if needed */}
            </SelectContent>
          </Select>
        </Card>
        {/* Notification Cards */}
        <div className="space-y-1">
          {/* Card 1: New quote received */}
          <Card className="flex rounded-lg border-0 border-l-4 border-gray-300 bg-gray-50">
            <div className="flex flex-1 flex-col gap-4 rounded-lg bg-white p-4 shadow">
              <div className="flex w-full items-start gap-4">
                {/* Icon column */}
                <div className="flex h-10 w-10 items-center justify-center rounded-full bg-green-100">
                  <img src={imgFrame5} alt="quote" className="h-4 w-4" />
                </div>
                {/* Content column */}
                <div className="flex flex-1 flex-col gap-1">
                  <span className="text-sm font-semibold text-gray-800">
                    New quote received
                  </span>
                  <span className="text-sm text-gray-600">
                    John's Camera House submitted a quote for your "Camera
                    Package for Short Film" RFQ
                  </span>
                  <div className="mt-2 flex items-center gap-2">
                    <img
                      src={imgImg1}
                      alt="avatar"
                      className="h-6 w-6 rounded-full"
                    />
                    <span className="text-xs text-gray-500">2 hours ago</span>
                  </div>
                </div>
                {/* Action column */}
                <div className="ml-4 flex flex-col items-end justify-center">
                  <button className="text-sm font-medium text-sky-600">
                    View Quote
                  </button>
                </div>
              </div>
            </div>
          </Card>
          {/* Card 2: New message from merchant */}
          <Card className="flex rounded-lg bg-gray-50">
            <div className="flex flex-1 flex-col gap-4 rounded-lg bg-white p-4 shadow">
              <div className="flex w-full items-start gap-4">
                {/* Icon column */}
                <div className="flex h-10 w-10 items-center justify-center rounded-full bg-blue-100">
                  <img src={imgFrame6} alt="message" className="h-4 w-4" />
                </div>
                {/* Content column */}
                <div className="flex flex-1 flex-col gap-1">
                  <span className="text-sm font-semibold text-gray-800">
                    New message from merchant
                  </span>
                  <span className="text-sm text-gray-600">
                    Emma Rodriguez: "Hi! I have some follow-up questions about
                    your lighting requirements..."
                  </span>
                  <div className="mt-2 flex items-center gap-2">
                    <img
                      src={imgImg2}
                      alt="avatar"
                      className="h-6 w-6 rounded-full"
                    />
                    <span className="text-xs text-gray-500">4 hours ago</span>
                  </div>
                </div>
                {/* Action column */}
                <div className="ml-4 flex flex-col items-end justify-center">
                  <button className="text-sm font-medium text-sky-600">
                    Open Message
                  </button>
                </div>
              </div>
            </div>
          </Card>
          {/* Card 3: RFQ expiring soon */}
          <Card className="flex rounded-lg border-0 border-l-4 border-gray-300 bg-yellow-50 p-0">
            <div className="flex flex-1 flex-col gap-4 rounded-lg bg-white p-4 shadow">
              <div className="flex w-full items-start gap-4">
                <div className="flex h-10 w-10 items-center justify-center rounded-full bg-yellow-100">
                  <img src={imgFrame7} alt="rfq expiring" className="h-4 w-4" />
                </div>
                <div className="flex flex-1 flex-col gap-1">
                  <span className="text-sm font-semibold text-gray-800">
                    RFQ expiring soon
                  </span>
                  <span className="text-sm text-gray-600">
                    Your "Audio Equipment for Documentary" RFQ expires in 2 days
                  </span>
                  <div className="mt-2 flex items-center gap-2">
                    <span className="text-xs text-gray-500">6 hours ago</span>
                  </div>
                </div>
                <div className="mt-2 flex justify-end">
                  <button className="text-sm font-medium text-sky-600">
                    View RFQ
                  </button>
                </div>
              </div>
            </div>
          </Card>
          {/* Card 4: New follower */}
          <Card className="flex rounded-lg bg-purple-50 p-0">
            <div className="flex flex-1 flex-col gap-4 rounded-lg bg-white p-4 shadow">
              <div className="flex w-full items-start gap-4">
                <div className="flex h-10 w-10 items-center justify-center rounded-full bg-purple-100">
                  <img src={imgFrame8} alt="follower" className="h-4 w-5" />
                </div>
                <div className="flex flex-1 flex-col gap-1">
                  <span className="text-sm font-semibold text-gray-800">
                    New follower
                  </span>
                  <span className="text-sm text-gray-600">
                    Pro Light Studios started following you
                  </span>
                  <div className="mt-2 flex items-center gap-2">
                    <img
                      src={imgImg3}
                      alt="avatar"
                      className="h-6 w-6 rounded-full"
                    />
                    <span className="text-xs text-gray-500">1 day ago</span>
                  </div>
                </div>
                <div className="mt-2 flex justify-end">
                  <button className="text-sm font-medium text-sky-600">
                    View Profile
                  </button>
                </div>
              </div>
            </div>
          </Card>
          {/* Card 5: New training course available */}
          <Card className="flex rounded-lg border-0 border-l-4 border-gray-300 bg-green-50 p-0">
            <div className="flex flex-1 flex-col rounded-lg bg-white p-4 shadow">
              <div className="flex w-full items-start gap-4">
                <div className="flex h-10 w-10 items-center justify-center rounded-full bg-indigo-100">
                  <img src={imgFrame9} alt="course" className="h-5 w-5" />
                </div>
                <div className="flex flex-1 flex-col gap-1">
                  <span className="text-sm font-semibold text-gray-800">
                    New training course available
                  </span>
                  <span className="text-sm text-gray-600">
                    Cinema Lens Academy posted "Advanced Cinematography
                    Techniques" course
                  </span>
                  <div className="mt-2 flex items-center gap-2">
                    <img
                      src={imgImg4}
                      alt="avatar"
                      className="h-6 w-6 rounded-full"
                    />
                    <span className="text-xs text-gray-500">1 day ago</span>
                  </div>
                </div>
                <div className="mt-2 flex justify-end">
                  <button className="text-sm font-medium text-sky-600">
                    View Course
                  </button>
                </div>
              </div>
            </div>
          </Card>
          {/* Card 6: Post liked */}
          <Card className="flex rounded-lg bg-red-50 p-0">
            <div className="flex flex-1 flex-col gap-4 rounded-lg bg-white p-4 shadow">
              <div className="flex w-full items-start gap-4">
                <div className="flex h-10 w-10 items-center justify-center rounded-full bg-yellow-100">
                  <img src={imgFrame10} alt="liked" className="h-4 w-4" />
                </div>
                <div className="flex flex-1 flex-col gap-1">
                  <span className="text-sm font-semibold text-gray-800">
                    Post liked
                  </span>
                  <span className="text-sm text-gray-600">
                    Michael Torres and 3 others liked your post about "Best
                    Camera Settings for Low Light"
                  </span>
                  <div className="mt-2 flex items-center gap-2">
                    <img
                      src={imgImg5}
                      alt="avatar"
                      className="h-6 w-6 rounded-full"
                    />
                    <span className="text-xs text-gray-500">2 days ago</span>
                  </div>
                </div>
                <div className="mt-2 flex justify-end">
                  <button className="text-sm font-medium text-sky-600">
                    View Post
                  </button>
                </div>
              </div>
            </div>
          </Card>
          {/* Card 7: Review received */}
          <Card className="flex rounded-lg bg-yellow-50 p-0">
            <div className="flex flex-1 flex-col rounded-lg bg-white p-4 shadow">
              <div className="flex w-full items-start gap-4">
                <div className="flex h-10 w-10 items-center justify-center rounded-full bg-yellow-100">
                  <img src={imgFrame11} alt="review" className="h-4 w-4" />
                </div>
                <div className="flex flex-1 flex-col gap-1">
                  <span className="text-sm font-semibold text-gray-800">
                    Review received
                  </span>
                  <span className="text-sm text-gray-600">
                    Alex Kim left a 5-star review: "Great communication and
                    clear requirements. Easy to work with!"
                  </span>
                  <div className="mt-2 flex items-center gap-2">
                    <img
                      src={imgImg6}
                      alt="avatar"
                      className="h-6 w-6 rounded-full"
                    />
                    <span className="text-xs text-gray-500">3 days ago</span>
                  </div>
                </div>
                <div className="mt-2 flex justify-end">
                  <button className="text-sm font-medium text-sky-600">
                    View Review
                  </button>
                </div>
              </div>
            </div>
          </Card>
        </div>
      </div>
      <CommonFooter />
    </div>
  )
}

export default Notification

import React from "react"
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
import { faCheckDouble, faClock, faFileInvoiceDollar, faGraduationCap, faHeart, faMessage, faStar, faUserPlus } from "@fortawesome/free-solid-svg-icons"
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"

import man1 from "@/assets/images/avatars/man1.png"
import man2 from "@/assets/images/avatars/man2.png"
import man3 from "@/assets/images/avatars/man3.png"
import man4 from "@/assets/images/avatars/man4.png"
import man5 from "@/assets/images/avatars/man5.png"
import woman1 from "@/assets/images/avatars/woman1.png"

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
            <FontAwesomeIcon icon={faCheckDouble} alt="mark all as read" className="h-4 w-4" />{" "}
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
                  <FontAwesomeIcon icon={faFileInvoiceDollar} alt="quote" className="text-green-600 h-4 w-4" />
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
                      src={man2}
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
                  <FontAwesomeIcon icon={faMessage} alt="message" className="text-blue-600 h-4 w-4" />
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
                      src={woman1}
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
                  <FontAwesomeIcon icon={faClock} alt="rfq expiring" className="text-yellow-600 h-4 w-4" />
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
                  <FontAwesomeIcon icon={faUserPlus} alt="follower" className="text-purple-600 h-4 w-5" />
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
                      src={man3}
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
                  <FontAwesomeIcon icon={faGraduationCap} alt="course" className="text-indigo-600 h-5 w-5" />
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
                      src={man1}
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
                <div className="flex h-10 w-10 items-center justify-center rounded-full bg-red-100">
                  <FontAwesomeIcon icon={faHeart} alt="liked" className="text-red-600 h-4 w-4" />
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
                      src={man5}
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
                  <FontAwesomeIcon icon={faStar} alt="review" className="text-yellow-600 h-4 w-4" />
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
                      src={man4}
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

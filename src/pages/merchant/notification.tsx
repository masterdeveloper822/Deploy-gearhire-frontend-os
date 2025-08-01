import React from "react"
import { useNavigate } from "react-router-dom"
import { AuthHeader } from "@/components/layout/header/auth-header"
import { CommonFooter } from "@/components/layout/footer/common"
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select"

import woman3 from "@/assets/images/avatars/woman3.png"
import man2 from "@/assets/images/avatars/man2.png"
import man3 from "@/assets/images/avatars/man3.png"
import woman1 from "@/assets/images/avatars/woman1.png"
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"
import { faClock, faFileLines, faMessage, faStar, faUserPlus } from "@fortawesome/free-solid-svg-icons"
import { faCircleQuestion } from "@fortawesome/free-regular-svg-icons"
import { BackArrowIcon, DottedQuestionIcon } from "@/components/ui/icon"

const Notification: React.FC = () => {
  const navigate = useNavigate()

  return (
    <div className="min-h-screen bg-gray-50">
      <AuthHeader />

      <main className="mx-auto mb-12 max-w-7xl px-4 py-8">
        <div className="mx-auto max-w-4xl">
          {/* Page Header */}
          <div className="mb-8 flex items-center justify-between">
            <div>    
              <div className="flex items-center gap-4">
                <button
                  className="rounded p-2 hover:bg-gray-100"
                  onClick={() => navigate(-1)}
                  aria-label="Back"
                >
                  <BackArrowIcon />
                </button>
                <h1 className="text-3xl font-bold text-gray-800">Notifications</h1>
              </div>
            </div>
              <button className="font-medium text-sky-600 transition-colors hover:text-sky-700">
              Mark All as Read
            </button>
          </div>

          {/* Filter Section */}
          <div className="mb-6 flex items-center gap-4">
            <Select>
              <SelectTrigger
                className="h-10 w-[170px] rounded-lg border border-gray-300 bg-white px-4 py-2 text-gray-700 focus:border-transparent focus:outline-none focus:ring-2 focus:ring-sky-500"
                style={{ fontSize: "16px" }}
              >
                <SelectValue placeholder="All Notifications" />
              </SelectTrigger>
              <SelectContent className="w-[170px]">
                <SelectItem value="all" style={{ fontSize: "16px" }}>
                  All Notifications
                </SelectItem>
                <SelectItem value="messages" style={{ fontSize: "16px" }}>
                  Messages
                </SelectItem>
                <SelectItem value="quotes" style={{ fontSize: "16px" }}>
                  Quotes
                </SelectItem>
                <SelectItem value="reviews" style={{ fontSize: "16px" }}>
                  Reviews
                </SelectItem>
                <SelectItem value="account" style={{ fontSize: "16px" }}>
                  Account
                </SelectItem>
              </SelectContent>
            </Select>
            <div className="text-sm text-gray-600">
              <span className="font-medium">3 unread</span> notifications
            </div>
          </div>

          {/* Notifications List */}
          <div className="space-y-4">
            {/* Message Notification */}
            <div className="rounded-lg border border-gray-200 bg-white p-4">
              <div className="flex items-start gap-4">
                <div className="rounded-full bg-blue-100 px-3 py-2">
                  <FontAwesomeIcon icon={faMessage} alt="message" className="text-blue-600 h-4 w-4" />
                </div>
                <div className="flex-1">
                  <div className="mb-2 flex items-center gap-2">
                    <img
                      src={woman3}
                      alt="Sarah Chen"
                      className="h-6 w-6 rounded-full"
                    />
                    <h3 className="font-semibold text-gray-800">
                      New message from Sarah Chen
                    </h3>
                    <div className="h-2 w-2 rounded-full bg-sky-600"></div>
                  </div>
                  <p className="mb-3 text-sm text-gray-600">
                    Thanks for the quick response! When can we schedule the
                    pickup?
                  </p>
                  <div className="flex items-center gap-4">
                    <span className="text-xs text-gray-500">2 minutes ago</span>
                    <button
                      className="text-sm font-medium text-sky-600 hover:text-sky-700"
                      onClick={() => {
                        navigate("/merchant-message")
                      }}
                    >
                      View Message
                    </button>
                  </div>
                </div>
              </div>
            </div>

            {/* Quote Notification */}
            <div className="rounded-lg border border-gray-200 bg-white p-4">
              <div className="flex items-start gap-4">
                <div className="rounded-full bg-green-100 px-3 py-2">
                  <FontAwesomeIcon icon={faFileLines} alt="quote" className="text-green-700 h-4 w-4" />
                </div>
                <div className="flex-1">
                  <div className="mb-2 flex items-center gap-2">
                    <img
                      src={man2}
                      alt="Marcus Rodriguez"
                      className="h-6 w-6 rounded-full"
                    />
                    <h3 className="font-semibold text-gray-800">
                      Quote submitted for RED Camera Package
                    </h3>
                    <div className="h-2 w-2 rounded-full bg-sky-600"></div>
                  </div>
                  <p className="mb-3 text-sm text-gray-600">
                    Marcus Rodriguez submitted a quote for your RFQ
                  </p>
                  <div className="flex items-center gap-4">
                    <span className="text-xs text-gray-500">1 hour ago</span>
                    <button className="text-sm font-medium text-sky-600 hover:text-sky-700">
                      View Quote
                    </button>
                  </div>
                </div>
              </div>
            </div>

            {/* Follow Notification */}
            <div className="rounded-lg border border-gray-200 bg-white p-4">
              <div className="flex items-start gap-4">
                <div className="rounded-full bg-purple-100 px-3 py-2">
                  <FontAwesomeIcon
                    icon={faUserPlus} alt="follow" className="text-purple-700 h-4 w-4" />
                </div>
                <div className="flex-1">
                  <div className="mb-2 flex items-center gap-2">
                    <img
                      src={woman1}
                      alt="Emma Thompson"
                      className="h-6 w-6 rounded-full"
                    />
                    <h3 className="font-semibold text-gray-800">
                      Emma Thompson started following you
                    </h3>
                    <div className="h-2 w-2 rounded-full bg-sky-600"></div>
                  </div>
                  <p className="mb-3 text-sm text-gray-600">
                    You have a new follower
                  </p>
                  <div className="flex items-center gap-4">
                    <span className="text-xs text-gray-500">3 hours ago</span>
                    <button className="text-sm font-medium text-sky-600 hover:text-sky-700">
                      View Profile
                    </button>
                  </div>
                </div>
              </div>
            </div>

            {/* Review Notification */}
            <div className="rounded-lg border border-gray-200 bg-white p-4">
              <div className="flex items-start gap-4">
                <div className="rounded-full bg-yellow-100 px-3 py-2">
                  <FontAwesomeIcon icon={faStar} alt="review" className="text-yellow-600 h-4 w-4" />
                </div>
                <div className="flex-1">
                  <div className="mb-2 flex items-center gap-2">
                    <img
                      src={man3}
                      alt="David Kim"
                      className="h-6 w-6 rounded-full"
                    />
                    <h3 className="font-medium text-gray-800">
                      New 5-star review from David Kim
                    </h3>
                  </div>
                  <p className="mb-3 text-sm text-gray-600">
                    "Excellent service and high-quality equipment. Highly
                    recommended!"
                  </p>
                  <div className="gap-4n flex items-center">
                    <span className="text-xs text-gray-500">1 day ago</span>
                    <button className="text-sm font-medium text-sky-600 hover:text-sky-700">
                      View Review
                    </button>
                  </div>
                </div>
              </div>
            </div>

            {/* Account Notification */}
            <div className="rounded-lg border border-gray-200 bg-white p-4">
              <div className="flex items-start gap-4">
                <div className="rounded-full bg-emerald-100 p-3">
                  <span className="text-green-700">
                    <DottedQuestionIcon className="h-4 w-4" />
                  </span>
                </div>
                <div className="flex-1">
                  <h3 className="mb-2 font-medium text-gray-800">
                    Account verification complete
                  </h3>
                  <p className="mb-3 text-sm text-gray-600">
                    Your merchant account has been verified and is now active
                  </p>
                  <div className="flex items-center gap-4">
                    <span className="text-xs text-gray-500">2 days ago</span>
                    <button className="text-sm font-medium text-sky-600 hover:text-sky-700">
                      View Dashboard
                    </button>
                  </div>
                </div>
              </div>
            </div>

            {/* RFQ Notification */}
            <div className="rounded-lg border border-gray-200 bg-white p-4">
              <div className="flex items-start gap-4">
                <div className="rounded-full bg-orange-100 px-3 py-2">
                  <FontAwesomeIcon icon={faClock} alt="rfq" className="text-orange-500 h-4 w-4" />
                </div>
                <div className="flex-1">
                  <h3 className="mb-2 font-medium text-gray-800">
                    RFQ expires soon
                  </h3>
                  <p className="mb-3 text-sm text-gray-600">
                    Your RFQ for "Sony FX6 Camera Kit" expires in 2 hours
                  </p>
                  <div className="flex items-center gap-4">
                    <span className="text-xs text-gray-500">3 days ago</span>
                    <button className="text-sm font-medium text-sky-600 hover:text-sky-700">
                      View RFQ
                    </button>
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* Load More Button */}
          <div className="mt-8 flex justify-center">
            <button className="rounded-lg border border-gray-300 bg-white px-8 py-3 font-medium text-gray-700 transition-colors hover:bg-gray-50">
              Load More Notifications
            </button>
          </div>
        </div>
      </main>

      <CommonFooter />
    </div>
  )
}

export default Notification

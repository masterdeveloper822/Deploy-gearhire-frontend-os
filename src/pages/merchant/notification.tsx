import React from "react"
import { useNavigate } from "react-router-dom"
import { MerchantHeader } from "@/components/layout/header/merchant-header"
import { MerchantFooter } from "@/components/layout/footer/merchant-footer"
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select"

const imgImg =
  "http://localhost:3845/assets/410c340aa057242400c608368f918307cdd72438.png"
const imgImg1 =
  "http://localhost:3845/assets/f578f9c2a181ef669150341163e63e6e9da01878.png"
const imgImg2 =
  "http://localhost:3845/assets/1d5ad8aaf12fd61a75197f707f6ef40c7edd6e1f.png"
const imgImg3 =
  "http://localhost:3845/assets/ec901f1c0d6bdc3abb3b7f2578c96a444ee001e2.png"
const imgImg4 =
  "http://localhost:3845/assets/bec21fc75386a86210d32bec8ca98fcb2380d21e.png"
const imgFrame =
  "http://localhost:3845/assets/ed4e1169b638e2e838350960320b53c878e45615.svg"
const imgFrame1 =
  "http://localhost:3845/assets/9861a0b6e8bb9b630982f192343e0944f05f6199.svg"
const imgFrame2 =
  "http://localhost:3845/assets/1efdeed862e90b5b080da5ccaa63bb5c3a6cf0bc.svg"
const imgFrame3 =
  "http://localhost:3845/assets/3fb4b81e046289a29f1daa8f4528d66d37ad2c91.svg"
const imgFrame4 =
  "http://localhost:3845/assets/ef9bd8e8713223592c7771abec5a546c7974ea75.svg"
const imgFrame5 =
  "http://localhost:3845/assets/19f496b61aed63c57c2255809d8dbd6a29e69743.svg"
const imgFrame6 =
  "http://localhost:3845/assets/cc764d96982c8c1183db8ca0b40a4a05ba9d96a2.svg"
const imgFrame7 =
  "http://localhost:3845/assets/559a70f1bdd03787114705de7e3cef062e1371ec.svg"
const imgGroup =
  "http://localhost:3845/assets/8388300ddeb735a3f944dd7f91d6369b7dc61b4b.svg"
const imgFrame8 =
  "http://localhost:3845/assets/69e8eb0ecca56d162835ed9f57bf92dc38da6cb6.svg"

const Notification: React.FC = () => {
  const navigate = useNavigate()

  return (
    <div className="min-h-screen bg-gray-50">
      <MerchantHeader />

      <main className="mx-auto mb-12 max-w-7xl px-4 py-8">
        <div className="mx-auto max-w-4xl">
          {/* Page Header */}
          <div className="mb-8 flex items-center justify-between">
            <h1 className="text-3xl font-bold text-gray-800">Notifications</h1>
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
                <div className="rounded-full bg-blue-100 p-2.5">
                  <img src={imgFrame4} alt="message" className="h-4 w-4" />
                </div>
                <div className="flex-1">
                  <div className="mb-2 flex items-center gap-2">
                    <img
                      src={imgImg1}
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
                <div className="rounded-full bg-green-100 p-2.5">
                  <img src={imgFrame5} alt="quote" className="h-4 w-3" />
                </div>
                <div className="flex-1">
                  <div className="mb-2 flex items-center gap-2">
                    <img
                      src={imgImg2}
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
                <div className="rounded-full bg-purple-100 p-2.5">
                  <img src={imgFrame6} alt="follow" className="h-4 w-5" />
                </div>
                <div className="flex-1">
                  <div className="mb-2 flex items-center gap-2">
                    <img
                      src={imgImg3}
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
                <div className="rounded-full bg-yellow-100 p-2.5">
                  <img src={imgFrame7} alt="review" className="h-4 w-[18px]" />
                </div>
                <div className="flex-1">
                  <div className="mb-2 flex items-center gap-2">
                    <img
                      src={imgImg4}
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
                <div className="rounded-full bg-emerald-100 p-2.5">
                  <img src={imgGroup} alt="account" className="h-4 w-4" />
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
                <div className="rounded-full bg-orange-100 p-2.5">
                  <img src={imgFrame8} alt="rfq" className="h-4 w-4" />
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

      <MerchantFooter />
    </div>
  )
}

export default Notification

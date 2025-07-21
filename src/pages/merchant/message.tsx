import React from "react"
import { MerchantHeader } from "@/components/layout/header/merchant-header"
import { CommonFooter } from "@/components/layout/footer/common"
import { Input } from "@/components/ui/input"
import { Button } from "@/components/ui/button"

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
  "http://localhost:3845/assets/e23f57a2af62e42bd83fb2f8760ed0b74b1af3c6.svg"
const imgFrame2 =
  "http://localhost:3845/assets/1efdeed862e90b5b080da5ccaa63bb5c3a6cf0bc.svg"
const imgFrame3 =
  "http://localhost:3845/assets/d2989890a47036eb3eba43c9b9ea24bc925f1b69.svg"
const imgFrame4 =
  "http://localhost:3845/assets/12154481a263ca0fa9ed68956ed59fea756bc24e.svg"
const imgFrame5 =
  "http://localhost:3845/assets/9421ac7b9341d210b910662c4fe7d9f28bf56477.svg"
const imgFrame6 =
  "http://localhost:3845/assets/a9e4aba06947f460c74aad83d4b3bce89c0c0a09.svg"
const imgFrame7 =
  "http://localhost:3845/assets/9da17949dc9d3108bb15c74934e1359ce54cd9b6.svg"
const imgFrame8 =
  "http://localhost:3845/assets/393b2c64082c1298f54496bda3e1b323df69b7a4.svg"

const MerchantMessage = () => {
  return (
    <div className="min-h-screen bg-gray-50">
      <MerchantHeader />
      <main className="mx-auto mb-12 max-w-[1440px] px-2 py-4 sm:px-4 sm:py-8">
        <div className="flex min-h-[600px] flex-col overflow-hidden rounded-lg bg-white shadow sm:flex-row">
          {/* Sidebar */}
          <aside className="flex w-full flex-shrink-0 flex-col border-b border-gray-200 bg-white sm:w-[300px] sm:border-b-0 sm:border-r md:w-[415px]">
            <div className="border-b border-gray-200 p-4">
              <h2 className="mb-3 text-lg font-semibold text-gray-800">
                Messages
              </h2>
              <div className="relative">
                <Input
                  className="h-10 w-full rounded-lg border border-gray-300 py-2 pl-10 pr-4"
                  placeholder="Search conversations..."
                />
                <img
                  src={imgFrame3}
                  alt="search"
                  className="absolute left-3 top-1/2 h-4 w-4 -translate-y-1/2"
                />
              </div>
            </div>
            <div className="flex-1 overflow-y-auto">
              {/* Conversation List */}
              {[
                {
                  id: 1,
                  name: "Sarah Chen",
                  avatar: imgImg1,
                  lastMessage: "Thanks for the quick response! When can we...",
                  time: "2m",
                  unread: true,
                },
                {
                  id: 2,
                  name: "Marcus Rodriguez",
                  avatar: imgImg2,
                  lastMessage: "Perfect! I'll pick up the equipment on Friday",
                  time: "1h",
                  unread: false,
                },
                {
                  id: 3,
                  name: "Emma Thompson",
                  avatar: imgImg3,
                  lastMessage:
                    "Do you have the Sony FX6 available for next week?",
                  time: "3h",
                  unread: true,
                },
                {
                  id: 4,
                  name: "David Kim",
                  avatar: imgImg4,
                  lastMessage: "Thank you for the professional service!",
                  time: "1d",
                  unread: false,
                },
              ].map((conv, idx) => (
                <div
                  key={conv.id}
                  className={`flex cursor-pointer items-center gap-4 border-b border-gray-100 p-4 ${
                    idx === 0 ? "bg-sky-50" : ""
                  }`}
                >
                  <div className="relative">
                    <img
                      src={conv.avatar}
                      alt={conv.name}
                      className="h-10 w-10 min-w-10 rounded-full object-cover sm:h-12 sm:w-12 sm:min-w-12"
                    />
                    {conv.unread && (
                      <span className="absolute right-0 top-0 h-3 w-3 rounded-full border-2 border-white bg-red-500"></span>
                    )}
                  </div>
                  <div className="flex-1">
                    <div className="flex items-center justify-between">
                      <span className="text-sm font-medium text-gray-800 sm:text-base">
                        {conv.name}
                      </span>
                      <span className="text-xs text-gray-500">{conv.time}</span>
                    </div>
                    <div className="w-40 truncate text-xs text-gray-600 sm:w-[200px] sm:text-sm md:w-80">
                      {conv.lastMessage}
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </aside>

          {/* Chat Area */}
          <section className="flex flex-1 flex-col bg-gray-50">
            {/* Chat Header */}
            <div className="flex items-center gap-2 border-b border-gray-200 bg-gray-50 p-2 sm:gap-4 sm:p-4">
              <img
                src={imgImg1}
                alt="Sarah Chen"
                className="h-10 w-10 min-w-10 rounded-full object-cover sm:h-[48px] sm:w-12 sm:min-w-12"
              />
              <div>
                <div className="text-base font-medium text-gray-800 sm:text-lg">
                  Sarah Chen
                </div>
                <div className="text-xs text-gray-500 sm:text-sm">
                  Active 2 minutes ago
                </div>
              </div>
              <div className="ml-auto">
                <Button
                  variant="tertiary"
                  className="flex items-center gap-2 rounded-lg px-2 py-2 text-xs font-medium text-white sm:px-4 sm:text-base"
                >
                  <img
                    src={imgFrame4}
                    alt="RFQ"
                    className="h-3 w-3 sm:h-3.5 sm:w-3"
                  />
                  View RFQ
                </Button>
              </div>
            </div>
            {/* Chat Messages */}
            <div className="scrollbar-hide min-h-0 flex-1 space-y-4 overflow-y-auto p-2 sm:p-4">
              {/* Message 1 (left) */}
              <div className="flex items-start gap-2 sm:gap-4">
                <img
                  src={imgImg1}
                  alt="Sarah Chen"
                  className="h-8 w-8 rounded-full object-cover"
                />
                <div>
                  <div className="max-w-[70vw] rounded-lg bg-gray-100 px-3 py-2 text-sm text-gray-800 sm:max-w-xs sm:px-4 sm:py-3 sm:text-base">
                    <div>Hi! I saw your quote for the RED</div>
                    <div>camera package. Could we discuss</div>
                    <div>the rental terms?</div>
                  </div>
                  <div className="mt-1 text-xs text-gray-500">
                    Today 2:30 PM
                  </div>
                </div>
              </div>
              {/* Message 2 (right) */}
              <div className="flex w-full flex-row-reverse items-start justify-end gap-2 sm:gap-4">
                <div className="ml-auto flex flex-row-reverse items-start gap-2 sm:gap-4">
                  <img
                    src={imgImg}
                    alt="Me"
                    className="h-8 w-8 rounded-full object-cover"
                  />
                  <div>
                    <div className="max-w-[70vw] rounded-lg bg-sky-600 px-3 py-2 text-sm text-white sm:max-w-xs sm:px-4 sm:py-3 sm:text-base">
                      <div>Absolutely! I'd be happy to discuss</div>
                      <div>the details. The package includes</div>
                      <div>everything listed in the quote.</div>
                    </div>
                    <div className="mt-1 text-right text-xs text-gray-500">
                      Today 2:32 PM
                    </div>
                  </div>
                </div>
              </div>
              {/* Message 3 (left, with attachment) */}
              <div className="flex items-start gap-2 sm:gap-4">
                <img
                  src={imgImg1}
                  alt="Sarah Chen"
                  className="h-8 w-8 rounded-full object-cover"
                />
                <div>
                  <div className="max-w-[70vw] rounded-lg bg-gray-100 px-3 py-2 text-sm text-gray-800 sm:max-w-xs sm:px-4 sm:py-3 sm:text-base">
                    <div>Perfect! I've attached our shooting</div>
                    <div>schedule. Can you confirm availability</div>
                    <div>for these dates?</div>
                    <div className="mt-2 flex h-10 items-center gap-2 rounded border border-gray-200 bg-white px-2 py-1">
                      <img
                        src={imgFrame5}
                        alt="attachment"
                        className="h-4 w-4"
                      />
                      <span className="text-sm text-gray-700">
                        shooting-schedule.pdf
                      </span>
                      <button className="ml-auto">
                        <img
                          src={imgFrame6}
                          alt="download"
                          className="h-3.5 w-3.5"
                        />
                      </button>
                    </div>
                  </div>
                  <div className="mt-1 text-xs text-gray-500">
                    Today 2:35 PM
                  </div>
                </div>
              </div>
              {/* Message 4 (right) */}
              <div className="flex flex-row-reverse items-start justify-end gap-2 sm:gap-4">
                <div className="ml-auto flex flex-row-reverse items-start gap-2 sm:gap-4">
                  <img
                    src={imgImg}
                    alt="Me"
                    className="h-8 w-8 rounded-full object-cover"
                  />
                  <div>
                    <div className="max-w-[70vw] rounded-lg bg-sky-600 px-3 py-2 text-sm text-white sm:max-w-xs sm:px-4 sm:py-3 sm:text-base">
                      <div>Thanks for the quick response! When</div>
                      <div>can we schedule the pickup?</div>
                    </div>
                    <div className="mt-1 text-right text-xs text-gray-500">
                      Today 2:45 PM
                    </div>
                  </div>
                </div>
              </div>
            </div>
            {/* Chat Input */}
            <div className="flex items-center gap-2 border-t border-gray-200 bg-white p-2 sm:gap-4 sm:p-4">
              <button className="flex h-8 w-8 items-center justify-center rounded-lg hover:bg-gray-100">
                <img src={imgFrame7} alt="attach" className="h-4 w-4" />
              </button>
              <Input
                className="h-10 flex-1 rounded-lg border border-gray-300 px-2 py-2 sm:h-12 sm:px-4 sm:py-3"
                placeholder="Type your message..."
              />
              <button className="flex h-10 w-8 items-center justify-center rounded-lg bg-sky-600 hover:bg-sky-700 sm:h-12 sm:w-10">
                <img src={imgFrame8} alt="send" className="h-5 w-4" />
              </button>
            </div>
          </section>
        </div>
      </main>
      <CommonFooter />
    </div>
  )
}

export default MerchantMessage

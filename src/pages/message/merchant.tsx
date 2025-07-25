import React from "react"
import { AuthHeader } from "@/components/layout/header/auth-header"
import { CommonFooter } from "@/components/layout/footer/common"
import { Input } from "@/components/ui/input"
import { Button } from "@/components/ui/button"
import man1 from "@/assets/images/avatars/man1.png"
import man2 from "@/assets/images/avatars/man2.png"
import man3 from "@/assets/images/avatars/man3.png"
import woman1 from "@/assets/images/avatars/woman1.png"
import woman3 from "@/assets/images/avatars/woman3.png"
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"
import { faDownload, faFileLines, faFilePdf, faPaperclip, faPaperPlane, faSearch } from "@fortawesome/free-solid-svg-icons"

const MerchantMessage = () => {
  return (
    <div className="min-h-screen bg-gray-50">
      <AuthHeader />
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
                <FontAwesomeIcon
                  icon={faSearch}
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
                  avatar: woman3,
                  lastMessage: "Thanks for the quick response! When can we...",
                  time: "2m",
                  unread: true,
                },
                {
                  id: 2,
                  name: "Marcus Rodriguez",
                  avatar: man2,
                  lastMessage: "Perfect! I'll pick up the equipment on Friday",
                  time: "1h",
                  unread: false,
                },
                {
                  id: 3,
                  name: "Emma Thompson",
                  avatar: woman1,
                  lastMessage:
                    "Do you have the Sony FX6 available for next week?",
                  time: "3h",
                  unread: true,
                },
                {
                  id: 4,
                  name: "David Kim",
                  avatar: man3,
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
                src={woman3}
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
                  <FontAwesomeIcon
                    icon={faFileLines}
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
                  src={woman3}
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
                    src={man1}
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
                  src={woman3}
                  alt="Sarah Chen"
                  className="h-8 w-8 rounded-full object-cover"
                />
                <div>
                  <div className="max-w-[70vw] rounded-lg bg-gray-100 px-3 py-2 text-sm text-gray-800 sm:max-w-xs sm:px-4 sm:py-3 sm:text-base">
                    <div>Perfect! I've attached our shooting</div>
                    <div>schedule. Can you confirm availability</div>
                    <div>for these dates?</div>
                    <div className="mt-2 flex h-10 items-center gap-2 rounded border border-gray-200 bg-white px-2 py-1">
                      <FontAwesomeIcon
                        icon={faFilePdf}
                        alt="attachment"
                        className="text-red-500 h-4 w-4"
                      />
                      <span className="text-sm text-gray-700">
                        shooting-schedule.pdf
                      </span>
                      <button className="ml-auto">
                        <FontAwesomeIcon
                          icon={faDownload}
                          alt="download"
                          className="text-tertiary h-3.5 w-3.5"
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
                    src={man1}
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
                <FontAwesomeIcon icon={faPaperclip} alt="attach" className="text-gray-700 h-4 w-4" />
              </button>
              <Input
                className="h-10 flex-1 rounded-lg border border-gray-300 px-2 py-2 sm:h-12 sm:px-4 sm:py-3"
                placeholder="Type your message..."
              />
              <button className="flex h-10 w-8 items-center justify-center rounded-lg bg-sky-600 hover:bg-sky-700 sm:h-12 sm:w-10">
                <FontAwesomeIcon icon={faPaperPlane} alt="send" className="text-white h-5 w-4" />
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

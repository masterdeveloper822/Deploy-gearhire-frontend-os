import React, { useRef, useState } from "react"
import { AuthHeader } from "@/components/layout/header/auth-header"
import { CommonFooter } from "@/components/layout/footer/common"
import { EllipsisVertical } from "lucide-react"

import man1 from "@/assets/images/avatars/man1.png"
import man2 from "@/assets/images/avatars/man2.png"
import man3 from "@/assets/images/avatars/man3.png"
import man5 from "@/assets/images/avatars/man5.png"
import woman3 from "@/assets/images/avatars/woman3.png"
import { faFileLines, faFilePdf, faPaperclip, faPaperPlane, faSearch } from "@fortawesome/free-solid-svg-icons"
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"
<<<<<<< HEAD
import { BackArrowIcon } from "@/components/ui/icon"
import { useNavigate } from "react-router-dom"
=======

// Image and SVG asset URLs from Figma export
const imgImg =
  "http://localhost:3845/assets/f578f9c2a181ef669150341163e63e6e9da01878.png"
const imgImg1 =
  "http://localhost:3845/assets/410c340aa057242400c608368f918307cdd72438.png"
const imgImg2 =
  "http://localhost:3845/assets/1d5ad8aaf12fd61a75197f707f6ef40c7edd6e1f.png"
const imgImg3 =
  "http://localhost:3845/assets/1ecb12199697dd16c82152392c0b02a04bd85271.png"
const imgImg4 =
  "http://localhost:3845/assets/bec21fc75386a86210d32bec8ca98fcb2380d21e.png"
const imgFrame =
  "http://localhost:3845/assets/ed4e1169b638e2e838350960320b53c878e45615.svg"
const imgFrame1 =
  "http://localhost:3845/assets/9861a0b6e8bb9b630982f192343e0944f05f6199.svg"
const imgFrame2 =
  "http://localhost:3845/assets/1efdeed862e90b5b080da5ccaa63bb5c3a6cf0bc.svg"
const imgFrame3 =
  "http://localhost:3845/assets/ad1c22367e0b32024bf9730eb544e1cb8a5c24ef.svg"
const imgFrame4 =
  "http://localhost:3845/assets/1a64978febaad0f1b785c7e0ae8a7fab1223df37.svg"
const imgFrame5 =
  "http://localhost:3845/assets/6d022d49d140b64208c28086903fd55f253667a5.svg"
const imgFrame6 =
  "http://localhost:3845/assets/87571269c7ba2f50bea166c8eb43da50a8f48aa8.svg"
const imgFrame7 =
  "http://localhost:3845/assets/9421ac7b9341d210b910662c4fe7d9f28bf56477.svg"
const imgFrame8 =
  "http://localhost:3845/assets/e9cdbb22e9189dcdf7f5f003b85dc52945e480a4.svg"
const imgFrame9 =
  "http://localhost:3845/assets/393b2c64082c1298f54496bda3e1b323df69b7a4.svg"
>>>>>>> 9cffc688373a8ac2a944d440877a008dd0dd5c08

const RenterMessage = () => {
  const navigate = useNavigate()
  const [selectedFile, setSelectedFile] = useState<File | null>(null)
  const fileInputRef = useRef<HTMLInputElement>(null)

  const handleAttachClick = () => {
    fileInputRef.current?.click()
  }

  const handleFileChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    if (e.target.files && e.target.files[0]) {
      setSelectedFile(e.target.files[0])
    }
  }

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    // Replace this with your upload logic
    if (selectedFile) {
      console.log("Uploading file:", selectedFile)
    }
    // Clear file after send (optional)
    setSelectedFile(null)
  }

  return (
    <div className="min-h-screen bg-gray-50">
      <AuthHeader />
      {/* Main Content */}
      <main className="mx-auto mb-12 max-w-[1440px] px-2 py-2 sm:px-4">
        {/* Title and subtitle */}
        <div className="mb-4 relative">
          <button
            className="absolute left-0 top-1/2 -translate-y-1/2 rounded p-2 hover:bg-gray-100"
            onClick={() => navigate(-1)}
            aria-label="Back"
          >
            <BackArrowIcon />
          </button>
          <div className="pl-12">
            <h1 className="mb-2 text-3xl font-bold text-gray-800">Messages</h1>
            <p className="text-base text-gray-600">
              Chat with merchants about your RFQs and equipment needs
            </p>
          </div>
        </div>
        <div className="flex min-h-0 min-h-[700px] flex-1 flex-col overflow-hidden rounded-lg bg-white shadow sm:flex-row">
          {/* Sidebar */}
          <aside className="flex w-full flex-shrink-0 flex-col border-b border-gray-200 bg-white sm:w-80 sm:border-b-0 sm:border-r">
            {/* Search */}
            <div className="border-b border-gray-200 p-4">
              <div className="relative">
                <input
                  className="w-full rounded-lg border border-gray-300 py-2 pl-10 pr-3 text-base text-gray-900 placeholder:text-[#adaebc] focus:outline-none"
                  placeholder="Search conversations..."
                  type="text"
                />
                <span className="absolute left-3 top-1/2 -translate-y-1/2">
                  <FontAwesomeIcon icon={faSearch} alt="search" className="text-gray-500 h-4 w-4" />
                </span>
              </div>
            </div>
            {/* Conversation List */}
            <div className="flex-1 overflow-y-auto">
              {/* Example Conversation 1 */}
              <div className="flex cursor-pointer items-center gap-3 border-l-4 border-blue-100 bg-blue-50 px-4 py-3">
                <img
                  src={man1}
                  alt="avatar"
                  className="h-10 w-10 rounded-full object-cover"
                />
                <div className="min-w-0 flex-1">
                  <div className="flex items-center justify-between">
                    <span className="truncate text-sm font-semibold text-gray-800">
                      Mike Johnson
                    </span>
                    <span className="text-xs text-gray-500">2m ago</span>
                  </div>
                  <div className="truncate text-xs text-gray-600">
                    Great! I have the Sony FX6 available for those dates...
                  </div>
                  <div className="mt-1 flex items-center gap-2">
                    <span className="flex items-center gap-1 rounded-full bg-green-100 px-2 py-0.5 text-xs text-green-800">
                      <span alt="verified" className="rounded-full bg-green-700 h-3 w-3"></span>{" "}
                      Verified
                    </span>
                    <span className="inline-block h-2 w-2 rounded-full bg-sky-500" />
                  </div>
                </div>
              </div>
              {/* Example Conversation 2 */}
              <div className="flex cursor-pointer items-center gap-3 border-b border-gray-100 px-4 py-3">
                <img
                  src={man2}
                  alt="avatar"
                  className="h-10 w-10 rounded-full object-cover"
                />
                <div className="min-w-0 flex-1">
                  <div className="flex items-center justify-between">
                    <span className="truncate text-sm font-semibold text-gray-800">
                      David Wilson
                    </span>
                    <span className="text-xs text-gray-500">1h ago</span>
                  </div>
                  <div className="truncate text-xs text-gray-600">
                    I can provide the lighting package you requested. Let me
                    send you the details...
                  </div>
                  <div className="mt-1 flex items-center gap-2">
                    <span className="flex items-center gap-1 rounded-full bg-green-100 px-2 py-0.5 text-xs text-green-800">
                      <span alt="verified" className="rounded-full bg-green-700 h-3 w-3"></span>{" "}
                      Verified
                    </span>
                  </div>
                </div>
              </div>
              {/* Example Conversation 3 */}
              <div className="flex cursor-pointer items-center gap-3 border-b border-gray-100 px-4 py-3">
                <img
                  src={man5}
                  alt="avatar"
                  className="h-10 w-10 rounded-full object-cover"
                />
                <div className="min-w-0 flex-1">
                  <div className="flex items-center justify-between">
                    <span className="truncate text-sm font-semibold text-gray-800">
                      Emma Thompson
                    </span>
                    <span className="text-xs text-gray-500">3h ago</span>
                  </div>
                  <div className="truncate text-xs text-gray-600">
                    Thanks for your interest! I have a complete audio setup
                    available...
                  </div>
                  <div className="mt-1 flex items-center gap-2">
                    <span className="flex items-center gap-1 rounded-full bg-green-100 px-2 py-0.5 text-xs text-green-800">
                      <span alt="verified" className="rounded-full bg-green-700 h-3 w-3"></span>{" "}
                      Verified
                    </span>
                  </div>
                </div>
              </div>
              {/* Example Conversation 4 */}
              <div className="flex cursor-pointer items-center gap-3 border-b border-gray-100 px-4 py-3">
                <img
                  src={man3}
                  alt="avatar"
                  className="h-10 w-10 rounded-full object-cover"
                />
                <div className="min-w-0 flex-1">
                  <div className="flex items-center justify-between">
                    <span className="truncate text-sm font-semibold text-gray-800">
                      James Miller
                    </span>
                    <span className="text-xs text-gray-500">1d ago</span>
                  </div>
                  <div className="truncate text-xs text-gray-600">
                    Hello! I saw your RFQ for grip equipment. I can help with
                    that...
                  </div>
                  <div className="mt-1 flex items-center gap-2">
                    <span className="flex items-center gap-1 rounded-full bg-green-100 px-2 py-0.5 text-xs text-green-800">
                      <span alt="verified" className="rounded-full bg-green-700 h-3 w-3"></span>{" "}
                      Verified
                    </span>
                  </div>
                </div>
              </div>
            </div>
          </aside>
          {/* Chat Area */}
          <section className="flex min-h-0 flex-1 flex-col bg-gray-50">
            {/* Chat header */}
            <div className="flex flex-col gap-2 border-b border-gray-200 bg-gray-50 px-4 py-3 sm:flex-row sm:items-center sm:justify-between sm:px-6 sm:py-4">
              <div className="flex items-center gap-3">
                <img
                  src={man1}
                  alt="avatar"
                  className="h-10 w-10 rounded-full object-cover"
                />
                <div>
                  <div className="text-base font-semibold text-gray-800">
                    Mike Johnson
                  </div>
                  <div className="text-xs text-gray-600">Verified Merchant</div>
                </div>
              </div>
              <div className="mt-2 flex items-center gap-2 sm:mt-0">
                <button className="flex items-center gap-1 rounded-lg bg-sky-100 px-4 py-2 text-sm font-medium text-sky-700">
                  <FontAwesomeIcon icon={faFileLines} alt="rfq" className="h-3.5 w-3.5" /> View RFQ
                </button>
                <button className="rounded-lg px-2 py-2">
                  <EllipsisVertical />
                </button>
              </div>
            </div>
            {/* Chat messages */}
            <div className="min-h-0 flex-1 space-y-8 overflow-y-auto px-2 py-4 sm:px-6 sm:py-6">
              {/* Message 1 (merchant) */}
              <div className="flex items-start gap-3">
                <img
                  src={man1}
                  alt="avatar"
                  className="h-8 w-8 rounded-full object-cover"
                />
                <div>
                  <div className="max-w-md rounded-bl-2xl rounded-br-2xl rounded-tl-lg rounded-tr-2xl bg-gray-100 px-4 py-3 text-gray-800">
                    Hi Sarah! I saw your RFQ for camera equipment. I have a Sony
                    FX6 package that would be perfect for your short film
                    project.
                  </div>
                  <div className="mt-1 text-xs text-gray-500">
                    Yesterday 3:24 PM
                  </div>
                </div>
              </div>
              {/* Message 2 (renter) */}
              <div className="flex justify-end">
                <div className="flex max-w-xl flex-row-reverse items-start gap-3">
                  <img
                    src={woman3}
                    alt="avatar"
                    className="h-8 w-8 rounded-full object-cover"
                  />
                  <div>
                    <div className="max-w-md rounded-bl-2xl rounded-br-2xl rounded-tl-2xl rounded-tr-lg bg-sky-500 px-4 py-3 text-white">
                      That sounds great! Could you send me more details about
                      what's included in the package?
                    </div>
                    <div className="mt-1 text-right text-xs text-gray-500">
                      Yesterday 3:45 PM
                    </div>
                  </div>
                </div>
              </div>
              {/* Message 3 (merchant) */}
              <div className="flex items-start gap-3">
                <img
                  src={man1}
                  alt="avatar"
                  className="h-8 w-8 rounded-full object-cover"
                />
                <div>
                  <div className="max-w-md rounded-bl-2xl rounded-br-2xl rounded-tl-lg rounded-tr-2xl bg-gray-100 px-4 py-3 text-gray-800">
                    Absolutely! The package includes:
                    <ul className="mt-2 list-disc pl-5 text-sm">
                      <li>Sony FX6 Camera Body</li>
                      <li>24-70mm f/2.8 Lens</li>
                      <li>70-200mm f/2.8 Lens</li>
                      <li>Tripod & Stabilizer</li>
                      <li>Extra Batteries & Memory Cards</li>
                    </ul>
                  </div>
                  <div className="mt-2 max-w-xs flex-row items-center gap-2 rounded-lg bg-gray-100 p-3">
                    <div className="flex">
                      <FontAwesomeIcon icon={faFilePdf} alt="pdf" className="text-red-500 h-4 w-4" />
                      <span className="mb-2 ml-2 flex text-xs text-gray-700">
                        camera-specs.pdf
                      </span>
                    </div>
                    <span className="flex text-xs text-gray-500">2.1 MB</span>
                  </div>
                  <div className="mt-1 text-xs text-gray-500">
                    Yesterday 4:12 PM
                  </div>
                </div>
              </div>
              {/* Message 4 (renter) */}
              <div className="flex justify-end">
                <div className="flex max-w-xl flex-row-reverse items-start gap-3">
                  <img
                    src={woman3}
                    alt="avatar"
                    className="h-8 w-8 rounded-full object-cover"
                  />
                  <div>
                    <div className="max-w-md rounded-bl-2xl rounded-br-2xl rounded-tl-2xl rounded-tr-lg bg-sky-500 px-4 py-3 text-white">
                      Perfect! This looks exactly like what we need. Are you
                      available for pickup on December 15th?
                    </div>
                    <div className="mt-1 text-right text-xs text-gray-500">
                      Yesterday 4:28 PM
                    </div>
                  </div>
                </div>
              </div>
              {/* Message 5 (merchant) */}
              <div className="flex items-start gap-3">
                <img
                  src={man1}
                  alt="avatar"
                  className="h-8 w-8 rounded-full object-cover"
                />
                <div>
                  <div className="max-w-md rounded-bl-2xl rounded-br-2xl rounded-tl-lg rounded-tr-2xl bg-gray-100 px-4 py-3 text-gray-800">
                    Great! I have the Sony FX6 available for those dates. Let me
                    know if you need any additional equipment.
                  </div>
                  <div className="mt-1 text-xs text-gray-500">
                    2 minutes ago
                  </div>
                </div>
              </div>
            </div>
            {/* Message input */}
            <form
              className="flex flex-row items-center gap-4 border-t border-gray-200 bg-white px-2 py-3 sm:px-6 sm:py-4"
              onSubmit={handleSubmit}
            >
              <div className="relative w-full flex-1">
                <input
                  className="w-full rounded-2xl border border-gray-300 px-4 py-3 text-base text-gray-900 placeholder:text-[#adaebc] focus:outline-none"
                  placeholder="Type your message..."
                  type="text"
                />
              </div>
              <span onClick={handleAttachClick}>
                <FontAwesomeIcon icon={faPaperclip} alt="attach" className="h-5 w-5" />
              </span>
              <input
                type="file"
                ref={fileInputRef}
                className="hidden"
                onChange={handleFileChange}
              />
              <button
                type="submit"
                className="mt-2 flex h-12 w-12 items-center justify-center rounded-2xl bg-sky-600 sm:mt-0"
              >
                <FontAwesomeIcon icon={faPaperPlane} alt="send" className="text-white h-5 w-5" />
              </button>
            </form>
            {selectedFile && (
              <div className="flex items-center gap-2 px-2 pb-2 text-xs text-gray-700 sm:px-8">
                <span>Attached:</span>
                <span className="font-medium">{selectedFile.name}</span>
                <button
                  type="button"
                  className="ml-2 text-red-500 hover:underline"
                  onClick={() => setSelectedFile(null)}
                >
                  Remove
                </button>
              </div>
            )}
            <div className="px-2 pb-4 text-xs bg-white text-gray-500 sm:px-8">
              JPG, PDF, DOC files up to 5MB
            </div>
          </section>
        </div>
      </main>
      <CommonFooter />
    </div>
  )
}

export default RenterMessage

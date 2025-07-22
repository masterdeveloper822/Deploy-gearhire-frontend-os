import { CommonFooter } from "@/components/layout/footer/common"
import { RenterHeader } from "@/components/layout/header/renter-header"
import { Button } from "@/components/ui/button"
import { Card } from "@/components/ui/card"
import { Plus } from "lucide-react"
import React from "react"
import {
  Select,
  SelectTrigger,
  SelectValue,
  SelectContent,
  SelectItem,
} from "@/components/ui/select"
import { useNavigate } from "react-router-dom"

// Image and SVG asset URLs from Figma export
const imgImg =
  "http://localhost:3845/assets/f578f9c2a181ef669150341163e63e6e9da01878.png"
const imgFrame =
  "http://localhost:3845/assets/ed4e1169b638e2e838350960320b53c878e45615.svg"
const imgFrame1 =
  "http://localhost:3845/assets/9861a0b6e8bb9b630982f192343e0944f05f6199.svg"
const imgFrame2 =
  "http://localhost:3845/assets/1efdeed862e90b5b080da5ccaa63bb5c3a6cf0bc.svg"
const imgFrame3 =
  "http://localhost:3845/assets/5c4f3c36624f887fc5373fc1e63d35a103d60fc5.svg"
const imgFrame4 =
  "http://localhost:3845/assets/ad1c22367e0b32024bf9730eb544e1cb8a5c24ef.svg"
const imgFrame5 =
  "http://localhost:3845/assets/3fb4b81e046289a29f1daa8f4528d66d37ad2c91.svg"
const imgFrame6 =
  "http://localhost:3845/assets/727f04cc8f58d671183dfaa060d0f1ac8e8cc60b.svg"
const imgFrame7 =
  "http://localhost:3845/assets/bd628ea7169604b04f36c37e820b01d9a10adeac.svg"
const imgFrame8 =
  "http://localhost:3845/assets/742dc4d2e0b005dab66144a1b5f2f48333384737.svg"
const imgFrame9 =
  "http://localhost:3845/assets/3588a83f9f36a0c1f6cbcafbac38197ad4e6e29e.svg"
const imgFrame10 =
  "http://localhost:3845/assets/5bbb44768f1a0ead1240997498feeabff6796c8c.svg"
const imgFrame11 =
  "http://localhost:3845/assets/11e343858c87c43adf774bd449873b46df3be747.svg"
const imgFrame12 =
  "http://localhost:3845/assets/cf29938f88a961c33e43a7979fa07b5699596921.svg"

const RfqList = () => {
  const navigate = useNavigate()
  return (
    <div className="min-h-screen bg-gray-50">
      <RenterHeader />

      <main className="mx-auto mb-12 max-w-[1440px] px-2 py-4 sm:px-4 sm:py-8">
        <div className="mx-auto max-w-[1152px]">
          {/* Header Section */}
          <div className="mb-8 flex flex-col gap-4 sm:flex-row sm:justify-between">
            <div className="flex flex-col justify-center">
              <h1 className="text-3xl font-bold text-gray-800">My RFQs</h1>
              <p className="mt-4 text-base text-gray-600">
                Manage your equipment requests and track quote responses
              </p>
            </div>
            <Button
              variant="tertiary"
              className="mt-4 flex h-12 items-center justify-center gap-2 rounded-lg px-6 py-2 text-base font-medium sm:mt-0"
            >
              <Plus className="!h-5 !w-5" />
              Create New RFQ
            </Button>
          </div>
          {/* Filters */}
          <Card className="mb-6 flex flex-col gap-4 p-4 sm:flex-row">
            <div className="flex-1">
              <label className="mb-1 block text-sm font-medium text-gray-700">
                Search RFQs
              </label>
              <div className="relative">
                <input
                  className="w-full rounded-lg border border-gray-300 py-2 pl-10 pr-3 text-base text-gray-900 placeholder:text-[#adaebc] focus:outline-none"
                  placeholder="Search by title or description..."
                  type="text"
                />
                <span className="absolute left-3 top-1/2 -translate-y-1/2">
                  <img src={imgFrame4} alt="search" className="h-4 w-4" />
                </span>
              </div>
            </div>
            <div className="flex-1">
              <label className="mb-1 block text-sm font-medium text-gray-700">
                Status
              </label>
              <Select>
                <SelectTrigger className="h-10 w-full rounded-lg border border-gray-300 px-3 py-2 text-base text-gray-800">
                  <SelectValue placeholder="All Status" />
                </SelectTrigger>
                <SelectContent>
                  <SelectItem value="all">All Status</SelectItem>
                  {/* Add more items as needed */}
                </SelectContent>
              </Select>
            </div>
            <div className="flex-1">
              <label className="mb-1 block text-sm font-medium text-gray-700">
                Date Range
              </label>
              <Select>
                <SelectTrigger className="h-10 w-full rounded-lg border border-gray-300 px-3 py-2 text-base text-gray-800">
                  <SelectValue placeholder="All Time" />
                </SelectTrigger>
                <SelectContent>
                  <SelectItem value="all">All Time</SelectItem>
                  {/* Add more items as needed */}
                </SelectContent>
              </Select>
            </div>
            <div className="flex-1">
              <label className="mb-1 block text-sm font-medium text-gray-700">
                Sort By
              </label>
              <Select>
                <SelectTrigger className="h-10 w-full rounded-lg border border-gray-300 px-3 py-2 text-base text-gray-800">
                  <SelectValue placeholder="Newest First" />
                </SelectTrigger>
                <SelectContent>
                  <SelectItem value="newest">Newest First</SelectItem>
                  {/* Add more items as needed */}
                </SelectContent>
              </Select>
            </div>
          </Card>
          {/* RFQ Cards */}
          <div className="space-y-4">
            {/* Example RFQ Card 1 */}
            <Card className="flex flex-col gap-2 rounded-lg bg-white p-4 shadow sm:p-6">
              <div className="flex flex-col gap-4 sm:flex-row sm:items-center sm:gap-6">
                <div className="relative min-w-0 flex-1">
                  <div>
                    <div className="pr-[60px] text-lg font-semibold text-gray-800">
                      Camera Package for Short Film
                    </div>
                    <div className="mt-1 flex flex-wrap items-center gap-4 text-sm text-gray-600">
                      <span className="flex items-center gap-1">
                        <img
                          src={imgFrame6}
                          alt="calendar"
                          className="h-3 w-3"
                        />{" "}
                        Dec 15-20, 2024
                      </span>
                      <span className="flex items-center gap-1">
                        <img
                          src={imgFrame7}
                          alt="location"
                          className="h-3 w-3"
                        />{" "}
                        London
                      </span>
                      <span className="flex items-center gap-1">
                        <img src={imgFrame8} alt="clock" className="h-3 w-3" />{" "}
                        Expires Jan 5, 2025
                      </span>
                    </div>
                    <div className="mt-2 flex flex-wrap gap-2">
                      <span className="rounded bg-blue-100 px-2 py-1 text-xs text-blue-800">
                        Camera
                      </span>
                      <span className="rounded bg-blue-100 px-2 py-1 text-xs text-blue-800">
                        Lighting
                      </span>
                      <span className="rounded bg-blue-100 px-2 py-1 text-xs text-blue-800">
                        Audio
                      </span>
                    </div>
                    <div className="mt-2 flex flex-wrap items-center gap-2 text-sm text-gray-600">
                      <span className="flex items-center gap-1">
                        <img src={imgFrame9} alt="quotes" className="h-3 w-3" />{" "}
                        5 Quotes Received
                      </span>
                    </div>
                  </div>
                  <span className="absolute right-0 top-0 rounded-full bg-green-100 px-3 py-1 text-center text-xs text-green-800">
                    Open
                  </span>
                </div>
                <div className="flex min-w-0 flex-col gap-2">
                  <div className="flex flex-wrap gap-2">
                    <Button
                      variant="tertiary"
                      className="rounded-lg px-4 py-2 text-base font-medium"
                    >
                      View Details
                    </Button>
                    <Button
                      variant="white_gray"
                      className="rounded-lg px-4 py-2 text-base font-medium"
                      onClick={() => {
                        navigate("/edit-rfq")
                      }}
                    >
                      Edit
                    </Button>
                    <Button
                      variant="white_red"
                      className="rounded-lg px-4 py-2 text-base font-medium"
                    >
                      Close RFQ
                    </Button>
                  </div>
                </div>
              </div>
            </Card>
            {/* Example RFQ Card 2 */}
            <Card className="flex flex-col gap-2 rounded-lg bg-white p-4 shadow sm:p-6">
              <div className="flex flex-col gap-4 sm:flex-row sm:items-center sm:gap-6">
                <div className="relative min-w-0 flex-1">
                  <div>
                    <div className="pr-[80px] text-lg font-semibold text-gray-800">
                      Documentary Lighting Setup
                    </div>
                    <div className="mt-1 flex flex-wrap items-center gap-4 text-sm text-gray-600">
                      <span className="flex items-center gap-1">
                        <img
                          src={imgFrame6}
                          alt="calendar"
                          className="h-3 w-3"
                        />{" "}
                        Jan 10-15, 2025
                      </span>
                      <span className="flex items-center gap-1">
                        <img
                          src={imgFrame7}
                          alt="location"
                          className="h-3 w-3"
                        />{" "}
                        Manchester
                      </span>
                      <span className="flex items-center gap-1">
                        <img src={imgFrame8} alt="clock" className="h-3 w-3" />{" "}
                        Expires Jan 8, 2025
                      </span>
                    </div>
                    <div className="mt-2 flex flex-wrap gap-2">
                      <span className="rounded bg-blue-100 px-2 py-1 text-xs text-blue-800">
                        Lighting
                      </span>
                      <span className="rounded bg-blue-100 px-2 py-1 text-xs text-blue-800">
                        Grip
                      </span>
                    </div>
                    <div className="mt-2 flex flex-wrap items-center gap-2 text-sm text-gray-600">
                      <span className="flex items-center gap-1">
                        <img src={imgFrame9} alt="quotes" className="h-3 w-3" />{" "}
                        3 Quotes Received
                      </span>
                      <span className="flex items-center gap-1 text-green-600">
                        <img
                          src={imgFrame10}
                          alt="accepted"
                          className="h-3 w-3"
                        />{" "}
                        Quote Accepted
                      </span>
                    </div>
                  </div>
                  <span className="absolute right-0 top-0 rounded-full bg-blue-100 px-3 py-1 text-center text-xs text-blue-800">
                    Accepted
                  </span>
                </div>
                <div className="flex min-w-0 flex-col gap-2">
                  <div className="flex flex-wrap gap-2">
                    <Button
                      variant="tertiary"
                      className="rounded-lg px-4 py-2 text-base font-medium"
                    >
                      View Details
                    </Button>
                    <Button
                      variant="white_gray"
                      className="rounded-lg px-4 py-2 text-base font-medium"
                      onClick={() => {
                        navigate("/edit-rfq")
                      }}
                    >
                      Edit
                    </Button>
                  </div>
                </div>
              </div>
            </Card>
            {/* Example RFQ Card 3 */}
            <Card className="flex flex-col gap-2 rounded-lg bg-white p-4 shadow sm:p-6">
              <div className="flex flex-col gap-4 sm:flex-row sm:items-center sm:gap-6">
                <div className="relative min-w-0 flex-1">
                  <div>
                    <div className="pr-[60px] text-lg font-semibold text-gray-800">
                      Audio Recording Equipment
                    </div>
                    <div className="mt-1 flex flex-wrap items-center gap-4 text-sm text-gray-600">
                      <span className="flex items-center gap-1">
                        <img
                          src={imgFrame6}
                          alt="calendar"
                          className="h-3 w-3"
                        />{" "}
                        Dec 5-8, 2024
                      </span>
                      <span className="flex items-center gap-1">
                        <img
                          src={imgFrame7}
                          alt="location"
                          className="h-3 w-3"
                        />{" "}
                        Birmingham
                      </span>
                      <span className="flex items-center gap-1">
                        <img src={imgFrame8} alt="clock" className="h-3 w-3" />{" "}
                        Expired Dec 3, 2024
                      </span>
                    </div>
                    <div className="mt-2 flex flex-wrap gap-2">
                      <span className="rounded bg-blue-100 px-2 py-1 text-xs text-blue-800">
                        Audio
                      </span>
                    </div>
                    <div className="mt-2 flex flex-wrap items-center gap-2 text-sm text-gray-600">
                      <span className="flex items-center gap-1">
                        <img src={imgFrame9} alt="sent" className="h-3 w-3" />{" "}
                        Sent to ProGear Studios
                      </span>
                    </div>
                  </div>
                  <span className="absolute right-0 top-0 rounded-full bg-gray-100 px-3 py-1 text-center text-xs text-gray-800">
                    Closed
                  </span>
                </div>
                <div className="flex min-w-0 flex-col gap-2">
                  <div className="flex flex-wrap gap-2">
                    <Button
                      variant="tertiary"
                      className="rounded-lg px-4 py-2 text-base font-medium"
                    >
                      View Details
                    </Button>
                    <Button
                      variant="white_red"
                      className="rounded-lg px-4 py-2 text-base font-medium"
                    >
                      Delete
                    </Button>
                  </div>
                </div>
              </div>
            </Card>
          </div>
          {/* Pagination */}
          <div className="mt-8 flex flex-wrap items-center justify-center gap-2">
            <button className="flex h-10 w-9 items-center justify-center rounded-lg border border-gray-300 opacity-50">
              <img src={imgFrame11} alt="prev" className="h-4 w-2.5" />
            </button>
            <button className="flex h-10 w-9 items-center justify-center rounded-lg bg-sky-600 font-normal text-white">
              1
            </button>
            <button className="flex h-10 w-9 items-center justify-center rounded-lg border border-gray-300 font-normal text-gray-600">
              2
            </button>
            <button className="flex h-10 w-9 items-center justify-center rounded-lg border border-gray-300">
              <img src={imgFrame12} alt="next" className="h-4 w-2.5" />
            </button>
          </div>
        </div>
      </main>
      <CommonFooter />
    </div>
  )
}

export default RfqList

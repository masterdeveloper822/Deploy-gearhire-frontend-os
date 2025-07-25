import React, { useState, useMemo } from "react"
import { AuthHeader } from "@/components/layout/header/auth-header"
import { RFQSidebar } from "@/components/rfq-sidebar/sidebar"

import { RespondIcon, RFQSaveIcon } from "@/components/ui/icon"
import { RFQSavedIcon } from "@/components/ui/icon"
import { LocationIcon } from "@/components/ui/icon"
import { CalendarIcon } from "@/components/ui/icon"
import { ClockIcon } from "@/components/ui/icon"
import { Button } from "@/components/ui/button"

import { mockRFQs } from "@/types/types.js"
import { statusColors } from "@/types/types.js"
import { tagColors } from "@/types/types.js"
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select"
import { Card } from "@/components/ui/card"
import { Link, useNavigate } from "react-router-dom"

export default function BrowseRFQ() {
  const [search, setSearch] = useState("")
  const [category, setCategory] = useState("")
  const [location, setLocation] = useState("")
  const [status, setStatus] = useState("")
  const [dateRange, setDateRange] = useState({ from: "", to: "" })
  const [rfqs] = useState(mockRFQs)
  const navigate = useNavigate()

  // Live filtering logic
  const filteredRFQs = useMemo(() => {
    return rfqs.filter((rfq) => {
      // Search (title or description)
      const matchesSearch =
        search.trim() === "" ||
        rfq.title.toLowerCase().includes(search.toLowerCase()) ||
        rfq.description.toLowerCase().includes(search.toLowerCase())

      // Category (at least one tag matches)
      const matchesCategory = !category || rfq.tags.includes(category)

      // Location (substring match)
      const matchesLocation =
        location.trim() === "" ||
        rfq.location.toLowerCase().includes(location.toLowerCase())

      // Status
      const matchesStatus = !status || rfq.status === status

      // Date Range (rfq.dateRange is a string like 'Jan 15 - Jan 28, 2025')
      // We'll do a simple check: if both from/to are set, rfq.dateRange must overlap
      let matchesDate = true
      if (dateRange.from && dateRange.to) {
        // Parse rfq.dateRange to get start/end
        const [startStr, endStr] = rfq.dateRange.split(" - ")
        if (startStr && endStr) {
          const start = new Date(
            startStr +
              (endStr.includes(",") ? "" : ", " + endStr.split(",")[1]),
          )
          const end = new Date(endStr)
          const filterStart = new Date(dateRange.from)
          const filterEnd = new Date(dateRange.to)
          // Check for overlap
          matchesDate = end >= filterStart && start <= filterEnd
        }
      }

      return (
        matchesSearch &&
        matchesCategory &&
        matchesLocation &&
        matchesStatus &&
        matchesDate
      )
    })
  }, [rfqs, search, category, location, status, dateRange])

  const clearAll = () => {
    setSearch("")
    setCategory("")
    setLocation("")
    setStatus("")
    setDateRange({ from: "", to: "" })
  }

  return (
    <div className="min-h-screen bg-gray-50">
      <AuthHeader />
      <div className="mx-auto flex max-w-[1440px] flex-col px-2 sm:px-4">
        {/* Main Content */}
        <main className="flex-1 p-4 sm:p-8">
          <div className="mb-8">
            <div className="flex flex-col gap-4 md:flex-row md:items-center md:gap-6">
              <div>
                <h1 className="mb-2 text-2xl font-bold text-gray-800 sm:text-3xl">
                  Browse RFQs
                </h1>
                <p className="text-sm text-gray-600 sm:text-base">
                  Find and respond to equipment requests from filmmakers
                </p>
              </div>
              <div className="flex flex-1 items-center md:justify-end">
                <Card className="relative flex h-[48px] min-w-[300px] flex-row items-center justify-start gap-4 rounded-lg px-4 py-2 sm:px-6">
                  <div className="relative flex items-center">
                    <div className="h-[14px] w-[14px] bg-[url(https://codia-f2c.s3.us-west-1.amazonaws.com/image/2025-07-18/8KmTz5QajE.png)] bg-cover bg-no-repeat" />
                    <span className="ml-3 text-[14px] font-medium leading-[16.943px] text-[#000]">
                      Browse RFQs
                    </span>
                  </div>
                  <div className="relative flex items-center">
                    <div className="relative flex items-center">
                      <div className="relative flex h-6 w-6 items-center justify-center">
                        <div className="h-[14px] w-[14px] bg-[url(https://codia-f2c.s3.us-west-1.amazonaws.com/image/2025-07-18/E47NAE1HKh.png)] bg-cover bg-no-repeat" />
                      </div>
                    </div>
                    <span className="ml-2 text-[14px] font-medium leading-[16.943px] text-[#000]">
                      Received RFQs
                    </span>
                    <div className="ml-1 flex h-6 w-6 items-center justify-center rounded-full bg-[#ef4444]">
                      <span className="text-xs font-medium text-white">3</span>
                    </div>
                  </div>
                </Card>
              </div>
            </div>
          </div>
          {/* Sidebar Filters (Component) */}
          <div className="flex flex-col gap-8 md:flex-row">
            <div className="mb-4 w-full md:mb-0 md:w-80">
              <RFQSidebar
                search={search}
                setSearch={setSearch}
                category={category}
                setCategory={setCategory}
                location={location}
                setLocation={setLocation}
                status={status}
                setStatus={setStatus}
                dateRange={dateRange}
                setDateRange={setDateRange}
                clearAll={clearAll}
              />
            </div>
            <div className="w-full flex-1">
              <div className="mb-6 flex flex-col gap-2 sm:flex-row sm:items-center sm:justify-between">
                <span className="text-sm text-gray-600">
                  Showing {filteredRFQs.length} of {rfqs.length} RFQs
                </span>
                <div className="flex items-center gap-2">
                  <div>
                    <span className="text-sm text-gray-600">Sort by:</span>
                  </div>
                  <div className="w-32">
                    <Select className="mx-0 h-9 w-full border border-gray-200 text-sm">
                      <SelectTrigger
                        id="status-select"
                        className="w-full rounded-lg"
                      >
                        <SelectValue placeholder="All Status" />
                      </SelectTrigger>
                      <SelectContent className="w-32">
                        <SelectItem value="Newest First">
                          Newest First
                        </SelectItem>
                        <SelectItem value="Oldest First">
                          Oldest First
                        </SelectItem>
                      </SelectContent>
                    </Select>
                  </div>
                </div>
              </div>
              <div className="space-y-8">
                {filteredRFQs.map((rfq) => (
                  <div
                    key={rfq.id}
                    className={`relative w-full rounded-lg border-l-4 bg-white p-4 shadow sm:p-6 ${statusColors[rfq.status] || "border-gray-200"}`}
                  >
                    <div className="mb-2 flex flex-col gap-2 sm:flex-row sm:items-center sm:gap-4">
                      <div className="flex flex-1 items-center gap-2">
                        <Link to="/rfq-detail">
                          <h2 className="cursor-pointer text-lg font-semibold text-gray-800 sm:text-xl">
                            {rfq.title}
                          </h2>
                        </Link>
                        <span
                          className={`rounded-full px-3 py-1 text-xs font-medium ${statusColors[rfq.status] || "border-gray-300 bg-gray-100 text-gray-600"}`}
                        >
                          {rfq.status}
                        </span>
                      </div>
                      <div className="ml-auto p-2">
                        {rfq.saved === "yes" ? (
                          <RFQSavedIcon />
                        ) : (
                          <RFQSaveIcon />
                        )}
                      </div>
                    </div>
                    <div className="mb-2 flex flex-wrap items-center gap-4 text-xs text-gray-600 sm:gap-6 sm:text-sm">
                      <span className="flex items-center gap-1">
                        <LocationIcon />
                        {rfq.location}
                      </span>
                      <span className="flex items-center gap-1">
                        <CalendarIcon />
                        {rfq.dateRange}
                      </span>
                      <span className="flex items-center gap-1">
                        <ClockIcon />
                        {rfq.expires}
                      </span>
                    </div>
                    <div className="mb-2 flex flex-wrap items-center gap-2">
                      {rfq.tags.map((tag) => (
                        <span
                          key={tag}
                          className={`rounded-full px-3 py-1 text-xs font-medium ${tagColors[tag] || "bg-blue-100 text-blue-700"}`}
                        >
                          {tag}
                        </span>
                      ))}
                    </div>
                    <p className="mb-2 line-clamp-2 text-xs text-gray-600 sm:text-base">
                      {rfq.description}
                    </p>
                    <div className="mt-4 flex flex-col gap-2 sm:flex-row sm:items-center sm:justify-between">
                      <span className="text-xs text-gray-500">
                        Posted by {rfq.postedBy} • {rfq.postedAgo}
                      </span>
                      <div className="flex gap-2">
                        {rfq.status === "Open" && (
                          <Link to="/add-quote">
                            <Button
                              variant="tertiary"
                              className="rounded-lg px-6 py-2 text-base"
                            >
                              <span className="flex items-center gap-2">
                                <RespondIcon />
                                Respond
                              </span>
                            </Button>
                          </Link>
                        )}
                        {rfq.status === "Closed" && (
                          <button className="cursor-not-allowed rounded-lg bg-gray-200 px-6 py-2 font-medium text-gray-500">
                            Closed
                          </button>
                        )}
                        {rfq.status === "Accepted" && (
                          <button className="cursor-default rounded-lg bg-sky-100 px-6 py-2 font-medium text-sky-700">
                            Accepted
                          </button>
                        )}
                      </div>
                    </div>
                  </div>
                ))}
              </div>
              <div className="mt-10 flex justify-center">
                <button className="w-full max-w-xs rounded-lg border border-gray-200 bg-white px-6 py-3 font-medium text-gray-700 shadow hover:bg-gray-100">
                  Load More RFQs
                </button>
              </div>
            </div>
          </div>
        </main>
      </div>
    </div>
  )
}

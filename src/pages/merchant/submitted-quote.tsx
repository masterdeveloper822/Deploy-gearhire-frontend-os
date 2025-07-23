import React, { useState } from "react"
import { MerchantHeader } from "@/components/layout/header/merchant-header"
import { Card } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Typography } from "@/components/ui/typography"

import { mockSubmittedQuotes } from "@/types/types.js"
import { statusColors, statusIconColors } from "@/types/types.js"

import { AcceptedStateIcon, BackArrowIcon } from "@/components/ui/icon"
import { useNavigate } from "react-router-dom"
import {
  Select,
  SelectTrigger,
  SelectValue,
  SelectContent,
  SelectItem,
} from "@/components/ui/select"
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"
import { faCalendar, faCalendarDay, faCalendarDays, faLocationDot } from "@fortawesome/free-solid-svg-icons"

const imgImg =
  "http://localhost:3845/assets/410c340aa057242400c608368f918307cdd72438.png"
const imgFrame =
  "http://localhost:3845/assets/ed4e1169b638e2e838350960320b53c878e45615.svg"
const imgFrame1 =
  "http://localhost:3845/assets/e23f57a2af62e42bd83fb2f8760ed0b74b1af3c6.svg"
const imgFrame2 =
  "http://localhost:3845/assets/1efdeed862e90b5b080da5ccaa63bb5c3a6cf0bc.svg"
const imgFrame3 =
  "http://localhost:3845/assets/aa466758cde76b5a218860ec71500af7d0ad95a6.svg"
const imgFrame4 =
  "http://localhost:3845/assets/3fd0d7b64e2c64324bbb7fa48f1ac67994d7e0dc.svg"
const imgFrame5 =
  "http://localhost:3845/assets/be9738393f22ee35d14d6b5667879fc160ba90ca.svg"
const imgFrame6 =
  "http://localhost:3845/assets/b47c513615e83381206231731cfedd5c2740247b.svg"

const statusOptions = ["All Status", "Open", "Closed", "Accepted"]
const sortOptions = ["Newest First", "Oldest First"]

const SubmittedQuotesPage: React.FC = () => {
  const navigate = useNavigate()
  const [selectedStatus, setSelectedStatus] = useState("All Status")
  const [selectedSort, setSelectedSort] = useState("Newest First")

  return (
    <div className="min-h-screen bg-gray-50">
      <MerchantHeader />
      <main className="mx-auto max-w-[1440px] px-4 py-8">
        {/* Page Title */}
        <div className="mx-auto max-w-[1280px]">
          <div className="mb-2 flex items-center gap-2">
            <button
              className="rounded px-2"
              onClick={() => navigate(-1)}
              aria-label="Back"
            >
              <BackArrowIcon />
            </button>
            <Typography variant="h2" className="mb-2">
              My Submitted Quotes
            </Typography>
          </div>
          <Typography variant="body" className="mb-6 text-gray-600">
            Track your quote submissions and follow up with renters
          </Typography>
        </div>
        {/* Filter/Sort Bar */}
        <Card className="mx-auto my-6 flex max-w-[1280px] flex-col items-center gap-4 rounded-lg bg-white px-6 py-4 shadow-sm sm:flex-row">
          <div className="flex items-center gap-2">
            <span className="text-sm font-medium text-gray-700">
              Filter by Status:
            </span>
            <Select value={selectedStatus} onValueChange={setSelectedStatus}>
              <SelectTrigger id="status-select" className="h-9 w-[110px]">
                <SelectValue placeholder="All Status" />
              </SelectTrigger>
              <SelectContent className="w-full">
                {statusOptions.map((opt) => (
                  <SelectItem key={opt} value={opt} className="capitalize">
                    {opt}
                  </SelectItem>
                ))}
              </SelectContent>
            </Select>
          </div>
          <div className="flex min-w-[250px] flex-1 items-center justify-end gap-3 pr-3 sm:pr-0">
            <span className="whitespace-nowrap text-sm font-medium text-gray-700">
              Sort by:
            </span>
            <Select value={selectedSort} onValueChange={setSelectedSort}>
              <SelectTrigger id="sort-select" className="h-9 w-[140px]">
                <SelectValue placeholder="Newest First" />
              </SelectTrigger>
              <SelectContent>
                {sortOptions.map((opt) => (
                  <SelectItem key={opt} value={opt} className="capitalize">
                    {opt}
                  </SelectItem>
                ))}
              </SelectContent>
            </Select>
          </div>
        </Card>
        {/* Quote Cards */}
        <div className="mx-auto flex max-w-[1280px] flex-col gap-6">
          {mockSubmittedQuotes.map((card, idx) => (
            <Card
              key={idx}
              className={`relative rounded-lg border-0 border-l-4 p-6 shadow-sm ${statusColors[card.status]} flex flex-col items-stretch bg-white md:flex-row`}
            >
              <div className="flex flex-1 flex-col gap-2">
                <div className="flex flex-row items-center gap-4">
                  <Typography
                    variant="h3"
                    className="text-lg font-semibold text-gray-800"
                  >
                    {card.title}
                  </Typography>
                </div>
                <div className="mt-2 flex flex-row gap-6">
                  <div className="flex items-center gap-1 text-sm text-gray-500">
                    <FontAwesomeIcon icon={faLocationDot} alt="Location" className="text-tertiary h-4 w-4" />
                    {card.location}
                  </div>
                  <div className="flex items-center gap-1 text-sm text-gray-500">
                    <FontAwesomeIcon icon={faCalendarDays} alt="Date" className="text-tertiary h-4 w-4" />
                    {card.dateRange}
                  </div>
                </div>
                <div className="mt-2 flex flex-row gap-2">
                  {card.categories.map((cat) => (
                    <span
                      key={cat}
                      className="rounded-full bg-blue-100 px-3 py-1 text-xs font-medium text-blue-700"
                    >
                      {cat}
                    </span>
                  ))}
                </div>
                <div className="mt-4 flex flex-row gap-2 text-sm text-gray-600">
                  <span className="font-medium">Quote submitted:</span>
                  <span>{card.submitted}</span>
                </div>
              </div>

              <div className="mt-3 flex flex-col gap-3 sm:flex-row md:ml-auto md:mt-0">
                <span
                  className={`mr-3 flex h-9 items-center gap-1 rounded-full px-3 py-1 text-sm font-medium ${statusColors[card.status]}`}
                >
                  {card.status === "Accepted" ? (
                    <AcceptedStateIcon />
                  ) : (
                    <span
                      className={`${statusIconColors[card.status]}`}
                      style={{
                        display: "inline-flex",
                        alignItems: "center",
                        justifyContent: "center",
                        width: 12,
                        height: 12,
                        borderRadius: "50%",
                        marginRight: 4,
                      }}
                    ></span>
                  )}
                  {card.status}
                </span>
                <Button
                  variant="tertiary"
                  className="h-9 px-3 py-2 text-base font-normal"
                >
                  View RFQ
                </Button>
                {card.status == "accepted" ? (
                  <Button className="mb-2 w-full last:mb-0">
                    Continue Chat
                  </Button>
                ) : (
                  <Button className="h-9 border-0 bg-gray-100 px-3 py-2 text-base font-normal text-gray-900 hover:bg-sky-100">
                    Open Chat
                  </Button>
                )}
                {card.title === "Drone Equipment for Documentary" && (
                  <Button
                    variant="colored_orange"
                    className="h-9 px-3 py-2 text-base font-normal"
                  >
                    Resubmit Quote
                  </Button>
                )}
              </div>
            </Card>
          ))}
        </div>
      </main>
    </div>
  )
}

export default SubmittedQuotesPage

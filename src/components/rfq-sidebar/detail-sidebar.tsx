import { Card } from "@/components/ui/card"
import { faCalendar, faClock, faLocationDot } from "@fortawesome/free-solid-svg-icons"
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"
import React from "react"

interface DetailSidebarProps {
  title: string
  location: string
  dateRange: string
  expiry: string
  categories: string[]
  description: string
  posterName: string
  posterAvatar: string
  postedAgo: string
  locationIcon: string
  dateIcon: string
  expiryIcon: string
}

export const DetailSidebar: React.FC<DetailSidebarProps> = ({
  title,
  location,
  dateRange,
  expiry,
  categories,
  description,
  posterName,
  posterAvatar,
  postedAgo,
  expiryIcon,
}) => (
  <Card className="w-full rounded-lg p-6 lg:w-[400px]">
    <h2 className="mb-3 text-lg font-semibold text-gray-800">RFQ Details</h2>
    <div className="mb-4 border-l-4 border-sky-400 pl-4">
      <div className="mb-2 text-base font-semibold text-gray-800">{title}</div>
      <div className="mb-1 flex items-center text-sm text-gray-600">
        <FontAwesomeIcon icon={faLocationDot} alt="Date" className="mr-2 h-4 w-4" />
        {location}
      </div>
      <div className="mb-1 flex items-center text-sm text-gray-600">
        <FontAwesomeIcon icon={faCalendar} alt="Date" className="mr-2 h-4 w-4" />
        {dateRange}
      </div>
      <div className="flex items-center text-sm text-gray-600">
        <FontAwesomeIcon icon={faClock} alt="Expires" className="mr-2 h-4 w-4" />
        {expiry}
      </div>
    </div>
    <div className="mb-4">
      <div className="mb-2 font-medium text-gray-700">Equipment Categories</div>
      <div className="flex gap-2">
        {categories.map((cat) => (
          <span
            key={cat}
            className="rounded-full bg-blue-100 px-3 py-1 text-xs text-blue-700"
          >
            {cat}
          </span>
        ))}
      </div>
    </div>
    <div className="mb-4">
      <div className="mb-2 font-medium text-gray-700">Description</div>
      <div className="text-sm text-gray-600">{description}</div>
    </div>
    <div className="flex items-center gap-3 border-t pt-4">
      <img
        src={posterAvatar}
        alt={posterName}
        className="h-8 w-8 rounded-full"
      />
      <div>
        <div className="text-sm font-medium text-gray-800">{posterName}</div>
        <div className="text-xs text-gray-500">{postedAgo}</div>
      </div>
    </div>
  </Card>
)

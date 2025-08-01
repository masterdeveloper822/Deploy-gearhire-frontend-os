import React from "react"
import { Card } from "@/components/ui/card"
import { Typography } from "@/components/ui/typography"
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"
import { faCalendarDays, faFilePdf, faLocationDot } from "@fortawesome/free-solid-svg-icons"

export interface AttachedFile {
  name: string
  size: string
  icon: string
  downloadIcon?: string
}

export interface RequestDetailProps {
  categories: string[]
  location: string
  locationIcon?: string
  rentalDates: string
  rentalDatesIcon?: string
  description: string
  attachedFiles: AttachedFile[]
}

export const RequestDetail: React.FC<RequestDetailProps> = ({
  categories,
  location,
  rentalDates,
  description,
  attachedFiles,
}) => {
  return (
    <Card className="p-6">
      <Typography variant="cardSubTitle">Equipment Request Details</Typography>
      <div className="mt-4 flex flex-col flex-wrap">
        <Typography variant="body">Equipment Categories</Typography>
        <div className="mt-2 flex gap-2">
          {categories.map((cat) => (
            <span
              key={cat}
              className="inline-flex items-center rounded-full bg-blue-100 px-3 py-1 text-sm text-blue-700"
            >
              {cat}
            </span>
          ))}
        </div>
      </div>
      <div className="my-4 flex w-full flex-col flex-wrap">
        <div className="flex w-full">
          <div className="w-1/2 pr-4">
            <Typography variant="body">Pickup Location</Typography>
            <div className="mt-2 flex items-center">
              <FontAwesomeIcon icon={faLocationDot} alt="Location" className="text-tertiary h-4 w-4" />
              <span className="ml-2 text-gray-600">{location}</span>
            </div>
          </div>
          <div className="w-1/2 pl-4">
            <Typography variant="body">Rental Dates</Typography>
            <div className="mt-2 flex items-center">
              <FontAwesomeIcon icon={faCalendarDays} alt="Dates" className="text-tertiary h-4 w-4" />
              <span className="ml-2 text-gray-600">{rentalDates}</span>
            </div>
          </div>
        </div>
      </div>
      <div className="mb-3">
        <h3 className="mb-3 font-medium text-gray-700">Description</h3>
        <Typography className="text-base text-gray-600">
          {description}
        </Typography>
      </div>
      {/* Attached Files */}
      <div>
        <h3 className="mb-2 font-medium text-gray-700">Attached Files</h3>
        {attachedFiles.map((file) => (
          <div
            key={file.name}
            className="mb-2 flex items-center rounded-lg bg-gray-100 p-3"
          >
            {file.icon}
            <div className="flex-1">
              <Typography variant="caption" className="text-gray-900">
                {file.name}
              </Typography>
              <div className="text-xs text-gray-500">{file.size}</div>
            </div>
            {file.downloadIcon && (
              <button className="ml-3">
                { file.downloadIcon }
              </button>
            )}
          </div>
        ))}
      </div>
    </Card>
  )
}

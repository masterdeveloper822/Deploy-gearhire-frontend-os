import React from "react"
import { Card } from "@/components/ui/card"
import { Typography } from "@/components/ui/typography"
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"
import { faCalendar, faClock } from "@fortawesome/free-solid-svg-icons"

export interface BasicInfoProps {
  title: string
  status: string
  statusIcon: string
  isPublic: boolean
  publicIcon: string
  postedDate: string
  postedIcon: string
  expiresDate: string
  expiresIcon: string
  publisherAvatar: string
  publisherName: string
  publisherRole: string
}

export const BasicInfo: React.FC<BasicInfoProps> = ({
  title,
  status,
  isPublic,
  postedDate,
  expiresDate,
  publisherAvatar,
  publisherName,
  publisherRole,
}) => {
  return (
    <Card className="mb-6 p-6">
      <div className="mb-6 flex flex-col gap-2">
        <div className="flex flex-col gap-2 sm:flex-row sm:items-start sm:justify-between">
          <div className="flex flex-wrap items-center">
            <div className="sm:min-w-[380px]">
              <Typography variant="cardSubTitle">{title}</Typography>
            </div>
            <div className="my-1">
              <span className="inline-flex items-center rounded-full bg-green-100 px-3 py-1 text-sm font-medium text-green-800">
                <span className="inline-block h-3 w-3 rounded-full bg-green-800 mr-1" />
                {status}
              </span>
              {isPublic && (
                <span className="ml-2 inline-flex items-center rounded-full bg-blue-100 px-3 py-1 text-sm font-medium text-blue-800">
                  <span className="inline-block h-3 w-3 rounded-full bg-blue-800 mr-1" />
                  Public
                </span>
              )}
            </div>
          </div>
          <div className="mt-2 flex w-full flex-col flex-wrap gap-1 sm:mt-0 sm:items-end">
            <div>
              <div className="flex flex-row items-start gap-4 sm:flex-col sm:gap-0">
                <span className="inline-flex items-center text-sm text-gray-500">
                  <FontAwesomeIcon icon={faCalendar} alt="Posted" className="mr-3 h-4 w-4" />
                  {postedDate}
                </span>
                <span className="inline-flex items-center text-sm text-gray-500 sm:mt-1">
                  <FontAwesomeIcon
                    icon={faClock}
                    alt="Expires"
                    className="mr-3 h-4 w-4"
                  />
                  {expiresDate}
                </span>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="h-px w-full bg-gray-200" />
      <div className="mt-4 flex items-center gap-4">
        <div
          className="h-10 w-10 rounded-full bg-cover bg-center"
          style={{ backgroundImage: `url('${publisherAvatar}')` }}
        />
        <div>
          <div className="font-medium text-gray-800">{publisherName}</div>
          <div className="text-sm text-gray-500">{publisherRole}</div>
        </div>
      </div>
    </Card>
  )
}

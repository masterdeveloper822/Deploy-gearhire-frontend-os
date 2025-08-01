import React from "react"
import { AuthHeader } from "@/components/layout/header/auth-header"
import { Link, useNavigate } from "react-router-dom"
import { BackArrowIcon } from "@/components/ui/icon"
import { Card } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { BasicInfo } from "@/components/rfq-detail/basic-info"
import {
  RequestDetail,
  AttachedFile,
} from "@/components/rfq-detail/request-detail"

import woman3 from "@/assets/images/avatars/woman3.png"
import { faDownload, faFileImage, faFilePdf, faFlag, faPaperPlane } from "@fortawesome/free-solid-svg-icons"
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"
import { faBookmark } from "@fortawesome/free-regular-svg-icons"
<<<<<<< HEAD
=======
const imgFrame6 =
  "http://localhost:3845/assets/84a21b5522e90764105b42d00080ffd918b13743.svg"
const imgFrame7 =
  "http://localhost:3845/assets/5bae80b73ddaa48065d9895f5449eda33c84bf92.svg"
const imgFrame8 =
  "http://localhost:3845/assets/3e37af258052bda7f0fa4f26b86313a9420fb018.svg"
const imgFrame9 =
  "http://localhost:3845/assets/70b0413e7b2ddfae6a4410971d41808652cbc9e1.svg"
const imgFrame10 =
  "http://localhost:3845/assets/9421ac7b9341d210b910662c4fe7d9f28bf56477.svg"
const imgFrame11 =
  "http://localhost:3845/assets/cba9e88b03c5870708570303c8083d008fc40dec.svg"
const imgFrame12 =
  "http://localhost:3845/assets/eb6cba590cab38215da137ee00caa9eae1e3e6b4.svg"
const imgFrame13 =
  "http://localhost:3845/assets/393b2c64082c1298f54496bda3e1b323df69b7a4.svg"
const imgFrame14 =
  "http://localhost:3845/assets/c407408351cd5e908095876a7fc9f60c7cf46f2c.svg"
const imgFrame15 =
  "http://localhost:3845/assets/c52f7aeeefb472b09e2554420fc7263bb419498d.svg"
>>>>>>> 9cffc688373a8ac2a944d440877a008dd0dd5c08

const RFQDetails: React.FC = () => {
  const navigate = useNavigate()

  // Static data for the info and detail cards
  const categories = ["Camera", "Lens", "Stabilizer"]
  const location = "Los Angeles, CA"
  const rentalDates = "Jan 15 - Jan 28, 2025"
  const description =
    "Looking for a complete cinema camera package including RED or ARRI camera body, prime lens set, and professional stabilization system for independent feature production. Need reliable equipment with backup options available. The shoot involves both interior and exterior scenes, so weather-sealed equipment is preferred. We have insurance coverage and can provide references from previous productions."
  const attachedFiles: AttachedFile[] = [
    {
      name: "Equipment_Requirements.pdf",
      size: "2.4 MB",
      icon: <FontAwesomeIcon icon={faFilePdf}  className="text-whity-red mr-3 h-4 w-4"  />,
      downloadIcon: <FontAwesomeIcon icon={faDownload} className="text-tertiary h-4 w-4"/>,
    },
    {
      name: "Reference_Setup.jpg",
      size: "1.8 MB",
      icon: <FontAwesomeIcon icon={faFileImage}  className="text-tertiary mr-3 h-4 w-4" />,
      downloadIcon: <FontAwesomeIcon icon={faDownload} className="text-tertiary h-4 w-4"/>,

    },
  ]

  return (
    <div className="min-h-screen bg-gray-50">
      <AuthHeader />
      <main className="flex min-h-[calc(100vh-64px)] items-center justify-center px-2 py-4 sm:px-4 sm:py-8">
        <div className="w-full max-w-full sm:max-w-[1300px]">
          <div className="mb-2 flex flex-wrap items-center gap-2 sm:gap-4">
            <button
              className="rounded px-2"
              onClick={() => navigate(-1)}
              aria-label="Back"
            >
              <BackArrowIcon />
            </button>
            <h1 className="text-[22px] font-bold text-gray-800 sm:text-[30px]">
              RFQ Details
            </h1>
          </div>
          <div className="mt-4 flex flex-col gap-6 lg:mt-6 lg:flex-row">
            {/* Left: Main RFQ Details */}
            <div className="w-full max-w-full flex-1 rounded-lg lg:max-w-[830px]">
              <BasicInfo
                title="Cinema Camera Package for Feature Film"
                status="Open"
                isPublic={true}
                postedDate="Posted Jan 8, 2025"
                expiresDate="Expires Jan 10, 2025"
                publisherAvatar={woman3}
                publisherName="Sarah Chen"
                publisherRole="Independent Producer"
              />
              <RequestDetail
                categories={categories}
                location={location}
                rentalDates={rentalDates}
                description={description}
                attachedFiles={attachedFiles}
              />
            </div>
            {/* Right: Actions & Stats */}
            <div className="w-full max-w-full flex-shrink-0 lg:max-w-[400px] lg:self-start">
              <Card className="p-4 sm:p-6">
                <div className="rounded-lg bg-white shadow-sm">
                  <h3 className="mb-4 text-base font-semibold text-gray-800 sm:text-lg">
                    Actions
                  </h3>
                  <Button
                    variant="tertiary"
                    className="mb-3 flex h-12 w-full items-center justify-center gap-2 rounded-lg text-base"
                    onClick={() => {
                      navigate("/add-quote")
                    }}
                  >
                    <FontAwesomeIcon
                      icon={faPaperPlane}
                      alt="Submit Quote"
                      className="h-4 w-4"
                    />
                    Submit Quote
                  </Button>
                  <button className="mb-3 flex w-full items-center justify-center gap-2 rounded-lg bg-gray-100 py-3 font-medium text-gray-700">
                    <FontAwesomeIcon icon={faBookmark} alt="Save RFQ" className="h-4 w-4" />
                    Save RFQ
                  </button>
                  <button className="flex w-full items-center justify-center gap-2 rounded-lg bg-red-50 py-3 font-medium text-red-600">
                    <FontAwesomeIcon
                      icon={faFlag}
                      alt="Report RFQ"
                      className="h-4 w-4"
                    />
                    Report RFQ
                  </button>
                </div>
                <div className="my-6 h-px w-full bg-gray-200" />
                <div className="rounded-lg bg-white shadow-sm">
                  <h3 className="mb-3 text-base font-semibold text-gray-800 sm:text-lg">
                    RFQ Statistics
                  </h3>
                  <div className="mb-2 flex items-center justify-between text-sm text-gray-600">
                    <span>Views</span>
                    <span className="font-medium text-gray-800">24</span>
                  </div>
                  <div className="mb-2 flex items-center justify-between text-sm text-gray-600">
                    <span>Quotes Submitted</span>
                    <span className="font-medium text-gray-800">3</span>
                  </div>
                  <div className="flex items-center justify-between text-sm text-gray-600">
                    <span>Time Remaining</span>
                    <span className="font-medium text-red-600">1 day</span>
                  </div>
                </div>
              </Card>
            </div>
          </div>
        </div>
      </main>
    </div>
  )
}

export default RFQDetails

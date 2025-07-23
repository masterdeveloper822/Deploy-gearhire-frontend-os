import React from "react"
import { CommonFooter } from "@/components/layout/footer/common"
import { RenterHeader } from "@/components/layout/header/renter-header"
import { Card } from "@/components/ui/card"
import { Plus } from "lucide-react"
import { Button } from "@/components/ui/button"

import man1 from "@/assets/images/avatars/man1.png"
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"
import { faEnvelope, faLocationDot, faMessage, faStar, faUpRightFromSquare } from "@fortawesome/free-solid-svg-icons"
import { DottedQuestionIcon } from "@/components/ui/icon"
import { faInstagram, faLinkedin, faTwitter } from "@fortawesome/free-brands-svg-icons"
import equip7 from "@/assets/images/equipment/equip7.png"
import equip8 from "@/assets/images/equipment/equip8.png"
import equip9 from "@/assets/images/equipment/equip9.png"
import equip10 from "@/assets/images/equipment/equip10.png"
import equip11 from "@/assets/images/equipment/equip11.png"
import equip12 from "@/assets/images/equipment/equip12.png"

const MerchantProfile: React.FC = () => {
  return (
    <div className="min-h-screen bg-gray-50">
      {/* Header */}
      <RenterHeader />
      <main className="mx-auto mb-12 flex max-w-6xl flex-col gap-6 px-4 py-8 md:px-6 lg:px-8">
        <div>
          <Card className="flex flex-col items-center justify-between gap-6 p-6 md:flex-row md:gap-8 md:p-8">
            <div className="grid gap-6">
              <div className="flex items-center gap-6">
                <img
                  src={man1}
                  alt="Merchant Profile"
                  className="h-20 w-20 rounded-full border-4 border-gray-200 object-cover md:h-24 md:w-24"
                />
                <div className="flex flex-col justify-center">
                  <div className="mb-2 flex items-center gap-3">
                    <h2 className="pb-2 text-xl font-bold text-gray-800 md:text-2xl">
                      ProGear Studios
                    </h2>
                    <span className="flex items-center gap-1 rounded-full bg-green-100 px-2 py-1 text-xs font-medium text-green-700 shadow">
                        <DottedQuestionIcon alt="Verified" className="h-4 w-4" />
                      Verified
                    </span>
                  </div>
                  <div className="mb-2 flex items-center gap-2 text-sm text-gray-600 md:text-base">
                    <FontAwesomeIcon icon={faLocationDot} alt="Location" className="h-4 w-4" />{" "}
                    Los Angeles, CA
                  </div>
                  <div className="flex items-center">
                    {[...Array(5)].map((_, i) => (
                      <FontAwesomeIcon
                        key={i}
                        icon={faStar}
                        alt="Star"
                        className="text-yellow-400 h-4 w-4"
                      />
                    ))}
                    <span className="ml-1 text-sm text-gray-600 sm:mr-4">
                      4.9 (27 reviews)
                    </span>
                    <a
                      href="#"
                      className="hidden items-center gap-1 text-sm text-sky-600 sm:flex"
                    >
                      <FontAwesomeIcon icon={faUpRightFromSquare} alt="Website" className="h-4 w-4" />{" "}
                      Website
                    </a>
                  </div>
                  <div className="mt-2 flex items-center gap-1 sm:hidden">
                    <a
                      href="#"
                      className="flex items-center gap-2 text-sm text-sky-600"
                    >
                      <FontAwesomeIcon icon={faUpRightFromSquare} alt="Website" className="h-4 w-4" />{" "}
                      Website
                    </a>
                  </div>
                </div>
              </div>
            </div>
            <div className="flex w-full flex-row items-center justify-center gap-2 md:w-auto md:flex-col md:items-end">
              <div className="flex w-full flex-row items-center justify-center gap-2 md:w-auto md:flex-col md:items-end">
                <button className="flex w-full items-center justify-center gap-2 rounded-lg bg-sky-600 px-4 py-2 font-medium text-white md:w-[124px] md:px-6">
                  <Plus className="h-5 w-5" /> Follow
                </button>
                <button className="flex w-full items-center justify-center gap-2 rounded-lg border border-sky-600 px-4 py-2 font-medium text-sky-600 md:w-[148px] md:px-6">
                  <FontAwesomeIcon icon={faEnvelope} alt="Message" className="h-4 w-4" />{" "}
                  Message
                </button>
              </div>
            </div>
          </Card>
        </div>
        <div className="flex w-full flex-col items-start gap-8 md:flex-row">
          {/* Sidebar */}
          <Card className="flex w-full shrink-0 flex-col rounded-lg bg-white p-6 shadow md:w-64">
            <div className="mb-6 w-full text-left">
              <h3 className="mb-1 font-semibold text-gray-800">About</h3>
              <p className="text-sm text-gray-600">
                Professional film equipment rental house serving the greater Los
                Angeles area for over 10 years. We specialize in high-end
                cameras, lighting, and grip equipment for feature films,
                commercials, and documentaries.
              </p>
            </div>
            <div className="mb-6 w-full text-left">
              <h3 className="mb-1 font-semibold text-gray-800">
                Equipment Categories
              </h3>
              <div className="flex flex-wrap gap-2">
                <span className="rounded-full bg-gray-100 px-4 py-1 text-sm text-gray-700">
                  Cameras
                </span>
                <span className="rounded-full bg-gray-100 px-4 py-1 text-sm text-gray-700">
                  Lighting
                </span>
                <span className="rounded-full bg-gray-100 px-4 py-1 text-sm text-gray-700">
                  Grip
                </span>
                <span className="rounded-full bg-gray-100 px-4 py-1 text-sm text-gray-700">
                  Audio
                </span>
              </div>
            </div>
            <div className="w-full text-left">
              <h3 className="mb-1 font-semibold text-gray-800">Connect</h3>
              <div className="flex gap-3">
                <FontAwesomeIcon icon={faInstagram} alt="Instagram" className="text-gray-600 h-4 w-4" />
                <FontAwesomeIcon icon={faLinkedin} alt="LinkedIn" className="text-gray-600 h-4 w-4" />
                <FontAwesomeIcon icon={faTwitter} alt="Website" className="text-gray-600 h-4 w-4" />
              </div>
            </div>
          </Card>
          {/* Main Content */}
          <Card className="w-full flex-1">
            {/* Tabs */}
            <div className="flex flex-wrap border-b border-gray-300">
              <button className="border-b-2 border-sky-600 px-4 py-3 font-medium text-sky-600 md:px-6 md:py-4">
                Inventory
              </button>
              <button className="px-4 py-3 font-medium text-gray-600 md:px-6 md:py-4">
                Reviews
              </button>
              <button className="px-4 py-3 font-medium text-gray-600 md:px-6 md:py-4">
                Training Courses
              </button>
            </div>
            <div className="p-4 md:p-6">
              <h1 className="mb-4 flex flex-col items-start justify-between gap-2 text-xl font-bold text-gray-800 md:mb-6 md:flex-row md:items-center md:text-2xl">
                Available Equipment{" "}
                <span className="text-sm font-normal text-gray-500 md:text-base">
                  24 items
                </span>
              </h1>
              {/* Equipment Grid */}
              <div className="grid grid-cols-1 gap-4 sm:grid-cols-2 md:grid-cols-2 lg:grid-cols-3">
                {/* Card 1 */}
                <div className="overflow-hidden rounded-lg bg-white shadow">
                  <img
                    src={equip7}
                    alt="RED Komodo 6K"
                    className="h-48 w-full object-cover"
                  />
                  <div className="p-4">
                    <h2 className="mb-1 text-lg font-semibold text-gray-800">
                      RED Komodo 6K
                    </h2>
                    <p className="mb-2 text-sm text-gray-600">Cinema Camera</p>
                    <Button
                      variant="tertiary"
                      className="w-full rounded-lg px-6 py-2 text-base font-medium"
                    >
                      View Details
                    </Button>
                  </div>
                </div>
                {/* Card 2 */}
                <div className="overflow-hidden rounded-lg bg-white shadow">
                  <img
                    src={equip8}
                    alt="ARRI SkyPanel S60-C"
                    className="h-48 w-full object-cover"
                  />
                  <div className="p-4">
                    <h2 className="mb-1 text-lg font-semibold text-gray-800">
                      ARRI SkyPanel S60-C
                    </h2>
                    <p className="mb-2 text-sm text-gray-600">LED Panel</p>
                    <Button
                      variant="tertiary"
                      className="w-full rounded-lg px-6 py-2 text-base font-medium"
                    >
                      View Details
                    </Button>
                  </div>
                </div>
                {/* Card 3 */}
                <div className="overflow-hidden rounded-lg bg-white shadow">
                  <img
                    src={equip9}
                    alt="Sony FX6"
                    className="h-48 w-full object-cover"
                  />
                  <div className="p-4">
                    <h2 className="mb-1 text-lg font-semibold text-gray-800">
                      Sony FX6
                    </h2>
                    <p className="mb-2 text-sm text-gray-600">Cinema Camera</p>
                    <Button
                      variant="tertiary"
                      className="w-full rounded-lg px-6 py-2 text-base font-medium"
                    >
                      View Details
                    </Button>
                  </div>
                </div>
                {/* Card 4 */}
                <div className="overflow-hidden rounded-lg bg-white shadow">
                  <img
                    src={equip10}
                    alt="Canon 24-70mm f/2.8"
                    className="h-48 w-full object-cover"
                  />
                  <div className="p-4">
                    <h2 className="mb-1 text-lg font-semibold text-gray-800">
                      Canon 24-70mm f/2.8
                    </h2>
                    <p className="mb-2 text-sm text-gray-600">Camera Lens</p>
                    <Button
                      variant="tertiary"
                      className="w-full rounded-lg px-6 py-2 text-base font-medium"
                    >
                      View Details
                    </Button>
                  </div>
                </div>
                {/* Card 5 */}
                <div className="overflow-hidden rounded-lg bg-white shadow">
                  <img
                    src={equip11}
                    alt="Steadicam Vest & Arm"
                    className="h-48 w-full object-cover"
                  />
                  <div className="p-4">
                    <h2 className="mb-1 text-lg font-semibold text-gray-800">
                      Steadicam Vest & Arm
                    </h2>
                    <p className="mb-2 text-sm text-gray-600">Stabilizer</p>
                    <Button
                      variant="tertiary"
                      className="w-full rounded-lg px-6 py-2 text-base font-medium"
                    >
                      View Details
                    </Button>
                  </div>
                </div>
                {/* Card 6 */}
                <div className="overflow-hidden rounded-lg bg-white shadow">
                  <img
                    src={equip12}
                    alt="Rode Wireless GO II"
                    className="h-48 w-full object-cover"
                  />
                  <div className="p-4">
                    <h2 className="mb-1 text-lg font-semibold text-gray-800">
                      Rode Wireless GO II
                    </h2>
                    <p className="mb-2 text-sm text-gray-600">Wireless Mic</p>
                    <Button
                      variant="tertiary"
                      className="w-full rounded-lg px-6 py-2 text-base font-medium"
                    >
                      View Details
                    </Button>
                  </div>
                </div>
              </div>
              {/* Load More Button */}
              <div className="mt-8 flex justify-center">
                <button className="rounded-lg border border-gray-300 px-8 py-3 font-medium text-gray-700">
                  Load More Equipment
                </button>
              </div>
            </div>
          </Card>
        </div>
      </main>
      <CommonFooter />
    </div>
  )
}

export default MerchantProfile

import React from "react"
import { AuthHeader } from "@/components/layout/header/auth-header"
import { CommonFooter } from "@/components/layout/footer/common"
import { BackArrowIcon, DottedQuestionIcon } from "@/components/ui/icon"
import { useNavigate } from "react-router-dom"
import { Button } from "@/components/ui/button"
import { Card } from "@/components/ui/card"

import equip1 from "@/assets/images/equipment/equip1-2.png"
import equip1_3 from "@/assets/images/equipment/equip1-3.png"
import equip4 from "@/assets/images/equipment/equip4-2.png"
import equip5 from "@/assets/images/equipment/equip5-2.png"
import equip2 from "@/assets/images/equipment/equip2-2.png"
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"
import { faHeart } from "@fortawesome/free-regular-svg-icons"

import man2 from "@/assets/images/avatars/man2.png"
import { faClock, faEye, faFileVideo, faMessage, faPalette, faPlug, faPlus, faVideo } from "@fortawesome/free-solid-svg-icons"

const EquipmentDetail: React.FC = () => {
  const navigate = useNavigate()
  return (
    <div className="min-h-screen bg-gray-50">
      <AuthHeader />
      <main className="mx-auto max-w-7xl px-4 py-8">
        {/* Back Button at the very top */}
        <div>
          <button
            className="mb-6 flex items-center gap-2 text-gray-600"
            onClick={() => navigate(-1)}
          >
            <BackArrowIcon /> Back to Equipment
          </button>
        </div>
        {/* Main content row */}
        <div className="flex flex-col gap-8 lg:flex-row">
          {/* Left/Main Section */}
          <section className="flex-1">
            {/* Main Image */}
            <Card className="relative mb-8">
              <img
                src={equip1_3}
                alt="RED Dragon 6K Cinema Camera"
                className="h-96 w-full rounded-t-lg object-cover"
              />
              <button className="absolute right-4 top-4 rounded-full bg-white/90 px-3 py-2 shadow">
                <FontAwesomeIcon icon={faHeart} alt="Favorite" className="text-gray-700 h-4 w-4" />
              </button>
              {/* Category and Title */}
              <div className="p-6">
                <span className="mb-2 inline-block rounded-full bg-sky-50 px-4 py-2 text-xs font-medium text-sky-600">
                  Camera
                </span>
                <h1 className="mb-4 text-3xl font-bold text-gray-800">
                  RED Dragon 6K Cinema Camera
                </h1>
                {/* Merchant Info */}
                <div className="mb-4 flex items-center gap-3">
                  <img
                    src={man2}
                    alt="Merchant"
                    className="h-8 w-8 rounded-full object-cover"
                  />
                  <span className="font-medium text-gray-700">
                    CineGear Pro
                  </span>
                  <span className="text-blue-500">
                      <DottedQuestionIcon alt="Verified" className="h-4 w-4" />
                    </span>
                  <span className="text-sm text-gray-500">• Vancouver, BC</span>
                </div>
              </div>
            </Card>
            {/* Specifications */}
            <Card className="mb-8 rounded-lg bg-white p-6 shadow">
              <h2 className="mb-4 text-xl font-semibold text-gray-800">
                Specifications
              </h2>
              <ul className="space-y-3">
                <li className="flex items-center gap-3 text-gray-700">
                  <FontAwesomeIcon icon={faVideo} alt="Spec" className="text-tertiary h-4 w-4" /> 6K
                  Resolution (6144 x 3160)
                </li>
                <li className="flex items-center gap-3 text-gray-700">
                  <FontAwesomeIcon icon={faEye} alt="Spec" className="text-tertiary h-4 w-4" /> Super35
                  Dragon Sensor
                </li>
                <li className="flex items-center gap-3 text-gray-700">
                  <FontAwesomeIcon icon={faPalette} alt="Spec" className="text-tertiary h-4 w-4" /> 16.5+
                  Stops Dynamic Range
                </li>
                <li className="flex items-center gap-3 text-gray-700">
                  <FontAwesomeIcon icon={faClock} alt="Spec" className="text-tertiary h-4 w-4" /> Up to
                  75fps at 6K, 300fps at 2K
                </li>
                <li className="flex items-center gap-3 text-gray-700">
                  <FontAwesomeIcon icon={faFileVideo} alt="Spec" className="text-tertiary h-4 w-4" /> REDCODE
                  RAW, ProRes, DNxHR
                </li>
                <li className="flex items-center gap-3 text-gray-700">
                  <FontAwesomeIcon icon={faPlug} alt="Spec" className="text-tertiary h-4 w-4" /> Canon
                  EF Mount (PL Mount available)
                </li>
              </ul>
            </Card>
            {/* Additional Images */}
            <Card className="mb-8 rounded-lg bg-white p-6 shadow">
              <h2 className="mb-4 text-xl font-semibold text-gray-800">
                Additional Images
              </h2>
              <div className="grid grid-cols-2 gap-2 sm:grid-cols-4 sm:gap-4">
                <div className="aspect-square">
                  <img
                    src={equip1}
                    alt="Main"
                    className="h-full w-auto rounded-lg border-2 border-sky-500 object-cover mx-auto"
                  />
                </div>
                <div className="aspect-square">
                  <img
                    src={equip4}
                    alt="Alt1"
                    className="h-full w-full overflow-hidden rounded-lg object-cover"
                  />
                </div>
                <div className="aspect-square">
                  <img
                    src={equip5}
                    alt="Alt2"
                    className="h-full w-full rounded-lg object-cover"
                  />
                </div>
                <div className="aspect-square">
                  <img
                    src={equip2}
                    alt="Alt3"
                    className="h-full w-full rounded-lg object-cover"
                  />
                </div>
              </div>
            </Card>
            {/* Notes from Merchant */}
            <Card className="mb-8 rounded-lg bg-white p-6 shadow">
              <h2 className="mb-4 text-xl font-semibold text-gray-800">
                Notes from Merchant
              </h2>
              <p className="mb-2 text-gray-700">
                This RED Dragon 6K is in excellent condition and has been
                meticulously maintained. Perfect for high-end commercial and
                narrative productions. Includes full rig setup with monitor,
                follow focus, and battery system. Compatible with both Canon EF
                and PL mount lenses. Ideal for projects requiring maximum image
                quality and flexibility in post-production.
              </p>
            </Card>
          </section>
          {/* Right Sidebar */}
          <aside className="flex w-full flex-shrink-0 flex-col gap-6 lg:w-96">
            {/* About the Merchant */}
            <Card className="rounded-lg bg-white p-6 shadow">
              <h3 className="mb-4 text-lg font-semibold text-gray-800">
                About the Merchant
              </h3>
              <div className="mb-2 flex items-center gap-3">
                <img
                  src={man2}
                  alt="Merchant"
                  className="h-12 w-12 rounded-full object-cover"
                />
                <div>
                  <div className="flex items-center gap-1 font-semibold text-gray-800">
                    CineGear Pro{" "}
                    <span className="text-blue-500">
                      <DottedQuestionIcon alt="Verified" className="h-4 w-4" />
                    </span>
                  </div>
                  <div className="text-sm text-gray-600">Vancouver, BC</div>
                </div>
              </div>
              <p className="mb-4 text-sm text-gray-600">
                Professional cinema equipment rental house specializing in
                high-end camera systems and support gear for commercial and
                feature productions.
              </p>
              <Button
                variant="tertiary"
                className="mb-2 w-full rounded-lg px-6 py-3 text-base font-medium shadow"
              >
                View Profile
              </Button>
              <Button
                variant="ghost"
                className="w-full rounded-lg border border-gray-300 px-6 py-3 text-base font-medium text-gray-700 shadow"
              >
                View Inventory
              </Button>
            </Card>
            {/* Interested in this item? */}
            <Card className="rounded-lg bg-white p-6 shadow">
              <h3 className="mb-4 text-lg font-semibold text-gray-800">
                Interested in this item?
              </h3>
              <Button
                variant="colored_green"
                className="mb-2 flex w-full items-center justify-center gap-2 rounded-lg px-6 py-3 text-base font-medium shadow"
              >
                <FontAwesomeIcon icon={ faPlus } className="h-3 w-3" /> Create RFQ for this Item
              </Button>
              <Button
                variant="white_sky"
                className="mb-2 flex w-full items-center justify-center gap-2 rounded-lg px-6 py-3 text-base font-medium shadow"
              >
                <FontAwesomeIcon icon={faMessage} alt="Message" className="h-5 w-5" />{" "}
                Message Merchant
              </Button>
              <div className="mt-2 text-center text-xs text-gray-500">
                No pricing shown. Connect directly with the merchant to discuss
                availability and terms.
              </div>
            </Card>
          </aside>
        </div>
      </main>
      <CommonFooter />
    </div>
  )
}

export default EquipmentDetail

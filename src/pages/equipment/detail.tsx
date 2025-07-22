import React from "react"
import { RenterHeader } from "@/components/layout/header/renter-header"
import { CommonFooter } from "@/components/layout/footer/common"
import { BackArrowIcon } from "@/components/ui/icon"
import { useNavigate } from "react-router-dom"
import { Button } from "@/components/ui/button"
import { Card } from "@/components/ui/card"
import { PlusIcon } from "lucide-react"

// Image and SVG asset URLs from Figma export
const imgImg =
  "http://localhost:3845/assets/410c340aa057242400c608368f918307cdd72438.png"
const imgImg1 =
  "http://localhost:3845/assets/c6031a5de036466f56dc8e2773036ec26805ea92.png"
const imgImg2 =
  "http://localhost:3845/assets/1d5ad8aaf12fd61a75197f707f6ef40c7edd6e1f.png"
const imgImg3 =
  "http://localhost:3845/assets/2452158bfd7fe391a3978751295d9d708fd7903d.png"
const imgImg4 =
  "http://localhost:3845/assets/78ad89b9aad9447fee94a60babfea0f75b48166e.png"
const imgImg5 =
  "http://localhost:3845/assets/4a6d225ab75de462bf8a83b8f42e91a3030c8f42.png"
const imgFrame =
  "http://localhost:3845/assets/ed4e1169b638e2e838350960320b53c878e45615.svg"
const imgFrame1 =
  "http://localhost:3845/assets/9861a0b6e8bb9b630982f192343e0944f05f6199.svg"
const imgFrame2 =
  "http://localhost:3845/assets/1efdeed862e90b5b080da5ccaa63bb5c3a6cf0bc.svg"
const imgFrame3 =
  "http://localhost:3845/assets/aa466758cde76b5a218860ec71500af7d0ad95a6.svg"
const imgFrame4 =
  "http://localhost:3845/assets/3496f07f6bab83974d24f957ae205dd5463ac6fb.svg"
const imgGroup =
  "http://localhost:3845/assets/3b6ff71c4db63e62edb39a255a4d2259a9326726.svg"
const imgFrame5 =
  "http://localhost:3845/assets/851809fd751c9da4701484f7bc230870e15d78b8.svg"
const imgFrame6 =
  "http://localhost:3845/assets/aa1c8dfe8f9a1c867fb6f73e56d9c0b455b65c3f.svg"
const imgFrame7 =
  "http://localhost:3845/assets/f82d87f05cd1175900b40fd59ad36c6915c69720.svg"
const imgFrame8 =
  "http://localhost:3845/assets/c54a61cac07b8a4954063beed3c1efe5e8faa472.svg"
const imgFrame9 =
  "http://localhost:3845/assets/d17d274d626d1479f3a20f1de814512ae375faa0.svg"
const imgFrame10 =
  "http://localhost:3845/assets/41d90f637c0233def4aa86ae904365a2bec74fdd.svg"
const imgFrame11 =
  "http://localhost:3845/assets/5c4f3c36624f887fc5373fc1e63d35a103d60fc5.svg"
const imgFrame12 =
  "http://localhost:3845/assets/79ef3f4a124c2e03ea7279a797609bcf5c7176b8.svg"

const EquipmentDetail: React.FC = () => {
  const navigate = useNavigate()
  return (
    <div className="min-h-screen bg-gray-50">
      <RenterHeader />
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
                src={imgImg1}
                alt="RED Dragon 6K Cinema Camera"
                className="h-96 w-full rounded-t-lg object-cover"
              />
              <button className="absolute right-4 top-4 rounded-full bg-white/90 p-3 shadow">
                <img src={imgFrame4} alt="Favorite" className="h-6 w-6" />
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
                    src={imgImg2}
                    alt="Merchant"
                    className="h-8 w-8 rounded-full object-cover"
                  />
                  <span className="font-medium text-gray-700">
                    CineGear Pro
                  </span>
                  <img src={imgGroup} alt="Verified" className="h-4 w-4" />
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
                  <img src={imgFrame5} alt="Spec" className="h-5 w-5" /> 6K
                  Resolution (6144 x 3160)
                </li>
                <li className="flex items-center gap-3 text-gray-700">
                  <img src={imgFrame6} alt="Spec" className="h-5 w-5" /> Super35
                  Dragon Sensor
                </li>
                <li className="flex items-center gap-3 text-gray-700">
                  <img src={imgFrame7} alt="Spec" className="h-5 w-5" /> 16.5+
                  Stops Dynamic Range
                </li>
                <li className="flex items-center gap-3 text-gray-700">
                  <img src={imgFrame8} alt="Spec" className="h-5 w-5" /> Up to
                  75fps at 6K, 300fps at 2K
                </li>
                <li className="flex items-center gap-3 text-gray-700">
                  <img src={imgFrame9} alt="Spec" className="h-5 w-5" /> REDCODE
                  RAW, ProRes, DNxHR
                </li>
                <li className="flex items-center gap-3 text-gray-700">
                  <img src={imgFrame10} alt="Spec" className="h-5 w-5" /> Canon
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
                    src={imgImg1}
                    alt="Main"
                    className="h-full w-full rounded-lg border-2 border-sky-500 object-cover"
                  />
                </div>
                <div className="aspect-square">
                  <img
                    src={imgImg3}
                    alt="Alt1"
                    className="h-full w-full rounded-lg object-cover"
                  />
                </div>
                <div className="aspect-square">
                  <img
                    src={imgImg4}
                    alt="Alt2"
                    className="h-full w-full rounded-lg object-cover"
                  />
                </div>
                <div className="aspect-square">
                  <img
                    src={imgImg5}
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
                  src={imgImg2}
                  alt="Merchant"
                  className="h-12 w-12 rounded-full object-cover"
                />
                <div>
                  <div className="flex items-center gap-1 font-semibold text-gray-800">
                    CineGear Pro{" "}
                    <img src={imgGroup} alt="Verified" className="h-4 w-4" />
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
                <PlusIcon className="h-5 w-5" /> Create RFQ for this Item
              </Button>
              <Button
                variant="white_sky"
                className="mb-2 flex w-full items-center justify-center gap-2 rounded-lg px-6 py-3 text-base font-medium shadow"
              >
                <img src={imgFrame12} alt="Message" className="h-5 w-5" />{" "}
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

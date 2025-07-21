import React from "react"
import { RenterHeader } from "@/components/layout/header/renter-header"
import { CommonFooter } from "@/components/layout/footer/common"

// Image and SVG asset URLs from Figma export
const imgImg =
  "http://localhost:3845/assets/410c340aa057242400c608368f918307cdd72438.png"
const imgImg1 =
  "http://localhost:3845/assets/c6031a5de036466f56dc8e2773036ec26805ea92.png"
const imgImg2 =
  "http://localhost:3845/assets/1d5ad8aaf12fd61a75197f707f6ef40c7edd6e1f.png"
const imgImg3 =
  "http://localhost:3845/assets/4a6d225ab75de462bf8a83b8f42e91a3030c8f42.png"
const imgImg4 =
  "http://localhost:3845/assets/ec901f1c0d6bdc3abb3b7f2578c96a444ee001e2.png"
const imgImg5 =
  "http://localhost:3845/assets/6932bef90a236331295c89b26725ce63ada3f532.png"
const imgImg6 =
  "http://localhost:3845/assets/bec21fc75386a86210d32bec8ca98fcb2380d21e.png"
const imgImg7 =
  "http://localhost:3845/assets/2452158bfd7fe391a3978751295d9d708fd7903d.png"
const imgImg8 =
  "http://localhost:3845/assets/1ecb12199697dd16c82152392c0b02a04bd85271.png"
const imgImg9 =
  "http://localhost:3845/assets/78ad89b9aad9447fee94a60babfea0f75b48166e.png"
const imgImg10 =
  "http://localhost:3845/assets/157a8cae4c47674ef06c93dae0edece12ad3c0a6.png"
const imgImg11 =
  "http://localhost:3845/assets/3af456c127980b82adba965b9d9e0383b10f0a29.png"
const imgImg12 =
  "http://localhost:3845/assets/93261e682a4fc24925831eb042e025379dab45ab.png"
const imgFrame =
  "http://localhost:3845/assets/ed4e1169b638e2e838350960320b53c878e45615.svg"
const imgFrame1 =
  "http://localhost:3845/assets/9861a0b6e8bb9b630982f192343e0944f05f6199.svg"
const imgFrame2 =
  "http://localhost:3845/assets/1efdeed862e90b5b080da5ccaa63bb5c3a6cf0bc.svg"
const imgFrame3 =
  "http://localhost:3845/assets/d2989890a47036eb3eba43c9b9ea24bc925f1b69.svg"
const imgFrame4 =
  "http://localhost:3845/assets/1151dd5a8a661dc7b4075423fe864a3209140e35.svg"
const imgFrame5 =
  "http://localhost:3845/assets/3496f07f6bab83974d24f957ae205dd5463ac6fb.svg"
const imgGroup =
  "http://localhost:3845/assets/6b361ecba5c41862d4e4249610cf33728c12d1f9.svg"
const imgFrame6 =
  "http://localhost:3845/assets/f3f266a6575b79ab545a87d9b2e97be446a999cc.svg"

const BrowseEquipment: React.FC = () => {
  return (
    <div className="min-h-screen bg-gray-50">
      <RenterHeader />
      <main className="mx-auto max-w-7xl px-4 py-8">
        {/* Header */}
        <div className="mb-8">
          <h1 className="mb-1 text-3xl font-bold text-gray-800">
            Browse Equipment
          </h1>
          <p className="text-gray-600">
            Discover professional film equipment from verified merchants
          </p>
        </div>
        {/* Search & Filters */}
        <div className="mb-8 flex flex-wrap gap-4">
          <div className="relative w-full max-w-md">
            <input
              className="w-full rounded-lg border border-gray-300 py-3 pl-10 pr-4 text-base text-gray-900"
              placeholder="Search equipment..."
            />
            <span className="absolute left-3 top-1/2 -translate-y-1/2">
              <img src={imgFrame3} alt="Search" className="h-5 w-5" />
            </span>
          </div>
          <select className="rounded-lg border border-gray-300 px-4 py-3 text-base text-gray-900">
            <option>All Categories</option>
          </select>
          <select className="rounded-lg border border-gray-300 px-4 py-3 text-base text-gray-900">
            <option>All Locations</option>
          </select>
          <label className="flex cursor-pointer select-none items-center gap-2">
            <span className="relative inline-block h-6 w-10">
              <input type="checkbox" className="peer sr-only" />
              <span className="absolute left-0 top-0 h-6 w-10 rounded-full bg-gray-300 transition peer-checked:bg-sky-600" />
              <span className="absolute left-1 top-1 h-4 w-4 rounded-full bg-white shadow transition peer-checked:translate-x-4" />
            </span>
            <span className="text-sm font-medium text-gray-700">
              Favourites Only
            </span>
          </label>
        </div>
        {/* Equipment Cards Grid */}
        <div className="grid grid-cols-1 gap-8 md:grid-cols-2 lg:grid-cols-3">
          {/* Card 1 */}
          <div className="overflow-hidden rounded-lg bg-white shadow">
            <div className="relative">
              <img
                src={imgImg1}
                alt="RED Dragon 6K Cinema Camera"
                className="h-48 w-full object-cover"
              />
              <button className="absolute right-3 top-3 rounded-full bg-white/90 p-2 shadow">
                <img src={imgFrame5} alt="Favorite" className="h-5 w-5" />
              </button>
            </div>
            <div className="p-6">
              <span className="mb-2 inline-block rounded-full bg-sky-50 px-3 py-1 text-xs font-medium text-sky-600">
                Camera
              </span>
              <h2 className="mb-1 text-lg font-semibold text-gray-800">
                RED Dragon 6K Cinema Camera
              </h2>
              <p className="mb-4 text-sm text-gray-600">
                Professional cinema camera with 6K resolution, dual ISO, and
                comprehensive codec support for high-end productions.
              </p>
              <div className="mb-4 flex items-center gap-2">
                <img
                  src={imgImg2}
                  alt="Merchant"
                  className="h-6 w-6 rounded-full object-cover"
                />
                <span className="text-sm text-gray-600">CineGear Pro</span>
                <img src={imgGroup} alt="Verified" className="h-3 w-3" />
              </div>
              <button className="w-full rounded-lg bg-sky-600 px-6 py-2 font-medium text-white">
                View Details
              </button>
            </div>
          </div>
          {/* Card 2 */}
          <div className="overflow-hidden rounded-lg bg-white shadow">
            <div className="relative">
              <img
                src={imgImg3}
                alt="Aputure 300D LED Light"
                className="h-48 w-full object-cover"
              />
              <button className="absolute right-3 top-3 rounded-full bg-white/90 p-2 shadow">
                <img src={imgFrame6} alt="Favorite" className="h-5 w-5" />
              </button>
            </div>
            <div className="p-6">
              <span className="mb-2 inline-block rounded-full bg-green-50 px-3 py-1 text-xs font-medium text-green-600">
                Lighting
              </span>
              <h2 className="mb-1 text-lg font-semibold text-gray-800">
                Aputure 300D LED Light
              </h2>
              <p className="mb-4 text-sm text-gray-600">
                Powerful daylight-balanced LED with wireless control, perfect
                for interviews and commercial shoots.
              </p>
              <div className="mb-4 flex items-center gap-2">
                <img
                  src={imgImg4}
                  alt="Merchant"
                  className="h-6 w-6 rounded-full object-cover"
                />
                <span className="text-sm text-gray-600">LightWorks Studio</span>
                <img src={imgGroup} alt="Verified" className="h-3 w-3" />
              </div>
              <button className="w-full rounded-lg bg-sky-600 px-6 py-2 font-medium text-white">
                View Details
              </button>
            </div>
          </div>
          {/* Card 3 */}
          <div className="overflow-hidden rounded-lg bg-white shadow">
            <div className="relative">
              <img
                src={imgImg5}
                alt="Rode NTG3 Shotgun Mic"
                className="h-48 w-full object-cover"
              />
              <button className="absolute right-3 top-3 rounded-full bg-white/90 p-2 shadow">
                <img src={imgFrame5} alt="Favorite" className="h-5 w-5" />
              </button>
            </div>
            <div className="p-6">
              <span className="mb-2 inline-block rounded-full bg-purple-50 px-3 py-1 text-xs font-medium text-purple-600">
                Audio
              </span>
              <h2 className="mb-1 text-lg font-semibold text-gray-800">
                Rode NTG3 Shotgun Mic
              </h2>
              <p className="mb-4 text-sm text-gray-600">
                Professional broadcast-quality shotgun microphone with superior
                RF immunity and low noise floor.
              </p>
              <div className="mb-4 flex items-center gap-2">
                <img
                  src={imgImg6}
                  alt="Merchant"
                  className="h-6 w-6 rounded-full object-cover"
                />
                <span className="text-sm text-gray-600">AudioVision</span>
                <img src={imgGroup} alt="Verified" className="h-3 w-3" />
              </div>
              <button className="w-full rounded-lg bg-sky-600 px-6 py-2 font-medium text-white">
                View Details
              </button>
            </div>
          </div>
          {/* Card 4 */}
          <div className="overflow-hidden rounded-lg bg-white shadow">
            <div className="relative">
              <img
                src={imgImg7}
                alt="DJI Ronin-S Gimbal"
                className="h-48 w-full object-cover"
              />
              <button className="absolute right-3 top-3 rounded-full bg-white/90 p-2 shadow">
                <img src={imgFrame5} alt="Favorite" className="h-5 w-5" />
              </button>
            </div>
            <div className="p-6">
              <span className="mb-2 inline-block rounded-full bg-orange-50 px-3 py-1 text-xs font-medium text-orange-600">
                Grip
              </span>
              <h2 className="mb-1 text-lg font-semibold text-gray-800">
                DJI Ronin-S Gimbal
              </h2>
              <p className="mb-4 text-sm text-gray-600">
                3-axis handheld gimbal stabilizer for DSLR and mirrorless
                cameras up to 3.6kg payload.
              </p>
              <div className="mb-4 flex items-center gap-2">
                <img
                  src={imgImg8}
                  alt="Merchant"
                  className="h-6 w-6 rounded-full object-cover"
                />
                <span className="text-sm text-gray-600">Motion Masters</span>
                <img src={imgGroup} alt="Verified" className="h-3 w-3" />
              </div>
              <button className="w-full rounded-lg bg-sky-600 px-6 py-2 font-medium text-white">
                View Details
              </button>
            </div>
          </div>
          {/* Card 5 */}
          <div className="overflow-hidden rounded-lg bg-white shadow">
            <div className="relative">
              <img
                src={imgImg9}
                alt="Canon 24-70mm f/2.8L"
                className="h-48 w-full object-cover"
              />
              <button className="absolute right-3 top-3 rounded-full bg-white/90 p-2 shadow">
                <img src={imgFrame6} alt="Favorite" className="h-5 w-5" />
              </button>
            </div>
            <div className="p-6">
              <span className="mb-2 inline-block rounded-full bg-blue-50 px-3 py-1 text-xs font-medium text-blue-600">
                Accessories
              </span>
              <h2 className="mb-1 text-lg font-semibold text-gray-800">
                Canon 24-70mm f/2.8L
              </h2>
              <p className="mb-4 text-sm text-gray-600">
                Professional zoom lens with constant f/2.8 aperture, ideal for
                versatile shooting scenarios.
              </p>
              <div className="mb-4 flex items-center gap-2">
                <img
                  src={imgImg10}
                  alt="Merchant"
                  className="h-6 w-6 rounded-full object-cover"
                />
                <span className="text-sm text-gray-600">Lens Library</span>
                <img src={imgGroup} alt="Verified" className="h-3 w-3" />
              </div>
              <button className="w-full rounded-lg bg-sky-600 px-6 py-2 font-medium text-white">
                View Details
              </button>
            </div>
          </div>
          {/* Card 6 */}
          <div className="overflow-hidden rounded-lg bg-white shadow">
            <div className="relative">
              <img
                src={imgImg11}
                alt="Gitzo Carbon Fiber Tripod"
                className="h-48 w-full object-cover"
              />
              <button className="absolute right-3 top-3 rounded-full bg-white/90 p-2 shadow">
                <img src={imgFrame5} alt="Favorite" className="h-5 w-5" />
              </button>
            </div>
            <div className="p-6">
              <span className="mb-2 inline-block rounded-full bg-orange-50 px-3 py-1 text-xs font-medium text-orange-600">
                Grip
              </span>
              <h2 className="mb-1 text-lg font-semibold text-gray-800">
                Gitzo Carbon Fiber Tripod
              </h2>
              <p className="mb-4 text-sm text-gray-600">
                Ultra-lightweight carbon fiber tripod with exceptional stability
                for professional camera work.
              </p>
              <div className="mb-4 flex items-center gap-2">
                <img
                  src={imgImg12}
                  alt="Merchant"
                  className="h-6 w-6 rounded-full object-cover"
                />
                <span className="text-sm text-gray-600">Support Systems</span>
                <img src={imgGroup} alt="Verified" className="h-3 w-3" />
              </div>
              <button className="w-full rounded-lg bg-sky-600 px-6 py-2 font-medium text-white">
                View Details
              </button>
            </div>
          </div>
        </div>
        {/* Load More Button */}
        <div className="mt-10 flex justify-center">
          <button className="rounded-lg border border-gray-300 px-8 py-3 font-medium text-gray-700">
            Load More Equipment
          </button>
        </div>
      </main>
      <CommonFooter />
    </div>
  )
}

export default BrowseEquipment

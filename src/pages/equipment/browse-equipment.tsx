import React from "react"
import { RenterHeader } from "@/components/layout/header/renter-header"
import { CommonFooter } from "@/components/layout/footer/common"
import { Card } from "@/components/ui/card"
import { Switch } from "@/components/ui/switch"
import { Button } from "@/components/ui/button"
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select"
import { Input } from "@/components/ui/input"
import { Link } from "react-router-dom"

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

// Mock data for equipment with original structure
const equipmentData = [
  {
    id: 1,
    image: imgImg1,
    title: "RED Dragon 6K Cinema Camera",
    description:
      "Professional cinema camera with 6K resolution, dual ISO, and comprehensive codec support for high-end productions.",
    category: "Camera",
    categoryClass: "bg-sky-50 text-sky-600",
    merchantImage: imgImg2,
    merchantName: "CineGear Pro",
    isFavorite: true,
  },
  {
    id: 2,
    image: imgImg3,
    title: "Aputure 300D LED Light",
    description:
      "Powerful daylight-balanced LED with wireless control, perfect for interviews and commercial shoots.",
    category: "Lighting",
    categoryClass: "bg-green-50 text-green-600",
    merchantImage: imgImg4,
    merchantName: "LightWorks Studio",
    isFavorite: false,
  },
  {
    id: 3,
    image: imgImg5,
    title: "Rode NTG3 Shotgun Mic",
    description:
      "Professional broadcast-quality shotgun microphone with superior RF immunity and low noise floor.",
    category: "Audio",
    categoryClass: "bg-purple-50 text-purple-600",
    merchantImage: imgImg6,
    merchantName: "AudioVision",
    isFavorite: true,
  },
  {
    id: 4,
    image: imgImg7,
    title: "DJI Ronin-S Gimbal",
    description:
      "3-axis handheld gimbal stabilizer for DSLR and mirrorless cameras up to 3.6kg payload.",
    category: "Grip",
    categoryClass: "bg-orange-50 text-orange-600",
    merchantImage: imgImg8,
    merchantName: "Motion Masters",
    isFavorite: true,
  },
  {
    id: 5,
    image: imgImg9,
    title: "Canon 24-70mm f/2.8L",
    description:
      "Professional zoom lens with constant f/2.8 aperture, ideal for versatile shooting scenarios.",
    category: "Accessories",
    categoryClass: "bg-blue-50 text-blue-600",
    merchantImage: imgImg10,
    merchantName: "Lens Library",
    isFavorite: false,
  },
  {
    id: 6,
    image: imgImg11,
    title: "Gitzo Carbon Fiber Tripod",
    description:
      "Ultra-lightweight carbon fiber tripod with exceptional stability for professional camera work.",
    category: "Grip",
    categoryClass: "bg-orange-50 text-orange-600",
    merchantImage: imgImg12,
    merchantName: "Support Systems",
    isFavorite: true,
  },
]

const BrowseEquipment: React.FC = () => {
  return (
    <div className="min-h-screen bg-gray-50">
      <RenterHeader />
      <main className="mx-auto w-full max-w-7xl px-2 py-4 sm:px-4 sm:py-8">
        {/* Header */}
        <div className="mb-8 px-1 sm:px-0">
          <h1 className="mb-2 text-2xl font-bold text-gray-800 sm:mb-4 sm:text-3xl">
            Browse Equipment
          </h1>
          <p className="text-sm text-gray-600 sm:text-base">
            Discover professional film equipment from verified merchants
          </p>
        </div>
        {/* Search & Filters */}
        <Card className="mb-8 flex flex-col gap-4 rounded-md p-4 sm:flex-row sm:gap-4 sm:p-6">
          <div className="relative w-full sm:w-2/5">
            <Input
              className="h-12 w-full rounded-lg border border-gray-300 py-3 pl-10 pr-4 !text-base text-gray-900"
              placeholder="Search equipment..."
            />
            <span className="absolute left-3 top-1/2 -translate-y-1/2">
              <img src={imgFrame3} alt="Search" className="h-5 w-5" />
            </span>
          </div>
          <Select>
            <SelectTrigger className="h-12 w-full rounded-lg border-gray-300 text-base text-gray-900 sm:w-1/5">
              <SelectValue placeholder="All Categories" />
            </SelectTrigger>
            <SelectContent>
              <SelectItem value="all" className="h-10">
                All Categories
              </SelectItem>
              <SelectItem value="camera" className="h-10">
                Camera
              </SelectItem>
              <SelectItem value="lighting" className="h-10">
                Lighting
              </SelectItem>
              <SelectItem value="audio" className="h-10">
                Audio
              </SelectItem>
              <SelectItem value="grip" className="h-10">
                Grip
              </SelectItem>
              <SelectItem value="accessories" className="h-10">
                Accessories
              </SelectItem>
            </SelectContent>
          </Select>
          <Select>
            <SelectTrigger className="h-12 w-full rounded-lg border-gray-300 text-base text-gray-900 sm:w-1/5">
              <SelectValue placeholder="All Locations" />
            </SelectTrigger>
            <SelectContent>
              <SelectItem value="all" className="h-10">
                All Locations
              </SelectItem>
              <SelectItem value="new-york" className="h-10">
                New York
              </SelectItem>
              <SelectItem value="los-angeles" className="h-10">
                Los Angeles
              </SelectItem>
              <SelectItem value="chicago" className="h-10">
                Chicago
              </SelectItem>
            </SelectContent>
          </Select>
          <label className="flex w-full cursor-pointer select-none items-center gap-3 sm:w-1/5">
            <Switch
              id="favourites-only"
              className="data-[state=checked]:bg-tertiary"
            />
            <span className="text-sm font-medium text-gray-700">
              Favourites Only
            </span>
          </label>
        </Card>

        {/* Equipment Cards Grid */}
        <div className="xs:grid-cols-2 grid grid-cols-1 gap-6 md:grid-cols-3">
          {equipmentData.map((item) => (
            <div
              key={item.id}
              className="overflow-hidden rounded-lg bg-white shadow"
            >
              <div className="relative">
                <img
                  src={item.image}
                  alt={item.title}
                  className="h-44 w-full object-cover sm:h-48"
                />
                <button className="absolute right-3 top-3 rounded-full bg-white/90 p-2 shadow">
                  <img
                    src={item.isFavorite ? imgFrame5 : imgFrame6}
                    alt="Favorite"
                    className="h-5 w-5"
                  />
                </button>
              </div>
              <div className="p-4 sm:p-5">
                <span
                  className={`mb-2 inline-block rounded-full px-3 py-1 text-xs font-medium ${item.categoryClass}`}
                >
                  {item.category}
                </span>
                <h2 className="mb-1 text-base font-semibold text-gray-800 sm:text-lg">
                  {item.title}
                </h2>
                <p className="mb-4 text-xs text-gray-600 sm:text-sm">
                  {item.description}
                </p>
                <div className="flex flex-col gap-2 sm:flex-row sm:items-center sm:justify-between">
                  <div className="flex items-center gap-2">
                    <img
                      src={item.merchantImage}
                      alt="Merchant"
                      className="h-6 w-6 rounded-full object-cover"
                    />
                    <span className="text-xs text-gray-600 sm:text-sm">
                      {item.merchantName}
                    </span>
                    <img src={imgGroup} alt="Verified" className="h-3 w-3" />
                  </div>
                  <Link to="/equipment-detail">
                    <Button
                      variant="tertiary"
                      className="mt-2 w-full rounded-lg bg-sky-600 px-4 py-2 font-normal text-white sm:mt-0 sm:w-auto"
                    >
                      View Details
                    </Button>
                  </Link>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Load More Button */}
        <div className="my-12 flex justify-center">
          <Button
            variant="ghost"
            className="text-md rounded-lg border border-gray-300 px-8 py-3 font-medium text-gray-700 shadow"
          >
            Load More Equipment
          </Button>
        </div>
      </main>
      <CommonFooter />
    </div>
  )
}

export default BrowseEquipment

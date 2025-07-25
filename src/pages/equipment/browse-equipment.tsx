import React from "react"
import { AuthHeader } from "@/components/layout/header/auth-header"
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
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"
import { faHeart as faHeartSolid, faSearch } from "@fortawesome/free-solid-svg-icons"
import { faHeart as faHeartRegular } from "@fortawesome/free-regular-svg-icons"

import equip1 from "@/assets/images/equipment/equip1.png"
import equip2 from "@/assets/images/equipment/equip2.png"
import equip3 from "@/assets/images/equipment/equip3.png"
import equip4 from "@/assets/images/equipment/equip4.png"
import equip5 from "@/assets/images/equipment/equip5.png"
import equip6 from "@/assets/images/equipment/equip6.png"

import man2 from "@/assets/images/avatars/man2.png"
import man3 from "@/assets/images/avatars/man3.png"
import man4 from "@/assets/images/avatars/man4.png"
import man5 from "@/assets/images/avatars/man5.png"
import woman1 from "@/assets/images/avatars/woman1.png"
import woman2 from "@/assets/images/avatars/woman2.png"
import { DottedQuestionIcon } from "@/components/ui/icon"

// Mock data for equipment with original structure
const equipmentData = [
  {
    id: 1,
    image: equip1,
    title: "RED Dragon 6K Cinema Camera",
    description:
      "Professional cinema camera with 6K resolution, dual ISO, and comprehensive codec support for high-end productions.",
    category: "Camera",
    categoryClass: "bg-sky-50 text-sky-600",
    merchantImage: man2,
    merchantName: "CineGear Pro",
    isFavorite: true,
  },
  {
    id: 2,
    image: equip2,
    title: "Aputure 300D LED Light",
    description:
      "Powerful daylight-balanced LED with wireless control, perfect for interviews and commercial shoots.",
    category: "Lighting",
    categoryClass: "bg-green-50 text-green-600",
    merchantImage: woman1,
    merchantName: "LightWorks Studio",
    isFavorite: false,
  },
  {
    id: 3,
    image: equip3,
    title: "Rode NTG3 Shotgun Mic",
    description:
      "Professional broadcast-quality shotgun microphone with superior RF immunity and low noise floor.",
    category: "Audio",
    categoryClass: "bg-purple-50 text-purple-600",
    merchantImage: man3,
    merchantName: "AudioVision",
    isFavorite: true,
  },
  {
    id: 4,
    image: equip4,
    title: "DJI Ronin-S Gimbal",
    description:
      "3-axis handheld gimbal stabilizer for DSLR and mirrorless cameras up to 3.6kg payload.",
    category: "Grip",
    categoryClass: "bg-orange-50 text-orange-600",
    merchantImage: man5,
    merchantName: "Motion Masters",
    isFavorite: true,
  },
  {
    id: 5,
    image: equip5,
    title: "Canon 24-70mm f/2.8L",
    description:
      "Professional zoom lens with constant f/2.8 aperture, ideal for versatile shooting scenarios.",
    category: "Accessories",
    categoryClass: "bg-blue-50 text-blue-600",
    merchantImage: man4,
    merchantName: "Lens Library",
    isFavorite: false,
  },
  {
    id: 6,
    image: equip6,
    title: "Gitzo Carbon Fiber Tripod",
    description:
      "Ultra-lightweight carbon fiber tripod with exceptional stability for professional camera work.",
    category: "Grip",
    categoryClass: "bg-orange-50 text-orange-600",
    merchantImage: woman2,
    merchantName: "Support Systems",
    isFavorite: true,
  },
]

const BrowseEquipment: React.FC = () => {
  return (
    <div className="min-h-screen bg-gray-50">
      <AuthHeader />
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
              <FontAwesomeIcon icon={faSearch} alt="Search" className="h-4 w-4" />
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
                <button className="absolute right-3 top-3 rounded-full bg-white/90 px-2 py-1.5 shadow">
                  
                  {item.isFavorite ? <FontAwesomeIcon
                    icon={faHeartSolid}
                    alt="Favorite"
                    className="h-4 w-5 text-red-500"
                  /> : <FontAwesomeIcon
                    icon={faHeartRegular}
                    alt="Favorite"
                    className="h-4 w-5 text-gray-700"
                  />}
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
                    <span className="text-blue-500">
                      <DottedQuestionIcon alt="Verified" className="h-3 w-3" />
                      </span>
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

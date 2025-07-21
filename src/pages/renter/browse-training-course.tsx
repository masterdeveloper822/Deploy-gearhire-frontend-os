import React from "react"
import { RenterHeader } from "@/components/layout/header/renter-header"
import { CommonFooter } from "@/components/layout/footer/common"
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select"
import { Button } from "@/components/ui/button"

// Image and SVG asset URLs from Figma export
const imgImg =
  "http://localhost:3845/assets/f578f9c2a181ef669150341163e63e6e9da01878.png"
const imgImg1 =
  "http://localhost:3845/assets/6209abce043d305cfce542ac1cc4d732f0c56e4e.png"
const imgImg2 =
  "http://localhost:3845/assets/410c340aa057242400c608368f918307cdd72438.png"
const imgImg3 =
  "http://localhost:3845/assets/bc98aec90ffc6e04506609a2181498a5ba0a455c.png"
const imgImg4 =
  "http://localhost:3845/assets/bec21fc75386a86210d32bec8ca98fcb2380d21e.png"
const imgImg5 =
  "http://localhost:3845/assets/f48c0e53a9ee292fbb09caaf166792d9e8a4c140.png"
const imgImg6 =
  "http://localhost:3845/assets/157a8cae4c47674ef06c93dae0edece12ad3c0a6.png"
const imgImg7 =
  "http://localhost:3845/assets/2100395d25605ca3f0bf22ffd23298ae8f890017.png"
const imgImg8 =
  "http://localhost:3845/assets/1d5ad8aaf12fd61a75197f707f6ef40c7edd6e1f.png"
const imgImg9 =
  "http://localhost:3845/assets/e5727ec73f62f95959b93340c17dcd1d00d32c53.png"
const imgImg10 =
  "http://localhost:3845/assets/1ecb12199697dd16c82152392c0b02a04bd85271.png"
const imgImg11 =
  "http://localhost:3845/assets/82a15fb54f7c3e672d02fa8a44af07419cded334.png"
const imgImg12 =
  "http://localhost:3845/assets/93261e682a4fc24925831eb042e025379dab45ab.png"
const imgFrame =
  "http://localhost:3845/assets/ed4e1169b638e2e838350960320b53c878e45615.svg"
const imgFrame1 =
  "http://localhost:3845/assets/9861a0b6e8bb9b630982f192343e0944f05f6199.svg"
const imgFrame2 =
  "http://localhost:3845/assets/1efdeed862e90b5b080da5ccaa63bb5c3a6cf0bc.svg"
const imgFrame3 =
  "http://localhost:3845/assets/ad1c22367e0b32024bf9730eb544e1cb8a5c24ef.svg"
const imgFrame4 =
  "http://localhost:3845/assets/3fb4b81e046289a29f1daa8f4528d66d37ad2c91.svg"
const imgGroup =
  "http://localhost:3845/assets/28e6d9ebf8e54c46f02e62515ebdc92023ab5c6a.svg"
const imgFrame5 =
  "http://localhost:3845/assets/b0227c17e08bf14a868da4d27d2b48b4a26fc484.svg"
const imgFrame6 =
  "http://localhost:3845/assets/11e343858c87c43adf774bd449873b46df3be747.svg"
const imgFrame7 =
  "http://localhost:3845/assets/cf29938f88a961c33e43a7979fa07b5699596921.svg"

// Mock data for training courses
const mockCourses = [
  {
    id: 1,
    title: "Professional Lighting Techniques",
    description:
      "Master the art of cinematic lighting with hands-on practice using professional equipment.",
    category: "Lighting",
    categoryColor: "bg-blue-100 text-blue-800",
    company: "ProGear Studios",
    companyLogo: imgImg2,
    image: imgImg1,
  },
  {
    id: 2,
    title: "RED Camera Masterclass",
    description:
      "Complete guide to operating RED cameras for commercial and narrative projects.",
    category: "Camera Operation",
    categoryColor: "bg-green-100 text-green-800",
    company: "LensWorks Studio",
    companyLogo: imgImg4,
    image: imgImg3,
  },
  {
    id: 3,
    title: "Location Sound Recording",
    description:
      "Learn professional audio recording techniques for film and video production.",
    category: "Audio Recording",
    categoryColor: "bg-purple-100 text-purple-800",
    company: "AudioTech Rentals",
    companyLogo: imgImg6,
    image: imgImg5,
  },
  {
    id: 4,
    title: "Directing for Independent Film",
    description:
      "Essential directing skills for indie filmmakers working with limited budgets.",
    category: "Directing",
    categoryColor: "bg-orange-100 text-orange-800",
    company: "Marcus Rodriguez",
    companyLogo: imgImg8,
    image: imgImg7,
  },
  {
    id: 5,
    title: "Advanced Color Grading",
    description:
      "Professional color grading techniques using DaVinci Resolve and industry workflows.",
    category: "Post-Production",
    categoryColor: "bg-red-100 text-red-800",
    company: "CineRent Pro",
    companyLogo: imgImg10,
    image: imgImg9,
  },
  {
    id: 6,
    title: "Grip & Electric Essentials",
    description:
      "Safety and technique fundamentals for grip and electric department work.",
    category: "Grip & Electric",
    categoryColor: "bg-yellow-100 text-yellow-800",
    company: "Grip & Electric Co",
    companyLogo: imgImg12,
    image: imgImg11,
  },
]

const BrowseTrainingCourse = () => {
  const [sortMode, setSortMode] = React.useState<"newest" | "oldest">("newest")

  return (
    <div className="min-h-screen bg-gray-50">
      <RenterHeader />
      {/* Main Content */}
      <main className="mx-auto mb-12 max-w-[1280px] px-2 py-4 sm:px-4 sm:py-8">
        <div className="mb-8">
          <h1 className="mb-4 text-3xl font-bold text-gray-800">
            Browse Training Courses
          </h1>
          <p className="text-base text-gray-600">
            Learn from verified merchants and industry professionals
          </p>
        </div>
        <div className="flex items-center justify-between">
          <div className="flex items-start gap-8">
            {/* Sidebar Filters */}
            <aside className="relative w-72 rounded-lg bg-white p-6 shadow">
              <h2 className="mb-4 text-lg font-semibold text-gray-800">
                Filters
              </h2>
              {/* Search Courses */}
              <div className="mb-6">
                <label className="mb-2 block text-sm font-medium text-gray-700">
                  Search Courses
                </label>
                <div className="relative">
                  <input
                    className="w-full rounded-lg border border-gray-300 py-2 pl-10 pr-3 text-base text-gray-900 placeholder:text-[#adaebc] focus:outline-none"
                    placeholder="Search by title or desc..."
                    type="text"
                  />
                  <span className="absolute left-3 top-1/2 -translate-y-1/2">
                    <img src={imgFrame3} alt="search" className="h-4 w-4" />
                  </span>
                </div>
              </div>
              {/* Category */}
              <div className="mb-6">
                <label className="mb-2 block text-sm font-medium text-gray-700">
                  Category
                </label>
                <div className="space-y-2">
                  <label className="flex items-center gap-2 text-sm text-gray-600">
                    <input
                      type="checkbox"
                      className="rounded border-gray-300"
                    />{" "}
                    Lighting
                  </label>
                  <label className="flex items-center gap-2 text-sm text-gray-600">
                    <input
                      type="checkbox"
                      className="rounded border-gray-300"
                    />{" "}
                    Camera Operation
                  </label>
                  <label className="flex items-center gap-2 text-sm text-gray-600">
                    <input
                      type="checkbox"
                      className="rounded border-gray-300"
                    />{" "}
                    Audio Recording
                  </label>
                  <label className="flex items-center gap-2 text-sm text-gray-600">
                    <input
                      type="checkbox"
                      className="rounded border-gray-300"
                    />{" "}
                    Directing
                  </label>
                  <label className="flex items-center gap-2 text-sm text-gray-600">
                    <input
                      type="checkbox"
                      className="rounded border-gray-300"
                    />{" "}
                    Post-Production
                  </label>
                  <label className="flex items-center gap-2 text-sm text-gray-600">
                    <input
                      type="checkbox"
                      className="rounded border-gray-300"
                    />{" "}
                    Grip & Electric
                  </label>
                </div>
              </div>
              {/* Location */}
              <div className="mb-6">
                <label className="mb-2 block text-sm font-medium text-gray-700">
                  Location
                </label>
                <Select>
                  <SelectTrigger className="w-full">
                    <SelectValue placeholder="All Locations" />
                  </SelectTrigger>
                  <SelectContent>
                    <SelectItem value="all">All Locations</SelectItem>
                    <SelectItem value="america">America</SelectItem>
                    <SelectItem value="europe">Europe</SelectItem>
                  </SelectContent>
                </Select>
              </div>
              {/* Clear Filters */}
              <Button
                variant="ghost"
                className="w-full rounded-lg bg-gray-100 py-2 text-base font-normal text-gray-700"
              >
                Clear All Filters
              </Button>
            </aside>
            {/* Main Course List */}
            <div className="flex-1">
              <div className="flex items-center gap-4">
                <span className="text-gray-600">Showing 24 courses</span>
                <div className="relative ml-auto">
                  <Select value={sortMode} onValueChange={setSortMode}>
                    <SelectTrigger className="w-[130px] rounded-lg border border-gray-300 py-2 pl-3 pr-2 text-sm text-gray-900 shadow-sm transition-colors duration-150 focus:ring-2 focus:ring-sky-500">
                      <span className="truncate">
                        {sortMode === "newest"
                          ? "Newest First"
                          : "Oldest First"}
                      </span>
                    </SelectTrigger>
                    <SelectContent className="rounded-lg border border-gray-200 bg-white shadow-lg">
                      <SelectItem
                        value="newest"
                        className="transition-colors duration-100 hover:bg-sky-50"
                      >
                        <span className="flex items-center gap-2">
                          Newest First
                        </span>
                      </SelectItem>
                      <SelectItem
                        value="oldest"
                        className="transition-colors duration-100 hover:bg-sky-50"
                      >
                        <span className="flex items-center gap-2">
                          Oldest First
                        </span>
                      </SelectItem>
                    </SelectContent>
                  </Select>
                </div>
              </div>
              {/* Course Cards Grid */}
              <div className="mt-6 grid grid-cols-3 gap-6">
                {mockCourses.map((course) => (
                  <div
                    key={course.id}
                    className="overflow-hidden rounded-lg bg-white p-0 shadow"
                  >
                    <div className="relative h-48 w-full">
                      <img
                        src={course.image}
                        alt={course.category}
                        className="h-full w-full object-cover"
                      />
                      <span
                        className={`absolute left-3 top-3 rounded-full px-2 py-1 text-xs font-medium ${course.categoryColor}`}
                      >
                        {course.category}
                      </span>
                    </div>
                    <div className="p-4">
                      <h2 className="mb-1 text-lg font-semibold text-gray-800">
                        {course.title}
                      </h2>
                      <p className="mb-4 text-sm text-gray-600">
                        {course.description}
                      </p>
                      <div className="mb-4 flex items-center">
                        <img
                          src={course.companyLogo}
                          alt={course.company}
                          className="mr-2 h-6 w-6 rounded-full"
                        />
                        <span className="mr-2 text-sm text-gray-700">
                          {course.company}
                        </span>
                        <img
                          src={imgGroup}
                          alt="verified"
                          className="h-3.5 w-3.5"
                        />
                      </div>
                      <Button
                        variant="tertiary"
                        className="flex w-full items-center justify-center gap-2 rounded-lg py-2 text-base font-normal"
                      >
                        <img
                          src={imgFrame5}
                          alt="learn more"
                          className="h-4 w-4"
                        />{" "}
                        Learn More
                      </Button>
                    </div>
                  </div>
                ))}
              </div>
              {/* Pagination */}
              <div className="mt-8 flex items-center justify-center gap-2">
                <button className="flex h-10 w-9 items-center justify-center rounded-lg border border-gray-300 opacity-50">
                  <img src={imgFrame6} alt="prev" className="h-4 w-2.5" />
                </button>
                <Button
                  variant="tertiary"
                  className="flex h-10 w-9 items-center justify-center rounded-lg"
                >
                  1
                </Button>
                <button className="flex h-10 w-9 items-center justify-center rounded-lg border border-gray-300 font-normal text-gray-600">
                  2
                </button>
                <button className="flex h-10 w-9 items-center justify-center rounded-lg border border-gray-300 font-normal text-gray-600">
                  3
                </button>
                <button className="flex h-10 w-9 items-center justify-center rounded-lg border border-gray-300">
                  <img src={imgFrame7} alt="next" className="h-4 w-2.5" />
                </button>
              </div>
            </div>
          </div>
        </div>
      </main>

      <CommonFooter />
    </div>
  )
}

export default BrowseTrainingCourse

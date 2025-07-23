import React from "react"
import { Filter } from "lucide-react"
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
import {
  Sheet,
  SheetContent,
  SheetTrigger,
  SheetHeader,
  SheetTitle,
} from "@/components/ui/sheet"
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"
import { faSearch } from "@fortawesome/free-solid-svg-icons"

import tc4 from "@/assets/images/training-course/tc4.png"
import tc5 from "@/assets/images/training-course/tc5.png"
import tc6 from "@/assets/images/training-course/tc6.png"
import tc7 from "@/assets/images/training-course/tc7.png"
import tc8 from "@/assets/images/training-course/tc8.png"
import tc9 from "@/assets/images/training-course/tc9.png"

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
    image: tc4,
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
    image: tc5,
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
    image: tc6,
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
    image: tc7,
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
    image: tc8,
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
    image: tc9,
  },
]

const CourseFilters = () => (
  <>
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
          <FontAwesomeIcon icon={faSearch} alt="search" className="text-gray-500 h-4 w-4" />
        </span>
      </div>
    </div>
    {/* Category */}
    <div className="mb-6">
      <label className="mb-2 block text-sm font-medium text-gray-700">
        Category
      </label>
      <div className="space-y-2">
        {mockCourses.map((course) => (
          <label
            key={course.id}
            className="flex items-center gap-2 text-sm text-gray-600"
          >
            <input type="checkbox" className="rounded border-gray-300" />{" "}
            {course.category}
          </label>
        ))}
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
  </>
)

const BrowseTrainingCourse = () => {
  const [sortMode, setSortMode] = React.useState<"newest" | "oldest">("newest")

  return (
    <div className="min-h-screen bg-gray-50">
      <RenterHeader />
      {/* Main Content */}
      <main className="mx-auto mb-12 w-full max-w-[1280px] px-4 py-6 sm:px-6 lg:px-8">
        <div className="mb-8">
          <h1 className="mb-2 text-2xl font-bold text-gray-800 sm:mb-4 sm:text-3xl">
            Browse Training Courses
          </h1>
          <p className="text-sm text-gray-600 sm:text-base">
            Learn from verified merchants and industry professionals
          </p>
        </div>
        <div className="flex items-start gap-8">
          {/* Desktop Sidebar */}
          <aside className="relative hidden w-72 shrink-0 rounded-lg bg-white p-6 shadow lg:block">
            <h2 className="mb-4 text-lg font-semibold text-gray-800">
              Filters
            </h2>
            <CourseFilters />
          </aside>
          {/* Main Course List */}
          <div className="flex-1">
            <div className="mb-6 flex items-center justify-between gap-4">
              {/* Mobile Filter Button */}
              <div className="lg:hidden">
                <Sheet>
                  <SheetTrigger asChild>
                    <Button
                      variant="primary"
                      className="flex items-center gap-2 text-gray-700"
                    >
                      <Filter className="h-4 w-4" />
                      <span>Filters</span>
                    </Button>
                  </SheetTrigger>
                  <SheetContent
                    side="left"
                    className="w-[300px] overflow-y-auto p-6"
                  >
                    <SheetHeader className="mb-4">
                      <SheetTitle>Filters</SheetTitle>
                    </SheetHeader>
                    <CourseFilters />
                  </SheetContent>
                </Sheet>
              </div>
              <span className="hidden text-sm text-gray-600 sm:inline sm:text-base">
                Showing 24 courses
              </span>
              <div className="relative">
                <Select value={sortMode} onValueChange={setSortMode}>
                  <SelectTrigger className="w-auto min-w-[140px] rounded-lg border border-gray-300 py-2 pl-3 pr-2 text-sm text-gray-900 shadow-sm">
                    <span>
                      {sortMode === "newest" ? "Newest First" : "Oldest First"}
                    </span>
                  </SelectTrigger>
                  <SelectContent>
                    <SelectItem value="newest">Newest First</SelectItem>
                    <SelectItem value="oldest">Oldest First</SelectItem>
                  </SelectContent>
                </Select>
              </div>
            </div>
            {/* Course Cards Grid */}
            <div className="grid grid-cols-1 gap-6 sm:grid-cols-2 xl:grid-cols-3">
              {mockCourses.map((course) => (
                <div
                  key={course.id}
                  className="overflow-hidden rounded-lg bg-white p-0 shadow"
                >
                  <div className="relative h-44 w-full sm:h-48">
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
                    <h2 className="mb-1 text-base font-semibold text-gray-800 sm:text-lg">
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
              <button className="flex h-9 w-9 items-center justify-center rounded-lg border border-gray-300 opacity-50 sm:h-10 sm:w-10">
                <img src={imgFrame6} alt="prev" className="h-4 w-2.5" />
              </button>
              <Button
                variant="tertiary"
                className="flex h-9 w-9 items-center justify-center rounded-lg sm:h-10 sm:w-10"
              >
                1
              </Button>
              <button className="flex h-9 w-9 items-center justify-center rounded-lg border border-gray-300 font-normal text-gray-600 sm:h-10 sm:w-10">
                2
              </button>
              <button className="flex h-9 w-9 items-center justify-center rounded-lg border border-gray-300 font-normal text-gray-600 sm:h-10 sm:w-10">
                3
              </button>
              <button className="flex h-9 w-9 items-center justify-center rounded-lg border border-gray-300 sm:h-10 sm:w-10">
                <img src={imgFrame7} alt="next" className="h-4 w-2.5" />
              </button>
            </div>
          </div>
        </div>
      </main>

      <CommonFooter />
    </div>
  )
}

export default BrowseTrainingCourse

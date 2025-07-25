import React from "react"
import { Filter } from "lucide-react"
import { AuthHeader } from "@/components/layout/header/auth-header"
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
import { faAngleLeft, faAngleRight, faArrowUpRightFromSquare, faSearch } from "@fortawesome/free-solid-svg-icons"

import tc4 from "@/assets/images/training-course/tc4.png"
import tc5 from "@/assets/images/training-course/tc5.png"
import tc6 from "@/assets/images/training-course/tc6.png"
import tc7 from "@/assets/images/training-course/tc7.png"
import tc8 from "@/assets/images/training-course/tc8.png"
import tc9 from "@/assets/images/training-course/tc9.png"

import man1 from "@/assets/images/avatars/man1.png"
import man2 from "@/assets/images/avatars/man2.png"
import man3 from "@/assets/images/avatars/man3.png"
import man4 from "@/assets/images/avatars/man4.png"
import man5 from "@/assets/images/avatars/man5.png"
import woman2 from "@/assets/images/avatars/woman2.png"
import { DottedQuestionIcon } from "@/components/ui/icon"

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
    companyLogo: man1,
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
    companyLogo: man3,
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
    companyLogo: man4,
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
    companyLogo: man2,
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
    companyLogo: man5,
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
    companyLogo: woman2,
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
      <AuthHeader />
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
                      <span className="text-blue-500">
                        <DottedQuestionIcon/>
                      </span>
                    </div>
                    <Button
                      variant="tertiary"
                      className="flex w-full items-center justify-center gap-2 rounded-lg py-2 text-base font-normal"
                    >
                      <FontAwesomeIcon
                        icon={faArrowUpRightFromSquare}
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
                <FontAwesomeIcon icon={faAngleLeft} alt="prev" className="h-4 w-2.5" />
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
                <FontAwesomeIcon icon={faAngleRight} alt="next" className="h-4 w-2.5" />
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

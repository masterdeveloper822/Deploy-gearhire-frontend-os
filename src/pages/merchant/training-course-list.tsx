import React from "react"
import { HeaderFrame } from "@/components/layout/header/auth-header"
import { Button } from "../../../components/ui/button"

// Figma asset URLs for course images
const courseImg1 =
  "http://localhost:3845/assets/944dfe497d9f130202fb4173166d1bf98ae0bede.png"
const courseImg2 =
  "http://localhost:3845/assets/0f78d139b1b6483a32cb5e42eaeace047d2f8546.png"
const courseImg3 =
  "http://localhost:3845/assets/845b75fe9cacb65817ff3b0b2f90f53d3b53033a.png"

// Figma SVGs for status and action icons
const publicIcon =
  "http://localhost:3845/assets/eca6c3134f7ecf7b6029cc0eed3f3d3ebbd12985.svg"
const privateIcon =
  "http://localhost:3845/assets/1fb178b7c40a595465a4f761d8533a49e6e8d895.svg"
const arrowIcon =
  "http://localhost:3845/assets/a73a34ee52a39108710cbcd2ec4751a80bb8e7db.svg"
const editIcon =
  "http://localhost:3845/assets/28e9e88ed26136cc76e342f60b46b456f4c15c76.svg"
const toggleIcon =
  "http://localhost:3845/assets/7baf41d57cf0024cc4acb9a85e6dc2407f49cf3b.svg"
// Placeholder for delete icon (replace with correct Figma SVG if available)
// const deleteIcon = "<Figma-trash-icon-URL>";

const courses = [
  {
    id: 1,
    title: "Advanced Cinematography Masterclass",
    desc: "Learn professional cinematography techniques with hands-on experience using RED cameras and professional lighting equipment.",
    image: courseImg1,
    status: "Public",
    statusColor: "bg-green-100 text-green-800",
    statusIcon: publicIcon,
    action: "View Course",
  },
  {
    id: 2,
    title: "Professional Audio Recording Workshop",
    desc: "Master the art of film audio recording with industry-standard equipment and techniques used in major productions.",
    image: courseImg2,
    status: "Private",
    statusColor: "bg-gray-100 text-gray-800",
    statusIcon: privateIcon,
    action: "View Course",
  },
  {
    id: 3,
    title: "Film Lighting Fundamentals",
    desc: "Learn essential lighting techniques for film production, from basic setups to advanced cinematic lighting patterns.",
    image: courseImg3,
    status: "Public",
    statusColor: "bg-green-100 text-green-800",
    statusIcon: publicIcon,
    action: "Book Now",
  },
]

const TrainingCourseList = () => {
  return (
    <div className="flex min-h-screen flex-col bg-gray-50">
      <HeaderFrame />
      <main className="flex w-full flex-col items-center px-4 py-8">
        <div className="mb-8 flex w-full max-w-6xl flex-col gap-4 md:flex-row md:items-center md:justify-between">
          <div>
            <h1 className="text-2xl font-bold text-gray-800">
              My Training Courses
            </h1>
            <p className="mt-1 text-base text-gray-600">
              Manage your training courses and workshops
            </p>
          </div>
          <Button className="flex h-12 items-center gap-2 rounded-lg bg-sky-600 px-8 text-base font-medium text-white hover:bg-sky-700">
            <span className="text-lg">+</span> Add New Course
          </Button>
        </div>
        <div className="grid w-full max-w-6xl grid-cols-1 gap-8 md:grid-cols-2">
          {courses.map((course) => (
            <div
              key={course.id}
              className="flex flex-col overflow-hidden rounded-lg bg-white p-0 shadow"
            >
              {/* Image and status */}
              <div className="relative">
                <img
                  src={course.image}
                  alt={course.title}
                  className="h-64 w-full rounded-t-lg object-cover"
                />
                <span
                  className={`absolute right-4 top-4 flex items-center gap-2 rounded-full px-3 py-1 text-xs font-medium ${course.statusColor}`}
                >
                  <img
                    src={course.statusIcon}
                    alt={course.status}
                    className="h-4 w-4"
                  />
                  {course.status}
                </span>
              </div>
              {/* Content */}
              <div className="flex flex-1 flex-col justify-between p-6">
                <div>
                  <h2 className="mb-2 text-lg font-semibold text-gray-800">
                    {course.title}
                  </h2>
                  <p className="mb-6 text-sm text-gray-600">{course.desc}</p>
                </div>
                <div className="flex items-center justify-between">
                  <Button
                    variant="link"
                    className="flex h-auto items-center gap-1 p-0 font-medium text-sky-600"
                  >
                    {course.action}
                    <img src={arrowIcon} alt="Arrow" className="ml-1 h-4 w-4" />
                  </Button>
                  <div className="flex items-center gap-2">
                    <img src={toggleIcon} alt="Toggle" className="h-4 w-8" />
                    <Button variant="ghost" size="icon" className="p-2">
                      <img src={editIcon} alt="Edit" className="h-5 w-5" />
                    </Button>
                    {/* Delete icon omitted until correct Figma SVG is provided */}
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </main>
    </div>
  )
}

export { TrainingCourseList }

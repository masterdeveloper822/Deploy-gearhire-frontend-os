import { MerchantHeader } from "@/components/layout/header/merchant-header"
import { Button } from "@/components/ui/button"

import tc1 from "@/assets/images/training-course/tc1.png"
import tc2 from "@/assets/images/training-course/tc2.png"
import tc3 from "@/assets/images/training-course/tc3.png"

import publicIcon from "@/assets/images/ui/icons/eye-green.svg"
import privateIcon from "@/assets/images/ui/icons/eye_closed.svg"
import arrowIcon from "@/assets/images/ui/icons/outLink.svg"
import editIcon from "@/assets/images/ui/icons/item_edit.svg"
import toggleIcon from "@/assets/images/ui/icons/item_delete.svg"
import addIcon from "@/assets/images/ui/icons/add.svg"

import { Switch } from "@/components/ui/switch"
import { Link } from "react-router-dom"

const courses = [
  {
    id: 1,
    title: "Advanced Cinematography Masterclass",
    desc: "Learn professional cinematography techniques with hands-on experience using RED cameras and professional lighting equipment.",
    image: tc1,
    status: "Public",
    statusColor: "bg-green-100 text-green-800",
    statusIcon: publicIcon,
    action: "View Course",
  },
  {
    id: 2,
    title: "Professional Audio Recording Workshop",
    desc: "Master the art of film audio recording with industry-standard equipment and techniques used in major productions.",
    image: tc2,
    status: "Private",
    statusColor: "bg-gray-100 text-gray-800",
    statusIcon: privateIcon,
    action: "View Course",
  },
  {
    id: 3,
    title: "Film Lighting Fundamentals",
    desc: "Learn essential lighting techniques for film production, from basic setups to advanced cinematic lighting patterns.",
    image: tc3,
    status: "Public",
    statusColor: "bg-green-100 text-green-800",
    statusIcon: publicIcon,
    action: "Book Now",
  },
]

const TrainingCourseList = () => {
  return (
    <div className="flex min-h-screen flex-col bg-gray-50">
      <MerchantHeader />
      <main className="flex w-full flex-col items-center px-4 pb-8 pt-6">
        <div className="mb-8 flex w-full max-w-6xl flex-col gap-4 md:flex-row md:items-center md:justify-between">
          <div>
            <h1 className="text-3xl font-bold text-gray-800">
              My Training Courses
            </h1>
            <p className="mt-3 text-base text-gray-600">
              Manage your training courses and workshops
            </p>
          </div>
          <Link to="/add-training-course">
            <Button variant="tertiary" className="flex h-12 px-8 text-base">
              <img src={addIcon} /> Add New Course
            </Button>
          </Link>
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
                    <img src={arrowIcon} alt="Arrow" className="ml-1 h-4 w-4" />
                    {course.action}
                  </Button>
                  <div className="flex items-center gap-2">
                    <Switch className="data-[state=checked]:bg-tertiary" />
                    <Button
                      variant="ghost"
                      size="icon"
                      className="px-2 hover:bg-background"
                    >
                      <img src={editIcon} alt="Edit" className="h-5 w-5" />
                    </Button>
                    <Button
                      variant="ghost"
                      size="icon"
                      className="px-2 hover:bg-background"
                    >
                      <img src={toggleIcon} alt="Toggle" className="h-4 w-8" />
                    </Button>
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

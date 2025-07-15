import React from "react";
import { HeaderFrame } from "@/components/layout/header/header-frame";
import { Button } from "../../../components/ui/button";

// Figma asset URLs for course images
const courseImg1 =
  "http://localhost:3845/assets/944dfe497d9f130202fb4173166d1bf98ae0bede.png";
const courseImg2 =
  "http://localhost:3845/assets/0f78d139b1b6483a32cb5e42eaeace047d2f8546.png";
const courseImg3 =
  "http://localhost:3845/assets/845b75fe9cacb65817ff3b0b2f90f53d3b53033a.png";

// Figma SVGs for status and action icons
const publicIcon =
  "http://localhost:3845/assets/eca6c3134f7ecf7b6029cc0eed3f3d3ebbd12985.svg";
const privateIcon =
  "http://localhost:3845/assets/1fb178b7c40a595465a4f761d8533a49e6e8d895.svg";
const arrowIcon =
  "http://localhost:3845/assets/a73a34ee52a39108710cbcd2ec4751a80bb8e7db.svg";
const editIcon =
  "http://localhost:3845/assets/28e9e88ed26136cc76e342f60b46b456f4c15c76.svg";
const toggleIcon =
  "http://localhost:3845/assets/7baf41d57cf0024cc4acb9a85e6dc2407f49cf3b.svg";
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
];

const TrainingCourseList = () => {
  return (
    <div className="min-h-screen bg-gray-50 flex flex-col">
      <HeaderFrame />
      <main className="flex flex-col items-center w-full px-4 py-8">
        <div className="w-full max-w-6xl flex flex-col md:flex-row md:items-center md:justify-between mb-8 gap-4">
          <div>
            <h1 className="text-2xl font-bold text-gray-800">
              My Training Courses
            </h1>
            <p className="text-gray-600 text-base mt-1">
              Manage your training courses and workshops
            </p>
          </div>
          <Button className="bg-sky-600 hover:bg-sky-700 text-white text-base font-medium h-12 rounded-lg px-8 flex items-center gap-2">
            <span className="text-lg">+</span> Add New Course
          </Button>
        </div>
        <div className="w-full max-w-6xl grid grid-cols-1 md:grid-cols-2 gap-8">
          {courses.map((course) => (
            <div
              key={course.id}
              className="bg-white rounded-lg shadow p-0 overflow-hidden flex flex-col"
            >
              {/* Image and status */}
              <div className="relative">
                <img
                  src={course.image}
                  alt={course.title}
                  className="w-full h-64 object-cover rounded-t-lg"
                />
                <span
                  className={`absolute top-4 right-4 flex items-center gap-2 px-3 py-1 rounded-full text-xs font-medium ${course.statusColor}`}
                >
                  <img
                    src={course.statusIcon}
                    alt={course.status}
                    className="w-4 h-4"
                  />
                  {course.status}
                </span>
              </div>
              {/* Content */}
              <div className="p-6 flex-1 flex flex-col justify-between">
                <div>
                  <h2 className="text-lg font-semibold text-gray-800 mb-2">
                    {course.title}
                  </h2>
                  <p className="text-gray-600 text-sm mb-6">{course.desc}</p>
                </div>
                <div className="flex items-center justify-between">
                  <Button
                    variant="link"
                    className="text-sky-600 font-medium flex items-center gap-1 p-0 h-auto"
                  >
                    {course.action}
                    <img src={arrowIcon} alt="Arrow" className="w-4 h-4 ml-1" />
                  </Button>
                  <div className="flex items-center gap-2">
                    <img src={toggleIcon} alt="Toggle" className="w-8 h-4" />
                    <Button variant="ghost" size="icon" className="p-2">
                      <img src={editIcon} alt="Edit" className="w-5 h-5" />
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
  );
};

export { TrainingCourseList };

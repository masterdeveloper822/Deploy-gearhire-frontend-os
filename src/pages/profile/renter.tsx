import React from "react"
import { RenterHeader } from "@/components/layout/header/renter-header"
import { CommonFooter } from "@/components/layout/footer/common"

import woman3 from "@/assets/images/avatars/woman3.png"
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"
import { faCalendarDays, faEnvelope, faGlobe, faLocationDot, faPlus, faShare } from "@fortawesome/free-solid-svg-icons"
import { Button } from "@/components/ui/button"
import { faLinkedin, faVimeo } from "@fortawesome/free-brands-svg-icons"
import post1 from "@/assets/images/renter/post1.png"
import { faComment, faHeart } from "@fortawesome/free-solid-svg-icons"

// Image and SVG asset URLs from Figma export
const imgImg =
  "http://localhost:3845/assets/410c340aa057242400c608368f918307cdd72438.png"
const imgImg1 =
  "http://localhost:3845/assets/f578f9c2a181ef669150341163e63e6e9da01878.png"
const imgImg2 =
  "http://localhost:3845/assets/d0451f4cdcb22056f951d1d62a8a4824b8b5be7c.png"
const imgFrame =
  "http://localhost:3845/assets/ed4e1169b638e2e838350960320b53c878e45615.svg"
const imgFrame1 =
  "http://localhost:3845/assets/9861a0b6e8bb9b630982f192343e0944f05f6199.svg"
const imgFrame2 =
  "http://localhost:3845/assets/1efdeed862e90b5b080da5ccaa63bb5c3a6cf0bc.svg"
const imgFrame3 =
  "http://localhost:3845/assets/3e37af258052bda7f0fa4f26b86313a9420fb018.svg"
const imgFrame4 =
  "http://localhost:3845/assets/5c4f3c36624f887fc5373fc1e63d35a103d60fc5.svg"
const imgFrame5 =
  "http://localhost:3845/assets/4e2e082d3de9515c05514fa14e3c98345c298554.svg"
const imgFrame6 =
  "http://localhost:3845/assets/5deee99566ad35df9bf06f194ab881aeefbd96e8.svg"
const imgFrame7 =
  "http://localhost:3845/assets/610bb0fb944b3bc8429aab321213d9bbd5b8b0aa.svg"
const imgFrame8 =
  "http://localhost:3845/assets/c9894f0754dae03c08dff199abb5a4e5904b46cb.svg"
const imgFrame9 =
  "http://localhost:3845/assets/7252c6af5313ef2f9f41a9994d732c32d0f3e746.svg"
const imgFrame10 =
  "http://localhost:3845/assets/7e060b66d954ee245e75378e0f7dc6dde9ecae85.svg"
const imgFrame11 =
  "http://localhost:3845/assets/229ba2971361b2bf735f5e0cd6364707b77b9723.svg"
const imgFrame12 =
  "http://localhost:3845/assets/ca64e7fdf51fe8776e021df1937d9fa8931aee9d.svg"
const imgFrame13 =
  "http://localhost:3845/assets/8eae22a2ca869ba9186e9fa29ef6259551a198f1.svg"

const RenterProfile: React.FC = () => {
  return (
    <div className="min-h-screen bg-gray-50">
      <RenterHeader />
      <main className="mx-auto flex flex-col lg:flex-row max-w-6xl items-start gap-4 lg:gap-8 px-2 sm:px-4 py-6 sm:py-8">
        {/* Sidebar */}
        <aside className="flex w-full lg:w-80 flex-col items-center self-start rounded-lg bg-white p-4 sm:p-6 shadow mb-6 lg:mb-0">
          <div className="relative mb-3">
            <img
              src={woman3}
              alt="Profile"
              className="h-24 w-24 sm:h-32 sm:w-32 rounded-full border-4 border-gray-200 object-cover"
            />
          </div>
          <h2 className="text-xl sm:text-2xl font-bold text-gray-800 mb-2">Sarah Chen</h2>
          <div className="mb-4 text-gray-600">
            <FontAwesomeIcon icon={faLocationDot} className="text-tertiary mr-2" />
            Vancouver, BC
          </div>
          <div className="mb-6 flex flex-col sm:flex-row gap-2 sm:gap-3 w-full justify-center items-center">
            <Button variant="tertiary" className="flex text-sm sm:text-base items-center gap-2 rounded-lg bg-sky-600 px-4 sm:px-6 py-2 font-medium text-white w-full sm:w-auto">
              <FontAwesomeIcon icon={faPlus} className="h-4 w-4" /> Follow
            </Button>
            <Button variant="ghost" className="flex text-sm sm:text-base items-center gap-2 rounded-lg border border-sky-600 px-4 sm:px-6 py-2 font-medium text-sky-600 w-full sm:w-auto">
              <FontAwesomeIcon icon={faEnvelope} className="h-4 w-4" /> Message
            </Button>
          </div>
          <div className="mb-6 w-full text-left">
            <h3 className="mb-3 font-semibold text-gray-800">About</h3>
            <p className="text-xs sm:text-sm text-gray-600">
              Independent filmmaker and director specializing in documentary and
              commercial work. Always looking for reliable equipment partners
              for my productions.
            </p>
          </div>
          <div className="mb-6 w-full text-left">
            <h3 className="mb-3 font-semibold text-gray-800">Connect</h3>
            <div>
              <div className="mb-3 flex items-center gap-2">
                <FontAwesomeIcon icon={faGlobe} className="text-tertiary h-4 w-4" />
                <a href="#" className="text-xs sm:text-sm text-sky-600">
                  Portfolio Website
                </a>
              </div>
            <div className="flex pl-11 gap-2">
              <span className="rounded-lg bg-blue-500 px-2 py-1">
                <FontAwesomeIcon icon={faVimeo} className="text-white h-4 w-4" />
              </span>
              <span className="rounded-lg bg-blue-600 px-2 py-1">
                <FontAwesomeIcon icon={faLinkedin} className="text-white h-4 w-4" />
              </span>
              </div>
              </div>
          </div>
          <div className="w-full border-t pt-4 text-left">
            <div className="flex items-center gap-2 text-xs sm:text-sm text-gray-500">
              <FontAwesomeIcon icon={faCalendarDays} className="h-4 w-4" />
              Member since March 2024
            </div>
          </div>
        </aside>
        {/* Main Content */}
        <section className="flex-1 w-full">
          <h1 className="mb-6 text-xl sm:text-2xl font-bold text-gray-800">
            Recent Activity
          </h1>
          <div className="space-y-6">
            {/* Post 1 */}
            <div className="rounded-lg bg-white p-4 sm:p-6 shadow">
              <div className="mb-2 flex items-center gap-3 sm:gap-4">
                <img
                  src={woman3}
                  alt="Sarah Chen"
                  className="h-10 w-10 sm:h-12 sm:w-12 rounded-full border-2 border-gray-200 object-cover"
                />
                <div>
                  <div className="font-semibold text-gray-800 text-sm sm:text-base">Sarah Chen</div>
                  <div className="text-xs sm:text-sm text-gray-500">2 days ago</div>
                </div>
              </div>
              <div className="mb-4 text-xs sm:text-sm text-gray-700">
                Just wrapped up an amazing documentary shoot in the mountains!
                Special thanks to all the local merchants who helped us get the
                gear we needed on short notice. The film industry is all about
                collaboration. 🎬
              </div>
              <img
                src={post1}
                alt="Post"
                className="mb-4 h-40 sm:h-64 w-full rounded-lg object-cover"
              />
              <div className="flex flex-col sm:flex-row gap-2 sm:gap-6 text-xs sm:text-sm text-gray-500">
                <button className="flex items-center gap-1">
                  <FontAwesomeIcon icon={faHeart} className="h-4 w-4" /> 24
                  likes
                </button>
                <button className="flex items-center gap-1">
                  <FontAwesomeIcon icon={faComment} className="h-4 w-4" /> 8
                  comments
                </button>
                <button className="flex items-center gap-1">
                  <FontAwesomeIcon icon={faShare} className="h-4 w-4" /> Share
                </button>
              </div>
            </div>
            {/* Post 2 */}
            <div className="rounded-lg bg-white p-4 sm:p-6 shadow">
              <div className="mb-2 flex items-center gap-3 sm:gap-4">
                <img
                  src={woman3}
                  alt="Sarah Chen"
                  className="h-10 w-10 sm:h-12 sm:w-12 rounded-full border-2 border-gray-200 object-cover"
                />
                <div>
                  <div className="font-semibold text-gray-800 text-sm sm:text-base">Sarah Chen</div>
                  <div className="text-xs sm:text-sm text-gray-500">1 week ago</div>
                </div>
              </div>
              <div className="mb-4 text-xs sm:text-sm text-gray-700">
                Looking for reliable lighting equipment for an upcoming
                commercial shoot. Any recommendations for merchants in the
                Vancouver area? Need professional-grade gear for a 3-day
                production.
              </div>
              <div className="flex flex-col sm:flex-row gap-2 sm:gap-6 text-xs sm:text-sm text-gray-500">
                <button className="flex items-center gap-1">
                  <FontAwesomeIcon icon={faHeart} className="h-4 w-4" /> 12
                  likes
                </button>
                <button className="flex items-center gap-1">
                  <FontAwesomeIcon icon={faComment} className="h-4 w-4" /> 15
                  comments
                </button>
                <button className="flex items-center gap-1">
                  <FontAwesomeIcon icon={faShare} className="h-4 w-4" /> Share
                </button>
              </div>
            </div>
            {/* Post 3 */}
            <div className="rounded-lg bg-white p-4 sm:p-6 shadow">
              <div className="mb-2 flex items-center gap-3 sm:gap-4">
                <img
                  src={woman3}
                  alt="Sarah Chen"
                  className="h-10 w-10 sm:h-12 sm:w-12 rounded-full border-2 border-gray-200 object-cover"
                />
                <div>
                  <div className="font-semibold text-gray-800 text-sm sm:text-base">Sarah Chen</div>
                  <div className="text-xs sm:text-sm text-gray-500">2 weeks ago</div>
                </div>
              </div>
              <div className="mb-4 text-xs sm:text-sm text-gray-700">
                Excited to share that my latest project "Urban Stories" has been
                selected for the Vancouver Film Festival! This wouldn't have
                been possible without the amazing equipment support from the
                FilmGearHub community.
              </div>
              <div className="flex flex-col sm:flex-row gap-2 sm:gap-6 text-xs sm:text-sm text-gray-500">
                <button className="flex items-center gap-1">
                  <FontAwesomeIcon icon={faHeart} className="h-4 w-4" /> 45
                  likes
                </button>
                <button className="flex items-center gap-1">
                  <FontAwesomeIcon icon={faComment} className="h-4 w-4" /> 22
                  comments
                </button>
                <button className="flex items-center gap-1">
                  <FontAwesomeIcon icon={faShare} className="h-4 w-4" /> Share
                </button>
              </div>
            </div>
            <div className="mt-8 flex justify-center">
              <Button variant="ghost" className="text-sm sm:text-base rounded-lg border border-gray-300 px-6 sm:px-8 py-2 sm:py-3 font-medium text-gray-700">
                Load More Posts
              </Button>
            </div>
          </div>
        </section>
      </main>
      <CommonFooter />
    </div>
  )
}

export default RenterProfile

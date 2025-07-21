import React from "react"
import { RenterHeader } from "@/components/layout/header/renter-header"
import { CommonFooter } from "@/components/layout/footer/common"

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
      <main className="mx-auto flex max-w-7xl gap-8 px-4 py-8">
        {/* Sidebar */}
        <aside className="flex w-80 flex-col items-center rounded-lg bg-white p-6 shadow">
          <div className="relative mb-4">
            <img
              src={imgImg1}
              alt="Profile"
              className="h-32 w-32 rounded-full border-4 border-gray-200 object-cover"
            />
            <span className="absolute -bottom-2 left-1/2 flex -translate-x-1/2 items-center gap-1 rounded-full bg-white px-2 py-1 text-xs font-medium text-gray-600 shadow">
              <img src={imgFrame3} alt="Verified" className="h-4 w-4" />{" "}
              Verified
            </span>
          </div>
          <h2 className="text-2xl font-bold text-gray-800">Sarah Chen</h2>
          <div className="mb-2 text-gray-600">Vancouver, BC</div>
          <div className="mb-4 flex gap-2">
            <button className="flex items-center gap-2 rounded-lg bg-sky-600 px-6 py-2 font-medium text-white">
              <img src={imgFrame4} alt="Follow" className="h-4 w-4" /> Follow
            </button>
            <button className="flex items-center gap-2 rounded-lg border border-sky-600 px-6 py-2 font-medium text-sky-600">
              <img src={imgFrame5} alt="Message" className="h-4 w-4" /> Message
            </button>
          </div>
          <div className="mb-6 w-full text-left">
            <h3 className="mb-1 font-semibold text-gray-800">About</h3>
            <p className="text-sm text-gray-600">
              Independent filmmaker and director specializing in documentary and
              commercial work. Always looking for reliable equipment partners
              for my productions.
            </p>
          </div>
          <div className="mb-6 w-full text-left">
            <h3 className="mb-1 font-semibold text-gray-800">Connect</h3>
            <div className="mb-2 flex items-center gap-2">
              <img src={imgFrame6} alt="Website" className="h-4 w-4" />
              <a href="#" className="text-sm text-sky-600">
                Portfolio Website
              </a>
            </div>
            <div className="flex gap-2">
              <span className="rounded-lg bg-blue-500 p-2">
                <img src={imgFrame8} alt="Vimeo" className="h-4 w-4" />
              </span>
              <span className="rounded-lg bg-blue-600 p-2">
                <img src={imgFrame9} alt="LinkedIn" className="h-4 w-4" />
              </span>
            </div>
          </div>
          <div className="w-full border-t pt-4 text-left">
            <div className="flex items-center gap-2 text-sm text-gray-500">
              <img src={imgFrame10} alt="Calendar" className="h-4 w-4" />
              Member since March 2024
            </div>
          </div>
        </aside>
        {/* Main Content */}
        <section className="flex-1">
          <h1 className="mb-6 text-2xl font-bold text-gray-800">
            Recent Activity
          </h1>
          <div className="space-y-6">
            {/* Post 1 */}
            <div className="rounded-lg bg-white p-6 shadow">
              <div className="mb-2 flex items-center gap-4">
                <img
                  src={imgImg1}
                  alt="Sarah Chen"
                  className="h-12 w-12 rounded-full border-2 border-gray-200 object-cover"
                />
                <div>
                  <div className="font-semibold text-gray-800">Sarah Chen</div>
                  <div className="text-sm text-gray-500">2 days ago</div>
                </div>
              </div>
              <div className="mb-4 text-gray-700">
                Just wrapped up an amazing documentary shoot in the mountains!
                Special thanks to all the local merchants who helped us get the
                gear we needed on short notice. The film industry is all about
                collaboration. 🎬
              </div>
              <img
                src={imgImg2}
                alt="Post"
                className="mb-4 h-64 w-full rounded-lg object-cover"
              />
              <div className="flex gap-6 text-sm text-gray-500">
                <button className="flex items-center gap-1">
                  <img src={imgFrame11} alt="Like" className="h-4 w-4" /> 24
                  likes
                </button>
                <button className="flex items-center gap-1">
                  <img src={imgFrame12} alt="Comment" className="h-4 w-4" /> 8
                  comments
                </button>
                <button className="flex items-center gap-1">
                  <img src={imgFrame13} alt="Share" className="h-4 w-4" /> Share
                </button>
              </div>
            </div>
            {/* Post 2 */}
            <div className="rounded-lg bg-white p-6 shadow">
              <div className="mb-2 flex items-center gap-4">
                <img
                  src={imgImg1}
                  alt="Sarah Chen"
                  className="h-12 w-12 rounded-full border-2 border-gray-200 object-cover"
                />
                <div>
                  <div className="font-semibold text-gray-800">Sarah Chen</div>
                  <div className="text-sm text-gray-500">1 week ago</div>
                </div>
              </div>
              <div className="mb-4 text-gray-700">
                Looking for reliable lighting equipment for an upcoming
                commercial shoot. Any recommendations for merchants in the
                Vancouver area? Need professional-grade gear for a 3-day
                production.
              </div>
              <div className="flex gap-6 text-sm text-gray-500">
                <button className="flex items-center gap-1">
                  <img src={imgFrame11} alt="Like" className="h-4 w-4" /> 12
                  likes
                </button>
                <button className="flex items-center gap-1">
                  <img src={imgFrame12} alt="Comment" className="h-4 w-4" /> 15
                  comments
                </button>
                <button className="flex items-center gap-1">
                  <img src={imgFrame13} alt="Share" className="h-4 w-4" /> Share
                </button>
              </div>
            </div>
            {/* Post 3 */}
            <div className="rounded-lg bg-white p-6 shadow">
              <div className="mb-2 flex items-center gap-4">
                <img
                  src={imgImg1}
                  alt="Sarah Chen"
                  className="h-12 w-12 rounded-full border-2 border-gray-200 object-cover"
                />
                <div>
                  <div className="font-semibold text-gray-800">Sarah Chen</div>
                  <div className="text-sm text-gray-500">2 weeks ago</div>
                </div>
              </div>
              <div className="mb-4 text-gray-700">
                Excited to share that my latest project "Urban Stories" has been
                selected for the Vancouver Film Festival! This wouldn't have
                been possible without the amazing equipment support from the
                FilmGearHub community.
              </div>
              <div className="flex gap-6 text-sm text-gray-500">
                <button className="flex items-center gap-1">
                  <img src={imgFrame11} alt="Like" className="h-4 w-4" /> 45
                  likes
                </button>
                <button className="flex items-center gap-1">
                  <img src={imgFrame12} alt="Comment" className="h-4 w-4" /> 22
                  comments
                </button>
                <button className="flex items-center gap-1">
                  <img src={imgFrame13} alt="Share" className="h-4 w-4" /> Share
                </button>
              </div>
            </div>
            <div className="mt-8 flex justify-center">
              <button className="rounded-lg border border-gray-300 px-8 py-3 font-medium text-gray-700">
                Load More Posts
              </button>
            </div>
          </div>
        </section>
      </main>
      <CommonFooter />
    </div>
  )
}

export default RenterProfile

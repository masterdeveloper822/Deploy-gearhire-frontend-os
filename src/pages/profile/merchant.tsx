import React from "react"
import { CommonFooter } from "@/components/layout/footer/common"
import { RenterHeader } from "@/components/layout/header/renter-header"

// Image and SVG asset URLs from Figma export
const imgImg =
  "http://localhost:3845/assets/410c340aa057242400c608368f918307cdd72438.png"
const imgImg1 =
  "http://localhost:3845/assets/93037e6ca2ce44903241b99bb61ddacf463f9e73.png"
const imgImg2 =
  "http://localhost:3845/assets/4b6663ec817d2dd346f377b8a042f76e2932cea3.png"
const imgImg3 =
  "http://localhost:3845/assets/1ecf079ec8689bbaae63f5da5488e7eb737484f8.png"
const imgImg4 =
  "http://localhost:3845/assets/a8f4c76a0688a13e7a0fb3646adc02cce355cdc0.png"
const imgImg5 =
  "http://localhost:3845/assets/e8d3f885216294a4e20c380d0ae0bfe668482ab1.png"
const imgImg6 =
  "http://localhost:3845/assets/33e934fdda52808550f10d0f25f0cd98232f429f.png"
const imgFrame =
  "http://localhost:3845/assets/ed4e1169b638e2e838350960320b53c878e45615.svg"
const imgFrame1 =
  "http://localhost:3845/assets/3c263b2f5e29b2c69a8eac7d3fab787b495f12da.svg"
const imgFrame2 =
  "http://localhost:3845/assets/31a6ab41c110459fa0e535ed35563168cd5fc9e5.svg"
const imgGroup =
  "http://localhost:3845/assets/e139d15c118e3939359d265960b2f58d57e79424.svg"
const imgFrame3 =
  "http://localhost:3845/assets/ceb3b997015ffd4cd788f7986f039f425b0ce48f.svg"
const imgFrame4 =
  "http://localhost:3845/assets/d27db70ed025b3675102841a5bd3ed5ae8e7b6f5.svg"
const imgFrame5 =
  "http://localhost:3845/assets/a73a34ee52a39108710cbcd2ec4751a80bb8e7db.svg"
const imgFrame6 =
  "http://localhost:3845/assets/5c4f3c36624f887fc5373fc1e63d35a103d60fc5.svg"
const imgFrame7 =
  "http://localhost:3845/assets/4e2e082d3de9515c05514fa14e3c98345c298554.svg"
const imgFrame8 =
  "http://localhost:3845/assets/ce9e8bd5ee160e061a4cdd1b42976ea135dc6a2c.svg"
const imgFrame9 =
  "http://localhost:3845/assets/b0b8edad002f8ebc88245a9b5dca036ed968399d.svg"
const imgFrame10 =
  "http://localhost:3845/assets/80a74062877a90bd9a971a79fa4600a0d8c6725c.svg"

const MerchantProfile: React.FC = () => {
  return (
    <div className="min-h-screen bg-gray-50">
      {/* Header */}
      <RenterHeader />
      <main className="mx-auto flex max-w-7xl gap-8 px-4 py-8">
        {/* Sidebar */}
        <aside className="flex w-64 flex-col rounded-lg bg-white p-6 shadow">
          <div className="relative mb-4 flex flex-col items-center">
            <img
              src={imgImg}
              alt="Merchant Profile"
              className="h-24 w-24 rounded-full border-4 border-gray-200 object-cover"
            />
            <span className="absolute -bottom-2 left-1/2 flex -translate-x-1/2 items-center gap-1 rounded-full bg-green-100 px-2 py-1 text-xs font-medium text-green-700 shadow">
              <img src={imgGroup} alt="Verified" className="h-4 w-4" /> Verified
            </span>
          </div>
          <h2 className="text-center text-2xl font-bold text-gray-800">
            ProGear Studios
          </h2>
          <div className="mb-2 flex items-center justify-center gap-2 text-center text-gray-600">
            <img src={imgFrame3} alt="Location" className="h-4 w-4" /> Los
            Angeles, CA
          </div>
          <div className="mb-2 flex items-center justify-center gap-1">
            {[...Array(5)].map((_, i) => (
              <img key={i} src={imgFrame4} alt="Star" className="h-4 w-4" />
            ))}
            <span className="ml-2 text-sm text-gray-600">4.9 (27 reviews)</span>
          </div>
          <a
            href="#"
            className="mb-4 flex items-center justify-center gap-1 text-sm text-sky-600"
          >
            <img src={imgFrame5} alt="Website" className="h-4 w-4" /> Website
          </a>
          <div className="mb-4 flex gap-2">
            <button className="flex items-center gap-2 rounded-lg bg-sky-600 px-6 py-2 font-medium text-white">
              <img src={imgFrame6} alt="Follow" className="h-4 w-4" /> Follow
            </button>
            <button className="flex items-center gap-2 rounded-lg border border-sky-600 px-6 py-2 font-medium text-sky-600">
              <img src={imgFrame7} alt="Message" className="h-4 w-4" /> Message
            </button>
          </div>
          <div className="mb-6 w-full text-left">
            <h3 className="mb-1 font-semibold text-gray-800">About</h3>
            <p className="text-sm text-gray-600">
              Professional film equipment rental house serving the greater Los
              Angeles area for over 10 years. We specialize in high-end cameras,
              lighting, and grip equipment for feature films, commercials, and
              documentaries.
            </p>
          </div>
          <div className="mb-6 w-full text-left">
            <h3 className="mb-1 font-semibold text-gray-800">
              Equipment Categories
            </h3>
            <div className="flex flex-wrap gap-2">
              <span className="rounded-full bg-gray-100 px-4 py-1 text-sm text-gray-700">
                Cameras
              </span>
              <span className="rounded-full bg-gray-100 px-4 py-1 text-sm text-gray-700">
                Lighting
              </span>
              <span className="rounded-full bg-gray-100 px-4 py-1 text-sm text-gray-700">
                Grip
              </span>
              <span className="rounded-full bg-gray-100 px-4 py-1 text-sm text-gray-700">
                Audio
              </span>
            </div>
          </div>
          <div className="w-full text-left">
            <h3 className="mb-1 font-semibold text-gray-800">Connect</h3>
            <div className="flex gap-2">
              <img src={imgFrame8} alt="Instagram" className="h-5 w-5" />
              <img src={imgFrame9} alt="LinkedIn" className="h-5 w-5" />
              <img src={imgFrame10} alt="Website" className="h-5 w-5" />
            </div>
          </div>
        </aside>
        {/* Main Content */}
        <section className="flex-1">
          {/* Tabs */}
          <div className="mb-8 flex gap-8 border-b">
            <button className="border-b-2 border-sky-600 py-4 font-medium text-sky-600">
              Inventory
            </button>
            <button className="py-4 font-medium text-gray-600">Reviews</button>
            <button className="py-4 font-medium text-gray-600">
              Training Courses
            </button>
          </div>
          <h1 className="mb-6 flex items-center justify-between text-2xl font-bold text-gray-800">
            Available Equipment{" "}
            <span className="text-base font-normal text-gray-500">
              24 items
            </span>
          </h1>
          {/* Equipment Grid */}
          <div className="grid grid-cols-1 gap-8 md:grid-cols-2 lg:grid-cols-3">
            {/* Card 1 */}
            <div className="overflow-hidden rounded-lg bg-white shadow">
              <img
                src={imgImg1}
                alt="RED Komodo 6K"
                className="h-48 w-full object-cover"
              />
              <div className="p-6">
                <h2 className="mb-1 text-lg font-semibold text-gray-800">
                  RED Komodo 6K
                </h2>
                <p className="mb-2 text-sm text-gray-600">Cinema Camera</p>
                <button className="w-full rounded-lg bg-sky-600 px-6 py-2 font-medium text-white">
                  View Details
                </button>
              </div>
            </div>
            {/* Card 2 */}
            <div className="overflow-hidden rounded-lg bg-white shadow">
              <img
                src={imgImg2}
                alt="ARRI SkyPanel S60-C"
                className="h-48 w-full object-cover"
              />
              <div className="p-6">
                <h2 className="mb-1 text-lg font-semibold text-gray-800">
                  ARRI SkyPanel S60-C
                </h2>
                <p className="mb-2 text-sm text-gray-600">LED Panel</p>
                <button className="w-full rounded-lg bg-sky-600 px-6 py-2 font-medium text-white">
                  View Details
                </button>
              </div>
            </div>
            {/* Card 3 */}
            <div className="overflow-hidden rounded-lg bg-white shadow">
              <img
                src={imgImg3}
                alt="Sony FX6"
                className="h-48 w-full object-cover"
              />
              <div className="p-6">
                <h2 className="mb-1 text-lg font-semibold text-gray-800">
                  Sony FX6
                </h2>
                <p className="mb-2 text-sm text-gray-600">Cinema Camera</p>
                <button className="w-full rounded-lg bg-sky-600 px-6 py-2 font-medium text-white">
                  View Details
                </button>
              </div>
            </div>
            {/* Card 4 */}
            <div className="overflow-hidden rounded-lg bg-white shadow">
              <img
                src={imgImg4}
                alt="Canon 24-70mm f/2.8"
                className="h-48 w-full object-cover"
              />
              <div className="p-6">
                <h2 className="mb-1 text-lg font-semibold text-gray-800">
                  Canon 24-70mm f/2.8
                </h2>
                <p className="mb-2 text-sm text-gray-600">Camera Lens</p>
                <button className="w-full rounded-lg bg-sky-600 px-6 py-2 font-medium text-white">
                  View Details
                </button>
              </div>
            </div>
            {/* Card 5 */}
            <div className="overflow-hidden rounded-lg bg-white shadow">
              <img
                src={imgImg5}
                alt="Steadicam Vest & Arm"
                className="h-48 w-full object-cover"
              />
              <div className="p-6">
                <h2 className="mb-1 text-lg font-semibold text-gray-800">
                  Steadicam Vest & Arm
                </h2>
                <p className="mb-2 text-sm text-gray-600">Stabilizer</p>
                <button className="w-full rounded-lg bg-sky-600 px-6 py-2 font-medium text-white">
                  View Details
                </button>
              </div>
            </div>
            {/* Card 6 */}
            <div className="overflow-hidden rounded-lg bg-white shadow">
              <img
                src={imgImg6}
                alt="Rode Wireless GO II"
                className="h-48 w-full object-cover"
              />
              <div className="p-6">
                <h2 className="mb-1 text-lg font-semibold text-gray-800">
                  Rode Wireless GO II
                </h2>
                <p className="mb-2 text-sm text-gray-600">Wireless Mic</p>
                <button className="w-full rounded-lg bg-sky-600 px-6 py-2 font-medium text-white">
                  View Details
                </button>
              </div>
            </div>
          </div>
          {/* Load More Button */}
          <div className="mt-10 flex justify-center">
            <button className="rounded-lg border border-gray-300 px-8 py-3 font-medium text-gray-700">
              Load More Equipment
            </button>
          </div>
        </section>
      </main>
      <CommonFooter />
    </div>
  )
}

export default MerchantProfile

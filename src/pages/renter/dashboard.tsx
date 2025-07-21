import React from "react"
import { RenterHeader } from "@/components/layout/header/renter-header"
import { CommonFooter } from "@/components/layout/footer/common"
import { Button } from "@/components/ui/button"
import { RFQIcon } from "@/components/ui/icon"

const imgImg =
  "http://localhost:3845/assets/410c340aa057242400c608368f918307cdd72438.png"
const imgImg1 =
  "http://localhost:3845/assets/1d5ad8aaf12fd61a75197f707f6ef40c7edd6e1f.png"
const imgImg2 =
  "http://localhost:3845/assets/62cf3999054cc537c0097db13873caa2eaa2e819.png"
const imgImg3 =
  "http://localhost:3845/assets/1ecb12199697dd16c82152392c0b02a04bd85271.png"
const imgImg4 =
  "http://localhost:3845/assets/bec21fc75386a86210d32bec8ca98fcb2380d21e.png"
const imgImg5 =
  "http://localhost:3845/assets/157a8cae4c47674ef06c93dae0edece12ad3c0a6.png"
const imgImg6 =
  "http://localhost:3845/assets/93261e682a4fc24925831eb042e025379dab45ab.png"
const imgFrame =
  "http://localhost:3845/assets/e893845034f3d515196355f1a7d27c0f2880f52c.svg"
const imgFrame1 =
  "http://localhost:3845/assets/8a7f88a1f53ac26dc145ca08f7eaace0c7b7cfbf.svg"
const imgFrame2 =
  "http://localhost:3845/assets/5ccdfe921b460b458645c593bb33598a08adae3d.svg"
const imgFrame3 =
  "http://localhost:3845/assets/e604f013218cd25f209ff1dc593022b4eb5f91c6.svg"
const imgFrame4 =
  "http://localhost:3845/assets/379d9d957f1e4c5934de10726ed3f32a671d6c44.svg"
const imgFrame5 =
  "http://localhost:3845/assets/3854934e105058238349fc8b22c891fd45be9a06.svg"
const imgFrame6 =
  "http://localhost:3845/assets/f3f266a6575b79ab545a87d9b2e97be446a999cc.svg"
const imgFrame7 =
  "http://localhost:3845/assets/454177c63a330450cd4a8ce49fd916f43edd0026.svg"
const imgFrame8 =
  "http://localhost:3845/assets/e401703c397927a1e601799ae57cfade1df297a5.svg"
const imgFrame9 =
  "http://localhost:3845/assets/c4fdaa6f54c86c97d5f8ef273dde147bad45e64f.svg"

export const RenterDashboard = () => {
  return (
    <div className="min-h-screen bg-gray-50">
      <RenterHeader />
      <main className="mx-auto mb-12 max-w-[1440px] px-2 py-4 sm:px-4 sm:py-8">
        <div className="mx-auto max-w-[1152px]">
          {/* Header Section */}
          <div className="mb-8">
            <h1 className="mb-4 text-3xl font-bold text-gray-800">
              Welcome back, Sarah!
            </h1>
            <p className="text-base text-gray-600">
              Here's what's happening with your film projects.
            </p>
          </div>

          <div className="flex flex-col gap-8 lg:flex-row">
            {/* Main Content */}
            <div className="flex-1 space-y-6">
              {/* Quick Access Section */}
              <section className="rounded-lg border border-gray-200 bg-white p-6 shadow-sm">
                <h2 className="mb-6 text-xl font-semibold text-gray-800">
                  Quick Access
                </h2>
                <div className="grid grid-cols-1 gap-4 sm:grid-cols-2">
                  {/* My RFQs */}
                  <div className="rounded-lg bg-gradient-to-r from-blue-50 to-blue-100 p-4">
                    <div className="flex items-center justify-between">
                      <div className="flex h-10 w-10 items-center justify-center rounded-lg bg-blue-600">
                        <RFQIcon />
                      </div>
                      <span className="rounded-full bg-blue-200 px-2 py-1 text-xs font-medium text-blue-800">
                        3 Active
                      </span>
                    </div>
                    <h3 className="mt-4 text-base font-semibold text-gray-800">
                      My RFQs
                    </h3>
                    <p className="mt-1 text-sm text-gray-600">
                      View and manage your requests
                    </p>
                  </div>

                  {/* Messages */}
                  <div className="rounded-lg bg-gradient-to-r from-green-50 to-green-100 p-4">
                    <div className="flex items-center justify-between">
                      <div className="flex h-10 w-10 items-center justify-center rounded-lg bg-green-600">
                        <img
                          src={imgFrame1}
                          alt="Messages"
                          className="h-4 w-4"
                        />
                      </div>
                      <span className="rounded-full bg-green-200 px-2 py-1 text-xs font-medium text-green-800">
                        2 New
                      </span>
                    </div>
                    <h3 className="mt-4 text-base font-semibold text-gray-800">
                      Messages
                    </h3>
                    <p className="mt-1 text-sm text-gray-600">
                      Connect with merchants
                    </p>
                  </div>

                  {/* Document Vault */}
                  <div className="rounded-lg bg-gradient-to-r from-purple-50 to-purple-100 p-4">
                    <div className="flex items-center justify-between">
                      <div className="flex h-10 w-10 items-center justify-center rounded-lg bg-purple-600">
                        <img
                          src={imgFrame2}
                          alt="Documents"
                          className="h-4 w-4"
                        />
                      </div>
                      <span className="rounded-full bg-purple-200 px-2 py-1 text-xs font-medium text-purple-800">
                        12 Files
                      </span>
                    </div>
                    <h3 className="mt-4 text-base font-semibold text-gray-800">
                      Document Vault
                    </h3>
                    <p className="mt-1 text-sm text-gray-600">
                      Store and share documents
                    </p>
                  </div>

                  {/* Edit Profile */}
                  <div className="rounded-lg bg-gradient-to-r from-orange-50 to-orange-100 p-4">
                    <div className="flex items-center justify-between">
                      <div className="flex h-10 w-10 items-center justify-center rounded-lg bg-orange-600">
                        <img
                          src={imgFrame3}
                          alt="Profile"
                          className="h-4 w-5"
                        />
                      </div>
                    </div>
                    <h3 className="mt-4 text-base font-semibold text-gray-800">
                      Edit Profile
                    </h3>
                    <p className="mt-1 text-sm text-gray-600">
                      Update your information
                    </p>
                  </div>
                </div>
              </section>

              {/* Recent Updates Section */}
              <section className="rounded-lg border border-gray-200 bg-white p-6 shadow-sm">
                <div className="mb-6 flex items-center justify-between">
                  <h2 className="text-xl font-semibold text-gray-800">
                    Recent Updates
                  </h2>
                  <button className="text-sm font-medium text-sky-600 hover:text-sky-700">
                    View Full Feed
                  </button>
                </div>

                <div className="space-y-6">
                  {/* Update 1 */}
                  <div className="border-b border-gray-100 pb-6">
                    <div className="flex gap-4">
                      <img
                        src={imgImg}
                        alt="ProGear Studios"
                        className="h-10 w-10 rounded-full object-cover"
                      />
                      <div className="flex-1">
                        <div className="mb-2 flex items-center gap-2">
                          <span className="text-base font-semibold text-gray-800">
                            ProGear Studios
                          </span>
                          <span className="text-xs text-gray-500">
                            2 hours ago
                          </span>
                        </div>
                        <p className="mb-4 text-base text-gray-700">
                          Just added new RED Komodo cameras to our inventory!
                          Perfect for indie filmmakers looking for
                          cinema-quality footage. Check out our latest gear.
                        </p>
                        <div className="flex items-center gap-4">
                          <button className="flex items-center gap-1 text-sm text-gray-500 hover:text-gray-700">
                            <img
                              src={imgFrame4}
                              alt="like"
                              className="h-4 w-4"
                            />
                            <span>12</span>
                          </button>
                          <button className="flex items-center gap-1 text-sm text-gray-500 hover:text-gray-700">
                            <img
                              src={imgFrame5}
                              alt="comment"
                              className="h-4 w-4"
                            />
                            <span>3</span>
                          </button>
                          <button className="text-sm font-medium text-sky-600 hover:text-sky-700">
                            View Post
                          </button>
                        </div>
                      </div>
                    </div>
                  </div>

                  {/* Update 2 */}
                  <div className="border-b border-gray-100 pb-6">
                    <div className="flex gap-4">
                      <img
                        src={imgImg1}
                        alt="Marcus Rodriguez"
                        className="h-10 w-10 rounded-full object-cover"
                      />
                      <div className="flex-1">
                        <div className="mb-2 flex items-center gap-2">
                          <span className="text-base font-semibold text-gray-800">
                            Marcus Rodriguez
                          </span>
                          <span className="text-xs text-gray-500">
                            1 day ago
                          </span>
                        </div>
                        <p className="mb-4 text-base text-gray-700">
                          Behind the scenes from our latest commercial shoot!
                          Thanks to all the amazing filmmakers who trusted us
                          with their equipment needs. 🎬
                        </p>
                        <div className="mb-4 rounded-lg bg-gray-100 p-3">
                          <img
                            src={imgImg2}
                            alt="Behind the scenes"
                            className="h-32 w-full rounded object-cover"
                          />
                        </div>
                        <div className="flex items-center gap-4">
                          <button className="flex items-center gap-1 text-sm text-gray-500 hover:text-gray-700">
                            <img
                              src={imgFrame6}
                              alt="like"
                              className="h-4 w-4"
                            />
                            <span>24</span>
                          </button>
                          <button className="flex items-center gap-1 text-sm text-gray-500 hover:text-gray-700">
                            <img
                              src={imgFrame5}
                              alt="comment"
                              className="h-4 w-4"
                            />
                            <span>8</span>
                          </button>
                          <button className="text-sm font-medium text-sky-600 hover:text-sky-700">
                            View Post
                          </button>
                        </div>
                      </div>
                    </div>
                  </div>

                  {/* Update 3 */}
                  <div className="pb-6">
                    <div className="flex gap-4">
                      <img
                        src={imgImg3}
                        alt="CineRent Pro"
                        className="h-10 w-10 rounded-full object-cover"
                      />
                      <div className="flex-1">
                        <div className="mb-2 flex items-center gap-2">
                          <span className="text-base font-semibold text-gray-800">
                            CineRent Pro
                          </span>
                          <span className="text-xs text-gray-500">
                            2 days ago
                          </span>
                        </div>
                        <p className="mb-4 text-base text-gray-700">
                          Pro tip: Always test your audio equipment before the
                          shoot day! We offer free equipment testing sessions
                          for all our clients.
                        </p>
                        <div className="flex items-center gap-4">
                          <button className="flex items-center gap-1 text-sm text-gray-500 hover:text-gray-700">
                            <img
                              src={imgFrame4}
                              alt="like"
                              className="h-4 w-4"
                            />
                            <span>18</span>
                          </button>
                          <button className="flex items-center gap-1 text-sm text-gray-500 hover:text-gray-700">
                            <img
                              src={imgFrame5}
                              alt="comment"
                              className="h-4 w-4"
                            />
                            <span>5</span>
                          </button>
                          <button className="text-sm font-medium text-sky-600 hover:text-sky-700">
                            View Post
                          </button>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </section>
            </div>

            {/* Sidebar */}
            <div className="w-full space-y-6 lg:w-[352px]">
              {/* Suggested Merchants Section */}
              <section className="rounded-lg border border-gray-200 bg-white p-6 shadow-sm">
                <h2 className="mb-6 text-lg font-semibold text-gray-800">
                  Suggested Merchants
                </h2>
                <div className="space-y-4">
                  {/* Merchant 1 */}
                  <div className="rounded-lg bg-gray-50 p-3">
                    <div className="flex items-center justify-between">
                      <div className="flex items-center gap-3">
                        <img
                          src={imgImg4}
                          alt="LensWorks Studio"
                          className="h-10 w-10 rounded-full object-cover"
                        />
                        <div>
                          <h3 className="text-base font-medium text-gray-800">
                            LensWorks Studio
                          </h3>
                          <p className="text-xs text-gray-600">
                            Camera & Lens Specialist
                          </p>
                        </div>
                      </div>
                      <Button
                        variant="tertiary"
                        className="w-17 h-7 rounded-full px-3 py-1"
                      >
                        Follow
                      </Button>
                    </div>
                  </div>

                  {/* Merchant 2 */}
                  <div className="rounded-lg bg-gray-50 p-3">
                    <div className="flex items-center justify-between">
                      <div className="flex items-center gap-3">
                        <img
                          src={imgImg5}
                          alt="AudioTech Rentals"
                          className="h-10 w-10 rounded-full object-cover"
                        />
                        <div>
                          <h3 className="text-base font-medium text-gray-800">
                            AudioTech Rentals
                          </h3>
                          <p className="text-xs text-gray-600">
                            Professional Audio Equipment
                          </p>
                        </div>
                      </div>
                      <Button
                        variant="tertiary"
                        className="w-17 h-7 rounded-full px-3 py-1"
                      >
                        Follow
                      </Button>
                    </div>
                  </div>

                  {/* Merchant 3 */}
                  <div className="rounded-lg bg-gray-50 p-3">
                    <div className="flex items-center justify-between">
                      <div className="flex items-center gap-3">
                        <img
                          src={imgImg6}
                          alt="Grip & Electric Co"
                          className="h-10 w-10 rounded-full object-cover"
                        />
                        <div>
                          <h3 className="text-base font-medium text-gray-800">
                            Grip & Electric Co
                          </h3>
                          <p className="text-xs text-gray-600">
                            Lighting & Grip Equipment
                          </p>
                        </div>
                      </div>
                      <Button
                        variant="tertiary"
                        className="w-17 h-7 rounded-full px-3 py-1"
                      >
                        Follow
                      </Button>
                    </div>
                  </div>
                </div>
                <button className="mt-4 w-full text-sm font-medium text-sky-600 hover:text-sky-700">
                  View All Suggestions
                </button>
              </section>

              {/* Recent Activity Section */}
              <section className="rounded-lg border border-gray-200 bg-white p-6 shadow-sm">
                <h2 className="mb-6 text-lg font-semibold text-gray-800">
                  Recent Activity
                </h2>
                <div className="space-y-4">
                  {/* Activity 1 */}
                  <div className="flex gap-3">
                    <div className="flex h-8 w-8 items-center justify-center rounded-full bg-green-100">
                      <img src={imgFrame7} alt="quote" className="h-3.5 w-3" />
                    </div>
                    <div className="flex-1">
                      <p className="text-sm text-gray-700">
                        Quote received for RED Camera Package
                      </p>
                      <p className="text-xs text-gray-500">2 hours ago</p>
                    </div>
                  </div>

                  {/* Activity 2 */}
                  <div className="flex gap-3">
                    <div className="flex h-8 w-8 items-center justify-center rounded-full bg-blue-100">
                      <img
                        src={imgFrame8}
                        alt="message"
                        className="h-3.5 w-3.5"
                      />
                    </div>
                    <div className="flex-1">
                      <p className="text-sm text-gray-700">
                        New message from ProGear Studios
                      </p>
                      <p className="text-xs text-gray-500">5 hours ago</p>
                    </div>
                  </div>

                  {/* Activity 3 */}
                  <div className="flex gap-3">
                    <div className="flex h-8 w-8 items-center justify-center rounded-full bg-purple-100">
                      <img src={imgFrame9} alt="rfq" className="h-3.5 w-3" />
                    </div>
                    <div className="flex-1">
                      <p className="text-sm text-gray-700">
                        RFQ posted for Audio Equipment
                      </p>
                      <p className="text-xs text-gray-500">1 day ago</p>
                    </div>
                  </div>
                </div>
              </section>
            </div>
          </div>
        </div>
      </main>
      <CommonFooter />
    </div>
  )
}

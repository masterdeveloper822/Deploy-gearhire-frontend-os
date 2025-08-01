import React from "react"
import { CommonFooter } from "@/components/layout/footer/common"
import { Button } from "@/components/ui/button"
import { Link } from "react-router-dom"
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"
import { faCheck, faClipboardList, faFolder, faHeart as faHeartSolid, faMessage, faPlus, faUserPen } from "@fortawesome/free-solid-svg-icons"
import { faComment, faHeart as faHeartRegular } from "@fortawesome/free-regular-svg-icons"
import img1 from "@/assets/images/renter/1.png"
import man1 from "@/assets/images/avatars/man1.png"
import man2 from "@/assets/images/avatars/man2.png"
import man3 from "@/assets/images/avatars/man3.png"
import man4 from "@/assets/images/avatars/man4.png"
import man5 from "@/assets/images/avatars/man5.png"
import woman2 from "@/assets/images/avatars/woman2.png"
import { AuthHeader } from "@/components/layout/header/auth-header"

const updatesData = [
  {
    id: 1,
    merchant: "ProGear Studios",
    avatar: man4,
    time: "2 hours ago",
    content:
      "Just added new RED Komodo cameras to our inventory! Perfect for indie filmmakers looking for cinema-quality footage. Check out our latest gear.",
    likes: 12,
    comments: 3,
    image: null,
  },
  {
    id: 2,
    merchant: "Marcus Rodriguez",
    avatar: man2,
    time: "1 day ago",
    content:
      "Behind the scenes from our latest commercial shoot! Thanks to all the amazing filmmakers who trusted us with their equipment needs. 🎬",
    likes: 24,
    comments: 8,
    image: img1,
  },
  {
    id: 3,
    merchant: "CineRent Pro",
    avatar: man5,
    time: "2 days ago",
    content:
      "Pro tip: Always test your audio equipment before the shoot day! We offer free equipment testing sessions for all our clients.",
    likes: 18,
    comments: 5,
    image: null,
  },
]

export const RenterDashboard = () => {
  return (
    <div className="min-h-screen bg-gray-50">
      <AuthHeader />
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
                  <Link to="/rfq-list">
                    <div className="cursor-pointer rounded-lg bg-gradient-to-r from-blue-50 to-blue-100 p-4 transition hover:scale-[1.02] hover:shadow-lg focus:outline-none focus:ring-2 focus:ring-blue-300 active:scale-95">
                      <div className="flex items-center justify-between">
                        <div className="flex h-10 w-10 items-center justify-center rounded-lg bg-blue-600">
                          <FontAwesomeIcon icon={faClipboardList} className="h-4 w-4 text-white" />
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
                  </Link>

                  {/* Messages */}
                  <Link to="/renter-message">
                    <div className="cursor-pointer rounded-lg bg-gradient-to-r from-green-50 to-green-100 p-4 transition hover:scale-[1.02] hover:shadow-lg focus:outline-none focus:ring-2 focus:ring-green-300 active:scale-95">
                      <div className="flex items-center justify-between">
                        <div className="flex h-10 w-10 items-center justify-center rounded-lg bg-green-600">
                          <FontAwesomeIcon icon={faMessage} className="h-4 w-4 text-white" />
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
                  </Link>

                  {/* Document Vault */}
                  <Link>
                    <div className="cursor-pointer rounded-lg bg-gradient-to-r from-purple-50 to-purple-100 p-4 transition hover:scale-[1.02] hover:shadow-lg focus:outline-none focus:ring-2 focus:ring-purple-300 active:scale-95">
                      <div className="flex items-center justify-between">
                        <div className="flex h-10 w-10 items-center justify-center rounded-lg bg-purple-600">
                          <FontAwesomeIcon icon={faFolder} className="h-4 w-4 text-white" />
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
                  </Link>

                  {/* Edit Profile */}
                  <Link to="/renter-edit-profile">
                    <div className="cursor-pointer rounded-lg bg-gradient-to-r from-orange-50 to-orange-100 p-4 transition hover:scale-[1.02] hover:shadow-lg focus:outline-none focus:ring-2 focus:ring-orange-300 active:scale-95">
                      <div className="flex items-center justify-between">
                        <div className="flex h-10 w-10 items-center justify-center rounded-lg bg-orange-600">
                          <FontAwesomeIcon icon={faUserPen} className="h-5 w-5 text-white" />
                        </div>
                      </div>
                      <h3 className="mt-4 text-base font-semibold text-gray-800">
                        Edit Profile
                      </h3>
                      <p className="mt-1 text-sm text-gray-600">
                        Update your information
                      </p>
                    </div>
                  </Link>
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
                  {updatesData.map((update, index) => (
                    <div
                      key={update.id}
                      className={
                        index < updatesData.length - 1
                          ? "border-b border-gray-100 pb-6"
                          : "pb-6"
                      }
                    >
                      <div className="flex gap-4">
                        <Link to="/merchant-profile">
                          <img
                            src={update.avatar}
                            alt={update.merchant}
                            className="h-10 w-10 rounded-full object-cover"
                          />
                        </Link>
                        <div className="flex-1">
                          <div className="mb-2 flex items-center gap-2">
                            <span className="text-base font-semibold text-gray-800">
                              {update.merchant}
                            </span>
                            <span className="text-xs text-gray-500">
                              {update.time}
                            </span>
                          </div>
                          <p className="mb-4 text-base text-gray-700">
                            {update.content}
                          </p>
                          {update.image && (
                            <div className="mb-4 rounded-lg bg-gray-100 p-3">
                              <img
                                src={update.image}
                                alt="Update content"
                                className="h-32 w-full rounded object-cover"
                              />
                            </div>
                          )}
                          <div className="flex items-center gap-4">
                            <button className="flex items-center gap-1 text-sm text-gray-500 hover:text-gray-700">
                              <FontAwesomeIcon
                                icon={update.id === 2 ? faHeartSolid : faHeartRegular}
                                alt="like"
                                className={`h-4 w-4 ${update.id === 2 ? "text-red-500" : ""}`}
                              />
                              <span>{update.likes}</span>
                            </button>
                            <button className="flex items-center gap-1 text-sm text-gray-500 hover:text-gray-700">
                              <FontAwesomeIcon icon={faComment} className="h-4 w-4" />
                              <span>{update.comments}</span>
                            </button>
                            <button className="text-sm font-medium text-sky-600 hover:text-sky-700">
                              View Post
                            </button>
                          </div>
                        </div>
                      </div>
                    </div>
                  ))}
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
                          src={man3}
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
                          src={man4}
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
                          src={woman2}
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
                      <FontAwesomeIcon icon={faCheck} alt="quote" className="h-3.5 w-3 text-colored-green" />
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
                      <FontAwesomeIcon
                        icon={faMessage}
                        alt="message"
                        className="h-3.5 w-3.5 text-colored-blue"
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
                      <FontAwesomeIcon icon={faPlus} alt="rfq" className="h-3.5 w-3 text-colored-purple" />
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

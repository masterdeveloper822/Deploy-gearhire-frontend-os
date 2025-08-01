import { AuthHeader } from "@/components/layout/header/auth-header"
import { BackArrowIcon } from "@/components/ui/icon"
import { Button } from "@/components/ui/button"
import { Card } from "@/components/ui/card"
import React from "react"
import { useNavigate } from "react-router-dom"
import { CommonFooter } from "@/components/layout/footer/common"
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"
import { faCamera, faLightbulb, faStar, faVideo } from "@fortawesome/free-solid-svg-icons"

import man2 from "@/assets/images/avatars/man2.png"
import man3 from "@/assets/images/avatars/man3.png"
import woman1 from "@/assets/images/avatars/woman1.png"
import woman3 from "@/assets/images/avatars/woman3.png"


const Review: React.FC = () => {
  const navigate = useNavigate()

  return (
    <div className="min-h-screen bg-gray-50">
      <AuthHeader />

      <main className="flex min-h-[calc(100vh-64px)] items-center justify-center px-4 pb-20 pt-8 sm:px-6 lg:px-8">
        <div className="w-full max-w-4xl px-4">
          {/* Back Button and Title */}
          <div className="mb-8 flex items-center">
            <button
              className="mr-3 rounded px-2"
              onClick={() => navigate(-1)}
              aria-label="Back"
            >
              <BackArrowIcon />
            </button>
            <h1 className="text-3xl font-bold text-gray-800 sm:text-4xl">
              Reviews You've Received
            </h1>
          </div>

          {/* Reviews Overview Card */}
          <Card className="mb-8 rounded-lg bg-white p-6 shadow-sm">
            <div className="grid gap-8 lg:grid-cols-2">
              {/* Left Side - Overall Rating */}
              <div>
                <div className="mb-4 flex items-center">
                  <span className="text-4xl font-bold text-gray-800">4.6</span>
                  <div className="ml-4 flex">
                    {[1, 2, 3, 4, 5].map((star) => (
                      <FontAwesomeIcon
                        key={star}
                        alt={`${star} star`}
                        className={`h-5 w-5 ${star <= 4 ? "text-yellow-400" : "text-gray-200"}` }
                        icon={faStar}
                      />
                    ))}
                  </div>
                </div>
                <p className="text-gray-600">Based on 24 reviews</p>
              </div>

              {/* Right Side - Rating Breakdown */}
              <div className="space-y-2">
                {[
                  { stars: 5, count: 17, percentage: 70.8 },
                  { stars: 4, count: 5, percentage: 20.8 },
                  { stars: 3, count: 2, percentage: 8.3 },
                  { stars: 2, count: 0, percentage: 0 },
                  { stars: 1, count: 0, percentage: 0 },
                ].map((rating) => (
                  <div
                    key={rating.stars}
                    className="flex items-center space-x-3"
                  >
                    <span className="w-8 text-sm text-gray-600">
                      {rating.stars}★
                    </span>
                    <div className="flex-1">
                      <div className="h-2 w-full rounded-full bg-gray-200">
                        <div
                          className="h-2 rounded-full bg-yellow-400"
                          style={{ width: `${rating.percentage}%` }}
                        />
                      </div>
                    </div>
                    <span className="w-8 text-sm text-gray-600">
                      {rating.count}
                    </span>
                  </div>
                ))}
              </div>
            </div>
          </Card>

          {/* Individual Review Cards */}
          <div className="space-y-6">
            {/* Review 1 */}
            <Card className="rounded-lg border border-gray-100 bg-white p-6 shadow-sm">
              <div className="flex space-x-4">
                <div
                  className="h-12 w-12 rounded-full bg-cover bg-center bg-no-repeat"
                  style={{ backgroundImage: `url('${woman3}')` }}
                />
                <div className="flex-1">
                  <div className="mb-2">
                    <div className="flex items-center justify-between">
                      <h3 className="font-medium text-gray-800">Sarah Chen</h3>
                    </div>
                    <div className="flex items-center space-x-2 text-sm text-gray-500">
                      <div className="flex">
                        {[1, 2, 3, 4, 5].map((star) => (
                          <FontAwesomeIcon
                            key={star}
                            alt={`${star} star`}
                            className="text-yellow-400 h-4 w-4"
                            icon={faStar}
                          />
                        ))}
                      </div>
                      <span>•</span>
                      <span>2 days ago</span>
                    </div>
                  </div>
                  <p className="mb-3 text-gray-700">
                    Excellent service and equipment quality! The RED camera
                    package was exactly as described and ProGear Studios was
                    very responsive throughout the rental process. Highly
                    recommend for any production needs.
                  </p>
                  <div className="flex items-center space-x-2 text-sm text-gray-500">
                    <FontAwesomeIcon
                      alt="Equipment icon"
                      className="h-4 w-4"
                      icon={faVideo}
                    />
                    <span>RED Camera Package</span>
                  </div>
                </div>
              </div>
            </Card>

            {/* Review 2 */}
            <Card className="rounded-lg border border-gray-100 bg-white p-6 shadow-sm">
              <div className="flex space-x-4">
                <div
                  className="h-12 w-12 rounded-full bg-cover bg-center bg-no-repeat"
                  style={{ backgroundImage: `url('${man2}')` }}
                />
                <div className="flex-1">
                  <div className="mb-2">
                    <div className="flex items-center justify-between">
                      <h3 className="font-medium text-gray-800">
                        Marcus Rodriguez
                      </h3>
                    </div>
                    <div className="flex items-center space-x-2 text-sm text-gray-500">
                      <div className="flex">
                        {[1, 2, 3, 4, 5].map((star) => (
                          <FontAwesomeIcon
                            key={star}
                            alt={`${star} star`}
                            className={`h-4 w-4 ${star <= 4 ? "text-yellow-400" : "text-gray-200"}` }
                            icon={faStar}
                          />
                        ))}
                      </div>
                      <span>•</span>
                      <span>1 week ago</span>
                    </div>
                  </div>
                  <p className="mb-3 text-gray-700">
                    Great lighting equipment and professional service. The ARRI
                    kit was perfect for our commercial shoot. Only minor issue
                    was pickup timing, but overall very satisfied with the
                    experience.
                  </p>
                  <div className="flex items-center space-x-2 text-sm text-gray-500">
                    <FontAwesomeIcon
                      alt="Equipment icon"
                      className="h-4 w-4"
                      icon={faLightbulb}
                    />
                    <span>ARRI Lighting Kit</span>
                  </div>
                </div>
              </div>
            </Card>

            {/* Review 3 */}
            <Card className="rounded-lg border border-gray-100 bg-white p-6 shadow-sm">
              <div className="flex space-x-4">
                <div
                  className="h-12 w-12 rounded-full bg-cover bg-center bg-no-repeat"
                  style={{ backgroundImage: `url('${woman1}')` }}
                />
                <div className="flex-1">
                  <div className="mb-2">
                    <div className="flex items-center justify-between">
                      <h3 className="font-medium text-gray-800">
                        Emma Thompson
                      </h3>
                    </div>
                    <div className="flex items-center space-x-2 text-sm text-gray-500">
                      <div className="flex">
                        {[1, 2, 3, 4, 5].map((star) => (
                          <FontAwesomeIcon
                            key={star}
                            alt={`${star} star`}
                            className="h-4 w-4 text-yellow-400"
                            icon={faStar}
                          />
                        ))}
                      </div>
                      <span>•</span>
                      <span>2 weeks ago</span>
                    </div>
                  </div>
                  <p className="text-gray-700">
                    Professional audio equipment in excellent condition. ProGear
                    Studios made the rental process smooth and easy. Will
                    definitely work with them again on future projects.
                  </p>
                </div>
              </div>
            </Card>

            {/* Review 4 */}
            <Card className="rounded-lg border border-gray-100 bg-white p-6 shadow-sm">
              <div className="flex space-x-4">
                <div
                  className="h-12 w-12 rounded-full bg-cover bg-center bg-no-repeat"
                  style={{ backgroundImage: `url('${man3}')` }}
                />
                <div className="flex-1">
                  <div className="mb-2">
                    <div className="flex items-center justify-between">
                      <h3 className="font-medium text-gray-800">David Kim</h3>
                    </div>
                    <div className="flex items-center space-x-2 text-sm text-gray-500">
                      <div className="flex">
                        {[1, 2, 3, 4, 5].map((star) => (
                          <FontAwesomeIcon
                            key={star}
                            alt={`${star} star`}
                            className={`h-4 w-4 ${star <= 3 ? "text-yellow-400" : "text-gray-200"}` }
                            icon={faStar}
                          />
                        ))}
                      </div>
                      <span>•</span>
                      <span>3 weeks ago</span>
                    </div>
                  </div>
                  <p className="mb-3 text-gray-700">
                    Good equipment overall, but some items showed signs of wear.
                    Communication was prompt and helpful. Would consider renting
                    again for less critical projects.
                  </p>
                  <div className="flex items-center space-x-2 text-sm text-gray-500">
                    <FontAwesomeIcon
                      alt="Equipment icon"
                      className="h-4 w-4"
                      icon={faCamera}
                    />
                    <span>Grip & Support Equipment</span>
                  </div>
                </div>
              </div>
            </Card>
          </div>

          {/* Load More Button */}
          <div className="mt-8 text-center">
            <Button variant="outline" className="px-8 py-3">
              Load More Reviews
            </Button>
          </div>
        </div>
      </main>
      <CommonFooter />
    </div>
  )
}

export default Review

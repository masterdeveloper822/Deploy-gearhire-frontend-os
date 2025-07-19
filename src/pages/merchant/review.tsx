import { MerchantHeader } from "@/components/layout/header/merchant-header"
import { BackArrowIcon } from "@/components/ui/icon"
import { Button } from "@/components/ui/button"
import { Card } from "@/components/ui/card"
import React from "react"
import { useNavigate } from "react-router-dom"
import { MerchantFooter } from "@/components/layout/footer/merchant-footer"

const imgImg =
  "http://localhost:3845/assets/410c340aa057242400c608368f918307cdd72438.png"
const imgImg1 =
  "http://localhost:3845/assets/f578f9c2a181ef669150341163e63e6e9da01878.png"
const imgImg2 =
  "http://localhost:3845/assets/1d5ad8aaf12fd61a75197f707f6ef40c7edd6e1f.png"
const imgImg3 =
  "http://localhost:3845/assets/ec901f1c0d6bdc3abb3b7f2578c96a444ee001e2.png"
const imgImg4 =
  "http://localhost:3845/assets/bec21fc75386a86210d32bec8ca98fcb2380d21e.png"
const imgFrame =
  "http://localhost:3845/assets/ed4e1169b638e2e838350960320b53c878e45615.svg"
const imgFrame1 =
  "http://localhost:3845/assets/e23f57a2af62e42bd83fb2f8760ed0b74b1af3c6.svg"
const imgFrame2 =
  "http://localhost:3845/assets/1efdeed862e90b5b080da5ccaa63bb5c3a6cf0bc.svg"
const imgFrame3 =
  "http://localhost:3845/assets/aa466758cde76b5a218860ec71500af7d0ad95a6.svg"
const imgFrame4 =
  "http://localhost:3845/assets/7c555f9781c3a5db5083ae78fe81b469edf8128a.svg"
const imgFrame5 =
  "http://localhost:3845/assets/8004c3ad27617893292ad79baaf25f19237fa246.svg"
const imgFrame6 =
  "http://localhost:3845/assets/3dcb2d8f63d1a93d17138c2348b67db7144552b4.svg"
const imgFrame7 =
  "http://localhost:3845/assets/1a023847114a1c0df704186238df69114c37c84a.svg"
const imgFrame8 =
  "http://localhost:3845/assets/7d4fc88f626df962d5e9c7a4103485562a5545ba.svg"
const imgFrame9 =
  "http://localhost:3845/assets/505f5a1179fd6b4f986fd8ef200c7a8de0650b5c.svg"
const imgFrame10 =
  "http://localhost:3845/assets/abd0335e38703aec074b848d4a45dd37111309ea.svg"

const Review: React.FC = () => {
  const navigate = useNavigate()

  return (
    <div className="min-h-screen bg-gray-50">
      <MerchantHeader />

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
                      <img
                        key={star}
                        alt={`${star} star`}
                        className="h-5 w-5"
                        src={star <= 4 ? imgFrame4 : imgFrame5}
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
                  style={{ backgroundImage: `url('${imgImg1}')` }}
                />
                <div className="flex-1">
                  <div className="mb-2">
                    <div className="flex items-center justify-between">
                      <h3 className="font-medium text-gray-800">Sarah Chen</h3>
                    </div>
                    <div className="flex items-center space-x-2 text-sm text-gray-500">
                      <div className="flex">
                        {[1, 2, 3, 4, 5].map((star) => (
                          <img
                            key={star}
                            alt={`${star} star`}
                            className="h-4 w-4"
                            src={imgFrame6}
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
                    <img
                      alt="Equipment icon"
                      className="h-4 w-4"
                      src={imgFrame7}
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
                  style={{ backgroundImage: `url('${imgImg2}')` }}
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
                          <img
                            key={star}
                            alt={`${star} star`}
                            className="h-4 w-4"
                            src={star <= 4 ? imgFrame6 : imgFrame8}
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
                    <img
                      alt="Equipment icon"
                      className="h-4 w-4"
                      src={imgFrame9}
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
                  style={{ backgroundImage: `url('${imgImg3}')` }}
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
                          <img
                            key={star}
                            alt={`${star} star`}
                            className="h-4 w-4"
                            src={imgFrame6}
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
                  style={{ backgroundImage: `url('${imgImg4}')` }}
                />
                <div className="flex-1">
                  <div className="mb-2">
                    <div className="flex items-center justify-between">
                      <h3 className="font-medium text-gray-800">David Kim</h3>
                    </div>
                    <div className="flex items-center space-x-2 text-sm text-gray-500">
                      <div className="flex">
                        {[1, 2, 3, 4, 5].map((star) => (
                          <img
                            key={star}
                            alt={`${star} star`}
                            className="h-4 w-4"
                            src={star <= 3 ? imgFrame6 : imgFrame8}
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
                    <img
                      alt="Equipment icon"
                      className="h-4 w-4"
                      src={imgFrame10}
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
      <MerchantFooter />
    </div>
  )
}

export default Review

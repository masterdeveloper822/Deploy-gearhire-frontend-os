import React from "react"
import { AuthHeader } from "@/components/layout/header/auth-header"
import { CommonFooter } from "@/components/layout/footer/common"
import { Card } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import man1 from "@/assets/images/avatars/man1.png"
import StarRating from "@/components/review/star-rating"
import { BackArrowIcon } from "@/components/ui/icon"
import { useNavigate } from "react-router-dom"

const AddNewReview = () => {
  const navigate = useNavigate()
  return (
    <div className="min-h-screen bg-gray-50">
      <AuthHeader />
      <main className="mx-auto max-w-2xl px-2 sm:px-4 py-6 sm:py-8">
        <div className="relative">
        <button
            className="absolute left-0 top-1/2 -translate-y-1/2 rounded p-2 hover:bg-gray-100"
            onClick={() => navigate(-1)}
            aria-label="Back"
          >
            <BackArrowIcon />
          </button>
        <div className="pl-12">
          <h1 className="mb-3 text-2xl sm:text-3xl font-bold text-gray-800">
            Leave a Review
          </h1>
        <p className="mb-6 text-sm sm:text-base text-gray-600">
              Share your experience working with this merchant
            </p>
          </div>
        </div>
        {/* Merchant Info */}
        <Card className="mb-6 rounded-lg bg-white p-4 sm:p-6 shadow">
          <div className="mb-4 flex flex-col sm:flex-row items-center gap-4 sm:gap-6">
            <img
              src={man1}
              alt="merchant avatar"
              className="h-14 w-14 sm:h-16 sm:w-16 rounded-full object-cover"
            />
            <div className="text-center sm:text-left">
              <div className="text-base sm:text-lg font-semibold text-gray-800">
                Mike Johnson
              </div>
              <div className="mt-1 flex flex-col sm:flex-row items-center gap-2">
                <span className="flex items-center gap-1 rounded-full bg-green-100 px-2 py-0.5 text-xs text-green-800">
                  <span className="inline-block h-3 w-3 rounded-full bg-green-800"></span>
                  Verified Merchant
                </span>
                <button className="ml-0 sm:ml-2 text-xs sm:text-sm font-medium text-sky-600">
                  View Profile
                </button>
              </div>
            </div>
          </div>
          {/* Related RFQ */}
          <div className="rounded-lg bg-gray-100 p-3 sm:p-4">
            <div className="mb-1 text-xs sm:text-sm font-medium text-gray-800">
              Related RFQ
            </div>
            <div className="text-xs sm:text-sm text-gray-600">
              Camera Equipment for Short Film - Downtown Vancouver
            </div>
            <div className="mt-1 text-[10px] sm:text-xs text-gray-500">Dec 15-18, 2024</div>
          </div>
        </Card>
        <Card className="rounded-lg bg-white p-4 sm:p-6 shadow">
          {/* Rating */}
          <div className="mb-1">
            <label className="mb-2 block text-xs sm:text-sm font-semibold text-gray-800">
              Rating <span className="text-red-500">*</span>
            </label>
            <StarRating />
          </div>
          <div className ="mb-6">
              <span className="text-xs sm:text-sm text-gray-600">
                Click to rate your experience
            </span>
            </div>
          {/* Review Textarea */}
          <div className="mb-4">
            <label className="mb-2 block text-xs sm:text-sm font-semibold text-gray-800">
              Your Review <span className="text-red-500">*</span>
            </label>
            <textarea
              className="w-full resize-none rounded-lg border border-gray-300 px-3 sm:px-4 py-2 sm:py-3 text-sm sm:text-base text-gray-900"
              rows={5}
              placeholder="Describe your experience working with this merchant. Was the equipment in good condition? Was communication clear? Would you recommend them to other filmmakers?"
            />
            <div className="mt-1 flex flex-col sm:flex-row justify-between text-[10px] sm:text-xs text-gray-500">
              <span>Minimum 20 characters</span>
              <span>0 characters</span>
            </div>
          </div>
          {/* Checkbox */}
          <div className="mb-6 flex items-center">
            <input
              type="checkbox"
              className="mr-2 rounded border-gray-300"
              id="workAgain"
            />
            <label htmlFor="workAgain" className="text-xs sm:text-sm text-gray-800">
              I would work with this merchant again
            </label>
          </div>
          {/* Action Buttons */}
          <div className="flex flex-col sm:flex-row gap-3 sm:gap-4">
            <Button
              variant="ghost"
              className="flex-1 rounded-lg border border-gray-300 py-2 sm:py-3 text-sm sm:text-base font-medium text-gray-700 shadow"
            >
              Cancel
            </Button>
            <Button
              variant="tertiary"
              className="flex-1 rounded-lg bg-sky-600 py-2 sm:py-3 text-sm sm:text-base font-medium text-white shadow"
            >
              Submit Review
            </Button>
          </div>
        </Card>
      </main>
      <CommonFooter />
    </div>
  )
}

export default AddNewReview

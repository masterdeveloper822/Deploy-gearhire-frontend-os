import React from "react"
import { RenterHeader } from "@/components/layout/header/renter-header"
import { CommonFooter } from "@/components/layout/footer/common"

// Image and SVG asset URLs from Figma export
const imgImg =
  "http://localhost:3845/assets/f578f9c2a181ef669150341163e63e6e9da01878.png"
const imgImg1 =
  "http://localhost:3845/assets/410c340aa057242400c608368f918307cdd72438.png"
const imgFrame =
  "http://localhost:3845/assets/ed4e1169b638e2e838350960320b53c878e45615.svg"
const imgFrame1 =
  "http://localhost:3845/assets/9861a0b6e8bb9b630982f192343e0944f05f6199.svg"
const imgFrame2 =
  "http://localhost:3845/assets/1efdeed862e90b5b080da5ccaa63bb5c3a6cf0bc.svg"
const imgFrame3 =
  "http://localhost:3845/assets/1a64978febaad0f1b785c7e0ae8a7fab1223df37.svg"
const imgFrame4 =
  "http://localhost:3845/assets/0d10cbf1068ce7b4a0659b608b6a9deeb0758eab.svg"
const imgFrame5 =
  "http://localhost:3845/assets/d422ee48e0b2cc09c05797fedbedfeaf1a4ed50b.svg"

const AddNewReview = () => {
  return (
    <div className="min-h-screen bg-gray-50">
      <RenterHeader />
      <main className="mx-auto max-w-2xl px-4 py-8">
        <h1 className="mb-2 text-3xl font-bold text-gray-800">
          Leave a Review
        </h1>
        <p className="mb-8 text-base text-gray-600">
          Share your experience working with this merchant
        </p>
        {/* Merchant Info */}
        <div className="mb-8 rounded-lg bg-white p-6 shadow">
          <div className="mb-6 flex items-center gap-6">
            <img
              src={imgImg1}
              alt="merchant avatar"
              className="h-16 w-16 rounded-full object-cover"
            />
            <div>
              <div className="text-lg font-semibold text-gray-800">
                Mike Johnson
              </div>
              <div className="mt-1 flex items-center gap-2">
                <span className="flex items-center gap-1 rounded-full bg-green-100 px-2 py-0.5 text-xs text-green-800">
                  <img src={imgFrame3} alt="verified" className="h-3 w-3" />{" "}
                  Verified Merchant
                </span>
                <button className="ml-2 text-xs font-medium text-sky-600">
                  View Profile
                </button>
              </div>
            </div>
          </div>
          {/* Related RFQ */}
          <div className="mb-6 rounded-lg bg-gray-50 p-4">
            <div className="mb-1 text-sm font-medium text-gray-800">
              Related RFQ
            </div>
            <div className="text-sm text-gray-600">
              Camera Equipment for Short Film - Downtown Vancouver
            </div>
            <div className="mt-1 text-xs text-gray-500">Dec 15-18, 2024</div>
          </div>
          {/* Rating */}
          <div className="mb-4">
            <label className="mb-2 block text-sm font-semibold text-gray-800">
              Rating <span className="text-red-500">*</span>
            </label>
            <div className="flex items-center gap-2">
              <button>
                <img src={imgFrame5} alt="star" className="h-8 w-8" />
              </button>
              <button>
                <img src={imgFrame5} alt="star" className="h-8 w-8" />
              </button>
              <button>
                <img src={imgFrame5} alt="star" className="h-8 w-8" />
              </button>
              <button>
                <img src={imgFrame5} alt="star" className="h-8 w-8" />
              </button>
              <button>
                <img src={imgFrame5} alt="star" className="h-8 w-8" />
              </button>
              <span className="ml-4 text-sm text-gray-600">
                Click to rate your experience
              </span>
            </div>
          </div>
          {/* Review Textarea */}
          <div className="mb-4">
            <label className="mb-2 block text-sm font-semibold text-gray-800">
              Your Review <span className="text-red-500">*</span>
            </label>
            <textarea
              className="w-full rounded-lg border border-gray-300 px-3 py-2 text-base text-gray-900"
              rows={5}
              placeholder="Describe your experience working with this merchant. Was the equipment in good condition? Was communication clear? Would you recommend them to other filmmakers?"
            />
            <div className="mt-1 flex justify-between text-xs text-gray-500">
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
            <label htmlFor="workAgain" className="text-sm text-gray-800">
              I would work with this merchant again
            </label>
          </div>
          {/* Action Buttons */}
          <div className="flex gap-4">
            <button className="flex-1 rounded-lg border border-gray-300 py-3 font-medium text-gray-700">
              Cancel
            </button>
            <button className="flex-1 rounded-lg bg-sky-600 py-3 font-medium text-white">
              Submit Review
            </button>
          </div>
        </div>
      </main>
      <CommonFooter />
    </div>
  )
}

export default AddNewReview

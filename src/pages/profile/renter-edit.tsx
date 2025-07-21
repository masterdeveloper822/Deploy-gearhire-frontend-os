import { CommonFooter } from "@/components/layout/footer/common"
import { RenterHeader } from "@/components/layout/header/renter-header"
import React from "react"

// Image and SVG asset URLs from Figma export
const imgImg =
  "http://localhost:3845/assets/f578f9c2a181ef669150341163e63e6e9da01878.png"
const imgFrame =
  "http://localhost:3845/assets/ed4e1169b638e2e838350960320b53c878e45615.svg"
const imgFrame1 =
  "http://localhost:3845/assets/9861a0b6e8bb9b630982f192343e0944f05f6199.svg"
const imgFrame2 =
  "http://localhost:3845/assets/1efdeed862e90b5b080da5ccaa63bb5c3a6cf0bc.svg"
const imgFrame3 =
  "http://localhost:3845/assets/d5e1f2acabf7a13aa529e64eff9ec2319c679f6c.svg"
const imgFrame4 =
  "http://localhost:3845/assets/f3278cb2571441380b89c6688a804fea74ac5536.svg"
const imgFrame5 =
  "http://localhost:3845/assets/f203e9641a38ffd89d1d80a2d87f354391e772a4.svg"
const imgFrame6 =
  "http://localhost:3845/assets/5f0e7e2677feea934e02e9383f26af2ca7cb66d5.svg"
const imgFrame7 =
  "http://localhost:3845/assets/2d976e6dcbb12fab46b770b0673bc49f3d3e472e.svg"
const imgFrame8 =
  "http://localhost:3845/assets/b669991a58545bf6d7a81cc0467a73508daa4ffb.svg"

const EditRenterProfile: React.FC = () => {
  return (
    <div className="min-h-screen bg-gray-50">
      <RenterHeader />
      <main className="mx-auto max-w-2xl px-4 py-8">
        <h1 className="mb-2 text-3xl font-bold text-gray-800">
          Edit Your Profile
        </h1>
        <p className="mb-8 text-base text-gray-600">
          Update your information to help merchants get to know you
        </p>
        <div className="mb-8 rounded-lg bg-white p-6 shadow">
          {/* Profile Photo */}
          <div className="mb-8 flex items-center gap-6">
            <div className="relative">
              <img
                src={imgImg}
                alt="profile"
                className="h-24 w-24 rounded-full border-4 border-gray-200 object-cover"
              />
              <button className="left-18 absolute -top-2 flex h-8 w-8 items-center justify-center rounded-full bg-red-500">
                <img src={imgFrame3} alt="remove" className="h-3 w-3" />
              </button>
            </div>
            <div>
              <button className="mb-2 flex items-center gap-2 rounded-lg border border-sky-600 px-6 py-2 font-medium text-sky-600">
                <img src={imgFrame4} alt="change" className="h-4 w-4" /> Change
                Photo
              </button>
              <div className="text-xs text-gray-500">JPG, PNG up to 5MB</div>
            </div>
          </div>
          {/* Display Name */}
          <div className="mb-6">
            <label className="mb-2 block text-sm font-semibold text-gray-800">
              Display Name <span className="text-red-500">*</span>
            </label>
            <input
              className="w-full rounded-lg border border-gray-300 px-3 py-2 text-base text-gray-900"
              defaultValue="Sarah Chen"
            />
          </div>
          {/* Location */}
          <div className="mb-6">
            <label className="mb-2 block text-sm font-semibold text-gray-800">
              Location
            </label>
            <input
              className="w-full rounded-lg border border-gray-300 px-3 py-2 text-base text-gray-900"
              defaultValue="Vancouver, BC"
            />
          </div>
          {/* About */}
          <div className="mb-6">
            <label className="mb-2 block text-sm font-semibold text-gray-800">
              About
            </label>
            <textarea
              className="w-full rounded-lg border border-gray-300 px-3 py-2 text-base text-gray-900"
              rows={4}
              defaultValue={
                "Independent filmmaker and director specializing in documentary and commercial work. Always looking for reliable equipment partners for my productions."
              }
            />
            <div className="mt-1 text-xs text-gray-500">
              Help merchants understand your background and needs
            </div>
          </div>
          {/* Website */}
          <div className="mb-6">
            <label className="mb-2 block text-sm font-semibold text-gray-800">
              Website or Portfolio
            </label>
            <input
              className="w-full rounded-lg border border-gray-300 px-3 py-2 text-base text-gray-900"
              defaultValue="https://sarahchenfilms.com"
            />
          </div>
          {/* Social Media Links */}
          <div className="mb-8">
            <h3 className="mb-4 text-lg font-semibold text-gray-800">
              Social Media Links
            </h3>
            <div className="space-y-4">
              <div className="flex items-center gap-3">
                <span className="flex h-10 w-10 items-center justify-center rounded-lg bg-gradient-to-r from-purple-500 to-pink-500">
                  <img src={imgFrame5} alt="instagram" className="h-4 w-4" />
                </span>
                <input
                  className="flex-1 rounded-lg border border-gray-300 px-3 py-2 text-base text-gray-900"
                  defaultValue="https://instagram.com/sarahchenfilms"
                />
              </div>
              <div className="flex items-center gap-3">
                <span className="flex h-10 w-10 items-center justify-center rounded-lg bg-blue-600">
                  <img src={imgFrame6} alt="linkedin" className="h-4 w-4" />
                </span>
                <input
                  className="flex-1 rounded-lg border border-gray-300 px-3 py-2 text-base text-gray-900"
                  defaultValue="https://linkedin.com/in/yourusername"
                />
              </div>
              <div className="flex items-center gap-3">
                <span className="flex h-10 w-10 items-center justify-center rounded-lg bg-blue-500">
                  <img src={imgFrame7} alt="vimeo" className="h-4 w-4" />
                </span>
                <input
                  className="flex-1 rounded-lg border border-gray-300 px-3 py-2 text-base text-gray-900"
                  defaultValue="https://vimeo.com/sarahchenfilms"
                />
              </div>
              <div className="flex items-center gap-3">
                <span className="flex h-10 w-10 items-center justify-center rounded-lg bg-red-600">
                  <img src={imgFrame8} alt="youtube" className="h-4 w-4" />
                </span>
                <input
                  className="flex-1 rounded-lg border border-gray-300 px-3 py-2 text-base text-gray-900"
                  defaultValue="https://youtube.com/c/yourchannel"
                />
              </div>
            </div>
          </div>
          {/* Action Buttons */}
          <div className="flex gap-4">
            <button className="flex-1 rounded-lg border border-gray-300 py-3 font-medium text-gray-700">
              Cancel
            </button>
            <button className="flex-1 rounded-lg bg-sky-600 py-3 font-medium text-white">
              Save Changes
            </button>
          </div>
        </div>
      </main>
      <CommonFooter />
    </div>
  )
}

export { EditRenterProfile }

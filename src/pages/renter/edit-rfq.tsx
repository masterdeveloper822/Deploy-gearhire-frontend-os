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
  "http://localhost:3845/assets/97be41678977bd78c837da782e70fb9a468cf77a.svg"
const imgFrame4 =
  "http://localhost:3845/assets/77a813c36a890de9f20510714d9fa43383f196a2.svg"
const imgFrame5 =
  "http://localhost:3845/assets/268af550e6b73fb848646cc032f043d7b305fd5a.svg"
const imgFrame6 =
  "http://localhost:3845/assets/f1ea8fc8b4f702114fa9eca74d6a4134c117f1c0.svg"
const imgFrame7 =
  "http://localhost:3845/assets/14bb3f29ea205e726313fb14b430d85d23064db9.svg"
const imgFrame8 =
  "http://localhost:3845/assets/bab2b2b45b0479a7fb33c7d9aee5f00ba59ec1e5.svg"
const imgFrame9 =
  "http://localhost:3845/assets/891dec6e8268492399d657c9dfe1e20caf9c3507.svg"
const imgFrame10 =
  "http://localhost:3845/assets/56622b71fb3795a6424c358eb5ac463fcefbe217.svg"
const imgFrame11 =
  "http://localhost:3845/assets/9421ac7b9341d210b910662c4fe7d9f28bf56477.svg"
const imgFrame12 =
  "http://localhost:3845/assets/0c635fa71a5b7ef77bef381a1d4f6c035d587f66.svg"
const imgFrame13 =
  "http://localhost:3845/assets/eb6cba590cab38215da137ee00caa9eae1e3e6b4.svg"
const imgFrame14 =
  "http://localhost:3845/assets/04d098c094ebbc24fc3adc3f388e17e24437be7d.svg"
const imgFrame15 =
  "http://localhost:3845/assets/237036d88812ae3ad3eb50443b640b748eb276e0.svg"
const imgFrame16 =
  "http://localhost:3845/assets/3fb4b81e046289a29f1daa8f4528d66d37ad2c91.svg"
const imgFrame17 =
  "http://localhost:3845/assets/60e2e0178ba9af28a95777979db6cbddaebda36c.svg"

const EditRfq = () => {
  return (
    <div className="relative min-h-screen w-full bg-gray-50">
      <RenterHeader />
      {/* Main Content */}
      <div className="relative m-auto">
        {/* Title and Note */}
        <div className="mb-8">
          <div className="mb-2 flex items-center">
            <button className="mr-4 flex h-6 w-6 items-center justify-center">
              <img src={imgFrame3} alt="back" className="h-4 w-4" />
            </button>
            <div>
              <h1 className="text-3xl font-bold text-gray-800">Edit RFQ</h1>
              <p className="text-base text-gray-600">
                Update your equipment request details
              </p>
            </div>
          </div>
          <div className="flex items-center gap-3 rounded-lg border border-blue-200 bg-blue-50 p-4">
            <img src={imgFrame4} alt="info" className="h-4 w-4" />
            <span className="text-sm text-blue-800">
              <b>Note:</b> Changes to your RFQ will be visible to merchants
              immediately after saving. Only RFQs with "Open" status can be
              edited.
            </span>
          </div>
        </div>
        {/* Form Sections */}
        <form className="space-y-8">
          {/* Project Information */}
          <section className="rounded-lg bg-white p-6 shadow">
            <div className="mb-4 flex items-center">
              <img src={imgFrame5} alt="project" className="mr-2 h-4 w-4" />
              <h2 className="text-lg font-semibold text-gray-800">
                Project Information
              </h2>
            </div>
            <div className="mb-4">
              <label className="mb-1 block text-sm font-medium text-gray-700">
                RFQ Title (Optional)
              </label>
              <input
                type="text"
                className="w-full rounded-lg border border-gray-300 px-3 py-2 text-base text-gray-900"
                defaultValue="Camera Package for Short Film"
              />
            </div>
            <div>
              <label className="mb-1 block text-sm font-medium text-gray-700">
                Description
              </label>
              <textarea
                className="w-full rounded-lg border border-gray-300 px-3 py-2 text-base text-gray-900"
                rows={4}
                defaultValue={
                  "Looking for a complete camera package for a 5-day short film shoot. Need a professional cinema\ncamera with various lens options, stabilization equipment, and basic lighting setup. The project is a\ndrama with both indoor and outdoor scenes."
                }
              />
            </div>
          </section>
          {/* Location & Dates */}
          <section className="rounded-lg bg-white p-6 shadow">
            <div className="mb-4 flex items-center">
              <img src={imgFrame6} alt="location" className="mr-2 h-4 w-4" />
              <h2 className="text-lg font-semibold text-gray-800">
                Location & Dates
              </h2>
            </div>
            <div className="mb-4">
              <label className="mb-1 block text-sm font-medium text-gray-700">
                Pickup Location
              </label>
              <input
                type="text"
                className="w-full rounded-lg border border-gray-300 px-3 py-2 text-base text-gray-900"
                defaultValue="London, UK"
              />
            </div>
            <div className="flex gap-4">
              <div className="flex-1">
                <label className="mb-1 block text-sm font-medium text-gray-700">
                  Rental Start Date
                </label>
                <input
                  type="date"
                  className="w-full rounded-lg border border-gray-300 px-3 py-2 text-base text-gray-900"
                  defaultValue="2024-12-15"
                />
              </div>
              <div className="flex-1">
                <label className="mb-1 block text-sm font-medium text-gray-700">
                  Rental End Date
                </label>
                <input
                  type="date"
                  className="w-full rounded-lg border border-gray-300 px-3 py-2 text-base text-gray-900"
                  defaultValue="2024-12-20"
                />
              </div>
            </div>
          </section>
          {/* Equipment Needs */}
          <section className="rounded-lg bg-white p-6 shadow">
            <div className="mb-4 flex items-center">
              <img src={imgFrame8} alt="equipment" className="mr-2 h-5 w-5" />
              <h2 className="text-lg font-semibold text-gray-800">
                Equipment Needs
              </h2>
            </div>
            <div className="mb-4 grid grid-cols-3 gap-4">
              <label className="flex items-center gap-2 text-sm text-gray-700">
                <input
                  type="checkbox"
                  className="rounded border-gray-300"
                  defaultChecked
                />{" "}
                Camera
              </label>
              <label className="flex items-center gap-2 text-sm text-gray-700">
                <input
                  type="checkbox"
                  className="rounded border-gray-300"
                  defaultChecked
                />{" "}
                Lighting
              </label>
              <label className="flex items-center gap-2 text-sm text-gray-700">
                <input
                  type="checkbox"
                  className="rounded border-gray-300"
                  defaultChecked
                />{" "}
                Audio
              </label>
              <label className="flex items-center gap-2 text-sm text-gray-700">
                <input type="checkbox" className="rounded border-gray-300" />{" "}
                Grip
              </label>
              <label className="flex items-center gap-2 text-sm text-gray-700">
                <input type="checkbox" className="rounded border-gray-300" />{" "}
                Power
              </label>
              <label className="flex items-center gap-2 text-sm text-gray-700">
                <input type="checkbox" className="rounded border-gray-300" />{" "}
                Accessories
              </label>
            </div>
            <div>
              <label className="mb-1 block text-sm font-medium text-gray-700">
                Optional Notes per Category
              </label>
              <textarea
                className="w-full rounded-lg border border-gray-300 px-3 py-2 text-base text-gray-900"
                rows={3}
                defaultValue={
                  "Camera: Need 4K capability with cinema lens mount. Lighting: Basic 3-point lighting setup preferred.\nAudio: Wireless mic system for dialogue recording."
                }
              />
            </div>
          </section>
          {/* Attachments */}
          <section className="rounded-lg bg-white p-6 shadow">
            <div className="mb-4 flex items-center">
              <img
                src={imgFrame10}
                alt="attachments"
                className="mr-2 h-4 w-4"
              />
              <h2 className="text-lg font-semibold text-gray-800">
                Attachments
              </h2>
            </div>
            <div className="mb-4 space-y-2">
              <div className="flex items-center rounded-lg bg-gray-50 p-3">
                <img src={imgFrame11} alt="pdf" className="mr-2 h-4 w-4" />
                <span className="flex-1 text-sm text-gray-700">
                  project-details.pdf
                </span>
                <span className="mr-2 text-xs text-gray-500">(2.1 MB)</span>
                <button>
                  <img src={imgFrame12} alt="remove" className="h-3 w-3" />
                </button>
              </div>
              <div className="flex items-center rounded-lg bg-gray-50 p-3">
                <img src={imgFrame13} alt="jpg" className="mr-2 h-4 w-3" />
                <span className="flex-1 text-sm text-gray-700">
                  location-reference.jpg
                </span>
                <span className="mr-2 text-xs text-gray-500">(1.8 MB)</span>
                <button>
                  <img src={imgFrame12} alt="remove" className="h-3 w-3" />
                </button>
              </div>
            </div>
            <div className="mt-4 flex flex-col items-center justify-center rounded-lg border-2 border-dashed border-gray-300 py-8">
              <img src={imgFrame14} alt="upload" className="mb-2 h-8 w-8" />
              <span className="text-sm text-gray-600">
                Drag and drop files here, or click to browse
              </span>
              <span className="text-xs text-gray-500">
                PDF, JPG, DOC files up to 5MB each (3 files max)
              </span>
              <button className="mt-4 rounded-lg bg-gray-100 px-4 py-2 font-medium text-gray-700">
                Choose Files
              </button>
            </div>
          </section>
          {/* RFQ Settings */}
          <section className="rounded-lg bg-white p-6 shadow">
            <div className="mb-4 flex items-center">
              <img src={imgFrame15} alt="settings" className="mr-2 h-4 w-4" />
              <h2 className="text-lg font-semibold text-gray-800">
                RFQ Settings
              </h2>
            </div>
            <div className="mb-4 flex gap-4">
              <div className="flex-1">
                <label className="mb-1 block text-sm font-medium text-gray-700">
                  Expiry Date
                </label>
                <input
                  type="date"
                  className="w-full rounded-lg border border-gray-300 px-3 py-2 text-base text-gray-900"
                  defaultValue="2025-01-05"
                />
                <span className="text-xs text-gray-500">
                  Merchants can submit quotes until this date
                </span>
              </div>
              <div className="flex-1">
                <label className="mb-1 block text-sm font-medium text-gray-700">
                  Status
                </label>
                <select className="w-full rounded-lg border border-gray-300 px-3 py-2 text-base text-gray-900">
                  <option>Open</option>
                  <option>Closed</option>
                </select>
                <span className="text-xs text-gray-500">
                  Only open RFQs accept new quotes
                </span>
              </div>
            </div>
          </section>
          {/* Action Buttons */}
          <div className="mt-8 flex gap-4">
            <button
              type="submit"
              className="flex flex-1 items-center justify-center gap-2 rounded-lg bg-sky-600 py-3 font-medium text-white"
            >
              <img src={imgFrame17} alt="save" className="h-4 w-4" /> Save
              Changes
            </button>
            <button
              type="button"
              className="flex-1 rounded-lg border border-gray-300 py-3 font-medium text-gray-700"
            >
              Cancel
            </button>
          </div>
        </form>
      </div>
      <CommonFooter />
    </div>
  )
}

export default EditRfq

import { CommonFooter } from "@/components/layout/footer/common"
import { AuthHeader } from "@/components/layout/header/auth-header"
import { faCamera, faXmark } from "@fortawesome/free-solid-svg-icons"
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"
import React from "react"
import woman3 from "@/assets/images/avatars/woman3.png"
import { Button } from "@/components/ui/button"
import { Typography } from "@/components/ui/typography"
import { Separator } from "@/components/ui/separator"
import { faInstagram, faLinkedin, faVimeo, faYoutube } from "@fortawesome/free-brands-svg-icons"
import { BackArrowIcon } from "@/components/ui/icon"
import { useNavigate } from "react-router-dom"

const EditRenterProfile: React.FC = () => {
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
          Edit Your Profile
        </h1>
          <p className="mb-6 text-sm sm:text-base text-gray-600">
            Update your information to help merchants get to know you
          </p>
          </div>
        </div>
        <div className="mb-6 rounded-lg bg-white p-4 sm:p-6 shadow">
          {/* Profile Photo */}
          <div className="mb-8 flex flex-col sm:flex-row items-center gap-4 sm:gap-6">
            <div className="relative">
              <img
                src={woman3}
                alt="profile"
                className="h-20 w-20 sm:h-24 sm:w-24 rounded-full border-4 border-gray-200 object-cover"
              />
              <button className="right-[-5px] absolute -top-2 flex h-8 w-8 items-center justify-center rounded-full bg-red-500">
                <FontAwesomeIcon icon={faXmark} className="text-white"/>
              </button>
            </div>
            <div className="text-center sm:text-left">
              <Button variant="white_sky" className="mb-2 flex items-center gap-2 text-sm sm:text-base rounded-lg border border-sky-600 px-4 sm:px-6 py-2 font-medium text-sky-600">
                <FontAwesomeIcon icon={faCamera} className="h-4 w-4" /> Change
                Photo
              </Button>
              <div className="text-xs sm:text-sm text-gray-500">JPG, PNG up to 5MB</div>
            </div>
          </div>
          <div className="mb-4">
            <Typography variant="cardSubTitle" className="mb-2">Profile Information</Typography>
            <Separator className="mt-2" />
          </div>
          {/* Display Name */}
          <div className="mb-6">
            <label className="mb-2 block text-xs sm:text-sm font-semibold text-gray-800">
              Display Name <span className="text-red-500">*</span>
            </label>
            <input
              className="w-full rounded-lg border border-gray-300 px-3 py-2 text-sm sm:text-base text-gray-900"
              defaultValue="Sarah Chen"
            />
          </div>
          {/* Location */}
          <div className="mb-6">
            <label className="mb-2 block text-xs sm:text-sm font-semibold text-gray-800">
              Location
            </label>
            <input
              className="w-full rounded-lg border border-gray-300 px-3 py-2 text-sm sm:text-base text-gray-900"
              defaultValue="Vancouver, BC"
            />
          </div>
          {/* About */}
          <div className="mb-6">
            <label className="mb-2 block text-xs sm:text-sm font-semibold text-gray-800">
              About
            </label>
            <textarea
              className="w-full rounded-lg border border-gray-300 px-3 py-2 text-sm sm:text-base text-gray-900 resize-none"
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
            <label className="mb-2 block text-xs sm:text-sm font-semibold text-gray-800">
              Website or Portfolio
            </label>
            <input
              className="w-full rounded-lg border border-gray-300 px-3 py-2 text-sm sm:text-base text-gray-900"
              defaultValue="https://sarahchenfilms.com"
            />
          </div>
          {/* Social Media Links */}
          <div className="mb-8">
            <h3 className="mb-4 text-base sm:text-lg font-semibold text-gray-800">
              Social Media Links
            </h3>
            <div className="space-y-4">
              <div className="flex flex-col sm:flex-row items-stretch xs:items-center gap-2 xs:gap-3">
                <span className="flex h-8 w-8 sm:h-10 sm:w-10 items-center justify-center rounded-lg bg-gradient-to-r from-purple-500 to-pink-500">
                  <FontAwesomeIcon icon={faInstagram} className="text-white h-4 w-4" />
                </span>
                <input
                  className="flex-1 rounded-lg border border-gray-300 px-3 py-2 text-sm sm:text-base text-gray-900"
                  defaultValue="https://instagram.com/sarahchenfilms"
                />
              </div>
              <div className="flex flex-col sm:flex-row items-stretch xs:items-center gap-2 xs:gap-3">
                <span className="flex h-8 w-8 sm:h-10 sm:w-10 items-center justify-center rounded-lg bg-blue-600">
                  <FontAwesomeIcon icon={faLinkedin} className="h-4 w-4 text-white" />
                </span>
                <input
                  className="flex-1 rounded-lg border border-gray-300 px-3 py-2 text-sm sm:text-base text-gray-900"
                  defaultValue="https://linkedin.com/in/yourusername"
                />
              </div>
              <div className="flex flex-col sm:flex-row items-stretch xs:items-center gap-2 xs:gap-3">
                <span className="flex h-8 w-8 sm:h-10 sm:w-10 items-center justify-center rounded-lg bg-blue-500">
                  <FontAwesomeIcon icon={faVimeo} className="text-white h-4 w-4" />
                </span>
                <input
                  className="flex-1 rounded-lg border border-gray-300 px-3 py-2 text-sm sm:text-base text-gray-900"
                  defaultValue="https://vimeo.com/sarahchenfilms"
                />
              </div>
              <div className="flex flex-col sm:flex-row items-stretch xs:items-center gap-2 xs:gap-3">
                <span className="flex h-8 w-8 sm:h-10 sm:w-10 items-center justify-center rounded-lg bg-red-600">
                  <FontAwesomeIcon icon={faYoutube} className="text-white h-4 w-4" />
                </span>
                <input
                  className="flex-1 rounded-lg border border-gray-300 px-3 py-2 text-sm sm:text-base text-gray-900"
                  defaultValue="https://youtube.com/c/yourchannel"
                />
              </div>
            </div>
          </div>
          {/* Action Buttons */}
          <div className="flex flex-col sm:flex-row gap-3 sm:gap-4">
            <Button variant="ghost" className="flex-1 shadow text-sm sm:text-base rounded-lg border border-gray-300 py-2 sm:py-3">
              Cancel
            </Button>
            <Button variant="tertiary" className="flex-1 shadow text-sm sm:text-base rounded-lg py-2 sm:py-3">
              Save Changes
            </Button>
          </div>
        </div>
      </main>
      <CommonFooter />
    </div>
  )
}

export { EditRenterProfile }

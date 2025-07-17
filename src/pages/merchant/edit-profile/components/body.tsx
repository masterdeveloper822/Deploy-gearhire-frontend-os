import React, { useState } from "react"
import { Link } from "react-router-dom"

import arrowIcon from "@/assets/images/ui/icons/backArrow.svg"
import merchantProfileDefaultIcon from "@/assets/images/ui/icons/merchantProfileDefault.svg"
import uploadPhotoIcon from "@/assets/images/ui/icons/uploadPhoto.svg"
import instagramSmallIcon from "@/assets/images/ui/icons/social/instagramSmall.svg"
import linkedinSmallIcon from "@/assets/images/ui/icons/social/linkedinSmall.svg"
import saveButtonIcon from "@/assets/images/ui/icons/file-manage/saveButton.svg"
import eyeIcon from "@/assets/images/ui/icons/eye.svg"

import { BusinessNameInput } from "@/components/ui/input"
import { AboutTextarea } from "@/components/ui/textarea"
import { Checkbox } from "@/components/ui/checkbox"
import FormLabel from "@/components/ui/FormLabel"
import FormSection from "@/components/ui/FormSection"
import FormGroup from "@/components/ui/FormGroup"
import { Typography } from "@/components/ui/typography"
import { SaveChangesButton } from "@/components/ui/button"
import { PreviewProfileButton } from "@/components/ui/button"
import PfpUpload from "@/components/pfp-upload"

const categoriesList = [
  "Cameras",
  "Lighting",
  "Audio",
  "Grip",
  "Lenses",
  "Stabilizers",
  "Drones",
  "Accessories",
]

export default function Body() {
  const [contact, setContact] = useState({
    businessName: "",
    email: "",
    location: "",
    website: "",
  })
  const [about, setAbout] = useState("")
  const [categories, setCategories] = useState<string[]>([])
  const [social, setSocial] = useState({ instagram: "", linkedin: "" })

  return (
    <div className="mt-8 flex justify-center">
      <div className="w-full max-w-[896px] px-4 sm:px-6 md:px-4">
        {/* Title */}
        <div className="mb-8">
          <div className="mb-[15.12px] flex items-center gap-2">
            <Link
              className="flex h-8 w-8 items-center justify-center bg-transparent p-0 shadow-none"
              onClick={() => window.history.back()}
            >
              <img src={arrowIcon} alt="Back" className="h-[18px] w-4" />
            </Link>
            <Typography variant="h2">Edit Merchant Profile</Typography>
          </div>
          <Typography variant="body" className="text-gray-600">
            Complete your profile to get verified and start connecting with
            renters.
          </Typography>
        </div>
        {/* Profile Photo */}
        <PfpUpload
          placeholderSrc={merchantProfileDefaultIcon}
          placeholderAlt="Profile Placeholder"
          uploadIconSrc={uploadPhotoIcon}
        >
          Upload Photo
        </PfpUpload>
        {/* Contact Information */}
        <FormSection>
          <div className="mb-6">
            <Typography variant="cardSubTitle" className="mb-6 text-gray-800">
              Contact Information
            </Typography>
          </div>
          <div className="flex flex-col gap-4 md:flex-row md:flex-wrap md:gap-6">
            <FormGroup>
              <FormLabel>Business/Display Name *</FormLabel>
              <BusinessNameInput
                value={contact.businessName}
                onChange={(e) =>
                  setContact((c) => ({ ...c, businessName: e.target.value }))
                }
                className="h-[50px]"
              />
            </FormGroup>
            <FormGroup>
              <FormLabel>Contact Email *</FormLabel>
              <BusinessNameInput
                value={contact.email}
                onChange={(e) =>
                  setContact((c) => ({ ...c, email: e.target.value }))
                }
              />
            </FormGroup>
            <FormGroup>
              <FormLabel>Location *</FormLabel>
              <BusinessNameInput
                value={contact.location}
                onChange={(e) =>
                  setContact((c) => ({ ...c, location: e.target.value }))
                }
                placeholder="City, Region"
              />
            </FormGroup>
            <FormGroup>
              <FormLabel>Website URL</FormLabel>
              <BusinessNameInput
                value={contact.website}
                onChange={(e) =>
                  setContact((c) => ({ ...c, website: e.target.value }))
                }
                placeholder="https://example.com"
              />
            </FormGroup>
          </div>
        </FormSection>
        {/* About Your Business */}
        <FormSection>
          <h2 className="mb-6 text-lg font-semibold text-gray-800">
            About Your Business
          </h2>
          <FormLabel>Short Bio / About Section *</FormLabel>
          <AboutTextarea
            value={about}
            onChange={(e) => setAbout(e.target.value)}
            maxLength={500}
            placeholder="Tell renters about your business, experience, and what sets you apart..."
          />
          <div className="mt-3 text-sm text-gray-500">
            Maximum 500 characters
          </div>
        </FormSection>
        {/* Equipment Categories */}
        <FormSection>
          <h2 className="mb-6 text-lg font-semibold text-gray-800">
            Equipment Categories *
          </h2>
          <p className="mb-4 text-sm text-gray-600">
            Select all categories that apply to your inventory
          </p>
          <div className="grid grid-cols-1 gap-4 sm:grid-cols-2 md:grid-cols-4">
            {categoriesList.map((cat) => (
              <label
                key={cat}
                className="flex cursor-pointer items-center gap-2 rounded-lg border border-gray-200 bg-white px-4 py-3"
              >
                <Checkbox
                  checked={categories.includes(cat)}
                  onCheckedChange={() =>
                    setCategories((selected) =>
                      selected.includes(cat)
                        ? selected.filter((c) => c !== cat)
                        : [...selected, cat],
                    )
                  }
                />
                <span className="text-sm font-medium text-black">{cat}</span>
              </label>
            ))}
          </div>
        </FormSection>
        {/* Social Media Links */}
        <FormSection>
          <h2 className="mb-6 text-lg font-semibold text-gray-800">
            Social Media Links
          </h2>
          <p className="mb-4 text-sm text-gray-600">
            Optional: Add your social profiles to build trust
          </p>
          <div className="flex flex-col gap-4 sm:flex-row sm:gap-6">
            <FormGroup>
              <FormLabel className="flex items-center gap-2">
                <img
                  src={instagramSmallIcon}
                  alt="Instagram"
                  className="h-3.5 w-3"
                />{" "}
                Instagram
              </FormLabel>
              <BusinessNameInput
                value={social.instagram}
                onChange={(e) =>
                  setSocial((s) => ({ ...s, instagram: e.target.value }))
                }
                placeholder="https://instagram.com/username"
              />
            </FormGroup>
            <FormGroup>
              <FormLabel className="flex items-center gap-2">
                <img
                  src={linkedinSmallIcon}
                  alt="LinkedIn"
                  className="h-3.5 w-3"
                />{" "}
                LinkedIn
              </FormLabel>
              <BusinessNameInput
                value={social.linkedin}
                onChange={(e) =>
                  setSocial((s) => ({ ...s, linkedin: e.target.value }))
                }
                placeholder="https://linkedin.com/in/username"
              />
            </FormGroup>
          </div>
        </FormSection>
        {/* Action Buttons */}
        <div className="mb-12 flex flex-col items-center gap-4 sm:flex-row">
          <SaveChangesButton iconSrc={saveButtonIcon}>
            <Link to="/merchant-dashboard">Save Changes</Link>
          </SaveChangesButton>
          <PreviewProfileButton iconSrc={eyeIcon}>
            <Link to="/">Preview My Public Profile</Link>
          </PreviewProfileButton>
        </div>
      </div>
    </div>
  )
}

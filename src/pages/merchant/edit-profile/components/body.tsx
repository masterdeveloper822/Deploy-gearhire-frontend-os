import React, { useState } from "react";
import { Link } from "react-router-dom";

import arrowIcon from "@/assets/images/ui/icons/backArrow.svg";
import merchantProfileDefaultIcon from "@/assets/images/ui/icons/merchantProfileDefault.svg";
import uploadPhotoIcon from "@/assets/images/ui/icons/uploadPhoto.svg";
import instagramSmallIcon from "@/assets/images/ui/icons/instagramSmall.svg";
import linkedinSmallIcon from "@/assets/images/ui/icons/linkedinSmall.svg";
import saveButtonIcon from "@/assets/images/ui/icons/saveButton.svg";
import eyeIcon from "@/assets/images/ui/icons/eye.svg";

import { ProfilePhotoPlaceholder } from "@/components/ui/card";
import { BusinessNameInput } from "@/components/ui/input";
import { AboutTextarea } from "@/components/ui/textarea";
import { UploadButton } from "@/components/ui/button";
import { Checkbox } from "@/components/ui/checkbox";
import FormLabel from "@/components/ui/FormLabel";
import FormSection from "@/components/ui/FormSection";
import FormGroup from "@/components/ui/FormGroup";
import { Typography } from "@/components/ui/typography";
import { SaveChangesButton } from "@/components/ui/button";
import { PreviewProfileButton } from "@/components/ui/button";

const categoriesList = [
  "Cameras",
  "Lighting",
  "Audio",
  "Grip",
  "Lenses",
  "Stabilizers",
  "Drones",
  "Accessories",
];

export default function Body() {
  const [contact, setContact] = useState({
    businessName: "",
    email: "",
    location: "",
    website: "",
  });
  const [about, setAbout] = useState("");
  const [categories, setCategories] = useState<string[]>([]);
  const [social, setSocial] = useState({ instagram: "", linkedin: "" });

  return (
    <div className="flex justify-center mt-8">
      <div className="w-full max-w-[896px] px-4 sm:px-6 md:px-0">
        {/* Title */}
        <div className="mb-8">
          <div className="flex items-center gap-2 mb-[15.12px]">
            <Link
              className="w-8 h-8 flex items-center justify-center p-0 bg-transparent shadow-none"
              onClick={() => window.history.back()}
            >
              <img src={arrowIcon} alt="Back" className="w-4 h-[18px]" />
            </Link>
            <Typography variant="h2">Edit Merchant Profile</Typography>
          </div>
          <Typography variant="body" className="text-gray-600">
            Complete your profile to get verified and start connecting with
            renters.
          </Typography>
        </div>
        {/* Profile Photo */}
        <FormSection>
          <div className="mb-4">
            <Typography variant="cardSubTitle" className="text-gray-800">
              Profile Photo
            </Typography>
          </div>
          <div className="flex flex-col sm:flex-row items-center gap-4 sm:gap-8">
            <ProfilePhotoPlaceholder
              src={merchantProfileDefaultIcon}
              alt="Profile Placeholder"
            />
            <div>
              <UploadButton iconSrc={uploadPhotoIcon}>
                Upload Photo
              </UploadButton>
              <div className="text-gray-500 text-sm">JPG, PNG up to 5MB</div>
            </div>
          </div>
        </FormSection>
        {/* Contact Information */}
        <FormSection>
          <div className="mb-6">
            <Typography variant="cardSubTitle" className="text-gray-800 mb-6">
              Contact Information
            </Typography>
          </div>
          <div className="flex flex-col md:flex-row md:flex-wrap gap-4 md:gap-6">
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
          <h2 className="text-lg font-semibold text-gray-800 mb-6">
            About Your Business
          </h2>
          <FormLabel>Short Bio / About Section *</FormLabel>
          <AboutTextarea
            value={about}
            onChange={(e) => setAbout(e.target.value)}
            maxLength={500}
            placeholder="Tell renters about your business, experience, and what sets you apart..."
          />
          <div className="text-gray-500 text-sm mt-3">
            Maximum 500 characters
          </div>
        </FormSection>
        {/* Equipment Categories */}
        <FormSection>
          <h2 className="text-lg font-semibold text-gray-800 mb-6">
            Equipment Categories *
          </h2>
          <p className="text-gray-600 text-sm mb-4">
            Select all categories that apply to your inventory
          </p>
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-4">
            {categoriesList.map((cat) => (
              <label
                key={cat}
                className="flex items-center gap-2 bg-white border border-gray-200 rounded-lg px-4 py-3 cursor-pointer"
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
          <h2 className="text-lg font-semibold text-gray-800 mb-6">
            Social Media Links
          </h2>
          <p className="text-gray-600 text-sm mb-4">
            Optional: Add your social profiles to build trust
          </p>
          <div className="flex flex-col sm:flex-row gap-4 sm:gap-6">
            <FormGroup>
              <FormLabel className="flex items-center gap-2">
                <img
                  src={instagramSmallIcon}
                  alt="Instagram"
                  className="w-3 h-3.5"
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
                  className="w-3 h-3.5"
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
        <div className="flex flex-col md:flex-row gap-4 mb-12">
          <SaveChangesButton iconSrc={saveButtonIcon}>
            <Link to="/">Save Changes</Link>
          </SaveChangesButton>
          <PreviewProfileButton iconSrc={eyeIcon}>
            <Link to="/">Preview My Public Profile</Link>
          </PreviewProfileButton>
        </div>
      </div>
    </div>
  );
}

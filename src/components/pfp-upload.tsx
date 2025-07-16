import React from "react"
import FormSection from "@/components/ui/FormSection"
import { Typography } from "@/components/ui/typography"
import { ProfilePhotoPlaceholder } from "./ui/card"
import { UploadButton } from "./ui/button"

import uploadPhotoIcon from "@/assets/images/ui/icons/uploadPhoto.svg"

interface PfpUploadProps {
  placeholderSrc: string
  placeholderAlt?: string
  uploadIconSrc: string
  onUploadClick?: () => void
  children?: React.ReactNode
}

const PfpUpload: React.FC<PfpUploadProps> = ({
  placeholderSrc,
  placeholderAlt = "Profile Placeholder",
  uploadIconSrc,
  onUploadClick,
  children,
}) => {
  return (
    <FormSection>
      <div className="mb-4">
        <Typography variant="cardSubTitle" className="text-gray-800">
          Profile Photo
        </Typography>
      </div>
      <div className="flex flex-col items-center gap-4 sm:flex-row sm:gap-8">
        <ProfilePhotoPlaceholder src={placeholderSrc} alt={placeholderAlt} />
        <div>
          <UploadButton iconSrc={uploadPhotoIcon} onClick={onUploadClick}>
            Upload Photo
          </UploadButton>
          <div className="text-sm text-gray-500">JPG, PNG up to 5MB</div>
        </div>
      </div>
    </FormSection>
  )
}

export default PfpUpload

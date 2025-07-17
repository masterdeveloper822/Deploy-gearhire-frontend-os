import React, { useRef } from "react"
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
  onPhotoSelected?: (file: File) => void
  uploadedPhoto?: File | null
  children?: React.ReactNode
}

const PfpUpload: React.FC<PfpUploadProps> = ({
  placeholderSrc,
  placeholderAlt = "Profile Placeholder",
  uploadIconSrc,
  onUploadClick,
  onPhotoSelected,
  uploadedPhoto,
  children,
}) => {
  const fileInputRef = useRef<HTMLInputElement>(null)

  const handleUploadClick = () => {
    if (onUploadClick) onUploadClick()
    fileInputRef.current?.click()
  }

  const handleFileChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    if (e.target.files && e.target.files[0]) {
      onPhotoSelected?.(e.target.files[0])
    }
  }

  return (
    <FormSection>
      <div className="mb-4">
        <Typography variant="cardSubTitle" className="text-gray-800">
          Profile Photo
        </Typography>
      </div>
      <div className="flex flex-col items-center gap-4 sm:flex-row sm:gap-8">
        {uploadedPhoto ? (
          <img
            src={URL.createObjectURL(uploadedPhoto)}
            alt="Profile"
            className="h-24 w-24 rounded-full object-cover"
          />
        ) : (
          <ProfilePhotoPlaceholder src={placeholderSrc} alt={placeholderAlt} />
        )}
        <div>
          <UploadButton iconSrc={uploadPhotoIcon} onClick={handleUploadClick}>
            Upload Photo
          </UploadButton>
          <input
            type="file"
            accept="image/jpeg,image/png"
            ref={fileInputRef}
            style={{ display: "none" }}
            onChange={handleFileChange}
          />
          <div className="text-sm text-gray-500">JPG, PNG up to 5MB</div>
        </div>
      </div>
    </FormSection>
  )
}

export default PfpUpload

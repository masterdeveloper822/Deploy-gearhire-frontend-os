import React from "react"
import { Link, useNavigate } from "react-router-dom"
import { useForm, Controller } from "react-hook-form"
import { z } from "zod"
import { zodResolver } from "@hookform/resolvers/zod"
import { useEffect } from "react"

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

const MAX_FILE_SIZE = 5 * 1024 * 1024 // 5MB
const ACCEPTED_IMAGE_TYPES = ["image/jpeg", "image/png"]

const schema = z.object({
  businessName: z.string().min(2, "Business name is required"),
  email: z.string().email("Invalid email"),
  location: z.string().min(1, "Location is required"),
  website: z.string().url("Invalid URL").optional().or(z.literal("")),
  about: z.string().min(1, "About is required").max(500),
  categories: z.array(z.string()).min(1, "Select at least one category"),
  photo: z
    .any()
    .refine(
      (file) =>
        !file ||
        (ACCEPTED_IMAGE_TYPES.includes((file as File).type) &&
          (file as File).size <= MAX_FILE_SIZE),
      { message: "JPG/PNG only, max 5MB" },
    )
    .optional(),
})
type FormSchema = z.infer<typeof schema>

export default function Body() {
  const navigate = useNavigate()
  const {
    register,
    handleSubmit,
    control,
    setValue,
    setFocus,
    formState: { errors, isSubmitted },
    watch,
  } = useForm<FormSchema>({
    resolver: zodResolver(schema),
    mode: "onChange",
    defaultValues: {
      businessName: "",
      email: "",
      location: "",
      website: "",
      about: "",
      categories: [],
      photo: null,
    },
  })

  useEffect(() => {
    if (isSubmitted && Object.keys(errors).length > 0) {
      setFocus(Object.keys(errors)[0] as keyof FormSchema)
    }
  }, [isSubmitted, errors, setFocus])

  const onSubmit = (data: FormSchema) => {
    console.log("Validated data:", data)
    // handle save
    navigate("/merchant-dashboard")
  }

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
        <form onSubmit={handleSubmit(onSubmit)}>
          {/* Profile Photo */}
          <Controller
            control={control}
            name="photo"
            render={({ field }) => (
              <PfpUpload
                placeholderSrc={merchantProfileDefaultIcon}
                placeholderAlt="Profile Placeholder"
                uploadIconSrc={uploadPhotoIcon}
                onPhotoSelected={(file) => field.onChange(file)}
                uploadedPhoto={field.value}
              />
            )}
          />
          {errors.photo && (
            <p className="ml-6 mt-1 text-xs text-red-500">
              {errors.photo.message as string}
            </p>
          )}
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
                <Controller
                  name="businessName"
                  control={control}
                  render={({ field }) => (
                    <BusinessNameInput
                      {...field}
                      className={`h-[50px] ${errors.businessName ? "border-red-500" : ""}`}
                    />
                  )}
                />
                {errors.businessName && (
                  <p className="mt-1 text-xs text-red-500">
                    {errors.businessName.message}
                  </p>
                )}
              </FormGroup>
              <FormGroup>
                <FormLabel>Contact Email *</FormLabel>
                <Controller
                  name="email"
                  control={control}
                  render={({ field }) => (
                    <BusinessNameInput
                      {...field}
                      className={`h-[50px] ${errors.email ? "border-red-500" : ""}`}
                    />
                  )}
                />
                {errors.email && (
                  <p className="mt-1 text-xs text-red-500">
                    {errors.email.message}
                  </p>
                )}
              </FormGroup>
              <FormGroup>
                <FormLabel>Location *</FormLabel>
                <Controller
                  name="location"
                  control={control}
                  render={({ field }) => (
                    <BusinessNameInput
                      {...field}
                      placeholder="City, Region"
                      className={`h-[50px] ${errors.location ? "border-red-500" : ""}`}
                    />
                  )}
                />
                {errors.location && (
                  <p className="mt-1 text-xs text-red-500">
                    {errors.location.message}
                  </p>
                )}
              </FormGroup>
              <FormGroup>
                <FormLabel>Website URL</FormLabel>
                <Controller
                  name="website"
                  control={control}
                  render={({ field }) => (
                    <BusinessNameInput
                      {...field}
                      placeholder="https://example.com"
                      className={`h-[50px] ${errors.website ? "border-red-500" : ""}`}
                    />
                  )}
                />
                {errors.website && (
                  <p className="mt-1 text-xs text-red-500">
                    {errors.website.message}
                  </p>
                )}
              </FormGroup>
            </div>
          </FormSection>
          {/* About Your Business */}
          <FormSection>
            <h2 className="mb-6 text-lg font-semibold text-gray-800">
              About Your Business
            </h2>
            <FormLabel>Short Bio / About Section *</FormLabel>
            <Controller
              name="about"
              control={control}
              render={({ field }) => (
                <AboutTextarea
                  {...field}
                  maxLength={500}
                  placeholder="Tell renters about your business, experience, and what sets you apart..."
                  className={errors.about ? "border-red-500" : ""}
                />
              )}
            />
            {errors.about && (
              <p className="mt-1 text-xs text-red-500">
                {errors.about.message}
              </p>
            )}
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
                <Controller
                  control={control}
                  name="categories"
                  render={({ field }) => (
                    <label
                      key={cat}
                      className="flex cursor-pointer items-center gap-2 rounded-lg border border-gray-200 bg-white px-4 py-3"
                    >
                      <Checkbox
                        checked={field.value.includes(cat)}
                        onCheckedChange={() => {
                          if (field.value.includes(cat)) {
                            field.onChange(
                              field.value.filter((c: string) => c !== cat),
                            )
                          } else {
                            field.onChange([...field.value, cat])
                          }
                        }}
                      />
                      <span className="text-sm font-medium text-black">
                        {cat}
                      </span>
                    </label>
                  )}
                />
              ))}
            </div>
            {errors.categories && (
              <p className="mt-1 text-xs text-red-500">
                {errors.categories.message}
              </p>
            )}
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
                // Not validated, just pass as normal input
                // Add validation if needed
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
                // Not validated, just pass as normal input
                // Add validation if needed
                />
              </FormGroup>
            </div>
          </FormSection>
          {/* Save/Preview Buttons */}
          <div className="my-8 flex flex-col gap-4 sm:flex-row">
            <SaveChangesButton type="submit" iconSrc={saveButtonIcon}>
              Save Changes
            </SaveChangesButton>
            <PreviewProfileButton iconSrc={eyeIcon}>
              <Link to="/">Preview My Public Profile</Link>
            </PreviewProfileButton>
          </div>
        </form>
      </div>
    </div>
  )
}

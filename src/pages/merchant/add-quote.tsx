import React, { useRef, useState } from "react"
import { MerchantHeader } from "@/components/layout/header/merchant-header"
import { Button } from "@/components/ui/button"
import { Card } from "@/components/ui/card"
import { BackArrowIcon, CloudUploadIcon } from "@/components/ui/icon"
import { useNavigate } from "react-router-dom"
import { DetailSidebar } from "@/components/rfq-sidebar/detail-sidebar"
import { useForm } from "react-hook-form"
import { z } from "zod"
import { zodResolver } from "@hookform/resolvers/zod"
import { Textarea } from "@/components/ui/textarea"

// Image asset constants (replace with your actual asset paths if needed)
const imgImg =
  "http://localhost:3845/assets/410c340aa057242400c608368f918307cdd72438.png"
const imgImg1 =
  "http://localhost:3845/assets/f578f9c2a181ef669150341163e63e6e9da01878.png"
const imgFrame4 =
  "http://localhost:3845/assets/bd628ea7169604b04f36c37e820b01d9a10adeac.svg"
const imgFrame5 =
  "http://localhost:3845/assets/727f04cc8f58d671183dfaa060d0f1ac8e8cc60b.svg"
const imgFrame6 =
  "http://localhost:3845/assets/742dc4d2e0b005dab66144a1b5f2f48333384737.svg"
const imgFrame8 =
  "http://localhost:3845/assets/393b2c64082c1298f54496bda3e1b323df69b7a4.svg"

const addQuoteSchema = z.object({
  message: z.string().min(1, "Message is required"),
  files: z
    .array(z.any())
    .max(3, "You can upload up to 3 files")
    .refine(
      (files) =>
        files.every(
          (file) =>
            file instanceof File &&
            ["application/pdf", "image/jpeg", "image/png"].includes(
              file.type,
            ) &&
            file.size <= 5 * 1024 * 1024,
        ),
      { message: "PDF, JPG, PNG up to 5MB each" },
    )
    .optional(),
})
type AddQuoteForm = z.infer<typeof addQuoteSchema>

export default function AddQuote() {
  const navigate = useNavigate()
  const [files, setFiles] = useState<File[]>([])
  const [imagePreview, setImagePreview] = useState<string | null>(null)
  const fileInputRef = useRef<HTMLInputElement>(null)

  const {
    register,
    handleSubmit,
    setValue,
    formState: { errors },
    watch,
  } = useForm<AddQuoteForm>({
    resolver: zodResolver(addQuoteSchema),
    mode: "onChange",
    defaultValues: {
      message: "",
      files: [],
    },
  })

  const onSubmit = (data: AddQuoteForm) => {
    // handle submit logic here
    // e.g., send data to API
    navigate("/submitted-quote")
  }

  return (
    <div className="min-h-screen bg-gray-50">
      {/* Header */}
      <MerchantHeader />
      {/* Main Content */}
      <main className="flex w-full flex-col items-center px-4 py-4 sm:py-8">
        <div className="w-full max-w-[1248px] px-2 sm:px-0">
          <div className="flex items-center gap-2">
            <Button
              variant="ghost"
              onClick={() => navigate(-1)}
              aria-label="Back"
              className="mx-2"
            >
              <BackArrowIcon alt="Back" className="h-6 w-6" />
            </Button>
            <h2 className="mb-2 text-3xl font-bold text-gray-800">
              Submit a Quote
            </h2>
          </div>
          <p className="mb-6 ml-11 mt-2 text-gray-600">
            Respond to this equipment request
          </p>
        </div>
        <div className="flex w-full max-w-[1248px] flex-col items-start gap-6 lg:flex-row">
          {/* Left: RFQ Details */}
          <DetailSidebar
            title="Cinema Camera Package for Feature Film"
            location="Los Angeles, CA"
            dateRange="Jan 15 - Jan 28, 2025"
            expiry="Expires Jan 10, 2025"
            categories={["Camera", "Lens", "Stabilizer"]}
            description="Looking for a complete cinema camera package including RED or ARRI camera body, prime lens set, and professional stabilization system for independent feature production. Need reliable equipment with backup options available."
            posterName="Sarah Chen"
            posterAvatar={imgImg1}
            postedAgo="Posted 2 days ago"
            locationIcon={imgFrame4}
            dateIcon={imgFrame5}
            expiryIcon={imgFrame6}
          />
          {/* Right: Quote Form */}
          <Card className="w-full flex-1 rounded-lg p-4 sm:p-6">
            <form className="space-y-6" onSubmit={handleSubmit(onSubmit)}>
              <div>
                <label className="mb-1 block font-medium text-gray-700">
                  Message to Renter <span className="text-red-500">*</span>
                </label>
                <Textarea
                  className="h-40 w-full resize-none rounded-lg border border-gray-200 p-4 text-base text-gray-900 placeholder:text-gray-400"
                  placeholder="Include any details or questions about the request..."
                  {...register("message")}
                />
                {errors.message && (
                  <div className="text-xs text-red-500">
                    {errors.message.message}
                  </div>
                )}
                <div className="mt-2 text-xs text-gray-500">
                  Be specific about your equipment availability and any
                  conditions.
                </div>
              </div>
              <div>
                <label className="mb-1 block font-medium text-gray-700">
                  Attach Files (Optional)
                </label>
                <div
                  className="flex flex-col items-center justify-center rounded-lg border-2 border-dashed border-gray-300 p-4 text-center sm:p-6"
                  onDrop={(e) => {
                    e.preventDefault()
                    const droppedFiles = Array.from(e.dataTransfer.files).slice(
                      0,
                      3,
                    )
                    setFiles(droppedFiles)
                    setValue("files", droppedFiles, { shouldValidate: true })
                    const firstFile = droppedFiles[0] as File | undefined
                    if (firstFile && firstFile.type.startsWith("image/")) {
                      setImagePreview(URL.createObjectURL(firstFile))
                    } else {
                      setImagePreview(null)
                    }
                  }}
                  onDragOver={(e) => e.preventDefault()}
                >
                  <CloudUploadIcon />
                  <input
                    type="file"
                    ref={fileInputRef}
                    style={{ display: "none" }}
                    accept="image/*,application/pdf"
                    multiple
                    onChange={(e) => {
                      const selectedFiles = Array.from(
                        e.target.files || [],
                      ).slice(0, 3)
                      setFiles(selectedFiles)
                      setValue("files", selectedFiles, { shouldValidate: true })
                      const firstFile = selectedFiles[0] as File | undefined
                      if (firstFile && firstFile.type.startsWith("image/")) {
                        setImagePreview(URL.createObjectURL(firstFile))
                      } else {
                        setImagePreview(null)
                      }
                    }}
                  />
                  <div>
                    <span
                      className="cursor-pointer font-medium text-sky-600"
                      onClick={() => fileInputRef.current?.click()}
                    >
                      Click to upload
                    </span>
                    <span className="text-gray-600"> or drag and drop</span>
                  </div>
                  <div className="mt-2 flex flex-col items-center gap-1">
                    {files.map((file, idx) => (
                      <span key={idx} className="text-xs text-gray-700">
                        {file.name}
                      </span>
                    ))}
                  </div>
                  <div className="mt-1 text-xs text-gray-500">
                    PDF, JPG, PNG up to 5MB each (max 3 files)
                  </div>
                  {errors.files && (
                    <div className="text-xs text-red-500">
                      {errors.files.message}
                    </div>
                  )}
                  {imagePreview && (
                    <img
                      src={imagePreview}
                      alt="Course Preview"
                      className="mt-4 h-32 w-56 rounded-lg border border-gray-200 object-cover shadow"
                    />
                  )}
                </div>
              </div>
              <div className="mt-8 flex flex-col gap-4 sm:flex-row">
                <button
                  type="submit"
                  className="flex w-full items-center justify-center rounded-lg bg-sky-600 px-8 py-3 font-medium text-white transition hover:bg-sky-700 sm:w-1/2"
                >
                  <img src={imgFrame8} alt="" className="mr-2 h-5 w-5" />
                  Send Quote
                </button>
                <button
                  type="button"
                  className="w-full rounded-lg bg-gray-100 px-8 py-3 font-medium text-gray-700 transition hover:bg-gray-200 sm:w-1/2"
                >
                  Cancel
                </button>
              </div>
            </form>
          </Card>
        </div>
      </main>
    </div>
  )
}

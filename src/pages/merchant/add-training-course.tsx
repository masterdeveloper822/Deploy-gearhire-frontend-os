import React, { useRef, useState } from "react"
import { useForm } from "react-hook-form"
import { z } from "zod"
import { zodResolver } from "@hookform/resolvers/zod"
import { useNavigate } from "react-router-dom"
import { Card } from "@/components/ui/card"
import { Input } from "@/components/ui/input"
import { Textarea } from "@/components/ui/textarea"
import { Button } from "@/components/ui/button"
import { Switch } from "@/components/ui/switch"
import {
  Select,
  SelectTrigger,
  SelectValue,
  SelectContent,
  SelectItem,
} from "@/components/ui/select"

import backArrow from "@/assets/images/ui/icons/backArrow.svg"
import cloudUploadIcon from "@/assets/images/ui/icons/upload-cloud.svg"
import infoIcon from "@/assets/images/ui/icons/info.svg"
import grayInfoIcon from "@/assets/images/ui/icons/info-gray.svg"
import outLinkIcon from "@/assets/images/ui/icons/outLink.svg"
import galleryIcon from "@/assets/images/ui/icons/gallery.svg"
import blueEyeIcon from "@/assets/images/ui/icons/eye-blue.svg"

import {
  Form,
  FormField,
  FormItem,
  FormLabel,
  FormControl,
  FormDescription,
  FormMessage,
} from "@/components/ui/form"
import { Typography } from "@/components/ui/typography"
import { MerchantHeader } from "@/components/layout/header/merchant-header"

const categories = [
  "Filmmaking",
  "Lighting",
  "Audio",
  "Editing",
  "Business",
  "Other",
]

const MAX_IMAGE_SIZE = 5 * 1024 * 1024 // 5MB
const ACCEPTED_IMAGE_TYPES = ["image/jpeg", "image/png"]

const schema = z.object({
  title: z.string().min(2, "Course title is required"),
  category: z.string().min(1, "Category is required"),
  description: z.string().min(10, "Description is required").max(1000),
  price: z.string().refine((val) => !isNaN(Number(val)) && Number(val) >= 0, {
    message: "Price is required and must be a non-negative number",
  }),
  image: z
    .any()
    .refine(
      (file) =>
        !file ||
        (file instanceof File &&
          ACCEPTED_IMAGE_TYPES.includes(file.type) &&
          file.size <= MAX_IMAGE_SIZE),
      { message: "JPG/PNG only, max 5MB" },
    )
    .optional(),
  isPublic: z.boolean().optional(),
})
type FormSchema = z.infer<typeof schema>

const AddTrainingCourse: React.FC = () => {
  const navigate = useNavigate()
  const [imagePreview, setImagePreview] = useState<string | null>(null)
  const fileInputRef = useRef<HTMLInputElement>(null)

  const form = useForm<FormSchema>({
    resolver: zodResolver(schema),
    mode: "onChange",
    defaultValues: {
      title: "",
      category: "",
      description: "",
      price: "",
      image: undefined,
      isPublic: true,
    },
  })

  React.useEffect(() => {
    if (
      form.formState.isSubmitted &&
      Object.keys(form.formState.errors).length > 0
    ) {
      form.setFocus(Object.keys(form.formState.errors)[0] as keyof FormSchema)
    }
  }, [form.formState.isSubmitted, form.formState.errors, form.setFocus])

  const onSubmit = (data: FormSchema) => {
    // Convert price to number before using
    const parsedData = { ...data, price: Number(data.price) }
    // handle save
    navigate("/training-course-list")
  }

  return (
    <div className="min-h-screen bg-gray-50">
      <MerchantHeader />
      <main className="mx-auto w-full max-w-2xl px-4 py-8">
        <div>
          <div className="flex w-full items-center pb-8">
            <Button
              variant="ghost"
              onClick={() => navigate(-1)}
              aria-label="Back"
              className="mx-2"
            >
              <img src={backArrow} alt="Back" className="h-6 w-6" />
            </Button>
            <div className="flex flex-col pl-4">
              <Typography variant="h2" className="mb-3">
                Add New Training Course
              </Typography>
              <Typography>
                Share your expertise with the filmmaking community
              </Typography>
            </div>
          </div>
          <Form {...form}>
            <form onSubmit={form.handleSubmit(onSubmit)}>
              <Card className="rounded-lg p-6 shadow-md">
                <div className="mb-6 flex items-center gap-2">
                  <img src={infoIcon} alt="Info" className="h-5 w-5" />
                  <Typography variant="cardSubTitle">
                    Course Information
                  </Typography>
                </div>
                {/* Course Title */}
                <FormField
                  control={form.control}
                  name="title"
                  render={({ field }) => (
                    <FormItem className="mb-6">
                      <FormLabel className="flex items-center gap-1 text-base font-medium text-gray-700">
                        Course Title <span className="text-red-500">*</span>
                      </FormLabel>
                      <FormControl>
                        <Input
                          {...field}
                          className={`mt-2 h-12 rounded-lg border border-gray-300 bg-white px-4 text-base focus:outline-none focus:ring-2 focus:ring-sky-500 ${form.formState.errors.title ? "border-red-500" : ""}`}
                          placeholder="e.g., Advanced Cinematography Masterclass"
                        />
                      </FormControl>
                      <FormMessage />
                    </FormItem>
                  )}
                />
                {/* Description */}
                <FormField
                  control={form.control}
                  name="description"
                  render={({ field }) => (
                    <FormItem className="mb-6">
                      <FormLabel className="flex items-center gap-1 text-base font-medium text-gray-700">
                        Short Description{" "}
                        <span className="text-red-500">*</span>
                      </FormLabel>
                      <FormControl>
                        <Textarea
                          {...field}
                          maxLength={300}
                          className={`mt-2 h-28 resize-none rounded-lg border border-gray-300 bg-white px-4 py-3 text-base focus:outline-none focus:ring-2 focus:ring-sky-500 ${form.formState.errors.description ? "border-red-500" : ""}`}
                          placeholder="Describe what students will learn in this course..."
                        />
                      </FormControl>
                      <div className="mt-1 flex items-center justify-between">
                        <span className="text-xs text-gray-400">
                          {form.getValues("description")?.length || 0}/300
                        </span>
                      </div>
                      <FormMessage />
                    </FormItem>
                  )}
                />
                {/* Category/Type */}
                <FormField
                  control={form.control}
                  name="category"
                  render={({ field }) => (
                    <FormItem>
                      <FormLabel className="flex items-center gap-1 text-base font-medium text-gray-700">
                        Category <span className="text-red-500">*</span>
                      </FormLabel>
                      <FormControl>
                        <Select
                          value={field.value}
                          onValueChange={field.onChange}
                        >
                          <SelectTrigger
                            className={`mt-2 h-12 w-full rounded-lg border border-gray-300 bg-white px-4 text-base focus:outline-none focus:ring-2 focus:ring-sky-500 ${form.formState.errors.category ? "border-red-500" : ""}`}
                            id="category"
                          >
                            <SelectValue placeholder="Select a category" />
                          </SelectTrigger>
                          <SelectContent>
                            {categories.map((cat) => (
                              <SelectItem key={cat} value={cat}>
                                {cat}
                              </SelectItem>
                            ))}
                          </SelectContent>
                        </Select>
                      </FormControl>
                      <FormMessage />
                    </FormItem>
                  )}
                />
              </Card>
              <Card className="mt-8 rounded-lg p-6 shadow-md">
                <div className="mb-6 flex items-center gap-2">
                  <img src={outLinkIcon} alt="Info" className="h-5 w-5" />
                  <Typography variant="cardSubTitle">
                    External Booking Link
                  </Typography>
                </div>
                {/* Price */}
                <FormField
                  control={form.control}
                  name="price"
                  render={({ field }) => (
                    <FormItem>
                      <FormLabel className="flex items-center gap-1 text-base font-medium text-gray-700">
                        Course URL<span className="text-red-500">*</span>
                      </FormLabel>
                      <FormControl>
                        <Input
                          {...field}
                          type="number"
                          step="0.01"
                          min={0}
                          className={`mt-2 h-12 rounded-lg border border-gray-300 bg-white px-4 text-base focus:outline-none focus:ring-2 focus:ring-sky-500 ${form.formState.errors.price ? "border-red-500" : ""}`}
                          placeholder="https://mycourse.com/register"
                        />
                      </FormControl>
                      <FormDescription>
                        <span className="flex items-center gap-2">
                          <img src={grayInfoIcon} alt="grayInfo" />
                          Set a price for your course, or enter 0 for free.
                        </span>
                      </FormDescription>
                      <FormMessage />
                    </FormItem>
                  )}
                />
              </Card>
              <Card className="mt-8 rounded-lg p-6 shadow-md">
                <div className="mb-6 flex items-center gap-2">
                  <img src={galleryIcon} alt="Info" className="h-5 w-5" />
                  <Typography variant="cardSubTitle">
                    Course Thumbnail
                  </Typography>
                </div>
                {/* Course Image Upload */}
                <FormField
                  control={form.control}
                  name="image"
                  render={({ field }) => (
                    <FormItem className="mb-6">
                      <FormControl>
                        <div
                          className={`relative flex w-full flex-col items-center justify-center rounded-lg border-2 bg-gray-50 p-6 transition-colors duration-200 ${form.formState.errors.image ? "border-red-500" : "border-dashed border-gray-300"} focus-within:border-sky-500`}
                        >
                          <input
                            type="file"
                            accept="image/jpeg,image/png"
                            ref={fileInputRef}
                            style={{ display: "none" }}
                            onChange={(e) => {
                              const file = e.target.files?.[0]
                              field.onChange(file)
                              if (file)
                                setImagePreview(URL.createObjectURL(file))
                              else setImagePreview(null)
                            }}
                          />
                          <button
                            type="button"
                            onClick={() => fileInputRef.current?.click()}
                            className="flex flex-col items-center justify-center gap-2 focus:outline-none"
                          >
                            <img src={cloudUploadIcon} alt="Upload" />
                            <span className="text-base font-medium text-gray-700">
                              Click to upload thumbnail image
                            </span>
                          </button>
                          <span className="mt-1 text-sm text-gray-500">
                            Recommended: 16:9 or square format, max 5MB
                          </span>
                          {imagePreview && (
                            <img
                              src={imagePreview}
                              alt="Course Preview"
                              className="mt-4 h-32 w-56 rounded-lg border border-gray-200 object-cover shadow"
                            />
                          )}
                        </div>
                      </FormControl>
                      <FormMessage />
                    </FormItem>
                  )}
                />
              </Card>
              <Card className="my-8 rounded-lg p-4 shadow-md sm:p-6">
                <div className="mb-6 flex flex-row items-start items-center gap-2">
                  <img src={blueEyeIcon} alt="Info" className="h-5 w-5" />
                  <Typography variant="cardSubTitle">
                    Visibility Settings
                  </Typography>
                </div>
                {/* Visibility Switch */}
                <FormField
                  control={form.control}
                  name="isPublic"
                  render={({ field }) => (
                    <FormItem className="flex flex-col gap-4 rounded-[8px] bg-[rgb(243,244,246)] p-4 sm:flex-row sm:items-center sm:gap-4">
                      <FormLabel className="w-full sm:w-auto sm:min-w-[300px] md:min-w-[500px]">
                        <Typography className="mb-1 block text-base font-medium text-gray-700">
                          Public Course Listing
                        </Typography>
                        <Typography variant="caption" className="block">
                          Show this course publicly on your profile and in the
                          course directory
                        </Typography>
                      </FormLabel>
                      <FormControl>
                        <div className="flex w-full justify-start sm:justify-end">
                          <Switch
                            id="public-switch"
                            checked={field.value}
                            onCheckedChange={field.onChange}
                            className="data-[state=checked]:bg-sky-600"
                          />
                        </div>
                      </FormControl>
                    </FormItem>
                  )}
                />
              </Card>
              {/* Action Buttons */}
              <div className="flex flex-row gap-4">
                <Button
                  type="submit"
                  className="h-12 flex-1 rounded-lg bg-sky-600 text-base font-semibold text-white shadow transition-colors hover:bg-sky-700"
                >
                  <span className="flex items-center justify-center gap-2">
                    Save Course
                  </span>
                </Button>
                <Button
                  type="button"
                  variant="secondary"
                  className="h-12 flex-1 rounded-lg border border-gray-200 bg-gray-100 text-base font-medium text-gray-700 hover:bg-gray-200"
                  onClick={() => navigate(-1)}
                >
                  Cancel
                </Button>
              </div>
            </form>
          </Form>
        </div>
      </main>
    </div>
  )
}

export default AddTrainingCourse

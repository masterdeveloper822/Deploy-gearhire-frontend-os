import React, { useState } from "react"
import { useNavigate } from "react-router-dom"
import { useForm, Controller } from "react-hook-form"
import { z } from "zod"
import { zodResolver } from "@hookform/resolvers/zod"

// Placeholder icons (replace with your SVGs or assets as needed)
import backArrow from "@/assets/images/ui/icons/backArrow.svg"
import infoIcon from "@/assets/images/ui/icons/info-black.svg"
import saveIcon from "@/assets/images/ui/icons/file-manage/saveButton.svg"
import cancelIcon from "@/assets/images/ui/icons/file-manage/cancel.svg"

import { AuthHeader } from "@/components/layout/header/auth-header"
import { Label } from "@/components/ui/label"
import { Input } from "@/components/ui/input"
import { Textarea } from "@/components/ui/textarea"
import { Switch } from "@/components/ui/switch"
import { Button } from "@/components/ui/button"
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
  SelectGroup,
  SelectLabel,
} from "@/components/ui/select"
import { Card } from "@/components/ui/card"
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"
import { faCamera } from "@fortawesome/free-solid-svg-icons"
import { useUser } from "@/context/user-context"

const categories = [
  "Camera Body",
  "Lens",
  "Lighting",
  "Audio",
  "Grip",
  "Accessories",
]

const equipmentSchema = z.object({
  equipmentName: z.string().min(2, "Equipment name is required"),
  category: z.string().min(1, "Category is required"),
  keySpecs: z.string().optional(),
  notes: z.string().optional(),
  photos: z
    .array(z.any())
    .min(1, "At least 1 photo is required")
    .refine(
      (files) =>
        files.every(
          (file) =>
            file instanceof File &&
            ["image/jpeg", "image/png"].includes(file.type) &&
            file.size <= 10 * 1024 * 1024,
        ),
      { message: "JPG, PNG up to 10MB each" },
    ),
  isPublic: z.boolean().optional(),
})
type EquipmentFormSchema = z.infer<typeof equipmentSchema>

const MerchantAddEquipment: React.FC = () => {
  const navigate = useNavigate()
  const [isLoading, setIsLoading] = useState(false)
  const { user } = useUser()
  const {
    register,
    handleSubmit,
    control,
    setValue,
    watch,
    setFocus,
    formState: { errors, isSubmitted },
  } = useForm<EquipmentFormSchema>({
    resolver: zodResolver(equipmentSchema),
    defaultValues: {
      equipmentName: "",
      category: "",
      keySpecs: "",
      notes: "",
      photos: [],
      isPublic: true,
    },
  })

  React.useEffect(() => {
    if (isSubmitted && Object.keys(errors).length > 0) {
      setFocus(Object.keys(errors)[0] as keyof EquipmentFormSchema)
    }
  }, [isSubmitted, errors, setFocus])

  const photos = watch("photos")

  const onSubmit = async (data: EquipmentFormSchema) => {
    setIsLoading(true);
    try {
      const accessToken = localStorage.getItem("accessToken");
      const formData = new FormData();
      console.log("accessToken: ", accessToken);

      
      formData.append("equipment_name", data.equipmentName);
      formData.append("equipment_category", data.category);
      if (data.keySpecs) {
        formData.append("key_specifications", data.keySpecs);
      }
      if (data.notes) {
        formData.append("additional_notes", data.notes);
      }
      formData.append("is_public", String(data.isPublic));
      formData.append("provider", String(user.name));
      
      // Append photos
      data.photos.forEach((photo: File) => {
        formData.append("gear_item_pictures", photo);
      });

      const response = await fetch("http://localhost:8000/api/gear-hub/gear-items/create", {
        method: "POST",
        headers: {
          Authorization: `Bearer ${accessToken}`,
        },
        body: formData,
      });

      if (!response.ok) {
        const errorData = await response.json();
        throw new Error(errorData.message || "Failed to add equipment");
      }

      alert("Equipment added successfully!");
      navigate("/merchant-inventory-book");
    } catch (error: any) {
      alert(error.message || "Failed to add equipment.");
    } finally {
      setIsLoading(false);
    }
  }

  return (
    <div className="min-h-screen bg-gray-50">
      {/* Header*/}
      <AuthHeader />
      {/* Form Card */}
      <main className="mx-auto max-w-[800px] p-6">
        <div className="relative w-full">
          <button
            className="absolute left-0 top-1/2 -translate-y-1/2 rounded p-2 hover:bg-gray-100"
            onClick={() => navigate(-1)}
            aria-label="Back"
          >
            <img src={backArrow} alt="Back" className="h-6 w-6" />
          </button>
          <div className="flex w-full flex-col pl-12">
            <h1 className="text-3xl font-bold text-gray-800">
              Add New Equipment
            </h1>
            <p className="mt-1 text-base text-gray-600">
              Add equipment details to your inventory
            </p>
          </div>
        </div>
        <form onSubmit={handleSubmit(onSubmit)}>
          <Card className="mt-8 p-6">
            <h2 className="mb-6 text-lg font-semibold text-gray-800">
              Equipment Information
            </h2>
            <div className="flex flex-col gap-6">
              {/* Equipment Name */}
              <div>
                <Label htmlFor="equipmentName">Equipment Name *</Label>
                <Input
                  id="equipmentName"
                  placeholder="e.g. RED Komodo 6K Camera"
                  {...register("equipmentName")}
                  className={`mt-2 h-12 focus:ring-2 focus:ring-sky-500 ${errors.equipmentName ? "border-red-500" : ""}`}
                />
                {errors.equipmentName && (
                  <p className="mt-1 text-xs text-red-500">
                    {errors.equipmentName.message}
                  </p>
                )}
              </div>
              {/* Category/Type */}
              <div>
                <Label htmlFor="category">Category / Type *</Label>
                <Controller
                  name="category"
                  control={control}
                  render={({ field }) => (
                    <Select value={field.value} onValueChange={field.onChange}>
                      <SelectTrigger
                        className={`mt-2 h-12 w-full ${errors.category ? "border-red-500" : ""}`}
                      >
                        <SelectValue placeholder="Select a category" />
                      </SelectTrigger>
                      <SelectContent>
                        <SelectGroup>
                          <SelectLabel className="h-10">Categories</SelectLabel>
                          {categories.map((cat) => (
                            <SelectItem className="h-10" value={cat} key={cat}>
                              {cat}
                            </SelectItem>
                          ))}
                        </SelectGroup>
                      </SelectContent>
                    </Select>
                  )}
                />
                {errors.category && (
                  <p className="mt-1 text-xs text-red-500">
                    {errors.category.message}
                  </p>
                )}
              </div>
              {/* Key Specifications */}
              <div>
                <Label htmlFor="keySpecs">Key Specifications</Label>
                <Textarea
                  id="keySpecs"
                  placeholder={
                    "• 6K resolution, global shutter • Canon RF mount • Internal recording up to 120fps • Dual CFexpress Type B slots"
                  }
                  {...register("keySpecs")}
                  className={`mt-2 h-[122px] resize-none p-5 text-base ${errors.keySpecs ? "border-red-500" : ""}`}
                  rows={5}
                />
                <p className="mt-1 text-xs text-gray-500">
                  Add key specs like resolution, power needs, connectivity, etc.
                </p>
              </div>
              {/* Additional Notes */}
              <div>
                <Label htmlFor="notes">Additional Notes</Label>
                <Textarea
                  id="notes"
                  placeholder="Any additional information renters should know..."
                  {...register("notes")}
                  className={`mt-2 resize-none ${errors.notes ? "border-red-500" : ""}`}
                  rows={4}
                />
                <p className="mt-1 text-xs text-gray-500">
                  Optional notes visible to renters when browsing
                </p>
              </div>
            </div>
          </Card>
          {/* Equipment Photos */}
          <Card className="mt-8 p-6">
            <h2 className="mb-6 text-lg font-semibold text-gray-800">
              Equipment Photos *
            </h2>
            <Controller
              name="photos"
              control={control}
              render={({ field }) => (
                <div
                  className={`relative flex flex-col items-center justify-center rounded-lg border-2 border-dashed bg-gray-50 p-8 ${errors.photos ? "border-red-500" : "border-gray-300"}`}
                >
                  <label
                    htmlFor="photo-upload"
                    className="flex cursor-pointer flex-col items-center"
                  >
                    <div className="flex h-16 w-16 items-center justify-center overflow-hidden rounded-md bg-gray-200">
                      <FontAwesomeIcon
                        icon={faCamera}
                        alt="Upload"
                        className="h-6 w-6"
                      />
                    </div>
                    <span className="mb-1 mt-4 text-[18px] font-medium text-gray-700">
                      Upload Equipment Photos
                    </span>
                    <span className="mb-2 text-sm text-gray-500">
                      Drag and drop files here, or click to browse
                    </span>
                    <span className="mb-2 text-xs text-black">
                      JPG, PNG up to 10MB each. At least 1 photo required.
                    </span>
                    <input
                      id="photo-upload"
                      type="file"
                      accept="image/jpeg,image/png"
                      multiple
                      className="hidden"
                      onChange={(e) => {
                        if (e.target.files) {
                          field.onChange(Array.from(e.target.files))
                        }
                      }}
                    />
                  </label>
                  {errors.photos && (
                    <p className="mt-1 text-xs text-red-500">
                      {errors.photos.message as string}
                    </p>
                  )}
                  {photos && photos.length > 0 && (
                    <div className="mt-4 flex flex-wrap gap-2">
                      {photos.map((file: File, idx: number) => (
                        <div
                          key={idx}
                          className="flex h-20 w-20 items-center justify-center overflow-hidden rounded bg-gray-200"
                        >
                          <img
                            src={URL.createObjectURL(file)}
                            alt={`Equipment photo ${idx + 1}`}
                            className="h-full w-full object-cover"
                          />
                        </div>
                      ))}
                    </div>
                  )}
                </div>
              )}
            />
          </Card>

          {/* Visibility Settings */}
          <Card className="my-8 p-6">
            <h2 className="mb-6 text-lg font-semibold text-gray-800">
              Visibility Settings
            </h2>
            <Controller
              name="isPublic"
              control={control}
              render={({ field }) => (
                <div className="flex items-center gap-4">
                  <div>
                    <div className="flex items-center gap-2">
                      <Label
                        htmlFor="public-switch"
                        className="text-base font-medium text-gray-700"
                      >
                        Make this item Public
                      </Label>
                      <img src={infoIcon} alt="info" />
                    </div>
                    <p className="text-sm text-gray-500">
                      Public items appear in search results for renters
                    </p>
                  </div>
                  <div className="ml-auto">
                    <Switch
                      className="data-[state=checked]:bg-tertiary"
                      id="public-switch"
                      checked={field.value}
                      onCheckedChange={field.onChange}
                    />
                  </div>
                </div>
              )}
            />
          </Card>
          {/* Action Buttons */}
          <div className="flex h-[100px] flex-col gap-4 sm:flex-row">
            <Button
              variant="tertiary"
              type="submit"
              className="h-12 flex-1 text-base"
              disabled={isLoading}
            >
              <img src={saveIcon} alt="save" />
              {isLoading ? "Saving..." : "Save Equipment"}
            </Button>
            <Button
              type="button"
              variant="secondary"
              className="h-12 flex-1 rounded-lg bg-gray-100 text-base font-medium text-gray-700 hover:bg-gray-200"
              onClick={() => navigate(-1)}
            >
              <img src={cancelIcon} alt="cancel" />
              Cancel
            </Button>
          </div>
        </form>
      </main>
    </div>
  )
}

export { MerchantAddEquipment }

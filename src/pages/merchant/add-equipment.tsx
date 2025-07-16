import React, { useState } from "react"
import { useNavigate } from "react-router-dom"

// Placeholder icons (replace with your SVGs or assets as needed)
import backArrow from "@/assets/images/ui/icons/backArrow.svg"
import infoIcon from "@/assets/images/ui/icons/info-black.svg"
import saveIcon from "@/assets/images/ui/icons/file-manage/saveButton.svg"
import cancelIcon from "@/assets/images/ui/icons/file-manage/cancel.svg"
import merchantProfileDefaultIcon from "@/assets/images/ui/icons/merchantProfileDefault.svg"

import { MerchantHeader } from "@/components/layout/header/merchant-header"
import { Label } from "@/components/ui/label"
import { Input } from "@/components/ui/input"
import { Textarea } from "@/components/ui/textarea"
import { Separator } from "@/components/ui/separator"
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

const categories = [
  "Camera Body",
  "Lens",
  "Lighting",
  "Audio",
  "Grip",
  "Accessories",
]

const MerchantAddEquipment: React.FC = () => {
  const [equipmentName, setEquipmentName] = useState("")
  const [category, setCategory] = useState("")
  const [keySpecs, setKeySpecs] = useState("")
  const [notes, setNotes] = useState("")
  const [isPublic, setIsPublic] = useState(true)
  const [photos, setPhotos] = useState<File[]>([])
  const navigate = useNavigate()

  const handlePhotoUpload = (e: React.ChangeEvent<HTMLInputElement>) => {
    if (e.target.files) {
      setPhotos(Array.from(e.target.files))
    }
  }

  return (
    <div className="min-h-screen bg-gray-50">
      {/* Header*/}
      <MerchantHeader />
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
            <h1 className="text-2xl font-bold text-gray-800">
              Add New Equipment
            </h1>
            <p className="mt-1 text-base text-gray-600">
              Add equipment details to your inventory
            </p>
          </div>
        </div>
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
                value={equipmentName}
                onChange={(e) => setEquipmentName(e.target.value)}
                className="mt-2 h-12"
                required
              />
            </div>
            {/* Category/Type */}
            <div>
              <Label htmlFor="category">Category / Type *</Label>
              <Select>
                <SelectTrigger className="mt-2 h-12 w-full">
                  <SelectValue placeholder="Select a category" />
                </SelectTrigger>
                <SelectContent>
                  <SelectGroup>
                    <SelectLabel className="h-10">Categories</SelectLabel>
                    {categories.map((cat) => (
                      <SelectItem className="h-10" value={cat}>
                        {cat}
                      </SelectItem>
                    ))}
                  </SelectGroup>
                </SelectContent>
              </Select>
            </div>
            {/* Key Specifications */}
            <div>
              <Label htmlFor="keySpecs">Key Specifications</Label>
              <Textarea
                id="keySpecs"
                placeholder={
                  "• 6K resolution, global shutter • Canon RF mount • Internal recording up to 120fps • Dual CFexpress Type B slots"
                }
                value={keySpecs}
                onChange={(e) => setKeySpecs(e.target.value)}
                className="mt-2 h-[122px] resize-none p-5 text-base"
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
                value={notes}
                onChange={(e) => setNotes(e.target.value)}
                className="mt-2 resize-none"
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
          <div className="relative flex flex-col items-center justify-center rounded-lg border-2 border-dashed border-gray-300 bg-gray-50 p-8">
            <label
              htmlFor="photo-upload"
              className="flex cursor-pointer flex-col items-center"
            >
              <div className="flex h-16 w-16 items-center justify-center overflow-hidden rounded-md bg-gray-200">
                <img
                  src={merchantProfileDefaultIcon}
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
                onChange={handlePhotoUpload}
              />
            </label>
            {photos.length > 0 && (
              <div className="mt-4 flex flex-wrap gap-2">
                {photos.map((file, idx) => (
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
        </Card>

        {/* Visibility Settings */}
        <Card className="my-8 p-6">
          <h2 className="mb-6 text-lg font-semibold text-gray-800">
            Visibility Settings
          </h2>
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
                checked={isPublic}
                onCheckedChange={setIsPublic}
              />
            </div>
          </div>
        </Card>
        {/* Action Buttons */}
        <div className="flex h-[100px] flex-col gap-4 sm:flex-row">
          <Button
            variant="tertiary"
            type="submit"
            className="h-12 flex-1 text-base"
          >
            <img src={saveIcon} alt="save" />
            Save Equipment
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
      </main>
    </div>
  )
}

export { MerchantAddEquipment }

import React, { useState } from "react";
import { useNavigate } from "react-router-dom";

import HeaderFrame from "../../../components/custom/header/headerFrame";
import { Input } from "../../../components/ui/input";
import { Textarea } from "../../../components/ui/textarea";
import { Button } from "../../../components/ui/button";
import { Switch } from "../../../components/ui/switch";
import { Separator } from "../../../components/ui/separator";
import { Label } from "../../../components/ui/label";

// Placeholder icons (replace with your SVGs or assets as needed)
import backArrow from "@/public/assets/icons/backArrow.svg";
import uploadIcon from "@/public/assets/icons/camera.svg";
import { MerchantHeader } from "@/src/components/custom/header/merchantHeader";

const categories = [
  "Camera Body",
  "Lens",
  "Lighting",
  "Audio",
  "Grip",
  "Accessories",
];

export default function MerchantAddEquipment() {
  const [equipmentName, setEquipmentName] = useState("");
  const [category, setCategory] = useState("");
  const [keySpecs, setKeySpecs] = useState("");
  const [notes, setNotes] = useState("");
  const [isPublic, setIsPublic] = useState(true);
  const [photos, setPhotos] = useState<File[]>([]);
  const navigate = useNavigate();

  const handlePhotoUpload = (e: React.ChangeEvent<HTMLInputElement>) => {
    if (e.target.files) {
      setPhotos(Array.from(e.target.files));
    }
  };

  return (
    <div className="min-h-screen bg-gray-50">
      {/* Header*/}
      <MerchantHeader />
      {/* Form Card */}
      <main className="max-w-[1280px] mx-auto px-20 py-8">
        <div className="items-center justify-center relative w-full">
            <button
              className="absolute left-0 top-1/2 -translate-y-1/2 p-2 rounded hover:bg-gray-100"
              onClick={() => navigate(-1)}
              aria-label="Back"
            >
              <img src={backArrow} alt="Back" className="w-6 h-6" />
            </button>
            <div className="flex flex-col items-center w-full">
              <h1 className="text-2xl font-bold text-gray-800">Add New Equipment</h1>
              <p className="text-gray-600 text-base mt-1">Add equipment details to your inventory</p>
            </div>
          </div>
          <form className="w-full max-w-2xl bg-white rounded-lg shadow p-8 flex flex-col gap-8 mt-8">
            
            {/* Equipment Information */}
            <div>
              <h2 className="text-lg font-semibold text-gray-800 mb-6">Equipment Information</h2>
              <div className="flex flex-col gap-6">
                {/* Equipment Name */}
                <div>
                  <Label htmlFor="equipmentName">Equipment Name *</Label>
                  <Input
                    id="equipmentName"
                    placeholder="e.g. RED Komodo 6K Camera"
                    value={equipmentName}
                    onChange={e => setEquipmentName(e.target.value)}
                    className="mt-2"
                    required
                  />
                </div>
                {/* Category/Type */}
                <div>
                  <Label htmlFor="category">Category / Type *</Label>
                  <select
                    id="category"
                    value={category}
                    onChange={e => setCategory(e.target.value)}
                    className="mt-2 block w-full rounded-lg border border-gray-200 bg-white px-3 py-3 text-base text-black focus:outline-none focus:ring-2 focus:ring-sky-600"
                    required
                  >
                    <option value="" disabled>
                      Select a category
                    </option>
                    {categories.map(cat => (
                      <option key={cat} value={cat}>
                        {cat}
                      </option>
                    ))}
                  </select>
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
                    onChange={e => setKeySpecs(e.target.value)}
                    className="mt-2 resize-none"
                    rows={5}
                  />
                  <p className="text-xs text-gray-500 mt-1">
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
                    onChange={e => setNotes(e.target.value)}
                    className="mt-2 resize-none"
                    rows={4}
                  />
                  <p className="text-xs text-gray-500 mt-1">
                    Optional notes visible to renters when browsing
                  </p>
                </div>
              </div>
            </div>
            <Separator />
            {/* Equipment Photos */}
            <div>
              <h2 className="text-lg font-semibold text-gray-800 mb-6">Equipment Photos *</h2>
              <div className="border-2 border-dashed border-gray-300 rounded-lg p-8 flex flex-col items-center justify-center bg-gray-50 relative">
                <label htmlFor="photo-upload" className="flex flex-col items-center cursor-pointer">
                  <img src={uploadIcon} alt="Upload" className="w-12 h-12 mb-4" />
                  <span className="text-base font-medium text-gray-700 mb-1">Upload Equipment Photos</span>
                  <span className="text-sm text-gray-500 mb-2">Drag and drop files here, or click to browse</span>
                  <span className="text-xs text-black mb-2">JPG, PNG up to 10MB each. At least 1 photo required.</span>
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
                  <div className="flex flex-wrap gap-2 mt-4">
                    {photos.map((file, idx) => (
                      <div key={idx} className="w-20 h-20 rounded overflow-hidden bg-gray-200 flex items-center justify-center">
                        <img
                          src={URL.createObjectURL(file)}
                          alt={`Equipment photo ${idx + 1}`}
                          className="object-cover w-full h-full"
                        />
                      </div>
                    ))}
                  </div>
                )}
              </div>
            </div>
            <Separator />
            {/* Visibility Settings */}
            <div>
              <h2 className="text-lg font-semibold text-gray-800 mb-6">Visibility Settings</h2>
              <div className="flex items-center gap-4">
                <Switch
                  id="public-switch"
                  checked={isPublic}
                  onCheckedChange={setIsPublic}
                />
                <div>
                  <Label htmlFor="public-switch" className="text-base font-medium text-gray-700">
                    Make this item Public
                  </Label>
                  <p className="text-sm text-gray-500">
                    Public items appear in search results for renters
                  </p>
                </div>
              </div>
            </div>
            {/* Action Buttons */}
            <div className="flex flex-col sm:flex-row gap-4 mt-4">
              <Button type="submit" className="flex-1 bg-sky-600 hover:bg-sky-700 text-white text-base font-medium h-12 rounded-lg">
                Save Equipment
              </Button>
              <Button
                type="button"
                variant="secondary"
                className="flex-1 bg-gray-100 hover:bg-gray-200 text-gray-700 text-base font-medium h-12 rounded-lg"
                onClick={() => navigate(-1)}
              >
                Cancel
              </Button>
            </div>
          </form>
      </main>
    </div>
  );
}

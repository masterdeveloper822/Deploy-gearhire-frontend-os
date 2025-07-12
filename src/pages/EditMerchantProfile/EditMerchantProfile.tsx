// Figma image assets
const imgFrame = "http://localhost:3845/assets/ed4e1169b638e2e838350960320b53c878e45615.svg";
const imgFrame1 = "http://localhost:3845/assets/2bde45dd2a01614bf244e7250aee815201ab9b0a.svg";
const imgFrame2 = "http://localhost:3845/assets/97be41678977bd78c837da782e70fb9a468cf77a.svg";
const imgFrame3 = "http://localhost:3845/assets/e3a99e398167a6cf6e3febcc88b0f3d529c0d27a.svg";
const imgFrame4 = "http://localhost:3845/assets/580377005ec4ab1839c2667dd73858f65d86e98e.svg";
const imgFrame5 = "http://localhost:3845/assets/66826953593b133b013ac3cb6b6d7f1ca4bffe33.svg";
const imgFrame6 = "http://localhost:3845/assets/6054f976b6ce6a900001a3cbe09429add5ebd8c8.svg";
const imgFrame7 = "http://localhost:3845/assets/60e2e0178ba9af28a95777979db6cbddaebda36c.svg";
const imgFrame8 = "http://localhost:3845/assets/228dbed1fc6511a9b0d951aaa955df20d9eab754.svg";
const imgFrame9 = "http://localhost:3845/assets/434d55ea193a56467b8b69d6112426656f8ae546.svg";

import React, { useState } from "react";
import { Input } from "@/src/components/ui/input";
import { Textarea } from "@/src/components/ui/textarea";
import { Button } from "@/src/components/ui/button";
import { Checkbox } from "@/src/components/ui/checkbox";
import FormLabel from "@/src/components/ui/FormLabel";
import FormSection from "@/src/components/ui/FormSection";
import FormGroup from "@/src/components/ui/FormGroup";

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

export default function EditMerchantProfile() {
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
    <div className="bg-white relative rounded-lg w-full min-h-screen">
      {/* Header */}
      <div className="bg-gray-50 w-full min-h-screen">
        <div className="relative w-full h-[72px] shadow-sm">
          <div className="absolute left-20 top-0 w-[1280px] h-[72px] flex items-center">
            <div className="flex items-center gap-2 ml-4">
              <img src={imgFrame} alt="Logo" className="w-6 h-6" />
              <span className="text-sky-700 text-2xl font-bold ml-2">FilmGearHub</span>
            </div>
            <div className="ml-auto flex items-center gap-6">
              <span className="text-gray-600 text-base">Merchant Dashboard</span>
              <img src={imgFrame1} alt="Profile" className="w-4 h-4" />
              <span className="text-sky-600 text-base font-medium">Profile</span>
            </div>
          </div>
        </div>
        {/* Main Form Section */}
        <div className="flex justify-center mt-8">
          <div className="w-[896px]">
            {/* Title */}
            <div className="mb-8">
              <div className="flex items-center gap-4 mb-2">
                <Button className="w-8 h-8 flex items-center justify-center p-0 bg-transparent shadow-none" onClick={() => window.history.back()}>
                  <img src={imgFrame2} alt="Back" className="w-4 h-[18px]" />
                </Button>
                <h1 className="text-3xl font-bold text-gray-800">Edit Merchant Profile</h1>
              </div>
              <p className="text-gray-600 text-base">Complete your profile to get verified and start connecting with renters.</p>
            </div>
            {/* Profile Photo */}
            <FormSection>
              <h2 className="text-lg font-semibold text-gray-800 mb-6">Profile Photo</h2>
              <div className="flex items-center gap-8">
                <div className="w-24 h-24 rounded-full bg-gray-200 flex items-center justify-center overflow-hidden">
                  <img src={imgFrame3} alt="Profile Placeholder" className="w-6 h-8" />
                </div>
                <div>
                  <Button className="flex items-center bg-sky-100 rounded-lg px-6 py-2 mb-2 text-sky-700 font-medium" type="button">
                    <img src={imgFrame4} alt="Upload" className="w-4 h-5 mr-2" />
                    Upload Photo
                  </Button>
                  <div className="text-gray-500 text-sm">JPG, PNG up to 5MB</div>
                </div>
              </div>
            </FormSection>
            {/* Contact Information */}
            <FormSection>
              <h2 className="text-lg font-semibold text-gray-800 mb-6">Contact Information</h2>
              <div className="flex flex-wrap gap-6">
                <FormGroup>
                  <FormLabel>Business/Display Name *</FormLabel>
                  <Input value={contact.businessName} onChange={e => setContact(c => ({ ...c, businessName: e.target.value }))} />
                </FormGroup>
                <FormGroup>
                  <FormLabel>Contact Email *</FormLabel>
                  <Input value={contact.email} onChange={e => setContact(c => ({ ...c, email: e.target.value }))} />
                </FormGroup>
                <FormGroup>
                  <FormLabel>Location *</FormLabel>
                  <Input value={contact.location} onChange={e => setContact(c => ({ ...c, location: e.target.value }))} placeholder="City, Region" />
                </FormGroup>
                <FormGroup>
                  <FormLabel>Website URL</FormLabel>
                  <Input value={contact.website} onChange={e => setContact(c => ({ ...c, website: e.target.value }))} placeholder="https://example.com" />
                </FormGroup>
              </div>
            </FormSection>
            {/* About Your Business */}
            <FormSection>
              <h2 className="text-lg font-semibold text-gray-800 mb-6">About Your Business</h2>
              <FormLabel>Short Bio / About Section *</FormLabel>
              <Textarea value={about} onChange={e => setAbout(e.target.value)} maxLength={500} placeholder="Tell renters about your business, experience, and what sets you apart..." />
              <div className="text-gray-500 text-sm mt-2">Maximum 500 characters</div>
            </FormSection>
            {/* Equipment Categories */}
            <FormSection>
              <h2 className="text-lg font-semibold text-gray-800 mb-6">Equipment Categories *</h2>
              <p className="text-gray-600 text-sm mb-4">Select all categories that apply to your inventory</p>
              <div className="grid grid-cols-4 gap-4">
                {categoriesList.map(cat => (
                  <label key={cat} className="flex items-center gap-2 bg-white border border-gray-200 rounded-lg px-4 py-3 cursor-pointer">
                    <Checkbox checked={categories.includes(cat)} onChange={() => setCategories(selected => selected.includes(cat) ? selected.filter(c => c !== cat) : [...selected, cat])} />
                    <span className="text-sm font-medium text-black">{cat}</span>
                  </label>
                ))}
              </div>
            </FormSection>
            {/* Social Media Links */}
            <FormSection>
              <h2 className="text-lg font-semibold text-gray-800 mb-6">Social Media Links</h2>
              <p className="text-gray-600 text-sm mb-4">Optional: Add your social profiles to build trust</p>
              <div className="flex gap-6">
                <FormGroup>
                  <FormLabel className="flex items-center gap-2">
                    <img src={imgFrame5} alt="Instagram" className="w-3 h-3.5" /> Instagram
                  </FormLabel>
                  <Input value={social.instagram} onChange={e => setSocial(s => ({ ...s, instagram: e.target.value }))} placeholder="https://instagram.com/username" />
                </FormGroup>
                <FormGroup>
                  <FormLabel className="flex items-center gap-2">
                    <img src={imgFrame6} alt="LinkedIn" className="w-3 h-3.5" /> LinkedIn
                  </FormLabel>
                  <Input value={social.linkedin} onChange={e => setSocial(s => ({ ...s, linkedin: e.target.value }))} placeholder="https://linkedin.com/in/username" />
                </FormGroup>
              </div>
            </FormSection>
            {/* Action Buttons */}
            <div className="flex gap-4 mb-12">
              <Button className="flex items-center bg-sky-600 text-white" onClick={() => alert('Saved!')}>
                <img src={imgFrame7} alt="Save" className="w-3.5 h-5 mr-2" />
                Save Changes
              </Button>
              <Button className="flex items-center bg-white border border-gray-300 text-gray-700 font-medium" onClick={() => alert('Preview!')}>
                <img src={imgFrame8} alt="Preview" className="w-4 h-5 mr-2" />
                Preview My Public Profile
              </Button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

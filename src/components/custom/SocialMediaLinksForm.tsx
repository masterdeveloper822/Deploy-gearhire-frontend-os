import React from "react";

interface SocialMediaLinksFormProps {
  values: {
    instagram: string;
    linkedin: string;
  };
  onChange: (field: string, value: string) => void;
}

export default function SocialMediaLinksForm({ values, onChange }: SocialMediaLinksFormProps) {
  return (
    <div className="flex gap-6">
      <div className="flex-1 min-w-[300px]">
        <label className="flex items-center gap-2 text-sm font-medium text-gray-700 mb-1">
          {/* Replace with icon as needed */}
          <span className="w-4 h-4 inline-block">📸</span>
          Instagram
        </label>
        <input className="w-full h-12 rounded-lg border border-gray-300 px-4 text-base" value={values.instagram} onChange={e => onChange('instagram', e.target.value)} placeholder="https://instagram.com/username" />
      </div>
      <div className="flex-1 min-w-[300px]">
        <label className="flex items-center gap-2 text-sm font-medium text-gray-700 mb-1">
          {/* Replace with icon as needed */}
          <span className="w-4 h-4 inline-block">💼</span>
          LinkedIn
        </label>
        <input className="w-full h-12 rounded-lg border border-gray-300 px-4 text-base" value={values.linkedin} onChange={e => onChange('linkedin', e.target.value)} placeholder="https://linkedin.com/in/username" />
      </div>
    </div>
  );
} 
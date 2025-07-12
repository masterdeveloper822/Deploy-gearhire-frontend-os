import React from "react";

interface AboutBusinessFormProps {
  value: string;
  onChange: (value: string) => void;
  maxLength?: number;
}

export default function AboutBusinessForm({ value, onChange, maxLength = 500 }: AboutBusinessFormProps) {
  return (
    <div>
      <label className="block text-sm font-medium text-gray-700 mb-1">Short Bio / About Section *</label>
      <textarea
        className="w-full h-32 rounded-lg border border-gray-300 px-4 py-2 text-base resize-none"
        value={value}
        onChange={e => onChange(e.target.value)}
        maxLength={maxLength}
        placeholder="Tell renters about your business, experience, and what sets you apart..."
      />
      <div className="text-gray-500 text-sm mt-2">Maximum {maxLength} characters</div>
    </div>
  );
} 
import React from "react";

interface ProfileActionButtonsProps {
  onSave: () => void;
  onPreview: () => void;
}

export default function ProfileActionButtons({ onSave, onPreview }: ProfileActionButtonsProps) {
  return (
    <div className="flex gap-4 mb-12">
      <button className="flex items-center bg-sky-600 text-white rounded-lg px-8 h-14 font-semibold text-base shadow-sm" onClick={onSave}>
        {/* Add icon as needed */}
        Save Changes
      </button>
      <button className="flex items-center bg-white border border-gray-300 text-gray-700 rounded-lg px-8 h-14 font-medium text-base shadow-sm" onClick={onPreview}>
        {/* Add icon as needed */}
        Preview My Public Profile
      </button>
    </div>
  );
} 
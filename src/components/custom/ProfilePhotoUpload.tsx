import React from "react";

interface ProfilePhotoUploadProps {
  image?: string;
  onUpload?: (file: File) => void;
  helperText?: string;
}

export default function ProfilePhotoUpload({ image, onUpload, helperText }: ProfilePhotoUploadProps) {
  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    if (onUpload && e.target.files && e.target.files[0]) {
      onUpload(e.target.files[0]);
    }
  };
  return (
    <div className="flex items-center gap-8">
      <div className="w-24 h-24 rounded-full bg-gray-200 flex items-center justify-center overflow-hidden">
        {image ? (
          <img src={image} alt="Profile" className="object-cover w-full h-full" />
        ) : (
          <span className="text-gray-400 text-4xl">👤</span>
        )}
      </div>
      <div>
        <label className="flex items-center bg-sky-100 rounded-lg px-6 py-2 mb-2 cursor-pointer">
          <input type="file" accept="image/*" className="hidden" onChange={handleChange} />
          <span className="text-sky-700 text-base font-medium">Upload Photo</span>
        </label>
        {helperText && <div className="text-gray-500 text-sm">{helperText}</div>}
      </div>
    </div>
  );
} 
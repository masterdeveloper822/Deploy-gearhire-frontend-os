import React from "react";

interface ProfilePhotoPlaceholderProps {
  src: string;
  alt?: string;
}

const ProfilePhotoPlaceholder: React.FC<ProfilePhotoPlaceholderProps> = ({ src, alt = "Profile Placeholder" }) => (
  <div className="w-24 h-24 rounded-full bg-gray-200 flex items-center justify-center overflow-hidden">
    <img src={src} alt={alt} className="w-6 h-8" />
  </div>
);

export default ProfilePhotoPlaceholder; 
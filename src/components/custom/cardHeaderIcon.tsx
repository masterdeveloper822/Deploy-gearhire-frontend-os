import React from "react";

interface CardIconProps {
  src: string;
  alt: string;
  size?: number; // diameter in px, default 64
  iconClassName?: string;
}

export const CardIcon: React.FC<CardIconProps> = ({ src, alt, size = 64, iconClassName }) => (
  <div
    className="rounded-full flex items-center justify-center bg-sky-100"
    style={{ width: size, height: size }}
  >
    <img
      src={src}
      alt={alt}
      className={iconClassName || "w-6 h-6"}
      style={{ maxWidth: size * 0.5, maxHeight: size * 0.5 }}
    />
  </div>
);

interface SquaredIconProps {
  src: string;
  alt: string;
  size?: number; // width/height in px, default 56
  className?: string;
  iconClassName?: string;
}

export const SquaredIcon: React.FC<SquaredIconProps> = ({ src, alt, size = 56, className = "", iconClassName }) => (
  <div
    className={`rounded-[8px] relative flex items-center justify-center bg-[rgba(255,255,255,0.2)] z-[149] ${className}`}
    style={{ width: size, height: size }}
  >
    <img
      src={src}
      alt={alt}
      className={iconClassName || "w-7 h-6"}
    />
  </div>
);

export default CardIcon;

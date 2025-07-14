import * as React from "react"

import { cn } from "@/src/lib/utils"

const Card = React.forwardRef<
  HTMLDivElement,
  React.HTMLAttributes<HTMLDivElement>
>(({ className, ...props }, ref) => (
  <div
    ref={ref}
    className={cn(
      "rounded-xl border bg-card text-card-foreground shadow",
      className
    )}
    {...props}
  />
))
Card.displayName = "Card"

const CardHeader = React.forwardRef<
  HTMLDivElement,
  React.HTMLAttributes<HTMLDivElement>
>(({ className, ...props }, ref) => (
  <div
    ref={ref}
    className={cn("flex flex-col space-y-1.5 p-6", className)}
    {...props}
  />
))
CardHeader.displayName = "CardHeader"

const CardTitle = React.forwardRef<
  HTMLDivElement,
  React.HTMLAttributes<HTMLDivElement>
>(({ className, ...props }, ref) => (
  <div
    ref={ref}
    className={cn("font-semibold leading-none tracking-tight", className)}
    {...props}
  />
))
CardTitle.displayName = "CardTitle"

const CardDescription = React.forwardRef<
  HTMLDivElement,
  React.HTMLAttributes<HTMLDivElement>
>(({ className, ...props }, ref) => (
  <div
    ref={ref}
    className={cn("text-sm text-muted-foreground", className)}
    {...props}
  />
))
CardDescription.displayName = "CardDescription"

const CardContent = React.forwardRef<
  HTMLDivElement,
  React.HTMLAttributes<HTMLDivElement>
>(({ className, ...props }, ref) => (
  <div ref={ref} className={cn("p-6 pt-0", className)} {...props} />
))
CardContent.displayName = "CardContent"

const CardFooter = React.forwardRef<
  HTMLDivElement,
  React.HTMLAttributes<HTMLDivElement>
>(({ className, ...props }, ref) => (
  <div
    ref={ref}
    className={cn("flex items-center p-6 pt-0", className)}
    {...props}
  />
))
CardFooter.displayName = "CardFooter"

interface CardIconProps {
  src: string;
  alt: string;
  size?: number; // diameter in px, default 64
  iconClassName?: string;
}

const CardIcon: React.FC<CardIconProps> = ({ src, alt, size = 64, iconClassName }) => (
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

const SquaredIcon: React.FC<SquaredIconProps> = ({ src, alt, size = 56, className = "", iconClassName }) => (
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

interface ProfilePhotoPlaceholderProps {
  src: string;
  alt?: string;
}

const ProfilePhotoPlaceholder: React.FC<ProfilePhotoPlaceholderProps> = ({ src, alt = "Profile Placeholder" }) => (
  <div className="w-24 h-24 rounded-full bg-gray-200 flex items-center justify-center overflow-hidden">
    <img src={src} alt={alt} className="w-6 h-8" />
  </div>
);

interface RecentActivityCardProps {
  avatar: string;
  name: string;
  time: string;
  message: string;
  commentsCount: number;
  likesCount: number;
  commentsIcon: string;
  likesIcon: string;
}

const RecentActivityCard: React.FC<RecentActivityCardProps> = ({
  avatar,
  name,
  time,
  message,
  commentsCount,
  likesCount,
  commentsIcon,
  likesIcon,
}) => (
  <div className="bg-gray-100 flex flex-row items-start gap-4 px-6 mb-4 py-5 rounded-[8px]">
    <img src={avatar} alt={name} className="w-12 h-12 rounded-full object-cover" />
    <div className="flex-1">
      <div className="flex items-center gap-2 mb-1">
        <span className="font-semibold text-gray-900">{name}</span>
        <span className="text-xs text-gray-400 font-normal">{time}</span>
      </div>
      <div className="text-gray-700 mb-3">{message}</div>
      <div className="flex items-center gap-6 text-gray-500 text-sm">
        <div className="flex items-center gap-1">
          <img src={commentsIcon} alt="Comments" className="w-4 h-4" />
          <span>{commentsCount}</span>
        </div>
        <div className="flex items-center gap-1">
          <img src={likesIcon} alt="Likes" className="w-4 h-4" />
          <span>{likesCount}</span>
        </div>
      </div>
    </div>
  </div>
);

export { Card, CardHeader, CardFooter, CardTitle, CardDescription, CardContent , CardIcon, 
  SquaredIcon, ProfilePhotoPlaceholder, RecentActivityCard}

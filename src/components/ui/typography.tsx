import React from "react"
import { cn } from "@/src/lib/utils"

interface TypographyProps {
  variant?: "logo" | "h1" | "h2" | "h3" | "body" | "caption" | "hero" | "heroSub" | "cardSubTitle" | 
            "cardBody" | "reviewUserName" | "reviewUserInfo" | "reviewText"
  children?: React.ReactNode
  className?: string
}

const typographyVariants = {
  logo: "text-xl lg:text-2xl font-bold text-sky-700 leading-6",
  h1: "text-2xl md:text-4xl font-bold text-gray-900",
  h2: "text-3xl font-bold text-gray-900",
  h3: "text-xl md:text-2xl font-bold text-gray-900",
  body: "text-base font-normal text-gray-900",
  cardBody: "text-base font-normal text-gray-600",
  caption: "text-sm text-gray-500",
  hero: "flex justify-start items-start text-2xl md:text-6xl font-bold leading-[60px] text-gray-800 text-left",
  heroSub: "text-[16px] md:text-[20px] font-normal leading-6 md:leading-7 text-gray-600 relative text-left",
  cardSubTitle: "text-lg font-semibold text-gray-900",
  reviewUserName: "text-base font-bold leading-6 text-gray-900",
  reviewUserInfo: "block text-sm font-normal leading-5 text-gray-600",
  reviewText: "block text-base font-normal leading-tight text-gray-600 text-left",
}

export function Typography({ variant = "body", children, className }: TypographyProps) {
  return (
    <span className={cn(typographyVariants[variant], className)}>
      {children}
    </span>
  )
} 
import React from "react"
import { cn } from "@/src/lib/utils"

interface TypographyProps {
  variant?: "logo" | "h1" | "h2" | "h3" | "body" | "caption" | "hero" | "heroSub"
  children?: React.ReactNode
  className?: string
}

const typographyVariants = {
  logo: "text-xl lg:text-2xl font-bold text-sky-700 leading-6",
  h1: "text-4xl font-bold text-gray-800",
  h2: "text-3xl font-semibold text-gray-900",
  h3: "text-2xl font-medium text-gray-900",
  body: "text-base text-gray-700",
  caption: "text-sm text-gray-500",
  hero: "flex justify-start items-start text-2xl md:text-6xl font-bold leading-[60px] text-gray-800 text-left",
  heroSub: "text-[16px] md:text-[20px] font-normal leading-6 md:leading-7 text-gray-600 relative text-left",
}

export function Typography({ variant = "body", children, className }: TypographyProps) {
  return (
    <span className={cn(typographyVariants[variant], className)}>
      {children}
    </span>
  )
} 
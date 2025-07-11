import React from "react"
import { cn } from "@/src/lib/utils"

interface TypographyProps {
  variant?: "logo" | "h1" | "h2" | "h3" | "body" | "caption"
  children?: React.ReactNode
  className?: string
}

const typographyVariants = {
  logo: "text-xl lg:text-2xl font-bold text-sky-700 leading-6",
  h1: "text-4xl font-bold text-gray-900",
  h2: "text-3xl font-semibold text-gray-900",
  h3: "text-2xl font-medium text-gray-900",
  body: "text-base text-gray-700",
  caption: "text-sm text-gray-500",
}

export function Typography({ variant = "body", children, className }: TypographyProps) {
  return (
    <span className={cn(typographyVariants[variant], className)}>
      {children}
    </span>
  )
} 
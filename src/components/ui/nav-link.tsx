import React from "react"
import { cn } from "@/src/lib/utils"

interface NavLinkProps {
  href: string
  children?: React.ReactNode
  className?: string
  offset?: number
}

export function NavLink({ href, children, className, offset = 74 }: NavLinkProps) {
  const handleClick = (e: React.MouseEvent<HTMLAnchorElement>) => {
    if (window.location.pathname === "/") {
      e.preventDefault()
      const el = document.getElementById(href.replace("#", ""))
      if (el) {
        const y = el.getBoundingClientRect().top + window.pageYOffset - offset
        window.scrollTo({ top: y, behavior: "smooth" })
      }
    }
  }

  return (
    <a
      href={href}
      className={cn(
        "text-base font-normal leading-6 text-gray-700 hover:text-sky-700 transition-colors px-2",
        className
      )}
      onClick={handleClick}
    >
      {children}
    </a>
  )
} 
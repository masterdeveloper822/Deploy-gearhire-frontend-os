import React from "react"
import { Checkbox } from "@/components/ui/checkbox"

interface CheckboxWithLinkProps {
  checked: boolean
  onCheckedChange: (checked: boolean) => void
  className?: string
  label?: string
  termsUrl?: string
  privacyUrl?: string
}

const CheckboxWithLink: React.FC<CheckboxWithLinkProps> = ({
  checked,
  onCheckedChange,
  className = "",
  label = "I agree to the ",
  termsUrl = "#",
  privacyUrl = "#",
}) => {
  return (
    <div className={`flex items-center gap-2 ${className}`}>
      <label className="flex cursor-pointer items-center gap-2">
        <Checkbox
          checked={checked}
          onCheckedChange={onCheckedChange}
          className="h-4 w-4 rounded border border-black data-[state=checked]:border-sky-600 data-[state=checked]:bg-sky-600"
        />
        <span className="select-none text-sm text-gray-700">
          {label}
          <a
            href={termsUrl}
            className="text-sky-600 underline transition-colors hover:text-sky-700"
            target="_blank"
            rel="noopener noreferrer"
          >
            Terms of Service
          </a>{" "}
          and{" "}
          <a
            href={privacyUrl}
            className="text-sky-600 underline transition-colors hover:text-sky-700"
            target="_blank"
            rel="noopener noreferrer"
          >
            Privacy Policy
          </a>
        </span>
      </label>
    </div>
  )
}

export { CheckboxWithLink }

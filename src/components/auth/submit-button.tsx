import React from "react"
import { Button } from "@/components/ui/button"

interface SubmitButtonProps
  extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  isFormValid: boolean
  children: React.ReactNode
}

const SubmitButton: React.FC<SubmitButtonProps> = ({
  isFormValid,
  children,
  className = "",
  ...props
}) => {
  return (
    <Button
      type="submit"
      className={`mt-2 flex h-12 w-full items-center justify-center rounded-md text-base font-semibold ${
        isFormValid
          ? "bg-sky-600 text-white hover:bg-sky-700"
          : "bg-sky-600 text-white opacity-80 hover:bg-sky-700"
      } ${className}`}
      {...props}
    >
      {children}
    </Button>
  )
}

export { SubmitButton }

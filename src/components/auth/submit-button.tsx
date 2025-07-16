import React from "react"
import { Button } from "@/components/ui/button"

interface SubmitButtonProps
  extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  children: React.ReactNode
}

const SubmitButton: React.FC<SubmitButtonProps> = ({
  children,
  className = "",
  ...props
}) => {
  return (
    <Button
      type="submit"
      className={`mt-2 flex h-12 w-full items-center justify-center rounded-md bg-sky-600 text-base font-semibold text-white hover:bg-sky-700 ${className}`}
      {...props}
    >
      {children}
    </Button>
  )
}

export { SubmitButton }

import React from "react"
import { Button } from "@/components/ui/button"

interface ResendCodeLinkProps {
  isResending: boolean
  resendCountdown: number
  onClick: () => void
}

const ResendCodeLink: React.FC<ResendCodeLinkProps> = ({
  isResending,
  resendCountdown,
  onClick,
}) => {
  return (
    <Button
      variant="link"
      onClick={onClick}
      disabled={resendCountdown > 0 || isResending}
      className={`h-auto p-0 text-base font-medium underline ${
        resendCountdown > 0 || isResending
          ? "cursor-not-allowed text-gray-400"
          : "text-sky-600 hover:text-sky-800"
      }`}
    >
      {isResending
        ? "Sending..."
        : resendCountdown > 0
          ? `Resend in ${resendCountdown}s`
          : "Resend Code"}
    </Button>
  )
}

export { ResendCodeLink }

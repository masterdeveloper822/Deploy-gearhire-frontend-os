import React from "react"
import { Button } from "@/components/ui/button"

interface VerifyButtonProps {
  isVerifying: boolean
  isCodeComplete: boolean
  onClick: () => void
}

const VerifyButton: React.FC<VerifyButtonProps> = ({
  isVerifying,
  isCodeComplete,
  onClick,
}) => {
  return (
    <Button
      onClick={onClick}
      disabled={!isCodeComplete || isVerifying}
      className={`h-11 w-full rounded-lg text-base font-semibold transition-all sm:h-12 ${
        isCodeComplete && !isVerifying
          ? "bg-sky-600 text-white hover:bg-sky-700"
          : "cursor-not-allowed bg-sky-500 text-white opacity-60"
      }`}
    >
      {isVerifying ? (
        <div className="flex items-center gap-2">
          <div className="h-4 w-4 animate-spin rounded-full border-2 border-white border-t-transparent"></div>
          Verifying...
        </div>
      ) : (
        "Verify Email"
      )}
    </Button>
  )
}

export { VerifyButton }

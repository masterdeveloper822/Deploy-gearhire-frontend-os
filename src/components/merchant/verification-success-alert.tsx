import React from "react"
import toastCheckIcon from "@/assets/images/ui/icons/toastCheck.svg"

interface VerificationSuccessAlertProps {
  show: boolean
  isFading: boolean
  isVisible: boolean
}

const VerificationSuccessAlert: React.FC<VerificationSuccessAlertProps> = ({
  show,
  isFading,
  isVisible,
}) => {
  if (!show) return null
  return (
    <div
      className={`absolute right-4 top-4 z-50 h-12 w-[95vw] max-w-xs shrink-0 rounded-lg bg-green-500 shadow-lg transition-opacity duration-500 ease-in-out sm:max-w-sm md:max-w-md ${
        isFading ? "opacity-0" : isVisible ? "opacity-100" : "opacity-0"
      }`}
    >
      <div className="relative z-50 ml-6 mt-3 flex h-6 w-full items-center bg-transparent pr-4">
        <span className="z-[62] flex h-6 items-center justify-start whitespace-normal pl-3 text-left text-sm font-normal leading-6 text-white sm:whitespace-nowrap sm:pl-6 sm:text-base">
          Verification email sent successfully!
        </span>
        <div className="absolute left-0 top-1 z-[60] flex h-4 w-4 items-center justify-center overflow-hidden">
          <img
            src={toastCheckIcon}
            alt="Success"
            className="relative z-[61] h-4 w-4 shrink-0 overflow-hidden"
          />
        </div>
      </div>
    </div>
  )
}

export default VerificationSuccessAlert

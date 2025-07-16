import React from "react"
import infoIcon from "@/assets/images/ui/icons/info.svg"

interface SupportInfoBoxProps {
  className?: string
}

const SupportInfoBox: React.FC<SupportInfoBoxProps> = ({ className = "" }) => {
  return (
    <div
      className={`rounded-lg border border-blue-200 bg-blue-50 p-3 sm:p-4 ${className}`}
    >
      <div className="flex items-start space-x-3">
        <img
          src={infoIcon}
          alt="Info"
          className="mt-0.5 h-4 w-4 flex-shrink-0 text-blue-600"
        />
        <div className="text-sm text-blue-800 sm:text-base">
          <span className="font-semibold">Need help?</span> If you have
          questions or need assistance, reach out to{" "}
          <a
            href="mailto:support@filmgearhub.com"
            className="underline hover:text-blue-900"
          >
            support@filmgearhub.com
          </a>
        </div>
      </div>
    </div>
  )
}

export default SupportInfoBox

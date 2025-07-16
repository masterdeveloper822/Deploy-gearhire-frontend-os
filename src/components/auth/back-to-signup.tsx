import React from "react"
import { Link } from "react-router-dom"
import backArrowIcon from "@/assets/images/ui/icons/backArrow.svg"

interface BackToSignUpProps {
  className?: string
}

const BackToSignUp: React.FC<BackToSignUpProps> = ({ className = "" }) => (
  <div className={`mt-2 flex items-center justify-center ${className}`}>
    <Link
      to="/signup"
      className="flex items-center text-sm text-gray-500 hover:underline"
    >
      <img src={backArrowIcon} alt="Back Arrow Icon" className="pr-1" />
      Back to Sign Up
    </Link>
  </div>
)

export { BackToSignUp }

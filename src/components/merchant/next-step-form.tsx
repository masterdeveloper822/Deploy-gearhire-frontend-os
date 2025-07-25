import React, { useState, useEffect } from "react"
import { Card, CardContent, CardHeader } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Link } from "react-router-dom"

import vanguardIcon from "@/assets/images/ui/icons/vanguard.svg"
import editProfileIcon from "@/assets/images/ui/icons/EditProfile.svg"
import StepItem from "@/components/merchant/step-item"
import SupportInfoBox from "@/components/merchant/support-info-box"
import DashboardLink from "@/components/merchant/dashboard-link"
import VerificationSuccessAlert from "@/components/merchant/verification-success-alert"

export default function NextStepForm() {
  const [showSuccessMessage, setShowSuccessMessage] = useState(false)
  const [isFading, setIsFading] = useState(false)
  const [isVisible, setIsVisible] = useState(false)

  // Show success message when component mounts (coming from email verification)
  useEffect(() => {
    setShowSuccessMessage(true)

    // Start fade in after a brief delay
    const fadeInTimer = setTimeout(() => {
      setIsVisible(true)
    }, 100)

    // Start fade out after 1 second
    const fadeTimer = setTimeout(() => {
      setIsFading(true)
    }, 1100)

    // Hide the message completely after fade animation
    const hideTimer = setTimeout(() => {
      setShowSuccessMessage(false)
      setIsFading(false)
      setIsVisible(false)
    }, 1600)

    return () => {
      clearTimeout(fadeInTimer)
      clearTimeout(fadeTimer)
      clearTimeout(hideTimer)
    }
  }, [])

  const steps = [
    {
      number: 1,
      title: "Complete Your Profile",
      description:
        "Please complete your profile with accurate contact and business details.",
    },
    {
      number: 2,
      title: "Wait for Approval",
      description:
        "You'll receive an email when your account is approved. Verification typically takes 24–48 hours.",
    },
    {
      number: 3,
      title: "Start Listing Equipment",
      description:
        "Once approved, you can list your equipment and respond to rental requests.",
    },
  ]

  return (
    <div className="relative flex min-h-screen w-full items-start justify-center px-2 py-8 sm:px-4 sm:pt-16">
      {/* Success Message - Positioned in top-right of this component */}
      <VerificationSuccessAlert
        show={showSuccessMessage}
        isFading={isFading}
        isVisible={isVisible}
      />

      <div className="mx-auto w-full max-w-2xl">
        {/* Header Section */}
        <div className="mb-8 px-2 text-center sm:px-0">
          <div className="mx-auto mb-2.5 flex h-20 w-20 items-center justify-center rounded-full bg-yellow-100">
            <img src={vanguardIcon} alt="Vanguard Icon" className="h-8 w-8" />
          </div>
          <h1 className="mb-6 text-2xl font-bold leading-tight text-gray-900 sm:text-3xl md:text-4xl">
            Your Merchant Account is Almost Ready
          </h1>
          <p className="mx-auto w-full max-w-lg text-base text-gray-600 sm:text-lg">
            Thanks for signing up as a Merchant on FilmGearHub. Before your
            profile goes live, our team will verify your information.
          </p>
        </div>

        {/* Steps Card */}
        <Card className="p-4 shadow-lg sm:p-8">
          <CardHeader className="p-0 pb-6">
            <h2 className="text-lg font-semibold text-gray-900 sm:text-xl">
              Next Steps:
            </h2>
          </CardHeader>
          <CardContent className="space-y-6 p-0">
            {/* Steps List */}
            <div className="space-y-6">
              {steps.map((step) => (
                <StepItem
                  key={step.number}
                  number={step.number}
                  title={step.title}
                  description={step.description}
                />
              ))}
            </div>

            {/* Help Section */}
            <SupportInfoBox />
          </CardContent>
        </Card>

        {/* Action Button */}
        <div className="mt-6">
          <Link to="/edit-merchant-profile" className="block">
            <Button
              variant="tertiary"
              className="h-14 w-full text-base font-semibold"
              size="lg"
            >
              <img
                src={editProfileIcon}
                alt="Edit Profile"
                className="mr-2 inline-block h-5 w-5"
              />
              Complete My Profile
            </Button>
          </Link>
        </div>

        {/* Footer Link */}
        <DashboardLink />
      </div>
    </div>
  )
}

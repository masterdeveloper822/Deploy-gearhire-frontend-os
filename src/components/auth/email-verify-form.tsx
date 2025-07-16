import React, { useState, useEffect } from "react"

import { VerificationCodeInput } from "@/components/auth/verification-code-input"
import { VerifyButton } from "@/components/auth/verify-button"
import { ResendCodeLink } from "@/components/auth/resend-code-link"
import { BackToSignUp } from "@/components/auth/back-to-signup"

import verifyMessageIcon from "@/assets/images/ui/icons/verifyMessage.svg"

import { useNavigate } from "react-router-dom"
import { useToast } from "@/hooks/use-toast"

export default function EmailVerifyForm() {
  const navigate = useNavigate()
  const { toast } = useToast()

  // For demo, static email. In real use, get from props/context.
  const email = "john.doe@example.com"

  // State for verification code
  const [verificationCode, setVerificationCode] = useState<string[]>([
    "",
    "",
    "",
    "",
    "",
    "",
  ])
  const [isVerifying, setIsVerifying] = useState(false)
  const [isResending, setIsResending] = useState(false)
  const [resendCountdown, setResendCountdown] = useState(0)

  // Resend countdown timer
  useEffect(() => {
    if (resendCountdown > 0) {
      const timer = setTimeout(
        () => setResendCountdown(resendCountdown - 1),
        1000,
      )
      return () => clearTimeout(timer)
    }
  }, [resendCountdown])

  // Check if code is complete
  const isCodeComplete = verificationCode.every((digit) => digit !== "")

  // Verify email
  const handleVerify = () => {
    if (!isCodeComplete) return

    setIsVerifying(true)
    const code = verificationCode.join("")

    // TODO: Replace with actual API call
    // const response = await verifyEmailAPI(email, code);

    // Simulate API call
    setTimeout(() => {
      // For demo purposes, accept any 6-digit code
      if (code.length === 6 && /^\d{6}$/.test(code)) {
        // Navigate to success page or dashboard
        setTimeout(() => {
          navigate("/merchant-next-step")
        }, 1500)
      } else {
        toast({
          title: "Verification Failed",
          description: "Invalid verification code. Please try again.",
          variant: "destructive",
        })
        // Clear the code on error
        setVerificationCode(["", "", "", "", "", ""])
      }
      setIsVerifying(false)
    }, 2000)
  }

  // Resend code
  const handleResendCode = () => {
    if (resendCountdown > 0) return

    setIsResending(true)

    // TODO: Replace with actual API call
    // await resendVerificationCodeAPI(email);

    // Simulate API call
    setTimeout(() => {
      toast({
        title: "Code Resent",
        description: "A new verification code has been sent to your email.",
      })

      // Start countdown (30 seconds)
      setResendCountdown(30)
      setIsResending(false)
    }, 1000)
  }

  return (
    <div className="flex w-full items-center justify-center bg-transparent px-2 py-20 sm:px-0 sm:py-12 lg:py-16">
      <div className="mx-auto flex w-full max-w-[448px] flex-col items-center">
        {/* Icon and Headings */}
        <div className="mb-8 flex w-full flex-col items-center">
          <div className="mb-4 flex h-16 w-16 items-center justify-center rounded-full bg-sky-100">
            <img
              src={verifyMessageIcon}
              alt="Verify Email"
              className="h-[24px] w-[30px]"
            />
          </div>
          <h1 className="mb-4 text-center text-2xl font-bold text-gray-800 sm:text-3xl md:text-4xl">
            Verify Your Email
          </h1>
          <p className="text-center text-base text-gray-600 sm:text-lg">
            We've sent a 6-digit verification code to
          </p>
          <p className="break-all text-center text-base font-semibold text-gray-800 sm:text-lg">
            {email}
          </p>
        </div>

        {/* Card */}
        <div className="flex w-full flex-col gap-6 rounded-2xl bg-white p-4 shadow-lg sm:p-8">
          {/* Code Input */}
          <div>
            <div className="mb-4 text-center">
              <span className="text-sm font-semibold text-gray-700">
                Enter the 6-digit code
              </span>
            </div>
            <VerificationCodeInput
              value={verificationCode}
              onChange={setVerificationCode}
              autoFocus
            />
          </div>

          {/* Verify Button */}
          <VerifyButton
            isVerifying={isVerifying}
            isCodeComplete={isCodeComplete}
            onClick={handleVerify}
          />

          {/* Resend Code */}
          <div className="flex flex-col items-center gap-2 border-t border-gray-200 pt-4 sm:pt-6">
            <span className="text-base text-gray-600">
              Didn't receive the code?
            </span>
            <ResendCodeLink
              isResending={isResending}
              resendCountdown={resendCountdown}
              onClick={handleResendCode}
            />
          </div>

          {/* Back to Sign Up */}
          <BackToSignUp />
        </div>
      </div>
    </div>
  )
}

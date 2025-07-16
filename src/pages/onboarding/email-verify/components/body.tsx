import React, { useState, useRef, useEffect } from "react"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"

import verifyMessageIcon from "@/assets/images/ui/icons/verifyMessage.svg"
import backArrowIcon from "@/assets/images/ui/icons/backArrow.svg"

import { Link, useNavigate } from "react-router-dom"
import { useToast } from "@/hooks/use-toast"

export default function Body() {
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
  const [focusedIndex, setFocusedIndex] = useState(0)

  // Refs for input focus
  const inputRefs = useRef<(HTMLInputElement | null)[]>([])

  // Auto-focus first input on mount
  useEffect(() => {
    if (inputRefs.current[0]) {
      inputRefs.current[0].focus()
    }
  }, [])

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

  // Handle input change
  const handleInputChange = (index: number, value: string) => {
    // Only allow numbers
    if (!/^\d*$/.test(value)) return

    const newCode = [...verificationCode]
    newCode[index] = value
    setVerificationCode(newCode)

    // Auto-focus next input
    if (value && index < 5) {
      setFocusedIndex(index + 1)
      // Use setTimeout to ensure state update before focus
      setTimeout(() => {
        inputRefs.current[index + 1]?.focus()
      }, 0)
    }
  }

  // Handle backspace
  const handleKeyDown = (
    index: number,
    e: React.KeyboardEvent<HTMLInputElement>,
  ) => {
    if (e.key === "Backspace" && !verificationCode[index] && index > 0) {
      inputRefs.current[index - 1]?.focus()
      setFocusedIndex(index - 1)
    }
  }

  // Handle focus
  const handleFocus = (index: number) => {
    setFocusedIndex(index)
  }

  // Handle paste
  const handlePaste = (e: React.ClipboardEvent) => {
    e.preventDefault()
    const pastedData = e.clipboardData
      .getData("text")
      .replace(/\D/g, "")
      .slice(0, 6)
    if (pastedData.length === 6) {
      const newCode = [...verificationCode]
      for (let i = 0; i < 6; i++) {
        newCode[i] = pastedData[i] || ""
      }
      setVerificationCode(newCode)
      inputRefs.current[5]?.focus()
      setFocusedIndex(5)
    }
  }

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
          navigate("/merchant-next-steps")
        }, 1500)
      } else {
        toast({
          title: "Verification Failed",
          description: "Invalid verification code. Please try again.",
          variant: "destructive",
        })
        // Clear the code on error
        setVerificationCode(["", "", "", "", "", ""])
        inputRefs.current[0]?.focus()
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
            <div className="flex justify-between gap-1 px-10 sm:gap-2 sm:px-3">
              {[0, 1, 2, 3, 4, 5].map((i) => (
                <Input
                  key={i}
                  ref={(el) => (inputRefs.current[i] = el)}
                  type="text"
                  maxLength={1}
                  value={verificationCode[i]}
                  onChange={(e) => handleInputChange(i, e.target.value)}
                  onKeyDown={(e) => handleKeyDown(i, e)}
                  onPaste={handlePaste}
                  onFocus={() => handleFocus(i)}
                  disabled={i > focusedIndex}
                  className={`h-10 w-10 rounded-lg border-2 text-center font-mono text-xl font-bold sm:h-12 sm:w-12 ${
                    verificationCode[i]
                      ? "border-sky-400 bg-sky-50"
                      : i === focusedIndex
                        ? "border-sky-500"
                        : i < focusedIndex
                          ? "border-gray-300"
                          : "border-gray-200 bg-gray-100"
                  } focus:outline-none focus:ring-0 disabled:cursor-not-allowed disabled:opacity-60`}
                />
              ))}
            </div>
          </div>

          {/* Verify Button */}
          <Button
            onClick={handleVerify}
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

          {/* Resend Code */}
          <div className="flex flex-col items-center gap-2 border-t border-gray-200 pt-4 sm:pt-6">
            <span className="text-base text-gray-600">
              Didn't receive the code?
            </span>
            <Button
              variant="link"
              onClick={handleResendCode}
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
          </div>

          {/* Back to Sign Up */}
          <div className="mt-2 flex items-center justify-center">
            <Link
              to="/signup"
              className="flex items-center text-sm text-gray-500 hover:underline"
            >
              <img src={backArrowIcon} alt="Back Arrow Icon" className="pr-1" />
              Back to Sign Up
            </Link>
          </div>
        </div>
      </div>
    </div>
  )
}

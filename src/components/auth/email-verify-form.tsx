import React, { useState, useEffect } from "react";
import { useLocation, useNavigate } from "react-router-dom";
import { VerificationCodeInput } from "@/components/auth/verification-code-input";
import { VerifyButton } from "@/components/auth/verify-button";
import { ResendCodeLink } from "@/components/auth/resend-code-link";
import { BackToSignUp } from "@/components/auth/back-to-signup";
import verifyMessageIcon from "@/assets/images/ui/icons/verifyMessage.svg";
<<<<<<< HEAD
import { useToast } from "@/hooks/use-toast"
import { API_ENDPOINTS } from "@/lib/api";
=======
import { useToast } from "@/hooks/use-toast";
>>>>>>> 9cffc688373a8ac2a944d440877a008dd0dd5c08

export default function EmailVerifyForm() {
  const navigate = useNavigate();
  const { toast } = useToast();
  const location = useLocation();
  const email = location.state?.email || ""; // Get email from navigation state

  const [verificationCode, setVerificationCode] = useState<string[]>(["", "", "", "", "", ""]);
  const [isVerifying, setIsVerifying] = useState(false);
  const [isResending, setIsResending] = useState(false);
  const [resendCountdown, setResendCountdown] = useState(0);

  useEffect(() => {
    if (resendCountdown > 0) {
      const timer = setTimeout(() => setResendCountdown(resendCountdown - 1), 1000);
      return () => clearTimeout(timer);
    }
  }, [resendCountdown]);

  const isCodeComplete = verificationCode.every((digit) => digit !== "");

  // Verify email
  const handleVerify = async () => {
    if (!isCodeComplete) return;
    setIsVerifying(true);
    const code = verificationCode.join("");

    try {
<<<<<<< HEAD
              const response = await fetch(API_ENDPOINTS.USER_VERIFY_EMAIL, {
=======
      const response = await fetch("http://localhost:8000/api/user/verify-email/", {
>>>>>>> 9cffc688373a8ac2a944d440877a008dd0dd5c08
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ email, code }),
      });

      if (!response.ok) {
        const errorData = await response.json();
        throw new Error(errorData.message || "Verification failed");
      }

      const result = await response.json();
      console.log("result", result);
      
      setTimeout(() => {
        if (result && result.role === "merchant") {
          navigate("/merchant-next-step");
        } else {
          toast({
            title: "Email Verified!",
            description: "Your email has been successfully verified.",
          });
          navigate("/login");
        }
      }, 1000);
    } catch (error: any) {
      toast({
        title: "Verification Failed",
        description: error.message || "Invalid verification code. Please try again.",
        variant: "destructive",
      });
      setVerificationCode(["", "", "", "", "", ""]);
    } finally {
      setIsVerifying(false);
    }
  };

  // Resend code
  const handleResendCode = async () => {
    if (resendCountdown > 0) return;
    setIsResending(true);

    try {
<<<<<<< HEAD
      const response = await fetch(API_ENDPOINTS.USER_RESEND_VERIFICATION, {
=======
      const response = await fetch("http://localhost:8000/api/user/resend-verification-code/", {
>>>>>>> 9cffc688373a8ac2a944d440877a008dd0dd5c08
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ email }),
      });

      if (!response.ok) {
        const errorData = await response.json();
        throw new Error(errorData.message || "Failed to resend code");
      }

      toast({
        title: "Code Resent",
        description: "A new verification code has been sent to your email.",
      });
      setResendCountdown(30);
    } catch (error: any) {
      console.log("error: ", error);
      toast({
        title: "Error",
        description: error.message || "Failed to resend code.",
        variant: "destructive",
      });
    } finally {
      setIsResending(false);
    }
  };

  return (
    <div className="flex w-full items-center justify-center bg-transparent px-2 py-20 sm:px-0 sm:py-12 lg:py-16">
      <div className="mx-auto flex w-full max-w-[448px] flex-col items-center">
        {/* Icon and Headings */}
        <div className="mb-8 flex w-full flex-col items-center">
          <div className="mb-4 flex h-16 w-16 items-center justify-center rounded-full bg-sky-100">
            <img src={verifyMessageIcon} alt="Verify Email" className="h-[24px] w-[30px]" />
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
              onEnter={handleVerify}
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
  );
}

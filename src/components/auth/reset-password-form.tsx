import React from "react"
import { Link } from "react-router-dom"
import { useForm } from "react-hook-form"
import { zodResolver } from "@hookform/resolvers/zod"
import { z } from "zod"
import { useToast } from "@/hooks/use-toast"

import messageIcon from "@/assets/images/ui/icons/message.svg"
import lockIcon from "@/assets/images/ui/icons/Lock.svg"
import { SubmitButton } from "@/components/auth/submit-button"

const resetSchema = z.object({
  email: z
    .string()
    .min(1, "Email is required")
    .email("Please enter a valid email address"),
})

type ResetSchema = z.infer<typeof resetSchema>

const ResetPasswordForm: React.FC = () => {
  const {
    register,
    handleSubmit,
    formState: { errors, isValid },
  } = useForm<ResetSchema>({
    resolver: zodResolver(resetSchema),
    mode: "onChange",
  })

  const { toast } = useToast()

  const onSubmit = (data: ResetSchema) => {
    toast({
      title: "Reset Link Sent!",
      description: "A password reset link has been sent to your email.",
    })
  }

  return (
    <div className="mx-auto flex w-full max-w-screen-2xl flex-col items-center bg-transparent px-4 py-8 sm:py-12 lg:py-16">
      <div className="relative flex w-full max-w-md flex-col items-center pt-12 md:pt-0">
        <div className="relative z-10 h-16 w-16 rounded-full bg-sky-100">
          <div className="relative z-10 mt-4 flex items-center justify-center">
            <img src={lockIcon} alt="Lock Icon" />
          </div>
        </div>
        <div className="mt-4">
          <h1 className="mb-4 text-center text-2xl font-bold text-gray-800 sm:text-3xl lg:text-4xl">
            Reset Your Password
          </h1>
        </div>
        <span className="mb-6 block text-center text-base text-gray-600 sm:mb-8 sm:text-lg">
          Enter your email address and we'll send you a link to reset your
          password
        </span>
        <form
          onSubmit={handleSubmit(onSubmit)}
          className="flex w-full flex-col gap-6 rounded-2xl bg-white p-6 shadow-lg sm:p-8"
        >
          {/* Email */}
          <div>
            <label
              className="mb-2 block text-sm font-semibold text-gray-700"
              htmlFor="email"
            >
              Email Address
            </label>
            <div className="relative">
              <img
                src={messageIcon}
                alt="Message Icon"
                className="absolute left-3 top-1/2 h-4 w-4 -translate-y-1/2"
                style={{ pointerEvents: "none" }}
              />
              <input
                id="email"
                type="email"
                placeholder="Enter your email address"
                className={`h-12 w-full rounded-md border bg-white px-4 pl-10 text-base text-gray-900 placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-sky-500 ${
                  errors.email ? "border-red-500" : "border-gray-300"
                }`}
                autoFocus
                {...register("email")}
              />
            </div>
            {errors.email && (
              <p className="mt-1 text-sm text-red-500">
                {errors.email.message}
              </p>
            )}
          </div>
          {/* Reset Button */}
          <SubmitButton>Send Reset Link</SubmitButton>
          <div className="flex w-full justify-center border-t border-gray-200 pt-5">
            <span className="text-base text-gray-600">
              Remember your password?{" "}
              <Link
                to="/login"
                className="h-auto p-0 text-base font-normal text-sky-600 underline"
              >
                Back to Log In
              </Link>
            </span>
          </div>
        </form>
      </div>
    </div>
  )
}

export { ResetPasswordForm }

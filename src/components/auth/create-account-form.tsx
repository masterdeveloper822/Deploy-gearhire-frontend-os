import React, { useState } from "react"
import { useForm, Controller } from "react-hook-form"
import { zodResolver } from "@hookform/resolvers/zod"
import { z } from "zod"
import { useNavigate, Link, useLocation } from "react-router-dom"
import { Eye, EyeOff } from "lucide-react"
import { AuthInput } from "@/components/auth/auth-input"
import { SubmitButton } from "@/components/auth/submit-button"
import { CheckboxWithLink } from "@/components/auth/checkbox-with-link"
import { UserTypeSelector } from "@/components/auth/user-type-selector"
import cameraIcon from "@/assets/images/ui/icons/camera.svg"
import homeIcon from "@/assets/images/ui/icons/home.svg"
import { useToast } from "@/hooks/use-toast"
import { API_ENDPOINTS } from "@/lib/api"

const createAccountSchema = z
  .object({
    type: z.enum(["renter", "merchant"], {
      message: "Please select an account type",
    }),
    email: z
      .string()
      .min(1, "Email is required")
      .email("Please enter a valid email address"),
    password: z.string().min(8, "Password must be at least 8 characters"),
    confirmPassword: z.string().min(1, "Please confirm your password"),
    agreeToTerms: z.literal(true, { message: "You must agree to the terms" }),
  })
  .refine((data) => data.password === data.confirmPassword, {
    message: "Passwords do not match",
    path: ["confirmPassword"],
  })

type CreateAccountSchema = z.infer<typeof createAccountSchema>

const CreateAccountForm: React.FC = () => {
  const { toast } = useToast()
  const navigate = useNavigate()
  const [showPassword, setShowPassword] = useState(false)
  const [showConfirmPassword, setShowConfirmPassword] = useState(false)
  const { state } = useLocation()
  const role = state?.role

  const {
    register,
    handleSubmit,
    control,
    formState: { errors, isValid },
    watch,
  } = useForm<CreateAccountSchema>({
    resolver: zodResolver(createAccountSchema),
    mode: "onChange",
    defaultValues: {
      type: role === "renter" ? "renter" : role === "merchant" ? "merchant" : undefined,
      email: "",
      password: "",
      confirmPassword: "",
      agreeToTerms: true,
    },
  })

  const onSubmit = async (data: CreateAccountSchema) => {
    try {
          const response = await fetch(API_ENDPOINTS.USER_CREATE, {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
        },
        body: JSON.stringify({
          role: data.type,
          email: data.email,
          password: data.password,
        }),
      });

      if (!response.ok) {
        const errorData = await response.json();
        throw new Error( errorData.email || errorData.message || "Failed to create account");
      }

      toast({
        title: "Success!",
        description: "Account created successfully!",
      });
      setTimeout(() => {
        navigate("/email-verify", { state: { email: data.email } });
      }, 1000);
    } catch (error: any) {
      toast({
        title: "Error",
        description: error.message || "Failed to create account.",
        variant: "destructive",
      });
      console.log("error: ", error);
    }
  }

  return (
    <div className="mx-auto flex min-h-screen w-full max-w-screen-2xl flex-col items-center bg-transparent px-4 py-8 sm:py-12 lg:py-16">
      <div className="flex w-full max-w-md flex-col items-center">
        <h1 className="mb-4 text-center text-2xl font-bold text-gray-800 sm:text-3xl lg:text-4xl">
          Create Your Account
        </h1>
        <span className="mb-6 block px-4 text-center text-base text-gray-600 sm:mb-8 sm:text-lg">
          Join the FilmGearHub community and start connecting with the film
          industry
        </span>
        <form
          onSubmit={handleSubmit(onSubmit)}
          className="flex w-full flex-col gap-6 rounded-2xl bg-white p-6 shadow-lg sm:p-8"
        >
          {/* Account Type Selection */}
          <Controller
            name="type"
            control={control}
            render={({ field }) => (
              <div>
                <span className="mb-3 block text-sm font-semibold text-gray-700">
                  I want to join as:
                </span>
                <UserTypeSelector
                  selectedType={field.value}
                  setSelectedType={field.onChange}
                  cameraIcon={cameraIcon}
                  homeIcon={homeIcon}
                />
                {errors.type && (
                  <p className="mt-2 text-sm text-red-500">
                    {errors.type.message}
                  </p>
                )}
              </div>
            )}
          />
          {/* Email */}
          <AuthInput
            id="email"
            label="Email Address"
            type="email"
            placeholder="Enter your email address"
            error={errors.email?.message}
            {...register("email")}
          />
          {/* Password */}
          <AuthInput
            id="password"
            label="Password"
            type={showPassword ? "text" : "password"}
            placeholder="Create a strong password"
            error={errors.password?.message}
            rightAdornment={
              <button
                type="button"
                tabIndex={-1}
                className="focus:outline-none"
                aria-label={showPassword ? "Hide password" : "Show password"}
                onClick={() => setShowPassword((prev) => !prev)}
              >
                {showPassword ? (
                  <EyeOff className="h-5 w-5 text-gray-500" />
                ) : (
                  <Eye className="h-5 w-5 text-gray-500" />
                )}
              </button>
            }
            {...register("password")}
          />
          {/* Confirm Password */}
          <AuthInput
            id="confirm-password"
            label="Confirm Password"
            type={showConfirmPassword ? "text" : "password"}
            placeholder="Confirm your password"
            error={errors.confirmPassword?.message}
            rightAdornment={
              <button
                type="button"
                tabIndex={-1}
                className="focus:outline-none"
                aria-label={
                  showConfirmPassword ? "Hide password" : "Show password"
                }
                onClick={() => setShowConfirmPassword((prev) => !prev)}
              >
                {showConfirmPassword ? (
                  <EyeOff className="h-5 w-5 text-gray-500" />
                ) : (
                  <Eye className="h-5 w-5 text-gray-500" />
                )}
              </button>
            }
            {...register("confirmPassword")}
          />
          {/* Terms and Conditions */}
          <Controller
            name="agreeToTerms"
            control={control}
            render={({ field }) => (
              <CheckboxWithLink
                checked={field.value}
                onCheckedChange={field.onChange}
                termsUrl="/terms"
                privacyUrl="/privacy"
              />
            )}
          />
          {errors.agreeToTerms && (
            <p className="mt-2 text-sm text-red-500">
              {errors.agreeToTerms.message}
            </p>
          )}
          {/* Submit Button */}
          <SubmitButton isFormValid={isValid}>Create Account</SubmitButton>
          <div className="mt-6 flex w-full justify-center border-t border-gray-200 pt-6">
            <span className="text-base text-gray-600">
              Already have an account?{" "}
              <Link
                to="/login"
                className="h-auto p-0 text-base font-normal text-sky-600 underline"
              >
                Log In
              </Link>
            </span>
          </div>
        </form>
      </div>
    </div>
  )
}

export default CreateAccountForm

import React, { useState } from "react"
import { Link, useNavigate } from "react-router-dom"

import { useToast } from "@/hooks/use-toast"
import { Eye, EyeOff } from "lucide-react"

import cameraIcon from "@/assets/images/ui/icons/camera.svg"
import homeIcon from "@/assets/images/ui/icons/home.svg"

import { UserTypeSelector } from "@/components/auth/user-type-selector"
import { AuthInput } from "@/components/auth/auth-input"
import { CheckboxWithLink } from "@/components/auth/checkbox-with-link"
import { SubmitButton } from "@/components/auth/submit-button"

const CreateAccountForm: React.FC = () => {
  const [selectedType, setSelectedType] = useState<
    "renter" | "merchant" | null
  >(null)
  const [showPassword, setShowPassword] = useState(false)
  const [showConfirmPassword, setShowConfirmPassword] = useState(false)
  const { toast } = useToast()
  const navigate = useNavigate()

  // Form state
  const [formData, setFormData] = useState({
    email: "",
    password: "",
    confirmPassword: "",
    agreeToTerms: false,
  })

  // Validation state
  const [errors, setErrors] = useState({
    email: "",
    password: "",
    confirmPassword: "",
    type: "",
  })

  // Handle input changes
  const handleInputChange = (field: string, value: string | boolean) => {
    setFormData((prev) => ({
      ...prev,
      [field]: value,
    }))

    // Clear error when user starts typing
    if (field !== "agreeToTerms") {
      setErrors((prev) => ({
        ...prev,
        [field]: "",
      }))
    }
  }

  // Validation function
  const validateForm = () => {
    const newErrors = {
      email: "",
      password: "",
      confirmPassword: "",
      type: "",
    }

    // Check account type
    if (!selectedType) {
      newErrors.type = "Please select an account type"
    }

    // Check email
    if (!formData.email.trim()) {
      newErrors.email = "Email is required"
    } else if (!/\S+@\S+\.\S+/.test(formData.email)) {
      newErrors.email = "Please enter a valid email address"
    }

    // Check password
    if (!formData.password) {
      newErrors.password = "Password is required"
    } else if (formData.password.length < 8) {
      newErrors.password = "Password must be at least 8 characters"
    }

    // Check confirm password
    if (!formData.confirmPassword) {
      newErrors.confirmPassword = "Please confirm your password"
    } else if (formData.password !== formData.confirmPassword) {
      newErrors.confirmPassword = "Passwords do not match"
    }

    setErrors(newErrors)
    return (
      !newErrors.email &&
      !newErrors.password &&
      !newErrors.confirmPassword &&
      !newErrors.type
    )
  }

  // Handle form submission
  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()

    if (validateForm() && formData.agreeToTerms) {
      // Form is valid, proceed with submission
      console.log("Form submitted:", { selectedType, ...formData })
      toast({
        title: "Success!",
        description: "Account created successfully!",
      })
      // Add your submission logic here
      setTimeout(() => {
        navigate("/email-verify")
      }, 1000)
    } else if (!formData.agreeToTerms) {
      // Show terms agreement error
      toast({
        variant: "destructive",
        title: "Terms Required",
        description: "Please agree to the Terms of Service and Privacy Policy",
      })
    } else {
      // Show validation errors
      validateForm()
      toast({
        variant: "destructive",
        title: "Validation Error",
        description: "Please fix the validation errors above",
      })
    }
  }

  // Check if form is valid for button state
  const isFormValid =
    selectedType &&
    formData.email.trim() &&
    formData.password &&
    formData.confirmPassword &&
    formData.password === formData.confirmPassword &&
    formData.agreeToTerms

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
          onSubmit={handleSubmit}
          className="flex w-full flex-col gap-6 rounded-2xl bg-white p-6 shadow-lg sm:p-8"
        >
          {/* Account Type Selection */}
          <div>
            <span className="mb-3 block text-sm font-semibold text-gray-700">
              I want to join as:
            </span>
            <UserTypeSelector
              selectedType={selectedType}
              setSelectedType={setSelectedType}
              setErrors={setErrors}
              cameraIcon={cameraIcon}
              homeIcon={homeIcon}
            />
            {errors.type && (
              <p className="mt-2 text-sm text-red-500">{errors.type}</p>
            )}
          </div>
          {/* Email */}
          <AuthInput
            id="email"
            label="Email Address"
            type="email"
            value={formData.email}
            onChange={(e) => handleInputChange("email", e.target.value)}
            placeholder="Enter your email address"
            error={errors.email}
          />
          {/* Password */}
          <AuthInput
            id="password"
            label="Password"
            type={showPassword ? "text" : "password"}
            value={formData.password}
            onChange={(e) => handleInputChange("password", e.target.value)}
            placeholder="Create a strong password"
            error={errors.password}
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
          />
          {/* Confirm Password */}
          <AuthInput
            id="confirm-password"
            label="Confirm Password"
            type={showConfirmPassword ? "text" : "password"}
            value={formData.confirmPassword}
            onChange={(e) =>
              handleInputChange("confirmPassword", e.target.value)
            }
            placeholder="Confirm your password"
            error={errors.confirmPassword}
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
          />
          {/* Terms and Conditions */}
          <CheckboxWithLink
            checked={formData.agreeToTerms}
            onCheckedChange={(checked) =>
              handleInputChange("agreeToTerms", checked as boolean)
            }
            termsUrl="/terms"
            privacyUrl="/privacy"
          />
          {/* Submit Button */}
          <SubmitButton isFormValid={isFormValid}>Create Account</SubmitButton>
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

export { CreateAccountForm }

import React, { useState } from "react"
import { Link, useNavigate } from "react-router-dom"

import { Button } from "@/components/ui/button"
import { useToast } from "@/hooks/use-toast"
import { Eye, EyeOff } from "lucide-react"

export default function Body() {
  const { toast } = useToast()
  const navigate = useNavigate()
  const [showPassword, setShowPassword] = useState(false)
  const [formData, setFormData] = useState({
    email: "",
    password: "",
  })
  const [errors, setErrors] = useState({
    email: "",
    password: "",
  })

  // Handle input changes
  const handleInputChange = (field: string, value: string) => {
    setFormData((prev) => ({ ...prev, [field]: value }))
    setErrors((prev) => ({ ...prev, [field]: "" }))
  }

  // Validation function
  const validateForm = () => {
    let valid = true
    const newErrors = { email: "", password: "" }
    if (!formData.email.trim()) {
      newErrors.email = "Email is required"
      valid = false
    } else if (!/\S+@\S+\.\S+/.test(formData.email)) {
      newErrors.email = "Please enter a valid email address"
      valid = false
    }
    if (!formData.password) {
      newErrors.password = "Password is required"
      valid = false
    }
    setErrors(newErrors)
    return valid
  }

  // Handle form submission
  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    if (validateForm()) {
      toast({
        title: "Login Successful!",
        description: "You have logged in successfully.",
      })
      // Simulate submission
      console.log("Login submitted:", formData)
      navigate("/")
    } else {
      // Show first error as toast
      if (errors.email) {
        toast({
          variant: "destructive",
          title: "Validation Error",
          description: errors.email,
        })
      } else if (errors.password) {
        toast({
          variant: "destructive",
          title: "Validation Error",
          description: errors.password,
        })
      } else {
        toast({
          variant: "destructive",
          title: "Validation Error",
          description: "Please fill in all required fields.",
        })
      }
    }
  }

  return (
    <div className="mx-auto flex w-full max-w-screen-2xl flex-col items-center bg-transparent px-4 py-8 sm:py-12 lg:py-16">
      <div className="flex w-full max-w-md flex-col items-center pt-12 md:pt-0">
        <h1 className="mb-4 text-center text-2xl font-bold text-gray-800 sm:text-3xl lg:text-4xl">
          Log In to FilmGearHub
        </h1>
        <span className="mb-6 block px-4 text-center text-base text-gray-600 sm:mb-8 sm:text-lg">
          Welcome back! Sign in to access your account
        </span>
        <form
          onSubmit={handleSubmit}
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
            <input
              id="email"
              type="email"
              value={formData.email}
              onChange={(e) => handleInputChange("email", e.target.value)}
              placeholder="Enter your email address"
              className={`h-12 w-full rounded-md border bg-white px-4 text-base text-gray-900 placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-sky-500 ${
                errors.email ? "border-red-500" : "border-gray-300"
              }`}
            />
            {errors.email && (
              <p className="mt-1 text-sm text-red-500">{errors.email}</p>
            )}
          </div>
          {/* Password */}
          <div>
            <label
              className="mb-2 block text-sm font-semibold text-gray-700"
              htmlFor="password"
            >
              Password
            </label>
            <div className="relative">
              <input
                id="password"
                type={showPassword ? "text" : "password"}
                value={formData.password}
                onChange={(e) => handleInputChange("password", e.target.value)}
                placeholder="Enter your password"
                className={`h-12 w-full rounded-md border bg-white px-4 pr-10 text-base text-gray-900 placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-sky-500 ${
                  errors.password ? "border-red-500" : "border-gray-300"
                }`}
              />
              <button
                type="button"
                tabIndex={-1}
                className="absolute right-3 top-1/2 -translate-y-1/2 focus:outline-none"
                aria-label={showPassword ? "Hide password" : "Show password"}
                onClick={() => setShowPassword((prev) => !prev)}
              >
                {showPassword ? (
                  <EyeOff className="h-4 w-4 text-gray-500" />
                ) : (
                  <Eye className="h-4 w-4 text-gray-500" />
                )}
              </button>
            </div>
            {errors.password && (
              <p className="mt-1 text-sm text-red-500">{errors.password}</p>
            )}
          </div>

          <Link
            to="/reset-password"
            className="h-auto p-0 text-right text-base font-normal text-sky-600 underline"
          >
            Forgot Password?
          </Link>
          {/* Submit Button */}
          <Button
            type="submit"
            className={`mt-2 flex h-12 w-full items-center justify-center rounded-md bg-sky-600 text-base font-semibold text-white hover:bg-sky-700`}
          >
            Log In
          </Button>
          <div className="flex w-full justify-center border-t border-gray-200 pt-6">
            <span className="text-base text-gray-600">
              Don't have an account?{" "}
              <Link
                to="/signup"
                className="h-auto p-0 text-base font-normal text-sky-600 underline"
              >
                Sign Up
              </Link>
            </span>
          </div>
        </form>
      </div>
    </div>
  )
}

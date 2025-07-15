import React, { useState } from "react";
import { Link, useNavigate } from "react-router-dom";

import { Button } from "@/components/ui/button";
import { Checkbox } from "@/components/ui/checkbox";
import { useToast } from "@/hooks/use-toast";
import { Eye, EyeOff } from "lucide-react";

import cameraIcon from "@/assets/images/ui/icons/camera.svg";
import homeIcon from "@/assets/images/ui/icons/home.svg";

export default function Body() {
  const [selectedType, setSelectedType] = useState<
    "renter" | "merchant" | null
  >(null);
  const [showPassword, setShowPassword] = useState(false);
  const [showConfirmPassword, setShowConfirmPassword] = useState(false);
  const { toast } = useToast();
  const navigate = useNavigate();

  // Form state
  const [formData, setFormData] = useState({
    email: "",
    password: "",
    confirmPassword: "",
    agreeToTerms: false,
  });

  // Validation state
  const [errors, setErrors] = useState({
    email: "",
    password: "",
    confirmPassword: "",
    type: "",
  });

  // Handle input changes
  const handleInputChange = (field: string, value: string | boolean) => {
    setFormData((prev) => ({
      ...prev,
      [field]: value,
    }));

    // Clear error when user starts typing
    if (field !== "agreeToTerms") {
      setErrors((prev) => ({
        ...prev,
        [field]: "",
      }));
    }
  };

  // Validation function
  const validateForm = () => {
    const newErrors = {
      email: "",
      password: "",
      confirmPassword: "",
      type: "",
    };

    // Check account type
    if (!selectedType) {
      newErrors.type = "Please select an account type";
    }

    // Check email
    if (!formData.email.trim()) {
      newErrors.email = "Email is required";
    } else if (!/\S+@\S+\.\S+/.test(formData.email)) {
      newErrors.email = "Please enter a valid email address";
    }

    // Check password
    if (!formData.password) {
      newErrors.password = "Password is required";
    } else if (formData.password.length < 8) {
      newErrors.password = "Password must be at least 8 characters";
    }

    // Check confirm password
    if (!formData.confirmPassword) {
      newErrors.confirmPassword = "Please confirm your password";
    } else if (formData.password !== formData.confirmPassword) {
      newErrors.confirmPassword = "Passwords do not match";
    }

    setErrors(newErrors);
    return (
      !newErrors.email &&
      !newErrors.password &&
      !newErrors.confirmPassword &&
      !newErrors.type
    );
  };

  // Handle form submission
  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();

    if (validateForm() && formData.agreeToTerms) {
      // Form is valid, proceed with submission
      console.log("Form submitted:", { selectedType, ...formData });
      toast({
        title: "Success!",
        description: "Account created successfully!",
      });
      // Add your submission logic here
      setTimeout(() => {
        navigate("/email-verify");
      }, 1000);
    } else if (!formData.agreeToTerms) {
      // Show terms agreement error
      toast({
        variant: "destructive",
        title: "Terms Required",
        description: "Please agree to the Terms of Service and Privacy Policy",
      });
    } else {
      // Show validation errors
      validateForm();
      toast({
        variant: "destructive",
        title: "Validation Error",
        description: "Please fix the validation errors above",
      });
    }
  };

  // Check if form is valid for button state
  const isFormValid =
    selectedType &&
    formData.email.trim() &&
    formData.password &&
    formData.confirmPassword &&
    formData.password === formData.confirmPassword &&
    formData.agreeToTerms;

  return (
    <div className="w-full max-w-screen-2xl min-h-screen bg-transparent mx-auto flex flex-col items-center py-8 sm:py-12 lg:py-16 px-4">
      <div className="w-full max-w-md flex flex-col items-center">
        <h1 className="font-bold text-2xl sm:text-3xl lg:text-4xl text-gray-800 text-center mb-4">
          Create Your Account
        </h1>
        <span className="block text-base sm:text-lg text-gray-600 text-center mb-6 sm:mb-8 px-4">
          Join the FilmGearHub community and start connecting with the film
          industry
        </span>
        <form
          onSubmit={handleSubmit}
          className="w-full bg-white rounded-2xl shadow-lg p-6 sm:p-8 flex flex-col gap-6"
        >
          {/* Account Type Selection */}
          <div>
            <span className="block text-sm font-semibold text-gray-700 mb-3">
              I want to join as:
            </span>
            <div className="flex gap-4">
              {["renter", "merchant"].map((type) => {
                const isSelected = selectedType === type;
                const icon = type === "renter" ? cameraIcon : homeIcon;
                const label = type === "renter" ? "Renter" : "Merchant";
                const desc =
                  type === "renter"
                    ? "Find & rent equipment"
                    : "List & rent equipment";
                return (
                  <button
                    key={type}
                    type="button"
                    onClick={() => {
                      setSelectedType(type);
                      setErrors((prev) => ({ ...prev, type: "" }));
                    }}
                    className={
                      `flex-1 rounded-xl border-2 transition-colors flex flex-col items-center py-6 px-2 cursor-pointer ` +
                      (isSelected
                        ? "border-sky-500 bg-sky-50"
                        : "border-gray-200 hover:border-sky-500 bg-white")
                    }
                    aria-pressed={isSelected}
                  >
                    <div className="bg-sky-100 rounded-full flex items-center justify-center w-12 h-12 mb-3">
                      <img src={icon} alt={label} className="w-6 h-5" />
                    </div>
                    <span className="font-medium text-base text-gray-900 mb-1">
                      {label}
                    </span>
                    <span className="text-xs text-gray-500 text-center">
                      {desc}
                    </span>
                  </button>
                );
              })}
            </div>
            {errors.type && (
              <p className="text-red-500 text-sm mt-2">{errors.type}</p>
            )}
          </div>
          {/* Email */}
          <div>
            <label
              className="block text-sm font-semibold text-gray-700 mb-2"
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
              className={`w-full h-12 px-4 rounded-md border bg-white text-base text-gray-900 placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-sky-500 ${
                errors.email ? "border-red-500" : "border-gray-300"
              }`}
            />
            {errors.email && (
              <p className="text-red-500 text-sm mt-1">{errors.email}</p>
            )}
          </div>
          {/* Password */}
          <div>
            <label
              className="block text-sm font-semibold text-gray-700 mb-2"
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
                placeholder="Create a strong password"
                className={`w-full h-12 px-4 rounded-md border bg-white text-base text-gray-900 placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-sky-500 pr-10 ${
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
                  <EyeOff className="w-4 h-4 text-gray-500" />
                ) : (
                  <Eye className="w-4 h-4 text-gray-500" />
                )}
              </button>
            </div>
            {errors.password && (
              <p className="text-red-500 text-sm mt-1">{errors.password}</p>
            )}
          </div>
          {/* Confirm Password */}
          <div>
            <label
              className="block text-sm font-semibold text-gray-700 mb-2"
              htmlFor="confirm-password"
            >
              Confirm Password
            </label>
            <div className="relative">
              <input
                id="confirm-password"
                type={showConfirmPassword ? "text" : "password"}
                value={formData.confirmPassword}
                onChange={(e) =>
                  handleInputChange("confirmPassword", e.target.value)
                }
                placeholder="Confirm your password"
                className={`w-full h-12 px-4 rounded-md border bg-white text-base text-gray-900 placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-sky-500 pr-10 ${
                  errors.confirmPassword ? "border-red-500" : "border-gray-300"
                }`}
              />
              <button
                type="button"
                tabIndex={-1}
                className="absolute right-3 top-1/2 -translate-y-1/2 focus:outline-none"
                aria-label={
                  showConfirmPassword ? "Hide password" : "Show password"
                }
                onClick={() => setShowConfirmPassword((prev) => !prev)}
              >
                {showConfirmPassword ? (
                  <EyeOff className="w-4 h-4 text-gray-500" />
                ) : (
                  <Eye className="w-4 h-4 text-gray-500" />
                )}
              </button>
            </div>
            {errors.confirmPassword && (
              <p className="text-red-500 text-sm mt-1">
                {errors.confirmPassword}
              </p>
            )}
          </div>
          {/* Terms and Conditions */}
          <div className="flex items-center gap-2">
            <label className="flex items-center gap-2 cursor-pointer">
              <Checkbox
                checked={formData.agreeToTerms}
                onCheckedChange={(checked) =>
                  handleInputChange("agreeToTerms", checked as boolean)
                }
                className="w-4 h-4 rounded border border-black data-[state=checked]:bg-sky-600 data-[state=checked]:border-sky-600"
              />
              <span className="text-sm text-gray-700 select-none">
                I agree to the{" "}
                <a
                  href="#"
                  className="text-sky-600 underline hover:text-sky-700 transition-colors"
                >
                  Terms of Service
                </a>{" "}
                and{" "}
                <a
                  href="#"
                  className="text-sky-600 underline hover:text-sky-700 transition-colors"
                >
                  Privacy Policy
                </a>
              </span>
            </label>
          </div>
          {/* Submit Button */}
          <Button
            type="submit"
            className={`w-full h-12 rounded-md mt-2 flex items-center justify-center text-base font-semibold ${
              isFormValid
                ? "bg-sky-600 text-white hover:bg-sky-700"
                : "bg-sky-600 text-white hover:bg-sky-700 opacity-80"
            }`}
          >
            Create Account
          </Button>
          <div className="w-full flex justify-center mt-6 border-t border-gray-200 pt-6">
            <span className="text-base text-gray-600">
              Already have an account?{" "}
              <Link
                to="/login"
                className="font-normal text-sky-600 text-base underline p-0 h-auto"
              >
                Log In
              </Link>
            </span>
          </div>
        </form>
      </div>
    </div>
  );
}

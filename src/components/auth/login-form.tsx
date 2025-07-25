import React, { useState } from "react"
import { Link, useNavigate } from "react-router-dom"
import { useForm } from "react-hook-form"
import { zodResolver } from "@hookform/resolvers/zod"
import { z } from "zod"
import { Eye, EyeOff } from "lucide-react"
import { AuthInput } from "@/components/auth/auth-input"
import { SubmitButton } from "@/components/auth/submit-button"
import { useToast } from "@/hooks/use-toast"

const loginSchema = z.object({
  email: z
    .string()
    .min(1, "Email is required")
    .email("Please enter a valid email address"),
  password: z.string().min(1, "Password is required"),
})

type LoginSchema = z.infer<typeof loginSchema>

const LogInForm: React.FC = () => {
  const { toast } = useToast()
  const navigate = useNavigate()
  const [showPassword, setShowPassword] = useState(false)
  const [isLoading, setIsLoading] = useState(false)

  const {
    register,
    handleSubmit,
    formState: { errors, isValid },
  } = useForm<LoginSchema>({
    resolver: zodResolver(loginSchema),
    mode: "onChange",
  })

  const onSubmit = async (data: LoginSchema) => {
    setIsLoading(true);
    try {
      const response = await fetch("http://localhost:8000/api/token/", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          email: data.email,
          password: data.password,
        }),
      });

      if (!response.ok) {
        const errorData = await response.json();
        throw new Error(errorData.detail || errorData.message || "Login failed");
      }

      const result = await response.json();
      console.log("result", result);

      if (!result.is_verified) {
        toast({
          title: "Email Not Verified",
          description: "Please verify your email before logging in.",
          variant: "destructive",
        });
        navigate("/email-verify", { state: { email: data.email } });
        return;
      }

      // Store tokens in localStorage
      localStorage.setItem("accessToken", result.access);
      localStorage.setItem("refreshToken", result.refresh);

      toast({
        title: "Login Successful!",
        description: "You have logged in successfully.",
      });

      // Redirect based on user type/role if available
      if (result.role === "renter") {
        navigate("/renter-dashboard");
      } else {
        navigate("/merchant-dashboard");
      }
    } catch (error: any) {
      toast({
        title: "Login Failed",
        description: error.message || "Invalid email or password.",
        variant: "destructive",
      });
    } finally {
      setIsLoading(false);
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
          onSubmit={handleSubmit(onSubmit)}
          className="flex w-full flex-col gap-6 rounded-2xl bg-white p-6 shadow-lg sm:p-8"
        >
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
            placeholder="Enter your password"
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

          <Link
            to="/reset-password"
            className="h-auto p-0 text-right text-base font-normal text-sky-600 underline"
          >
            Forgot Password?
          </Link>
          {/* Submit Button */}
          <SubmitButton isFormValid={isValid} disabled={isLoading}>
            {isLoading ? "Logging in..." : "Log In"}
          </SubmitButton>
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

export default LogInForm

import React, { useState } from "react";
import { Link } from "react-router-dom";
import { Button } from "@/src/components/ui/button";
import { useToast } from "@/src/hooks/use-toast";
import messageIcon from "@/public/assets/icons/message.svg";
import lockIcon from "@/public/assets/icons/Lock.svg";

export default function ResetPassBody() {
  const { toast } = useToast();
  const [email, setEmail] = useState("");
  const [error, setError] = useState("");

  // Validation function
  const validateEmail = () => {
    if (!email.trim()) {
      setError("Email is required");
      return false;
    } else if (!/\S+@\S+\.\S+/.test(email)) {
      setError("Please enter a valid email address");
      return false;
    }
    setError("");
    return true;
  };

  // Handle form submission
  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (validateEmail()) {
      toast({
        title: "Reset Link Sent!",
        description: "A password reset link has been sent to your email.",
      });
      // Simulate submission
      console.log("Reset password for:", email);
    } else {
      toast({
        variant: "destructive",
        title: "Validation Error",
        description: error || "Please enter a valid email address.",
      });
    }
  };

  return (
    <div className="w-full max-w-screen-2xl bg-transparent mx-auto flex flex-col items-center py-8 sm:py-12 lg:py-16 px-4">
      <div className="pt-12 md:pt-0 relative w-full max-w-md flex flex-col items-center">
        <div className="w-16 h-16 bg-sky-100 rounded-full relative z-10">
          <div className="relative z-10 mt-4 flex justify-center items-center">
            <img src={lockIcon} alt="Lock Icon" />
          </div>
        </div>
        <div className="mt-4">
          <h1 className="font-bold text-2xl sm:text-3xl lg:text-4xl text-gray-800 text-center mb-4">
            Reset Your Password
          </h1>
        </div>
        <span className="block text-base sm:text-lg text-gray-600 text-center mb-6 sm:mb-8">
          Enter your email address and we'll send you a link to reset your password
        </span>
        <form onSubmit={handleSubmit} className="w-full bg-white rounded-2xl shadow-lg p-6 sm:p-8 flex flex-col gap-6">
          {/* Email */}
          <div>
            <label className="block text-sm font-semibold text-gray-700 mb-2" htmlFor="email">
              Email Address
            </label>
            <div className="relative">
              <img
                src={messageIcon}
                alt="Message Icon"
                className="absolute left-3 top-1/2 -translate-y-1/2 w-4 h-4"
              />
              <input
                id="email"
                type="email"
                value={email}
                onChange={e => { setEmail(e.target.value); setError(""); }}
                placeholder="Enter your email address"
                className={`pl-10 w-full h-12 px-4 rounded-md border bg-white text-base text-gray-900 placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-sky-500 ${error ? "border-red-500" : "border-gray-300"}`}
              />
            </div>
            {error && <p className="text-red-500 text-sm mt-1">{error}</p>}
          </div>
          {/* Reset Button */}
          <Button
            type="submit"
            className={`w-full h-12 rounded-md mt-2 flex items-center justify-center text-base font-semibold bg-sky-600 text-white hover:bg-sky-700`}
          >
            Send Reset Link
          </Button>
          <div className="w-full flex justify-center border-t border-gray-200 pt-5">
            <span className="text-base text-gray-600">
              Remember your password?{" "}
              <Link
                to="/login"
                className="font-normal text-sky-600 text-base underline p-0 h-auto"
              >
                Back to Log In
              </Link>
            </span>
          </div>
        </form>
      </div>
    </div>
  );
}
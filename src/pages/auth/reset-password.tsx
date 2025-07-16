import React from "react"
import { Link } from "react-router-dom"
import "@/styles/global.css"

import { Button } from "@/components/ui/button"

import { AuthHeader } from "@/components/layout/header/auth-header"
import { ResetPasswordForm } from "@/components/auth/reset-password-form"

const ResetPassword: React.FC = () => {
  return (
    <div className="relative min-h-screen w-full rounded-lg bg-white">
      <div className="min-h-screen w-full bg-gray-50">
        <AuthHeader>
          <div className="flex flex-col items-end gap-1 sm:flex-row sm:items-center sm:gap-8">
            <span className="text-sm font-normal leading-6 text-muted-foreground sm:text-base">
              New to FilmGearHub?
            </span>
            <Button
              asChild
              variant="link"
              className="h-auto p-0 pr-0 text-sm font-medium text-sky-700 no-underline hover:no-underline sm:pr-[8.8px] sm:text-base"
            >
              <Link to="/signup" className="no-underline hover:no-underline">
                Sign Up
              </Link>
            </Button>
          </div>
        </AuthHeader>
        <ResetPasswordForm />
      </div>
    </div>
  )
}

export { ResetPassword }

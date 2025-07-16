import React from "react"
import "@/styles/global.css"
import { Link } from "react-router-dom"
import { Button } from "@/components/ui/button"
import { AuthHeader } from "@/components/layout/header/auth-header"
import EmailVerifyForm from "@/components/auth/email-verify-form"

const EmailVerify: React.FC = () => {
  return (
    <div className="relative min-h-screen w-full rounded-lg bg-white">
      <div className="min-h-screen w-full bg-gray-50">
        <AuthHeader>
          <div className="mt-0 flex w-full flex-col items-end gap-1 text-center sm:mt-0 sm:w-auto sm:flex-row sm:items-center sm:gap-6 sm:text-left">
            <span className="text-sm font-normal leading-6 text-muted-foreground sm:text-base">
              Need help?
            </span>
            <Button
              asChild
              variant="link"
              className="h-auto p-0 pr-0 text-sm font-medium text-sky-700 no-underline hover:no-underline sm:pr-[8.8px] sm:text-base"
            >
              <Link
                to="mailto:support@filmgearhub.com"
                className="no-underline hover:no-underline"
              >
                Contact Support
              </Link>
            </Button>
          </div>
        </AuthHeader>
        <EmailVerifyForm />
      </div>
    </div>
  )
}

export { EmailVerify }

import React from "react"
import "@/styles/global.css"
import { Link } from "react-router-dom"

import { Button } from "@/components/ui/button"

import { AuthHeader } from "@/components/layout/header/auth-header"
import CreateAccountForm from "@/components/auth/create-account-form"

const CreateAccount: React.FC = () => {
  return (
    <div className="relative min-h-screen w-full rounded-lg bg-white">
      <div className="min-h-screen w-full bg-gray-50">
        <AuthHeader>
          <div className="flex flex-col items-end gap-1 sm:flex-row sm:items-center sm:gap-8">
            <span className="text-sm font-normal leading-6 text-muted-foreground sm:text-base">
              Already have an account?
            </span>
            <Button
              asChild
              variant="link"
              className="h-auto p-0 pr-0 text-sm font-medium text-sky-700 no-underline hover:no-underline sm:pr-[8.8px] sm:text-base"
            >
              <Link to="/login" className="no-underline hover:no-underline">
                Log In
              </Link>
            </Button>
          </div>
        </AuthHeader>
        <CreateAccountForm />
      </div>
    </div>
  )
}

export { CreateAccount }

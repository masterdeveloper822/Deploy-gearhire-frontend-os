import React from "react"
import "@/styles/global.css"
import { Link } from "react-router-dom"

import { AuthHeader } from "@/components/layout/header/auth-header"
import HeroSection from "@/components/hero/heroSection"
import HowItWork from "@/components/how-it-work/how-it-work"
import Benefit from "@/components/benefit/benefit"
import Waitlist from "@/components/waitlist/waitlist"
import { UsersSay } from "@/components/users-say/users-say"
import ReadyToTransform from "@/components/ready-to-transform/ready-to-transform"
import Footer from "@/components/layout/footer/footer"

import { NavLink } from "@/components/ui/nav-link"
import { Button } from "@/components/ui/button"

const LandingPage: React.FC = () => {
  return (
    <div className="main-container relative flex min-h-screen w-full flex-col overflow-hidden rounded-lg bg-gray-50">
      <AuthHeader>
        <div className="flex items-center gap-4">
          <div className="hidden items-center gap-4 md:flex">
            <NavLink href="#how-it-works">How It Works</NavLink>
            <NavLink href="#benefits">Benefits</NavLink>
            <NavLink href="#waitlist">Waitlist</NavLink>
          </div>
          <div className="flex items-center">
            <div className="flex items-center">
              <Button
                variant="white_sky"
                size="custom1"
                className="h-9 rounded-lg px-4 py-2 text-base font-normal leading-5 md:h-11"
              >
                <Link to="/login">Log In</Link>
              </Button>
              <Button
                variant="tertiary"
                className="ml-1 h-9 rounded-lg px-4 py-2 text-base font-normal leading-5 md:ml-3 md:h-11"
              >
                <Link to="/signup">Sign Up</Link>
              </Button>
            </div>
          </div>
        </div>
      </AuthHeader>
      <main className="mx-auto w-full max-w-screen-xl flex-1 px-4 sm:px-8 md:px-10">
        <HeroSection />
        <HowItWork />
        <Benefit />
        <Waitlist />
      </main>
      <UsersSay />
      <ReadyToTransform />
      <Footer />
    </div>
  )
}

export { LandingPage }

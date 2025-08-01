import React from "react"
import "@/styles/global.css"

import { AuthHeader } from "@/components/layout/header/auth-header"
import HeroSection from "@/components/hero/heroSection"
import HowItWork from "@/components/how-it-work/how-it-work"
import Benefit from "@/components/benefit/benefit"
import Waitlist from "@/components/waitlist/waitlist"
import { UsersSay } from "@/components/users-say/users-say"
import ReadyToTransform from "@/components/ready-to-transform/ready-to-transform"
import Footer from "@/components/layout/footer/footer"

const LandingPage: React.FC = () => {
  return (
    <div className="main-container relative flex min-h-screen w-full flex-col overflow-hidden rounded-lg bg-gray-50">
      <AuthHeader />
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

import { CommonFooter } from "@/components/layout/footer/common"
import { AuthHeader } from "@/components/layout/header/auth-header"
import { Button } from "@/components/ui/button"
import { Card } from "@/components/ui/card"
import { BackArrowIcon } from "@/components/ui/icon"
import { faBox, faCircleCheck, faComments, faCreditCard, faEnvelope, faHeadset, faMagnifyingGlass, faPaperPlane, faStar } from "@fortawesome/free-solid-svg-icons"
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"
import React from "react"
import { useNavigate } from "react-router-dom"

export default function SubscriptionPage() {
  const navigate = useNavigate()
  const [showToast, setShowToast] = React.useState(false)

  const handleActivateSubscription = () => {
    setShowToast(true)

    // Hide toast after 2 seconds
    setTimeout(() => {
      setShowToast(false)
    }, 2000)
  }

  return (
    <div className="min-h-screen bg-gray-50">
      <AuthHeader />

      <main className="relative flex min-h-[calc(100vh-64px)] items-center justify-center px-4 pb-20 pt-8 sm:px-6 lg:px-8">
        <div className="w-full max-w-4xl px-4">
          {/* Back Button and Title */}
          <div className="mb-8 flex items-center justify-center">
            <button
              className="mr-3 rounded px-2"
              onClick={() => navigate(-1)}
              aria-label="Back"
            >
              <BackArrowIcon />
            </button>
            <h1 className="mb-2 text-center text-3xl font-bold text-gray-800 sm:text-4xl">
              Activate Your Merchant Subscription
            </h1>
          </div>

          {/* Subtitle and Description */}
          <div className="mb-8 text-center">
            <h2 className="mb-4 text-2xl font-semibold text-gray-800">
              Unlock Merchant Features
            </h2>
            <p className="mx-auto max-w-2xl text-lg text-gray-600">
              Get full access to your profile, RFQ responses, inventory listing,
              and more to grow your film equipment rental business.
            </p>
          </div>

          {/* Benefits and Pricing Cards */}
          <div className="mb-8 grid gap-8 lg:grid-cols-2">
            {/* Benefits Card */}
            <Card className="rounded-lg bg-white p-6 shadow-sm">
              <h3 className="mb-6 text-xl font-semibold text-gray-800">
                Subscription Benefits
              </h3>

              <div className="space-y-6">
                {/* Benefit 1 */}
                <div className="flex items-start space-x-4">
                  <div className="text-tertiary flex h-10 w-10 items-center justify-center rounded-lg bg-sky-100">
                    <FontAwesomeIcon
                      alt="Search icon"
                      className="h-4 w-4"
                      icon={faMagnifyingGlass}
                    />
                  </div>
                  <div className="flex-1">
                    <h4 className="font-medium text-gray-800">
                      Appear in Equipment Search
                    </h4>
                    <p className="mt-1 text-sm text-gray-600">
                      Your inventory becomes visible to renters searching for
                      equipment
                    </p>
                  </div>
                </div>

                {/* Benefit 2 */}
                <div className="flex items-start space-x-4">
                  <div className="flex h-10 w-10 items-center justify-center rounded-lg bg-sky-100">
                    <FontAwesomeIcon alt="RFQ icon" className="text-tertiary h-4 w-4" icon={faPaperPlane} />
                  </div>
                  <div className="flex-1">
                    <h4 className="font-medium text-gray-800">
                      Respond to RFQs
                    </h4>
                    <p className="mt-1 text-sm text-gray-600">
                      Submit quotes to rental requests from filmmakers and
                      production teams
                    </p>
                  </div>
                </div>

                {/* Benefit 3 */}
                <div className="flex items-start space-x-4">
                  <div className="flex text-tertiary h-10 w-10 items-center justify-center rounded-lg bg-sky-100">
                    <FontAwesomeIcon
                      alt="Message icon"
                      className="h-4 w-5"
                      icon={faComments}
                    />
                  </div>
                  <div className="flex-1">
                    <h4 className="font-medium text-gray-800">
                      Messaging & Communication
                    </h4>
                    <p className="mt-1 text-sm text-gray-600">
                      Receive and reply to messages from potential renters
                    </p>
                  </div>
                </div>

                {/* Benefit 4 */}
                <div className="flex items-start space-x-4">
                  <div className="text-tertiary flex h-10 w-10 items-center justify-center rounded-lg bg-sky-100">
                    <FontAwesomeIcon
                      alt="Inventory icon"
                      className="h-4 w-4"
                      icon={faBox}
                    />
                  </div>
                  <div className="flex-1">
                    <h4 className="font-medium text-gray-800">
                      Showcase Your Inventory
                    </h4>
                    <p className="mt-1 text-sm text-gray-600">
                      Display your complete equipment catalog to attract more
                      renters
                    </p>
                  </div>
                </div>

                {/* Benefit 5 */}
                <div className="flex items-start space-x-4">
                  <div className="flex h-10 w-10 items-center justify-center rounded-lg bg-sky-100">
                    <FontAwesomeIcon
                      alt="Review icon"
                      className="h-4 w-4 text-tertiary"
                      icon={faStar}
                    />
                  </div>
                  <div className="flex-1">
                    <h4 className="font-medium text-gray-800">
                      Build Trust Through Reviews
                    </h4>
                    <p className="mt-1 text-sm text-gray-600">
                      Collect and display reviews to establish credibility with
                      new clients
                    </p>
                  </div>
                </div>
              </div>
            </Card>

            {/* Pricing Card */}
            <Card className="rounded-lg border-2 border-sky-200 bg-white p-6 shadow-sm">
              <div className="text-center">
                <h3 className="text-xl font-semibold text-gray-800">
                  Pro Merchant (Monthly)
                </h3>
                <div className="mt-2">
                  <span className="text-3xl font-bold text-sky-600">£9.99</span>
                  <span className="ml-2 text-sm text-gray-500">per month</span>
                </div>
              </div>

              <div className="mt-6">
                <div className="mb-4 flex justify-center">
                  <span className="inline-flex items-center rounded-full bg-red-100 px-3 py-1 text-sm font-medium text-red-800">
                    <span alt="Status icon" className="mr-2 inline-block h-3 w-3 rounded-full bg-red-800"></span>
                    Inactive
                  </span>
                </div>

                <Button
                  variant="tertiary"
                  className="w-full rounded-lg px-4 py-3 text-base font-medium"
                  onClick={handleActivateSubscription}
                >
                  <div className="flex items-center justify-center space-x-2">
                    <FontAwesomeIcon
                      alt="Activate icon"
                      className="h-4 w-4"
                      icon={faCreditCard}
                    />
                    <span>Activate My Subscription</span>
                  </div>
                </Button>
              </div>

              <div className="mt-6 border-t border-gray-200 pt-4">
                <p className="text-center text-sm text-gray-500">
                  Your subscription will be managed by our admin team. You'll
                  receive a confirmation email once activated.
                </p>
              </div>
            </Card>
          </div>

          {/* Help Section */}
          <div className="rounded-lg bg-blue-50 p-6">
            <div className="text-center">
              <div className="mb-4 flex justify-center">
                <FontAwesomeIcon alt="Help icon" className="text-colored-blue h-6 w-6" icon={faHeadset} />
              <h3 className="ml-3 mb-2 text-lg font-semibold text-gray-800">
                Need Help?
              </h3>
              </div>
              <p className="mb-4 text-gray-600">
                Need help activating your subscription or have questions about
                merchant features?
              </p>
              <div className="flex items-center justify-center space-x-2 text-sky-600">
                <FontAwesomeIcon alt="Email icon" className="h-4 w-4" icon={faEnvelope} />
                <a
                  href="mailto:support@filmgearhub.com"
                  className="font-medium hover:underline"
                >
                  Contact support@filmgearhub.com
                </a>
              </div>
            </div>
          </div>
        </div>

        {/* Success Toast - Positioned relative to main content */}
        <div
          className={`absolute right-4 top-4 rounded-lg bg-green-500 p-4 shadow-lg transition-opacity duration-700 ease-in-out ${
            showToast ? "opacity-100" : "pointer-events-none opacity-0"
          }`}
        >
          <div className="flex items-center space-x-3 text-white">
            <FontAwesomeIcon icon={faCircleCheck} alt="Success icon" className="h-4 w-4" />
            <span className="text-sm font-medium">
              Subscription activated successfully!
            </span>
          </div>
        </div>
      </main>

      {/* Footer */}
      <CommonFooter />
    </div>
  )
}

import React, { useState, useEffect } from 'react';
import { Card, CardContent, CardHeader } from "@/src/components/ui/card";
import { Button } from "@/src/components/ui/button";
import { Link } from "react-router-dom";

import vanguardIcon from "@/public/assets/icons/vanguard.svg";
import infoIcon from "@/public/assets/icons/info.svg";
import editProfileIcon from "@/public/assets/icons/EditProfile.svg";
import toastCheckIcon from "@/public/assets/icons/toastCheck.svg";

export default function MerchantNextStepsBody() {
  const [showSuccessMessage, setShowSuccessMessage] = useState(false);
  const [isFading, setIsFading] = useState(false);
  const [isVisible, setIsVisible] = useState(false);

  // Show success message when component mounts (coming from email verification)
  useEffect(() => {
    setShowSuccessMessage(true);
    
    // Start fade in after a brief delay
    const fadeInTimer = setTimeout(() => {
      setIsVisible(true);
    }, 100);

    // Start fade out after 1 second
    const fadeTimer = setTimeout(() => {
      setIsFading(true);
    }, 1100);

    // Hide the message completely after fade animation
    const hideTimer = setTimeout(() => {
      setShowSuccessMessage(false);
      setIsFading(false);
      setIsVisible(false);
    }, 1600);

    return () => {
      clearTimeout(fadeInTimer);
      clearTimeout(fadeTimer);
      clearTimeout(hideTimer);
    };
  }, []);

  const steps = [
    {
      number: 1,
      title: "Complete Your Profile",
      description: "Please complete your profile with accurate contact and business details."
    },
    {
      number: 2,
      title: "Wait for Approval",
      description: "You'll receive an email when your account is approved. Verification typically takes 24–48 hours."
    },
    {
      number: 3,
      title: "Start Listing Equipment",
      description: "Once approved, you can list your equipment and respond to rental requests."
    }
  ];

  return (
    <div className="min-h-screen bg-gray-50 flex justify-center items-start py-8 sm:pt-16 px-2 sm:px-4 relative w-full">
      {/* Success Message - Positioned in top-right of this component */}
      {showSuccessMessage && (
        <div 
          className={`absolute top-4 right-4 w-[95vw] max-w-xs sm:max-w-sm md:max-w-md h-12 shrink-0 bg-green-500 rounded-lg shadow-lg z-50 transition-opacity duration-500 ease-in-out ${
            isFading ? 'opacity-0' : isVisible ? 'opacity-100' : 'opacity-0'
          }`}
        >
          <div className="w-full h-6 bg-transparent relative z-50 mt-3 ml-6 pr-4 flex items-center">
            <span className="flex h-6 justify-start items-center text-sm sm:text-base font-normal leading-6 text-white pl-3 sm:pl-6 text-left whitespace-normal sm:whitespace-nowrap z-[62]">
              Verification email sent successfully!
            </span>
            <div className="flex w-4 h-4 justify-center items-center absolute top-1 left-0 overflow-hidden z-[60]">
              <img
                src={toastCheckIcon}
                alt="Success"
                className="w-4 h-4 shrink-0 relative overflow-hidden z-[61]"
              />
            </div>
          </div>
        </div>
      )}

      <div className="w-full max-w-2xl mx-auto">
        {/* Header Section */}
        <div className="text-center mb-8 px-2 sm:px-0">
          <div className="w-20 h-20 bg-yellow-100 rounded-full flex items-center justify-center mx-auto mb-2.5">
            <img src={vanguardIcon} alt="Vanguard Icon" className="w-8 h-8" />
          </div>
          <h1 className="font-bold text-gray-900 mb-6 text-2xl sm:text-3xl md:text-4xl leading-tight">
            Your Merchant Account is Almost Ready
          </h1>
          <p className="text-base sm:text-lg text-gray-600 mx-auto max-w-md">
            Thanks for signing up as a Merchant on FilmGearHub. Before
            your profile goes live, our team will verify your information.
          </p>
        </div>

        {/* Steps Card */}
        <Card className="shadow-lg p-4 sm:p-8">
          <CardHeader className="p-0 pb-6">
            <h2 className="text-lg sm:text-xl font-semibold text-gray-900">Next Steps:</h2>
          </CardHeader>
          <CardContent className="space-y-6 p-0">
            {/* Steps List */}
            <div className="space-y-6">
              {steps.map((step) => (
                <div key={step.number} className="flex items-start space-x-4">
                  <div className="w-8 h-8 rounded-full flex items-center justify-center text-sm font-semibold text-blue-600 bg-blue-100 flex-shrink-0">
                    {step.number}
                  </div>
                  <div className="flex-1">
                    <h3 className="font-medium text-gray-900 mb-1 text-base sm:text-lg">
                      {step.title}
                    </h3>
                    <p className="text-sm sm:text-base text-gray-600">
                      {step.description}
                    </p>
                  </div>
                </div>
              ))}
            </div>

            {/* Help Section */}
            <div className="bg-blue-50 border border-blue-200 rounded-lg p-3 sm:p-4">
              <div className="flex items-start space-x-3">
                <img src={infoIcon} alt="Info" className="w-4 h-4 text-blue-600 mt-0.5 flex-shrink-0" />
                <div className="text-sm sm:text-base text-blue-800">
                  <span className="font-semibold">Need help?</span>
                  {" "}
                  If you have questions or need assistance, reach out to{" "}
                  <a 
                    href="mailto:support@filmgearhub.com" 
                    className="underline hover:text-blue-900"
                  >
                    support@filmgearhub.com
                  </a>
                </div>
              </div>
            </div>
          </CardContent>
        </Card>

        {/* Action Button */}
        <div className="mt-6">
          <Link to="/edit-merchant-profile" className="block">
            <Button className="w-full h-14 text-base font-semibold bg-sky-600 text-white hover:bg-sky-700" size="lg">
              <img src={editProfileIcon} alt="Edit Profile" className="w-5 h-5 mr-2 inline-block" />
              Complete My Profile
            </Button>
          </Link>
        </div>

        {/* Footer Link */}
        <div className="text-center mt-6">
          <p className="text-sm text-gray-600">
            You can also visit your{" "}
            <a href="#" className="font-medium text-blue-600 underline hover:text-blue-700">
              merchant dashboard
            </a>
            {" "}
            (limited features until verified)
          </p>
        </div>
      </div>
    </div>
  );
}
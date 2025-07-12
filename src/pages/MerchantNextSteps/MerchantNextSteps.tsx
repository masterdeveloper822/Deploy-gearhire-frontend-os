import React from "react";
import "../global.css";
import EmailVerifyHeader from "@/src/pages/EmailVerify/components/EmailVerifyHeader";
import MerchantNextStepsBody from "./components/MerchantNextStepsBody";

export default function MerchantNextSteps() {
  return (
    <div className="bg-white relative rounded-lg w-full min-h-screen">
      <div className="bg-gray-50 w-full min-h-screen">
        <EmailVerifyHeader />
        <MerchantNextStepsBody />
      </div>
    </div>
  );
}

import React from "react";
import "../index.css";
import EmailVerifyHeader from "@/src/pages/EmailVerify/components/EmailVerifyHeader";
import MerchantNextStepsBody from "./components/MerchantNextStepsBody";

export default function MerchantNextSteps() {
  return (
    <div className="main-container flex flex-col items-start flex-nowrap bg-white rounded-lg border-2 border-solid border-[#ced4da] relative overflow-hidden mx-auto my-0 w-full max-w-[1440px] min-h-screen">
      <div className="w-full min-h-screen bg-[#f9fafb] relative">
        <EmailVerifyHeader />
        <MerchantNextStepsBody />
      </div>
    </div>
  );
}

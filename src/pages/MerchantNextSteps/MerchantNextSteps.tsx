import React from "react";
import "../index.css";
import EmailVerifyHeader from "@/src/components/EmailVerify/EmailVerifyHeader";
import MerchantNextStepsBody from "@/src/components/MerchantNextSteps/MerchantNextStepsBody";

export default function MerchantNextSteps() {
  return (
    <div className="main-container flex w-[1440px] flex-col items-start flex-nowrap bg-[#fff] rounded-[8px] border-solid border-2 border-[#ced4da] relative overflow-hidden mx-auto my-0">
      <div className="w-[1440px] h-[1074px] shrink-0 bg-[#f9fafb] relative">
        <EmailVerifyHeader />
        <MerchantNextStepsBody />
      </div>
    </div>
  );
}

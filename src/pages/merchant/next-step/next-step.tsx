import React from "react";
import "@/styles/global.css";

import Header from "../../onboarding/email-verify/components/header";
import Body from "./components/body";
export default function MerchantNextStep() {
  return (
    <div className="bg-white relative rounded-lg w-full min-h-screen">
      <div className="bg-gray-50 w-full min-h-screen">
        <Header />
        <Body />
      </div>
    </div>
  );
}

export { MerchantNextStep };

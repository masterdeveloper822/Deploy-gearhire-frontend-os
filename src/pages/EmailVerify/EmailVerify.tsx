import React from "react";
import "../global.css";
import EmailVerifyHeader from "./components/EmailVerifyHeader";
import EmailVerifyBody from "./components/EmailVerifyBody";

export default function EmailVerify() {
  return (
    <div className="bg-white relative rounded-lg w-full min-h-screen">
      <div className="bg-gray-50 w-full min-h-screen">
        <EmailVerifyHeader />
        <EmailVerifyBody />
      </div>
    </div>
  );
}

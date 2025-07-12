import React from "react";
import "../global.css";
import EmailVerifyHeader from "./components/EmailVerifyHeader";
import EmailVerifyBody from "./components/EmailVerifyBody";

export default function EmailVerify() {
  return (
    <div className="main-container flex w-full max-w-[1440px] flex-col items-start flex-nowrap bg-[#fff] rounded-[8px] border-solid border-2 border-[#ced4da] relative overflow-hidden mx-auto my-0">
      <div className="w-full min-h-screen bg-[#f9fafb] relative">
        <EmailVerifyHeader />
        <EmailVerifyBody />
      </div>
    </div>
  );
}

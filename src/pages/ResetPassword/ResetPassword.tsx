import React from "react";
import "../global.css";
import LoginHeader from "@/src/pages/Login/components/LoginHeader";
import ResetPassBody from "./components/ResetPassBody";

export default function ResetPassword() {
  return (
    <div className="main-container flex w-[1440px] flex-col items-start flex-nowrap bg-[#fff] rounded-[8px] border-solid border-2 border-[#ced4da] relative overflow-hidden mx-auto my-0">
      <div className="w-[1440px] h-[1440px] shrink-0 bg-[#f9fafb] relative">
        <LoginHeader />
        <ResetPassBody />
      </div>
    </div>
  );
}

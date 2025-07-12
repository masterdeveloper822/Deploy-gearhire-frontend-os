import React from "react";
import "../global.css";
import LoginHeader from "@/src/pages/Login/components/LoginHeader";
import ResetPassBody from "./components/ResetPassBody";

export default function ResetPassword() {
  return (
    <div className="bg-white relative rounded-lg w-full min-h-screen">
      <div className="bg-gray-50 w-full min-h-screen">
        <LoginHeader />
        <ResetPassBody />
      </div>
    </div>
  );
}

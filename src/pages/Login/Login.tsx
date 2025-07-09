import React from "react";
import "../index.css";
import LoginHeader from "@/src/components/Login/LoginHeader";
import LoginBody from "@/src/components/Login/LoginBody";

export default function Login() {
  return (
    <div className="main-container flex flex-col bg-white rounded-lg border-2 border-gray-300 relative overflow-hidden mx-auto w-full max-w-[1440px] min-h-screen">
      <div className="w-full min-h-screen bg-gray-50 relative flex flex-col">
        <LoginHeader />
        <LoginBody />
      </div>
    </div>
  );
}

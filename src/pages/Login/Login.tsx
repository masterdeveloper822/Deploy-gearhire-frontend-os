import React from "react";
import "../index.css";
import LoginHeader from "./components/LoginHeader";
import LoginBody from "./components/LoginBody";

export default function Login() {
  return (
    <div className="main-container bg-gray-50 flex flex-col rounded-lg border-2 border-gray-300 relative overflow-hidden mx-auto w-full max-w-[1440px] min-h-screen">
      <div className="w-full relative flex flex-col">
        <LoginHeader />
        <LoginBody />
      </div>
    </div>
  );
}

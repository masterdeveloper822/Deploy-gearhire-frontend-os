import React from "react";
import "../global.css";
import LoginHeader from "./components/LoginHeader";
import LoginBody from "./components/LoginBody";

export default function Login() {
  return (
    <div className="bg-white relative rounded-lg w-full min-h-screen">
      <div className="bg-gray-50 w-full min-h-screen">
        <LoginHeader />
        <LoginBody />
      </div>
    </div>
  );
}

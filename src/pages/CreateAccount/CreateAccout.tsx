import React from "react";
import "../global.css";

import CreateAccountHeader from "./components/CreateAccountHeader";
import CreateAccountBody from "./components/CreateAccountBody";

export default function CreateAccount() {
  return (
    <div className="main-container flex w-full max-w-[1440px] flex-col items-start flex-nowrap bg-[#fff] rounded-[8px] border-solid border-2 border-[#ced4da] relative overflow-hidden mx-auto my-0">
      <div className="w-full min-h-screen bg-[#f9fafb] relative">
        <CreateAccountHeader />
        <CreateAccountBody />
      </div>
    </div>
  );
}

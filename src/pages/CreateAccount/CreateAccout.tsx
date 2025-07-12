import React from "react";
import "../global.css";

import CreateAccountHeader from "./components/CreateAccountHeader";
import CreateAccountBody from "./components/CreateAccountBody";

export default function CreateAccount() {
  return (
    <div className="bg-white relative rounded-lg w-full min-h-screen">
      <div className="bg-gray-50 w-full min-h-screen">
        <CreateAccountHeader />
        <CreateAccountBody />
      </div>
    </div>
  );
}

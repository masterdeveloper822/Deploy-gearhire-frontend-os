import React from "react";
import "../../global.css";
import Header from "./components/header";
import Body from "./components/body";



export default function EmailVerify() {
  return (
    <div className="bg-white relative rounded-lg w-full min-h-screen">
      <div className="bg-gray-50 w-full min-h-screen">
        <Header />
        <Body />
      </div>
    </div>
  );
}

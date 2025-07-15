import React from "react";
import "@/styles/global.css";
import Header from "./components/header";
import Body from "./components/body";

const Login: React.FC = () => {
  return (
    <div className="bg-white relative rounded-lg w-full min-h-screen">
      <div className="bg-gray-50 w-full min-h-screen">
        <Header />
        <Body />
      </div>
    </div>
  );
};

export { Login };

import React from "react";
import Header from "./components/header";
import Body from "./components/body";

const EditMerchantProfile: React.FC = () => {
  return (
    <div className="bg-white relative rounded-lg w-full min-h-screen">
      <div className="bg-gray-50 w-full min-h-screen">
        <Header />
        <Body />
      </div>
    </div>
  );
};

export { EditMerchantProfile };

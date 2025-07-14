import React from "react";

import HeaderFrame from "./headerFrame";
import { Button } from "@/src/components/ui/button";

const imgImg = "http://localhost:3845/assets/410c340aa057242400c608368f918307cdd72438.png";
import notificationIcon from "@/public/assets/icons/notification.svg";
import settingIcon from "@/public/assets/icons/setting.svg";

export function MerchantHeader() {
    return (
        <HeaderFrame>
        <div className="flex items-center gap-1 sm:gap-2 md:gap-4 px-2 sm:px-0">
        <div className="pr-2 md:pr-0">
          <img src={imgImg} alt="Profile" className="w-7 h-7 sm:w-8 sm:h-8 rounded-full" />
        </div>
          <span className="hidden md:inline text-gray-700 text-sm sm:text-base font-medium truncate max-w-[80px] sm:max-w-none">ProGear Studios</span>
          <Button variant="ghost" className="p-1 sm:p-2 bg-transparent hover:bg-gray-100">
            <img src={notificationIcon} alt="Notifications" className="w-4 h-4 sm:w-5 sm:h-5" />
         </Button>
         <Button variant="ghost" className="p-1 sm:p-2 bg-transparent hover:bg-gray-100">
            <img src={settingIcon} alt="Settings" className="w-4 h-4 sm:w-5 sm:h-5" />
         </Button>
        </div>
      </HeaderFrame>
    );
}
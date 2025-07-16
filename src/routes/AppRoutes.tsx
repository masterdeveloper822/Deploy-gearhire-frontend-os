import { Routes, Route } from "react-router-dom";
import { LandingPage } from "../pages/landing";
import { EditMerchantProfile } from "@/pages/merchant/edit-profile";
import MerchantNextStep from "@/pages/merchant/next-step";
import AuthRoutes from "./AuthRoutes";
import { MerchantDashboard } from "@/pages/merchant/dashboard";
import { MerchantInventoryBook } from "@/pages/merchant/inventory-book";
import { MerchantAddEquipment } from "@/pages/merchant/add-equipment";


        
//         <Route path="/training-course-list" element={<TrainingCourseList />} />

const AppRoutes = () => (
  <Routes>
    <Route path="/" element={<LandingPage />} />
    {AuthRoutes}
    <Route path="/edit-merchant-profile" element={<EditMerchantProfile />} />
    <Route path="/merchant-next-step" element={<MerchantNextStep />} />
    <Route path="/merchant-dashboard" element={<MerchantDashboard />} />
    <Route
      path="/merchant-inventory-book"
      element={<MerchantInventoryBook />} />
    <Route
          path="/merchant-add-equipment"
          element={<MerchantAddEquipment/>}  />
  </Routes>
);

export default AppRoutes;
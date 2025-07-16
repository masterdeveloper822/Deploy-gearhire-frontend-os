import { Routes, Route } from "react-router-dom";
import { LandingPage } from "../pages/landing";
import { EditMerchantProfile } from "@/pages/merchant/edit-profile";
import MerchantNextStep from "@/pages/merchant/next-step";
import AuthRoutes from "./AuthRoutes";

//         <Route path="/merchant-dashboard" element={<MerchantDashboard />} />
//         <Route
//           path="/merchant-inventory-book"
//           element={<MerchantInventoryBook />}
//         />
//         <Route
//           path="/merchant-add-equipment"
//           element={<MerchantAddEquipment />}
//         />
//         <Route path="/training-course-list" element={<TrainingCourseList />} />
//       </Routes>

const AppRoutes = () => (
  <Routes>
    <Route path="/" element={<LandingPage />} />
    {AuthRoutes}
    <Route path="/edit-merchant-profile" element={<EditMerchantProfile />} />
    <Route path="/merchant-next-step" element={<MerchantNextStep />} />
  </Routes>
);

export default AppRoutes;
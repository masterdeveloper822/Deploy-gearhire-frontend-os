import { Routes, Route } from "react-router-dom";
import { LandingPage } from "../pages/landing";
import { CreateAccount } from "@/pages/auth/create-account";

// export default function App() {
//   return (
//       <Routes>
//         <Route path="/email-verify" element={<EmailVerify />} />
//         <Route path="/login" element={<Login />} />
//         <Route path="/reset-password" element={<ResetPassword />} />
//         <Route path="/merchant-next-step" element={<MerchantNextStep />} />
//         <Route
//           path="/edit-merchant-profile"
//           element={<EditMerchantProfile />}
//         />
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
//   );
// }


const AppRoutes = () => (
  <Routes>
    <Route path="/" element={<LandingPage />} />
    <Route path="/signup" element={<CreateAccount />} />
  </Routes>
);

export default AppRoutes;
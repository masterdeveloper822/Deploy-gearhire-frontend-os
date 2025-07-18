import { Routes, Route } from "react-router-dom"
import { LandingPage } from "../pages/landing"
import { EditMerchantProfile } from "@/pages/merchant/edit-profile"
import MerchantNextStep from "@/pages/merchant/next-step"
import AuthRoutes from "./AuthRoutes"
import { MerchantDashboard } from "@/pages/merchant/dashboard"
import { MerchantInventoryBook } from "@/pages/merchant/inventory-book"
import { MerchantAddEquipment } from "@/pages/merchant/add-equipment"
import { TrainingCourseList } from "@/pages/merchant/training-course-list"
import AddTrainingCourse from "@/pages/merchant/add-training-course"
import BrowseRFQ from "@/pages/merchant/browse-rfq"
import AddQuote from "@/pages/merchant/add-quote"
import SubmittedQuote from "@/pages/merchant/submitted-quote"

const AppRoutes = () => (
  <Routes>
    <Route path="/" element={<LandingPage />} />
    {AuthRoutes}
    <Route path="/edit-merchant-profile" element={<EditMerchantProfile />} />
    <Route path="/merchant-next-step" element={<MerchantNextStep />} />
    <Route path="/merchant-dashboard" element={<MerchantDashboard />} />
    <Route
      path="/merchant-inventory-book"
      element={<MerchantInventoryBook />}
    />
    <Route path="/merchant-add-equipment" element={<MerchantAddEquipment />} />
    <Route path="/training-course-list" element={<TrainingCourseList />} />
    <Route path="/add-training-course" element={<AddTrainingCourse />} />
    <Route path="/browse-RFQs" element={<BrowseRFQ />} />
    <Route path="/add-quote" element={<AddQuote />} />
    <Route path="/submitted-quote" element={<SubmittedQuote />} />
  </Routes>
)

export default AppRoutes

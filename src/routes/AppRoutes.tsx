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
import RFQDetails from "@/pages/merchant/rfq-details"
import SubscriptionPage from "@/pages/merchant/subscription"
import Review from "@/pages/merchant/review"
import MerchantRoutes from "./MerchantRoutes"
import RenterRoutes from "./RenterRoutes"

const AppRoutes = () => (
  <Routes>
    <Route path="/" element={<LandingPage />} />
    {AuthRoutes}
    {MerchantRoutes}
    {RenterRoutes}
  </Routes>
)

export default AppRoutes

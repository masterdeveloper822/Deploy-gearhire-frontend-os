import { MerchantAddEquipment } from "@/pages/merchant/add-equipment"
import AddQuote from "@/pages/merchant/add-quote"
import AddTrainingCourse from "@/pages/merchant/add-training-course"
import BrowseRFQ from "@/pages/merchant/browse-rfq"
import { MerchantDashboard } from "@/pages/merchant/dashboard"
import { MerchantInventoryBook } from "@/pages/merchant/inventory-book"
import MerchantMessage from "@/pages/message/merchant"
import MerchantNextStep from "@/pages/merchant/next-step"
import Notification from "@/pages/merchant/notification"
import Review from "@/pages/review/review"
import RFQDetails from "@/pages/merchant/rfq-details"
import SubmittedQuotesPage from "@/pages/merchant/submitted-quote"
import SubscriptionPage from "@/pages/merchant/subscription"
import { TrainingCourseList } from "@/pages/merchant/training-course-list"
import { Route } from "react-router-dom"
import { EditMerchantProfile } from "@/pages/profile/merchant-edit"
import MerchantProfile from "@/pages/profile/merchant"

export default [
  <Route path="/edit-merchant-profile" element={<EditMerchantProfile />} />,
  <Route path="/merchant-next-step" element={<MerchantNextStep />} />,
  <Route path="/merchant-dashboard" element={<MerchantDashboard />} />,
  <Route path="/merchant-inventory-book" element={<MerchantInventoryBook />} />,
  <Route path="/merchant-add-equipment" element={<MerchantAddEquipment />} />,
  <Route path="/training-course-list" element={<TrainingCourseList />} />,
  <Route path="/add-training-course" element={<AddTrainingCourse />} />,
  <Route path="/browse-RFQs" element={<BrowseRFQ />} />,
  <Route path="/add-quote" element={<AddQuote />} />,
  <Route path="/rfq-detail" element={<RFQDetails />} />,
  <Route path="/submitted-quote" element={<SubmittedQuotesPage />} />,
  <Route path="/subscription" element={<SubscriptionPage />} />,
  <Route path="/merchant-review" element={<Review />} />,
  <Route path="/merchant-notification" element={<Notification />} />,
  <Route path="/merchant-message" element={<MerchantMessage />} />,
  <Route path="/merchant-profile" element={<MerchantProfile />} />,
]

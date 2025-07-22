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
  <Route
    key="edit-merchant-profile"
    path="/edit-merchant-profile"
    element={<EditMerchantProfile />}
  />,
  <Route
    key="merchant-next-step"
    path="/merchant-next-step"
    element={<MerchantNextStep />}
  />,
  <Route
    key="merchant-dashboard"
    path="/merchant-dashboard"
    element={<MerchantDashboard />}
  />,
  <Route
    key="merchant-inventory-book"
    path="/merchant-inventory-book"
    element={<MerchantInventoryBook />}
  />,
  <Route
    key="merchant-add-equipment"
    path="/merchant-add-equipment"
    element={<MerchantAddEquipment />}
  />,
  <Route
    key="training-course-list"
    path="/training-course-list"
    element={<TrainingCourseList />}
  />,
  <Route
    key="add-training-course"
    path="/add-training-course"
    element={<AddTrainingCourse />}
  />,
  <Route key="browse-RFQs" path="/browse-RFQs" element={<BrowseRFQ />} />,
  <Route key="add-quote" path="/add-quote" element={<AddQuote />} />,
  <Route key="rfq-detail" path="/rfq-detail" element={<RFQDetails />} />,
  <Route
    key="submitted-quote"
    path="/submitted-quote"
    element={<SubmittedQuotesPage />}
  />,
  <Route
    key="subscription"
    path="/subscription"
    element={<SubscriptionPage />}
  />,
  <Route key="merchant-review" path="/merchant-review" element={<Review />} />,
  <Route
    key="merchant-notification"
    path="/merchant-notification"
    element={<Notification />}
  />,
  <Route
    key="merchant-message"
    path="/merchant-message"
    element={<MerchantMessage />}
  />,
  <Route
    key="merchant-profile"
    path="/merchant-profile"
    element={<MerchantProfile />}
  />,
]

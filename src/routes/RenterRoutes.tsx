import BrowseEquipment from "@/pages/equipment/browse-equipment"
import EquipmentDetail from "@/pages/equipment/detail"
import RenterMessage from "@/pages/message/renter"
import RenterProfile from "@/pages/profile/renter"
import { EditRenterProfile } from "@/pages/profile/renter-edit"
import BrowseTrainingCourse from "@/pages/renter/browse-training-course"
import { RenterDashboard } from "@/pages/renter/dashboard"
import EditRfq from "@/pages/renter/edit-rfq"
import Notification from "@/pages/renter/notification"
import RfqList from "@/pages/renter/rfq-list"
import AddNewReview from "@/pages/review/add-new"
import { Route } from "react-router-dom"

export default [
  <Route
    path="/renter-dashboard"
    element={<RenterDashboard />}
  />,
  <Route
    path="/browse-training-course"
    element={<BrowseTrainingCourse />}
  />,
  <Route path="/rfq-list" element={<RfqList />} />,
  <Route path="/edit-rfq" element={<EditRfq />} />,
  <Route
    path="/renter-notification"
    element={<Notification />}
  />,
  <Route
    path="/renter-message"
    element={<RenterMessage />}
  />,
  <Route path="/add-review" element={<AddNewReview />} />,
  <Route
    path="/renter-edit-profile"
    element={<EditRenterProfile />}
  />,
  <Route
    path="/renter-profile"
    element={<RenterProfile />}
  />,
  <Route
    path="/browse-equipment"
    element={<BrowseEquipment />}
  />,
  <Route
    path="/equipment-detail"
    element={<EquipmentDetail />}
  />,
]

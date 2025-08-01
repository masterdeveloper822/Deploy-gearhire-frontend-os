import React from "react"
import { Routes, Route, Navigate } from "react-router-dom"
import { useUser } from "@/context/user-context"
import { Login } from "@/pages/auth/login"
import { MerchantDashboard } from "@/pages/merchant/dashboard"
import { RenterDashboard } from "@/pages/renter/dashboard"
import { MerchantInventoryBook } from "@/pages/merchant/inventory-book"
import { EditMerchantProfile } from "@/pages/profile/merchant-edit"
import { MerchantNextStep } from "@/pages/merchant/next-step"
import { MerchantAddEquipment } from "@/pages/merchant/add-equipment"
import { TrainingCourseList } from "@/pages/merchant/training-course-list"
import AddTrainingCourse from "@/pages/merchant/add-training-course"
import BrowseRFQ from "@/pages/merchant/browse-rfq"
import AddQuote from "@/pages/merchant/add-quote"
import RFQDetails from "@/pages/merchant/rfq-details"
import SubmittedQuotesPage from "@/pages/merchant/submitted-quote"
import SubscriptionPage from "@/pages/merchant/subscription"
import Review from "@/pages/review/review"
import Notification from "@/pages/merchant/notification"
import MerchantMessage from "@/pages/message/merchant"
import MerchantProfile from "@/pages/profile/merchant"
import BrowseTrainingCourse from "@/pages/renter/browse-training-course"
import RfqList from "@/pages/renter/rfq-list"
import EditRfq from "@/pages/renter/edit-rfq"
import RenterMessage from "@/pages/message/renter"
import AddNewReview from "@/pages/review/add-new"
import { EditRenterProfile } from "@/pages/profile/renter-edit"
import RenterProfile from "@/pages/profile/renter"
import BrowseEquipment from "@/pages/equipment/browse-equipment"
import EquipmentDetail from "@/pages/equipment/detail"
import { LandingPage } from "@/pages/landing"
import { CreateAccount } from "@/pages/auth/create-account"
import { EmailVerify } from "@/pages/auth/email-verify"
import { ResetPassword } from "@/pages/auth/reset-password"

const AppRoutes: React.FC = () => {
  const { user, isLoading } = useUser()

  console.log("AppRoutes - Current user:", user)
  console.log("AppRoutes - User role:", user?.role)
  console.log("AppRoutes - Is loading:", isLoading)

  // Protected route component
  const ProtectedRoute = ({ children }: { children?: React.ReactNode }) => {
    console.log("ProtectedRoute - User:", user)
    console.log("ProtectedRoute - Is loading:", isLoading)

    if (isLoading) {
      return <div>Loading...</div> // or a proper loading spinner
    }

    // if (!user) {
    //   console.log("ProtectedRoute - Redirecting to login");
    //   return <Navigate to="/login" replace />
    // }
    return <>{children}</>
  }

  // Dashboard redirect component
  const DashboardRedirect = () => {
    if (isLoading) {
      return <div>Loading...</div> // or a proper loading spinner
    }

    if (!user) {
      return <LandingPage />
    }

    // Redirect based on user role
    if (user.role === "merchant") {
      return <Navigate to="/merchant-dashboard" />
    } else if (user.role === "renter") {
      return <Navigate to="/renter-dashboard" />
    }
  }

  return (
    <Routes>
      {/* Root path - redirect logged in users to dashboard */}
      <Route path="/" element={<DashboardRedirect />} />

      {/* Public routes */}
      <Route path="/login" element={<Login />} />
      <Route path="/signup" element={<CreateAccount />} />
      <Route path="/email-verify" element={<EmailVerify />} />
      <Route path="/reset-password" element={<ResetPassword />} />

      {/* Protected merchant routes */}
      <Route
        path="/edit-merchant-profile"
        element={
          <ProtectedRoute>
            <EditMerchantProfile />
          </ProtectedRoute>
        }
      />
      <Route
        path="/merchant-next-step"
        element={
          <ProtectedRoute>
            <MerchantNextStep />
          </ProtectedRoute>
        }
      />
      <Route
        path="/merchant-dashboard"
        element={
          <ProtectedRoute>
            <MerchantDashboard />
          </ProtectedRoute>
        }
      />
      <Route
        path="/merchant-inventory-book"
        element={
          <ProtectedRoute>
            <MerchantInventoryBook />
          </ProtectedRoute>
        }
      />
      <Route
        path="/merchant-add-equipment"
        element={
          <ProtectedRoute>
            <MerchantAddEquipment />
          </ProtectedRoute>
        }
      />
      <Route
        path="/training-course-list"
        element={
          <ProtectedRoute>
            <TrainingCourseList />
          </ProtectedRoute>
        }
      />
      <Route
        path="/add-training-course"
        element={
          <ProtectedRoute>
            <AddTrainingCourse />
          </ProtectedRoute>
        }
      />
      <Route
        path="/browse-RFQs"
        element={
          <ProtectedRoute>
            <BrowseRFQ />
          </ProtectedRoute>
        }
      />
      <Route
        path="/add-quote"
        element={
          <ProtectedRoute>
            <AddQuote />
          </ProtectedRoute>
        }
      />
      <Route
        path="/rfq-detail"
        element={
          <ProtectedRoute>
            <RFQDetails />
          </ProtectedRoute>
        }
      />
      <Route
        path="/submitted-quote"
        element={
          <ProtectedRoute>
            <SubmittedQuotesPage />
          </ProtectedRoute>
        }
      />
      <Route
        path="/subscription"
        element={
          <ProtectedRoute>
            <SubscriptionPage />
          </ProtectedRoute>
        }
      />
      <Route
        path="/merchant-review"
        element={
          <ProtectedRoute>
            <Review />
          </ProtectedRoute>
        }
      />
      <Route
        path="/merchant-notification"
        element={
          <ProtectedRoute>
            <Notification />
          </ProtectedRoute>
        }
      />
      <Route
        path="/merchant-message"
        element={
          <ProtectedRoute>
            <MerchantMessage />
          </ProtectedRoute>
        }
      />
      <Route
        path="/merchant-profile"
        element={
          <ProtectedRoute>
            <MerchantProfile />
          </ProtectedRoute>
        }
      />

      {/* Protected renter routes */}
      <Route
        path="/renter-dashboard"
        element={
          <ProtectedRoute>
            <RenterDashboard />
          </ProtectedRoute>
        }
      />
      <Route
        path="/browse-training-course"
        element={
          <ProtectedRoute>
            <BrowseTrainingCourse />
          </ProtectedRoute>
        }
      />
      <Route
        path="/rfq-list"
        element={
          <ProtectedRoute>
            <RfqList />
          </ProtectedRoute>
        }
      />
      <Route
        path="/edit-rfq"
        element={
          <ProtectedRoute>
            <EditRfq />
          </ProtectedRoute>
        }
      />
      <Route
        path="/renter-notification"
        element={
          <ProtectedRoute>
            <Notification />
          </ProtectedRoute>
        }
      />
      <Route
        path="/renter-message"
        element={
          <ProtectedRoute>
            <RenterMessage />
          </ProtectedRoute>
        }
      />
      <Route
        path="/add-review"
        element={
          <ProtectedRoute>
            <AddNewReview />
          </ProtectedRoute>
        }
      />
      <Route
        path="/renter-edit-profile"
        element={
          <ProtectedRoute>
            <EditRenterProfile />
          </ProtectedRoute>
        }
      />
      <Route
        path="/renter-profile"
        element={
          <ProtectedRoute>
            <RenterProfile />
          </ProtectedRoute>
        }
      />
      <Route
        path="/browse-equipment"
        element={
          <ProtectedRoute>
            <BrowseEquipment />
          </ProtectedRoute>
        }
      />
      <Route
        path="/equipment-detail"
        element={
          <ProtectedRoute>
            <EquipmentDetail />
          </ProtectedRoute>
        }
      />
      {/* <Route path="*" element={<Navigate to="/" replace />} /> */}
    </Routes>
  )
}

export default AppRoutes

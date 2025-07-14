import React from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import { Toaster } from './components/ui/toaster';
import LandingPage from './pages/onboarding/landingPage/landing';
import CreateAccount from './pages/onboarding/createAccount/createAccount';
import EmailVerify from './pages/onboarding/emailVerify/emailVerify';
import Login from './pages/onboarding/login/login';
import ResetPassword from './pages/onboarding/resetPassword/resetPassword';
import MerchantNextSteps from './pages/merchant/merchantNextSteps/merchantNextSteps';
import EditMerchantProfile from './pages/merchant/editMerchantProfile/editMerchantProfile';
import MerchantDashboard from './pages/merchant/merchantDashboard/merchantDashboard';
import MerchantInventoryBook from './pages/merchant/merchantInventoryBook/merchantInventoryBook';
import MerchantAddEquipment from './pages/merchant/merchantAddEquipment/merchantAddEquipment';
import MerchantTrainingCourses from './pages/merchant/merchantTrainingCourses/merchantTrainingCourses';

export default function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<LandingPage />} />
        <Route path="/create-account" element={<CreateAccount />} />
        <Route path="/email-verify" element={<EmailVerify />} />
        <Route path="/login" element={<Login />} />
        <Route path="/reset-password" element={<ResetPassword />} />
        <Route path="/merchant-next-steps" element={<MerchantNextSteps />} />
        <Route path="/edit-merchant-profile" element={<EditMerchantProfile />} />
        <Route path="/merchant-dashboard" element={<MerchantDashboard />} />
        <Route path="/merchant-inventory-book" element={<MerchantInventoryBook />} />
        <Route path="/merchant-add-equipment" element={<MerchantAddEquipment />} />
        <Route path="/merchant-training-course" element={<MerchantTrainingCourses />} />
      </Routes>
      <Toaster />
    </BrowserRouter>
  );
}

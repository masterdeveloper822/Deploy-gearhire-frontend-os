import React from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import { Toaster } from '@/src/components/ui/toaster';
import LandingPage from './pages/LandingPage/LandingPage';
import CreateAccount from './pages/CreateAccount/CreateAccout';
import EmailVerify from './pages/EmailVerify/EmailVerify';
import Login from './pages/Login/Login';
import ResetPassword from './pages/ResetPassword/ResetPassword';
import MerchantNextSteps from './pages/MerchantNextSteps/MerchantNextSteps';
import EditMerchantProfile from './pages/EditMerchantProfile/EditMerchantProfile';

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
      </Routes>
      <Toaster />
    </BrowserRouter>
  );
}

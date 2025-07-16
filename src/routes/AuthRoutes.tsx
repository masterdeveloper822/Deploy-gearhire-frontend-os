import { Route } from "react-router-dom"
import { CreateAccount } from "@/pages/auth/create-account"
import { Login } from "@/pages/auth/login"
import { ResetPassword } from "@/pages/auth/reset-password"
import { EmailVerify } from "@/pages/auth/email-verify"

export default [
  <Route path="/signup" element={<CreateAccount />} />,
  <Route path="/email-verify" element={<EmailVerify />} />,
  <Route path="/login" element={<Login />} />,
  <Route path="/reset-password" element={<ResetPassword />} />,
]

import { Route } from "react-router-dom"
import { CreateAccount } from "@/pages/auth/create-account"
import { Login } from "@/pages/auth/login"
import { ResetPassword } from "@/pages/auth/reset-password"
import { EmailVerify } from "@/pages/auth/email-verify"

export default [
  <Route key="signup" path="/signup" element={<CreateAccount />} />,
  <Route key="email-verify" path="/email-verify" element={<EmailVerify />} />,
  <Route key="login" path="/login" element={<Login />} />,
  <Route
    key="reset-password"
    path="/reset-password"
    element={<ResetPassword />}
  />,
]

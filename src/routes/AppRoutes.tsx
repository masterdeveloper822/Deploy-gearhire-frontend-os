import { Routes, Route } from "react-router-dom"
import { LandingPage } from "../pages/landing"
import AuthRoutes from "./AuthRoutes"
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

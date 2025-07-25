import React from "react"
import { Link } from "react-router-dom"

interface DashboardLinkProps {
  className?: string
}

const DashboardLink: React.FC<DashboardLinkProps> = ({ className = "" }) => (
  <div className={`mt-6 text-center ${className}`}>
    <p className="text-sm text-gray-600">
      You can also visit your{" "}
      <Link
        to="/merchant-dashboard"
        className="font-medium text-blue-600 underline hover:text-blue-700"
      >
        merchant dashboard
      </Link>{" "}
      (limited features until verified)
    </p>
  </div>
)

export default DashboardLink

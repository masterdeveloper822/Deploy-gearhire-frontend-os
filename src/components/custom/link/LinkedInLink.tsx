import React from "react";
import { Link } from "react-router-dom";
import linkedinIcon from '@/public/assets/icons/linkedin.svg';

interface LinkedInLinkProps {
  to?: string;
  className?: string;
  iconClassName?: string;
}

export default function LinkedInLink({ 
  to = "/linkedin", 
  className = "flex items-center p-0",
  iconClassName = "w-5 h-5"
}: LinkedInLinkProps) {
  return (
    <Link to={to} className={className}>
      <img src={linkedinIcon} alt="LinkedIn" className={iconClassName} />
    </Link>
  );
} 
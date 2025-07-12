import React from "react";
import { Link } from "react-router-dom";
import facebookIcon from '@/public/assets/icons/facebook.svg';

interface FacebookLinkProps {
  to?: string;
  className?: string;
  iconClassName?: string;
}

export default function FacebookLink({ 
  to = "/facebook", 
  className = "flex items-center p-0",
  iconClassName = "w-5 h-5"
}: FacebookLinkProps) {
  return (
    <Link to={to} className={className}>
      <img src={facebookIcon} alt="Facebook" className={iconClassName} />
    </Link>
  );
} 
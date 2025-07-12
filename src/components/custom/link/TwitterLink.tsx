import React from "react";
import { Link } from "react-router-dom";
import twitterIcon from '@/public/assets/icons/twitter.svg';

interface TwitterLinkProps {
  to?: string;
  className?: string;
  iconClassName?: string;
}

export default function TwitterLink({ 
  to = "/twitter", 
  className = "flex items-center p-0",
  iconClassName = "w-5 h-5"
}: TwitterLinkProps) {
  return (
    <Link to={to} className={className}>
      <img src={twitterIcon} alt="Twitter" className={iconClassName} />
    </Link>
  );
} 
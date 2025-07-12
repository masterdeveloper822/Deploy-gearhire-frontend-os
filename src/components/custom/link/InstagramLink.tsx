import React from "react";
import { Link } from "react-router-dom";
import instagramIcon from '@/public/assets/icons/instagram.svg';

interface InstagramLinkProps {
  to?: string;
  className?: string;
  iconClassName?: string;
}

export default function InstagramLink({ 
  to = "/instagram", 
  className = "flex items-center p-0",
  iconClassName = "w-5 h-5"
}: InstagramLinkProps) {
  return (
    <Link to={to} className={className}>
      <img src={instagramIcon} alt="Instagram" className={iconClassName} />
    </Link>
  );
} 
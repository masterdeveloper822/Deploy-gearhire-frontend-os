import React from "react";

export default function FormLabel({ children, className = "" }: { children: React.ReactNode; className?: string }) {
  return <label className={`block text-sm font-medium text-gray-700 mb-2 ${className}`}>{children}</label>;
} 
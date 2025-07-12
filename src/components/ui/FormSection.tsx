import React from "react";

export default function FormSection({ children, className = "" }: { children: React.ReactNode; className?: string }) {
  return <div className={`bg-white rounded-xl shadow-sm p-6 mb-8 ${className}`}>{children}</div>;
} 
import React from "react";

export default function FormGroup({ children, className = "" }: { children: React.ReactNode; className?: string }) {
  return <div className={`flex-1 min-w-[300px] ${className}`}>{children}</div>;
} 
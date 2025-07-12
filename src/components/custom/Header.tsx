import React from "react";

interface HeaderProps {
  title: string;
  subtitle?: string;
  onBack?: () => void;
}

export default function Header({ title, subtitle, onBack }: HeaderProps) {
  return (
    <div className="mb-8">
      <div className="flex items-center gap-4 mb-2">
        {onBack && (
          <button className="w-8 h-8 flex items-center justify-center" onClick={onBack}>
            {/* Replace with icon as needed */}
            <span className="text-xl">←</span>
          </button>
        )}
        <h1 className="text-3xl font-bold text-gray-800">{title}</h1>
      </div>
      {subtitle && <p className="text-gray-600 text-base">{subtitle}</p>}
    </div>
  );
} 
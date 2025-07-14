import React from "react";

interface SwitchToggleProps {
  checked: boolean;
  onChange: () => void;
  className?: string;
  ariaLabel?: string;
}

export const SwitchToggle: React.FC<SwitchToggleProps> = ({ checked, onChange, className = "", ariaLabel }) => (
  <button
    type="button"
    className={`w-11 h-6 rounded-full flex items-center transition-colors ${checked ? 'bg-sky-600' : 'bg-gray-300'} ${className}`}
    onClick={onChange}
    aria-label={ariaLabel || "Toggle"}
  >
    <span
      className={`w-5 h-5 bg-white rounded-full shadow transition-transform ${checked ? 'translate-x-6' : 'translate-x-0'}`}
    />
  </button>
); 
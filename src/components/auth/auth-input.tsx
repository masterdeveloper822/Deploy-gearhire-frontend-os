import React, { forwardRef } from "react"

interface AuthInputProps {
  id: string
  label: string
  value?: string
  onChange?: (e: React.ChangeEvent<HTMLInputElement>) => void
  placeholder?: string
  error?: string
  type?: string
  rightAdornment?: React.ReactNode
  bgClassName?: string
  [key: string]: any // for react-hook-form register
}

const AuthInput = forwardRef<HTMLInputElement, AuthInputProps>(
  (
    {
      id,
      label,
      value,
      onChange,
      placeholder = "",
      error = "",
      type = "text",
      rightAdornment,
      bgClassName = "bg-white",
      ...rest
    },
    ref,
  ) => {
    return (
      <div>
        <label
          className="mb-2 block text-sm font-semibold text-gray-700"
          htmlFor={id}
        >
          {label}
        </label>
        <div className="relative">
          <input
            id={id}
            type={type}
            value={value}
            onChange={onChange}
            placeholder={placeholder}
            ref={ref}
            className={`h-12 w-full rounded-md border ${bgClassName} px-4 ${rightAdornment ? "pr-12" : ""} text-base text-gray-900 placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-sky-500 ${
              error ? "border-red-500" : "border-gray-300"
            }`}
            {...rest}
          />
          {rightAdornment && (
            <span className="absolute inset-y-0 right-3 flex items-center">
              {rightAdornment}
            </span>
          )}
        </div>
        {error && <p className="mt-1 text-sm text-red-500">{error}</p>}
      </div>
    )
  },
)

AuthInput.displayName = "AuthInput"

export { AuthInput }

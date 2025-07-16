import React from "react"

interface UserTypeSelectorProps {
  selectedType: string
  setSelectedType: (type: string) => void
  setErrors?: (fn: (prev: any) => any) => void
  cameraIcon: string
  homeIcon: string
}

const UserTypeSelector: React.FC<UserTypeSelectorProps> = ({
  selectedType,
  setSelectedType,
  setErrors,
  cameraIcon,
  homeIcon,
}) => {
  return (
    <div className="flex gap-4">
      {["renter", "merchant"].map((type) => {
        const isSelected = selectedType === type
        const icon = type === "renter" ? cameraIcon : homeIcon
        const label = type === "renter" ? "Renter" : "Merchant"
        const desc =
          type === "renter" ? "Find & rent equipment" : "List & rent equipment"
        return (
          <button
            key={type}
            type="button"
            onClick={() => {
              setSelectedType(type)
              setErrors?.((prev) => ({ ...prev, type: "" }))
            }}
            className={
              `flex flex-1 cursor-pointer flex-col items-center rounded-xl border-2 px-2 py-6 transition-colors ` +
              (isSelected
                ? "border-sky-500 bg-sky-50"
                : "border-gray-200 bg-white hover:border-sky-500")
            }
            aria-pressed={isSelected}
          >
            <div className="mb-3 flex h-12 w-12 items-center justify-center rounded-full bg-sky-100">
              <img src={icon} alt={label} className="h-5 w-6" />
            </div>
            <span className="mb-1 text-base font-medium text-gray-900">
              {label}
            </span>
            <span className="text-center text-xs text-gray-500">{desc}</span>
          </button>
        )
      })}
    </div>
  )
}

export { UserTypeSelector }

import React from "react"

interface StepItemProps {
  number: number | string
  title: string
  description: string
}

const StepItem: React.FC<StepItemProps> = ({ number, title, description }) => (
  <div className="flex items-start space-x-4">
    <div className="flex h-8 w-8 flex-shrink-0 items-center justify-center rounded-full bg-blue-100 text-sm font-semibold text-blue-600">
      {number}
    </div>
    <div className="flex-1">
      <h3 className="mb-1 text-base font-medium text-gray-900 sm:text-lg">
        {title}
      </h3>
      <p className="text-sm text-gray-600 sm:text-base">{description}</p>
    </div>
  </div>
)

export default StepItem

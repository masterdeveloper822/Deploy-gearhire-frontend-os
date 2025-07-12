import React from "react";

interface EquipmentCategoriesSelectorProps {
  categories: string[];
  selected: string[];
  onChange: (selected: string[]) => void;
}

export default function EquipmentCategoriesSelector({ categories, selected, onChange }: EquipmentCategoriesSelectorProps) {
  const handleToggle = (cat: string) => {
    if (selected.includes(cat)) {
      onChange(selected.filter(c => c !== cat));
    } else {
      onChange([...selected, cat]);
    }
  };
  return (
    <div className="grid grid-cols-4 gap-4">
      {categories.map(cat => (
        <label key={cat} className="flex items-center gap-2 bg-white border border-gray-200 rounded-lg px-4 py-3 cursor-pointer">
          <input
            type="checkbox"
            className="form-checkbox rounded border-gray-300"
            checked={selected.includes(cat)}
            onChange={() => handleToggle(cat)}
          />
          <span className="text-sm font-medium text-black">{cat}</span>
        </label>
      ))}
    </div>
  );
} 
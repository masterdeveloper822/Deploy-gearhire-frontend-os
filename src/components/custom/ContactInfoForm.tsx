import React from "react";

interface ContactInfoFormProps {
  values: {
    businessName: string;
    email: string;
    location: string;
    website: string;
  };
  onChange: (field: string, value: string) => void;
}

export default function ContactInfoForm({ values, onChange }: ContactInfoFormProps) {
  return (
    <div className="flex flex-wrap gap-6">
      <div className="flex-1 min-w-[300px]">
        <label className="block text-sm font-medium text-gray-700 mb-1">Business/Display Name *</label>
        <input className="w-full h-12 rounded-lg border border-gray-300 px-4 text-base" value={values.businessName} onChange={e => onChange('businessName', e.target.value)} />
      </div>
      <div className="flex-1 min-w-[300px]">
        <label className="block text-sm font-medium text-gray-700 mb-1">Contact Email *</label>
        <input className="w-full h-12 rounded-lg border border-gray-300 px-4 text-base" value={values.email} onChange={e => onChange('email', e.target.value)} />
      </div>
      <div className="flex-1 min-w-[300px]">
        <label className="block text-sm font-medium text-gray-700 mb-1">Location *</label>
        <input className="w-full h-12 rounded-lg border border-gray-300 px-4 text-base" value={values.location} onChange={e => onChange('location', e.target.value)} placeholder="City, Region" />
      </div>
      <div className="flex-1 min-w-[300px]">
        <label className="block text-sm font-medium text-gray-700 mb-1">Website URL</label>
        <input className="w-full h-12 rounded-lg border border-gray-300 px-4 text-base" value={values.website} onChange={e => onChange('website', e.target.value)} placeholder="https://example.com" />
      </div>
    </div>
  );
} 
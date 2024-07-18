// src/app/components/CheckboxField.tsx
import React from 'react';

interface CheckboxFieldProps {
  label: string;
  name: string;
  checked: boolean;
  onChange: (e: React.ChangeEvent<HTMLInputElement>) => void;
}

const CheckboxField: React.FC<CheckboxFieldProps> = ({ label, name, checked, onChange }) => {
  return (
    <div className="mb-1 flex items-center justify-center">
      <input
        type="checkbox"
        className="mr-2 rounded-full border-gray-300 text-indigo-600 focus:ring-indigo-500"
        name={name}
        checked={checked}
        onChange={onChange}
      />
      <label className="text-gray-700 md:text-xs sm:text-[7px]">{label}</label>
    </div>
  );
};

export default CheckboxField;

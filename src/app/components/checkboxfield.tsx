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
        className="mr-2 rounded-full"
        name={name}
        checked={checked}
        onChange={onChange}
      />
      <label className="text-gray-700">{label}</label>
    </div>
  );
};

export default CheckboxField;

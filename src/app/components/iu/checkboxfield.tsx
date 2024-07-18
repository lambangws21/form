"use client";
import React from "react";

interface CheckboxFieldProps {
  label: string;
  name: string;
  checked?: boolean;
  onChange: (e: React.ChangeEvent<HTMLInputElement>) => void;
  className?: string;
}

const CheckboxField: React.FC<CheckboxFieldProps> = ({ label, name, checked, onChange, className }) => (
  <div className={`mb-4 ${className}`}>
    <label htmlFor={name} className="block text-sm font-medium text-gray-700">{label}</label>
    <input
      type="checkbox"
      id={name}
      name={name}
      checked={checked}
      onChange={onChange}
      className="mt-1 h-4 w-4 text-indigo-600 border-gray-300 rounded focus:ring-indigo-500"
    />
  </div>
);

export default CheckboxField;

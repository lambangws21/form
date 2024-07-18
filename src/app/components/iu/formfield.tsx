"use client";
import React from "react";

interface FormFieldProps {
  label: string;
  name: string;
  value?: string;
  onChange: (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => void;
  className?: string;
}

const FormField: React.FC<FormFieldProps> = ({ label, name, value, onChange, className }) => (
  <div className={`mb-4 ${className}`}>
    <label htmlFor={name} className="block text-sm font-medium text-gray-700">{label}</label>
    <input
      id={name}
      name={name}
      value={value}
      onChange={onChange}
      className="mt-1 block w-full border-gray-300 rounded-md shadow-sm focus:border-indigo-500 focus:ring-indigo-500 sm:text-sm"
    />
  </div>
);

export default FormField;

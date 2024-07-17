// src/app/components/FormField.tsx
import React from 'react';

interface FormFieldProps {
  label: string;
  name: string;
  value: string;
  onChange: (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => void;
  type?: 'text' | 'textarea';
}

const FormField: React.FC<FormFieldProps> = ({ label, name, value, onChange, type = 'text' }) => {
  return (
    <div className="items-center  inline-flex mb-2 py-2">
      <label className="w-1/3 text-gray-700">{label}:</label>
      {type === 'text' ? (
        <input
          className="w-full px-3 py-1 border-inherit rounded-xl"
          name={name}
          value={value}
          onChange={onChange}
        />
      ) : (
        <textarea
          className="w-full px-2 py-1 border-inherit rounded-xl"
          name={name}
          value={value}
          onChange={onChange}
        />
      )}
    </div>
  );
};

export default FormField;

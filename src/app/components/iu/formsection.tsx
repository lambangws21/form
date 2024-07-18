"use client";
import React from "react";
import FormField from "./formfield";
import CheckboxField from "./checkboxfield";

interface FormSectionProps {
  title: string;
  fields: Array<{
    label: string;
    name: string;
    type?: string;
    value?: string;
    checked?: boolean;
    onChange: (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => void;
    className?: string;
  }>;
  additionalClasses?: string;
}

const FormSection: React.FC<FormSectionProps> = ({ title, fields, additionalClasses }) => {
  return (
    <div className={`mb-6 p-4 sm:p-2 ${additionalClasses}`}>
      <div className="text-2xl font-bold mb-4 uppercase flex items-center justify-start sm:text-md sm:mt-2">
        <div className="text-5xl mr-3 font-bold bg-red-300 border">{title.charAt(0)}</div> {title}
      </div>
      <div className="relative grid gap-4">
        <div className="flex flex-col justify-center border-b-8">
          {fields.map((field, index) => (
            <div key={index} className={`flex flex-wrap items-center gap-3 mb-2 ${field.className ?? ""}`}>
              {field.type === "checkbox" ? (
                <CheckboxField
                  label={field.label}
                  name={field.name}
                  checked={field.checked ?? false}
                  onChange={field.onChange}
                  className="w-full md:w-1/2"
                />
              ) : (
                <FormField
                  label={field.label}
                  name={field.name}
                  value={field.value}
                  onChange={field.onChange}
                  className="w-full md:w-1/2"
                />
              )}
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default FormSection;

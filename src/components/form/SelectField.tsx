import React, { ChangeEvent } from 'react';

export interface SelectOption {
  value: string;
  title: string;
}

interface SelectFormProps {
  label: string;
  onChange: (event: ChangeEvent<HTMLSelectElement>) => void;
  selectedValue: string;
  name: string;
  options: SelectOption[];
  value: string;
  showLabel?: boolean;
  required?: boolean;
  inputStyle?: string;
}

const SelectField: React.FC<SelectFormProps> = ({
  label,
  onChange,
  selectedValue,
  name,
  options,
  value,
  inputStyle,
  showLabel = true,
  required = true,
}) => {
  return (
    <div className="w-full sm:flex-1">
      {showLabel && (
        <label
          htmlFor="countries"
          className="block mb-2 text-sm font-medium text-gray-900 dark:text-white"
        >
          {label}
        </label>
      )}
      <select
        id={name}
        name={name}
        required={required}
        onChange={onChange}
        value={value}
        className={`border border-gray-300 text-gray-900 sm:text-sm  pr-2.5  block w-full p-2.5 dark:bg-[#0F172A]  dark:border-gray-600 dark:placeholder-gray-400 dark:text-white active:outline-none focus:outline-none focus:border-white form-input ${inputStyle}`}
      >
        <option value="">{selectedValue}</option>
        {options.map((data) => (
          <option key={data.value} value={data.value}>
            {data.title}
          </option>
        ))}
      </select>
    </div>
  );
};

export default SelectField;

import React, { ChangeEvent } from 'react';
import { LuAsterisk } from 'react-icons/lu';

interface InputFormProps {
  label: string;
  type?: string;
  name: string;
  placeHolder?: string;
  value: string | number;
  inputStyle?: string;
  showLabel?: boolean;
  required?: boolean;
  onChange: (event: ChangeEvent<HTMLInputElement>) => void;
}

const InputField: React.FC<InputFormProps> = ({
  label,
  name,
  placeHolder,
  onChange,
  value,
  inputStyle,
  type = 'text',
  showLabel = true,
  required = true,
}) => {
  return (
    <div className="w-full sm:flex-1">
      <div className="flex items-start gap-1">
        <div>
          {showLabel && (
            <label
              htmlFor={name}
              className="block mb-2 text-sm font-medium text-white"
            >
              {label}
            </label>
          )}
        </div>

        {required && <LuAsterisk className="text-red-600 text-xs" />}
      </div>
      <div className="relative">
        <input
          type={type}
          name={name}
          id={name}
          className={`border sm:text-sm  pr-2.5  block w-full p-2.5 bg-[#1e293b]  border-gray-600 placeholder-gray-400 text-white active:outline-none focus:outline-none  form-input rounded-lg ${inputStyle}`}
          placeholder={placeHolder}
          required={required}
          onChange={onChange}
          value={value}
        />
      </div>
    </div>
  );
};

export default InputField;

import { ChangeEvent, FC } from 'react';
import { LuAsterisk } from 'react-icons/lu';

interface TextAreaFormProps {
  label: string;
  name: string;
  placeHolder?: string;
  onChange: (event: ChangeEvent<HTMLTextAreaElement>) => void;
  value: string;
  rows?: number;
  cols?: number;
  showLabel?: boolean;
  required?: boolean;
  inputStyle?: string;
}

const TextArea: FC<TextAreaFormProps> = ({
  label,
  name,
  placeHolder,
  onChange,
  value,
  inputStyle,
  rows = 8,
  cols = 4,
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
              className="block mb-2 text-sm font-medium text-gray-900 dark:text-gray-400"
            >
              {label}
            </label>
          )}
        </div>

        {required && <LuAsterisk className="text-red-600 text-xs" />}
      </div>
      <div className="relative">
        <textarea
          cols={cols}
          rows={rows}
          name={name}
          id={name}
          className={`border border-gray-300 text-gray-900 sm:text-sm  pr-2.5  block w-full p-2.5 dark:bg-[#0F172A]  dark:border-gray-600 dark:placeholder-gray-400 dark:text-white active:outline-none focus:outline-none focus:border-white form-input ${inputStyle}`}
          placeholder={placeHolder}
          required={required}
          onChange={onChange}
          value={value}
        />
      </div>
    </div>
  );
};

export default TextArea;

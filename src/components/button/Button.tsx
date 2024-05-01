import React from 'react';

interface ButtonProps {
  title: string;
  onClick: () => unknown;
  disabled?: boolean;
  styles?: string;
}

const Button: React.FC<ButtonProps> = ({
  title,
  onClick,
  disabled,
  styles,
}) => {
  return (
    <button
      className={`w-full cursor-pointer rounded-md bg-[#6366f2] p-4 text-white transition hover:bg-opacity-90 ${styles}`}
      onClick={onClick}
      disabled={disabled}
    >
      {title}
    </button>
  );
};

export default Button;

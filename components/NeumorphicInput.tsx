
import React from 'react';

type InputProps = React.InputHTMLAttributes<HTMLInputElement>;
type TextAreaProps = React.TextareaHTMLAttributes<HTMLTextAreaElement>;

interface NeumorphicInputProps {
  as?: 'input' | 'textarea';
  className?: string;
}

const NeumorphicInput: React.FC<(InputProps | TextAreaProps) & NeumorphicInputProps> = ({ as = 'input', className = '', ...props }) => {
  const commonClasses = `w-full bg-[#e0e5ec] rounded-lg shadow-[inset_5px_5px_10px_#a3b1c6,inset_-5px_-5px_10px_#ffffff] transition-shadow duration-300 focus:outline-none focus:ring-2 focus:ring-cyan-400 placeholder-gray-500 text-gray-800 ${className}`;

  if (as === 'textarea') {
    return <textarea className={`${commonClasses} p-4`} {...(props as TextAreaProps)} />;
  }

  return <input className={`${commonClasses} p-3`} {...(props as InputProps)} />;
};

export default NeumorphicInput;

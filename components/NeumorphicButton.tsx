
import React from 'react';

interface NeumorphicButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  children: React.ReactNode;
  className?: string;
  padding?: string;
}

const NeumorphicButton: React.FC<NeumorphicButtonProps> = ({ children, className = '', padding = 'py-3 px-6', ...props }) => {
  return (
    <button
      className={`rounded-lg bg-[#e0e5ec] text-gray-700 font-semibold shadow-[5px_5px_10px_#a3b1c6,-5px_-5px_10px_#ffffff] active:shadow-[inset_5px_5px_10px_#a3b1c6,inset_-5px_-5px_10px_#ffffff] transition-all duration-150 focus:outline-none ${padding} ${className}`}
      {...props}
    >
      {children}
    </button>
  );
};

export default NeumorphicButton;

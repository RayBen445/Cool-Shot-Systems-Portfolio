import React from 'react';

interface NeumorphicCardProps {
  children: React.ReactNode;
  className?: string;
  padding?: string;
}

const NeumorphicCard: React.FC<NeumorphicCardProps> = ({ children, className = '', padding = 'p-6' }) => {
  return (
    <div
      className={`rounded-xl bg-[#e0e5ec] shadow-[7px_7px_15px_#a3b1c6,-7px_-7px_15px_#ffffff] transition-all duration-300 ease-in-out hover:shadow-[10px_10px_20px_#a3b1c6,-10px_-10px_20px_#ffffff] hover:-translate-y-1 hover:scale-[1.02] ${padding} ${className}`}
    >
      {children}
    </div>
  );
};

export default NeumorphicCard;

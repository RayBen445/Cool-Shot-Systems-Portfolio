
import React from 'react';

const Footer: React.FC = () => {
  return (
    <footer className="bg-[#e0e5ec] mt-8">
      <div className="container mx-auto py-6 px-4 sm:px-6 lg:px-8 text-center text-gray-500">
        <p>&copy; {new Date().getFullYear()} Heritage Oladoye. All Rights Reserved.</p>
        <p className="mt-1 text-sm">Designed with Neumorphism & Built with React</p>
      </div>
    </footer>
  );
};

export default Footer;
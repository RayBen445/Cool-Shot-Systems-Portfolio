
import React from 'react';
import { NavLink } from 'react-router-dom';

const Header: React.FC = () => {
  const navItems = [
    { path: '/', label: 'Home' },
    { path: '/projects', label: 'Projects' },
    { path: '/skills', label: 'Skills' },
    { path: '/support', label: 'Support' },
  ];

  const getNavLinkClass = ({ isActive }: { isActive: boolean }): string => {
    const baseClasses = 'px-4 py-2 rounded-lg font-medium transition-all duration-200';
    const activeClasses = 'shadow-[inset_5px_5px_10px_#a3b1c6,inset_-5px_-5px_10px_#ffffff] text-cyan-600';
    const inactiveClasses = 'shadow-[5px_5px_10px_#a3b1c6,-5px_-5px_10px_#ffffff] hover:text-cyan-500';
    return `${baseClasses} ${isActive ? activeClasses : inactiveClasses}`;
  };

  return (
    <header className="sticky top-0 z-50 bg-[#e0e5ec] bg-opacity-80 backdrop-blur-sm">
      <nav className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-20">
          <div className="flex-shrink-0">
            <NavLink to="/" className="text-2xl font-bold text-gray-800">
              Heritage Oladoye
            </NavLink>
          </div>
          <div className="hidden md:block">
            <div className="ml-10 flex items-baseline space-x-4">
              {navItems.map((item) => (
                <NavLink key={item.label} to={item.path} className={getNavLinkClass}>
                  {item.label}
                </NavLink>
              ))}
            </div>
          </div>
        </div>
      </nav>
    </header>
  );
};

export default Header;
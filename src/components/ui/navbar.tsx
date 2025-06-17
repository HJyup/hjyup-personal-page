'use client';

import { useState } from 'react';

const Navbar = () => {
  const [activeSection, setActiveSection] = useState('home');

  const navItems = [
    { id: 'home', label: 'Home' },
    { id: 'about', label: 'About' },
    { id: 'experience', label: 'Work' },
    { id: 'projects', label: 'Projects' },
    { id: 'contact', label: 'Contact' },
  ];

  const scrollToSection = (sectionId: string) => {
    setActiveSection(sectionId);
    if (sectionId === 'home') {
      window.scrollTo({ top: 0, behavior: 'smooth' });
    } else {
      const element = document.getElementById(sectionId);
      if (element) {
        element.scrollIntoView({ behavior: 'smooth' });
      }
    }
  };

  return (
    <nav
      className={`fixed top-2 sm:top-3 md:top-4 left-1/2 transform -translate-x-1/2 z-50 transition-all duration-500 ease-out rounded-full border-2 border-white/40 bg-gradient-to-br from-white/25 to-white/15 shadow-md backdrop-blur-2xl w-[95%] sm:w-auto max-w-sm sm:max-w-none backdrop-blur-3xl bg-white/30 shadow-[0_20px_60px_rgba(0,0,0,0.15)] border-white/50`}
      style={{
        backdropFilter: 'blur(20px) saturate(180%)',
        WebkitBackdropFilter: 'blur(20px) saturate(180%)',
      }}
    >
      <div className="flex items-center justify-center space-x-0.5 sm:space-x-1 p-1.5 sm:p-2 overflow-hidden">
        {navItems.map(item => {
          const isActive = activeSection === item.id;

          return (
            <button
              key={item.id}
              onClick={() => scrollToSection(item.id)}
              className={`group relative flex items-center justify-center px-2 sm:px-3 md:px-4 py-1.5 sm:py-2 md:py-2.5 rounded-full transition-all duration-300 ease-out transform hover:scale-105 backdrop-blur-xl border flex-1 sm:flex-none min-w-0 ${
                isActive
                  ? 'bg-blue-400/40 text-black border-white/60 backdrop-blur-2xl'
                  : 'hover:bg-white/20 text-gray-700 hover:text-black border-white/20 hover:border-white/40 backdrop-blur-xl hover:shadow-[0_4px_12px_rgba(0,0,0,0.1)]'
              }`}
              style={{
                backdropFilter: isActive
                  ? 'blur(16px) saturate(200%)'
                  : 'blur(12px) saturate(150%)',
                WebkitBackdropFilter: isActive
                  ? 'blur(16px) saturate(200%)'
                  : 'blur(12px) saturate(150%)',
              }}
            >
              <span className="text-xs sm:text-sm font-medium tracking-wide relative z-10 truncate">
                {item.label}
              </span>
            </button>
          );
        })}
      </div>
    </nav>
  );
};

export { Navbar };

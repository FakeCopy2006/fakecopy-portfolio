import React, { useState, useEffect } from 'react';
import { motion } from 'framer-motion';
import { Home, User, FolderOpen, Mail } from 'lucide-react';

const Navbar = () => {
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 50);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const leftLinks = [
    { name: 'Home', href: '#home', icon: <Home className="w-5 h-5 md:hidden" /> },
    { name: 'Chi Sono', href: '#about', icon: <User className="w-5 h-5 md:hidden" /> },
  ];

  const rightLinks = [
    { name: 'Progetti', href: '#projects', icon: <FolderOpen className="w-5 h-5 md:hidden" /> },
    { name: 'Contatti', href: '#contact', icon: <Mail className="w-5 h-5 md:hidden" /> },
  ];

  return (
    <motion.div
      initial={{ y: -100 }}
      animate={{ y: 0 }}
      transition={{ duration: 0.5 }}
      className={`fixed top-0 left-0 w-full z-50 flex justify-center transition-all duration-500 ${
        scrolled ? 'pt-4 md:pt-6 px-4' : 'pt-0 px-0'
      }`}
    >
      <nav 
        className={`w-full transition-all duration-500 grid grid-cols-3 items-center ${
          scrolled 
            ? 'max-w-4xl bg-[#0a0a0a]/90 backdrop-blur-md border border-white/10 rounded-full px-6 md:px-8 py-3 shadow-2xl' 
            : 'max-w-7xl bg-transparent px-6 py-4 md:py-6 border border-transparent rounded-none'
        }`}
      >
        {/* Left Links */}
        <div className="flex gap-4 md:gap-8 justify-start items-center">
          {leftLinks.map((link) => (
            <a 
              key={link.name} 
              href={link.href}
              className="text-sm font-medium text-gray-400 hover:text-white transition-colors"
              title={link.name}
            >
              {link.icon}
              <span className="hidden md:block">{link.name}</span>
            </a>
          ))}
        </div>

        {/* Center Logo */}
        <a href="#home" className="flex items-center justify-center">
          <img src="/logo.png" alt="Fake Copy Logo" className="h-8 md:h-10 w-auto object-contain" />
        </a>
        
        {/* Right Links */}
        <div className="flex gap-4 md:gap-8 justify-end items-center">
          {rightLinks.map((link) => (
            <a 
              key={link.name} 
              href={link.href}
              className="text-sm font-medium text-gray-400 hover:text-white transition-colors"
              title={link.name}
            >
              {link.icon}
              <span className="hidden md:block">{link.name}</span>
            </a>
          ))}
        </div>
      </nav>
    </motion.div>
  );
};

export default Navbar;

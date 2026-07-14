import React, { useState, useEffect } from 'react';
import { motion } from 'framer-motion';

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
    { name: 'Home', href: '#home' },
    { name: 'Chi Sono', href: '#about' },
  ];

  const rightLinks = [
    { name: 'Progetti', href: '#projects' },
    { name: 'Contatti', href: '#contact' },
  ];

  return (
    <motion.div
      initial={{ y: -100 }}
      animate={{ y: 0 }}
      transition={{ duration: 0.5 }}
      className={`fixed top-0 left-0 w-full z-50 flex justify-center transition-all duration-500 ${
        scrolled ? 'pt-6 px-4' : 'pt-0 px-0'
      }`}
    >
      <nav 
        className={`w-full transition-all duration-500 flex justify-center md:grid md:grid-cols-3 items-center ${
          scrolled 
            ? 'max-w-4xl bg-[#0a0a0a]/90 backdrop-blur-md border border-white/10 rounded-full px-8 py-3 shadow-2xl' 
            : 'max-w-7xl bg-transparent px-6 py-6 border border-transparent rounded-none'
        }`}
      >
        {/* Left Links */}
        <div className="hidden md:flex gap-8 justify-start items-center">
          {leftLinks.map((link) => (
            <a 
              key={link.name} 
              href={link.href}
              className="text-sm font-medium text-gray-400 hover:text-white transition-colors"
            >
              {link.name}
            </a>
          ))}
        </div>

        {/* Center Logo */}
        <a href="#home" className="flex items-center justify-center">
          <img src="/logo.png" alt="Fake Copy Logo" className="h-8 md:h-10 w-auto object-contain" />
        </a>
        
        {/* Right Links */}
        <div className="hidden md:flex gap-8 justify-end items-center">
          {rightLinks.map((link) => (
            <a 
              key={link.name} 
              href={link.href}
              className="text-sm font-medium text-gray-400 hover:text-white transition-colors"
            >
              {link.name}
            </a>
          ))}
        </div>
      </nav>
    </motion.div>
  );
};

export default Navbar;

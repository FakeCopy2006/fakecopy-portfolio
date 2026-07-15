import React from 'react';
import { motion } from 'framer-motion';

const Hero = () => {
  return (
    <section id="home" className="min-h-screen flex flex-col justify-center items-center relative px-6 overflow-hidden">
      {/* Immagine in background (2026) animata */}
      <motion.div 
        initial={{ opacity: 0, scale: 1.2, filter: 'blur(10px)' }}
        animate={{ opacity: 1, scale: 1, filter: 'blur(0px)' }}
        transition={{ duration: 1.5, ease: "easeOut" }}
        className="absolute inset-0 flex items-center justify-center pointer-events-none select-none z-0"
      >
        <img 
          src="/2026-bg.png" 
          alt="2026 Background" 
          className="w-[150vw] sm:w-[120vw] md:w-[90vw] md:min-w-[1200px] max-w-none opacity-40 object-contain"
        />
      </motion.div>

      {/* Testo principale (portfolio-title.png) animato in ingresso */}
      <div className="w-full max-w-7xl mx-auto text-center z-10">
        <motion.div
          initial={{ opacity: 0, y: 100 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1.2, delay: 0.4, type: "spring", stiffness: 60, damping: 20 }}
        >
          <motion.img 
            src="/portfolio-title.png" 
            alt="Fake Copy Portfolio Graphic Design" 
            className="w-full max-w-[90%] md:max-w-6xl mx-auto drop-shadow-2xl"
            whileHover={{ scale: 1.03 }}
            transition={{ type: "spring", stiffness: 400, damping: 25 }}
          />
        </motion.div>
      </div>
    </section>
  );
};

export default Hero;

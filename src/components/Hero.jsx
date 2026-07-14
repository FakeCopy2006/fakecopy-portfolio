import React from 'react';
import { motion } from 'framer-motion';
import { ArrowDown } from 'lucide-react';

const Hero = () => {
  return (
    <section id="home" className="min-h-screen flex flex-col justify-center items-center relative px-6">
      {/* Immagine in background (2026) simile all'immagine reference */}
      <div className="absolute inset-0 flex items-center justify-center overflow-hidden pointer-events-none select-none z-0">
        <img 
          src="/2026-bg.png" 
          alt="2026 Background" 
          className="w-[110vw] min-w-[1200px] md:w-[90vw] max-w-none opacity-40 object-contain"
        />
      </div>

      <div className="w-full max-w-7xl mx-auto text-center z-10">
        <motion.div
          initial={{ opacity: 0, scale: 0.9 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.8, ease: 'easeOut' }}
        >
          <img 
            src="/portfolio-title.png" 
            alt="Fake Copy Portfolio Graphic Design" 
            className="w-full max-w-[90%] md:max-w-5xl mx-auto drop-shadow-2xl"
          />
        </motion.div>


      </div>
    </section>
  );
};

export default Hero;

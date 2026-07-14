import React, { useState } from 'react';
import { motion, useMotionValue, useTransform } from 'framer-motion';

const Hero = () => {
  // Logica per l'effetto 3D
  const x = useMotionValue(0);
  const y = useMotionValue(0);
  const rotateX = useTransform(y, [-300, 300], [15, -15]);
  const rotateY = useTransform(x, [-300, 300], [-15, 15]);

  const handleMouseMove = (event) => {
    const rect = event.currentTarget.getBoundingClientRect();
    const mouseX = event.clientX - rect.left - rect.width / 2;
    const mouseY = event.clientY - rect.top - rect.height / 2;
    x.set(mouseX);
    y.set(mouseY);
  };

  const handleMouseLeave = () => {
    x.set(0);
    y.set(0);
  };

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

      <div 
        className="w-full max-w-7xl mx-auto text-center z-10"
        onMouseMove={handleMouseMove}
        onMouseLeave={handleMouseLeave}
        style={{ perspective: 1200 }}
      >
        <motion.div
          initial={{ opacity: 0, scale: 0.9 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.8, ease: 'easeOut' }}
          style={{ rotateX, rotateY, transformStyle: "preserve-3d" }}
          className="will-change-transform"
        >
          <motion.img 
            src="/portfolio-title.png" 
            alt="Fake Copy Portfolio Graphic Design" 
            className="w-full max-w-[90%] md:max-w-6xl mx-auto drop-shadow-2xl"
            style={{ transform: "translateZ(50px)" }}
            whileHover={{ scale: 1.05 }}
            transition={{ type: "spring", stiffness: 300, damping: 20 }}
          />
        </motion.div>


      </div>
    </section>
  );
};

export default Hero;

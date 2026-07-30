import React, { useEffect, useState } from 'react';
import { motion } from 'framer-motion';

const ElegantBackground = () => {
  const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 });

  useEffect(() => {
    const handleMouseMove = (e) => {
      setMousePosition({
        x: e.clientX,
        y: e.clientY,
      });
    };

    window.addEventListener("mousemove", handleMouseMove);
    return () => window.removeEventListener("mousemove", handleMouseMove);
  }, []);

  return (
    <div className="fixed inset-0 z-[-1] overflow-hidden pointer-events-none bg-[#121212]">
      
      {/* Orb interattiva che segue il mouse in modo fluido */}
      <motion.div
        className="absolute w-[600px] h-[600px] rounded-full opacity-[0.15] pointer-events-none"
        style={{
          background: 'radial-gradient(circle, rgba(139,92,246,0.8) 0%, rgba(59,130,246,0) 70%)',
        }}
        animate={{
          x: mousePosition.x - 300,
          y: mousePosition.y - 300,
        }}
        transition={{
          type: "spring",
          damping: 40,
          stiffness: 50,
          mass: 0.5
        }}
      />

      {/* Sfondo animato fluido primario */}
      <motion.div 
        animate={{ 
          scale: [1, 1.2, 1],
          opacity: [0.3, 0.5, 0.3],
          rotate: [0, 90, 0]
        }}
        transition={{ duration: 20, repeat: Infinity, ease: "linear" }}
        className="absolute top-[-20%] left-[-10%] w-[70vw] h-[70vw] rounded-full pointer-events-none bg-[radial-gradient(circle,rgba(139,92,246,0.25)_0%,rgba(0,0,0,0)_70%)]"
      />

      {/* Sfondo animato fluido secondario */}
      <motion.div 
        animate={{ 
          scale: [1, 1.5, 1],
          opacity: [0.2, 0.4, 0.2],
          rotate: [0, -90, 0]
        }}
        transition={{ duration: 25, repeat: Infinity, ease: "linear" }}
        className="absolute bottom-[-20%] right-[-10%] w-[60vw] h-[60vw] rounded-full pointer-events-none bg-[radial-gradient(circle,rgba(59,130,246,0.25)_0%,rgba(0,0,0,0)_70%)]"
      />

      {/* Noise Texture leggerissima per un look premium "opaco" */}
      <div 
        className="absolute inset-0 opacity-[0.03] pointer-events-none"
        style={{
          backgroundImage: `url("data:image/svg+xml,%3Csvg viewBox='0 0 200 200' xmlns='http://www.w3.org/2000/svg'%3E%3Cfilter id='noiseFilter'%3E%3CfeTurbulence type='fractalNoise' baseFrequency='0.75' numOctaves='3' stitchTiles='stitch'/%3E%3C/filter%3E%3Crect width='100%25' height='100%25' filter='url(%23noiseFilter)'/%3E%3C/svg%3E")`,
          backgroundRepeat: 'repeat'
        }}
      ></div>

      {/* Vignetta scura per dare profondità e concentrare l'attenzione al centro */}
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,_transparent_10%,_#121212_100%)] opacity-80"></div>
    </div>
  );
};

export default ElegantBackground;

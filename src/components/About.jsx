import React, { useState, useEffect } from 'react';
import { motion } from 'framer-motion';
import Tilt from 'react-parallax-tilt';
import { Fingerprint, MonitorSmartphone, Palette, PenTool, Cpu, User, Zap, Mail, Code, Briefcase, ExternalLink } from 'lucide-react';

const About = () => {
  const [isMobile, setIsMobile] = useState(false);

  useEffect(() => {
    const checkMobile = () => {
      setIsMobile(window.innerWidth < 768);
    };
    checkMobile();
    window.addEventListener('resize', checkMobile);
    return () => window.removeEventListener('resize', checkMobile);
  }, []);

  const skills = [
    { name: 'UI/UX Design', icon: <PenTool className="w-4 h-4" /> },
    { name: 'Grafica', icon: <Palette className="w-4 h-4" /> },
    { name: 'Web App', icon: <MonitorSmartphone className="w-4 h-4" /> },
    { name: 'Sistemi', icon: <Cpu className="w-4 h-4" /> },
    { name: 'Futuro', icon: <Zap className="w-4 h-4" /> },
  ];

  const CardContent = () => (
    <div className="relative w-full h-full flex flex-col lg:flex-row overflow-hidden rounded-3xl bg-[#18181b]/60 backdrop-blur-3xl border border-white/5 shadow-[0_20px_50px_rgba(0,0,0,0.5)]">
      
      {/* Glow interni alla card per dare un po' di luce */}
      <div className="absolute top-0 right-0 w-[400px] h-[400px] bg-brand-purple/10 rounded-full blur-[100px] pointer-events-none -z-10"></div>
      <div className="absolute bottom-0 left-0 w-[300px] h-[300px] bg-brand-blue/10 rounded-full blur-[80px] pointer-events-none -z-10"></div>
      
      {/* Bordo superiore accentato */}
      <div className="absolute top-0 left-0 right-0 h-[1px] bg-gradient-to-r from-transparent via-brand-purple/50 to-transparent"></div>

      {/* Sezione Sinistra: Logo & Visual */}
      <div className="w-full lg:w-2/5 p-8 lg:p-12 flex flex-col justify-center items-center relative border-b lg:border-b-0 lg:border-r border-white/5 bg-black/20">
        
        {/* Pulsing ring dietro il logo */}
        <motion.div 
          animate={{ scale: [1, 1.1, 1], opacity: [0.3, 0.6, 0.3] }}
          transition={{ duration: 4, repeat: Infinity, ease: "easeInOut" }}
          className="absolute w-48 h-48 rounded-full border border-brand-purple/20 bg-brand-purple/5 blur-md"
        ></motion.div>
        
        <div className="w-40 h-40 lg:w-48 lg:h-48 relative z-10 flex items-center justify-center p-4">
          <img src="/logo.png" alt="Fake Copy Logo" className="w-full h-full object-contain filter drop-shadow-[0_0_15px_rgba(255,255,255,0.4)]" />
        </div>
        
        <div className="mt-8 flex gap-4 relative z-10">
          <a href="#" className="w-10 h-10 rounded-full bg-white/5 flex items-center justify-center hover:bg-white/10 hover:text-brand-purple transition-colors border border-white/5">
            <Code className="w-5 h-5 text-gray-400" />
          </a>
          <a href="#" className="w-10 h-10 rounded-full bg-white/5 flex items-center justify-center hover:bg-white/10 hover:text-brand-blue transition-colors border border-white/5">
            <Briefcase className="w-5 h-5 text-gray-400" />
          </a>
          <a href="#" className="w-10 h-10 rounded-full bg-white/5 flex items-center justify-center hover:bg-white/10 hover:text-brand-magenta transition-colors border border-white/5">
            <Mail className="w-5 h-5 text-gray-400" />
          </a>
        </div>
        
        <div className="absolute bottom-4 left-4 text-[10px] text-gray-600 font-mono tracking-widest uppercase">
          ID: FK-2026-X
        </div>
      </div>

      {/* Sezione Destra: Testo & Competenze */}
      <div className="w-full lg:w-3/5 p-8 lg:p-12 relative z-10 flex flex-col justify-center">
        
        <div className="flex items-center gap-3 mb-2">
          <Fingerprint className="w-5 h-5 text-brand-magenta" />
          <span className="text-brand-magenta font-mono text-xs tracking-widest uppercase">Profilo Sistema</span>
        </div>
        
        <h3 className="text-3xl lg:text-4xl font-display font-bold text-white mb-6 uppercase tracking-wider">
          Fake Copy
        </h3>
        
        <p className="text-gray-400 text-sm lg:text-base leading-relaxed mb-8 max-w-lg">
          Sono uno sviluppatore e designer specializzato nella creazione di esperienze digitali ad alto impatto visivo.
          Unisco competenze grafiche avanzate a uno sviluppo web moderno per plasmare interfacce pulite, veloci e memorabili.
          Dalla progettazione UI/UX fino all'architettura di sistemi complessi.
        </p>
        
        <div>
          <h4 className="text-white text-sm font-mono uppercase tracking-widest mb-4 border-b border-white/5 pb-2 inline-block">Competenze Primarie</h4>
          <div className="flex flex-wrap gap-3">
            {skills.map((skill, index) => (
              <div 
                key={index} 
                className="flex items-center gap-2 px-4 py-2 rounded-lg bg-white/5 border border-white/10 text-gray-300 text-xs font-mono hover:bg-white/10 hover:border-white/20 transition-all cursor-default"
              >
                <span className="text-brand-purple">{skill.icon}</span>
                {skill.name}
              </div>
            ))}
          </div>
        </div>

      </div>
    </div>
  );

  return (
    <section id="about" className="py-24 px-6 relative z-10">
      
      <motion.div
        initial={{ opacity: 0, y: -20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.8 }}
        className="text-center mb-16 relative"
      >
        <p className="text-brand-purple font-mono text-sm tracking-[0.3em] mb-4 uppercase">System Data</p>
        <h2 className="text-5xl md:text-6xl font-display tracking-widest uppercase text-white drop-shadow-[0_0_15px_rgba(255,255,255,0.1)]">
          IL MIO <span className="text-transparent bg-clip-text bg-gradient-to-r from-brand-purple via-brand-blue to-brand-magenta">NUCLEO</span>
        </h2>
      </motion.div>

      <div className="max-w-5xl mx-auto relative">
        {/* Glow di sfondo generico dietro la card */}
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[80%] h-[80%] bg-brand-purple/20 blur-[120px] rounded-full pointer-events-none -z-20"></div>
        
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 1, type: "spring", stiffness: 100, damping: 20 }}
        >
          {isMobile ? (
            /* Versione Mobile (No Tilt per non laggare) */
            <div className="w-full">
              <CardContent />
            </div>
          ) : (
            /* Versione Desktop (Con Tilt abilitato e glare) */
            <Tilt 
              tiltMaxAngleX={5} 
              tiltMaxAngleY={5} 
              scale={1.02} 
              transitionSpeed={2500} 
              glareEnable={true} 
              glareMaxOpacity={0.15} 
              glareColor="#ffffff" 
              glarePosition="all" 
              className="w-full"
            >
              <CardContent />
            </Tilt>
          )}
        </motion.div>
      </div>
      
    </section>
  );
};

export default About;

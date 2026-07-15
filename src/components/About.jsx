import React from 'react';
import { motion } from 'framer-motion';
import { Fingerprint, MonitorSmartphone, Palette, PenTool, Cpu, User, Zap } from 'lucide-react';

const About = () => {
  const nodes = [
    { id: 1, title: 'CHI SONO', desc: 'Sviluppatore e designer con la passione per il cyberpunk.', icon: <User className="w-5 h-5 text-brand-purple" />, pos: 'top-10 left-0 md:left-[10%]', delay: 0.2 },
    { id: 2, title: 'GRAFICA', desc: 'Creazione di identità visive forti e d\'impatto.', icon: <Palette className="w-5 h-5 text-brand-blue" />, pos: 'top-1/2 -translate-y-1/2 left-0 md:left-[5%]', delay: 0.4 },
    { id: 3, title: 'UX/UI DESIGN', desc: 'Interfacce intuitive focalizzate sull\'esperienza utente.', icon: <PenTool className="w-5 h-5 text-brand-magenta" />, pos: 'bottom-10 left-0 md:left-[10%]', delay: 0.6 },
    { id: 4, title: 'WEB APP', desc: 'Sviluppo front-end moderno con React e Tailwind.', icon: <MonitorSmartphone className="w-5 h-5 text-brand-purple" />, pos: 'top-10 right-0 md:right-[10%]', delay: 0.3 },
    { id: 5, title: 'SISTEMI', desc: 'Architetture solide per performance eccezionali.', icon: <Cpu className="w-5 h-5 text-brand-blue" />, pos: 'top-1/2 -translate-y-1/2 right-0 md:right-[5%]', delay: 0.5 },
    { id: 6, title: 'FUTURO', desc: 'Sempre alla ricerca di nuove tecnologie da implementare.', icon: <Zap className="w-5 h-5 text-brand-magenta" />, pos: 'bottom-10 right-0 md:right-[10%]', delay: 0.7 },
  ];

  // SVG Lines for Desktop
  const draw = {
    hidden: { pathLength: 0, opacity: 0 },
    visible: (i) => {
      const delay = 0.5 + i * 0.1;
      return {
        pathLength: 1,
        opacity: 0.5,
        transition: {
          pathLength: { delay, type: "spring", duration: 1.5, bounce: 0 },
          opacity: { delay, duration: 0.1 }
        }
      };
    }
  };

  return (
    <section id="about" className="py-24 px-6 relative z-10 overflow-hidden">
      <motion.div
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        viewport={{ once: true }}
        transition={{ duration: 0.8 }}
        className="text-center mb-16"
      >
        <p className="text-brand-purple font-mono text-sm tracking-[0.3em] mb-4 uppercase">System Data</p>
        <h2 className="text-5xl md:text-6xl font-display tracking-widest uppercase text-white">
          IL MIO <span className="text-transparent bg-clip-text bg-gradient-to-r from-brand-purple to-brand-blue">NUCLEO</span>
        </h2>
      </motion.div>

      {/* Container della Mappa (Desktop) */}
      <div className="relative max-w-6xl mx-auto min-h-[1000px] md:min-h-[700px] hidden md:block">
        
        {/* Sfondo Glowing Centrale */}
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[500px] h-[500px] bg-brand-purple/20 blur-[120px] rounded-full pointer-events-none -z-20"></div>

        {/* Linee di Connessione SVG */}
        <svg className="absolute inset-0 w-full h-full pointer-events-none -z-10">
          <defs>
            <linearGradient id="grad1" x1="0%" y1="0%" x2="100%" y2="100%">
              <stop offset="0%" stopColor="#8B5CF6" stopOpacity="1" />
              <stop offset="100%" stopColor="#3B82F6" stopOpacity="1" />
            </linearGradient>
            <linearGradient id="grad2" x1="100%" y1="0%" x2="0%" y2="100%">
              <stop offset="0%" stopColor="#EC4899" stopOpacity="1" />
              <stop offset="100%" stopColor="#8B5CF6" stopOpacity="1" />
            </linearGradient>
          </defs>
          
          {/* Nodi Sinistri */}
          <motion.line x1="50%" y1="50%" x2="20%" y2="15%" stroke="url(#grad1)" strokeWidth="2" strokeDasharray="5,5" variants={draw} custom={0} initial="hidden" whileInView="visible" viewport={{ once: true }} />
          <motion.line x1="50%" y1="50%" x2="15%" y2="50%" stroke="url(#grad1)" strokeWidth="2" strokeDasharray="5,5" variants={draw} custom={1} initial="hidden" whileInView="visible" viewport={{ once: true }} />
          <motion.line x1="50%" y1="50%" x2="20%" y2="85%" stroke="url(#grad1)" strokeWidth="2" strokeDasharray="5,5" variants={draw} custom={2} initial="hidden" whileInView="visible" viewport={{ once: true }} />
          
          {/* Nodi Destri */}
          <motion.line x1="50%" y1="50%" x2="80%" y2="15%" stroke="url(#grad2)" strokeWidth="2" strokeDasharray="5,5" variants={draw} custom={3} initial="hidden" whileInView="visible" viewport={{ once: true }} />
          <motion.line x1="50%" y1="50%" x2="85%" y2="50%" stroke="url(#grad2)" strokeWidth="2" strokeDasharray="5,5" variants={draw} custom={4} initial="hidden" whileInView="visible" viewport={{ once: true }} />
          <motion.line x1="50%" y1="50%" x2="80%" y2="85%" stroke="url(#grad2)" strokeWidth="2" strokeDasharray="5,5" variants={draw} custom={5} initial="hidden" whileInView="visible" viewport={{ once: true }} />
        </svg>

        {/* Logo Centrale */}
        <motion.div 
          initial={{ scale: 0, opacity: 0 }}
          whileInView={{ scale: 1, opacity: 1 }}
          viewport={{ once: true }}
          transition={{ type: "spring", stiffness: 200, damping: 20 }}
          className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 z-20 flex flex-col items-center"
        >
          {/* Animazione Pulse Cyber (non è un'orbita, è una pulsazione energetica) */}
          <motion.div 
            animate={{ scale: [1, 1.2, 1], opacity: [0.5, 0.8, 0.5] }}
            transition={{ duration: 2, repeat: Infinity, ease: "easeInOut" }}
            className="absolute inset-0 rounded-full border border-brand-purple/50 bg-brand-purple/10 blur-sm"
          ></motion.div>
          
          <div className="w-32 h-32 md:w-40 md:h-40 rounded-full bg-black border-2 border-brand-purple/50 flex items-center justify-center p-4 shadow-[0_0_30px_rgba(139,92,246,0.3)] relative z-10 backdrop-blur-xl">
            <img src="/logo.png" alt="Fake Copy Center Logo" className="w-full h-full object-contain" />
          </div>
        </motion.div>

        {/* Nodi (Scatole Informative) */}
        {nodes.map((node) => (
          <motion.div
            key={node.id}
            initial={{ opacity: 0, scale: 0.5, y: 20 }}
            whileInView={{ opacity: 1, scale: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: node.delay, type: "spring", stiffness: 100 }}
            className={`absolute ${node.pos} w-64 bg-black/40 backdrop-blur-xl border border-white/10 p-5 rounded-2xl shadow-xl hover:border-brand-purple/50 hover:bg-white/5 transition-colors group cursor-default z-10`}
          >
            <div className="flex items-center gap-3 mb-3">
              <div className="p-2 bg-white/5 rounded-lg border border-white/10 group-hover:border-white/30 transition-colors">
                {node.icon}
              </div>
              <h4 className="font-mono text-sm tracking-widest uppercase text-white group-hover:text-brand-purple transition-colors">{node.title}</h4>
            </div>
            <p className="text-text-muted text-sm leading-relaxed">{node.desc}</p>
          </motion.div>
        ))}
      </div>

      {/* Versione Mobile (Vertical Tree) */}
      <div className="md:hidden flex flex-col items-center gap-12 relative max-w-sm mx-auto">
        {/* Linea Verticale Connettiva */}
        <div className="absolute top-0 bottom-0 left-1/2 -translate-x-1/2 w-0.5 bg-gradient-to-b from-brand-purple via-brand-blue to-transparent -z-10 opacity-30"></div>
        
        {/* Logo in alto per mobile */}
        <motion.div 
          initial={{ scale: 0 }}
          whileInView={{ scale: 1 }}
          viewport={{ once: true }}
          className="w-32 h-32 rounded-full bg-black border-2 border-brand-purple/50 flex items-center justify-center p-4 shadow-[0_0_30px_rgba(139,92,246,0.3)] relative z-10 mb-8"
        >
          <img src="/logo.png" alt="Fake Copy Logo" className="w-full h-full object-contain" />
        </motion.div>

        {nodes.map((node, idx) => (
          <motion.div
            key={node.id}
            initial={{ opacity: 0, x: idx % 2 === 0 ? -50 : 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.1, type: "spring", stiffness: 100 }}
            className="w-full bg-black/60 backdrop-blur-xl border border-white/10 p-6 rounded-2xl shadow-xl z-10 relative"
          >
            {/* Punto di connessione sulla linea centrale */}
            <div className={`absolute top-1/2 -translate-y-1/2 ${idx % 2 === 0 ? '-right-6' : '-left-6'} w-3 h-3 rounded-full bg-brand-purple border-2 border-black hidden`}></div>
            
            <div className="flex items-center gap-3 mb-3">
              <div className="p-2 bg-white/5 rounded-lg border border-white/10">
                {node.icon}
              </div>
              <h4 className="font-mono text-sm tracking-widest uppercase text-white">{node.title}</h4>
            </div>
            <p className="text-text-muted text-sm leading-relaxed">{node.desc}</p>
          </motion.div>
        ))}
      </div>

    </section>
  );
};

export default About;

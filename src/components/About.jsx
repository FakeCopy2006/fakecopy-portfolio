import React from 'react';
import { motion } from 'framer-motion';
import Tilt from 'react-parallax-tilt';
import { Fingerprint, MonitorSmartphone, Palette, PenTool, Cpu, User, Zap } from 'lucide-react';

const About = () => {
  const nodes = [
    { id: 1, title: 'CHI SONO', desc: 'Sviluppatore e designer con la passione per il cyberpunk.', icon: <User className="w-6 h-6 text-brand-purple" />, pos: 'top-10 left-0 md:left-[5%]', delay: 0.2 },
    { id: 2, title: 'GRAFICA', desc: 'Creazione di identità visive forti e d\'impatto.', icon: <Palette className="w-6 h-6 text-brand-blue" />, pos: 'top-1/2 -translate-y-1/2 left-0 md:left-[0%]', delay: 0.4 },
    { id: 3, title: 'UX/UI DESIGN', desc: 'Interfacce intuitive focalizzate sull\'esperienza utente.', icon: <PenTool className="w-6 h-6 text-brand-magenta" />, pos: 'bottom-10 left-0 md:left-[5%]', delay: 0.6 },
    { id: 4, title: 'WEB APP', desc: 'Sviluppo front-end moderno con React e Tailwind.', icon: <MonitorSmartphone className="w-6 h-6 text-brand-purple" />, pos: 'top-10 right-0 md:right-[5%]', delay: 0.3 },
    { id: 5, title: 'SISTEMI', desc: 'Architetture solide per performance eccezionali.', icon: <Cpu className="w-6 h-6 text-brand-blue" />, pos: 'top-1/2 -translate-y-1/2 right-0 md:right-[0%]', delay: 0.5 },
    { id: 6, title: 'FUTURO', desc: 'Sempre alla ricerca di nuove tecnologie da implementare.', icon: <Zap className="w-6 h-6 text-brand-magenta" />, pos: 'bottom-10 right-0 md:right-[5%]', delay: 0.7 },
  ];

  // SVG Lines for Desktop
  const draw = {
    hidden: { pathLength: 0, opacity: 0 },
    visible: (i) => {
      const delay = 0.5 + i * 0.1;
      return {
        pathLength: 1,
        opacity: 0.7,
        transition: {
          pathLength: { delay, type: "spring", duration: 2, bounce: 0 },
          opacity: { delay, duration: 0.5 }
        }
      };
    }
  };

  return (
    <section id="about" className="py-24 px-6 relative z-10 overflow-hidden">
      <motion.div
        initial={{ opacity: 0, y: -20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.8 }}
        className="text-center mb-16 relative"
      >
        <p className="text-brand-purple font-mono text-sm tracking-[0.3em] mb-4 uppercase">System Data</p>
        <h2 className="text-5xl md:text-6xl font-display tracking-widest uppercase text-white drop-shadow-[0_0_15px_rgba(255,255,255,0.3)]">
          IL MIO <span className="text-transparent bg-clip-text bg-gradient-to-r from-brand-purple via-brand-blue to-brand-magenta animate-pulse">NUCLEO</span>
        </h2>
      </motion.div>

      {/* Container della Mappa (Desktop) */}
      <div className="relative max-w-7xl mx-auto min-h-[1000px] md:min-h-[750px] hidden md:block">
        
        {/* Sfondo Glowing Centrale Più Intenso */}
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] bg-gradient-to-tr from-brand-purple/30 via-brand-blue/20 to-brand-magenta/30 blur-[150px] rounded-full pointer-events-none -z-20"></div>

        {/* Linee di Connessione SVG con Ombre Luminose */}
        <svg className="absolute inset-0 w-full h-full pointer-events-none -z-10 drop-shadow-[0_0_8px_rgba(139,92,246,0.8)]">
          <defs>
            <linearGradient id="grad1" x1="0%" y1="0%" x2="100%" y2="100%">
              <stop offset="0%" stopColor="#8B5CF6" stopOpacity="1" />
              <stop offset="100%" stopColor="#3B82F6" stopOpacity="0.3" />
            </linearGradient>
            <linearGradient id="grad2" x1="100%" y1="0%" x2="0%" y2="100%">
              <stop offset="0%" stopColor="#EC4899" stopOpacity="1" />
              <stop offset="100%" stopColor="#8B5CF6" stopOpacity="0.3" />
            </linearGradient>
          </defs>
          
          {/* Nodi Sinistri */}
          <motion.line x1="50%" y1="50%" x2="15%" y2="15%" stroke="url(#grad1)" strokeWidth="3" strokeLinecap="round" variants={draw} custom={0} initial="hidden" whileInView="visible" viewport={{ once: true }} />
          <motion.line x1="50%" y1="50%" x2="10%" y2="50%" stroke="url(#grad1)" strokeWidth="3" strokeLinecap="round" variants={draw} custom={1} initial="hidden" whileInView="visible" viewport={{ once: true }} />
          <motion.line x1="50%" y1="50%" x2="15%" y2="85%" stroke="url(#grad1)" strokeWidth="3" strokeLinecap="round" variants={draw} custom={2} initial="hidden" whileInView="visible" viewport={{ once: true }} />
          
          {/* Nodi Destri */}
          <motion.line x1="50%" y1="50%" x2="85%" y2="15%" stroke="url(#grad2)" strokeWidth="3" strokeLinecap="round" variants={draw} custom={3} initial="hidden" whileInView="visible" viewport={{ once: true }} />
          <motion.line x1="50%" y1="50%" x2="90%" y2="50%" stroke="url(#grad2)" strokeWidth="3" strokeLinecap="round" variants={draw} custom={4} initial="hidden" whileInView="visible" viewport={{ once: true }} />
          <motion.line x1="50%" y1="50%" x2="85%" y2="85%" stroke="url(#grad2)" strokeWidth="3" strokeLinecap="round" variants={draw} custom={5} initial="hidden" whileInView="visible" viewport={{ once: true }} />
        </svg>

        {/* Logo Centrale */}
        <motion.div 
          initial={{ scale: 0, opacity: 0 }}
          whileInView={{ scale: 1, opacity: 1 }}
          viewport={{ once: true }}
          transition={{ type: "spring", stiffness: 200, damping: 20 }}
          className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 z-20 flex flex-col items-center"
        >
          <Tilt tiltMaxAngleX={15} tiltMaxAngleY={15} scale={1.05} transitionSpeed={2000} className="relative cursor-pointer">
            <motion.div 
              animate={{ scale: [1, 1.3, 1], opacity: [0.6, 1, 0.6] }}
              transition={{ duration: 3, repeat: Infinity, ease: "easeInOut" }}
              className="absolute -inset-4 rounded-full bg-gradient-to-r from-brand-purple via-brand-blue to-brand-magenta blur-xl opacity-50"
            ></motion.div>
            
            <div className="w-36 h-36 md:w-48 md:h-48 rounded-full bg-black/80 border border-white/20 flex items-center justify-center p-6 shadow-[0_0_50px_rgba(139,92,246,0.5)] relative z-10 backdrop-blur-2xl ring-4 ring-brand-purple/30">
              <img src="/logo.png" alt="Fake Copy Center Logo" className="w-full h-full object-contain filter drop-shadow-[0_0_10px_rgba(255,255,255,0.8)]" />
            </div>
          </Tilt>
        </motion.div>

        {/* Nodi (Scatole Informative) */}
        {nodes.map((node) => (
          <motion.div
            key={node.id}
            initial={{ opacity: 0, scale: 0.8, y: 30 }}
            whileInView={{ opacity: 1, scale: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: node.delay, type: "spring", stiffness: 120 }}
            className={`absolute ${node.pos} z-10`}
          >
            <Tilt tiltMaxAngleX={10} tiltMaxAngleY={10} scale={1.02} transitionSpeed={2500} glareEnable={true} glareMaxOpacity={0.3} glareColor="#ffffff" glarePosition="all" className="w-72 rounded-3xl">
              <div className="relative h-full w-full bg-gradient-to-br from-white/10 to-white/5 backdrop-blur-[30px] border border-white/20 border-t-white/40 border-l-white/40 p-6 rounded-3xl shadow-[0_10px_40px_rgba(0,0,0,0.5)] overflow-hidden group">
                {/* Glow di sfondo interno alla card */}
                <div className="absolute -inset-20 bg-gradient-to-r from-brand-purple/20 to-brand-blue/20 blur-[50px] opacity-0 group-hover:opacity-100 transition-opacity duration-700"></div>
                
                <div className="relative z-10">
                  <div className="flex items-center gap-4 mb-4">
                    <div className="p-3 bg-gradient-to-br from-white/20 to-white/5 rounded-xl border border-white/20 shadow-[0_0_15px_rgba(255,255,255,0.1)] group-hover:shadow-[0_0_20px_rgba(139,92,246,0.4)] transition-all duration-300">
                      {node.icon}
                    </div>
                    <h4 className="font-mono text-base tracking-widest uppercase text-white font-bold drop-shadow-md">{node.title}</h4>
                  </div>
                  <p className="text-gray-300 text-sm leading-relaxed font-medium">{node.desc}</p>
                </div>
              </div>
            </Tilt>
          </motion.div>
        ))}
      </div>

      {/* Versione Mobile (Vertical Tree) */}
      <div className="md:hidden flex flex-col items-center gap-10 relative max-w-sm mx-auto mt-8">
        {/* Linea Verticale Connettiva Glow */}
        <div className="absolute top-0 bottom-0 left-1/2 -translate-x-1/2 w-1 bg-gradient-to-b from-brand-purple via-brand-blue to-transparent -z-10 shadow-[0_0_15px_rgba(139,92,246,0.8)] opacity-60"></div>
        
        {/* Logo in alto per mobile */}
        <motion.div 
          initial={{ scale: 0 }}
          whileInView={{ scale: 1 }}
          viewport={{ once: true }}
          className="w-40 h-40 rounded-full bg-black/80 backdrop-blur-xl border-2 border-white/20 flex items-center justify-center p-6 shadow-[0_0_40px_rgba(139,92,246,0.6)] relative z-10 mb-6"
        >
          <img src="/logo.png" alt="Fake Copy Logo" className="w-full h-full object-contain filter drop-shadow-[0_0_10px_rgba(255,255,255,0.8)]" />
        </motion.div>

        {nodes.map((node, idx) => (
          <motion.div
            key={node.id}
            initial={{ opacity: 0, x: idx % 2 === 0 ? -50 : 50, filter: 'blur(10px)' }}
            whileInView={{ opacity: 1, x: 0, filter: 'blur(0px)' }}
            viewport={{ once: true }}
            transition={{ delay: 0.1, type: "spring", stiffness: 100 }}
            className="w-full relative z-10"
          >
            {/* Punto luminoso di connessione sulla linea centrale */}
            <div className={`absolute top-1/2 -translate-y-1/2 ${idx % 2 === 0 ? '-right-[18px]' : '-left-[18px]'} w-4 h-4 rounded-full bg-white border-4 border-brand-purple shadow-[0_0_10px_rgba(255,255,255,1)] hidden`}></div>
            
            <Tilt tiltMaxAngleX={10} tiltMaxAngleY={10} scale={1.02} glareEnable={true} glareMaxOpacity={0.2} glareColor="#ffffff" glarePosition="all" className="w-full rounded-3xl">
              <div className="bg-gradient-to-br from-white/10 to-white/5 backdrop-blur-2xl border border-white/20 border-t-white/40 border-l-white/40 p-6 rounded-3xl shadow-[0_10px_30px_rgba(0,0,0,0.5)]">
                <div className="flex items-center gap-4 mb-3">
                  <div className="p-3 bg-gradient-to-br from-white/20 to-white/5 rounded-xl border border-white/20">
                    {node.icon}
                  </div>
                  <h4 className="font-mono text-base tracking-widest uppercase text-white font-bold">{node.title}</h4>
                </div>
                <p className="text-gray-200 text-sm leading-relaxed">{node.desc}</p>
              </div>
            </Tilt>
          </motion.div>
        ))}
      </div>

    </section>
  );
};

export default About;

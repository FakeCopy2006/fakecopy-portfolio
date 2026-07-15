import React from 'react';
import { motion } from 'framer-motion';
import { MonitorSmartphone, Palette, PenTool, User, Fingerprint, ScanLine } from 'lucide-react';

const About = () => {
  return (
    <section id="about" className="py-24 px-6 relative z-10">
      <div className="max-w-5xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <h2 className="text-5xl md:text-6xl font-display tracking-widest mb-2 uppercase text-white">
            CHI <span className="text-gray-400">SONO</span>
          </h2>
          <p className="text-gray-600 tracking-[0.2em] uppercase text-sm font-mono">
            // AUTHORIZATION LEVEL: ADMINISTRATOR
          </p>
        </motion.div>

        {/* Effetto Bagliore Dietro la Card */}
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-full max-w-5xl h-full blur-[100px] bg-gradient-to-tr from-brand-purple/20 to-brand-blue/20 -z-10 rounded-full"></div>

        {/* ID CARD */}
        <motion.div
          initial={{ opacity: 0, scale: 0.95 }}
          whileInView={{ opacity: 1, scale: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="max-w-5xl mx-auto bg-[#050505]/60 backdrop-blur-2xl border border-white/10 rounded-[2rem] p-8 md:p-12 relative overflow-hidden flex flex-col md:flex-row gap-10 shadow-[0_0_40px_rgba(110,60,255,0.15)] group/card"
        >
          {/* Card Decals & Glowing Effects */}
          <div className="absolute -top-32 -right-32 w-64 h-64 bg-brand-purple/20 blur-[80px] rounded-full pointer-events-none"></div>
          <div className="absolute -bottom-32 -left-32 w-64 h-64 bg-brand-blue/20 blur-[80px] rounded-full pointer-events-none"></div>

          <div className="absolute top-6 right-6 flex gap-2 opacity-40">
            <div className="w-12 h-1.5 bg-gradient-to-r from-brand-blue to-brand-purple rounded-full"></div>
            <div className="w-4 h-1.5 bg-brand-purple rounded-full"></div>
          </div>
          <div className="absolute bottom-4 right-4 pointer-events-none opacity-[0.15] mix-blend-screen group-hover/card:opacity-[0.25] transition-opacity duration-700">
            <Fingerprint className="w-32 h-32 text-brand-purple" strokeWidth={0.5} />
          </div>

          {/* Left Column: Avatar & Barcode */}
          <div className="flex flex-col items-center gap-6 w-full md:w-1/3 z-10">
            {/* Avatar Placeholder */}
            <div className="w-full aspect-square border border-white/10 bg-white/5 rounded-3xl flex items-center justify-center relative group overflow-hidden shadow-inner">
              <div className="absolute inset-0 bg-gradient-to-br from-brand-purple/20 via-transparent to-brand-blue/20 opacity-0 group-hover:opacity-100 transition-all duration-500"></div>
              
              {/* Animated corner brackets */}
              <div className="absolute top-4 left-4 w-4 h-4 border-t-2 border-l-2 border-brand-purple/50 group-hover:border-brand-purple transition-colors"></div>
              <div className="absolute top-4 right-4 w-4 h-4 border-t-2 border-r-2 border-brand-blue/50 group-hover:border-brand-blue transition-colors"></div>
              <div className="absolute bottom-4 left-4 w-4 h-4 border-b-2 border-l-2 border-brand-blue/50 group-hover:border-brand-blue transition-colors"></div>
              <div className="absolute bottom-4 right-4 w-4 h-4 border-b-2 border-r-2 border-brand-purple/50 group-hover:border-brand-purple transition-colors"></div>
              
              <User className="w-20 h-20 text-gray-500 group-hover:text-white transition-colors duration-500 relative z-10" strokeWidth={1.5} />
            </div>

            {/* Fake Barcode Cyber */}
            <div className="w-full h-12 flex items-center justify-between opacity-60 px-4">
              {Array.from({ length: 25 }).map((_, i) => (
                <div key={i} className={`h-full rounded-full ${i % 4 === 0 ? 'bg-brand-purple/80' : 'bg-white/80'}`} style={{ width: `${Math.floor(Math.random() * 3) + 2}px` }}></div>
              ))}
            </div>
            <div className="flex items-center gap-2">
              <div className="w-2 h-2 rounded-full bg-brand-blue animate-pulse"></div>
              <p className="font-mono text-xs text-transparent bg-clip-text bg-gradient-to-r from-brand-blue to-brand-purple tracking-[0.2em] font-bold uppercase">ID: 403-FAKE-2026</p>
            </div>
          </div>

          {/* Right Column: Data & Specs */}
          <div className="flex-1 z-10 flex flex-col justify-between">
            <div>
              <div className="flex items-center gap-3 mb-8">
                <div className="w-10 h-10 rounded-full bg-gradient-to-br from-brand-purple/20 to-brand-blue/20 border border-white/10 flex items-center justify-center backdrop-blur-md shadow-[0_0_15px_rgba(110,60,255,0.3)]">
                  <ScanLine className="w-5 h-5 text-white" />
                </div>
                <h3 className="font-display text-2xl tracking-widest uppercase text-transparent bg-clip-text bg-gradient-to-r from-white to-gray-400">IDENTIFICATION</h3>
              </div>
              
              <div className="space-y-3 mb-8 font-mono text-sm uppercase">
                <div className="flex items-center bg-white/5 p-3 rounded-xl border border-white/5 hover:border-brand-purple/30 transition-colors">
                  <span className="w-32 text-gray-500">NOME:</span>
                  <span className="text-gray-100">Mattia Gigliotti</span>
                </div>
                <div className="flex items-center bg-white/5 p-3 rounded-xl border border-white/5 hover:border-brand-blue/30 transition-colors">
                  <span className="w-32 text-gray-500">ALIAS:</span>
                  <span className="text-transparent bg-clip-text bg-gradient-to-r from-brand-blue to-brand-purple font-bold tracking-wider">FakeCopy</span>
                </div>
                <div className="flex items-center bg-white/5 p-3 rounded-xl border border-white/5 hover:border-brand-purple/30 transition-colors">
                  <span className="w-32 text-gray-500">RUOLO:</span>
                  <span className="text-gray-300">UX/UI & Web Developer</span>
                </div>
                <div className="flex items-center bg-brand-purple/5 p-3 rounded-xl border border-brand-purple/20">
                  <span className="w-32 text-brand-purple">STATUS:</span>
                  <span className="text-brand-blue flex items-center gap-2 font-bold">
                    <span className="w-2 h-2 rounded-full bg-brand-blue animate-pulse shadow-[0_0_10px_rgba(0,212,255,0.8)]"></span>
                    SISTEMA OPERATIVO
                  </span>
                </div>
              </div>

              <p className="text-gray-400 text-sm leading-relaxed mb-8 px-2 font-sans border-l-2 border-brand-purple/30 pl-4">
                Unisco il mio diploma in Grafica e Comunicazione con una forte passione per lo sviluppo di Web App. 
                Il mio obiettivo è abbattere il confine tra design puro e codice, creando prodotti digitali che siano 
                tanto belli da vedere quanto piacevoli da usare.
              </p>
            </div>

            {/* System Modules (Skills) */}
            <div>
              <div className="flex justify-between items-end mb-3">
                <p className="font-mono text-xs text-brand-purple uppercase tracking-widest">// Moduli Installati</p>
                <p className="font-mono text-[10px] text-gray-500 uppercase">Ver. 2.0</p>
              </div>
              <div className="grid grid-cols-1 sm:grid-cols-3 gap-4">
                <div className="relative border border-white/10 bg-white/5 p-4 rounded-2xl flex flex-col items-center text-center gap-3 hover:bg-white/10 hover:border-brand-purple/50 transition-all duration-300 cursor-default group/skill overflow-hidden">
                  <div className="absolute top-0 left-0 w-full h-1 bg-brand-purple/20 overflow-hidden"><div className="h-full bg-brand-purple w-full"></div></div>
                  <Palette className="w-6 h-6 text-gray-400 group-hover:text-brand-purple transition-colors" />
                  <span className="text-xs text-gray-300 font-medium tracking-wider group-hover:text-white transition-colors">GRAFICA</span>
                </div>
                <div className="relative border border-white/10 bg-white/5 p-4 rounded-2xl flex flex-col items-center text-center gap-3 hover:bg-white/10 hover:border-brand-blue/50 transition-all duration-300 cursor-default group/skill overflow-hidden">
                  <div className="absolute top-0 left-0 w-full h-1 bg-brand-blue/20 overflow-hidden"><div className="h-full bg-brand-blue w-full"></div></div>
                  <PenTool className="w-6 h-6 text-gray-400 group-hover:text-brand-blue transition-colors" />
                  <span className="text-xs text-gray-300 font-medium tracking-wider group-hover:text-white transition-colors">UX/UI</span>
                </div>
                <div className="relative border border-white/10 bg-white/5 p-4 rounded-2xl flex flex-col items-center text-center gap-3 hover:bg-white/10 hover:border-brand-purple/50 transition-all duration-300 cursor-default group/skill overflow-hidden">
                  <div className="absolute top-0 left-0 w-full h-1 bg-brand-purple/20 overflow-hidden"><div className="h-full bg-brand-purple w-full"></div></div>
                  <MonitorSmartphone className="w-6 h-6 text-gray-400 group-hover:text-brand-purple transition-colors" />
                  <span className="text-xs text-gray-300 font-medium tracking-wider group-hover:text-white transition-colors">WEB APP</span>
                </div>
              </div>
            </div>
            
          </div>
        </motion.div>

      </div>
    </section>
  );
};

export default About;

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

        {/* ID CARD */}
        <motion.div
          initial={{ opacity: 0, scale: 0.95 }}
          whileInView={{ opacity: 1, scale: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="max-w-4xl mx-auto bg-[#111] border-2 border-[#333] rounded-sm p-6 md:p-10 relative overflow-hidden flex flex-col md:flex-row gap-10 shadow-2xl shadow-black"
        >
          {/* Card Decals */}
          <div className="absolute top-4 right-4 flex gap-2 opacity-50">
            <div className="w-12 h-1 bg-gray-500"></div>
            <div className="w-4 h-1 bg-gray-500"></div>
          </div>
          <div className="absolute bottom-4 right-4 pointer-events-none">
            <Fingerprint className="w-24 h-24 text-[#222]" strokeWidth={1} />
          </div>

          {/* Left Column: Avatar & Barcode */}
          <div className="flex flex-col items-center gap-6 w-full md:w-1/3 z-10">
            {/* Avatar Placeholder */}
            <div className="w-full aspect-square border border-gray-600 bg-[#1a1a1a] flex items-center justify-center relative group">
              <div className="absolute inset-0 border-2 border-transparent group-hover:border-white/20 transition-all duration-300"></div>
              {/* Corner brackets */}
              <div className="absolute top-2 left-2 w-4 h-4 border-t border-l border-gray-500"></div>
              <div className="absolute top-2 right-2 w-4 h-4 border-t border-r border-gray-500"></div>
              <div className="absolute bottom-2 left-2 w-4 h-4 border-b border-l border-gray-500"></div>
              <div className="absolute bottom-2 right-2 w-4 h-4 border-b border-r border-gray-500"></div>
              
              <User className="w-24 h-24 text-gray-700" strokeWidth={1} />
            </div>

            {/* Fake Barcode */}
            <div className="w-full h-12 flex items-center justify-between opacity-70 px-2">
              {Array.from({ length: 30 }).map((_, i) => (
                <div key={i} className="bg-white h-full" style={{ width: `${Math.floor(Math.random() * 4) + 1}px` }}></div>
              ))}
            </div>
            <p className="font-mono text-xs text-gray-500 tracking-[0.3em] uppercase">ID: 403-FAKE-2026</p>
          </div>

          {/* Right Column: Data & Specs */}
          <div className="flex-1 z-10 flex flex-col justify-between">
            <div>
              <div className="flex items-center gap-3 mb-6">
                <ScanLine className="w-6 h-6 text-white" />
                <h3 className="font-display text-2xl tracking-widest uppercase text-white">IDENTIFICATION DATA</h3>
              </div>
              
              <div className="space-y-4 mb-8 font-mono text-sm uppercase">
                <div className="flex border-b border-[#222] pb-2">
                  <span className="w-32 text-gray-500">NOME:</span>
                  <span className="text-gray-200">Mattia Gigliotti</span>
                </div>
                <div className="flex border-b border-[#222] pb-2">
                  <span className="w-32 text-gray-500">ALIAS:</span>
                  <span className="text-white font-bold">FakeCopy</span>
                </div>
                <div className="flex border-b border-[#222] pb-2">
                  <span className="w-32 text-gray-500">RUOLO:</span>
                  <span className="text-gray-300">UX/UI & Web Developer</span>
                </div>
                <div className="flex pb-2">
                  <span className="w-32 text-gray-500">STATUS:</span>
                  <span className="text-green-500 flex items-center gap-2">
                    <span className="w-2 h-2 rounded-full bg-green-500 animate-pulse"></span>
                    ATTIVO // PRONTO
                  </span>
                </div>
              </div>

              <p className="text-gray-400 text-sm leading-relaxed mb-8">
                Unisco il mio diploma in Grafica e Comunicazione con una forte passione per lo sviluppo di Web App. 
                Il mio obiettivo è abbattere il confine tra design puro e codice, creando prodotti digitali che siano 
                tanto belli da vedere quanto piacevoli da usare.
              </p>
            </div>

            {/* System Modules (Skills) */}
            <div>
              <p className="font-mono text-xs text-gray-600 mb-3 uppercase tracking-widest">// Moduli Installati</p>
              <div className="grid grid-cols-1 sm:grid-cols-3 gap-3">
                <div className="border border-[#333] bg-[#0a0a0a] p-3 flex flex-col items-center text-center gap-2 hover:border-gray-500 transition-colors">
                  <Palette className="w-5 h-5 text-gray-300" />
                  <span className="text-xs text-gray-400 font-mono">GRAFICA</span>
                </div>
                <div className="border border-[#333] bg-[#0a0a0a] p-3 flex flex-col items-center text-center gap-2 hover:border-gray-500 transition-colors">
                  <PenTool className="w-5 h-5 text-gray-300" />
                  <span className="text-xs text-gray-400 font-mono">UX/UI</span>
                </div>
                <div className="border border-[#333] bg-[#0a0a0a] p-3 flex flex-col items-center text-center gap-2 hover:border-gray-500 transition-colors">
                  <MonitorSmartphone className="w-5 h-5 text-gray-300" />
                  <span className="text-xs text-gray-400 font-mono">WEB APP</span>
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

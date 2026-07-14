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
          className="max-w-4xl mx-auto bg-black/40 backdrop-blur-xl border border-white/10 rounded-[2rem] p-8 md:p-12 relative overflow-hidden flex flex-col md:flex-row gap-10 shadow-2xl"
        >
          {/* Card Decals */}
          <div className="absolute top-6 right-6 flex gap-2 opacity-30">
            <div className="w-12 h-1.5 bg-gray-400 rounded-full"></div>
            <div className="w-4 h-1.5 bg-gray-400 rounded-full"></div>
          </div>
          <div className="absolute bottom-4 right-4 pointer-events-none opacity-40">
            <Fingerprint className="w-24 h-24 text-gray-500" strokeWidth={1} />
          </div>

          {/* Left Column: Avatar & Barcode */}
          <div className="flex flex-col items-center gap-6 w-full md:w-1/3 z-10">
            {/* Avatar Placeholder */}
            <div className="w-full aspect-square border border-white/10 bg-white/5 rounded-3xl flex items-center justify-center relative group overflow-hidden shadow-inner">
              <div className="absolute inset-0 bg-gradient-to-br from-white/5 to-transparent opacity-0 group-hover:opacity-100 transition-all duration-500"></div>
              
              <User className="w-20 h-20 text-gray-400" strokeWidth={1.5} />
            </div>

            {/* Fake Barcode */}
            <div className="w-full h-12 flex items-center justify-between opacity-50 px-4">
              {Array.from({ length: 25 }).map((_, i) => (
                <div key={i} className="bg-white h-full rounded-full" style={{ width: `${Math.floor(Math.random() * 3) + 2}px` }}></div>
              ))}
            </div>
            <p className="font-mono text-xs text-gray-400 tracking-[0.2em] uppercase">ID: 403-FAKE-2026</p>
          </div>

          {/* Right Column: Data & Specs */}
          <div className="flex-1 z-10 flex flex-col justify-between">
            <div>
              <div className="flex items-center gap-3 mb-8">
                <div className="w-10 h-10 rounded-full bg-white/10 flex items-center justify-center backdrop-blur-md">
                  <ScanLine className="w-5 h-5 text-white" />
                </div>
                <h3 className="font-display text-2xl tracking-widest uppercase text-white">IDENTIFICATION</h3>
              </div>
              
              <div className="space-y-4 mb-8 font-mono text-sm uppercase">
                <div className="flex items-center bg-white/5 p-3 rounded-xl border border-white/5">
                  <span className="w-32 text-gray-400">NOME:</span>
                  <span className="text-gray-100">Mattia Gigliotti</span>
                </div>
                <div className="flex items-center bg-white/5 p-3 rounded-xl border border-white/5">
                  <span className="w-32 text-gray-400">ALIAS:</span>
                  <span className="text-white font-bold tracking-wider">FakeCopy</span>
                </div>
                <div className="flex items-center bg-white/5 p-3 rounded-xl border border-white/5">
                  <span className="w-32 text-gray-400">RUOLO:</span>
                  <span className="text-gray-300">UX/UI & Web Developer</span>
                </div>
                <div className="flex items-center bg-white/5 p-3 rounded-xl border border-white/5">
                  <span className="w-32 text-gray-400">STATUS:</span>
                  <span className="text-green-400 flex items-center gap-2">
                    <span className="w-2 h-2 rounded-full bg-green-400 animate-pulse shadow-[0_0_10px_rgba(74,222,128,0.8)]"></span>
                    ATTIVO // PRONTO
                  </span>
                </div>
              </div>

              <p className="text-gray-400 text-sm leading-relaxed mb-8 px-2 font-sans">
                Unisco il mio diploma in Grafica e Comunicazione con una forte passione per lo sviluppo di Web App. 
                Il mio obiettivo è abbattere il confine tra design puro e codice, creando prodotti digitali che siano 
                tanto belli da vedere quanto piacevoli da usare.
              </p>
            </div>

            {/* System Modules (Skills) */}
            <div>
              <div className="grid grid-cols-1 sm:grid-cols-3 gap-4">
                <div className="border border-white/10 bg-white/5 p-4 rounded-2xl flex flex-col items-center text-center gap-3 hover:bg-white/10 hover:border-white/20 transition-all duration-300 cursor-default">
                  <Palette className="w-6 h-6 text-gray-300" />
                  <span className="text-xs text-gray-300 font-medium tracking-wider">GRAFICA</span>
                </div>
                <div className="border border-white/10 bg-white/5 p-4 rounded-2xl flex flex-col items-center text-center gap-3 hover:bg-white/10 hover:border-white/20 transition-all duration-300 cursor-default">
                  <PenTool className="w-6 h-6 text-gray-300" />
                  <span className="text-xs text-gray-300 font-medium tracking-wider">UX/UI</span>
                </div>
                <div className="border border-white/10 bg-white/5 p-4 rounded-2xl flex flex-col items-center text-center gap-3 hover:bg-white/10 hover:border-white/20 transition-all duration-300 cursor-default">
                  <MonitorSmartphone className="w-6 h-6 text-gray-300" />
                  <span className="text-xs text-gray-300 font-medium tracking-wider">WEB APP</span>
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

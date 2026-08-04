import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Mail, Copy, CheckCircle2, ArrowRight } from 'lucide-react';

const Contact = () => {
  const [copied, setCopied] = useState(false);
  const email = "mattiagigliotti125@gmail.com";

  const handleCopy = () => {
    navigator.clipboard.writeText(email);
    setCopied(true);
    setTimeout(() => setCopied(false), 2000);
  };

  return (
    <section id="contact" className="py-32 px-6 relative z-10 overflow-hidden">
      {/* Glow leggero dietro la sezione per profondità, senza lag su mobile */}
      <div className="hidden md:block absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-full max-w-4xl h-96 bg-[radial-gradient(circle,rgba(236,72,153,0.1)_0%,rgba(0,0,0,0)_70%)] pointer-events-none -z-10"></div>

      <div className="max-w-6xl mx-auto">
        <div className="flex flex-col lg:flex-row gap-16 items-center">
          
          {/* Lato Sinistro: Tipografia Pro Max */}
          <div className="w-full lg:w-1/2">
            <motion.div
              initial={{ opacity: 0, x: -50 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true, margin: "-100px" }}
              transition={{ duration: 0.8, ease: "easeOut" }}
            >
              <h2 className="text-sm font-mono text-brand-magenta tracking-[0.3em] uppercase mb-4">
                Prossimo Step
              </h2>
              <h3 className="text-5xl md:text-7xl font-display font-bold uppercase tracking-widest text-white leading-[1.1] mb-6">
                INIZIAMO <br />
                QUALCOSA DI <br />
                <span className="text-transparent bg-clip-text bg-gradient-to-r from-brand-purple to-brand-magenta">EPICO.</span>
              </h3>
              <p className="text-gray-400 text-lg max-w-md leading-relaxed">
                Che tu abbia un progetto ambizioso in mente, o semplicemente voglia scambiare due chiacchiere su design e sviluppo, sono sempre pronto ad ascoltarti.
              </p>
            </motion.div>
          </div>

          {/* Lato Destro: Card Interattiva Singola (Email) */}
          <div className="w-full lg:w-1/2">
            <motion.div
              initial={{ opacity: 0, scale: 0.9, y: 30 }}
              whileInView={{ opacity: 1, scale: 1, y: 0 }}
              viewport={{ once: true, margin: "-100px" }}
              transition={{ duration: 0.8, delay: 0.2, type: "spring", bounce: 0.4 }}
              className="relative group w-full"
            >
              {/* Effetto magnetico "glow" dietro la card che segue l'hover (simulato via CSS per non pesare) */}
              <div className="absolute -inset-1 bg-gradient-to-r from-brand-purple via-brand-blue to-brand-magenta rounded-3xl opacity-20 group-hover:opacity-40 transition-opacity duration-500 blur-lg pointer-events-none"></div>
              
              <button 
                onClick={handleCopy}
                className="relative w-full text-left bg-[#18181b]/95 md:bg-[#18181b]/60 md:backdrop-blur-xl border border-white/10 hover:border-white/20 rounded-3xl p-8 md:p-12 transition-all duration-300 overflow-hidden flex flex-col items-start gap-8"
              >
                {/* Animazione Sweep per l'hover */}
                <div className="absolute inset-0 bg-gradient-to-r from-white/0 via-white/5 to-white/0 translate-x-[-100%] group-hover:translate-x-[100%] transition-transform duration-1000 ease-in-out pointer-events-none"></div>

                <div className="w-16 h-16 rounded-2xl bg-white/5 border border-white/10 flex items-center justify-center text-white relative">
                  <AnimatePresence mode="wait">
                    {copied ? (
                      <motion.div
                        key="check"
                        initial={{ scale: 0, opacity: 0 }}
                        animate={{ scale: 1, opacity: 1 }}
                        exit={{ scale: 0, opacity: 0 }}
                        className="text-green-400"
                      >
                        <CheckCircle2 className="w-8 h-8" />
                      </motion.div>
                    ) : (
                      <motion.div
                        key="mail"
                        initial={{ scale: 0, opacity: 0 }}
                        animate={{ scale: 1, opacity: 1 }}
                        exit={{ scale: 0, opacity: 0 }}
                        className="text-brand-magenta"
                      >
                        <Mail className="w-8 h-8" />
                      </motion.div>
                    )}
                  </AnimatePresence>
                </div>

                <div className="w-full">
                  <p className="text-gray-500 font-mono text-sm uppercase tracking-widest mb-2">
                    {copied ? 'Indirizzo Copiato!' : 'Scrivimi Direttamente'}
                  </p>
                  <p className="text-xl sm:text-2xl lg:text-3xl font-display text-white truncate w-full group-hover:text-transparent group-hover:bg-clip-text group-hover:bg-gradient-to-r group-hover:from-brand-purple group-hover:to-brand-magenta transition-all duration-300">
                    {email}
                  </p>
                </div>

                <div className="mt-4 flex items-center gap-3 text-gray-400 group-hover:text-white transition-colors duration-300">
                  <span className="font-mono text-sm uppercase tracking-wider">
                    {copied ? 'Pronto per incollare' : 'Clicca per copiare'}
                  </span>
                  {!copied && <ArrowRight className="w-5 h-5 group-hover:translate-x-2 transition-transform duration-300" />}
                </div>

              </button>
            </motion.div>
          </div>

        </div>

        {/* Footer */}
        <footer className="mt-32 border-t border-white/5 pt-8 text-center flex flex-col md:flex-row justify-between items-center gap-4">
          <p className="text-gray-500 font-mono text-xs uppercase tracking-widest">
            &copy; {new Date().getFullYear()} Mattia Gigliotti
          </p>
          <div className="flex items-center gap-2">
            <span className="w-2 h-2 rounded-full bg-green-500 animate-pulse"></span>
            <p className="text-gray-500 font-mono text-xs uppercase tracking-widest">Disponibile per nuovi progetti</p>
          </div>
        </footer>
      </div>
    </section>
  );
};

export default Contact;

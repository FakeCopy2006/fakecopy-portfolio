import React from 'react';
import { motion } from 'framer-motion';
import { Code, Briefcase, Mail, Palette } from 'lucide-react';

const Contact = () => {
  const socials = [
    { icon: <Briefcase className="w-6 h-6" />, label: 'LinkedIn', href: '#' },
    { icon: <Code className="w-6 h-6" />, label: 'GitHub', href: '#' },
    { icon: <Palette className="w-6 h-6" />, label: 'Behance', href: '#' }, // Using Dribbble icon as placeholder for Behance if needed, or import custom
    { icon: <Mail className="w-6 h-6" />, label: 'Email', href: 'mailto:mattia@example.com' },
  ];

  return (
    <section id="contact" className="py-24 px-6 relative z-10">
      {/* Decorative gradient orb */}
      <div className="absolute bottom-0 left-1/2 -translate-x-1/2 w-full max-w-3xl h-64 bg-brand-magenta/10 blur-[120px] rounded-full -z-10 pointer-events-none"></div>
      
      <div className="max-w-4xl mx-auto text-center">
        <motion.div
          initial={{ opacity: 0, scale: 0.95 }}
          whileInView={{ opacity: 1, scale: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="glass-card p-12 md:p-16 relative overflow-hidden"
        >
          <div className="absolute top-0 left-0 w-full h-1 bg-gradient-to-r from-brand-purple via-brand-blue to-brand-magenta"></div>
          
          <h2 className="text-5xl md:text-6xl font-display tracking-widest mb-6 uppercase text-white">
            LAVORIAMO <span className="text-gray-400">INSIEME</span>
          </h2>
          <p className="text-text-muted text-lg mb-10 max-w-2xl mx-auto">
            Che tu abbia un progetto in mente o semplicemente voglia scambiare due chiacchiere sul mondo del design e dello sviluppo, la mia inbox è sempre aperta.
          </p>

          <div className="flex flex-wrap justify-center gap-4">
            {socials.map((social, idx) => (
              <a
                key={idx}
                href={social.href}
                className="flex items-center gap-2 px-6 py-3 bg-white/5 hover:bg-white/10 border border-white/10 hover:border-brand-magenta/50 rounded-full transition-all duration-300 font-medium text-white hover:shadow-[0_0_20px_rgba(236,72,153,0.3)]"
              >
                {social.icon}
                <span>{social.label}</span>
              </a>
            ))}
          </div>
        </motion.div>
        
        <footer className="mt-20 text-text-muted text-sm">
          <p>&copy; {new Date().getFullYear()} Mattia Gigliotti (FakeCopy). Tutti i diritti riservati.</p>
          <p className="mt-2 text-xs opacity-60">Progettato e sviluppato con ❤️ pixel per pixel.</p>
        </footer>
      </div>
    </section>
  );
};

export default Contact;

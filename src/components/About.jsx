import React from 'react';
import { motion } from 'framer-motion';
import { MonitorSmartphone, Palette, PenTool } from 'lucide-react';

const About = () => {
  const skills = [
    {
      icon: <Palette className="w-8 h-8 text-brand-purple" />,
      title: 'Grafica & Comunicazione',
      desc: 'Background solido nel design visivo e nella comunicazione digitale.'
    },
    {
      icon: <PenTool className="w-8 h-8 text-brand-blue" />,
      title: 'UX/UI Design',
      desc: 'Progettazione di interfacce intuitive e user-centered che guidano l\'utente.'
    },
    {
      icon: <MonitorSmartphone className="w-8 h-8 text-brand-magenta" />,
      title: 'Sviluppo Web App',
      desc: 'Trasformo i mockup in applicazioni reali, performanti e responsive.'
    }
  ];

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
          <h2 className="text-5xl md:text-6xl font-display tracking-widest mb-6 uppercase text-white">
            CHI <span className="text-gray-400">SONO</span>
          </h2>
          <p className="text-text-muted text-lg md:text-xl max-w-3xl mx-auto leading-relaxed">
            Unisco il mio diploma in Grafica e Comunicazione con una forte passione per lo sviluppo di Web App.
            Il mio obiettivo è abbattere il confine tra design puro e codice, creando prodotti digitali che siano
            tanto belli da vedere quanto piacevoli da usare.
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {skills.map((skill, idx) => (
            <motion.div
              key={idx}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-50px" }}
              transition={{ duration: 0.5, delay: idx * 0.1 }}
              className="glass-card p-8 hover:border-brand-purple/50 transition-colors duration-300"
            >
              <div className="bg-white/5 w-16 h-16 rounded-2xl flex items-center justify-center mb-6 border border-white/10">
                {skill.icon}
              </div>
              <h3 className="text-xl font-semibold mb-3">{skill.title}</h3>
              <p className="text-text-muted">{skill.desc}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default About;

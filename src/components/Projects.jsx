import React from 'react';
import { motion } from 'framer-motion';
import { ExternalLink, Code } from 'lucide-react';

const Projects = () => {
  const webProjects = [
    {
      title: 'Cyber Dashboard',
      type: 'Web App & UX/UI',
      img: 'https://images.unsplash.com/photo-1551288049-bebda4e38f71?auto=format&fit=crop&q=80&w=800',
      desc: 'Dashboard analitica con data visualization avanzata in stile dark theme.',
      tech: ['React', 'Tailwind', 'Chart.js']
    },
    {
      title: 'E-Commerce Premium',
      type: 'Web App & UX/UI',
      img: 'https://images.unsplash.com/photo-1460925895917-afdab827c52f?auto=format&fit=crop&q=80&w=800',
      desc: 'Esperienza di shopping fluida con micro-interazioni e checkout ottimizzato.',
      tech: ['Next.js', 'Framer Motion', 'Stripe']
    }
  ];

  const graphicProjects = [
    { title: 'Brand Identity', img: 'https://images.unsplash.com/photo-1626785774573-4b799315345d?auto=format&fit=crop&q=80&w=600' },
    { title: 'Social Media Kit', img: 'https://images.unsplash.com/photo-1611162617474-5b21e879e113?auto=format&fit=crop&q=80&w=600' },
    { title: 'Poster Design', img: 'https://images.unsplash.com/photo-1558655146-d09347e92766?auto=format&fit=crop&q=80&w=600' },
    { title: 'Packaging Concept', img: 'https://images.unsplash.com/photo-1600132806370-bf17e65e942f?auto=format&fit=crop&q=80&w=600' },
  ];

  return (
    <section id="projects" className="py-24 px-6 relative z-10">
      <div className="max-w-6xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-20"
        >
          <h2 className="text-5xl md:text-6xl font-display tracking-widest mb-6 uppercase text-white">
            I MIEI <span className="text-gray-400">PROGETTI</span>
          </h2>
          <p className="text-text-muted text-lg max-w-2xl mx-auto">
            Una selezione dei miei lavori migliori, divisi tra sviluppo web e creatività grafica.
          </p>
        </motion.div>

        {/* Web App & UX/UI Section */}
        <div className="mb-24">
          <h3 className="text-3xl font-semibold mb-10 border-b border-white/10 pb-4 inline-block">Web App & UX/UI</h3>
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-10">
            {webProjects.map((project, idx) => (
              <motion.div
                key={idx}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: idx * 0.2 }}
                className="glass-card group overflow-hidden"
              >
                <div className="relative h-64 overflow-hidden">
                  <div className="absolute inset-0 bg-brand-purple/20 mix-blend-overlay z-10 group-hover:opacity-0 transition-opacity duration-500"></div>
                  <img 
                    src={project.img} 
                    alt={project.title} 
                    className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
                  />
                </div>
                <div className="p-8">
                  <div className="text-brand-purple text-sm font-semibold tracking-wider uppercase mb-2">{project.type}</div>
                  <h4 className="text-2xl font-bold mb-3">{project.title}</h4>
                  <p className="text-text-muted mb-6">{project.desc}</p>
                  
                  <div className="flex items-center justify-between mt-auto">
                    <div className="flex gap-2">
                      {project.tech.map((t, i) => (
                        <span key={i} className="text-xs py-1 px-3 bg-white/5 border border-white/10 rounded-full text-text-muted">
                          {t}
                        </span>
                      ))}
                    </div>
                    <div className="flex gap-3">
                      <button className="p-2 bg-white/5 rounded-full hover:bg-white/10 hover:text-brand-blue transition-colors">
                        <Code className="w-5 h-5" />
                      </button>
                      <button className="p-2 bg-white/5 rounded-full hover:bg-white/10 hover:text-brand-purple transition-colors">
                        <ExternalLink className="w-5 h-5" />
                      </button>
                    </div>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>

        {/* Graphic Works Section */}
        <div>
          <h3 className="text-3xl font-semibold mb-10 border-b border-white/10 pb-4 inline-block">Lavori di Grafica</h3>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {graphicProjects.map((project, idx) => (
              <motion.div
                key={idx}
                initial={{ opacity: 0, scale: 0.9 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true }}
                transition={{ duration: 0.4, delay: idx * 0.1 }}
                className="group relative rounded-2xl overflow-hidden aspect-[4/5] glass-card"
              >
                <img 
                  src={project.img} 
                  alt={project.title} 
                  className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/90 via-black/40 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-end p-6">
                  <h4 className="text-xl font-semibold translate-y-4 group-hover:translate-y-0 transition-transform duration-300">
                    {project.title}
                  </h4>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Projects;

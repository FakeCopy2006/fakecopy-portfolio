import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { ExternalLink, Code, X, ChevronLeft, ChevronRight } from 'lucide-react';

const Projects = () => {
  const [selectedProject, setSelectedProject] = useState(null);
  const [currentImageIndex, setCurrentImageIndex] = useState(0);

  const webProjects = [
    {
      title: 'Manuel Barber Shop',
      type: 'Web App & UX/UI',
      img: '/manuel-1.png',
      images: ['/manuel-1.png', '/manuel-2.png', '/manuel-3.png', '/manuel-4.png'],
      desc: 'Applicazione completa per la prenotazione online di appuntamenti dal barbiere, con interfaccia premium e intuitiva.',
      tech: ['React', 'Tailwind', 'UX/UI Design'],
      appLink: 'https://tuo-link-qui.com' // Da sostituire
    },
    {
      title: 'Routine Botanica',
      type: 'Web App & UX/UI',
      img: '/botanica-1.png',
      images: ['/botanica-1.png', '/botanica-2.png', '/botanica-3.png', '/botanica-4.png'],
      desc: 'App di habit tracking gamificata: il completamento delle routine quotidiane genera risorse per far crescere il tuo giardino virtuale.',
      tech: ['UX/UI Design', 'Gamification', 'App Mobile'],
      appLink: 'https://tuo-link-qui.com'
    }
  ];

  const graphicProjects = [
    { title: 'Brand Identity', img: 'https://images.unsplash.com/photo-1626785774573-4b799315345d?auto=format&fit=crop&q=80&w=600' },
    { title: 'Social Media Kit', img: 'https://images.unsplash.com/photo-1611162617474-5b21e879e113?auto=format&fit=crop&q=80&w=600' },
    { title: 'Poster Design', img: 'https://images.unsplash.com/photo-1558655146-d09347e92766?auto=format&fit=crop&q=80&w=600' },
    { title: 'Packaging Concept', img: 'https://images.unsplash.com/photo-1600132806370-bf17e65e942f?auto=format&fit=crop&q=80&w=600' },
  ];

  const openGallery = (project) => {
    setSelectedProject(project);
    setCurrentImageIndex(0);
  };

  const closeGallery = () => {
    setSelectedProject(null);
  };

  const nextImage = () => {
    if (selectedProject) {
      setCurrentImageIndex((prev) => (prev + 1) % selectedProject.images.length);
    }
  };

  const prevImage = () => {
    if (selectedProject) {
      setCurrentImageIndex((prev) => (prev - 1 + selectedProject.images.length) % selectedProject.images.length);
    }
  };

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
                className="glass-card group overflow-hidden cursor-pointer"
                onClick={() => openGallery(project)}
              >
                <div className="relative h-64 overflow-hidden">
                  <div className="absolute inset-0 bg-brand-purple/20 mix-blend-overlay z-10 group-hover:opacity-0 transition-opacity duration-500"></div>
                  <img 
                    src={project.img} 
                    alt={project.title} 
                    className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110 object-top"
                  />
                  <div className="absolute inset-0 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity duration-300 z-20 bg-black/40 backdrop-blur-sm">
                    <span className="text-white font-medium uppercase tracking-wider border border-white/50 px-6 py-2 rounded-full">Vedi Gallery</span>
                  </div>
                </div>
                <div className="p-8">
                  <div className="text-gray-400 text-sm font-semibold tracking-wider uppercase mb-2">{project.type}</div>
                  <h4 className="text-2xl font-bold mb-3 text-white">{project.title}</h4>
                  <p className="text-text-muted mb-6">{project.desc}</p>
                  
                  <div className="flex items-center justify-between mt-auto">
                    <div className="flex flex-wrap gap-2">
                      {project.tech.map((t, i) => (
                        <span key={i} className="text-xs py-1 px-3 bg-white/5 border border-white/10 rounded-full text-text-muted">
                          {t}
                        </span>
                      ))}
                    </div>
                    <div className="flex gap-3">
                      <a href={project.appLink} target="_blank" rel="noopener noreferrer" className="p-2 bg-white/5 rounded-full hover:bg-white/10 hover:text-brand-purple transition-colors border border-white/10" onClick={(e) => e.stopPropagation()}>
                        <ExternalLink className="w-5 h-5" />
                      </a>
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
                  <h4 className="text-xl font-semibold translate-y-4 group-hover:translate-y-0 transition-transform duration-300 text-white">
                    {project.title}
                  </h4>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </div>

      {/* Modal Gallery */}
      <AnimatePresence>
        {selectedProject && (
          <motion.div 
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 z-[100] flex items-center justify-center bg-black/90 backdrop-blur-lg p-4 md:p-8"
            onClick={closeGallery}
          >
            <div 
              className="relative w-full max-w-5xl max-h-[90vh] flex flex-col items-center justify-center"
              onClick={(e) => e.stopPropagation()}
            >
              <button 
                onClick={closeGallery}
                className="absolute -top-12 right-0 text-white hover:text-gray-300 transition-colors bg-white/10 p-2 rounded-full"
              >
                <X className="w-6 h-6" />
              </button>
              
              {selectedProject.images.length > 1 && (
                <>
                  <button onClick={prevImage} className="absolute left-0 top-1/2 -translate-y-1/2 -translate-x-4 md:-translate-x-12 p-3 bg-black/50 text-white rounded-full hover:bg-white/20 transition backdrop-blur-md">
                    <ChevronLeft className="w-6 h-6" />
                  </button>
                  <button onClick={nextImage} className="absolute right-0 top-1/2 -translate-y-1/2 translate-x-4 md:translate-x-12 p-3 bg-black/50 text-white rounded-full hover:bg-white/20 transition backdrop-blur-md">
                    <ChevronRight className="w-6 h-6" />
                  </button>
                </>
              )}

              <img 
                src={selectedProject.images[currentImageIndex]} 
                alt={`${selectedProject.title} preview ${currentImageIndex + 1}`} 
                className="max-w-full max-h-[75vh] object-contain rounded-xl shadow-2xl border border-white/10"
              />

              <div className="mt-6 flex flex-col md:flex-row items-center justify-between w-full gap-4">
                <div className="flex gap-2">
                  {selectedProject.images.map((_, i) => (
                    <div 
                      key={i} 
                      className={`w-3 h-3 rounded-full transition-all ${i === currentImageIndex ? 'bg-white scale-125' : 'bg-white/30 cursor-pointer hover:bg-white/50'}`}
                      onClick={() => setCurrentImageIndex(i)}
                    ></div>
                  ))}
                </div>
                
                <a 
                  href={selectedProject.appLink} 
                  target="_blank" 
                  rel="noopener noreferrer"
                  className="px-6 py-3 bg-white text-black font-semibold rounded-full hover:bg-gray-200 transition-colors flex items-center gap-2"
                >
                  <ExternalLink className="w-4 h-4" /> Vedi Applicazione
                </a>
              </div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </section>
  );
};

export default Projects;

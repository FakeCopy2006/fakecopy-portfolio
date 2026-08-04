import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { ExternalLink, X, ChevronLeft, ChevronRight, Maximize2 } from 'lucide-react';

const Projects = () => {
  const [selectedProject, setSelectedProject] = useState(null);
  const [currentImageIndex, setCurrentImageIndex] = useState(0);

  const projects = [
    {
      id: 1,
      title: 'Manuel Barber Shop',
      category: 'Web App & UX/UI',
      img: '/manuel-1.png',
      images: ['/manuel-1.png', '/manuel-2.png', '/manuel-3.png', '/manuel-4.png'],
      desc: 'Applicazione completa per la prenotazione online, interfaccia premium.',
      tech: ['React', 'UX/UI Design'],
      appLink: 'https://tuo-link-qui.com',
      isLarge: true
    },
    {
      id: 2,
      title: 'Routine Botanica',
      category: 'Web App & UX/UI',
      img: '/botanica-1.png',
      images: ['/botanica-1.png', '/botanica-2.png', '/botanica-3.png', '/botanica-4.png'],
      desc: 'App di habit tracking gamificata con giardino virtuale.',
      tech: ['Gamification', 'Mobile'],
      appLink: 'https://tuo-link-qui.com',
      isLarge: true
    },
    {
      id: 3,
      title: 'Brand Identity',
      category: 'Graphic Design',
      img: 'https://images.unsplash.com/photo-1626785774573-4b799315345d?auto=format&fit=crop&q=80&w=600',
      images: ['https://images.unsplash.com/photo-1626785774573-4b799315345d?auto=format&fit=crop&q=80&w=1200'],
      isLarge: false
    },
    {
      id: 4,
      title: 'Social Media',
      category: 'Graphic Design',
      img: 'https://images.unsplash.com/photo-1611162617474-5b21e879e113?auto=format&fit=crop&q=80&w=600',
      images: ['https://images.unsplash.com/photo-1611162617474-5b21e879e113?auto=format&fit=crop&q=80&w=1200'],
      isLarge: false
    },
    {
      id: 5,
      title: 'Poster Design',
      category: 'Graphic Design',
      img: 'https://images.unsplash.com/photo-1558655146-d09347e92766?auto=format&fit=crop&q=80&w=600',
      images: ['https://images.unsplash.com/photo-1558655146-d09347e92766?auto=format&fit=crop&q=80&w=1200'],
      isLarge: false
    },
    {
      id: 6,
      title: 'Packaging',
      category: 'Graphic Design',
      img: 'https://images.unsplash.com/photo-1600132806370-bf17e65e942f?auto=format&fit=crop&q=80&w=600',
      images: ['https://images.unsplash.com/photo-1600132806370-bf17e65e942f?auto=format&fit=crop&q=80&w=1200'],
      isLarge: false
    }
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
    <section id="projects" className="py-32 px-4 md:px-6 relative z-10">
      <div className="max-w-7xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: -30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.8, type: "spring" }}
          className="mb-16"
        >
          <h2 className="text-sm font-mono text-brand-purple tracking-[0.3em] uppercase mb-4">
            Lavori Selezionati
          </h2>
          <h3 className="text-5xl md:text-7xl font-display font-bold uppercase tracking-widest text-white leading-[1.1]">
            I MIEI <br className="hidden md:block" />
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-brand-blue to-brand-magenta">PROGETTI.</span>
          </h3>
        </motion.div>

        {/* BENTO BOX GRID */}
        <div className="grid grid-cols-1 md:grid-cols-4 gap-4 md:gap-6 auto-rows-[300px] md:auto-rows-[280px]">
          {projects.map((project, idx) => (
            <motion.div
              key={project.id}
              initial={{ opacity: 0, scale: 0.95, y: 20 }}
              whileInView={{ opacity: 1, scale: 1, y: 0 }}
              viewport={{ once: true, margin: "-50px" }}
              transition={{ duration: 0.6, delay: idx * 0.1, type: "spring", bounce: 0.3 }}
              className={`group relative rounded-3xl overflow-hidden bg-[#18181b]/80 border border-white/5 hover:border-white/20 transition-all duration-500 cursor-pointer shadow-lg
                ${project.isLarge ? 'md:col-span-2 md:row-span-2' : 'md:col-span-1 md:row-span-1'}
              `}
              onClick={() => openGallery(project)}
            >
              {/* Immagine di sfondo */}
              <div className="absolute inset-0 overflow-hidden">
                <img 
                  src={project.img} 
                  alt={project.title} 
                  className="w-full h-full object-cover transition-transform duration-700 ease-out group-hover:scale-110 object-top"
                />
              </div>

              {/* Overlay Glassmorphism per leggibilità */}
              <div className={`absolute inset-0 flex flex-col justify-end p-6 md:p-8 bg-gradient-to-t transition-opacity duration-300
                ${project.isLarge ? 'from-black/90 via-black/40 to-transparent' : 'from-black/90 to-transparent opacity-80 group-hover:opacity-100'}
              `}>
                <div className="translate-y-4 group-hover:translate-y-0 transition-transform duration-500 ease-out">
                  <div className="flex items-center gap-2 mb-2">
                    <span className="text-xs font-mono tracking-widest text-brand-magenta uppercase bg-black/50 px-2 py-1 rounded border border-white/10 backdrop-blur-sm">
                      {project.category}
                    </span>
                  </div>
                  <h4 className={`${project.isLarge ? 'text-3xl md:text-4xl' : 'text-xl'} font-display font-bold text-white mb-2`}>
                    {project.title}
                  </h4>
                  
                  {project.isLarge && (
                    <p className="text-gray-300 text-sm md:text-base mb-4 line-clamp-2 max-w-sm">
                      {project.desc}
                    </p>
                  )}
                  
                  {project.isLarge && (
                    <div className="flex flex-wrap gap-2 mb-4">
                      {project.tech.map((t, i) => (
                        <span key={i} className="text-[10px] uppercase font-mono tracking-wider py-1 px-2 bg-white/10 rounded-full text-gray-300 backdrop-blur-md">
                          {t}
                        </span>
                      ))}
                    </div>
                  )}
                </div>
              </div>

              {/* Tasto Hover per la gallery (UI/UX Pro Max touch) */}
              <div className="absolute top-4 right-4 md:top-6 md:right-6 w-12 h-12 rounded-full bg-white/10 backdrop-blur-md border border-white/20 flex items-center justify-center opacity-0 group-hover:opacity-100 scale-50 group-hover:scale-100 transition-all duration-300 shadow-xl">
                <Maximize2 className="w-5 h-5 text-white" />
              </div>
            </motion.div>
          ))}
        </div>
      </div>

      {/* Modal Gallery Ottimizzata */}
      <AnimatePresence>
        {selectedProject && (
          <motion.div 
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 z-[100] flex items-center justify-center bg-[#09090b]/95 p-0 md:p-8"
            onClick={closeGallery}
          >
            <button 
              onClick={closeGallery}
              className="absolute top-4 right-4 md:top-8 md:right-8 z-50 text-gray-400 hover:text-white transition-colors bg-white/5 border border-white/10 hover:bg-white/10 p-3 rounded-full"
            >
              <X className="w-6 h-6" />
            </button>

            <div 
              className="relative w-full h-full md:h-auto max-w-6xl max-h-screen flex flex-col items-center justify-center p-4"
              onClick={(e) => e.stopPropagation()}
            >
              
              {selectedProject.images.length > 1 && (
                <>
                  <button onClick={prevImage} className="absolute left-2 md:-left-16 top-1/2 -translate-y-1/2 p-4 text-white/50 hover:text-white transition-colors z-40">
                    <ChevronLeft className="w-10 h-10" />
                  </button>
                  <button onClick={nextImage} className="absolute right-2 md:-right-16 top-1/2 -translate-y-1/2 p-4 text-white/50 hover:text-white transition-colors z-40">
                    <ChevronRight className="w-10 h-10" />
                  </button>
                </>
              )}

              <div className="w-full flex-1 flex flex-col items-center justify-center max-h-[75vh]">
                <img 
                  src={selectedProject.images[currentImageIndex]} 
                  alt={`${selectedProject.title} preview ${currentImageIndex + 1}`} 
                  className="max-w-full max-h-full object-contain rounded-xl shadow-2xl ring-1 ring-white/10"
                />
              </div>

              <div className="mt-8 flex flex-col md:flex-row items-center justify-between w-full max-w-3xl gap-6 bg-white/5 border border-white/10 p-4 md:p-6 rounded-3xl">
                <div className="flex-1">
                  <h4 className="text-2xl font-display text-white mb-1">{selectedProject.title}</h4>
                  <p className="text-gray-400 text-sm font-mono uppercase tracking-widest">{selectedProject.category}</p>
                </div>

                {selectedProject.images.length > 1 && (
                  <div className="flex gap-2">
                    {selectedProject.images.map((_, i) => (
                      <div 
                        key={i} 
                        className={`w-2 h-2 rounded-full transition-all duration-300 ${i === currentImageIndex ? 'bg-brand-purple w-6' : 'bg-white/20 cursor-pointer hover:bg-white/40'}`}
                        onClick={() => setCurrentImageIndex(i)}
                      ></div>
                    ))}
                  </div>
                )}
                
                {selectedProject.appLink && (
                  <div className="flex-1 flex justify-end">
                    <a 
                      href={selectedProject.appLink} 
                      target="_blank" 
                      rel="noopener noreferrer"
                      className="px-6 py-3 bg-white text-black text-sm font-semibold rounded-full hover:scale-105 transition-transform flex items-center gap-2 shadow-[0_0_20px_rgba(255,255,255,0.3)]"
                    >
                      <ExternalLink className="w-4 h-4" /> Live
                    </a>
                  </div>
                )}
              </div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </section>
  );
};

export default Projects;

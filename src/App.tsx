import React from 'react';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import About from './components/About';
import Projects from './components/Projects';
import Contact from './components/Contact';
import BackgroundParticles from './components/BackgroundParticles';

function App() {
  return (
    <div className="bg-[#020617] bg-gradient-to-br from-[#020617] via-[#0B1120] to-[#0A0A16] min-h-screen font-sans text-text-main selection:bg-brand-blue/30 selection:text-white overflow-x-hidden relative">
      {/* Texture Noise & Vignette Background */}
      <div className="fixed inset-0 z-[-1] pointer-events-none">
        {/* Particellare Dinamico */}
        <BackgroundParticles />
        
        {/* Vignette (centro più chiaro, bordi scuri) per profondità */}
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,_transparent_0%,_#020617_100%)] opacity-80"></div>
        
        {/* Rumore di fondo (effetto carta/tela cyber) */}
        <div 
          className="absolute inset-0 opacity-[0.10] mix-blend-overlay"
          style={{
            backgroundImage: `url("data:image/svg+xml,%3Csvg viewBox='0 0 200 200' xmlns='http://www.w3.org/2000/svg'%3E%3Cfilter id='noiseFilter'%3E%3CfeTurbulence type='fractalNoise' baseFrequency='0.8' numOctaves='4' stitchTiles='stitch'/%3E%3C/filter%3E%3Crect width='100%25' height='100%25' filter='url(%23noiseFilter)'/%3E%3C/svg%3E")`,
            backgroundRepeat: 'repeat'
          }}
        ></div>
      </div>

      <Navbar />
      <main>
        <Hero />
        <About />
        <Projects />
        <Contact />
      </main>
    </div>
  );
}

export default App;

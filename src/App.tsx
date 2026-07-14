import React from 'react';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import About from './components/About';
import Projects from './components/Projects';
import Contact from './components/Contact';
function App() {
  return (
    <div className="bg-[#0a0a0a] min-h-screen font-sans text-text-main selection:bg-gray-700 selection:text-white">
      {/* Texture Noise & Vignette Background */}
      <div className="fixed inset-0 z-[-1] pointer-events-none">
        {/* Vignette (centro più chiaro, bordi neri) */}
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,_#2a2a2a_0%,_#050505_100%)] opacity-90"></div>
        
        {/* Rumore di fondo (effetto carta/tela) */}
        <div 
          className="absolute inset-0 opacity-[0.15] mix-blend-overlay"
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

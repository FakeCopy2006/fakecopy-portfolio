import React from 'react';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import About from './components/About';
import Projects from './components/Projects';
import Contact from './components/Contact';
import ElegantBackground from './components/ElegantBackground';

function App() {
  return (
    <div className="font-sans text-text-main selection:bg-brand-blue/30 selection:text-white overflow-x-hidden relative min-h-screen">
      
      {/* Sfondo Interattivo Elegante */}
      <ElegantBackground />

      {/* Livello 2: Contenuto del Sito */}
      <div className="relative z-10">
        <Navbar />
        <main>
          <Hero />
          <About />
          <Projects />
          <Contact />
        </main>
      </div>
    </div>
  );
}

export default App;

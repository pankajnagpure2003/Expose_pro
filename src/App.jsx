import React from 'react';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import Stats from './components/Stats';
import About from './components/About';
import AIPlatform from './components/AIPlatform';
import Ecosystem from './components/Ecosystem';
import Tokenomics from './components/Tokenomics';
import FAQ from './components/FAQ';
import CTA from './components/CTA';
import Footer from './components/Footer';

function App() {
  return (
    <div className="min-h-screen bg-[#05030D] text-white selection:bg-[#8B2CFF]/40 selection:text-white font-['Inter',sans-serif]">
      <Navbar />
      <main>
        <Hero />
        <Stats />
        <About />
        <AIPlatform />
        <Ecosystem />
        <Tokenomics />
        <FAQ />
        <CTA />
      </main>
      <Footer />
    </div>
  );
}

export default App;

import React, { useState } from 'react';
import { Language } from './types';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import Services from './components/Services';
import About from './components/About';
import Testimonials from './components/Testimonials';
import FAQ from './components/FAQ';
import Contact from './components/Contact';
import Footer from './components/Footer';

export default function App() {
  // Set default language as Indonesian ('id') based on target audience preference,
  // but let visitors switch instantly to English ('en')
  const [language, setLanguage] = useState<Language>('id');

  return (
    <div className="bg-white min-h-screen text-zinc-900 antialiased selection:bg-zinc-200 selection:text-zinc-900">
      
      {/* 1. Header Navigation */}
      <Navbar language={language} setLanguage={setLanguage} />

      {/* 2. Hero Presentation Block */}
      <Hero language={language} />

      {/* 3. Core IT & Tech Services List */}
      <Services language={language} />

      {/* 4. Business & Team Philosophy */}
      <About language={language} />

      {/* 5. Client Testimonials */}
      <Testimonials language={language} />

      {/* 6. Accordion Ask / Question Section */}
      <FAQ language={language} />

      {/* 7. Location address, Maps and Active Inquiry form */}
      <Contact language={language} />

      {/* 8. Footer Section */}
      <Footer language={language} />
      
    </div>
  );
}

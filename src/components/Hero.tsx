import React from 'react';
import { motion } from 'motion/react';
import { ArrowUpRight, ShieldCheck, Terminal, Cpu, LayoutTemplate, Sparkles } from 'lucide-react';
import { Language } from '../types';
import { translationKeys } from '../data/websiteContent';

interface HeroProps {
  language: Language;
}

export const Hero: React.FC<HeroProps> = ({ language }) => {
  const handleScrollToContact = (e: React.MouseEvent<HTMLAnchorElement>) => {
    e.preventDefault();
    const targetElement = document.querySelector('#contact');
    if (targetElement) {
      const offset = 80;
      const bodyRect = document.body.getBoundingClientRect().top;
      const elementRect = targetElement.getBoundingClientRect().top;
      const elementPosition = elementRect - bodyRect;
      const offsetPosition = elementPosition - offset;

      window.scrollTo({
        top: offsetPosition,
        behavior: 'smooth',
      });
    }
  };

  return (
    <section className="relative min-h-screen pt-28 flex items-center justify-center overflow-hidden bg-white">
      {/* Dynamic Background Mesh Grids khas shadcnUI */}
      <div className="absolute inset-0 bg-[linear-gradient(to_right,#f4f4f5_1px,transparent_1px),linear-gradient(to_bottom,#f4f4f5_1px,transparent_1px)] bg-[size:4rem_4rem] [mask-image:radial-gradient(ellipse_60%_50%_at_50%_50%,#000_70%,transparent_100%)] opacity-80" />
      
      {/* Subtle radial gradients */}
      <div className="absolute top-1/4 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[500px] h-[500px] bg-zinc-100 rounded-full blur-[120px] pointer-events-none" />
      <div className="absolute bottom-10 right-10 w-[300px] h-[300px] bg-zinc-50 rounded-full blur-[100px] pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10 py-12">
        <div className="text-center max-w-4xl mx-auto space-y-8">
          
          {/* Badge */}
          <motion.div
            initial={{ opacity: 0, scale: 0.95 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.5, delay: 0.1 }}
            className="inline-flex items-center gap-2 px-3.5 py-1.5 border-[0.5px] border-zinc-200 bg-zinc-50 rounded-full text-xs font-mono text-zinc-600 shadow-sm"
          >
            <Sparkles className="w-3.5 h-3.5 text-zinc-500 animate-pulse animate-duration-1000" />
            <span className="tracking-wide font-medium">
              {language === 'en' ? 'ONE-STOP TECH SOLUTIONS' : 'PORTAL LAYANAN TEKNOLOGI SATU PINTU'}
            </span>
          </motion.div>

          {/* Heading */}
          <motion.h1
            initial={{ opacity: 0, y: 15 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="font-sans text-4xl sm:text-5xl md:text-6xl font-extrabold tracking-tight text-zinc-950 leading-tight"
          >
            {translationKeys.tagline[language]}
          </motion.h1>

          {/* Subtitle description */}
          <motion.p
            initial={{ opacity: 0, y: 15 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.3 }}
            className="font-sans text-base sm:text-lg md:text-xl text-zinc-500 leading-relaxed max-w-3xl mx-auto font-medium"
          >
            {translationKeys.subTagline[language]}
          </motion.p>

          {/* Call-to-actions buttons */}
          <motion.div
            initial={{ opacity: 0, y: 15 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.4 }}
            className="flex flex-col sm:flex-row items-center justify-center gap-4 pt-4"
          >
            <a
              href="#contact"
              onClick={handleScrollToContact}
              className="w-full sm:w-auto bg-zinc-950 hover:bg-zinc-800 text-zinc-50 font-sans font-semibold px-8 py-3.5 rounded-full text-sm inline-flex items-center justify-center gap-2 group transition-all duration-200 shadow-md shadow-zinc-200"
            >
              {translationKeys.getInTouch[language]}
              <ArrowUpRight className="w-4 h-4 transition-transform group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
            </a>
            
            <a
              href={`https://wa.me/62${translationKeys.whatsappNumber}?text=Halo%20Omniverse%20One,%20saya%20ingin%20konsultasi%20jasa%20teknologi.`}
              target="_blank"
              rel="noopener noreferrer"
              className="w-full sm:w-auto border-[0.5px] border-zinc-200 bg-white hover:bg-zinc-50 text-zinc-700 hover:text-zinc-950 font-sans font-semibold px-8 py-3.5 rounded-full text-sm inline-flex items-center justify-center gap-2 transition-all duration-200 shadow-sm"
            >
              <span>{translationKeys.whatsappDirect[language]}</span>
            </a>
          </motion.div>

          {/* Mini Portfolio Summary Bar */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 0.8 }}
            transition={{ duration: 0.8, delay: 0.6 }}
            className="pt-12 grid grid-cols-2 md:grid-cols-4 gap-6 max-w-3xl mx-auto border-t-[0.5px] border-zinc-100"
          >
            {[
              { icon: LayoutTemplate, label: language === 'en' ? 'Web Design' : 'Portal Web' },
              { icon: Terminal, label: language === 'en' ? 'Software Development' : 'Bikin Software' },
              { icon: Cpu, label: language === 'en' ? 'Computer Install' : 'Instalasi Komputer' },
              { icon: ShieldCheck, label: language === 'en' ? 'System Support' : 'Perawatan Sistem' },
            ].map((item, idx) => (
              <div key={idx} className="flex items-center justify-center gap-2 text-zinc-400 hover:text-zinc-700 transition-colors">
                <item.icon className="w-4 h-4" />
                <span className="text-xs font-mono tracking-wider uppercase font-bold">{item.label}</span>
              </div>
            ))}
          </motion.div>

        </div>
      </div>
    </section>
  );
};

export default Hero;

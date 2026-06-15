import React, { useState } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { LayoutTemplate, Terminal, Cpu, ShieldCheck, ArrowRight, Check, X } from 'lucide-react';
import { Language, Service } from '../types';
import { servicesData, translationKeys } from '../data/websiteContent';

interface ServicesProps {
  language: Language;
}

export const Services: React.FC<ServicesProps> = ({ language }) => {
  const [selectedService, setSelectedService] = useState<Service | null>(null);

  // Helper to resolve icon by string key from servicesData securely
  const getIconComponent = (iconName: string) => {
    switch (iconName) {
      case 'LayoutTemplate':
        return <LayoutTemplate className="w-10 h-10" />;
      case 'Terminal':
        return <Terminal className="w-10 h-10" />;
      case 'Cpu':
        return <Cpu className="w-10 h-10" />;
      case 'ShieldCheck':
        return <ShieldCheck className="w-10 h-10" />;
      default:
        return <Terminal className="w-10 h-10" />;
    }
  };

  return (
    <section id="services" className="py-24 bg-white border-t-[0.5px] border-zinc-100 scroll-mt-10 relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Header Block */}
        <div className="mb-16 md:flex items-end justify-between">
          <div className="max-w-2xl space-y-4">
            <span className="font-mono text-xs tracking-widest text-zinc-400 font-semibold uppercase">
              {language === 'en' ? 'OUR SPECIFIC CAPABILITIES' : 'KEMAMPUAN TEKNIS KAMI'}
            </span>
            <h2 className="font-sans text-3xl sm:text-4xl font-extrabold tracking-tight text-zinc-950">
              {language === 'en' ? 'Core Professional Services' : 'Solusi Layanan Utama'}
            </h2>
          </div>
          <p className="mt-4 md:mt-0 max-w-sm text-zinc-500 font-sans text-sm leading-relaxed font-medium">
            {language === 'en'
              ? 'Meticulous, high-performance services designed specifically for demanding individual projects and business systems.'
              : 'Layanan terperinci dengan performa tinggi yang dirancang secara khusus untuk kebutuhan perorangan maupun sistem perusahaan.'}
          </p>
        </div>

        {/* 4 Cards Grid - khas shadcn/ui */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {servicesData.map((service, index) => (
            <motion.div
              key={service.id}
              initial={{ opacity: 0, y: 15 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: '-100px' }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              className="bg-white hover:bg-zinc-50/50 border-[0.5px] border-zinc-200/80 hover:border-zinc-300 rounded-2xl p-8 transition-all duration-300 group flex flex-col justify-between shadow-sm hover:shadow-md"
            >
              <div className="space-y-6">
                {/* Header Row */}
                <div className="flex items-start justify-between">
                  <div className="text-zinc-800 transition-colors duration-200">
                    {getIconComponent(service.icon)}
                  </div>
                  <span className="font-mono text-2xs tracking-wider uppercase border-[0.5px] border-zinc-200 text-zinc-500 px-2.5 py-1 rounded bg-zinc-50 font-bold">
                    {service.badge[language]}
                  </span>
                </div>

                {/* Body Text */}
                <div className="space-y-3">
                  <h3 className="font-sans text-xl font-bold text-zinc-900 group-hover:text-zinc-950 transition-colors">
                    {service.title[language]}
                  </h3>
                  <p className="font-sans text-sm text-zinc-500 group-hover:text-zinc-650 leading-relaxed transition-colors font-medium">
                    {service.shortDesc[language]}
                  </p>
                </div>
              </div>

              {/* Action Trigger */}
              <div className="mt-8 pt-6 border-t-[0.5px] border-zinc-100 flex items-center justify-between">
                <button
                  onClick={() => setSelectedService(service)}
                  className="font-sans text-xs font-bold tracking-tight text-zinc-800 flex items-center gap-1.5 hover:text-zinc-950 transition-colors"
                >
                  <span>{translationKeys.viewDetails[language]}</span>
                  <ArrowRight className="w-3.5 h-3.5 transition-transform group-hover:translate-x-1 text-zinc-400" />
                </button>
              </div>
            </motion.div>
          ))}
        </div>
      </div>

      {/* Fully Interactive shadcn-style Sheet Modal Backdrop & Drawer container */}
      <AnimatePresence>
        {selectedService && (
          <div className="fixed inset-0 z-50 flex items-center justify-center p-4">
            {/* Backdrop Blur overlay */}
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              onClick={() => setSelectedService(null)}
              className="fixed inset-0 bg-zinc-950/40 backdrop-blur-sm"
            />

            {/* Modal Body Card */}
            <motion.div
              initial={{ opacity: 0, scale: 0.95, y: 15 }}
              animate={{ opacity: 1, scale: 1, y: 0 }}
              exit={{ opacity: 0, scale: 0.95, y: 15 }}
              transition={{ type: 'spring', duration: 0.4 }}
              className="relative w-full max-w-lg bg-white border-[0.5px] border-zinc-150 rounded-2xl p-6 sm:p-8 z-10 shadow-2xl space-y-6 max-h-[85vh] sm:max-h-[90vh] overflow-y-auto"
            >
              {/* Close Button */}
              <button
                onClick={() => setSelectedService(null)}
                className="absolute top-4 right-4 p-1 rounded-full text-zinc-400 hover:text-zinc-900 hover:bg-zinc-100 transition-colors"
                aria-label="Close dialog"
              >
                <X className="w-5 h-5" />
              </button>

              {/* Icon & Title block */}
              <div className="space-y-3 pt-2">
                <div className="inline-flex text-zinc-900 border-[0.5px] border-zinc-150 p-2.5 rounded-xl bg-zinc-50">
                  {getIconComponent(selectedService.icon)}
                </div>
                <h3 className="font-sans text-2xl font-extrabold text-zinc-950 tracking-tight">
                  {selectedService.title[language]}
                </h3>
                <span className="inline-block font-mono text-2xs tracking-widest text-zinc-500 border-[0.5px] border-zinc-200 bg-zinc-50 px-2.5 py-1 rounded">
                  {selectedService.badge[language]}
                </span>
              </div>

              {/* Description body */}
               <div className="space-y-4">
                <p className="font-sans text-sm text-zinc-650 leading-relaxed font-semibold">
                  {selectedService.fullDesc[language]}
                </p>
                
                {/* Specific features checklist */}
                <div className="space-y-3 pt-2">
                  <span className="font-mono text-xs text-zinc-500 font-bold uppercase tracking-wider block">
                    {language === 'en' ? 'Scope of Deliverables' : 'Ruang Lingkup Pekerjaan'}
                  </span>
                  <ul className="space-y-2">
                    {selectedService.features[language].map((feature, idx) => (
                      <li key={idx} className="flex items-start gap-2.5 text-zinc-650 font-sans text-sm leading-relaxed font-semibold">
                        <div className="bg-zinc-100 border-[0.5px] border-zinc-200 text-zinc-800 p-0.5 mt-0.5 rounded">
                          <Check className="w-3.5 h-3.5 text-zinc-900" />
                        </div>
                        <span>{feature}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              </div>

              {/* Instant Call-to-action */}
              <div className="pt-6 border-t-[0.5px] border-zinc-100 flex items-center gap-3">
                <a
                  href="#contact"
                  onClick={(e) => {
                    setSelectedService(null);
                    // scroll to contact
                    const contactSection = document.querySelector('#contact');
                    if (contactSection) {
                      contactSection.scrollIntoView({ behavior: 'smooth' });
                    }
                  }}
                  className="flex-1 bg-zinc-950 hover:bg-zinc-800 text-white px-4 py-2.5 rounded-full font-sans font-bold text-center text-xs transition-colors shadow-sm"
                >
                  {language === 'en' ? 'Inquire This Service' : 'Pesan Jasa Ini'}
                </a>
                <button
                  onClick={() => setSelectedService(null)}
                  className="px-4 py-2.5 rounded-full font-sans text-zinc-500 hover:text-zinc-950 text-xs border-[0.5px] border-zinc-200 hover:bg-zinc-50 transition-all font-bold"
                >
                  {translationKeys.closeDetails[language]}
                </button>
              </div>
            </motion.div>
          </div>
        )}
      </AnimatePresence>
    </section>
  );
};

export default Services;

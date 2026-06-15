import React, { useState } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { ChevronDown, HelpCircle } from 'lucide-react';
import { Language } from '../types';
import { faqData, translationKeys } from '../data/websiteContent';

interface FAQProps {
  language: Language;
}

export const FAQ: React.FC<FAQProps> = ({ language }) => {
  const [activeIndex, setActiveIndex] = useState<number | null>(null);

  const toggleAccordion = (index: number) => {
    setActiveIndex(activeIndex === index ? null : index);
  };

  return (
    <section id="faq" className="py-24 bg-white border-t-[0.5px] border-zinc-100 scroll-mt-10 relative">
      <div className="max-w-4xl mx-auto px-4 sm:px-6">
        
        {/* Header block */}
        <div className="text-center max-w-2xl mx-auto space-y-4 mb-16">
          <HelpCircle className="w-8 h-8 text-zinc-650 mx-auto" />
          <h2 className="font-sans text-3xl sm:text-4xl font-extrabold tracking-tight text-zinc-950">
            {translationKeys.faq[language]}
          </h2>
          <p className="font-sans text-sm text-zinc-500 font-medium">
            {language === 'en'
              ? 'Quick answers to clarify security, deployment scopes, and technical processes.'
              : 'Jawaban cepat seputar jaminan keamanan, cakupan pengerjaan, dan proses teknis kami.'}
          </p>
        </div>

        {/* Collapsible Accordions khas shadcnUI */}
        <div className="space-y-4">
          {faqData.map((faq, index) => {
            const isOpen = activeIndex === index;
            return (
              <div
                key={index}
                className="border-[0.5px] border-zinc-150 bg-white rounded-2xl overflow-hidden shadow-sm hover:shadow-md transition-all duration-300"
              >
                <button
                  onClick={() => toggleAccordion(index)}
                  className="w-full flex items-center justify-between text-left p-6 font-sans font-extrabold text-zinc-900 hover:bg-zinc-50/50 transition-all duration-200"
                >
                  <span className="text-base sm:text-lg leading-snug">{faq.q[language]}</span>
                  <ChevronDown
                    className={`w-5 h-5 text-zinc-400 shrink-0 transition-transform duration-300 ${
                      isOpen ? 'rotate-180 text-zinc-950' : ''
                    }`}
                  />
                </button>

                <AnimatePresence initial={false}>
                  {isOpen && (
                    <motion.div
                      initial={{ height: 0, opacity: 0 }}
                      animate={{ height: 'auto', opacity: 1 }}
                      exit={{ height: 0, opacity: 0 }}
                      transition={{ duration: 0.25, ease: 'easeInOut' }}
                    >
                      <div className="px-6 pb-6 pt-1 border-t-[0.5px] border-zinc-100 text-zinc-650 font-sans text-sm leading-relaxed font-semibold">
                        {faq.a[language]}
                      </div>
                    </motion.div>
                  )}
                </AnimatePresence>
              </div>
            );
          })}
        </div>

      </div>
    </section>
  );
};

export default FAQ;

import React from 'react';
import { motion } from 'motion/react';
import { Quote } from 'lucide-react';
import { Language } from '../types';
import { translationKeys } from '../data/websiteContent';
import { testimonialData } from '../data/websiteContent';

interface TestimonialsProps {
  language: Language;
}

export const Testimonials: React.FC<TestimonialsProps> = ({ language }) => {
  return (
    <section className="py-24 bg-white border-t border-zinc-100 overflow-hidden relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Header content */}
        <div className="text-center max-w-2xl mx-auto space-y-4 mb-16">
          <span className="font-mono text-xs tracking-widest text-zinc-400 font-semibold uppercase block">
            {language === 'en' ? 'PROVEN TRUST' : 'REPUTASI TERUJI'}
          </span>
          <h2 className="font-sans text-3xl sm:text-4xl font-extrabold tracking-tight text-zinc-950">
            {translationKeys.testimonialsTitle[language]}
          </h2>
          <p className="font-sans text-sm text-zinc-500 font-semibold">
            {translationKeys.testimonialsSub[language]}
          </p>
        </div>

        {/* Horizontal scroll or layout grid of reviews */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {testimonialData.map((testimonial, idx) => (
            <motion.div
              key={testimonial.id}
              initial={{ opacity: 0, y: 15 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: '-50px' }}
              transition={{ duration: 0.5, delay: idx * 0.1 }}
              className="bg-white border border-zinc-100 hover:border-zinc-200 p-6 sm:p-8 rounded-2xl flex flex-col justify-between space-y-8 relative group hover:bg-zinc-50/50 hover:-translate-y-0.5 transition-all duration-300 shadow-sm hover:shadow-md"
            >
              <Quote className="absolute top-6 right-8 w-8 h-8 text-zinc-100 pointer-events-none group-hover:scale-110 transition-transform duration-300" />
              
              <p className="font-sans text-sm text-zinc-650 italic leading-relaxed relative z-10 font-bold">
                "{testimonial.content[language]}"
              </p>

              <div className="flex items-center gap-4 pt-4 border-t border-zinc-100">
                <img
                  src={testimonial.avatar}
                  alt={testimonial.name}
                  referrerPolicy="no-referrer"
                  className="w-10 h-10 rounded-full object-cover border border-zinc-200 shrink-0"
                />
                <div>
                  <h4 className="font-sans text-sm font-bold text-zinc-900 leading-tight">
                    {testimonial.name}
                  </h4>
                  <span className="font-mono text-3xs text-zinc-400 block uppercase pt-0.5 tracking-wider font-bold">
                    {testimonial.role[language]} – {testimonial.company}
                  </span>
                </div>
              </div>
            </motion.div>
          ))}
        </div>

      </div>
    </section>
  );
};

export default Testimonials;

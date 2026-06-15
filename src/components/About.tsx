import React from 'react';
import { motion } from 'motion/react';
import { Award, Zap, Users, ShieldCheck } from 'lucide-react';
import { Language } from '../types';
import { translationKeys } from '../data/websiteContent';

interface AboutProps {
  language: Language;
}

export const About: React.FC<AboutProps> = ({ language }) => {

  const getAboutIcon = (idx: number) => {
    switch (idx) {
      case 0:
        return <Award className="w-5 h-5 text-zinc-900" />;
      case 1:
        return <Zap className="w-5 h-5 text-zinc-900" />;
      case 2:
        return <Users className="w-5 h-5 text-zinc-900" />;
      case 3:
        return <ShieldCheck className="w-5 h-5 text-zinc-900" />;
      default:
        return <Award className="w-5 h-5 text-zinc-900" />;
    }
  };

  return (
    <section id="about" className="py-24 bg-white border-t-[0.5px] border-zinc-100 scroll-mt-10 relative overflow-hidden">
      {/* Background radial highlight */}
      <div className="absolute top-1/2 left-0 -translate-y-1/2 w-72 h-72 bg-zinc-50 rounded-full blur-3xl pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* Title */}
        <div className="space-y-4 max-w-2xl mb-16">
          <span className="font-mono text-xs tracking-widest text-zinc-400 font-semibold uppercase">
            {language === 'en' ? 'OUR BUSINESS MODEL' : 'MODEL LAYANAN KAMI'}
          </span>
          <h2 className="font-sans text-3xl sm:text-4xl font-extrabold tracking-tight text-zinc-950 leading-tight">
            {translationKeys.aboutTitle[language]}
          </h2>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-start">
          
          {/* Main narrative block */}
          <div className="lg:col-span-7 space-y-6">
            <p className="font-sans text-base text-zinc-650 leading-relaxed font-semibold">
              {translationKeys.aboutParagraph1[language]}
            </p>
            <p className="font-sans text-base text-zinc-500 leading-relaxed font-medium">
              {translationKeys.aboutParagraph2[language]}
            </p>
            
            {/* Visual Callout block */}
            <div className="border-[0.5px] border-zinc-150 bg-zinc-50/50 p-6 rounded-2xl space-y-3 mt-8">
              <span className="font-mono text-2xs uppercase tracking-widest text-zinc-500 font-bold block">
                {language === 'en' ? 'THE OMNIVERSE PHILOSOPHY' : 'FILOSOFI OMNIVERSE'}
              </span>
              <p className="font-sans text-xs italic text-zinc-600 leading-relaxed font-semibold">
                {language === 'en' 
                  ? '"We think from first principles. A great application or workplace setup should not just work—it should be a joy to use, run on minimal resources, and require zero hand-holding after hand-off."'
                  : '"Kami berpikir dari prinsip dasar. Sebuah program aplikasi atau sistem ruang kerja yang baik tidak hanya sekadar bisa jalan—ia harus menyenangkan ketika digunakan, hemat sumber daya, dan bebas kerumitan pasca pengerjaan selesai."'}
              </p>
            </div>
          </div>

          {/* Bento Stats Side Grid */}
          <div className="lg:col-span-5 grid grid-cols-1 sm:grid-cols-2 gap-4">
            {translationKeys.aboutStats.map((stat, idx) => (
              <motion.div
                key={idx}
                initial={{ opacity: 0, scale: 0.98 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true }}
                transition={{ duration: 0.4, delay: idx * 0.08 }}
                className="bg-white border-[0.5px] border-zinc-100 hover:border-zinc-200 h-40 p-6 rounded-2xl flex flex-col justify-between group transition-all duration-300 shadow-sm hover:shadow-md"
              >
                <div className="bg-zinc-50 border-[0.5px] border-zinc-150 p-2.5 rounded-xl inline-flex w-fit text-zinc-950 transition-colors">
                  {getAboutIcon(idx)}
                </div>
                
                <div className="space-y-1">
                  <span className="font-sans text-xl font-black text-zinc-950 block tracking-tight">
                    {stat.value}
                  </span>
                  <span className="font-sans text-2xs text-zinc-500 block uppercase tracking-wider font-mono font-bold">
                    {stat.label[language]}
                  </span>
                </div>
              </motion.div>
            ))}
          </div>

        </div>
      </div>
    </section>
  );
};

export default About;

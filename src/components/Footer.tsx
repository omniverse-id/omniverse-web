import React from 'react';
import { Mail, Phone, MapPin, Globe } from 'lucide-react';
import { Language } from '../types';
import { translationKeys } from '../data/websiteContent';
import Logo from './Logo';

interface FooterProps {
  language: Language;
}

export const Footer: React.FC<FooterProps> = ({ language }) => {
  const currentYear = new Date().getFullYear();

  const handleBackToTop = (e: React.MouseEvent<HTMLAnchorElement>) => {
    e.preventDefault();
    window.scrollTo({
      top: 0,
      behavior: 'smooth',
    });
  };

  return (
    <footer className="bg-zinc-50 border-t-[0.5px] border-zinc-200/10 py-12 scroll-mt-10">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        <div className="grid grid-cols-1 md:grid-cols-12 gap-12 text-zinc-500">
          
          {/* Logo & Info (span 5) */}
          <div className="md:col-span-5 space-y-6">
            <a href="#" onClick={handleBackToTop}>
              <Logo size={52} variant="full" />
            </a>
            <p className="font-sans text-xs text-zinc-500 max-w-sm leading-relaxed font-semibold">
              {language === 'en'
                ? 'High-performance independent tech specialist. Web Design, custom systems development, computer installations, and robust support.'
                : 'Spesialis teknis independen berkinerja tinggi. Desain Web, pembuatan software kustom, perakitan perangkat keras komputer, dan dukungan sistem.'}
            </p>
          </div>

          {/* Quick links navigation (span 3) */}
          <div className="md:col-span-3 space-y-4">
            <span className="font-mono text-2xs text-zinc-400 uppercase font-bold tracking-wider block">
              {language === 'en' ? 'Navigation' : 'Sitemap Navigasi'}
            </span>
            <ul className="space-y-2 text-xs font-sans text-zinc-500">
              <li>
                <a href="#services" className="hover:text-zinc-950 hover:font-bold transition-all">
                  {translationKeys.services[language]}
                </a>
              </li>
              <li>
                <a href="#about" className="hover:text-zinc-950 hover:font-bold transition-all">
                  {translationKeys.aboutName[language]}
                </a>
              </li>
              <li>
                <a href="#faq" className="hover:text-zinc-950 hover:font-bold transition-all">
                  {translationKeys.faq[language]}
                </a>
              </li>
              <li>
                <a href="#contact" className="hover:text-zinc-950 hover:font-bold transition-all">
                  {translationKeys.contact[language]}
                </a>
              </li>
            </ul>
          </div>

          {/* Contacts Summary panel (span 4) */}
          <div className="md:col-span-4 space-y-4">
            <span className="font-mono text-2xs text-zinc-400 uppercase font-bold tracking-wider block">
              {language === 'en' ? 'Core Anchors' : 'Rincian Utama'}
            </span>
            <ul className="space-y-3.5 text-xs font-sans leading-relaxed text-zinc-500">
              <li className="flex items-start gap-2 font-semibold">
                <MapPin className="w-3.5 h-3.5 text-zinc-400 mt-1 shrink-0" />
                <span>Omniverse One - Ciwaru Indah Residence Blok B5, Tamansari, Bogor 16610</span>
              </li>
              <li className="flex items-center gap-2 font-semibold">
                <Phone className="w-3.5 h-3.5 text-zinc-400 shrink-0" />
                <span>{translationKeys.phoneFormatted}</span>
              </li>
              <li className="flex items-center gap-2 font-semibold">
                <Mail className="w-3.5 h-3.5 text-zinc-400 shrink-0" />
                <span>omniverse1.cloud@gmail.com</span>
              </li>
            </ul>
          </div>

        </div>

        {/* Small copyright signature block */}
        <div className="mt-8 pt-4 border-t-[0.5px] border-zinc-200/[0.08] flex flex-col sm:flex-row items-center justify-between gap-4 text-2xs font-mono text-zinc-400 font-normal">
          <span>&copy; {currentYear} Omniverse One. All rights reserved.</span>
          <div className="flex gap-4">
            <span>Tamansari, Bogor, Indonesia</span>
          </div>
        </div>

      </div>
    </footer>
  );
};

export default Footer;

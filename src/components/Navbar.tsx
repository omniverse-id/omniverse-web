import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { Menu, X, Globe, MessageSquare } from 'lucide-react';
import { Language } from '../types';
import { translationKeys } from '../data/websiteContent';
import Logo from './Logo';

interface NavbarProps {
  language: Language;
  setLanguage: (lang: Language) => void;
}

export const Navbar: React.FC<NavbarProps> = ({ language, setLanguage }) => {
  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 10);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navLinks = [
    { href: '#services', label: translationKeys.services[language] },
    { href: '#about', label: translationKeys.aboutName[language] },
    { href: '#faq', label: translationKeys.faq[language] },
    { href: '#contact', label: translationKeys.contact[language] },
  ];

  const handleScrollTo = (e: React.MouseEvent<HTMLAnchorElement>, targetId: string) => {
    e.preventDefault();
    setIsOpen(false);
    const targetElement = document.querySelector(targetId);
    if (targetElement) {
      const offset = 80; // height of fixed navbar
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
    <>
      <header
        className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
          scrolled
            ? 'bg-white/90 backdrop-blur-md border-b border-zinc-100 shadow-sm'
            : 'bg-transparent border-b border-transparent'
        }`}
      >
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center justify-between h-20">
            {/* Logo */}
            <a href="#" onClick={(e) => handleScrollTo(e, '#')} className="flex items-center gap-2">
              <Logo size={52} variant="full" />
            </a>

            {/* Desktop Navigation */}
            <nav className="hidden md:flex items-center gap-8">
              {navLinks.map((link) => (
                <a
                  key={link.href}
                  href={link.href}
                  onClick={(e) => handleScrollTo(e, link.href)}
                  className="font-sans text-sm text-zinc-500 hover:text-zinc-900 transition-colors py-2 relative group font-medium"
                >
                  {link.label}
                  <span className="absolute bottom-0 left-0 w-0 h-[2px] bg-zinc-900 transition-all duration-300 group-hover:w-full" />
                </a>
              ))}
            </nav>

            {/* Language Switch & CTA Button */}
            <div className="hidden md:flex items-center gap-6">
              {/* Language Switcher Sliding Pill */}
              <div className="bg-zinc-100 border border-zinc-200 p-1 rounded-full flex items-center relative gap-1">
                <Globe className="w-4 h-4 text-zinc-400 ml-2 mr-1" />
                <button
                  onClick={() => setLanguage('id')}
                  className={`relative px-3 py-1 rounded-full text-xs font-mono transition-colors duration-200 z-10 font-bold ${
                    language === 'id' ? 'text-white' : 'text-zinc-500 hover:text-zinc-800'
                  }`}
                >
                  {language === 'id' && (
                    <motion.div
                      layoutId="langPill"
                      className="absolute inset-0 bg-zinc-900 rounded-full -z-10"
                      transition={{ type: 'spring', stiffness: 350, damping: 30 }}
                    />
                  )}
                  ID
                </button>
                <button
                  onClick={() => setLanguage('en')}
                  className={`relative px-3 py-1 rounded-full text-xs font-mono transition-colors duration-200 z-10 font-bold ${
                    language === 'en' ? 'text-white' : 'text-zinc-500 hover:text-zinc-800'
                  }`}
                >
                  {language === 'en' && (
                    <motion.div
                      layoutId="langPill"
                      className="absolute inset-0 bg-zinc-900 rounded-full -z-10"
                      transition={{ type: 'spring', stiffness: 350, damping: 30 }}
                    />
                  )}
                  EN
                </button>
              </div>

              {/* Consultation Link Button */}
              <a
                href="#contact"
                onClick={(e) => handleScrollTo(e, '#contact')}
                className="bg-zinc-900 hover:bg-zinc-850 text-white px-5 py-2.5 rounded-full font-sans font-semibold text-xs tracking-tight transition-all duration-250 flex items-center gap-1.5 shadow-sm"
              >
                <MessageSquare className="w-3.5 h-3.5 text-zinc-300" />
                {translationKeys.getInTouch[language]}
              </a>
            </div>

            {/* Mobile Hamburger Menu Trigger */}
            <div className="flex md:hidden items-center gap-3">
              {/* Simple Mobile Lang Switch Button */}
              <button
                onClick={() => setLanguage(language === 'en' ? 'id' : 'en')}
                className="bg-zinc-100 border border-zinc-200 text-zinc-700 px-3 py-1.5 rounded-full text-xs font-mono font-semibold"
              >
                {language === 'en' ? 'IND 🇮🇩' : 'ENG 🇬🇧'}
              </button>

              <button
                onClick={() => setIsOpen(!isOpen)}
                className="text-zinc-500 hover:text-zinc-900 transition-colors p-2"
                aria-label="Toggle menu"
              >
                {isOpen ? <X className="w-5 h-5" /> : <Menu className="w-5 h-5" />}
              </button>
            </div>
          </div>
        </div>
      </header>

      {/* Mobile Drawer (Animates in) */}
      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -20 }}
            transition={{ duration: 0.2 }}
            className="fixed top-20 left-0 right-0 z-40 bg-white/95 backdrop-blur-lg border-b border-zinc-150 py-6 px-6 md:hidden flex flex-col gap-6 shadow-md"
          >
            <nav className="flex flex-col gap-4">
              {navLinks.map((link) => (
                <a
                  key={link.href}
                  href={link.href}
                  onClick={(e) => handleScrollTo(e, link.href)}
                  className="font-sans text-base font-semibold text-zinc-600 hover:text-zinc-950 transition-colors"
                >
                  {link.label}
                </a>
              ))}
            </nav>

            <div className="mt-2 pt-6 border-t border-zinc-100 flex flex-col gap-4">
              <a
                href="#contact"
                onClick={(e) => handleScrollTo(e, '#contact')}
                className="bg-zinc-900 hover:bg-zinc-800 text-white px-4 py-3 rounded-full font-sans font-semibold text-sm tracking-tight transition-all duration-200 text-center flex items-center justify-center gap-2 shadow"
              >
                <MessageSquare className="w-4 h-4" />
                {translationKeys.getInTouch[language]}
              </a>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
};

export default Navbar;

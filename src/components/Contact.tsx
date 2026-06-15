import React, { useState } from 'react';
import { MapPin, Phone, MessageSquare, Send, ArrowUpRight, CheckCircle2 } from 'lucide-react';
import { Language } from '../types';
import { servicesData, translationKeys } from '../data/websiteContent';

interface ContactProps {
  language: Language;
}

export const Contact: React.FC<ContactProps> = ({ language }) => {
  const [name, setName] = useState('');
  const [clientType, setClientType] = useState<'business' | 'individual'>('business');
  const [selectedService, setSelectedService] = useState(servicesData[0].id);
  const [notes, setNotes] = useState('');
  const [submitted, setSubmitted] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!name.trim()) return;

    // Resolve the service clean title matching active language
    const serviceObj = servicesData.find((s) => s.id === selectedService);
    const serviceTitle = serviceObj ? serviceObj.title[language] : selectedService;

    const templateText = language === 'en'
      ? `Hello Omniverse One! I would like to consult about a tech project:
  
• Client Name: ${name}
• Segment: ${clientType === 'business' ? 'Business / Company' : 'Individual'}
• Desired Service: ${serviceTitle}
• Requirements Details: 
${notes ? notes : 'No additional details provided'}
  
Looking forward to your professional assistance. Thank you!`
      : `Halo Omniverse One! Saya ingin berkonsultasi mengenai kebutuhan teknologi:
  
• Nama Klien: ${name}
• Kategori: ${clientType === 'business' ? 'Bisnis / Perusahaan' : 'Perorangan'}
• Layanan Jasa: ${serviceTitle}
• Detail Kebutuhan: 
${notes ? notes : 'Tidak ada catatan tambahan'}
  
Mohon info ketersediaan konsultasi. Terima kasih!`;

    // Format the official whatsapp link
    const waNumber = '6285542257000'; // official user WhatsApp
    const waUrl = `https://wa.me/${waNumber}?text=${encodeURIComponent(templateText)}`;
    
    // Open WhatsApp
    window.open(waUrl, '_blank');
    setSubmitted(true);
    
    // Reset state after some time
    setTimeout(() => {
      setSubmitted(false);
    }, 6000);
  };

  return (
    <section id="contact" className="py-24 bg-white border-t-[0.5px] border-zinc-100 scroll-mt-10 relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Header content */}
        <div className="mb-16 max-w-2xl">
          <span className="font-mono text-xs tracking-widest text-zinc-400 font-semibold uppercase block mb-3">
            {language === 'en' ? 'ESTABLISH CONNECTIVITY' : 'MULAI HUBUNGAN KERJA'}
          </span>
          <h2 className="font-sans text-3xl sm:text-4xl font-extrabold tracking-tight text-zinc-950">
            {translationKeys.contact[language]}
          </h2>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-start">
          
          {/* Left panel: Info & Map (span 5) */}
          <div className="lg:col-span-5 space-y-8">
            
            {/* Quick stats items */}
            <div className="bg-white border-[0.5px] border-zinc-100 rounded-2xl p-6 space-y-6 shadow-sm">
              
              {/* Address card */}
              <div className="flex items-start gap-4">
                <div className="bg-zinc-50 border-[0.5px] border-zinc-150 text-zinc-900 p-2.5 rounded-xl">
                  <MapPin className="w-5 h-5" />
                </div>
                <div className="space-y-1">
                  <h4 className="font-sans font-bold text-sm text-zinc-900">
                    {translationKeys.addressTitle[language]}
                  </h4>
                  <p className="font-sans text-xs text-zinc-500 leading-relaxed font-semibold">
                    {translationKeys.addressBody}
                  </p>
                  <a
                    href={translationKeys.mapsLink}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center gap-1 text-2xs text-zinc-900 hover:underline pt-1.5 font-bold"
                  >
                    <span>{language === 'en' ? 'View Google Maps' : 'Buka Google Maps'}</span>
                    <ArrowUpRight className="w-3 h-3" />
                  </a>
                </div>
              </div>

              {/* WhatsApp card */}
              <div className="flex items-start gap-4 border-t-[0.5px] border-zinc-100 pt-6">
                <div className="bg-zinc-50 border-[0.5px] border-zinc-150 text-zinc-900 p-2.5 rounded-xl">
                  <Phone className="w-5 h-5" />
                </div>
                <div className="space-y-1">
                  <h4 className="font-sans font-bold text-sm text-zinc-900">
                    WhatsApp Specialist Line
                  </h4>
                  <p className="font-mono text-xs text-zinc-650 font-bold">
                    {translationKeys.phoneFormatted}
                  </p>
                  <a
                    href={`https://wa.me/62${translationKeys.whatsappNumber}`}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center gap-1.5 text-2xs text-emerald-600 hover:underline pt-1.5 font-bold"
                  >
                    <MessageSquare className="w-3 h-3" />
                    <span>{language === 'en' ? 'Chat Directly' : 'Mulai Chat Langsung'}</span>
                  </a>
                </div>
              </div>

            </div>

            {/* Elegant gray-dark custom Google Map iframe */}
            <div className="border-[0.5px] border-zinc-150 rounded-2xl overflow-hidden shadow-xl aspect-video relative group bg-zinc-50 h-64">
              <iframe
                title="Omniverse One Tamansari Bogor Map"
                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d15851.639343547204!2d106.7766!3d-6.658!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x2e69cf2fae509cf7%3A0x6338b935dfa14b5c!2sCiwaru%20Indah%20Residence!5e0!3m2!1sid!2sid!4v1700000000000!5m2!1sid!2sid"
                width="100%"
                height="100%"
                style={{ border: 0 }}
                allowFullScreen
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
                className="grayscale opacity-85 group-hover:grayscale-0 group-hover:opacity-100 transition-all duration-500 ease-in-out"
              />
            </div>

          </div>

          {/* Right panel: Active Form (span 7) */}
          <div className="lg:col-span-7 bg-white border-[0.5px] border-zinc-100 rounded-2xl p-6 sm:p-8 space-y-6 shadow-sm">
            
            <div className="space-y-1">
              <h3 className="font-sans text-xl font-bold text-zinc-900">
                {translationKeys.formTitle[language]}
              </h3>
              <p className="font-sans text-xs text-zinc-500 font-semibold">
                {translationKeys.formSubTitle[language]}
              </p>
            </div>

            <form onSubmit={handleSubmit} className="space-y-6">
              
              {/* Name Input */}
              <div className="space-y-2">
                <label htmlFor="client-name" className="text-xs font-mono font-bold uppercase tracking-wider text-zinc-500 block">
                  {translationKeys.fullName[language]} <span className="text-red-500">*</span>
                </label>
                <input
                  id="client-name"
                  type="text"
                  required
                  value={name}
                  onChange={(e) => setName(e.target.value)}
                  placeholder="e.g. Amanda Novita"
                  className="w-full bg-zinc-50 border-[0.5px] border-zinc-200 focus:border-zinc-500 text-zinc-900 placeholder-zinc-400 rounded-xl px-4 py-3 text-sm focus:outline-none transition-colors font-medium resize-none shadow-sm"
                />
              </div>

              {/* Segment Segment Choice Toggle */}
              <div className="space-y-2">
                <label className="text-xs font-mono font-bold uppercase tracking-wider text-zinc-500 block">
                  {translationKeys.clientCategory[language]}
                </label>
                <div className="grid grid-cols-2 gap-3">
                  <button
                    type="button"
                    onClick={() => setClientType('business')}
                    className={`font-sans py-3 rounded-xl text-xs font-bold border-[0.5px] transition-all duration-300 ${
                      clientType === 'business'
                        ? 'bg-zinc-900 border-zinc-900 text-white shadow-sm'
                        : 'bg-zinc-50 border-zinc-200 text-zinc-500 hover:text-zinc-900 hover:border-zinc-400'
                    }`}
                  >
                    {translationKeys.business[language]}
                  </button>
                  <button
                    type="button"
                    onClick={() => setClientType('individual')}
                    className={`font-sans py-3 rounded-xl text-xs font-bold border-[0.5px] transition-all duration-300 ${
                      clientType === 'individual'
                        ? 'bg-zinc-900 border-zinc-900 text-white shadow-sm'
                        : 'bg-zinc-50 border-zinc-200 text-zinc-500 hover:text-zinc-900 hover:border-zinc-400'
                    }`}
                  >
                    {translationKeys.individual[language]}
                  </button>
                </div>
              </div>

              {/* Selection Selection Of Service */}
              <div className="space-y-2">
                <label htmlFor="service-select" className="text-xs font-mono font-bold uppercase tracking-wider text-zinc-500 block">
                  {translationKeys.selectService[language]}
                </label>
                <div className="relative">
                  <select
                    id="service-select"
                    value={selectedService}
                    onChange={(e) => setSelectedService(e.target.value)}
                    className="w-full bg-zinc-50 border-[0.5px] border-zinc-200 focus:border-zinc-500 text-zinc-900 rounded-xl px-4 py-3 text-sm focus:outline-none transition-colors appearance-none cursor-pointer font-bold shadow-sm"
                  >
                    {servicesData.map((s) => (
                      <option key={s.id} value={s.id} className="bg-white text-zinc-900 font-bold">
                        {s.title[language]} ({s.badge[language]})
                      </option>
                    ))}
                  </select>
                </div>
              </div>

              {/* Requirements text note */}
              <div className="space-y-2">
                <label htmlFor="extra-notes" className="text-xs font-mono font-bold uppercase tracking-wider text-zinc-500 block">
                  {translationKeys.extraNotes[language]}
                </label>
                <textarea
                  id="extra-notes"
                  rows={4}
                  value={notes}
                  onChange={(e) => setNotes(e.target.value)}
                  placeholder={translationKeys.placeholderNotes[language]}
                  className="w-full bg-zinc-50 border-[0.5px] border-zinc-200 focus:border-zinc-500 text-zinc-900 placeholder-zinc-400 rounded-xl p-4 text-sm focus:outline-none resize-none transition-colors font-medium shadow-sm animate-none"
                />
              </div>

              {/* Form trigger action */}
              <div className="pt-2">
                <button
                  type="submit"
                  className="w-full bg-zinc-950 hover:bg-zinc-850 text-white font-sans font-bold py-4 px-6 rounded-full text-xs flex items-center justify-center gap-2 group transition-all duration-300 shadow-md shadow-zinc-200"
                >
                  <Send className="w-3.5 h-3.5" />
                  <span>{translationKeys.sendButton[language]}</span>
                </button>
              </div>

              {/* Submitted status indicator */}
              {submitted && (
                <div className="bg-emerald-50 border-[0.5px] border-emerald-100 p-4 rounded-xl flex items-center gap-3 animate-fade-in">
                  <CheckCircle2 className="w-5 h-5 text-emerald-600 shrink-0" />
                  <p className="font-sans text-xs text-emerald-800 font-bold">
                    {language === 'en'
                      ? 'WhatsApp message prepared and opened in your new browser tab.'
                      : 'Pesan draf WhatsApp siap dikirimkan dan dialihkan pada tab browser baru Anda.'}
                  </p>
                </div>
              )}

            </form>

          </div>

        </div>
      </div>
    </section>
  );
};

export default Contact;

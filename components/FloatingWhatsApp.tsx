
import React from 'react';
import { LINKS } from '../constants';
import { MessageCircle } from 'lucide-react';

const FloatingWhatsApp: React.FC = () => {
  return (
    <a
      href={LINKS.WHATSAPP}
      target="_blank"
      rel="noopener noreferrer"
      className="fixed bottom-6 right-6 z-[60] bg-[#25D366] text-white p-4 rounded-full shadow-2xl transition-transform hover:scale-110 active:scale-95 flex items-center justify-center animate-bounce duration-1000"
      aria-label="Fale conosco no WhatsApp"
      style={{ animationDuration: '3s' }}
    >
      <MessageCircle size={32} />
      <span className="absolute -top-1 -right-1 flex h-3 w-3">
        <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-white opacity-75"></span>
        <span className="relative inline-flex rounded-full h-3 w-3 bg-white"></span>
      </span>
    </a>
  );
};

export default FloatingWhatsApp;


import React, { useState, useEffect } from 'react';
import { ASSETS, LINKS } from '../constants';
import { Menu, X } from 'lucide-react';

const Header: React.FC = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 30);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const menuItems = [
    { label: 'Início', href: '#inicio' },
    { label: 'Sobre', href: '#sobre' },
    { label: 'Atuação', href: '#atuacao' },
    { label: 'Contato', href: '#contato' },
  ];

  const handleImageError = (e: React.SyntheticEvent<HTMLImageElement, Event>) => {
    const target = e.target as HTMLImageElement;
    if (target.src !== ASSETS.LOGO_LOCAL) {
      target.src = ASSETS.LOGO_LOCAL;
    }
  };

  return (
    <header className={`fixed top-0 left-0 w-full z-50 transition-all duration-700 ${isScrolled ? 'bg-[#0a0c10]/95 backdrop-blur-xl shadow-2xl py-4 border-b border-white/5' : 'bg-transparent py-8'}`}>
      <div className="container mx-auto px-6 flex justify-between items-center">
        {/* Logo */}
        <a href="#inicio" className="flex items-center group relative">
          <img 
            src={ASSETS.LOGO} 
            onError={handleImageError}
            alt="Logo" 
            className={`h-10 md:h-14 w-auto object-contain transition-all duration-500 ${isScrolled ? 'brightness-110' : 'brightness-125 hover:scale-105'}`} 
          />
        </a>

        {/* Desktop Menu */}
        <nav className="hidden lg:flex items-center space-x-12">
          {menuItems.map((item) => (
            <a 
              key={item.label} 
              href={item.href} 
              className="text-[10px] font-bold uppercase tracking-[0.3em] text-gray-400 hover:text-[#c5a059] transition-colors relative group"
            >
              {item.label}
              <span className="absolute -bottom-1 left-0 w-0 h-[1px] bg-[#c5a059] transition-all group-hover:w-full"></span>
            </a>
          ))}
          <a
            href={LINKS.WHATSAPP}
            target="_blank"
            rel="noopener noreferrer"
            className="bg-[#c5a059] text-[#0a0c10] px-7 py-3 rounded-sm text-[10px] font-bold uppercase tracking-widest hover:bg-white transition-all shadow-[0_5px_15px_rgba(197,160,89,0.2)]"
          >
            Falar no WhatsApp
          </a>
        </nav>

        {/* Mobile Toggle */}
        <button className="lg:hidden text-white p-2 hover:bg-white/5 rounded-full transition-colors" onClick={() => setIsMenuOpen(!isMenuOpen)} aria-label="Menu">
          {isMenuOpen ? <X size={24} /> : <Menu size={24} />}
        </button>
      </div>

      {/* Mobile Menu Overlay */}
      <div className={`lg:hidden fixed inset-0 bg-[#0a0c10] z-40 transition-all duration-500 ease-in-out ${isMenuOpen ? 'opacity-100 translate-y-0' : 'opacity-0 -translate-y-full pointer-events-none'}`}>
        <div className="flex flex-col h-full justify-center px-10 space-y-10">
          <div className="mb-8">
             <img 
               src={ASSETS.LOGO} 
               onError={handleImageError}
               alt="Logo" 
               className="h-12 w-auto brightness-125" 
             />
          </div>
          {menuItems.map((item) => (
            <a
              key={item.label}
              href={item.href}
              className="text-4xl font-serif text-white hover:text-[#c5a059] transition-colors"
              onClick={() => setIsMenuOpen(false)}
            >
              {item.label}
            </a>
          ))}
          <div className="pt-10">
            <a
              href={LINKS.WHATSAPP}
              target="_blank"
              rel="noopener noreferrer"
              className="block w-full bg-[#c5a059] text-[#0a0c10] py-6 rounded-sm text-center text-sm font-bold uppercase tracking-widest"
              onClick={() => setIsMenuOpen(false)}
            >
              Falar no WhatsApp
            </a>
          </div>
        </div>
      </div>
    </header>
  );
};

export default Header;


import React from 'react';
import { ASSETS, LINKS } from '../constants';
import { Instagram, Linkedin } from 'lucide-react';

const Footer: React.FC = () => {
  return (
    <footer className="bg-[#0a0c10] py-24 border-t border-white/5">
      <div className="container mx-auto px-6">
        <div className="flex flex-col md:flex-row justify-between items-start mb-20 gap-16">
          <div className="max-w-sm">
            <img src={ASSETS.LOGO} alt="Logo" className="h-14 w-auto mb-8 object-contain brightness-125" />
            <p className="text-gray-500 text-sm leading-relaxed mb-8">
              Compromisso com a ética e excelência jurídica. Atendimento focado em soluções estratégicas para pessoas e empresas.
            </p>
            <div className="flex gap-4">
              <a 
                href={LINKS.INSTAGRAM} 
                target="_blank" 
                rel="noopener noreferrer"
                className="w-10 h-10 rounded-full border border-white/10 flex items-center justify-center hover:border-[#c5a059] hover:text-[#c5a059] transition-all cursor-pointer group"
              >
                <Instagram size={18} className="text-gray-500 group-hover:text-[#c5a059]" />
              </a>
              <div className="w-10 h-10 rounded-full border border-white/10 flex items-center justify-center hover:border-[#c5a059] hover:text-[#c5a059] transition-all cursor-pointer group">
                <Linkedin size={18} className="text-gray-500 group-hover:text-[#c5a059]" />
              </div>
            </div>
          </div>

          <div className="grid grid-cols-2 gap-12 md:gap-24">
            <div className="flex flex-col space-y-4">
              <span className="text-[10px] text-[#c5a059] font-bold uppercase tracking-[0.3em] mb-4">Navegação</span>
              <a href="#inicio" className="text-gray-400 hover:text-white transition-colors text-xs uppercase tracking-widest">Início</a>
              <a href="#sobre" className="text-gray-400 hover:text-white transition-colors text-xs uppercase tracking-widest">Sobre</a>
              <a href="#atuacao" className="text-gray-400 hover:text-white transition-colors text-xs uppercase tracking-widest">Atuação</a>
            </div>
            <div className="flex flex-col space-y-4">
              <span className="text-[10px] text-[#c5a059] font-bold uppercase tracking-[0.3em] mb-4">Suporte</span>
              <a href="#contato" className="text-gray-400 hover:text-white transition-colors text-xs uppercase tracking-widest">Contato</a>
              <a href={LINKS.WHATSAPP} target="_blank" rel="noopener noreferrer" className="text-gray-400 hover:text-white transition-colors text-xs uppercase tracking-widest">Agendar</a>
              <a href="#" className="text-gray-400 hover:text-white transition-colors text-xs uppercase tracking-widest">Privacidade</a>
            </div>
          </div>
        </div>

        <div className="pt-12 border-t border-white/5 flex flex-col md:flex-row justify-between items-center gap-8">
          <p className="text-gray-600 text-[10px] font-bold uppercase tracking-[0.2em]">
            © {new Date().getFullYear()} — Dra. Julia Lavigne | Todos os direitos reservados.
          </p>
          <div className="flex items-center gap-6">
             <div className="h-1 w-1 bg-[#c5a059] rounded-full"></div>
             <p className="text-gray-600 text-[10px] font-bold uppercase tracking-[0.2em]">Desenvolvido com Excelência</p>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;

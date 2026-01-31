
import React from 'react';
import { LINKS } from '../constants';
import { Mail, Instagram, MapPin, MessageSquare, ArrowRight } from 'lucide-react';

const Contact: React.FC = () => {
  return (
    <section id="contato" className="py-24 bg-[#14171c]">
      <div className="container mx-auto px-6">
        <div className="max-w-6xl mx-auto bg-[#0f1115] border border-white/5 p-8 md:p-20 rounded-sm shadow-2xl relative overflow-hidden">
          {/* Decorative element */}
          <div className="absolute -top-24 -left-24 w-64 h-64 bg-[#c5a059]/5 rounded-full blur-3xl"></div>
          
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center relative z-10">
            <div className="reveal">
              <span className="text-[#c5a059] text-xs font-bold uppercase tracking-[0.4em] mb-4 block">Contato</span>
              <h2 className="text-4xl md:text-6xl font-serif font-bold mb-8 text-white">Pronto para dar o <span className="text-[#c5a059] italic">primeiro passo</span>?</h2>
              
              <div className="space-y-8 mt-12">
                <div className="flex items-start group">
                  <div className="w-12 h-12 border border-white/10 flex items-center justify-center mr-6 group-hover:border-[#c5a059] transition-colors bg-[#1a1d23]">
                    <Mail size={20} className="text-[#c5a059]" />
                  </div>
                  <div>
                    <span className="block text-[10px] text-gray-500 uppercase tracking-widest mb-1">E-mail Corporativo</span>
                    <a href={LINKS.EMAIL} className="text-white hover:text-[#c5a059] transition-colors text-lg">contato@draexemplo.adv.br</a>
                  </div>
                </div>

                <div className="flex items-start group">
                  <div className="w-12 h-12 border border-white/10 flex items-center justify-center mr-6 group-hover:border-[#c5a059] transition-colors bg-[#1a1d23]">
                    <MapPin size={20} className="text-[#c5a059]" />
                  </div>
                  <div>
                    <span className="block text-[10px] text-gray-500 uppercase tracking-widest mb-1">Localização</span>
                    <span className="text-white text-lg leading-snug">São Paulo - SP | Atendimento Presencial & Consultoria Digital</span>
                  </div>
                </div>
              </div>
            </div>

            <div className="flex flex-col space-y-6 reveal">
              <div className="bg-[#1a1d23] p-8 border border-white/5 rounded-sm">
                <h3 className="text-white font-serif text-xl mb-6">Inicie seu atendimento agora</h3>
                <a
                  href={LINKS.WHATSAPP}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center justify-between bg-[#25D366] text-white py-6 px-8 rounded-sm text-lg font-bold hover:brightness-110 transition-all shadow-xl group"
                >
                  <div className="flex items-center">
                    <MessageSquare className="mr-3" />
                    Via WhatsApp
                  </div>
                  <ArrowRight className="opacity-0 group-hover:opacity-100 group-hover:translate-x-2 transition-all" />
                </a>
                
                <div className="flex items-center justify-center my-6">
                  <div className="h-[1px] flex-grow bg-white/5"></div>
                  <span className="px-4 text-[10px] text-gray-600 font-bold uppercase tracking-widest">Ou</span>
                  <div className="h-[1px] flex-grow bg-white/5"></div>
                </div>

                <a
                  href={LINKS.INSTAGRAM}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center justify-center border border-white/10 text-white py-5 rounded-sm text-sm font-bold uppercase tracking-widest hover:bg-white/5 transition-all"
                >
                  <Instagram className="mr-3" size={18} />
                  Siga no Instagram
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;

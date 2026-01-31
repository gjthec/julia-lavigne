
import React from 'react';
import { LINKS } from '../constants';
import { Instagram } from 'lucide-react';

const InstagramSection: React.FC = () => {
  return (
    <section className="py-24 bg-[#0f1115]">
      <div className="container mx-auto px-6 text-center">
        <div className="max-w-4xl mx-auto reveal">
          <div className="flex justify-center mb-8">
            <div className="p-4 rounded-full bg-[#c5a059]/10 border border-[#c5a059]/30">
              <Instagram size={40} className="text-[#c5a059]" />
            </div>
          </div>
          <h2 className="text-3xl md:text-5xl font-serif font-bold mb-6 text-white">Direito Sem Complicação</h2>
          <p className="text-lg text-gray-400 mb-12 leading-relaxed max-w-2xl mx-auto">
            Acompanhe atualizações diárias e orientações jurídicas importantes para o seu dia a dia.
          </p>

          <div className="grid grid-cols-2 md:grid-cols-4 gap-2 mb-12">
            {[1, 2, 3, 4].map((i) => (
              <div key={i} className="aspect-square bg-[#1a1d23] overflow-hidden relative group rounded-sm border border-white/5">
                <img 
                  src={`https://picsum.photos/400/400?random=${i + 10}&grayscale`} 
                  alt="Insta Post" 
                  className="w-full h-full object-cover opacity-50 group-hover:opacity-80 transition-all duration-700 group-hover:scale-110" 
                />
                <div className="absolute inset-0 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity bg-black/40">
                  <Instagram size={24} className="text-white" />
                </div>
              </div>
            ))}
          </div>

          <a
            href={LINKS.INSTAGRAM}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center bg-white text-[#0f1115] px-10 py-5 rounded-sm font-bold uppercase tracking-widest text-xs hover:bg-[#c5a059] transition-all shadow-2xl"
          >
            Acessar Perfil
          </a>
        </div>
      </div>
    </section>
  );
};

export default InstagramSection;

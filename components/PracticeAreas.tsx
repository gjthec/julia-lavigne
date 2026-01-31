
import React from 'react';
import { PRACTICE_AREAS, LINKS } from '../constants';
import { Briefcase, Heart, Scale, Users } from 'lucide-react';

const icons = [Heart, Briefcase, Scale, Users];

const PracticeAreas: React.FC = () => {
  return (
    <section id="atuacao" className="py-24 bg-[#0f1115]">
      <div className="container mx-auto px-6">
        <div className="text-center max-w-2xl mx-auto mb-20 reveal">
          <h2 className="text-3xl md:text-5xl font-serif font-bold mb-6 text-white text-center">Especialidades</h2>
          <div className="w-20 h-1 bg-[#c5a059] mx-auto mb-8"></div>
          <p className="text-gray-400">Atuação pautada na excelência técnica e na resolução estratégica de conflitos.</p>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 mb-20">
          {PRACTICE_AREAS.map((area, index) => {
            const IconComponent = icons[index % icons.length];
            return (
              <div key={area.title} className="bg-[#1a1d23] p-10 border border-white/5 hover:border-[#c5a059]/40 transition-all duration-500 reveal group">
                <div className="w-14 h-14 bg-[#0f1115] border border-white/5 text-[#c5a059] flex items-center justify-center mb-8 group-hover:bg-[#c5a059] group-hover:text-[#0f1115] transition-all duration-500">
                  <IconComponent size={24} />
                </div>
                <h3 className="text-xl font-serif font-bold mb-4 text-white">{area.title}</h3>
                <p className="text-gray-500 text-sm leading-relaxed mb-4">
                  {area.description}
                </p>
                <div className="h-[2px] w-0 bg-[#c5a059] group-hover:w-full transition-all duration-500"></div>
              </div>
            );
          })}
        </div>

        <div className="text-center reveal">
          <a
            href={LINKS.WHATSAPP}
            target="_blank"
            rel="noopener noreferrer"
            className="group inline-flex flex-col items-center"
          >
            <span className="text-xs font-bold uppercase tracking-[0.3em] text-[#c5a059] mb-4">Conte seu caso</span>
            <div className="bg-white/5 border border-white/10 px-8 py-4 rounded-sm group-hover:bg-[#c5a059] group-hover:text-[#0f1115] transition-all text-white font-bold">
              Falar no WhatsApp
            </div>
          </a>
        </div>
      </div>
    </section>
  );
};

export default PracticeAreas;

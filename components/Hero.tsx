
import React from 'react';
import { ASSETS, LINKS } from '../constants';
import { Instagram, CheckCircle2, ArrowRight } from 'lucide-react';

const Hero: React.FC = () => {
  return (
    <section id="inicio" className="relative min-h-screen flex items-center pt-32 pb-16 lg:pt-40 overflow-hidden bg-[#0a0c10]">
      {/* Luz ambiente de fundo para profundidade */}
      <div className="absolute top-0 right-0 w-full h-full bg-[radial-gradient(circle_at_70%_30%,#c5a05910,transparent_50%)] pointer-events-none"></div>
      
      <div className="container mx-auto px-6 grid grid-cols-1 lg:grid-cols-2 gap-16 items-center relative z-10">
        
        {/* Lado do Conteúdo (Texto) - Agora é o PRIMEIRO no mobile (order-1) */}
        <div className="order-1 flex flex-col items-start reveal">
          <div className="inline-flex items-center py-2 px-4 mb-8 bg-[#c5a059]/10 border border-[#c5a059]/20 text-[#c5a059] text-[10px] font-bold uppercase tracking-[0.3em] rounded-sm">
            <span className="relative flex h-2 w-2 mr-3">
              <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-[#c5a059] opacity-75"></span>
              <span className="relative inline-flex rounded-full h-2 w-2 bg-[#c5a059]"></span>
            </span>
            Advocacia de Alta Performance
          </div>
          
          <h1 className="text-4xl md:text-6xl lg:text-7xl font-serif font-bold text-white leading-[1.1] mb-8">
            Defesa <span className="text-[#c5a059] italic">estratégica</span> <br className="hidden md:block" /> 
            e resultados reais.
          </h1>
          
          <p className="text-lg md:text-xl text-gray-400 mb-10 max-w-xl leading-relaxed">
            Unimos o rigor técnico da lei com um atendimento personalizado. Soluções jurídicas modernas para quem não abre mão da excelência.
          </p>

          <div className="flex flex-col sm:flex-row gap-5 w-full sm:w-auto">
            <a
              href={LINKS.WHATSAPP}
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center justify-center bg-[#c5a059] text-[#0a0c10] px-10 py-5 rounded-sm font-bold uppercase tracking-widest text-xs hover:bg-white transition-all shadow-[0_15px_30px_rgba(197,160,89,0.15)] group"
            >
              Agendar Consultoria
              <ArrowRight size={16} className="ml-2 group-hover:translate-x-1 transition-transform" />
            </a>
            <a
              href={LINKS.INSTAGRAM}
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center justify-center border border-white/10 text-white px-10 py-5 rounded-sm font-bold uppercase tracking-widest text-xs hover:bg-white/5 transition-all"
            >
              <Instagram size={16} className="mr-2" />
              Instagram
            </a>
          </div>

          <div className="mt-16 grid grid-cols-2 md:grid-cols-3 gap-6 pt-10 border-t border-white/5 w-full">
            <div className="flex flex-col gap-2">
              <span className="text-[#c5a059] font-bold text-xl font-serif">100%</span>
              <span className="text-[10px] font-bold uppercase tracking-widest text-gray-500">Comprometimento</span>
            </div>
            <div className="flex flex-col gap-2">
              <span className="text-[#c5a059] font-bold text-xl font-serif">Agilidade</span>
              <span className="text-[10px] font-bold uppercase tracking-widest text-gray-500">Nos Processos</span>
            </div>
            <div className="flex flex-col gap-2 hidden md:flex">
              <span className="text-[#c5a059] font-bold text-xl font-serif">Transparência</span>
              <span className="text-[10px] font-bold uppercase tracking-widest text-gray-500">Com o Cliente</span>
            </div>
          </div>
        </div>

        {/* Lado da Imagem - Agora é o SEGUNDO no mobile (order-2) */}
        <div className="order-2 flex justify-center lg:justify-end relative reveal">
          <div className="relative z-10 w-full max-w-[320px] md:max-w-md">
             {/* Moldura elegante */}
             <div className="absolute inset-0 border border-[#c5a059]/30 translate-x-6 translate-y-6 -z-10 rounded-sm"></div>
             <div className="overflow-hidden rounded-sm shadow-[0_30px_60px_rgba(0,0,0,0.5)]">
               <img
                src={ASSETS.PERSON}
                alt="Dra. Julia Lavigne"
                className="w-full h-auto grayscale transition-all duration-1000 hover:grayscale-0 scale-100 hover:scale-105"
              />
             </div>
             {/* Selo de Confiança flutuante */}
             <div className="absolute -bottom-10 -left-10 bg-[#14171c] border border-white/5 p-6 rounded-sm shadow-2xl hidden md:block">
               <div className="flex items-center gap-4">
                 <div className="w-10 h-10 bg-[#c5a059]/20 flex items-center justify-center rounded-full">
                   <CheckCircle2 className="text-[#c5a059]" size={20} />
                 </div>
                 <div>
                   <p className="text-white text-xs font-bold uppercase tracking-widest">Atendimento Premium</p>
                   <p className="text-gray-500 text-[10px]">On-line em todo Brasil</p>
                 </div>
               </div>
             </div>
          </div>
        </div>

      </div>
    </section>
  );
};

export default Hero;

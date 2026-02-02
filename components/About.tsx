
import React from 'react';
import { ASSETS, LINKS } from '../constants';

const About: React.FC = () => {
  const handleImageError = (e: React.SyntheticEvent<HTMLImageElement, Event>) => {
    const target = e.target as HTMLImageElement;
    if (target.src !== ASSETS.WALLET_LOCAL) {
      target.src = ASSETS.WALLET_LOCAL;
    }
  };

  return (
    <section id="sobre" className="py-24 bg-[#14171c]">
      <div className="container mx-auto px-6">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
          <div className="reveal order-2 lg:order-1">
            <div className="relative inline-block w-full">
              <div className="overflow-hidden rounded-sm shadow-2xl relative z-10">
                <img
                  src={ASSETS.WALLET}
                  onError={handleImageError}
                  alt="Excelência Jurídica"
                  className="w-full h-auto object-cover grayscale brightness-75 hover:grayscale-0 hover:brightness-100 transition-all duration-1000"
                />
              </div>
              <div className="absolute -bottom-6 -right-6 w-full h-full border-2 border-[#c5a059]/10 rounded-sm -z-0"></div>
            </div>
          </div>
          <div className="reveal order-1 lg:order-2">
            <div className="inline-block py-1 px-3 mb-4 border-l-2 border-[#c5a059] text-[#c5a059] text-[10px] font-bold uppercase tracking-[0.2em]">
              Compromisso e Ética
            </div>
            <h2 className="text-3xl md:text-5xl font-serif font-bold mb-8 text-white">
              Justiça com <span className="text-[#c5a059] italic">Propósito</span>
            </h2>
            <div className="space-y-6 text-gray-400 leading-relaxed mb-10">
              <p>
                Acredito que a advocacia é um instrumento de paz social. Cada cliente traz uma história única que merece ser ouvida com empatia e defendida com o máximo rigor técnico e profissionalismo.
              </p>
              <p>
                Meu diferencial reside na união entre a solidez jurídica e um atendimento verdadeiramente próximo. Aqui, você não é apenas um número de processo; você é o centro da nossa estratégia jurídica.
              </p>
              <div className="bg-[#0f1115] p-6 border-l-2 border-[#c5a059] italic">
                <p className="text-white font-medium text-sm">
                  "Transparência é a base de toda relação de confiança. Minha missão é traduzir o complexo em soluções simples e seguras para você."
                </p>
              </div>
            </div>
            <a
              href={LINKS.WHATSAPP}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-block bg-[#c5a059] text-[#0f1115] px-8 py-4 rounded-sm font-bold uppercase tracking-widest text-xs hover:bg-white transition-all shadow-lg"
            >
              Agendar Consultoria
            </a>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;

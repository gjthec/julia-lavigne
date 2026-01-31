
import React from 'react';

const steps = [
  {
    number: '01',
    title: 'Contato Inicial',
    description: 'Tudo começa com uma conversa rápida pelo WhatsApp para entendermos o básico do seu caso.',
  },
  {
    number: '02',
    title: 'Análise Detalhada',
    description: 'Realizamos uma análise profunda da sua situação e dos documentos necessários.',
  },
  {
    number: '03',
    title: 'Estratégia Jurídica',
    description: 'Apresentamos um plano de ação claro, com todas as orientações e riscos explicados.',
  },
  {
    number: '04',
    title: 'Acompanhamento',
    description: 'Seguimos com o processo ou consultoria, mantendo você sempre informado sobre cada progresso.',
  },
];

const HowItWorks: React.FC = () => {
  return (
    <section className="py-24 bg-[#1a1a1a] text-white">
      <div className="container mx-auto px-6">
        <div className="mb-16 reveal">
          <h2 className="text-3xl md:text-4xl font-serif font-bold mb-4">Como Funciona o Atendimento</h2>
          <p className="text-gray-400 max-w-lg">Processo simplificado e transparente para que você se sinta seguro do início ao fim.</p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12">
          {steps.map((step) => (
            <div key={step.number} className="relative reveal">
              <span className="text-5xl font-bold text-white/10 absolute -top-4 -left-2">{step.number}</span>
              <h3 className="text-xl font-serif font-bold mb-4 relative z-10">{step.title}</h3>
              <p className="text-gray-400 text-sm leading-relaxed relative z-10">
                {step.description}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default HowItWorks;

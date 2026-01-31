
import React from 'react';
import { Quote, Star } from 'lucide-react';

const testimonialsData = [
  {
    initials: 'AC',
    name: 'Ana Carolina',
    specialty: 'Direito Civil',
    text: '"O diferencial da Dra. Julia é a clareza. Pela primeira vez entendi exatamente o que estava acontecendo no meu processo. Segurança total e atendimento impecável."',
  },
  {
    initials: 'JM',
    name: 'João Maurício',
    specialty: 'Direito do Trabalho',
    text: '"Extremamente estratégica e atenciosa. Resolveu meu caso com uma agilidade que eu não esperava. Recomendo fortemente para quem busca resultados reais."',
  },
];

const Testimonials: React.FC = () => {
  return (
    <section id="depoimentos" className="py-24 bg-[#14171c]">
      <div className="container mx-auto px-6">
        <div className="text-center mb-16 reveal">
          <h2 className="text-3xl md:text-5xl font-serif font-bold mb-4 text-white">Reconhecimento</h2>
          <p className="text-gray-500 italic text-sm">Depoimentos reais de quem confiou em nosso trabalho</p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-4xl mx-auto">
          {testimonialsData.map((item, i) => (
            <div key={i} className="p-10 bg-[#0f1115] border border-white/5 rounded-sm reveal relative group">
              <Quote size={40} className="text-[#c5a059] mb-6 opacity-20 absolute top-8 right-8 group-hover:opacity-40 transition-opacity" />
              <div className="flex mb-4">
                {[...Array(5)].map((_, idx) => (
                  <Star key={idx} size={14} className="text-[#c5a059] fill-[#c5a059] mr-1" />
                ))}
              </div>
              <p className="text-gray-400 mb-8 italic leading-relaxed text-base relative z-10">
                {item.text}
              </p>
              <div className="flex items-center">
                <div className="w-12 h-12 bg-white/5 flex items-center justify-center rounded-sm mr-4 border border-white/10 text-[#c5a059] font-bold">
                  {item.initials}
                </div>
                <div>
                  <h4 className="font-bold text-sm text-white">{item.name}</h4>
                  <span className="text-xs text-gray-500 uppercase tracking-widest">{item.specialty}</span>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Testimonials;

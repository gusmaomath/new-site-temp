'use client'

import Image from 'next/image'
import Link from 'next/link'
import { motion } from 'framer-motion'
import PageHero from '@/components/ui/PageHero'
import { timeline } from '@/lib/data/timeline'

const values = [
  {
    title: 'Excelência Técnica',
    description:
      'Comprometidos com a mais alta qualidade técnica em cada projeto, utilizando as melhores práticas e metodologias da engenharia moderna.',
    icon: '⚙️',
  },
  {
    title: 'Inovação',
    description:
      'Pioneiros na adoção de tecnologia BIM no Brasil, constantemente buscamos novas soluções para desafios complexos de engenharia.',
    icon: '💡',
  },
  {
    title: 'Confiança',
    description:
      'Construída ao longo de 35 anos de relacionamentos duradouros com clientes que retornam projeto após projeto.',
    icon: '🤝',
  },
  {
    title: 'Responsabilidade',
    description:
      'Compromisso com prazos, orçamentos e a segurança de todas as estruturas que projetamos e avaliamos.',
    icon: '🎯',
  },
]

export default function QuemSomosPage() {
  return (
    <>
      <PageHero
        title="Quem Somos"
        subtitle="Mais de 35 anos construindo a engenharia do futuro com raízes sólidas no passado."
        image="/assets/hero/hero-alternativo.svg"
        breadcrumb="Sobre a NT"
      />

      {/* Mission + CEO */}
      <section className="py-20 lg:py-28 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-20 items-start">
            <div>
              <p className="text-nt-teal text-sm font-semibold tracking-widest uppercase mb-3">
                Nossa Missão
              </p>
              <h2 className="font-display text-3xl sm:text-4xl font-bold text-gray-900 mb-6">
                Engenharia que Transforma
              </h2>
              <p className="text-gray-600 leading-relaxed mb-4">
                A Novo Tempo Soluções em Engenharia foi fundada com a missão de
                oferecer soluções de engenharia estrutural de excelência, combinando
                rigor técnico com criatividade e inovação.
              </p>
              <p className="text-gray-600 leading-relaxed mb-4">
                Ao longo de mais de três décadas, construímos um portfólio diversificado
                que inclui desde complexos industriais e plantas petroquímicas até arenas
                de eventos e obras de patrimônio histórico.
              </p>
              <p className="text-gray-600 leading-relaxed mb-8">
                Nossa abordagem integrada — unindo consultoria, projeto e cálculo
                estrutural — nos posiciona como parceiros estratégicos dos nossos
                clientes, não apenas fornecedores de serviço.
              </p>

              {/* CEO Quote */}
              <div className="bg-gray-50 rounded-2xl p-6 border-l-4 border-nt-teal">
                <p className="text-gray-700 italic leading-relaxed mb-4">
                  &quot;Engenharia não é apenas cálculo. É a arte de transformar ideias em estruturas
                  que resistem ao tempo, servem às pessoas e honram a profissão.&quot;
                </p>
                <div className="flex items-center gap-3">
                  <div className="relative w-12 h-12 rounded-full overflow-hidden bg-nt-teal/20">
                    <Image
                      src="/assets/institucional/ceo-carlos-henrique.svg"
                      alt="Carlos Henrique — CEO"
                      fill
                      className="object-cover"
                    />
                  </div>
                  <div>
                    <p className="font-semibold text-gray-900 text-sm">Carlos Henrique</p>
                    <p className="text-nt-gray-mid text-xs">Fundador e CEO · Eng.º Civil CREA-SP</p>
                  </div>
                </div>
              </div>
            </div>

            <div className="space-y-6">
              <div className="relative h-72 rounded-2xl overflow-hidden shadow-xl">
                <Image
                  src="/assets/historia/wtc-sp-anos90-1.svg"
                  alt="WTC São Paulo — projeto histórico NT"
                  fill
                  className="object-cover"
                />
              </div>
              <div className="grid grid-cols-2 gap-4">
                <div className="bg-nt-teal rounded-xl p-5 text-white text-center">
                  <p className="font-display text-3xl font-bold">35+</p>
                  <p className="text-white/80 text-xs mt-1">Anos de Experiência</p>
                </div>
                <div className="bg-nt-teal-dark rounded-xl p-5 text-white text-center">
                  <p className="font-display text-3xl font-bold">500+</p>
                  <p className="text-white/80 text-xs mt-1">Projetos Entregues</p>
                </div>
                <div className="bg-gray-50 rounded-xl p-5 text-center border border-nt-gray-light">
                  <p className="font-display text-3xl font-bold text-nt-teal">7</p>
                  <p className="text-gray-500 text-xs mt-1">Setores Atendidos</p>
                </div>
                <div className="bg-gray-50 rounded-xl p-5 text-center border border-nt-gray-light">
                  <p className="font-display text-3xl font-bold text-nt-teal">19+</p>
                  <p className="text-gray-500 text-xs mt-1">Clientes de Referência</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Values */}
      <section className="py-20 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <p className="text-nt-teal text-sm font-semibold tracking-widest uppercase mb-3">
              Cultura
            </p>
            <h2 className="font-display text-3xl sm:text-4xl font-bold text-gray-900">
              Nossos Valores
            </h2>
          </div>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {values.map((value) => (
              <div
                key={value.title}
                className="bg-white rounded-xl p-6 border border-nt-gray-light hover:border-nt-teal hover:shadow-md transition-all duration-300"
              >
                <span className="text-3xl mb-4 block">{value.icon}</span>
                <h3 className="font-display font-bold text-gray-900 text-lg mb-2">
                  {value.title}
                </h3>
                <p className="text-gray-600 text-sm leading-relaxed">{value.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Timeline */}
      <section className="py-20 lg:py-28 bg-white">
        <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <p className="text-nt-teal text-sm font-semibold tracking-widest uppercase mb-3">
              Nossa Trajetória
            </p>
            <h2 className="font-display text-3xl sm:text-4xl font-bold text-gray-900">
              Uma História de Excelência
            </h2>
          </div>

          <div className="relative">
            {/* Vertical line */}
            <div className="absolute left-1/2 -translate-x-0.5 top-0 bottom-0 w-0.5 bg-nt-gray-light hidden lg:block" />

            <div className="flex flex-col gap-12 lg:gap-0">
              {timeline.map((event, i) => {
                const isLeft = i % 2 === 0
                return (
                  <motion.div
                    key={event.id}
                    initial={{ opacity: 0, x: isLeft ? -30 : 30 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    viewport={{ once: true, margin: '-80px' }}
                    transition={{ duration: 0.5, delay: 0.1 }}
                    className={`lg:flex lg:items-center lg:gap-8 ${
                      isLeft ? 'lg:flex-row' : 'lg:flex-row-reverse'
                    }`}
                  >
                    {/* Content */}
                    <div className={`lg:w-1/2 ${isLeft ? 'lg:text-right lg:pr-8' : 'lg:pl-8'}`}>
                      <div
                        className={`bg-white border rounded-xl p-6 shadow-sm hover:shadow-md transition-shadow duration-300 ${
                          event.highlight ? 'border-nt-teal' : 'border-nt-gray-light'
                        }`}
                      >
                        <span
                          className={`inline-block text-xs font-bold px-3 py-1 rounded-full mb-3 ${
                            event.highlight
                              ? 'bg-nt-teal text-white'
                              : 'bg-nt-gray-light text-gray-600'
                          }`}
                        >
                          {event.year}
                        </span>
                        <h3 className="font-display font-bold text-gray-900 text-lg mb-2">
                          {event.title}
                        </h3>
                        <p className="text-gray-600 text-sm leading-relaxed">
                          {event.description}
                        </p>
                      </div>
                    </div>

                    {/* Center dot (desktop) */}
                    <div className="hidden lg:flex w-4 h-4 rounded-full bg-nt-teal border-2 border-white shadow-md flex-shrink-0 relative z-10" />

                    {/* Empty half */}
                    <div className="lg:w-1/2" />
                  </motion.div>
                )
              })}
            </div>
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-16 bg-nt-teal">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="font-display text-3xl sm:text-4xl font-bold text-white mb-4">
            Vamos trabalhar juntos?
          </h2>
          <p className="text-white/80 text-lg mb-8">
            Entre em contato e descubra como a NT pode ser parceira do seu próximo projeto.
          </p>
          <Link
            href="/contato"
            className="inline-block px-8 py-4 bg-white text-nt-teal font-semibold rounded-xl hover:bg-nt-gray-light transition-colors duration-200"
          >
            Entrar em Contato
          </Link>
        </div>
      </section>
    </>
  )
}

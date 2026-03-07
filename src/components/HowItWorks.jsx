import React from 'react';
import './HowItWorks.css';
import { FiMessageSquare, FiCrosshair, FiFileText, FiMap, FiLayout, FiCode, FiCheckCircle } from 'react-icons/fi';

const HowItWorks = () => {
  const steps = [
    {
      title: 'Solicitação e Descoberta',
      description: 'Nesta etapa, avaliamos seu pedido inicial e agendamos uma reunião estratégica para entender a fundo o seu modelo de negócio e necessidades.',
      icon: <FiMessageSquare />
    },
    {
      title: 'Definição do Escopo',
      description: 'Após a análise, estruturamos uma proposta técnica e comercial clara. Você pode aprovar ou ajustar o escopo até que esteja perfeitamente alinhado.',
      icon: <FiCrosshair />
    },
    {
      title: 'Briefing Direcionado',
      description: 'Você preenche nosso questionário focado em inteligência de mercado, detalhando personas, valores e o principal objetivo de conversão do projeto.',
      icon: <FiFileText />
    },
    {
      title: 'Planejamento Estratégico',
      description: 'Nosso time realiza uma pesquisa profunda e cria o mapa do projeto: desde a arquitetura de informação até as chamadas para ação (CTAs).',
      icon: <FiMap />
    },
    {
      title: 'UI/UX e Protótipo',
      description: 'Avançamos para o design visual, criando um protótipo de alta fidelidade focado em experiência do usuário e conversão. Tudo é validado com você.',
      icon: <FiLayout />
    },
    {
      title: 'Engenharia e Desenvolvimento',
      description: 'Com o visual aprovado, inicia-se a codificação limpa e otimizada. Implementamos responsividade, SEO on-page e sistemas de performance.',
      icon: <FiCode />
    },
    {
      title: 'Testes e Lançamento',
      description: 'Realizamos rodadas de testes rigorosos. Com a validação final, publicamos a solução e entregamos a chave automatizada do seu crescimento.',
      icon: <FiCheckCircle />
    },
  ];

  return (
    <section className="how-it-works-section" id="HowItWorks">
      <div className="how-it-works-container">
        <div className="how-it-works-header">
          <h2 className="section-title">Nossa Metodologia</h2>
          <p className="subtitle">
            Um processo previsível e transparente, desenhado para transformar sua visão em um ativo digital de alta performance no menor tempo viável.
          </p>
        </div>

        <div className="timeline-wrapper">
          <div className="timeline">
            {steps.map((step, index) => (
              <div key={index} className="timeline-item">
                <div className="timeline-content">
                  <div className="step-number">{index + 1}</div>
                  <div className="content-icon">{step.icon}</div>
                  <h3>{step.title}</h3>
                  <p>{step.description}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default HowItWorks;

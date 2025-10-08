import React from 'react';

const HowItWorks = () => {
  const steps = [
    // Seus 'steps' continuam aqui, sem alterações...
    {
      title: 'Solicitação de Orçamento',
      description: 'Nesta etapa, nosso time vai avaliar seu pedido inicial e, logo em seguida, marcar uma reunião para esclarecer melhor tudo que você precisa.',
    },
    {
      title: 'Definição do Escopo',
      description: 'Após a definição do orçamento, você tem a opção de aprovar, fazer uma contraproposta ou modificar o escopo, até que o projeto esteja ajustado.',
    },
    {
      title: 'Envio do Briefing',
      description: 'Precisaremos que você preencha um briefing com informações relevantes sobre o negócio, valores, persona e necessidades, que são essenciais para o desenvolvimento.',
    },
    {
      title: 'Planejamento e Conteúdo',
      description: 'Com o briefing, nosso time faz uma pesquisa e análise para preparar um planejamento completo e estruturado do mapa de conteúdo do site.',
    },
    {
      title: 'Protótipo e Layout',
      description: 'O projeto avança para a etapa de criação, onde os designers irão propor e elaborar o layout completo do site na forma de um protótipo.',
    },
    {
      title: 'Programação e Montagem',
      description: 'Com o protótipo aprovado, o site entra na fase de programação, onde todos os textos, imagens, páginas e recursos são implementados e testados.',
    },
    {
      title: 'Publicação e Conclusão',
      description: 'Após a aprovação final, a equipe de desenvolvimento procederá com a publicação do site, que será submetido a uma série de testes e integrações.',
    },
  ];

  // Estilo de teste para o efeito de vidro
  const glassEffectStyle = {
    backgroundColor: 'rgba(255, 255, 255, 0.05)',
    backdropFilter: 'blur(5px)',
    WebkitBackdropFilter: 'blur(5px)', // Para compatibilidade com Safari
    border: '1px solid rgba(255, 255, 255, 0.1)',
  };

  return (
    <section className="how-it-works">
      <div className="how-it-works-container" id="HowItWorks">
        <h2 className="section-title">Inicie seu projeto agora!</h2>
        <p className="subtitle">
          Se tem dúvidas sobre como funciona um projeto de criação de site, fale conosco. Não deixe para depois, use o formulário abaixo para fazer sua solicitação de orçamento!
        </p>

        <div className="timeline-wrapper">
          <div className="timeline">
            {steps.map((step, index) => (
              <div key={index} className="timeline-item">
                {/* O ESTILO DE TESTE FOI APLICADO AQUI */}
                <div
                  className="timeline-content"
                  style={glassEffectStyle}
                >
                  <div className="step-number">{index + 1}</div>
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

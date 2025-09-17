import React from 'react';

const Services = () => {
  return (
    <section className="services">
      <div className="services-container">
        <h2 className="section-title">O que eu faço</h2>
        <div className="services-grid">
          {/* Card de Serviço 1: Sites Profissionais */}
          <div className="service-card">
            <div className="service-icon">🌐</div>
            <h3>Criação de Sites Profissionais</h3>
            <p>Sites institucionais, blogs e páginas de apresentação que destacam sua marca e criam uma presença digital sólida.</p>
          </div>

          {/* Card de Serviço 2: E-commerce */}
          <div className="service-card">
            <div className="service-icon">🛒</div>
            <h3>E-commerce sob medida</h3>
            <p>Lojas virtuais modernas, seguras e fáceis de gerenciar, feitas para impulsionar suas vendas online.</p>
          </div>

          {/* Card de Serviço 3: Aplicações Web */}
          <div className="service-card">
            <div className="service-icon">⚙️</div>
            <h3>Aplicações Web</h3>
            <p>Desenvolvimento de sistemas personalizados para otimizar processos internos do seu negócio e melhorar a eficiência.</p>
          </div>

          {/* Card de Serviço 4: SEO & Performance */}
          <div className="service-card">
            <div className="service-icon">🚀</div>
            <h3>SEO & Performance</h3>
            <p>Otimização de sites para ranquear melhor nos mecanismos de busca, garantindo carregamento rápido e uma ótima experiência para o usuário.</p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Services;
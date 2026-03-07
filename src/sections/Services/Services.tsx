import React from 'react';
import "./Services.css";
import { FiMonitor, FiTrendingUp, FiSettings, FiShoppingCart } from 'react-icons/fi';

const Services = () => {
  return (
    <section id="services" className="services-section">
      <div className="services-container">
        <div className="services-header">
          <h2 className="section-title">Nossas Soluções</h2>
          <p className="section-subtitle">Oferecemos tudo o que você precisa para crescer de ponta a ponta: do clique do cliente à gestão do seu caixa.</p>
        </div>

        <div className="services-grid">
          {/* Card 1: Tráfego */}
          <div className="service-card">
            <div className="service-icon"><FiTrendingUp /></div>
            <h3 className="service-title">Tráfego Pago & SEO Avançado</h3>
            <p className="service-desc">Colocamos sua marca no topo do Google. Criamos campanhas estratégicas de anúncios e otimização orgânica fina para fazer o seu telefone tocar todos os dias com clientes altamente qualificados.</p>
          </div>

          {/* Card 2: Consultoria */}
          <div className="service-card">
            <div className="service-icon"><FiSettings /></div>
            <h3 className="service-title">Consultoria e Inteligência de Gestão</h3>
            <p className="service-desc">Alinhamos sua operação com resultados. Aplicamos a agilidade da metodologia PDCA e o rigor da precisão contábil para garantir crescimento seguro, previsível e orientado por dados executivos.</p>
          </div>

          {/* Card 3: Sites e Landing Pages */}
          <div className="service-card">
            <div className="service-icon"><FiMonitor /></div>
            <h3 className="service-title">Ecossistemas Web de Conversão</h3>
            <p className="service-desc">Desenvolvemos sites institucionais e Landing Pages de alto desempenho, criados com foco exclusivo na experiência imersiva do usuário e formatados para alavancar sua captação de clientes.</p>
          </div>

          {/* Card 4: E-commerces & Sistemas */}
          <div className="service-card">
            <div className="service-icon"><FiShoppingCart /></div>
            <h3 className="service-title">E-commerce e Sistemas Web</h3>
            <p className="service-desc">Construímos lojas virtuais robustas para escalar a venda de seus produtos e sistemas web integrados sob medida, automatizando processos que reduzem custos e aumentam a produtividade da sua equipe.</p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Services;
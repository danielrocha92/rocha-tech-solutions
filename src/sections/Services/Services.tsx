import React from 'react';
import "./Services.css";
import { BsGlobe, BsCart, BsGear, BsRocket } from 'react-icons/bs';

const Services = () => {
  return (
    <section id="services" className="services">
      <div className="services-container">
        <h2 className="section-title">Serviços que impulsionam o seu negócio</h2>
        <div className="services-grid">
          {/* Card de Serviço 1: Sites Profissionais */}
          <div className="service-card">
            <div className="service-icon"><BsGlobe /></div>
            <h3>Criação de Sites Profissionais</h3>
            <p>Desenvolvemos sites institucionais, blogs e landing pages com design moderno e foco na experiência do usuário para fortalecer sua presença online.</p>
          </div>

          {/* Card de Serviço 2: E-commerce */}
          <div className="service-card">
            <div className="service-icon"><BsCart /></div>
            <h3>E-commerce sob medida</h3>
            <p>Criamos lojas virtuais personalizadas, seguras e otimizadas para conversão, prontas para escalar suas vendas.</p>
          </div>

          {/* Card de Serviço 3: Aplicações Web */}
          <div className="service-card">
            <div className="service-icon"><BsGear /></div>
            <h3>Aplicações Web</h3>
            <p>Desenvolvemos sistemas e aplicações web sob medida para automatizar processos, aumentar a produtividade e otimizar a gestão do seu negócio.</p>
          </div>

          {/* Card de Serviço 4: SEO & Performance */}
          <div className="service-card">
            <div className="service-icon"><BsRocket /></div>
            <h3>SEO & Performance</h3>
            <p>Aplicamos as melhores práticas de SEO e otimização de performance para que seu site alcance as primeiras posições no Google e ofereça a melhor experiência ao usuário.</p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Services;
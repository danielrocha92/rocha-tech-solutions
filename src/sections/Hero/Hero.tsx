import React from 'react';

const Hero = () => {
  return (
    <section className="hero">
      <div className="hero-content">
        <h1 className="hero-title">Olá, eu sou Daniel Rocha</h1>
        <h2 className="hero-subtitle">Desenvolvedor Web especializado em criar sites modernos, rápidos e responsivos.</h2>
        <div className="hero-cta">
          <a href="./Portfolio" className="cta-button primary">Ver Portfólio</a>
          <a href="../Contact/Contact" className="cta-button secondary">Entre em Contato</a>
        </div>
      </div>
    </section>
  );
};

export default Hero;
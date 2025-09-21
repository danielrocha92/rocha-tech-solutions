import React from 'react';
import { Link } from 'react-router-dom';
import './Hero.css';

const Hero = () => {
  return (
    <section id="hero" className="hero-section">
      <video className="hero-video" autoPlay loop muted playsInline>
        <source src="/assets/videos/banner.mp4" type="video/mp4" />
        Seu navegador não suporta o elemento de vídeo.
      </video>
      <div className="hero-content">
        <h1 className="hero-title">Olá, eu sou Daniel Rocha</h1>
        <h2 className="hero-subtitle">Desenvolvedor Web especializado em criar sites modernos, rápidos e responsivos.</h2>
        <div className="hero-cta">
          <Link to="/portfolio" className="cta-button primary">Ver Portfólio</Link>
          <Link to="/contact" className="cta-button secondary">Entre em Contato</Link>
        </div>
      </div>
    </section>
  );
};

export default Hero;
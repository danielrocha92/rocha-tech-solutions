import React from 'react';
import { Link } from 'react-router-dom';
import './Hero.css';

const Hero = () => {
  const videoSource = "/assets/videos/banner.mp4";

  return (
    <section id="hero" className="hero-section">
      <video
        className="hero-video"
        autoPlay
        loop
        muted
        playsInline
      >
        <source src={videoSource} type="video/mp4" />
        Seu navegador não suporta a tag de vídeo.
      </video>
      <div className="hero-content">
        <h1 className="hero-title">Transformando Códigos em Soluções Reais</h1>
        <h2 className="hero-subtitle">Full Stack Developer focado em Arquitetura de Sistemas e Performance para transformar ideias em soluções de alto impacto
.</h2>
        <div className="hero-cta">
          <Link to="/portfolio" className="cta-button primary">Ver Portfólio</Link>
          <Link to="/contact" className="cta-button secondary">Entre em Contato</Link>
        </div>
      </div>
    </section>
  );
};

export default Hero;
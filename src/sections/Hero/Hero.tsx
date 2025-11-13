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
        <h1 className="hero-title">Criação de Sites e Sistemas Web Sob Medida</h1>
        <h2 className="hero-subtitle">Transformamos suas ideias em soluções digitais de alta performance que geram resultados.</h2>
        <div className="hero-cta">
          <Link to="/contact" className="cta-button primary">Quero um orçamento</Link>
          <Link to="/portfolio" className="cta-button secondary">Ver Portfólio</Link>
        </div>
      </div>
    </section>
  );
};

export default Hero;
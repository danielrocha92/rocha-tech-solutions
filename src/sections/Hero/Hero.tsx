import React, { useRef, useState } from 'react';
import { Link } from 'react-router-dom';
import './Hero.css';

const Hero = () => {
  const sectionRef = useRef<HTMLElement>(null);
  const [isHovering, setIsHovering] = useState(false);

  const handleMouseMove = (e: React.MouseEvent<HTMLElement>) => {
    if (!sectionRef.current) return;
    const { left, top } = sectionRef.current.getBoundingClientRect();
    const x = e.clientX - left;
    const y = e.clientY - top;

    sectionRef.current.style.setProperty('--mouse-x', `${x}px`);
    sectionRef.current.style.setProperty('--mouse-y', `${y}px`);
    setIsHovering(true);
  };

  const handleMouseLeave = () => {
    setIsHovering(false);
  };

  const videoSource = "/assets/videos/banner.mp4";

  return (
    <section
      id="hero"
      className="hero-section tech-hero"
      ref={sectionRef}
      onMouseMove={handleMouseMove}
      onMouseLeave={handleMouseLeave}
    >
      {/* Container Principal do Efeito Tecnológico de Reveal */}
      <div className="tech-video-container">

        {/* O vídeo ao fundo (renderizado globalmente para Desktop e Mobile agora) */}
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

        {/* Camada que esconde o vídeo e abre o Spotlight (furo) quando o mouse move */}
        {/* isHovering adicionado para suavizar a entrada caso precise */}
        <div className={`tech-reveal-overlay ${isHovering ? 'mouse-active' : ''}`}></div>
      </div>

      <div className="hero-content">
        <h1 className="hero-title">Aumente suas vendas com nossas soluções.</h1>
        <h2 className="hero-subtitle">Nós fazemos seu telefone tocar. Veja o que podemos fazer por sua empresa.</h2>
        <div className="hero-cta">
          <Link to="/contact" className="cta-button primary">Agende uma Chamada</Link>
          <Link to="/portfolio" className="cta-button secondary">Ver Portfólio</Link>
        </div>
      </div>
    </section>
  );
};

export default Hero;
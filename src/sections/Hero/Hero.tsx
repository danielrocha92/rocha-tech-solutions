import React, { useRef, useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import './Hero.css';

const Hero = () => {
  const sectionRef = useRef<HTMLElement>(null);
  const [isHovering, setIsHovering] = useState(false);
  const [isMobile, setIsMobile] = useState(false);

  useEffect(() => {
    // Detecta mobile via matchMedia (mais eficiente que resize listener)
    const mq = window.matchMedia('(max-width: 767px)');
    setIsMobile(mq.matches);
    const handler = (e: MediaQueryListEvent) => setIsMobile(e.matches);
    mq.addEventListener('change', handler);
    return () => mq.removeEventListener('change', handler);
  }, []);

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

        {/*
          No mobile: NÃO carregamos o vídeo (Speed Index mobile era 10,4s).
          O CSS do .tech-reveal-overlay já aplica o efeito de grid visualmente.
          No desktop: carregamos com preload="none" para não bloquear o parse inicial.
        */}
        {!isMobile && (
          <video
            className="hero-video"
            autoPlay
            loop
            muted
            playsInline
            preload="none"
          >
            <source src={videoSource} type="video/mp4" />
          </video>
        )}

        {/* Camada overlay com grid (cobre o vídeo no desktop, é o fundo completo no mobile) */}
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
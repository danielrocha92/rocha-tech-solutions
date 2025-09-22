import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import './Hero.css';

const Hero = () => {
  const [currentVideo, setCurrentVideo] = useState(0);
  const videoSources = [
    "/assets/videos/Hailuo_Video__código abstrato_, _redes de d_426362228513443843.mp4",
    "/assets/videos/banner.mp4"
  ];

  const handleVideoEnded = () => {
    // Muda para o próximo vídeo na lista
    // O % videoSources.length garante que ele volte para o primeiro vídeo quando chegar ao fim da lista
    const nextVideoIndex = (currentVideo + 1) % videoSources.length;
    setCurrentVideo(nextVideoIndex);
  };

  return (
    <section id="hero" className="hero-section">
      <video
        key={videoSources[currentVideo]} // Usar 'key' força a recarga do vídeo
        className="hero-video"
        autoPlay
        loop={false} // Desabilita o loop para que o evento 'onended' seja disparado
        muted
        playsInline
        onEnded={handleVideoEnded}
      >
        <source src={videoSources[currentVideo]} type="video/mp4" />
        Seu navegador não suporta a tag de vídeo.
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
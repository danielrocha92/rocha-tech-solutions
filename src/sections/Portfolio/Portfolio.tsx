import React from 'react';
import { Link } from 'react-router-dom';

import "./Portfolio.css";

const Portfolio = () => {
  return (
    <section id="portfolio" className="portfolio">
      <div className="portfolio-container">
        <h2 className="section-title">Meus Projetos</h2>
        <div className="portfolio-grid">
          {/* Exemplo de Projeto 1 */}
          <div className="portfolio-card">
            <img src="/assets/img/zero20garage.jpeg" alt="Projeto 1" className="project-image" />
            <div className="project-info">
              <h3>Zero 20 Garage</h3>
              <p>Descrição curta do projeto e tecnologias usadas (ex: React, Node.js).</p>
              <Link to="/portfolio/zero-vinte" className="project-link">Ver Projeto</Link>
            </div>
          </div>

          {/* Exemplo de Projeto 2 */}
          <div className="portfolio-card">
            <img src="/assets/img/bemamados.jpeg" alt="Projeto 2" className="project-image" />
            <div className="project-info">
              <h3>Bem Amados</h3>
              <p>Descrição curta do projeto e tecnologias usadas (ex: Angular, Firebase).</p>
              <Link to="/portfolio/bem-amados" className="project-link">Ver Projeto</Link>
            </div>
          </div>

          {/* Novo Projeto */}
          <div className="portfolio-card">
            <video 
              src="/assets/videos/screemshot_solo_psico.mp4" 
              alt="Projeto 3" 
              className="project-image" 
              autoPlay 
              loop 
              muted 
              playsInline 
            />
            <div className="project-info">
              <h3>Renata Ribeiro Neuropsicologia</h3>
              <p>Psicóloga e Neuropsicóloga com atendimento ético, personalizado e humanizado.</p>
              <Link to="/portfolio/renata-ribeiro" className="project-link">Ver Projeto</Link>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Portfolio;
import React from 'react';
import { Link } from 'react-router-dom';

import "./Portfolio.css";

// 1. Tipagem
interface ProjectCard {
  title: string;
  description: string;
  linkTo: string;
  // O item de mídia é opcional na card
  media: { 
      src: string; 
      alt: string; 
      type?: 'image' | 'video';
  }; 
}

// 2. Dados de Exemplo para a Lista de Cards
const portfolioProjects: ProjectCard[] = [
    {
        title: 'Zero 20 Garage',
        description: 'Descrição curta do projeto e tecnologias usadas (ex: React, Node.js).',
        linkTo: '/portfolio/zero-vinte',
        media: {
            src: '/assets/img/zero20garage.jpeg',
            alt: 'Projeto Zero 20 Garage',
            type: 'image',
        }
    },
    {
        title: 'Bem Amados',
        description: 'Descrição curta do projeto e tecnologias usadas (ex: Angular, Firebase).',
        linkTo: '/portfolio/bem-amados',
        media: {
            src: '/assets/img/bemamados.jpeg',
            alt: 'Projeto Bem Amados',
            // type omitido, será tratado como 'image' pela correção
        }
    },
    {
        title: 'Renata Ribeiro Neuropsicologia',
        description: 'Psicóloga e Neuropsicóloga com atendimento ético, personalizado e humanizado.',
        linkTo: '/portfolio/renata-ribeiro',
        media: {
            src: '/assets/videos/screemshot_solo_psico.mp4',
            alt: 'Projeto Renata Ribeiro',
            type: 'video',
        }
    }
];


const Portfolio: React.FC = () => {
  return (
    <section id="portfolio" className="portfolio">
      <div className="portfolio-container">
        <h2 className="section-title">Meus Projetos</h2>
        <div className="portfolio-grid">
          {portfolioProjects.map((project, index) => (
              <div key={index} className="portfolio-card">
                  
                  {/* Aplicação da CORREÇÃO TS2339 AQUI */}
                  {project.media.type?.toLowerCase() === 'video' ? (
                      <video 
                        src={project.media.src} 
                        alt={project.media.alt} 
                        className="project-image" 
                        autoPlay 
                        loop 
                        muted 
                        playsInline 
                      />
                  ) : (
                      <img 
                        src={project.media.src} 
                        alt={project.media.alt} 
                        className="project-image" 
                      />
                  )}

                  <div className="project-info">
                      <h3>{project.title}</h3>
                      <p>{project.description}</p>
                      <Link to={project.linkTo} className="project-link">Ver Projeto</Link>
                  </div>
              </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Portfolio;

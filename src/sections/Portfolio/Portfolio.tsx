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
        description: 'Site institucional responsivo para a oficina Zero20 Garage, focado na apresentação de serviços e captação de orçamentos. (Tecnologias: React js, Node js, Firebase, Cloudnary, Framer Motion e CSS dedicado).',
        linkTo: '/portfolio/zero-vinte',
        media: {
            src: '/assets/img/zero20garage.jpeg',
            alt: 'Projeto Zero 20 Garage',
            type: 'image',
        }
    },
    {
        title: 'Bem Amados',
        description: 'E-commerce e site institucional para a marca Bem Amados (fisioterapia pélvica), otimizado para SEO. (Tecnologias: Liquid.js, HTML, CSS, JSON, JavaScript).',
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
                  
                  {/* CORREÇÃO TS2322 APLICADA AQUI: 
                      'alt' foi substituído por 'title' no elemento <video>.
                  */}
                  {project.media.type?.toLowerCase() === 'video' ? (
                      <video 
                        src={project.media.src} 
                        title={project.media.alt} // <-- CORRIGIDO
                        className="project-image" 
                        autoPlay 
                        loop 
                        muted 
                        playsInline 
                      >
                        Seu navegador não suporta este vídeo.
                      </video>
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

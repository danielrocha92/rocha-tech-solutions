import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { FiExternalLink, FiGithub, FiLayers, FiEye, FiArrowUp, FiArrowDown } from 'react-icons/fi';
import "./Portfolio.css";

// Tipagem
interface ProjectCard {
  id: string;
  title: string;
  category: string;
  categoryFilter: 'institucional' | 'sistemas' | 'ecommerce';
  description: string;
  techStack: string[];
  linkTo: string;
  isInternal?: boolean;
  githubLink?: string;
  media: {
    src: string;
    alt: string;
    type?: 'image' | 'video';
  };
}

// Dados Enriquecidos dos Projetos
const portfolioProjects: ProjectCard[] = [
  {
    id: 'critel-tecnologia',
    title: 'Critel Tecnologia',
    category: 'Infraestrutura de TI & Soluções Corporativas',
    categoryFilter: 'institucional',
    description: 'Portal institucional de alta performance para a Critel Tecnologia, especializado em infraestrutura de TI, Service Desk e segurança de redes, com arquitetura focada em geração qualificada de leads B2B.',
    techStack: ['React.js', 'TypeScript', 'Node.js', 'CSS Modules'],
    linkTo: '/portfolio/critel-tecnologia',
    isInternal: true,
    githubLink: 'https://github.com/danielrocha92/critel-tecnologia',
    media: {
      src: '/assets/img/critel-tecnologia.jpg',
      alt: 'Projeto Critel Tecnologia',
      type: 'image',
    }
  },
  {
    id: 'zero-20-garage',
    title: 'Zero 20 Garage',
    category: 'Portal Institucional & Captação',
    categoryFilter: 'institucional',
    description: 'Site institucional de alta performance para a oficina Zero20 Garage, desenvolvido com foco na captação inteligente de orçamentos e conversão de clientes automotivos.',
    techStack: ['React.js', 'Firebase', 'Framer Motion', 'Node.js'],
    linkTo: 'https://zero20garage.vercel.app',
    githubLink: 'https://github.com/danielrocha92/zero20garage',
    media: {
      src: '/assets/img/zero20garage.jpeg',
      alt: 'Projeto Zero 20 Garage',
      type: 'image',
    }
  },
  {
    id: 'mao-de-cera-oficial',
    title: 'Mão de Cera Oficial',
    category: 'Portal de Serviços e Leads',
    categoryFilter: 'institucional',
    description: 'Plataforma full-stack para modernizar a marca no ambiente digital. Implementação de formulários, gestão de banco de dados e UX dedicada à conversão de serviços estéticos.',
    techStack: ['Next.js', 'Firebase Auth', 'CSS Modules'],
    linkTo: 'https://mao-de-cera-oficial.vercel.app',
    githubLink: 'https://github.com/danielrocha92/mao-de-cera-oficial',
    media: {
      src: '/assets/videos/mao-de-cera-oficial.mp4',
      alt: 'Projeto Mão de Cera Oficial',
      type: 'video',
    }
  },
  {
    id: 'renata-ribeiro-neuropsico',
    title: 'Renata Ribeiro Neuropsico',
    category: 'Sistema de Gestão & Pacientes',
    categoryFilter: 'sistemas',
    description: 'Aplicação robusta para neuropsicologia integrando Dashboard Administrativo e Área do Cliente para gerenciamento, documentos e agendamentos de forma segura e responsiva.',
    techStack: ['Next.js', 'React.js', 'CSS Dedicado'],
    linkTo: 'https://renata-ribeiro-neuropsico.vercel.app',
    githubLink: 'https://github.com/danielrocha92/renata-ribeiro-neuropsico',
    media: {
      src: '/assets/videos/screemshot_solo_psico.mp4',
      alt: 'Projeto Renata Ribeiro',
      type: 'video',
    }
  },
  {
    id: 'bem-amados',
    title: 'Bem Amados',
    category: 'E-commerce & SEO',
    categoryFilter: 'ecommerce',
    description: 'E-commerce de impacto para a marca médica Bem Amados, orquestrando otimização profunda de SEO e arquitetura de fácil conversão de vendas em ambiente digital.',
    techStack: ['Liquid.js', 'JavaScript', 'HTML5', 'JSON'],
    linkTo: '/portfolio/bem-amados',
    isInternal: true,
    media: {
      src: '/assets/img/bemamados.jpeg',
      alt: 'Projeto Bem Amados',
      type: 'image',
    }
  }
];

type CategoryFilter = 'all' | 'institucional' | 'sistemas' | 'ecommerce';

const categories: { key: CategoryFilter; label: string }[] = [
  { key: 'all', label: 'Todos os Projetos' },
  { key: 'institucional', label: 'Sites Institucionais' },
  { key: 'sistemas', label: 'Sistemas & Gestão' },
  { key: 'ecommerce', label: 'E-commerce & Lojas' },
];

const Portfolio: React.FC = () => {
  const [activeFilter, setActiveFilter] = useState<CategoryFilter>('all');
  const [activeTouchCard, setActiveTouchCard] = useState<string | null>(null);

  const filteredProjects = activeFilter === 'all'
    ? portfolioProjects
    : portfolioProjects.filter(project => project.categoryFilter === activeFilter);

  const handleCardTouch = (id: string) => {
    setActiveTouchCard(prev => (prev === id ? null : id));
  };

  return (
    <section id="portfolio" className="portfolio-section">
      <div className="portfolio-container">
        {/* Cabeçalho da Seção */}
        <div className="portfolio-header">
          <span className="portfolio-badge">Nosso Portfólio</span>
          <h2 className="section-title">Confira abaixo alguns dos nossos projetos</h2>
          <p className="subtitle">
            Aplicações web completas, páginas de alta conversão e sistemas modernos desenvolvidos sob medida para alavancar resultados reais.
          </p>

          {/* Filtros de Categoria em Pílulas */}
          <div className="portfolio-filters" role="tablist" aria-label="Filtro de categorias de projetos">
            {categories.map(cat => (
              <button
                key={cat.key}
                type="button"
                role="tab"
                aria-selected={activeFilter === cat.key}
                className={`filter-btn ${activeFilter === cat.key ? 'active' : ''}`}
                onClick={() => setActiveFilter(cat.key)}
              >
                {cat.label}
              </button>
            ))}
          </div>
        </div>

        {/* Grid de Projetos */}
        <div className="portfolio-grid">
          {filteredProjects.map((project) => {
            const isTouchActive = activeTouchCard === project.id;

            return (
              <article
                key={project.id}
                className={`portfolio-card ${isTouchActive ? 'is-touch-active' : ''}`}
                onClick={() => handleCardTouch(project.id)}
              >
                {/* Mockup Frame / Viewport */}
                <div className="browser-mockup">
                  <div className="browser-header">
                    <div className="browser-dots">
                      <span className="dot dot-red" />
                      <span className="dot dot-yellow" />
                      <span className="dot dot-green" />
                    </div>
                    <div className="browser-url-bar">
                      <span className="browser-url-text">
                        {project.linkTo.replace(/^https?:\/\//, '')}
                      </span>
                    </div>
                  </div>

                  <div className="portfolio-media">
                    {project.media.type?.toLowerCase() === 'video' ? (
                      <video
                        src={project.media.src}
                        title={project.media.alt}
                        className="project-asset-video"
                        autoPlay
                        loop
                        muted
                        playsInline
                        preload="none"
                      >
                        Seu navegador não suporta este vídeo.
                      </video>
                    ) : (
                      <img
                        src={project.media.src}
                        alt={project.media.alt}
                        className="project-asset-img"
                        loading="lazy"
                        decoding="async"
                      />
                    )}

                    {/* Indicador de Rolagem Interativo (Estilo mmorais.net) */}
                    {project.media.type !== 'video' && (
                      <div className="scroll-indicator" title="Passe o mouse ou toque para rolar a página">
                        <div className="scroll-indicator-inner">
                          <FiArrowUp className="scroll-arrow scroll-arrow-up" />
                          <div className="scroll-icon-center">
                            <FiEye className="scroll-main-icon" />
                          </div>
                          <FiArrowDown className="scroll-arrow scroll-arrow-down" />
                        </div>
                        <span className="scroll-hint-text">Rolar página</span>
                      </div>
                    )}
                  </div>
                </div>

                {/* Informações do Projeto */}
                <div className="portfolio-info">
                  <div className="portfolio-category">
                    <FiLayers className="category-icon" /> {project.category}
                  </div>
                  <h3 className="project-title">{project.title}</h3>
                  <p className="project-description">{project.description}</p>

                  <div className="tech-stack">
                    {project.techStack.map((tech, idx) => (
                      <span key={idx} className="tech-badge">{tech}</span>
                    ))}
                  </div>

                  {/* Ações e Links */}
                  <div className="portfolio-actions">
                    {project.isInternal ? (
                      <Link to={project.linkTo} className="action-btn primary-btn">
                        Ver projeto <FiExternalLink className="btn-icon" />
                      </Link>
                    ) : (
                      <a
                        href={project.linkTo}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="action-btn primary-btn"
                      >
                        Ver projeto <FiExternalLink className="btn-icon" />
                      </a>
                    )}

                    {project.githubLink && (
                      <a
                        href={project.githubLink}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="action-btn github-btn"
                        title="Ver código no GitHub"
                        aria-label={`Ver código de ${project.title} no GitHub`}
                      >
                        <FiGithub className="btn-icon" /> Código
                      </a>
                    )}
                  </div>
                </div>
              </article>
            );
          })}
        </div>
      </div>
    </section>
  );
};

export default Portfolio;


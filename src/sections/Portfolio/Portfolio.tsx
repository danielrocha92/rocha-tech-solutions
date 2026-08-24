import React, { useState } from 'react';
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
  liveUrl: string;
  displayUrl: string;
  githubLink?: string;
  media: {
    src: string;
    alt: string;
  };
}

// Dados Atualizados com as Páginas Reais dos Projetos
const portfolioProjects: ProjectCard[] = [
  {
    id: 'critel-tecnologia',
    title: 'Critel Tecnologia',
    category: 'Infraestrutura de TI & Soluções Corporativas',
    categoryFilter: 'institucional',
    description: 'Portal institucional de alta performance para a Critel Tecnologia, especializado em infraestrutura de TI, Service Desk e segurança de redes, com arquitetura focada em geração qualificada de leads B2B.',
    techStack: ['React.js', 'TypeScript', 'Node.js', 'CSS Modules'],
    liveUrl: 'https://critel-tecnologia.vercel.app/pt',
    displayUrl: 'critel-tecnologia.vercel.app/pt',
    githubLink: 'https://github.com/danielrocha92/critel-tecnologia',
    media: {
      src: '/assets/img/showcase-critel-tecnologia.png',
      alt: 'Página real da Critel Tecnologia',
    }
  },
  {
    id: 'zero-20-garage',
    title: 'Zero 20 Garage',
    category: 'Portal Institucional & Captação',
    categoryFilter: 'institucional',
    description: 'Site institucional de alta performance para a oficina Zero20 Garage, desenvolvido com foco na captação inteligente de orçamentos e conversão de clientes automotivos.',
    techStack: ['React.js', 'Firebase', 'Framer Motion', 'Node.js'],
    liveUrl: 'https://zero20garage.com.br/',
    displayUrl: 'zero20garage.com.br',
    githubLink: 'https://github.com/danielrocha92/zero20garage',
    media: {
      src: '/assets/img/showcase-zero20garage.png',
      alt: 'Página real da Zero 20 Garage',
    }
  },
  {
    id: 'mao-de-cera-oficial',
    title: 'Mão de Cera Oficial',
    category: 'Portal de Serviços e Leads',
    categoryFilter: 'institucional',
    description: 'Plataforma full-stack para modernizar a marca no ambiente digital. Implementação de catálogo de produtos artesanais, formulários e UX dedicada à conversão.',
    techStack: ['Next.js', 'Firebase Auth', 'CSS Modules'],
    liveUrl: 'https://mao-de-cera-oficial.vercel.app/',
    displayUrl: 'mao-de-cera-oficial.vercel.app',
    githubLink: 'https://github.com/danielrocha92/mao-de-cera-oficial',
    media: {
      src: '/assets/img/showcase-mao-de-cera-oficial.png',
      alt: 'Página real da Mão de Cera Oficial',
    }
  },
  {
    id: 'renata-ribeiro-neuropsico',
    title: 'Renata Ribeiro Neuropsico',
    category: 'Sistema de Gestão & Pacientes',
    categoryFilter: 'sistemas',
    description: 'Aplicação robusta para neuropsicologia integrando apresentação clínica, agendamentos, serviços terapêuticos e Área do Paciente de forma segura e responsiva.',
    techStack: ['Next.js', 'React.js', 'CSS Dedicado'],
    liveUrl: 'https://renata-ribeiro-neuropsico.vercel.app/',
    displayUrl: 'renata-ribeiro-neuropsico.vercel.app',
    githubLink: 'https://github.com/danielrocha92/renata-ribeiro-neuropsico',
    media: {
      src: '/assets/img/showcase-renata-ribeiro-neuropsico.png',
      alt: 'Página real da Renata Ribeiro Neuropsicologia',
    }
  },
  {
    id: 'bem-amados',
    title: 'Bem Amados',
    category: 'E-commerce & SEO',
    categoryFilter: 'ecommerce',
    description: 'E-commerce de impacto para a marca de fisioterapia pélvica e bem-estar Bem Amados, com catálogo completo de produtos, otimização profunda de SEO e arquitetura de alta conversão.',
    techStack: ['Liquid.js', 'JavaScript', 'HTML5', 'JSON'],
    liveUrl: 'https://www.bemamados.com.br/',
    displayUrl: 'bemamados.com.br',
    media: {
      src: '/assets/img/showcase-bemamados.png',
      alt: 'Página real do E-commerce Bem Amados',
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
                    <a
                      href={project.liveUrl}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="browser-url-bar"
                      title={`Acessar ${project.liveUrl}`}
                    >
                      <span className="browser-url-text">{project.displayUrl}</span>
                    </a>
                  </div>

                  <a
                    href={project.liveUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="portfolio-media"
                    title={`Clique para abrir ${project.title}`}
                  >
                    <img
                      src={project.media.src}
                      alt={project.media.alt}
                      className="project-asset-img"
                      loading="lazy"
                      decoding="async"
                    />

                    {/* Indicador de Rolagem Interativo */}
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
                  </a>
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
                    <a
                      href={project.liveUrl}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="action-btn primary-btn"
                    >
                      Ver site ao vivo <FiExternalLink className="btn-icon" />
                    </a>

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


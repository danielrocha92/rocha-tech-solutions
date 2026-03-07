import React from 'react';
import { FiExternalLink, FiGithub, FiLayers } from 'react-icons/fi';
import "./Portfolio.css";

// Tipagem
interface ProjectCard {
  title: string;
  category: string;
  description: string;
  techStack: string[];
  linkTo: string;
  githubLink?: string;
  media: {
    src: string;
    alt: string;
    type?: 'image' | 'video';
  };
}

// Dados Enriquecidos com base nos Repositórios do GitHub
const portfolioProjects: ProjectCard[] = [
  {
    title: 'Zero 20 Garage',
    category: 'Portal Institucional & Captação',
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
    title: 'Mão de Cera Oficial',
    category: 'Portal de Serviços e Leads',
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
    title: 'Renata Ribeiro Neuropsico',
    category: 'Sistema de Gestão & Pacientes',
    description: 'Aplicaçao robusta para neuropsicologia integrando Dashboard Administrativo e Área do Cliente para gerenciamento, documentos e agendamentos de forma segura e responsiva.',
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
    title: 'Bem Amados',
    category: 'E-commerce & SEO',
    description: 'E-commerce de impacto para a marca médica Bem Amados, orquestrando otimização profunda de SEO e arquitetura de fácil conversão de vendas em ambiente digital.',
    techStack: ['Liquid.js', 'JavaScript', 'HTML5', 'JSON'],
    linkTo: '/portfolio/bem-amados',
    media: {
      src: '/assets/img/bemamados.jpeg',
      alt: 'Projeto Bem Amados',
      type: 'image',
    }
  }
];

const Portfolio: React.FC = () => {
  return (
    <section id="portfolio" className="portfolio-section">
      <div className="portfolio-container">
        <div className="portfolio-header">
          <h2 className="section-title">Portfólio de Engenharia</h2>
          <p className="subtitle">
            Conheça algumas das aplicações web escaláveis e painéis de conversão que construímos aplicando nossas metodologias de negócio.
          </p>
        </div>

        <div className="portfolio-grid">
          {portfolioProjects.map((project, index) => (
            <div key={index} className="portfolio-card">
              <div className="portfolio-media">
                {project.media.type?.toLowerCase() === 'video' ? (
                  <video
                    src={project.media.src}
                    title={project.media.alt}
                    className="project-asset"
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
                    className="project-asset"
                  />
                )}

                <div className="portfolio-overlay">
                  <a href={project.linkTo} target="_blank" rel="noopener noreferrer" className="action-btn preview-btn">
                    <FiExternalLink /> Live Demo
                  </a>
                  {project.githubLink && (
                    <a href={project.githubLink} target="_blank" rel="noopener noreferrer" className="action-btn github-btn">
                      <FiGithub /> Repositório
                    </a>
                  )}
                </div>
              </div>

              <div className="portfolio-info">
                <div className="portfolio-category">
                  <FiLayers className="category-icon" /> {project.category}
                </div>
                <h3>{project.title}</h3>
                <p>{project.description}</p>

                <div className="tech-stack">
                  {project.techStack.map((tech, idx) => (
                    <span key={idx} className="tech-badge">{tech}</span>
                  ))}
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Portfolio;

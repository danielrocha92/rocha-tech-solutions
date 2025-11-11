import React, { useEffect } from 'react';
import { useParams } from 'react-router-dom';
import { Carousel } from 'react-responsive-carousel';
import 'react-responsive-carousel/lib/styles/carousel.min.css'; // Importa o CSS do carrossel
import './ProjectDetail.css';

// 1. Tipagem (Interfaces) para o TypeScript
interface GalleryItem {
  src: string;
  alt: string;
  type?: 'video' | 'image'; // Torna 'type' opcional.
}

interface Project {
  id: string;
  title: string;
  githubLink: string | null;
  siteLink: string | null;
  role: string;
  description: string;
  highlights: string;
  technologies: string[];
  gallery: GalleryItem[];
}

// 2. Dados completos dos projetos com galeria
const projects: Project[] = [ // Adiciona a tipagem à constante
  {
    id: "zero-vinte",
    title: "Zero 20 Garage",
    githubLink: "https://github.com/danielrocha92/zero20garage",
    siteLink: "https://zero20garage.vercel.app/",
    role: "Desenvolvedor Full Stack, Designer",
    description: "Desenvolvimento de um site institucional moderno e responsivo para a Zero20 Garage, especializada em preparação, manutenção e retífica de motores. O projeto visou criar uma plataforma digital para apresentar os serviços, fortalecer a presença online e facilitar o contato com clientes.",
    highlights: "Design intuitivo e visual alinhado à identidade da marca, totalmente responsivo para mobile e desktop, galeria de imagens para exibição dos projetos da oficina e formulário de contato para conversão de clientes.",
    technologies: ["React.js", "CSS", "Framer Motion", "Vite"],
    gallery: [
      { src: "/assets/img/zero20-1.png", alt: "Captura de tela da página inicial do site Zero 20 Garage." },
      { src: "/assets/img/zero20-2.png", alt: "Captura de tela da página de orçamentos do site Zero 20 Garage." },
      { src: "/assets/img/zero20-3.png", alt: "Captura de tela da págian do blog do site Zero 20 Garage." }
    ]
  },
  {
    id: "bem-amados",
    title: "Bem Amados",
    githubLink: null,
    siteLink: "https://www.bemamados.com.br/",
    role: "Criação de design, Desenvolvimento Front-end, Otimização SEO",
    description: "Desenvolvimento de um site institucional e e-commerce para a marca Bem Amados, focada em produtos que auxiliam a fisioterapia pélvica. O site foi criado com um design moderno, intuitivo e responsivo para proporcionar uma experiência de navegação fluida.",
    highlights: "Catálogo de produtos personalizados, integração com sistema de pagamento, layout otimizado para SEO, blog integrado para estratégias de conteúdo e formulário de contato e links para redes sociais.",
    technologies: ["Liquid.js", "HTML", "CSS", "JSON", "JavaScript"],
    gallery: [
      { src: "/assets/img/bemamados-1.png", alt: "Captura de tela da página inicial do site Bem Amados." },
      { src: "/assets/img/bemamados-2.png", alt: "Captura de tela da página de produtos do site Bem Amados." },
      { src: "/assets/img/bemamados-3.png", alt: "Captura de tela da página de sugestão de produtos do site Bem Amados." }
    ]
  },
  {
    id: "renata-ribeiro",
    title: "Renata Ribeiro Neuropsicologia",
    githubLink: "https://github.com/danielrocha92/renata-ribeiro-neuropsico",
    siteLink: "https://renata-ribeiro-neuropsico.vercel.app/",
    role: "Desenvolvedor Front-end, Designer",
    description: "Desenvolvimento de um site profissional para a psicóloga e neuropsicóloga Renata Ribeiro. O objetivo foi criar uma plataforma para apresentar seus serviços, compartilhar informações sobre sua abordagem e facilitar o contato com pacientes.",
    highlights: "Design limpo e profissional, totalmente responsivo, informações detalhadas sobre os serviços oferecidos, e formulário de contato para agendamentos.",
    technologies: ["React.js", "CSS", "Vite"],
    gallery: [
      { src: "/assets/videos/screemshot_solo_psico.mp4", alt: "Vídeo de demonstração do site Renata Ribeiro.", type: "video" },
      { src: "/assets/img/renata-ribeiro-1.png", alt: "Captura de tela da página inicial do site Renata Ribeiro." },
      { src: "/assets/img/renata-ribeiro-2.png", alt: "Captura de tela da página de serviços do site Renata Ribeiro." },
      { src: "/assets/img/renata-ribeiro-3.png", alt: "Captura de tela da página de contato do site Renata Ribeiro." }
    ]
  },
];

const ProjectDetail: React.FC = () => { // Tipagem do componente
  const { id } = useParams<{ id: string }>(); // Tipagem do useParams
  const project = projects.find(p => p.id === id);

  useEffect(() => {
    if (project) {
      // Define o título da página dinamicamente para SEO
      document.title = `${project.title} - Projeto de Daniel Rocha`;
    }
  }, [project]);

  if (!project) {
    return <div>Projeto não encontrado!</div>;
  }

  return (
    <section className="project-detail">
      <div className="project-detail-container">

        {/* Novo Carrossel de Imagens no Topo */}
        {project.gallery && project.gallery.length > 0 && (
          <div className="carousel-wrapper">
            <Carousel showArrows={true} infiniteLoop={true} dynamicHeight={false}>
              {project.gallery.map((media, index) => (
                <div key={index}>
                  {/* CORREÇÃO APLICADA AQUI: 
                      A propriedade 'alt' foi substituída por 'title' no elemento <video>
                      para resolver o erro TS2322/TS2339.
                  */}
                  {media.type?.toLowerCase() === 'video' ? (
                    <video 
                      src={media.src} 
                      title={media.alt} // Substituído 'alt' por 'title' ou 'aria-label'
                      controls 
                      autoPlay 
                      muted 
                      loop 
                      playsInline 
                      className="carousel-media" // Adicionando uma classe para facilitar o CSS
                    >
                      Seu navegador não suporta a tag de vídeo.
                    </video>
                  ) : (
                    <img src={media.src} alt={media.alt} className="carousel-media" />
                  )}
                </div>
              ))}
            </Carousel>
          </div>
        )}

        <h1>{project.title}</h1>
        <div className="project-links">
          {project.siteLink && (
            <a href={project.siteLink} target="_blank" rel="noopener noreferrer">
              Ver Site
            </a>
          )}
          {project.githubLink && (
            <a href={project.githubLink} target="_blank" rel="noopener noreferrer">
              Repositório no GitHub
            </a>
          )}
        </div>

        <h2>Descrição</h2>
        <p>{project.description}</p>

        <h2>Destaques e Funcionalidades</h2>
        <p>{project.highlights}</p>

        <h2>Meu Papel no Projeto</h2>
        <p>{project.role}</p>

        <h2>Principais Tecnologias</h2>
        <ul>
          {project.technologies.map((tech, index) => (
            <li key={index}>{tech}</li>
          ))}
        </ul>
      </div>
    </section>
  );
};

export default ProjectDetail;

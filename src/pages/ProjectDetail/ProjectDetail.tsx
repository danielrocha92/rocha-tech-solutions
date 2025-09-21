import React from 'react';
import { useParams } from 'react-router-dom';
import { Carousel } from 'react-responsive-carousel';
import 'react-responsive-carousel/lib/styles/carousel.min.css'; // Importa o CSS do carrossel
import './ProjectDetail.css';

// Dados completos dos projetos com galeria
const projects = [
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
];

const ProjectDetail = () => {
  const { id } = useParams();
  const project = projects.find(p => p.id === id);

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
              {project.gallery.map((image, index) => (
                <div key={index}>
                  <img src={image.src} alt={image.alt} />
                </div>
              ))}
            </Carousel>
          </div>
        )}

        <h1>{project.title}</h1>
        {/* O restante do seu código permanece aqui, sem alterações */}
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
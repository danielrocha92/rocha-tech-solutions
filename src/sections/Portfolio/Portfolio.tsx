import React from 'react';

const Portfolio = () => {
  return (
    <section className="portfolio">
      <div className="portfolio-container">
        <h2 className="section-title">Meus Projetos</h2>
        <div className="portfolio-grid">
          {/* Exemplo de Projeto 1 */}
          <div className="portfolio-card">
            <img src="/assets/img/zero20garage.jpeg" alt="Projeto 1" className="project-image" />
            <div className="project-info">
              <h3>Zero 20 Garage</h3>
              <p>Descrição curta do projeto e tecnologias usadas (ex: React, Node.js).</p>
              <a href="https://zero20garage.vercel.app/" target="_blank" rel="noopener noreferrer" className="project-link">Ver Projeto</a>
            </div>
          </div>

          {/* Exemplo de Projeto 2 */}
          <div className="portfolio-card">
            <img src="/assets/img/bemamados.jpeg" alt="Projeto 2" className="project-image" />
            <div className="project-info">
              <h3>Bem Amados</h3>
              <p>Descrição curta do projeto e tecnologias usadas (ex: Angular, Firebase).</p>
              <a href="https://www.bemamados.com.br/" target="_blank" rel="noopener noreferrer" className="project-link">Ver Projeto</a>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Portfolio;
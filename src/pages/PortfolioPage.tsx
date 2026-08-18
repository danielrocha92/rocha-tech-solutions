import React from 'react';
import { Helmet } from 'react-helmet-async';
import Portfolio from '../sections/Portfolio/Portfolio';

const PortfolioPage = () => {
  return (
    <div className="portfolio-page-wrapper" style={{ paddingTop: '60px' }}>
      <Helmet>
        <title>Portfólio | RochaTechSolutions</title>
        <meta name="description" content="Explore o portfólio de Daniel Rocha. Projetos de desenvolvimento web, e-commerce, sistemas corporativos e aplicações full-stack escaláveis." />
      </Helmet>
      <Portfolio />
    </div>
  );
};

export default PortfolioPage;

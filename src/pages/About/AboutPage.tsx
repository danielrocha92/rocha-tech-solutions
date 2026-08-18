import React from 'react';
import { Helmet } from 'react-helmet-async';
import About from '../../sections/About/About';

const AboutPage = () => {
  return (
    <div className="about-page-wrapper" style={{ paddingTop: '60px' }}>
      <Helmet>
        <title>Sobre Mim | RochaTechSolutions</title>
        <meta name="description" content="Conheça Daniel Rocha, engenheiro de software e desenvolvedor web. Descubra minha trajetória, habilidades e como posso ajudar sua empresa." />
      </Helmet>
      <About />
    </div>
  );
};

export default AboutPage;

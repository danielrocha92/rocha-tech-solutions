import React from 'react';
import { Helmet } from 'react-helmet-async';
import Hero from '../sections/Hero/Hero';
import About from '../sections/About/About';
import Services from '../sections/Services/Services';
import HowItWorks from '../components/HowItWorks';
import Portfolio from '../sections/Portfolio/Portfolio';
import Contact from '../sections/Contact/Contact';

const HomePage = () => {
  return (
    <>
      <Helmet>
        <title>RochaTechSolutions 👨‍💻 Desenvolvedor Web em São Paulo</title>
        <meta
          name="description"
          content="Portfólio de Daniel Rocha, desenvolvedor web especializado na criação de sites profissionais, e-commerce e aplicações web modernas em São Paulo."
        />
      </Helmet>
      <Hero />
      <About />
      <Services />
      <HowItWorks />
      <Portfolio />
      <Contact />
    </>
  );
};

export default HomePage;



import React, { useEffect } from 'react';
import ScrollReveal from 'scrollreveal';
import { Helmet } from 'react-helmet-async';
import Hero from '../sections/Hero/Hero';
import Services from '../sections/Services/Services';
import HowItWorks from '../components/HowItWorks';
import Portfolio from '../sections/Portfolio/Portfolio';
import Testimonials from '../sections/Testimonials/Testimonials';
import Contact from '../sections/Contact/Contact';

const HomePage = () => {
  useEffect(() => {
    const sr = ScrollReveal({
      origin: 'bottom',
      distance: '60px',
      duration: 1000,
      delay: 200,
      opacity: 1,
      // reset: true // Animations repeat
    });
    sr.reveal('main > *', { interval: 100 });
  }, []);

  return (
    <>
      <Helmet>
        <title>RochaTechSolutions 👨‍💻 Desenvolvedor Web em São Paulo</title>
        <meta
          name="description"
          content="Portfólio de Daniel Rocha, desenvolvedor web especializado na criação de sites profissionais, e-commerce e aplicações web modernas em São Paulo."
        />
      </Helmet>
      <main>
        <Hero />
        <Services />
        <HowItWorks />
        <Portfolio />
        <Testimonials />
        <Contact />
      </main>
    </>
  );
};

export default HomePage;

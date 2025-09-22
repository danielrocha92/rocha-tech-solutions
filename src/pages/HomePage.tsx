import React from 'react';
import Hero from '../Hero/Hero';
import About from '../About/About';
import Services from '../Services/Services';
import HowItWorks from '../HowItWorks/HowItWorks';
import Portfolio from '../Portfolio/Portfolio';
import Contact from '../Contact/Contact';

const HomePage = () => {
  return (
    <>
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


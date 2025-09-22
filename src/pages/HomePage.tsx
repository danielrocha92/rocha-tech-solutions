import React from 'react';
import Hero from '../../sections/Hero/Hero';
import About from '../../sections/About/About';
import Services from '../../sections/Services/Services';
import Portfolio from '../../sections/Portfolio/Portfolio';
import HowItWorks from '../../sections/HowItWorks/HowItWorks';
import Contact from '../../sections/Contact/Contact';

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


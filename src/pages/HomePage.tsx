import React from 'react';
import Hero from '../sections/Hero/Hero';
import About from '../sections/About/About';
import Services from '../sections/Services/Services';
import HowItWorks from '../components/HowItWorks/HowItWorks';
import Portfolio from '../sections/Portfolio/Portfolio';
import Contact from '../sections/Contact/Contact';

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


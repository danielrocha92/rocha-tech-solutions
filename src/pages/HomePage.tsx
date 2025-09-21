import React from 'react';
import Hero from '../sections/Hero/Hero';
import About from '../sections/About/About';
import Services from '../sections/Services/Services';
import Contact from '../sections/Contact/Contact';
import useScrollToHash from '../hooks/useScrollToHash';

function HomePage() {
  useScrollToHash(80);

  return (
    <>
      <Hero />
      <About />
      <Services />
      <Contact />
    </>
  );
}

export default HomePage;
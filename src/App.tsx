import React from 'react';
import './App.css';
import Header from './components/Header/Header';
import './components/Header/Header.css';
import Hero from './sections/Hero/Hero';
import './sections/Hero/Hero.css';
import About from './sections/About/About';
import './sections/About/About.css';
import Services from './sections/Services/Services';
import './sections/Services/Services.css';
import Portfolio from './sections/Portfolio/Portfolio';
import './sections/Portfolio/Portfolio.css';
import Contact from './sections/Contact/Contact';
import './sections/Contact/Contact.css';
import Footer from './components/Footer/Footer';
import './components/Footer/Footer.css';

function App() {
  return (
    <div className="App">
      <Hero />
      <Header />
      <About />
      <Services />
      <Portfolio />
      <Contact />
      <Footer />
    </div>
  );
}

export default App;
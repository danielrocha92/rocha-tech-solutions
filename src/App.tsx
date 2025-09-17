import React from 'react';
import './App.css';
import Hero from './sections/Hero/Hero'; // Importa o componente Hero
import './sections/Hero/Hero.css'; // Importa os estilos do componente Hero
import About from './sections/About/About'; // Importa o componente About
import './sections/About/About.css'; // Importa os estilos do componente About
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
      <About />
      <Services />
      <Portfolio />
      <Contact />
      <Footer />
    </div>
  );
}

export default App;

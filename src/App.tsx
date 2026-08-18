import React, { useEffect } from "react";
import { Routes, Route } from "react-router-dom";
import Header from "./components/Header/Header";
import Footer from "./components/Footer/Footer";
import HomePage from "./pages/HomePage";
import AboutPage from "./pages/About/AboutPage";
import PortfolioPage from "./pages/PortfolioPage";
import ProjectDetail from "./pages/ProjectDetail/ProjectDetail";
import ContactPage from "./pages/Contact/ContactPage"; // Importação da nova página de Contato

import './App.css';
import './styles/theme.css';
import { setupThemeSwitcher } from './scripts/theme-switcher';
import ScrollButtons from "./components/ScrollButtons/ScrollButtons";
import ScrollToTop from './hooks/ScrollToTop';

function App() {
  useEffect(() => {
    setupThemeSwitcher();
  }, []);

  return (
    <div className="app-container">
      <ScrollToTop />
      <Header />
      <main className="main-content">
        <Routes>
          <Route path="/" element={<HomePage />} />
          <Route path="/about" element={<AboutPage />} />
          <Route path="/portfolio" element={<PortfolioPage />} />
          <Route path="/portfolio/:id" element={<ProjectDetail />} />
          <Route path="/contact" element={<ContactPage />} /> {/* Adicionado rota para /contact */}
        </Routes>
      </main>
      <ScrollButtons />
      <Footer />
    </div>
  );
}

export default App;


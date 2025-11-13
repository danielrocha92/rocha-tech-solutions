import React, { useState } from "react";
import { Link } from "react-router-dom";
import ThemeSelector from "../ThemeSelector/ThemeSelector";
import "./Header.css";

const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  const handleNavClick = () => {
    setIsMenuOpen(false);
  };

  return (
    <header className="header">
      <div className="header-container">
        {/* Este link volta para o topo da página inicial */}
        <Link to="/#hero" className="logo" aria-label="Página Inicial">
          <img src="/assets/img/logo.png" alt="Logo Rocha Tech Solutions" className="logo-img" />
        </Link>
        <nav className={`nav ${isMenuOpen ? "open" : ""}`}>
          <ul className="nav-list" onClick={handleNavClick}>
            {/* Links de âncora (mesma página) usam <a> */}
            <li className="nav-item">
              <a href="/#hero">Início</a>
            </li>
            <li className="nav-item">
              <Link to="/about">Sobre</Link>
            </li>
            <li className="nav-item">
              <a href="/#services">Serviços</a>
            </li>
            <li className="nav-item">
              <a href="/#HowItWorks">Como Funciona</a>
            </li>

            {/* Link para outra página/rota usa <Link> */}
            <li className="nav-item">
              <Link to="/portfolio">Portfólio</Link>
            </li>

            <li className="nav-item">
              <a href="/#testimonials">Avaliações</a>
            </li>

            {/* Link de âncora (mesma página) usa <a> */}
            <li className="nav-item">
              <a href="/#contact">Contato</a>
            </li>
          </ul>
        </nav>
        <div className="header-actions">
          <ThemeSelector />
          <button className="menu-toggle" onClick={toggleMenu} aria-label="Abrir menu">
            <span className={`hamburger-icon ${isMenuOpen ? "open" : ""}`}></span>
          </button>
        </div>
      </div>
    </header>
  );
};

export default Header;

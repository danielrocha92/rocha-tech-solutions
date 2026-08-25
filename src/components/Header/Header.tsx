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
          <img
            src="/assets/img/logo.png"
            alt="Logo Rocha Tech Solutions"
            className="logo-img"
            fetchPriority="high"
            loading="eager"
          />
        </Link>
        <nav className={`nav ${isMenuOpen ? "open" : ""}`}>
          <ul className="nav-list" onClick={handleNavClick}>
            {/* Links de âncora (mesma página) usam <a> */}
            <li className="nav-item">
              <Link to="/#hero">Início</Link>
            </li>
            <li className="nav-item">
              <Link to="/about">Nossa Metodologia</Link>
            </li>
            <li className="nav-item">
              <Link to="/#HowItWorks">Como Funciona</Link>
            </li>

            {/* Link para outra página/rota usa <Link> */}
            <li className="nav-item">
              <Link to="/portfolio">Portfólio</Link>
            </li>

            {/* Link de âncora (mesma página) usa <a> */}
            <li className="nav-item">
              <Link to="/contact">Contato</Link>
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

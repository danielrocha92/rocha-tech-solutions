import React, { useState } from "react";
import { Link } from "react-router-dom"; // Importamos o Link para a rota do Portfólio
import "./Header.css";

const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  // Função para fechar o menu ao clicar em um item
  const handleNavClick = () => {
    setIsMenuOpen(false);
  };

  return (
    <header className="header">
      <div className="header-container">
        {/* Este link volta para o topo da página inicial */}
        <Link to="/" className="logo">
          <img src="/assets/img/logo.png" alt="Logo Rocha Tech Solutions" className="logo-img" />
        </Link>
        <button className="menu-toggle" onClick={toggleMenu} aria-label="Abrir menu">
          <span className={`hamburger-icon ${isMenuOpen ? "open" : ""}`}></span>
        </button>
        <nav className={`nav ${isMenuOpen ? "open" : ""}`}>
          <ul className="nav-list" onClick={handleNavClick}>
            {/* Links de âncora (mesma página) usam <a> */}
            <li className="nav-item">
              <a href="/#hero">Início</a>
            </li>
            <li className="nav-item">
              <a href="/#about">Sobre</a>
            </li>
            <li className="nav-item">
              <a href="/#services">Serviços</a>
            </li>

            {/* Link para outra página/rota usa <Link> */}
            <li className="nav-item">
              <Link to="/portfolio">Portfólio</Link>
            </li>

            {/* Link de âncora (mesma página) usa <a> */}
            <li className="nav-item">
              <a href="/#contact">Contato</a>
            </li>
          </ul>
        </nav>
      </div>
    </header>
  );
};

export default Header;

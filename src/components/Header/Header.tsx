import React, { useState } from "react";
// O Link do react-router-dom pode ser removido se você só tiver links internos
// import { Link } from "react-router-dom"; 
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
        {/* Este link para o logo também deve ser um <a> */}
        <a href="/#hero" className="logo">
          <img src="/assets/img/logo.png" alt="Logo Rocha Tech Solutions" className="logo-img" />
        </a>
        <button className="menu-toggle" onClick={toggleMenu} aria-label="Abrir menu">
          <span className={`hamburger-icon ${isMenuOpen ? "open" : ""}`}></span>
        </button>
        <nav className={`nav ${isMenuOpen ? "open" : ""}`}>
          {/* Adicionado o onClick aqui para fechar o menu ao clicar em qualquer link */}
          <ul className="nav-list" onClick={handleNavClick}>
            <li className="nav-item">
              <a href="#hero">Início</a>
            </li>
            <li className="nav-item">
              <a href="#about">Sobre</a>
            </li>
            <li className="nav-item">
              <a href="#services">Serviços</a>
            </li>
            <li className="nav-item">
              <Link to="/portfolio">Portfólio</Limk>
            </li>
            <li className="nav-item">
              <a href="#contact">Contato</a>
            </li>
          </ul>
        </nav>
      </div>
    </header>
  );
};

export default Header;

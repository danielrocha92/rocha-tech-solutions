import React, { useState } from "react";
import { Link } from "react-router-dom";
import "./Header.css";

const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  return (
    <header className="header">
      <div className="header-container">
        <Link to="/#hero" className="logo">
          <img src="/assets/img/logo.png" alt="Logo Rocha Tech Solutions" className="logo-img" />
        </Link>
        <button className="menu-toggle" onClick={toggleMenu} aria-label="Abrir menu">
          <span className={`hamburger-icon ${isMenuOpen ? "open" : ""}`}></span>
        </button>
        <nav className={`nav ${isMenuOpen ? "open" : ""}`}>
          <ul className="nav-list" onClick={() => setIsMenuOpen(false)}>
            <li className="nav-item">
              <Link to="/hero">Início</Link>
            </li>
            <li className="nav-item">
              <Link to="/about">Sobre</Link>
            </li>
            <li className="nav-item">
              <Link to="/services">Serviços</Link>
            </li>
            <li className="nav-item">
              <Link to="/portfolio">Portfólio</Link>
            </li>
            <li className="nav-item">
              <Link to="/contact">Contato</Link>
            </li>
          </ul>
        </nav>
      </div>
    </header>
  );
};

export default Header;
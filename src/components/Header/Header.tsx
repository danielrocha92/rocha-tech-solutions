import React, { useState } from "react";
import { Link } from "react-router-dom";
import "./Header.css";

const Header: React.FC = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const handleMenuToggle = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  const closeMenu = () => setIsMenuOpen(false);

  return (
    <header className="header">
      <div className="header-container">
        <Link to="/" className="logo" onClick={closeMenu}>
          <img
            src="/assets/img/logo.png"
            alt="Rocha Tech Solutions Logo"
            className="logo-img"
          />
        </Link>

        <button
          className="menu-toggle"
          onClick={handleMenuToggle}
          aria-label="Toggle menu"
        >
          <div className={`hamburger-icon ${isMenuOpen ? "open" : ""}`}>
            <span></span>
            <span></span>
          </div>
        </button>

        <nav className={`nav-menu ${isMenuOpen ? "open" : ""}`}>
          <ul className="nav-list">
            <li className="nav-item">
              <Link to="/about" className="nav-link" onClick={closeMenu}>
                Sobre Mim
              </Link>
            </li>
            <li className="nav-item">
              <Link to="/services" className="nav-link" onClick={closeMenu}>
                Serviços
              </Link>
            </li>
            <li className="nav-item">
              <Link to="/portfolio" className="nav-link" onClick={closeMenu}>
                Portfólio
              </Link>
            </li>
            <li className="nav-item">
              <Link
                to="/contact"
                className="nav-link cta-link"
                onClick={closeMenu}
              >
                Contato
              </Link>
            </li>
          </ul>
        </nav>
      </div>
    </header>
  );
};

export default Header;
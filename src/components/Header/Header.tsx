import React, { useState } from 'react';
import './Header.css';

const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const handleMenuToggle = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  return (
    <header className="header">
      <div className="header-container">
        <a href="/" className="logo" onClick={() => setIsMenuOpen(false)}>
          <img src="/assets/img/logo.png" alt="Rocha Tech Solutions Logo" className="logo-img" />
        </a>
        <button className="menu-toggle" onClick={handleMenuToggle} aria-label="Toggle menu">
          <div className={`hamburger-icon ${isMenuOpen ? 'open' : ''}`}>
            <span></span>
            <span></span>
          </div>
        </button>
        <nav className={`nav-menu ${isMenuOpen ? 'open' : ''}`}>
          <ul className="nav-list">
            <li className="nav-item">
              <a href="#sobre" className="nav-link" onClick={handleMenuToggle}>
                Sobre Mim
              </a>
            </li>
            <li className="nav-item">
              <a href="#servicos" className="nav-link" onClick={handleMenuToggle}>
                Serviços
              </a>
            </li>
            <li className="nav-item">
              <a href="#portfolio" className="nav-link" onClick={handleMenuToggle}>
                Portfólio
              </a>
            </li>
            <li className="nav-item">
              <a href="#contato" className="nav-link cta-link" onClick={handleMenuToggle}>
                Contato
              </a>
            </li>
          </ul>
        </nav>
      </div>
    </header>
  );
};

export default Header;
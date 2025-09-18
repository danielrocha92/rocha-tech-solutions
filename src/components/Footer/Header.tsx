import React from 'react';
import './Header.css';

const Header = () => {
  return (
    <header className="header">
      <div className="header-container">
        <a href="#hero" className="logo">
          DR
        </a>
        <nav className="nav-menu">
          <ul className="nav-list">
            <li className="nav-item">
              <a href="#sobre" className="nav-link">
                Sobre Mim
              </a>
            </li>
            <li className="nav-item">
              <a href="#servicos" className="nav-link">
                Serviços
              </a>
            </li>
            <li className="nav-item">
              <a href="#portfolio" className="nav-link">
                Portfólio
              </a>
            </li>
            <li className="nav-item">
              <a href="#contato" className="nav-link cta-link">
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

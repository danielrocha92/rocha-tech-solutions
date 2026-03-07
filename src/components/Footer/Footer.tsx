import React from 'react';
import { Link } from 'react-router-dom';
import { FiGithub, FiLinkedin, FiInstagram, FiMail, FiPhone } from 'react-icons/fi';
import './Footer.css';

const Footer = () => {
  return (
    <footer className="footer-container">
      <div className="footer-content">
        {/* Coluna 1: Marca e Missão */}
        <div className="footer-brand">
          <Link to="/" className="footer-logo">
            Rocha Tech<span>.</span>
          </Link>
          <p className="footer-mission">
            Inteligência Tecnológica e Estratégia de Negócio.
            Transformamos sua presença digital em uma máquina de vendas de alta performance.
          </p>
        </div>

        {/* Coluna 2: Links Rápidos */}
        <div className="footer-links">
          <h3>Navegação</h3>
          <ul>
            <li><Link to="/">Início</Link></li>
            <li><Link to="/about">Nossa Metodologia</Link></li>
            <li><Link to="/portfolio">Portfólio</Link></li>
            <li><Link to="/contact">Contato</Link></li>
          </ul>
        </div>

        {/* Coluna 3: Contatos */}
        <div className="footer-contact">
          <h3>Fale Conosco</h3>
          <ul>
            <li>
              <FiPhone className="footer-icon" />
              <span>(11) 99999-9999</span>
            </li>
            <li>
              <FiMail className="footer-icon" />
              <span>contato@rochatech.com.br</span>
            </li>
          </ul>

          <div className="footer-social">
            <a href="https://github.com/danielrocha92" target="_blank" rel="noopener noreferrer" aria-label="Github">
              <FiGithub />
            </a>
            <a href="https://linkedin.com/in/danielrocha92" target="_blank" rel="noopener noreferrer" aria-label="LinkedIn">
              <FiLinkedin />
            </a>
            <a href="#" target="_blank" rel="noopener noreferrer" aria-label="Instagram">
              <FiInstagram />
            </a>
          </div>
        </div>
      </div>

      {/* Faixa de Direitos Autorais */}
      <div className="footer-bottom">
        <p>&copy; {new Date().getFullYear()} Rocha Tech Solutions. Todos os direitos reservados.</p>
        <p className="footer-dev">
          Feito com <span className="heart">❤</span>
        </p>
      </div>
    </footer>
  );
};

export default Footer;
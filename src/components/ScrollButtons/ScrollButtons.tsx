import React, { useState, useEffect } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faArrowUp } from '@fortawesome/free-solid-svg-icons';
import { faWhatsapp } from '@fortawesome/free-brands-svg-icons';
import './ScrollButtons.css';

const ScrollButtons = () => {
  const [isVisible, setIsVisible] = useState(false);

  // Função para rolar para o topo da página
  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: 'smooth', // Rola suavemente
    });
  };

  // Função para verificar a posição da rolagem e mostrar/esconder o botão
  const toggleVisibility = () => {
    if (window.scrollY > 300) { // Mostra o botão após rolar 300px
      setIsVisible(true);
    } else {
      setIsVisible(false);
    }
  };

  useEffect(() => {
    window.addEventListener('scroll', toggleVisibility);
    return () => {
      window.removeEventListener('scroll', toggleVisibility);
    };
  }, []);

  return (
    <div className="scroll-buttons-container">
      {isVisible && (
        <button
          onClick={scrollToTop}
          className="scroll-to-top"
          aria-label="Voltar ao topo"
        >
          <FontAwesomeIcon icon={faArrowUp} />
        </button>
      )}
      <a
        href="https://api.whatsapp.com/send?phone=5511956190605" // Substitua pelo seu número
        target="_blank"
        rel="noopener noreferrer"
        className="whatsapp-button"
        aria-label="Fale conosco pelo WhatsApp"
      >
        <FontAwesomeIcon icon={faWhatsapp} />
      </a>
    </div>
  );
};

export default ScrollButtons;
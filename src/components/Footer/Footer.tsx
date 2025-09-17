import React from 'react';

const Footer = () => {
  return (
    <footer className="footer">
      <div className="footer-content">
        <p>&copy; {new Date().getFullYear()} Daniel Rocha. Todos os direitos reservados.</p>
      </div>
    </footer>
  );
};

export default Footer;
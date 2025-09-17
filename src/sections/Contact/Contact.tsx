import React from 'react';

const Contact = () => {
  return (
    <section className="contact">
      <div className="contact-container">
        <h2 className="section-title">Vamos Construir Algo Juntos</h2>
        <p>Se você tem um projeto em mente ou apenas quer bater um papo, sinta-se à vontade para me contatar. Estou sempre aberto a novas oportunidades.</p>
        <div className="contact-links">
          <a href="mailto:danielfrocha86@gmail.com" className="contact-link">📧 E-mail</a>
          <a href="https://www.linkedin.com/in/danielrocha92" target="_blank" rel="noopener noreferrer" className="contact-link">💼 LinkedIn</a>
          <a href="https://github.com/danielrocha92" target="_blank" rel="noopener noreferrer" className="contact-link">🐙 GitHub</a>
        </div>
      </div>
    </section>
  );
};

export default Contact;
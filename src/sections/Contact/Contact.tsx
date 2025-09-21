import React from "react";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faEnvelope as fasEnvelope } from '@fortawesome/free-solid-svg-icons';
import { faLinkedinIn, faGithub } from '@fortawesome/free-brands-svg-icons';
import "./Contact.css";

const Contact = () => {
  return (
    <section id="contact" className="contact">
      <div className="contact-container">
        <h2 className="section-title">Vamos Construir Algo Juntos</h2>
        <p>
          Se você tem um projeto em mente ou apenas quer bater um papo,
          sinta-se à vontade para me contatar. Estou sempre aberto a novas
          oportunidades.
        </p>

        <form
          className="contact-form"
          action="https://formspree.io/f/mkgvdowp"
          method="POST"
        >
          <div className="form-group">
            <label htmlFor="name">Seu Nome</label>
            <input type="text" id="name" name="name" required />
          </div>
          <div className="form-group">
            <label htmlFor="email">Seu E-mail</label>
            <input type="email" id="email" name="email" required />
          </div>
          <div className="form-group">
            <label htmlFor="message">Sua Mensagem</label>
            <textarea id="message" name="message" rows={5} required></textarea>
          </div>
          <button type="submit" className="cta">Enviar Mensagem</button>
        </form>

        <div className="social-links">
          <a href="mailto:danielfrocha86@gmail.com" className="contact-link">
            <FontAwesomeIcon icon={fasEnvelope} className="social-icon" /> E-mail
          </a>
          <a
            href="https://www.linkedin.com/in/danielrocha92"
            target="_blank"
            rel="noopener noreferrer"
            className="contact-link"
          >
            <FontAwesomeIcon icon={faLinkedinIn} className="social-icon" /> LinkedIn
          </a>
          <a
            href="https://github.com/danielrocha92"
            target="_blank"
            rel="noopener noreferrer"
            className="contact-link"
          >
            <FontAwesomeIcon icon={faGithub} className="social-icon" /> GitHub
          </a>
        </div>
      </div>
    </section>
  );
};

export default Contact;
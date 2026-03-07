import React from "react";
import "./Contact.css";

const Contact = () => {
  return (
    <section id="contact" className="contact">
      <div className="contact-container">
        <h2 className="section-title">Entre em Contato</h2>
        <p>
          Estamos prontos para transformar sua ideia em um projeto de sucesso. Preencha o formulário abaixo ou entre em contato através de nossos canais.
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
      </div>
    </section>
  );
};

export default Contact;
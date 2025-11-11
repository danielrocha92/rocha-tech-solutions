import React from 'react';
import "./AboutPage.css";

const AboutPage = () => {
  return (
    <section className="about-me" id="about">
      <div className="about-content">
        <h2 className="section-title">Sobre Mim</h2>
        <p>Olá, eu sou Daniel Rocha! Desenvolvedor web com uma paixão por criar experiências digitais que não apenas funcionam, mas que também encantam. Minha jornada no mundo da programação começou com o fascínio por transformar linhas de código em interfaces visuais e funcionais. Trabalho com foco em <strong>performance, design responsivo e as melhores práticas do mercado</strong>, utilizando um stack de <strong>tecnologias modernas</strong>. Acredito que o bom código é aquele que gera valor real, resolvendo problemas complexos e tornando a vida das pessoas mais fácil.</p>
      </div>
      <div className="about-image">
        <img src="/assets/img/profile.jpeg" alt="Foto profissional de Daniel Rocha" />
      </div>
    </section>
  );
};

export default AboutPage;

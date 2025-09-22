import React from 'react';
import "./About.css";

const About = () => {
  return (
    <section className="about-me" id="about">
      <div className="about-content">
        <h2 className="section-title">Sobre Mim</h2>
        <p>Sou desenvolvedor web com uma paixão por criar experiências digitais que não apenas funcionam, mas que também encantam. Minha jornada no mundo da programação começou com o fascínio por transformar linhas de código em interfaces visuais e funcionais. Trabalho com foco em **performance, design responsivo e as melhores práticas do mercado**, utilizando um stack de tecnologias modernas como **React, Node.js e Firebase**. Tenho uma crença forte de que o bom código é aquele que gera valor real, resolvendo problemas complexos e tornando a vida das pessoas mais fácil.</p>
      </div>
      <div className="about-image">
        <img src="/assets/img/profile.jpeg" alt="Foto profissional de Daniel Rocha" />
      </div>
    </section>
  );
};

export default About;

import React from 'react';
import "./About.css";

const About = () => {
  return (
    <section className="about-me" id="about">
      <div className="about-content">
        <h2 className="section-title">Sobre Nós</h2>
        <p>A RochaTech Solutions nasceu da paixão por tecnologia e do desejo de transformar ideias em soluções digitais de alto impacto. Somos uma equipe de especialistas dedicados a criar sites, e-commerces e aplicações web que não apenas atendem, mas superam as expectativas. Nosso compromisso é com a excelência técnica, o design focado no usuário e a entrega de resultados mensuráveis para nossos clientes. Acreditamos que a tecnologia, quando bem aplicada, é a chave para o crescimento e o sucesso de qualquer negócio.</p>
      </div>
      <div className="about-image">
        <img src="/assets/img/profile.jpeg" alt="Equipe da RochaTech Solutions" />
      </div>
    </section>
  );
};

export default About;
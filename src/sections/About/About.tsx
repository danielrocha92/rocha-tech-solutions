import React from 'react';
import { FiBriefcase, FiTrendingUp } from 'react-icons/fi';
import { FaRocket } from 'react-icons/fa';
import "./About.css";

const About = () => {
  return (
    <div className="about-section-container" id="about">
      {/* Seção de Introdução */}
      <section className="about-intro-section">
        <h2 className="section-title">Inteligência Tecnológica <br /> e Estratégia de Negócio</h2>
        <div className="about-intro-content">
          <p>
            A Rocha Tech Solutions nasceu da união entre a paixão pela tecnologia de alto desempenho e a precisão da estratégia financeira. Acreditamos que uma solução digital de impacto não se resume a um código impecável, mas sim a uma ferramenta que impulsiona o crescimento real e sustentável de um negócio.
          </p>
          <p>
            Somos uma equipe de especialistas dedicados a criar ecossistemas digitais — de sites institucionais a aplicações web complexas e e-commerces — que superam expectativas técnicas e estratégicas. Nosso diferencial reside na convergência de duas frentes fundamentais:
          </p>
          <ul className="intro-list">
            <li>
              <strong>Excelência em Engenharia de Software:</strong> Desenvolvimento focado em performance, design responsivo e código limpo, utilizando stacks modernas para garantir agilidade e escalabilidade.
            </li>
            <li>
              <strong>Consultoria e Inteligência de Gestão:</strong> Aplicação de metodologias como o PDCA e rigor contábil para garantir que cada solução tecnológica esteja alinhada à saúde financeira e à conformidade operacional dos nossos clientes.
            </li>
          </ul>
          <p className="intro-highlight">
            Na Rocha Tech Solutions, transformamos ideias em ativos digitais mensuráveis. Nosso compromisso é entregar tecnologia que resolve problemas complexos e inteligência que suporta a tomada de decisão executiva, tornando-se a chave definitiva para o sucesso do seu negócio.
          </p>
        </div>
      </section>

      {/* Seção da Equipe */}
      <section className="team-section">
        <h2 className="section-title">Nossa Equipe</h2>
        <div className="team-grid">

          {/* Daniel Rocha */}
          <div className="team-card">
            <div className="team-image-container">
              <img src="/assets/img/profile.jpeg" alt="Daniel Rocha" />
            </div>
            <div className="team-info">
              <h3 className="team-name">Daniel Rocha</h3>
              <span className="team-role">Desenvolvedor Full Stack & Engenheiro de Software</span>
              <p className="team-bio">
                "Desenvolvedor web com uma paixão por criar experiências digitais que não apenas funcionam, mas que também encantam. Minha jornada no mundo da programação começou com o fascínio por transformar linhas de código em interfaces visuais e funcionais. Trabalho com foco em performance, design responsivo e as melhores práticas do mercado, utilizando um stack de tecnologias modernas. Acredito que o bom código é aquele que gera valor real, resolvendo problemas complexos e tornando a vida das pessoas mais fácil."
              </p>
            </div>
          </div>

          {/* Larissa Rocha */}
          <div className="team-card">
            <div className="team-image-container">
              <img src="/assets/img/profile-larissa.jpg" alt="Larissa Rocha" />
            </div>
            <div className="team-info">
              <h3 className="team-name">Larissa Rocha</h3>
              <span className="team-role">Consultora de Gestão, Controladoria & Analista Contábil</span>
              <p className="team-bio">
                "Especialista em Controladoria e Gestão com sólida vivência na aplicação do método PDCA para otimização de processos e resultados organizacionais. Minha atuação une a precisão técnica da Contabilidade (FMU) com a visão estratégica da Gestão Comercial (UNINOVE), permitindo conectar operações de negócio a indicadores financeiros precisos. Na Rocha Tech Solutions, foco meu trabalho na melhoria contínua, conformidade e no suporte analítico indispensável para a tomada de decisão executiva e o crescimento sustentável de nossos clientes."
              </p>
            </div>
          </div>

        </div>
      </section>

      {/* Seção Por Que Escolher */}
      <section className="why-us-section">
        <div className="why-us-header">
          <h2 className="section-title">Por que escolher a Rocha Tech Solutions?</h2>
          <p className="why-us-subtitle">Acreditamos que o sucesso de um produto digital vai além do código, ele precisa de uma estrutura de gestão sólida e processos eficientes para gerar resultados mensuráveis.</p>
        </div>

        <div className="features-grid">
          <div className="feature-card">
            <div className="feature-icon"><FaRocket /></div>
            <h4 className="feature-title">Excelência Técnica</h4>
            <p className="feature-desc">Desenvolvimento focado em performance e design centrado no usuário.</p>
          </div>

          <div className="feature-card">
            <div className="feature-icon"><FiBriefcase /></div>
            <h4 className="feature-title">Visão de Negócio</h4>
            <p className="feature-desc">Consultoria integrada que garante que sua solução digital esteja alinhada à saúde financeira e operacional da empresa.</p>
          </div>

          <div className="feature-card">
            <div className="feature-icon"><FiTrendingUp /></div>
            <h4 className="feature-title">Resultados Reais</h4>
            <p className="feature-desc">Transformamos ideias em ferramentas que resolvem problemas e escalam negócios.</p>
          </div>
        </div>
      </section>

    </div>
  );
};

export default About;
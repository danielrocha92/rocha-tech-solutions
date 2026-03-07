import React from 'react';
import { Helmet } from 'react-helmet-async';
import { FiMail, FiPhone, FiMapPin, FiMessageCircle } from 'react-icons/fi';
import './ContactPage.css';

const ContactPage = () => {
    return (
        <div className="contact-page fade-in">
            <Helmet>
                <title>Contato | Rocha Tech Solutions</title>
                <meta name="description" content="Fale conosco para transformar seu negócio com a tecnologia correta. Solicite um orçamento ou tire suas dúvidas." />
            </Helmet>

            {/* Hero Section do Contato */}
            <section className="contact-hero">
                <h1 className="contact-hero-title">Vamos Construir o <span>Futuro</span></h1>
                <p className="contact-hero-subtitle">
                    Tem um projeto em mente ou precisa de uma consultoria técnica? Nossa equipe está pronta para impulsionar sua ideia com inteligência e escala técnica.
                </p>
            </section>

            <section className="contact-main">
                <div className="contact-grid">

                    {/* Coluna 1: Informações e Mapa */}
                    <div className="contact-info-col">
                        <div className="contact-card">
                            <h3>Informações de Contato</h3>
                            <p className="contact-desc">
                                Sinta-se à vontade para nos chamar em qualquer um dos canais abaixo. Retornaremos o mais rápido possível.
                            </p>

                            <ul className="info-list">
                                <li>
                                    <div className="info-icon"><FiMail /></div>
                                    <div className="info-text">
                                        <strong>E-mail Direto</strong>
                                        <a href="mailto:rochatechsolutions86@gmail.com">rochatechsolutions86@gmail.com</a>
                                    </div>
                                </li>
                                <li>
                                    <div className="info-icon whatsapp-icon"><FiMessageCircle /></div>
                                    <div className="info-text">
                                        <strong>WhatsApp Profissional</strong>
                                        {/* Substitua 5511999999999 pelo número real sem espaços/símbolos */}
                                        <a href="https://wa.me/5511999999999" target="_blank" rel="noopener noreferrer">Iniciar Conversa Segura</a>
                                    </div>
                                </li>
                                <li>
                                    <div className="info-icon"><FiMapPin /></div>
                                    <div className="info-text">
                                        <strong>Localização</strong>
                                        <span>São Paulo, SP - Brasil (Atendimento Global)</span>
                                    </div>
                                </li>
                            </ul>
                        </div>

                        {/* Mapa (Iframe Google Maps - Focado em SP como Exemplo de Base) */}
                        <div className="map-container">
                            <iframe
                                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3657.1974797184294!2d-46.658632624465494!3d-23.561332061611394!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x94ce59c8da0aa315%3A0xd59f9431f2c9776a!2sAv.%20Paulista%20-%20S%C3%A3o%20Paulo%2C%20SP!5e0!3m2!1spt-BR!2sbr!4v1709432490520!5m2!1spt-BR!2sbr"
                                width="100%"
                                height="100%"
                                style={{ border: 0 }}
                                allowFullScreen={false}
                                loading="lazy"
                                referrerPolicy="no-referrer-when-downgrade"
                                title="Google Maps Location"
                            ></iframe>
                        </div>
                    </div>

                    {/* Coluna 2: Formulário via FormSubmit */}
                    <div className="contact-form-col">
                        <div className="form-wrapper">
                            <h3>Envie uma Mensagem</h3>
                            {/* FormSubmit.co apontando exatamente para o email solicitado */}
                            <form
                                action="https://formsubmit.co/rochatechsolutions86@gmail.com"
                                method="POST"
                                className="full-form"
                            >
                                {/* Configurações FormSubmit Internas */}
                                <input type="hidden" name="_subject" value="Novo Lead: Contato pelo site Rocha Tech!" />
                                <input type="hidden" name="_captcha" value="false" />
                                <input type="hidden" name="_template" value="box" />
                                {/* Você pode direcionar pra uma pagina de sucesso caso crie uma, ou ele usa a do formsubmit */}

                                <div className="input-group">
                                    <label htmlFor="name">Seu Nome *</label>
                                    <input type="text" id="name" name="name" placeholder="Como devemos chamá-lo?" required />
                                </div>

                                <div className="input-row">
                                    <div className="input-group">
                                        <label htmlFor="email">E-mail Profissional *</label>
                                        <input type="email" id="email" name="email" placeholder="nome@empresa.com.br" required />
                                    </div>
                                    <div className="input-group">
                                        <label htmlFor="phone">Telefone / WhatsApp</label>
                                        <input type="tel" id="phone" name="phone" placeholder="(11) 90000-0000" />
                                    </div>
                                </div>

                                <div className="input-group">
                                    <label htmlFor="service">Área de Interesse *</label>
                                    <select id="service" name="service" required defaultValue="">
                                        <option value="" disabled>Selecione um tópico...</option>
                                        <option value="Desenvolvimento Web">Desenvolvimento de Software / WebApp</option>
                                        <option value="E-commerce">Projeto E-commerce B2B/B2C</option>
                                        <option value="Consultoria">Consultoria e Estratégia Tecnológica</option>
                                        <option value="Outro">Outro Assunto</option>
                                    </select>
                                </div>

                                <div className="input-group">
                                    <label htmlFor="message">Sobre seu Projeto *</label>
                                    <textarea id="message" name="message" rows={5} placeholder="Descreva os desafios atuais e o objetivo do novo projeto..." required></textarea>
                                </div>

                                <button type="submit" className="submit-btn">
                                    Enviar Mensagem <FiMail className="btn-icon" />
                                </button>
                            </form>
                        </div>
                    </div>

                </div>
            </section>
        </div>
    );
};

export default ContactPage;

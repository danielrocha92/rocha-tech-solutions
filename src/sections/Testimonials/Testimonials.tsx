import React from 'react';
import './Testimonials.css';

const Testimonials: React.FC = () => {
  return (
    <section id="testimonials">
      <div className="container">
        <h2>O que nossos clientes dizem</h2>
        <div className="testimonials-wrapper">
          <div className="testimonial">
          <div className="testimonial-header">
            <img src="/assets/img/zero20garage.jpeg" alt="Zero 20 Garage" className="testimonial-author-img" />
            <div className="testimonial-author">
              <h3>Zero 20 Garage</h3>
              <div className="testimonial-rating">
                <span>5,0</span>
                <span className="stars">★★★★★</span>
              </div>
            </div>
          </div>
          <p className="testimonial-text">"Muito bom ter um profissional tão atensioso, que nos ouviu e entendeu nossas necessidades na hora da criação do nosso site. O resultado ficou muito moderno e funcional, a RochaTech nos proporcionou além de uma visibilidade maior e profissional, um meio de gestão de um processo bem importante no site da nossa empresa. Recomendamos muito, fizeram um excelente trabalho."</p>
          <div className="testimonial-images">
            <img src="/assets/img/zero20-1.png" alt="Foto 1 da avaliação de Zero 20 Garage" />
            <img src="/assets/img/zero20-2.png" alt="Foto 2 da avaliação de Zero 20 Garage" />
          </div>
        </div>
        </div>
      </div>
    </section>
  );
};

export default Testimonials;

import React from 'react';
import { FiStar } from 'react-icons/fi';
import { FaQuoteLeft } from 'react-icons/fa';
import './Testimonials.css';

const Testimonials: React.FC = () => {
  return (
    <section id="testimonials" className="testimonials-section">
      <div className="container">
        <h2 className="section-title">
          O que nossos <span>clientes dizem</span>
        </h2>

        <div className="testimonials-wrapper">
          <div className="testimonial-card glassmorphism">
            <div className="testimonial-quote-icon">
              <FaQuoteLeft />
            </div>

            <p className="testimonial-text">
              "Muito bom ter um profissional tão atencioso, que nos ouviu e entendeu nossas necessidades na hora da criação do nosso site. O resultado ficou muito moderno e funcional, a RochaTech nos proporcionou além de uma visibilidade maior e profissional, um meio de gestão de um processo bem importante no site da nossa empresa. Recomendamos muito, fizeram um excelente trabalho."
            </p>

            <div className="testimonial-images">
              <img src="/assets/img/zero20-1.png" alt="Foto 1 da avaliação" className="hover-expand" />
              <img src="/assets/img/zero20-2.png" alt="Foto 2 da avaliação" className="hover-expand" />
            </div>

            <div className="testimonial-footer">
              <div className="testimonial-author-wrapper">
                <div className="testimonial-author-img-box">
                  <img src="/assets/img/zero20garage.jpeg" alt="Zero 20 Garage" className="testimonial-author-img" />
                </div>
                <div className="testimonial-author-info">
                  <h3>Zero 20 Garage</h3>
                  <div className="testimonial-rating">
                    <span className="rating-score">5.0</span>
                    <div className="stars">
                      <FiStar className="star-icon filled" />
                      <FiStar className="star-icon filled" />
                      <FiStar className="star-icon filled" />
                      <FiStar className="star-icon filled" />
                      <FiStar className="star-icon filled" />
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Testimonials;

import React from 'react';
import { FiStar } from 'react-icons/fi';
import { FaQuoteLeft } from 'react-icons/fa';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Pagination, Navigation, Autoplay } from 'swiper/modules';

import 'swiper/css';
import 'swiper/css/pagination';
import 'swiper/css/navigation';
import './Testimonials.css';

// Interface para estruturar os dados do depoimento
interface Testimonial {
  id: number;
  text: string;
  images?: { src: string; alt: string }[];
  authorImg: string;
  authorName: string;
  authorRole?: string;
  rating: number;
}

const testimonialsData: Testimonial[] = [
  {
    id: 1,
    text: "Muito bom ter um profissional tão atencioso, que nos ouviu e entendeu nossas necessidades na hora da criação do nosso site. O resultado ficou muito moderno e funcional, a RochaTech nos proporcionou além de uma visibilidade maior e profissional, um meio de gestão de um processo bem importante no site da nossa empresa. Recomendamos muito, fizeram um excelente trabalho.",
    images: [
      { src: "/assets/img/zero20-1.png", alt: "Foto 1 da avaliação" },
      { src: "/assets/img/zero20-2.png", alt: "Foto 2 da avaliação" }
    ],
    authorImg: "/assets/img/zero20garage.jpeg",
    authorName: "Zero 20 Garage",
    authorRole: "Oficina Especializada",
    rating: 5.0
  },
  {
    id: 2,
    text: "A entrega superou totalmente nossas expectativas. O layout moderno e focado na jornada do usuário aumentou significativamente as conversões e orçamentos pelo site. Profissionalismo e técnica impecáveis desde o início.",
    authorImg: "/assets/img/critel-tecnologia.jpg",
    authorName: "Critel Tecnologia",
    authorRole: "Infraestrutura de TI",
    rating: 5.0
  },
  {
    id: 3,
    text: "Trabalho excepcional de design e programação. Conseguiram traduzir exatamente a identidade visual que buscávamos, criando uma plataforma elegante e super rápida de navegar. Recomendo de olhos fechados!",
    authorImg: "/assets/img/mao-de-cera-oficial/Captura de tela 2025-11-17 020407.png",
    authorName: "Mão de Cera Oficial",
    authorRole: "Produtos Artesanais",
    rating: 5.0
  }
];

const Testimonials: React.FC = () => {
  return (
    <section id="testimonials" className="testimonials-section">
      <div className="container">
        <h2 className="section-title">
          O que nossos <span>clientes dizem</span>
        </h2>

        <div className="testimonials-wrapper">
          <Swiper
            modules={[Pagination, Navigation, Autoplay]}
            spaceBetween={30}
            slidesPerView={1}
            pagination={{ clickable: true, dynamicBullets: true }}
            navigation={true}
            autoplay={{
              delay: 7000,
              disableOnInteraction: false,
            }}
            loop={true}
            className="testimonials-swiper"
          >
            {testimonialsData.map((testimonial) => (
              <SwiperSlide key={testimonial.id}>
                <div className="testimonial-card glassmorphism">
                  <div className="testimonial-quote-icon">
                    <FaQuoteLeft />
                  </div>

                  <p className="testimonial-text">
                    "{testimonial.text}"
                  </p>

                  {testimonial.images && testimonial.images.length > 0 && (
                    <div className="testimonial-images">
                      {testimonial.images.map((img, index) => (
                        <img 
                          key={index} 
                          src={img.src} 
                          alt={img.alt} 
                          className="hover-expand" 
                          loading="lazy"
                        />
                      ))}
                    </div>
                  )}

                  <div className="testimonial-footer">
                    <div className="testimonial-author-wrapper">
                      <div className="testimonial-author-img-box">
                        {testimonial.authorImg.includes("Captura de tela") ? (
                          <div style={{ width: '100%', height: '100%', borderRadius: '50%', background: '#fff', display: 'flex', alignItems: 'center', justifyContent: 'center', border: '2px solid var(--background-tertiary)' }}>
                            <span style={{ fontSize: '1.8rem', color: 'var(--brand-primary)', fontWeight: 'bold' }}>M</span>
                          </div>
                        ) : (
                          <img 
                            src={testimonial.authorImg} 
                            alt={testimonial.authorName} 
                            className="testimonial-author-img" 
                            loading="lazy"
                          />
                        )}
                      </div>
                      <div className="testimonial-author-info">
                        <h3>{testimonial.authorName}</h3>
                        {testimonial.authorRole && (
                          <span className="testimonial-author-role">{testimonial.authorRole}</span>
                        )}
                        <div className="testimonial-rating">
                          <span className="rating-score">{testimonial.rating.toFixed(1)}</span>
                          <div className="stars">
                            {[...Array(5)].map((_, i) => (
                              <FiStar key={i} className="star-icon filled" />
                            ))}
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </SwiperSlide>
            ))}
          </Swiper>
        </div>
      </div>
    </section>
  );
};

export default Testimonials;

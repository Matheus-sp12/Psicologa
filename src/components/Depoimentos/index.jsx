// src/components/Carroussel.js
import React, { useState, useEffect } from 'react';
import Slider from 'react-slick';
import './styles.scss';
import { div } from 'framer-motion/client';

const reviews = [
  {
    id: 1,
    name: 'João Silva',
    photo: 'https://randomuser.me/api/portraits/men/1.jpg',
    rating: 5,
    testimonial: 'A consulta foi excelente, me senti muito acolhido e seguro!',
  },
  {
    id: 2,
    name: 'Maria Oliveira',
    photo: 'https://randomuser.me/api/portraits/women/2.jpg',
    rating: 4,
    testimonial: 'Muito atenciosa, me ajudou a entender melhor minhas questões pessoais.',
  },
  {
    id: 3,
    name: 'Carlos Souza',
    photo: 'https://randomuser.me/api/portraits/men/3.jpg',
    rating: 3,
    testimonial: 'Foi uma boa experiência, mas sinto que preciso de mais sessões.',
  },
  {
    id: 4,
    name: 'Ana Costa',
    photo: 'https://randomuser.me/api/portraits/women/4.jpg',
    rating: 5,
    testimonial: 'Incrível! Me ajudou a superar vários bloqueios emocionais.',
  },
];

const Depoimentos = () => {
  const [currentIndex, setCurrentIndex] = useState(0);

  const settings = {
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
    autoplay: true, // Avanço automático
    autoplaySpeed: 5000, // Intervalo de 5 segundos
    focusOnSelect: true,
    afterChange: (index) => setCurrentIndex(index), // Atualiza o índice ao mudar o slide
    swipe: true, // Permite o deslizar com o mouse ou toque
    touchThreshold: 10, // Sensibilidade do toque para dispositivos móveis
    dots: true, // Exibe os indicadores de bolinhas
    responsive: [
      {
        breakpoint: 768, // Para telas menores (celulares)
        settings: {
          arrows: false, // Desativa as setas em telas menores
        },
      },
    ],
  };

  const renderStars = (rating) => {
    return [...Array(5)].map((_, index) => (
      <span key={index} className={index < rating ? 'star filled' : 'star'}>
        ★
      </span>
    ));
  };

  return (
    <div  className="bcack" id="depoimentos">
    <div className="carroussel-container">
      {/* Título e descrição */}
      <div className="section-title">
        <h2>Veja o que nossos pacientes têm a dizer</h2>
        <p>Confira os depoimentos de quem já passou pela consulta e como o atendimento transformou suas vidas.</p>
      </div>

      <Slider {...settings}>
        {reviews.map((review, index) => (
          <div className="review-card" key={review.id}>
            <img src={review.photo} alt={review.name} className="photo" />
            <div className="info">
              <h3>{review.name}</h3>
              <div className="rating">{renderStars(review.rating)}</div>
              <p className="testimonial">{review.testimonial}</p>
            </div>
          </div>
        ))}
      </Slider>
    </div>
    </div>
  );
};

export default Depoimentos;

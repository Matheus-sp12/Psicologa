import React from 'react';
import './styles.scss';
import imgBeneficios from '../../assets/beneficios/img1.jpg'; // Ajuste conforme necessário
import img2 from '../../assets/beneficios/img2.jpg'; // Ajuste conforme necessário
import img3 from '../../assets/beneficios/img3.svg'; // Ajuste conforme necessário


const Beneficio = () => {
  return (
    <div className="beneficio" id="beneficios">
      <section className="beneficios">
        <div className="text">
          <h3>Benefícios da Psicoterapia</h3>
          <ul>
            <li>Superação de Traumas</li>
            <li>Segurança nas decisões</li>
            <li>Ressignificação de crenças</li>
            <li>Aumento do Autoestima</li>
            <li>Autoconhecimento</li>
            <li>Empoderamento</li>
            <li>Autonomia</li>
            <li>Melhoria nos relacionamentos</li>
            <li>Conexão e regulação de emoções</li>
            <li>Melhora da atenção, foco e memória</li>
            <li>Constância no processo de emagrecimento</li>
          </ul>
        </div>
        <div className="image">
          <img src={imgBeneficios} alt="Benefícios da Psicoterapia" />
        </div>
      </section>

      <section className="apostilas">
        <div className="image">
          <img src={img2} alt="Apostilas" />
        </div>
        <div className="text">
          <h3>Apostilas</h3>
          <p>Em algumas sessões dos atendimentos presenciais eu disponibilizo recursos psicoterapêuticos para você utilizar em seu dia-a-dia.</p>
        </div>
      </section>

      <section className="como-funciona">
        <div className="text">
          <h3>Como funciona meu trabalho?</h3>
          <p>Meu objetivo é ajudar você a lidar com questões que estejam te trazendo desconforto, atrapalhando seu bem-estar. Vamos trabalhar juntos para lidar com os desafios.</p>
          <p>Na primeira parte do atendimento eu vou te ouvir, conhecer suas queixas e o que te motivou a me procurar. Após isso, vamos trabalhar em conjunto com um plano terapêutico para enfrentar os desafios.</p>
        </div>
        <div className="image img3">
          <img src={img3} alt="Como funciona o trabalho" />
        </div>
      </section>
    </div>
  );
};

export default Beneficio;

import React from 'react';
import { FaWhatsapp } from "react-icons/fa";
import './styles.scss';
import imgmobile from '../../assets/banner/mobile-img.svg'

const Banner = () => {
  return (
    <div className="banner" id="home">
        <img src={imgmobile} className='mobile-img' alt="" />

      <div className='banner-content'>
        <h3>Priorize sua saúde mental e tenha uma vida mais leve</h3>
        <p>Meu trabalho é ajudar você no processo de autoconhecimento.</p>
        <p>Quanto mais você se olhar para dentro, mais você se abastece de si e mais você consegue transbordar o seu melhor para o mundo.</p>
        <p>Cuide de você. Priorize-se.</p>

      </div>
      
      <a
  href="https://wa.me/5511986427140?text=Bom%20dia,%20tudo%20bem?%20Gostaria%20de%20saber%20mais%20sobre%20a%20consulta?"
  className="agendar-sessao"
  target="_blank"
  rel="noopener noreferrer"
>
  Agendar Sessão <FaWhatsapp className="whatsapp-icon" />
</a>

    </div>
  );
}

export default Banner;

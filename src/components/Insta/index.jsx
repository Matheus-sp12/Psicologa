import React from "react";
import "./styles.scss";
import img from "../../assets/mobi.svg";
import { FaInstagram } from "react-icons/fa";

const RedesSociais = ({ imagePath }) => {
  return (
    <div className="container">
    <div className="social-container">
      <div className="social-image">
        <img src={img} alt="Instagram" />
      </div>
      <div className="social-text">
        <h2>Me encontre nas <br /> <span>Redes Sociais</span></h2>
        <p>
          Você pode me encontrar também nas redes sociais, pelo perfil do
          Instagram <strong>@omatheus.dev</strong> e conferir mais sobre o meu trabalho.
        </p>
        <a href="https://www.instagram.com/omatheus.dev/" target="_blank" rel="noopener noreferrer" className="instagram-btn">
          <FaInstagram /> Instagram →
        </a>
      </div>
      </div>
    </div>
  );
};

export default RedesSociais;
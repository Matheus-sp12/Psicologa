import React from 'react'
import psicoterapia from '../../assets/beneficios/dr.png'
import './style.scss'
import { FaWhatsapp } from "react-icons/fa";



const Agende = () => {
  return (
    <div className="agendamento" id="services">
    <div className="content">
      <h2>Como funciona o agendamento?</h2>
      <div className="steps">
        <div className="step">
          <span className="number">1</span>
          <div className="text">
            <h3>Entre em contato pelo Whatsapp</h3>
            <p>Estou pronta para atender você e explicar todos os detalhes.</p>
          </div>
        </div>
        <div className="step">
          <span className="number">2</span>
          <div className="text">
            <h3>Agendamento de Sessão on-line ou presencial</h3>
            <p>Escolha o melhor horário e agende sua sessão presencial ou on-line com todo o suporte.</p>
          </div>
        </div>
        <div className="step">
          <span className="number">3</span>
          <div className="text">
            <h3>Prontinho, sua sessão está agendada</h3>
            <p>Abordagem proativa, focada no presente e orientada para a solução de problemas e alívio de sintomas.</p>
          </div>
        </div>
      </div>
      <a
  href="https://wa.me/5511986427140?text=Bom%20dia,%20tudo%20bem?%20Gostaria%20de%20saber%20mais%20sobre%20a%20consulta?"
  className="btn"
  target="_blank"
  rel="noopener noreferrer"
>
  Agendar Sessão <FaWhatsapp className="whatsapp-icon" />
</a>
    </div>
    <img src={psicoterapia} alt="Profissional" className="image"/>
  </div>

  )
}

export default Agende;
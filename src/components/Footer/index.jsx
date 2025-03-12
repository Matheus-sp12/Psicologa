import React, { useState } from "react";
import "./styles.scss";
import { FaMapMarkerAlt, FaEnvelope, FaPhone, FaCheckCircle } from "react-icons/fa";

const Contato = () => {
  const [formData, setFormData] = useState({
    nome: "",
    telefone: "",
    email: "",
    mensagem: "",
  });

  const [mensagemEnviada, setMensagemEnviada] = useState(false);

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    // Simula o envio e exibe a mensagem de sucesso
    setMensagemEnviada(true);

    // Limpa o formulário após o envio
    setFormData({
      nome: "",
      telefone: "",
      email: "",
      mensagem: "",
    });

    // Remove a mensagem após alguns segundos
    setTimeout(() => {
      setMensagemEnviada(false);
    }, 3000);
  };

  return (
    <div className="contato-container" id="contact">
      <div className="formulario">
        <h2>Me envie uma mensagem</h2>
        
        {mensagemEnviada && (
          <div className="mensagem-sucesso">
            <FaCheckCircle />
            <p>Mensagem enviada com sucesso!</p>
          </div>
        )}

        <form onSubmit={handleSubmit}>
          <input type="text" name="nome" placeholder="Nome" value={formData.nome} onChange={handleChange} required />
          <div className="input-group">
            <input type="text" name="telefone" placeholder="Telefone" value={formData.telefone} onChange={handleChange} required />
            <input type="email" name="email" placeholder="E-mail" value={formData.email} onChange={handleChange} required />
          </div>
          <textarea name="mensagem" placeholder="Mensagem" value={formData.mensagem} onChange={handleChange} required />
          <button type="submit">Enviar</button>
        </form>
      </div>

      <div className="contatos">
        <h3>Locais de Atendimento</h3>
        <p><FaMapMarkerAlt /> São Paulo </p>
        <p><FaMapMarkerAlt /> Osasco</p>
        <p><FaMapMarkerAlt /> São Bernado</p>
        <p><FaMapMarkerAlt /> Santo Amaro</p>

        <h3>Email</h3>
        <p><FaEnvelope /> email@psi.com.br</p>

        <h3>Telefone</h3>
        <p><FaPhone /> (99) 99999-9999</p>
      </div>
    </div>
  );
};

export default Contato;

import { useState, useEffect, useRef } from "react";
import "./styles.scss";
import img1 from "../../assets/logo2.svg"; // Ajuste conforme necessário

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);

  const navbarRef = useRef(null);
  const menuBtnRef = useRef(null);

  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };

  const closeMenu = () => {
    setIsOpen(false);
  };

  // Função para fechar o menu quando o usuário clicar fora
  const handleClickOutside = (event) => {
    if (
      navbarRef.current &&
      !navbarRef.current.contains(event.target) &&
      !menuBtnRef.current.contains(event.target)
    ) {
      setIsOpen(false); // Fecha o menu
    }
  };

  useEffect(() => {
    document.addEventListener("mousedown", handleClickOutside);
    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, []);

  // Função para rolar para a seção correta e fechar o menu
  const handleLinkClick = (event) => {
    // Impede o comportamento padrão de navegação
    event.preventDefault();
  
    // Rola até a seção
    const targetId = event.target.getAttribute("href").substring(1); // Remove o '#' do link
    const targetElement = document.getElementById(targetId);
  
    if (targetElement) {
      window.scrollTo({
        top: targetElement.offsetTop,
        behavior: "smooth", // Rolagem suave
      });
    }
  
    closeMenu(); // Fecha o menu após o clique
  };

  return (
    <header>
      {/* Botão do menu hambúrguer, visível apenas quando o menu está fechado */}
      <button
        className={`menu-btn ${isOpen ? "hidden" : ""}`}
        onClick={toggleMenu}
        aria-label="Abrir menu"
        ref={menuBtnRef}
      >
        &#9776; {/* ícone de menu hambúrguer */}
      </button>

      {/* Navbar lateral */}
      <nav className={`navbar ${isOpen ? "active" : ""}`} ref={navbarRef}>
        <div className="logo">
          <img src={img1} alt="Logo" loading="lazy" />
        </div>
        <button
          className="close-btn"
          onClick={closeMenu}
          aria-label="Fechar menu"
        >
          &times; {/* ícone de fechar */}
        </button>
        <ul className="navbar-list">
          <li><a href="#home" onClick={handleLinkClick}>Inicio</a></li>
          <li><a href="#about" onClick={handleLinkClick}>Quando buscar</a></li>
          <li><a href="#services" onClick={handleLinkClick}>Agendamento</a></li>
          <li><a href="#sobre" onClick={handleLinkClick}>Sobre</a></li>
          <li><a href="#depoimentos" onClick={handleLinkClick}>Depoimentos</a></li>
          <li><a href="#servicos" onClick={handleLinkClick}>Serviços</a></li>
          <li><a href="#beneficios" onClick={handleLinkClick}>Benefícios</a></li>
          <li><a href="#quest" onClick={handleLinkClick}>Perguntas</a></li>
          <li><a href="#contact" onClick={handleLinkClick}>Contato</a></li>
        </ul>
      </nav>

      {/* Navbar superior */}
      <div className="top-navbar">
        <div className="logo">
          <img src={img1} alt="Logo" loading="lazy" />
        </div>
        <ul className="top-navbar-list">
          <li><a href="#home" onClick={handleLinkClick}>Inicio</a></li>
          <li><a href="#about" onClick={handleLinkClick}>Quando buscar</a></li>
          <li><a href="#services" onClick={handleLinkClick}>Agendamento</a></li>
          <li><a href="#sobre" onClick={handleLinkClick}>Sobre</a></li>
          <li><a href="#depoimentos" onClick={handleLinkClick}>Depoimentos</a></li>
          <li><a href="#servicos" onClick={handleLinkClick}>Serviços</a></li>
          <li><a href="#beneficios" onClick={handleLinkClick}>Benefícios</a></li>
          <li><a href="#contact" onClick={handleLinkClick}>Contato</a></li>
        </ul>
      </div>
    </header>
  );
};

export default Navbar;

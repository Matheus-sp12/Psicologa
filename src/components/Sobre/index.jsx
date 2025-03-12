import "./style.scss";
import profileImage from "../../assets/sobre.svg"; // Caminho da imagem
import { div } from "framer-motion/client";

export default function Sobre() {
  return (
    <div className="teste" id="sobre">
        <h2>Sobre mim</h2>
  

    <div className="sobre-mim-container">
      <div className="sobre-mim-card">
        <div className="sobre-mim-content">
          
          <div className="image-container">
            <img src={profileImage} alt="Perfil" className="profile-image" />
          </div>
          <div className="text-content">
          
            <p>
              Me chamo Maria, tenho 27 anos. Nasci na cidade de São paulo. Atualmente atuo como Psicóloga e
              Neuropsicóloga, atendo crianças e adultos.
            </p>
            <p>
              Sou especialista em Terapia Cognitivo Comportamental. Estou sempre buscando novos conhecimentos, confira um
              pouco sobre minhas formações:
            </p>
            <ul>
              <li>Psicologia</li>
              <li>Gestão de Recursos Humanos</li>
              <li>Pós-Graduada em Gestão de Pessoas</li>
              <li>Pós-Graduada em Terapia Cognitivo Comportamental</li>
              <li>Pós-Graduada em Neuropsicologia</li>
              <li>Análise Comportamental e Life Coach, pelo IBC</li>
              <li>Pós-Graduanda em ABA para autismo</li>
              <li>
                Além da Psicoterapia ministro palestras para mulheres e realizo oficinas terapêuticas para crianças. Foram
                mais de 20 oficinas efetuadas.
              </li>
            </ul>
            <p>Os atendimentos são realizados de forma on-line e presencial em São paulo.</p>
            <p className="target-audience">Público alvo: Crianças e Adultos.</p>
          </div>
        </div>
      </div>
    </div>
    </div>
  );
}

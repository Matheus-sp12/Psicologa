import "./styles.scss";
import img from "../../assets/servico/adult.jpg";
import img2 from "../../assets/servico/kids.jpg";

const ServicosPrestados = () => {
  return (
    <div className="servicos-container" id="servicos">
      <h2>Serviços prestados</h2>
      <div className="cards">
        <div className="card">
          <img src={img} alt="Psicoterapia para adultos" />
          <div className="content adulto">
            <h3>Adultos</h3>
            <ul>
              <li>Psicoterapia</li>
              <li>Ansiedade</li>
              <li>Depressão</li>
              <li>Autoestima</li>
              <li>Autoconhecimento</li>
              <li>Desmotivação</li>
              <li>Emagrecimento</li>
            </ul>
          </div>
        </div>
        <div className="card">
          <img src={img2} alt="Psicoterapia infantil" />
          <div className="content infantil">
            <h3>Infantil</h3>
            <ul>
              <li>Psicoterapia</li>
              <li>Terapia Aba</li>
              <li>Avaliação Neuropsicológica</li>
              <li>Oficinas</li>
            </ul>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ServicosPrestados;
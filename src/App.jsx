import './App.css'

import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import Navbar from './components/Navbar';
import Banner from './components/Banner';
import Psioterapia from './components/Psicoterapia';
import Agende from './components/Agende';
import Sobre from './components/Sobre';
import Depoimentos from './components/Depoimentos';
import ServicosPrestados from './components/Servicos';
import Beneficio from './components/Bonus';
import Faq from './components/Faq';
import RedesSociais from './components/Insta';
import Footer from './components/Footer';



const App = () => {
  return (
    <div className="App">
        <Navbar />
        <Banner />
        <Psioterapia />
        <Agende />
        <Sobre />
        <Depoimentos />
        <ServicosPrestados />
        <Beneficio />
        <Faq />
        <RedesSociais />
        <Footer />
    </div>
  )
}

export default App
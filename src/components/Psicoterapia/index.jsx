import React from 'react'
import './styles.scss'
import img from '../../assets/quest.svg'

import { FaCheckSquare } from "react-icons/fa";


const Psioterapia = () => {
  return (
    <div className="psioterapia" id="about">
        <h3>Quando buscar uma psicoterapia?</h3>

        <p>Qualquer pessoa pode procurar e se beneficiar da psicoterapia, pois a mesma tem impacto positivo na qualidade de vida das pessoas, melhorando as relações sociais e a qualidade de vida.</p>

        <p>Algumas perguntas a si mesmo podem ajudar a identificar o momento de buscar uma psicoterapia:</p>

        <div className="list">
            <ul>
                <li>
                    <FaCheckSquare className='check'/> 
                    <p>Sinto que algumas pessoas ao meu redor não me entendem?</p>
                </li>

                <li>
                    <FaCheckSquare className='check'/> 
                    <p>As coisas da minha vida parecem não se encaixar</p>
                </li>

                <li>
                    <FaCheckSquare className='check'/> 
                    <p>tenho estado mais irritado ou ansioso recentemente?</p>
                </li>

                <li>
                    <FaCheckSquare className='check'/> 
                    <p>sente dores constantes, desconfortos ou problemas de sono?</p>
                </li>

                <li>
                    <FaCheckSquare className='check'/> 
                    <p>Não tenho vontade de fazer as coisas que costumava gostar?</p>
                </li>

                <li>
                    <FaCheckSquare className='check'/> 
                    <p>Sentimentos de tristeza, depressão ou ansiedade, tem se tornado constante?</p>
                </li>

                <li>
                    <FaCheckSquare className='check'/> 
                    <p>Já fiz o que podia e não consigo resolver a situação dificil pela qual estou passando?</p>
                </li>

                <li>
                    <FaCheckSquare className='check'/> 
                    <p>Parece que é culpa minha?</p>
                </li>

                <li>
                    <FaCheckSquare className='check'/> 
                    <p>Minha vida profissional está complicada, ou não evolui como gostaria?</p>
                </li>

                <li>
                    <FaCheckSquare className='check'/> 
                    <p>Percebo dificuldades nas minhas relações afetivas ou sexuais?</p>
                </li>
            </ul>
        </div>

        <div className="question">
            <div>
                <p>Reponder sim a qualquer uma dessas questões acima justifica a busca por uma psicoterapia para podermos seguir em frente.</p>
                <p>Importante lembrar quanto mais cedo a pesso procura ajuda, mais cedo se conhece e trata a dificuldade.</p>
            </div>
            <img src={img} alt="" />
        </div>

    </div>
  )
}

export default Psioterapia
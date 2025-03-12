import React, { useState } from "react";
import { motion } from "framer-motion";
import { FaChevronDown } from "react-icons/fa";
import "./styles.scss";
import { FaWhatsapp } from "react-icons/fa";


const faqData = [
  {
    question: "Como funcionam os atendimentos?",
    answer: "Os atendimentos são feitos por profissionais qualificados, seguindo uma abordagem personalizada.",
  },
  {
    question: "Atendimentos on-line e presenciais, tem diferença?",
    answer: "Não, ambos seguem a mesma metodologia, garantindo qualidade e atenção ao paciente.",
  },
  {
    question: "Quanto tempo duram as sessões?",
    answer: "As sessões têm duração média de 50 minutos, podendo variar conforme a necessidade do paciente.",
  },
  {
    question: "Atende convênios?",
    answer: "Atendemos alguns convênios. Entre em contato para verificar a cobertura.",
  },
];

const FAQ = () => {
  const [openIndex, setOpenIndex] = useState(null);

  const toggleFAQ = (index) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  return (
    <div className="faq-container" id="quest">
      <h2>Perguntas Frequentes</h2>
      <div className="faq-list">
        {faqData.map((item, index) => (
          <div key={index} className="faq-item">
            <button className="faq-question" onClick={() => toggleFAQ(index)}>
              {item.question}
              <FaChevronDown className={`icon ${openIndex === index ? "open" : ""}`} />
            </button>
            <motion.div
              className="faq-answer"
              initial={{ height: 0, opacity: 0 }}
              animate={{
                height: openIndex === index ? "auto" : 0,
                opacity: openIndex === index ? 1 : 0,
              }}
              transition={{ duration: 0.4, ease: "easeInOut" }}
            >
              <p>{item.answer}</p>
            </motion.div>
          </div>
        ))}
      </div>
      <a
  href="https://wa.me/5511986427140?text=Bom%20dia,%20tudo%20bem?%20Gostaria%20de%20saber%20mais%20sobre%20a%20consulta?"
  className="schedule-btn"
  target="_blank"
  rel="noopener noreferrer"
>
  Agendar Sessão <FaWhatsapp className="whatsapp-icon" />
</a>
    </div>
  );
};

export default FAQ;

import React, { useState } from "react";
import { HiChevronDown, HiChevronUp } from "react-icons/hi2";
import "./FaqSection.scss";

function FaqSection() {
  const [activeIndex, setActiveIndex] = useState(null);

  const faqs = [
    {
      question: "Könüllü ola bilərəmmi?",
      answer:
        "Bəli, könüllü ola bilərsiniz! Xüsusi təcrübə tələb olunmur — sadəcə yardım etmək istəyi kifayətdir. Könüllülərimiz tədbirlərdə, sosial layihələrdə və məlumatlandırma işlərində bizə dəstək olur.",
    },
    {
      question: "İanələr hara sərf olunur?",
      answer:
        "Toplanan ianələr birbaşa ehtiyacı olan ailələrin ərzaq, dərman və təhsil xərclərinin qarşılanmasına yönəldilir.",
    },
    {
      question: "Layihələrinizdə necə iştirak edə bilərəm?",
      answer:
        "Saytımızda qeydiyyatdan keçərək və ya əlaqə bölməsindən bizə yazaraq layihələrimizə qoşula bilərsiniz.",
    },
    {
      question: "İanə etmək üçün hansı üsullar var?",
      answer:
        "Onlayn kart ödənişi, bank köçürməsi və ya terminallar vasitəsilə ianə edə bilərsiniz.",
    },
  ];

  const toggleAccordion = (index) => {
    setActiveIndex(activeIndex === index ? null : index);
  };

  return (
    <section className="faq-section">
      <div className="container">
        <div className="faq-wrapper">
          {/* Left Side: Header Text */}
          <div className="faq-content">
            <h1>İanələrinizlə bağlı suallarınıza cavab tapın</h1>
            <p>
              Et felis vitae ac venenatis lacus cras etiam risus scelerisque
              auctor adipiscing in a porta.
            </p>
          </div>

          {/* Right Side: Accordion Grid */}
          <div className="faq-accordion">
            {faqs.map((faq, index) => (
              <div
                className={`accordion-item ${activeIndex === index ? "active" : ""}`}
                key={index}
                onClick={() => toggleAccordion(index)}
              >
                <div className="accordion-header">
                  <span>{faq.question}</span>
                  {activeIndex === index ? <HiChevronUp /> : <HiChevronDown />}
                </div>
                {activeIndex === index && (
                  <div className="accordion-body">
                    <p>{faq.answer}</p>
                  </div>
                )}
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}

export default FaqSection;

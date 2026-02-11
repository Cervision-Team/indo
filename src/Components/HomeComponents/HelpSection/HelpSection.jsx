import React from 'react';
import './HelpSection.scss';
import Icon from '../../../image/help-image.png'

function HelpSection() {
  const steps = [
    {
      id: 1,
      icon: Icon,
      title: "Qeydiyyatdan keç",
      desc: "Qeydiyyatdan keç və yaxşılıq paylaşmağı sevən insanların bir hissəsi ol."
    },
    {
      id: 2,
      icon: Icon,
      title: "ianə seç",
      desc: "Paylaşa biləcəyin bir çox şey var – yaxşılıqla dolu."
    },
    {
      id: 3,
      icon: Icon,
      title: "Xoşbəxtliyi paylaş",
      desc: "Daha az imkanlılarla xoşbəxtlik paylaşmaq və başqaları üçün daha çox yaxşılıq etmək."
    }
  ];

  return (
    <section className="help-section">
      <div className="container">
        <div className="help-header">
          <h2>Köməyə Necə Başlamaq Olar</h2>
          <p>
            Xeyriyyə fondları təhsil, ərzaq, dərman, yaşayış və digər sosial 
            xidmətlər təqdim edirlər.
          </p>
        </div>

        <div className="help-grid">
          {steps.map((step) => (
            <div className="help-item" key={step.id}>
              <div className="icon-box">
                <img src={step.icon} alt={step.title} />
              </div>
              <h3>{step.title}</h3>
              <p>{step.desc}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

export default HelpSection;

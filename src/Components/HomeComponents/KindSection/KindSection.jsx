import React from "react";
import "./KindSection.scss";
import Icon1 from '../../../image/kind-image-1.png'
import Icon2 from '../../../image/kind-image-2.png'
import Icon3 from '../../../image/kind-image-3.png'
import Icon4 from '../../../image/kind-image-4.png'

function KindSection() {
  const cards = [
    {
      id: 1,
      icon: Icon1,
      title: "İanələr",
      desc: "İanə et, təkliflərinlə yaxşılığın bir parçasına çevrilə bilərsən.",
    },
    {
      id: 2,
      icon: Icon2,
      title: "Könüllü Ol",
      desc: "Xeyriyyə layihələrində könüllü iştirak edərək dəyişimin bir hissəsi ol.",
    },
    {
      id: 3,
      icon: Icon3,
      title: "Xeyriyyə",
      desc: "Xeyriyyə təşəbbüslərinə qoşulun, imkansız ailələrə birlikdə dəstək olaq.",
    },
    {
      id: 4,
      icon: Icon4,
      title: "Təklifləriniz",
      desc: "Təkliflərinizi paylaşın, platformanın inkişafına dəstək olun.",
    },
  ];

  return (
    <section className="kind-section">
      <div className="container">
        <div className="section-header">
          <h2>Xeyirxahlığınızı bölüşün</h2>
          <p>Kiçik Bir Yaxşılıq Böyük Dəyişiklik Yarada Bilər</p>
        </div>

        {/* Karusel dəstəyi üçün wrapper əlavə etdik */}
        <div className="kind-grid-wrapper">
          <div className="kind-grid">
            {cards.map((card) => (
              <div className="kind-card" key={card.id}>
                <div className="icon-wrapper">
                  <img src={card.icon} alt={card.title} />
                  <div className="circle-bg"></div>
                </div>
                <h3>{card.title}</h3>
                <p>{card.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}

export default KindSection;

import React from "react";
import "./KindSection.scss";

// import Icon1 from 'https://cdn-icons-png.flaticon.com/512/3135/3135715.png';
// import Icon2 from 'https://cdn-icons-png.flaticon.com/512/3135/3135715.png';
// import Icon3 from 'https://cdn-icons-png.flaticon.com/512/3135/3135715.png';
// import Icon4 from 'https://cdn-icons-png.flaticon.com/512/3135/3135715.png';

function KindSection() {
  const cards = [
    {
      id: 1,
      icon: "https://cdn-icons-png.flaticon.com/512/3135/3135715.png",
      title: "İanələr",
      desc: "İanə et, təkliflərinlə yaxşılığın bir parçasına çevrilə bilərsən.",
    },
    {
      id: 2,
      icon: "https://cdn-icons-png.flaticon.com/512/3135/3135715.png",

      title: "Könüllü Ol",
      desc: "Xeyriyyə layihələrində könüllü iştirak edərək dəyişimin bir hissəsi ol.",
    },
    {
      id: 3,
      icon: "https://cdn-icons-png.flaticon.com/512/3135/3135715.png",

      title: "Xeyriyyə",
      desc: "Xeyriyyə təşəbbüslərinə qoşulun, imkansız ailələrə birlikdə dəstək olaq.",
    },
    {
      id: 4,
      icon: "https://cdn-icons-png.flaticon.com/512/3135/3135715.png",

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
    </section>
  );
}

export default KindSection;

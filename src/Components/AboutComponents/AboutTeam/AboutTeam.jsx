import React from "react";
import "./AboutTeam.scss";

import Person1 from "../../../image/about-team-1.png";
import Person2 from "../../../image/about-team-2.png";
import Person3 from "../../../image/about-team-3.png";
import Person4 from "../../../image/about-team-4.png";

function AboutTeam() {
  const team = [
    {
      img: Person1,
      name: "Anar Məmmədov",
      role: "İCRAÇI DİREKTOR",
      desc:
        "Təşkilatın strateji inkişafına rəhbərlik edir və komandanı məqsədlərə çatdırmaq üçün ilhamlandırır.",
    },
    {
      img: Person2,
      name: "Leyla Həsənova",
      role: "LAYİHƏ MENECERİ",
      desc:
        "Layihələrin idarə edilməsində təcrübəli mütəxəssis, komandanı effektiv şəkildə koordinasiya edir.",
    },
    {
      img: Person3,
      name: "Elvin Quliyev",
      role: "İNKIŞAF MENECERI",
      desc:
        "Maliyyə strategiyası və fond toplama sahəsində mütəxəssis, təşkilatın dayanıqlı inkişafını təmin edir.",
    },
    {
      img: Person4,
      name: "Rəşad İsmayılov",
      role: "TEXNOLOGIYA DIREKTORU",
      desc:
        "Rəqəmsal həllər və innovativ texnologiyalar vasitəsilə təşkilatın imkanlarını genişləndirir.",
    },
  ];

  return (
    <section className="about-team">
      <div className="container">
        <div className="about-team__head">
          <div>
            <h2 className="about-team__title">Komandamızla tanış olun</h2>
            <p className="about-team__subtitle">
              Peşəkar komandamız cəmiyyət üçün fərq yaradır.
            </p>
          </div>

          <a href="#team" className="about-team__link">
            Komandaya keçid
            <span className="arrow">↗</span>
          </a>
        </div>

        <div className="about-team__cards">
          {team.map((person, idx) => (
            <div className="team-card" key={idx}>
              <div className="team-card__image">
                <img src={person.img} alt={person.name} />
              </div>
              <div className="team-card__content">
                <h3 className="team-card__name">{person.name}</h3>
                <p className="team-card__role">{person.role}</p>
                <p className="team-card__desc">{person.desc}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

export default AboutTeam;

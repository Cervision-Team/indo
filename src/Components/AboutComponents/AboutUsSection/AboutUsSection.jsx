import React, { useState } from "react";
import "./AboutUsSection.scss";
import image1 from "../../../image/about-us-image-1.png";
import image2 from "../../../image/about-us-image-2.png";

function AboutUsSection() {
  const [activeTab, setActiveTab] = useState(1);
  const [isExpanded, setIsExpanded] = useState(false);

  const menuItems = [
    {
      id: 1,
      title: "Haqqımızda",
      number: "01",
      description: null,
    },
    {
      id: 2,
      title: "Bizim missiyamız",
      number: "02",
      description:
        "Ehtiyacı olan insanlara dəstək olmaq və həyatlarına ümid qatmaq üçün fəaliyyət göstərən xeyriyyə təşkilatıyıq.",
    },
    {
      id: 3,
      title: "Bizim vizyonumuz",
      number: "03",
      description: null,
    },
  ];

  const shortText =
    "Biz bu yola sosial və maddi çətinlik yaşayan ailələrə dəstək olmaq üçün çıxdıq. Məqsədimiz — həssas ailələr üçün daha güvənli və dayanıqlı bir gələcək yaratmaqdır.";

  const fullText =
    "Biz bu yola sosial və maddi çətinlik yaşayan ailələrə dəstək olmaq üçün çıxdıq. Məqsədimiz — həssas ailələr üçün daha güvənli və dayanıqlı bir gələcək yaratmaqdır. Komandamız hər gün yeni layihələr üzərində işləyərək cəmiyyətimizə fayda verməyə çalışır. Birlikdə daha güclü olduğumuza inanırıq və hər bir yardımın böyük dəyişikliklərə səbəb ola biləcəyini bilirik.";

  return (
    <section className="about-us-section">
      <div className="container">
        {/* Yuxarı Hissə */}
        <div className="about-us-section__top">
          <div className="about-us-section__heading">
            <h2>
              Birlikdə dünyanı daha <br /> yaxşı edə bilərik
            </h2>
          </div>

          <div className="about-us-section__menu">
            {menuItems.map((item) => (
              <div
                key={item.id}
                className={`menu-item ${activeTab === item.id ? "active" : ""}`}
                onClick={() => setActiveTab(item.id)}
              >
                <div className="menu-item__left">
                  <div className="menu-item__top-row">
                    <span className="menu-item__number">{item.number}</span>
                    <span className="menu-item__text">{item.title}</span>
                  </div>
                  {/* Active olduqda description göstər */}
                  {activeTab === item.id && item.description && (
                    <p className="menu-item__description">{item.description}</p>
                  )}
                </div>
                <span className="menu-item__icon">
                  {activeTab === item.id ? "↗" : "↘"}
                </span>
              </div>
            ))}
          </div>
        </div>

        {/* Aşağı Hissə */}
        <div className="about-us-section__bottom">
          <div className="about-us-section__images">
            <div className="image-box image-box--large">
              <img src={image1} alt="Teamwork" />
            </div>
            <div className="image-box image-box--small">
              <img src={image2} alt="Children" />
            </div>
          </div>

          <div className="about-us-section__content">
            <span className="content-subtitle">Haqqımızda</span>
            <h3 className="content-title">HEKAYƏMİZ</h3>
            <p className="content-text">
              {isExpanded ? fullText : shortText}
            </p>
            {!isExpanded && (
              <button
                className="content-btn"
                onClick={() => setIsExpanded(true)}
              >
                Hamısını Oxu
              </button>
            )}
          </div>
        </div>
      </div>
    </section>
  );
}

export default AboutUsSection;

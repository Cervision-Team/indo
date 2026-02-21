import React, { useState } from "react";
import "./AboutUsSection.scss"; // SCSS faylını unutmayaq
import image1 from "../../../image/about-us-image-1.png";
import image2 from "../../../image/about-us-image-2.png";

function AboutUsSection() {
  const [activeTab, setActiveTab] = useState(1);

  // Mətnin genişlənməsini idarə edən state
  const [isExpanded, setIsExpanded] = useState(false);

  const menuItems = [
    { id: 1, title: "Haqqımızda", number: "01" },
    { id: 2, title: "Bizim missiyamız", number: "02" },
    { id: 3, title: "Bizim vizyonumuz", number: "03" },
  ];

  // Qısa və Tam Mətnlər
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
                className={`menu-item ${activeTab === item.id ? "" : ""}`}
                onClick={() => setActiveTab(item.id)}
              >
                <span className="menu-item__number">{item.number}</span>
                <span className="menu-item__text">{item.title}</span>
                <span className="menu-item__icon">↘</span>
              </div>
            ))}
          </div>
        </div>

        {/* Aşağı Hissə */}
        <div className="about-us-section__bottom">
          {/* Sol tərəf: Şəkillər */}
          <div className="about-us-section__images">
            <div className="image-box image-box--large">
              <img src={image1} alt="Teamwork" />
            </div>
            <div className="image-box image-box--small">
              <img src={image2} alt="Children" />
            </div>
          </div>

          {/* Sağ tərəf: Mətn və Düymə */}
          <div className="about-us-section__content">
            <span className="content-subtitle">Haqqımızda</span>
            <h3 className="content-title">HEKAYƏMİZ</h3>

            <p className="content-text">
              {/* isExpanded true olarsa tam mətni, false olarsa qısa mətni göstərir */}
              {isExpanded ? fullText : shortText}
            </p>

            {/* Düymə yalnız isExpanded false olduqda görünür */}
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

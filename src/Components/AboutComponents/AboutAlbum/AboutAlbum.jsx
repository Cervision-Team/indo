import React from 'react';
import './AboutAlbum.scss'; // SCSS faylını import etməyi unutmayın

// Şəkillərin importu (Sizin verdiyiniz kimi)
import img1 from "../../../image/about-album-1.png";
import img2 from "../../../image/about-album-2.png";
import img3 from "../../../image/about-album-3.png";
import img4 from "../../../image/about-album-4.png";
import img5 from "../../../image/about-album-5.png";
import img6 from "../../../image/about-album-6.png";
import img7 from "../../../image/about-album-7.png";

// İkonların importu
import icon1 from "../../../image/about-album-icon-1.png";
import icon2 from "../../../image/about-album-icon-2.png";
import icon3 from "../../../image/about-album-icon-3.png";
import icon4 from "../../../image/about-album-icon-4.png";
import icon5 from "../../../image/about-album-icon-5.png";

function AboutAlbum() {
  // İkonlar və adları üçün massiv yaradırıq ki, kod daha təmiz olsun
  const partners = [
    { icon: icon1, name: "TEAMTALK" },
    { icon: icon2, name: "ExDone" },
    { icon: icon3, name: "NEXTFLOWS" },
    { icon: icon4, name: "Globalchart" },
    { icon: icon5, name: "MarketSavy" },
  ];

  return (
    <div className="about-album">
      <div className="container">
        <h2 className="about-album__title">Albomumuz</h2>

        <div className="about-album__gallery">
          {/* Yuxarı sıra: 3 şəkil */}
          <div className="gallery-row row-top">
            <div className="gallery-item"><img src={img1} alt="Album 1" /></div>
            <div className="gallery-item"><img src={img2} alt="Album 2" /></div>
            <div className="gallery-item"><img src={img3} alt="Album 3" /></div>
          </div>

          {/* Aşağı sıra: 4 şəkil */}
          <div className="gallery-row row-bottom">
            <div className="gallery-item"><img src={img4} alt="Album 4" /></div>
            <div className="gallery-item"><img src={img5} alt="Album 5" /></div>
            <div className="gallery-item"><img src={img6} alt="Album 6" /></div>
            <div className="gallery-item"><img src={img7} alt="Album 7" /></div>
          </div>
        </div>

        <div className="about-album__partners">
          {partners.map((partner, index) => (
            <div key={index} className="partner-card">
              <div className="partner-icon">
                <img src={partner.icon} alt={partner.name} />
              </div>
              <span className="partner-name">{partner.name}</span>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}

export default AboutAlbum;

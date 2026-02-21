import React from "react";
import "./TeamHeader.scss";
import bannerImage from "../../../image/team-header.png";

function TeamHeader() {
  return (
    // Bu div ekranın kənarlarından 80px məsafə saxlayır
    <div className="team-header">
      {/* Şəkil və yuvarlaq künclər bu div-dədir */}
      <div
        className="team-header__banner"
        style={{ backgroundImage: `url(${bannerImage})` }}
      >
        <div className="team-header__overlay"></div>

        <div className="team-header__content">
          <h1 className="team-header__title">Komandamızla Tanış Olun</h1>
          <p className="team-header__description">
            Peşəkar və təcrübəli komandamız hər gün daha yaxşı dəyişikliklər
            yaratmaq üçün çalışır
          </p>
        </div>
      </div>
    </div>
  );
}

export default TeamHeader;

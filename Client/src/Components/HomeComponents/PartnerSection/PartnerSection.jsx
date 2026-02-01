import React from 'react';
import './PartnerSection.scss';


// import Logo1 from '../../image/partner1.svg';
// import Logo2 from '../../image/partner2.svg';
// import Logo3 from '../../image/partner3.svg';
// import Logo4 from '../../image/partner4.svg';

function PartnerSection() {
  const logos = ["https://cpl.thalesgroup.com/sites/default/files/content/field_collections/field_col_three_icon/2020-05/partner-icon-shake_0.png", "https://cpl.thalesgroup.com/sites/default/files/content/field_collections/field_col_three_icon/2020-05/partner-icon-shake_0.png", "https://cpl.thalesgroup.com/sites/default/files/content/field_collections/field_col_three_icon/2020-05/partner-icon-shake_0.png", "https://cpl.thalesgroup.com/sites/default/files/content/field_collections/field_col_three_icon/2020-05/partner-icon-shake_0.png", "https://cpl.thalesgroup.com/sites/default/files/content/field_collections/field_col_three_icon/2020-05/partner-icon-shake_0.png", "https://cpl.thalesgroup.com/sites/default/files/content/field_collections/field_col_three_icon/2020-05/partner-icon-shake_0.png"]; // Daha uzun xətt üçün təkrarlaya bilərsiniz

  return (
    <section className="partner-section">
      <div className="container">
        <h2 className="partner-title">
          Əməkdaşlıq etdiyimiz şirkətlər və tərəfdaş qurumlar
        </h2>
      </div>

      <div className="marquee-container">
        <div className="marquee-track">
          {/* Sonsuz dövr üçün loqoları iki dəfə render edirik */}
          {logos.concat(logos).map((logo, index) => (
            <div className="marquee-item" key={index}>
              <img src={logo} alt={`Partner ${index}`} />
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

export default PartnerSection;

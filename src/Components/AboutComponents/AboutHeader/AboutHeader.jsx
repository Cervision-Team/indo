import React from 'react'
import './AboutHeader.scss'
import bannerImage from '../../../image/About-header.png' 

function AboutHeader() {
  return (
    // Bu div ekranın kənarlarından 80px məsafə saxlayır
    <div className="about-header">
      
      {/* Şəkil və yuvarlaq künclər bu div-dədir */}
      <div className="about-header__banner" style={{ backgroundImage: `url(${bannerImage})` }}>
        
        <div className="about-header__overlay"></div>
        
        <div className="about-header__content">
          <h1 className="about-header__title">Niyə biz?</h1>
          <p className="about-header__description">
            Peşəkar və təcrübəli komandamız hər gün <br />
            daha yaxşı dəyişikliklər yaratmaq üçün çalışır
          </p>
        </div>

      </div>
    </div>
  )
}

export default AboutHeader

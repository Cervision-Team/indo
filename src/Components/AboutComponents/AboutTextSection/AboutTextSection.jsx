import React from 'react';
import './AboutTextSection.scss';
// İkonlar üçün (əgər react-icons yoxdursa, sadə SVG və ya span istifadə edə bilərsiniz)
import { FaCheck, FaRegListAlt } from 'react-icons/fa'; 

function AboutTextSection() {
  
  // Statistika məlumatları
  const stats = [
    { id: 1, number: '145+', label: 'Aktiv Kampaniya' },
    { id: 2, number: '1200+', label: 'İanə Edildi' },
    { id: 3, number: '545+', label: 'Dəstəkçi qoşulub' },
  ];

  return (
    <div className="about-text-section">
      
      {/* 1. Yaşıl Statistika Paneli */}
      <div className="stats-bar">
        <div className="container">
          <div className="stats-wrapper">
            {stats.map((stat) => (
              <div key={stat.id} className="stat-item">
                <span className="stat-number">{stat.number}</span>
                <span className="stat-label">{stat.label}</span>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* 2. Mətn və Kartlar Bölməsi */}
      <div className="content-area">
        <div className="container">
          
          <div className="text-header">
            <h2>Birlikdə Daha Çox İnsana <br /> Ümid Oluruq</h2>
            <p>
              Çətin Vəziyyətdə Olan İnsanlara Daha Sürətli, Daha Təsirli Və Daha Davamlı Dəstək Çatdırmaq Üçün
              İcmaları, Könüllüləri Və Donorları Bir Araya Gətiririk.
            </p>
          </div>

          <div className="cards-wrapper">
            
            {/* Məqsədimiz Kartı */}
            <div className="info-card">
              <div className="card-header">
                <div className="icon-circle icon-green">
                   {/* İkon əvəzinə sadəcə ✔ işarəsi də ola bilər */}
                   <FaCheck /> 
                </div>
                <h3>Məqsədimiz</h3>
              </div>
              <p className="card-text">
                Missiyamız yardımı təsadüfi aksiyalardan çıxarıb, sadə, izlənilə bilən və
                hər kəs üçün əlçatan bir prosesə çevirməkdir. İstifadəçilər dəstəklədikləri
                layihələrin gedişatını real vaxtda izləyə bilirlər.
              </p>
            </div>

            {/* Vizyonumuz Kartı */}
            <div className="info-card">
              <div className="card-header">
                <div className="icon-circle icon-outline">
                  <FaRegListAlt />
                </div>
                <h3 className="vizyon-title">Vizyonumuz</h3>
              </div>
              <p className="card-text">
                Vizyonumuz yardımı daha geniş icmalara çatdıraraq, indo.az-ı bölgədə
                sosial layihələrin xəritəsi, məlumat mənbəyi və davamlı təsir üçün əsas
                rəqəmsal platformaya çevirməkdir.
              </p>
            </div>

          </div>
        </div>
      </div>

    </div>
  )
}

export default AboutTextSection

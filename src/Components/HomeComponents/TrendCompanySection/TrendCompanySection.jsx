import React from 'react';
import { MdVerified } from "react-icons/md";
import './TrendCompanySection.scss';

// Nümunə şəkil (öz yolunuzu əlavə edin)
import CampaignImg from '../../../image/company-image.png';

function TrendCompanySection() {
  const trendCampaigns = [
    {
      id: 1,
      author: "Cahangir Qasımov",
      title: "Az təminatlı ailələrə dəstək",
      daysLeft: 22,
      progress: 40,
      image: CampaignImg
    },
    {
      id: 2,
      author: "Cahangir Qasımov",
      title: "Az təminatlı ailələrə dəstək",
      daysLeft: 22,
      progress: 40,
      image: CampaignImg
    },
    {
      id: 3,
      author: "Cahangir Qasımov",
      title: "Az təminatlı ailələrə dəstək",
      daysLeft: 22,
      progress: 40,
      image: CampaignImg
    },
    {
      id: 4,
      author: "Cahangir Qasımov",
      title: "Az təminatlı ailələrə dəstək",
      daysLeft: 22,
      progress: 40,
      image: CampaignImg
    }
  ];

  return (
    <section className="trend-section">
      <div className="container">
        <div className="section-header">
          <h2>Aktual və Gündəmdə olan kampaniyalar</h2>
          <p>Kiçik Bir Yaxşılıq Böyük Dəyişiklik Yarada Bilər</p>
        </div>

        <div className="trend-grid">
          {trendCampaigns.map((item) => (
            <div className="campaign-card" key={item.id}>
              <div className="card-img">
                <img src={item.image} alt={item.title} />
              </div>
              <div className="card-body">
                <div className="author">
                  <span>{item.author}</span>
                  <MdVerified className="verified-icon" />
                </div>
                <h3>{item.title}</h3>
                
                <div className="progress-container">
                  <div className="progress-bar">
                    <div className="progress-fill" style={{ width: `${item.progress}%` }}></div>
                  </div>
                  <div className="progress-info">
                    <span>Toplam</span>
                    <span>Qalan gün: {item.daysLeft}</span>
                  </div>
                </div>

                <button className="donate-btn">İanə et</button>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

export default TrendCompanySection;

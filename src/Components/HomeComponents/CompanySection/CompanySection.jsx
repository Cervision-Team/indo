import React, { useRef } from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Navigation } from 'swiper/modules';
// React Icons import edildi
import { HiArrowLeft, HiArrowRight } from "react-icons/hi2"; 
import { MdVerified } from "react-icons/md"; // Verifikasiya ikonu üçün
import 'swiper/css';
import './CompanySection.scss';

import CampaignImg from '../../../image/company-image.png';

function CompanySection() {
  const swiperRef = useRef(null);

  const campaigns = [
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
      title: "Qazi və müharibə iştirakçılarına yardım",
      daysLeft: 22,
      progress: 60,
      image: CampaignImg
    },
    {
      id: 3,
      author: "Cahangir Qasımov",
      title: "Uşaqlar evi və sığınacaqlara dəstək",
      daysLeft: 15,
      progress: 30,
      image: CampaignImg
    }
  ];

  return (
    <section className="company-section">
      <div className="container">
        <div className="content-wrapper">
          <div className="text-side">
            <h2>Daimi Kampaniyalarımız</h2>
            <p>“Xeyirxahlıqla toxunduq, həyatları yenidən çiçəkləndirdik...”</p>
            
            <div className="custom-nav-btns">
              <button onClick={() => swiperRef.current?.swiper.slidePrev()} className="prev-btn">
                <HiArrowLeft size={24} />
              </button>
              <button onClick={() => swiperRef.current?.swiper.slideNext()} className="next-btn">
                <HiArrowRight size={24} />
              </button>
            </div>
          </div>

          <div className="slider-side">
            <Swiper
              onBeforeInit={(swiper) => {
                swiperRef.current = { swiper };
              }}
              modules={[Navigation]}
              spaceBetween={20}
              slidesPerView={2.2}
              breakpoints={{
                320: { slidesPerView: 1.1 },
                768: { slidesPerView: 1.5 },
                1024: { slidesPerView: 2.2 }
              }}
            >
              {campaigns.map((item) => (
                <SwiperSlide key={item.id}>
                  <div className="campaign-card">
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
                </SwiperSlide>
              ))}
            </Swiper>
          </div>
        </div>
      </div>
    </section>
  );
}

export default CompanySection;

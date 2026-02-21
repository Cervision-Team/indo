import React, { useRef } from 'react';
import { MdVerified } from "react-icons/md";
import { FaChevronLeft, FaChevronRight } from "react-icons/fa";
import './TrendCompanySection.scss';

import CampaignImg1 from '../../../image/trend-image1.JPG';
import CampaignImg2 from '../../../image/trend-image2.jpg';
import CampaignImg3 from '../../../image/trend-image3.jpg';
import CampaignImg4 from '../../../image/trend-image4.jpg';
import CampaignImg5 from '../../../image/trend-image5.jpg';

function TrendCompanySection() {
  const scrollRef = useRef(null);

  const handleScroll = (offset) => {
    if (scrollRef.current) {
      scrollRef.current.scrollBy({ left: offset, behavior: 'smooth' });
    }
  };

  const trendCampaigns = [
    {
      id: 1,
      author: "Cahangir Qasımov",
      title: "Hər ay keçirilən “Bir ailənin sevinci “ kampaniyasına sən də qoşul ",
      image: CampaignImg1
    },
    {
      id: 2,
      author: "Cahangir Qasımov",
      title: "Ramazanda evlərdə açılan süfrələrdə sənin də payın olsun",
      image: CampaignImg2
    },
    {
      id: 3,
      author: "Cahangir Qasımov",
      title: "Himayəmizdə olan universitet tələbələrinin təhsilinə sən də  kömək et ",
      image: CampaignImg3
    },
    {
      id: 4,
      author: "Cahangir Qasımov",
      title: "XXXXXX rayons XXXX kəndində Qazi XXXXX XXXXX-nin evinin təmirinə sən də yardımını qat",
      image: CampaignImg4
    },
    {
      id: 5,
      author: "Cahangir Qasımov",
      title: "XXXXXXX rayonu XXXXX kəndinqə müharibə iştirakçısı XXXXX XXXX evinin tikintisində sənin də yardım payın olsun",
      image: CampaignImg5
    }
  ];

  return (
    <section className="trend-section">
      <div className="container">
        <div className="section-header">
          <h2>Aktual və Gündəmdə olan kampaniyalar</h2>
          <p>Kiçik Bir Yaxşılıq Böyük Dəyişiklik Yarada Bilər</p>
        </div>

        <div className="trend-section__top">
          <button
            className="trend-section__nav-btn trend-section__nav-btn--left"
            onClick={() => handleScroll(-300)}
            aria-label="Əvvəlki kampaniyalar"
          >
            <FaChevronLeft />
          </button>

          <div className="trend-grid" ref={scrollRef}>
            {trendCampaigns.map((item) => (
              <div className="campaign-card" key={item.id}>
                <div className="card-img">
                  <img src={item.image} alt={item.title} />
                </div>
                <div className="card-body">
                  {/* <div className="author">
                    <span>{item.author}</span>
                    <MdVerified className="verified-icon" />
                  </div> */}
                  <h3>{item.title}</h3>
                  <button className="donate-btn">İanə et</button>
                </div>
              </div>
            ))}
          </div>

          <button
            className="trend-section__nav-btn trend-section__nav-btn--right"
            onClick={() => handleScroll(300)}
            aria-label="Növbəti kampaniyalar"
          >
            <FaChevronRight />
          </button>
        </div>
      </div>
    </section>
  );
}

export default TrendCompanySection;

import React, { useRef } from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation } from "swiper/modules";
// React Icons import edildi
import { HiArrowLeft, HiArrowRight } from "react-icons/hi2";
import { MdVerified } from "react-icons/md"; // Verifikasiya ikonu üçün
import "swiper/css";
import "./CompanySection.scss";

import CampaignImg1 from "../../../image/company-image1.jpg";
import CampaignImg2 from "../../../image/company-image2.jpg";
import CampaignImg3 from "../../../image/company-image3.jpg";
import CampaignImg4 from "../../../image/company-image4.jpg";
import CampaignImg5 from "../../../image/company-image5.JPG";

function CompanySection() {
  const swiperRef = useRef(null);

  const campaigns = [
    {
      id: 1,
      author: "Bir Ümid, Bir Dəstək",
      title: "Əhalinin həssas gruplarına maddi dəstək kampaniyası",
      image: CampaignImg1,
    },
    {
      id: 2,
      author: "Bir Ümid, Bir Dəstək",
      title: "Vətən müharibəsi iştirakçıları və onların ailələrinə dəstək",
      image: CampaignImg2,
    },
    {
      id: 3,
      author: "Bir Ümid, Bir Dəstək",
      title: "İstedadlı şagird və tələbələrə dəstək",
      image: CampaignImg3,
    },
    {
      id: 4,
      author: "Bir Ümid, Bir Dəstək",
      title: "Uşaq evləri, sığınacaqlar və qocalar evlərinə dəstək",
      image: CampaignImg4,
    },
    {
      id: 5,
      author: "Bir Ümid, Bir Dəstək",
      title: "Regionlarda maarifləndirmə tədbirləri",
      image: CampaignImg5,
    },
  ];

  return (
    <section className="company-section">
      <div className="container">
        <div className="content-wrapper">
          <div className="text-side">
            <h2>Daimi Kampaniyalarımız</h2>
            <p>“Xeyirxahlıqla toxunduq, həyatları yenidən çiçəkləndirdik...”</p>

            <div className="custom-nav-btns">
              <button
                onClick={() => swiperRef.current?.swiper.slidePrev()}
                className="prev-btn"
              >
                <HiArrowLeft size={24} />
              </button>
              <button
                onClick={() => swiperRef.current?.swiper.slideNext()}
                className="next-btn"
              >
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
                1024: { slidesPerView: 2.2 },
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
                        <span>"{item.author}"</span>
                        {/* <MdVerified className="verified-icon" /> */}
                      </div>
                      <h3>{item.title}</h3>
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

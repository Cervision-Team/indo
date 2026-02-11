import React from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { Pagination, Autoplay } from "swiper/modules";
import "swiper/css";
import "swiper/css/pagination";
import "./HomeHeader.scss";
import Image1 from "../../../image/header-image.png";

function HomeHeader() {
  const slides = [
    {
      id: 1,
      topTitle: "Ürəklərə şəfa, həyatlara ümid",
      mainTitle:
        "indo.az ailəsinin bir parçası olmaq paylaşmağın ən gözəl yoludur",
      desc: "İnkişafa doğru imkansız ailələrə sosial yardım və hüquqi maarifləndirmə ictimai birliyi",
      image: Image1,
    },
    {
      id: 2,
      topTitle: "Ürəklərə şəfa, həyatlara ümid",
      mainTitle: "Digər slayd başlığı bura",
      desc: "Digər təsvir mətni",
      image: Image1,
    },
    {
      id: 3,
      topTitle: "Ürəklərə şəfa, həyatlara ümid",
      mainTitle: "Üçüncü slayd başlığı",
      desc: "Üçüncü təsvir mətni",
      image: Image1,
    },
  ];

  return (
    <section className="home-header">
      <Swiper
        modules={[Pagination, Autoplay]}
        pagination={{ clickable: true }}
        autoplay={{ delay: 5000 }}
        className="mySwiper"
      >
        {slides.map((slide) => (
          <SwiperSlide key={slide.id}>
            <div
              className="slide-content"
              style={{
                // backgroundImage hissəsində slide.image-i birbaşa ötürürük
                backgroundImage: `linear-gradient(rgba(0,0,0,0.5), rgba(0,0,0,0.5)), url(${slide.image})`,
              }}
            >
              <div className="container">
                <div className="text-wrapper">
                  <h5 className="top-title">{slide.topTitle}</h5>
                  <h1 className="main-title">{slide.mainTitle}</h1>
                  <p className="description">{slide.desc}</p>
                  <button className="cta-btn">Daha çox bax</button>
                </div>
              </div>
            </div>
          </SwiperSlide>
        ))}
      </Swiper>
    </section>
  );
}

export default HomeHeader;

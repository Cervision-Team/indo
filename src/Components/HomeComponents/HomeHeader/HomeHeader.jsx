import React from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { Pagination, Autoplay } from "swiper/modules";
import "swiper/css";
import "swiper/css/pagination";
import "./HomeHeader.scss";
import Image1 from "../../../image/header-image1.jpg";
import Image2 from "../../../image/header-image2.JPG";
import Image3 from "../../../image/header-image3.jpg";
import Image4 from "../../../image/header-image4.JPG";
import Image5 from "../../../image/header-image5.jpg";

function HomeHeader() {
const slides = [
  {
    id: 1,
    topTitle: "Ürəklərə şəfa, həyatlara ümid",
    mainTitle:
      "indo.az ailəsinin bir parçası olmaq paylaşmağın ən gözəl yoludur",
    desc:
      "indo.az ailəsinə qoşularaq ehtiyacı olan insanlara dəstək olur, paylaşmağın və birlikdə hərəkət etməyin gücünü daha da artırırsınız.",
    image: Image1,
  },
  {
    id: 2,
    topTitle: "Sevinc paylaşdıqca artır.",
    mainTitle: "...",
    desc:
      "Paylaşdığınız hər kiçik dəstək daha çox ailənin üzünə təbəssüm, həyatına isə sevinc qatmağa kömək edir.",
    image: Image2,
  },
  {
    id: 3,
    topTitle: "Qəhrəmanlarımızın yanindayıq.",
    mainTitle: "...",
    desc:
      "Qəhrəmanlarımızın sosial və hüquqi ehtiyaclarını qarşılayaraq onların yanında olur, həyatlarını bir az da rahatlaşdırmağa çalışırıq.",
    image: Image3,
  },
  {
    id: 4,
    topTitle: "Savadlı gənclər  işıqlı gələcək deməkdir.",
    mainTitle: "...",
    desc:
      "Təhsil layihələrimizlə gənclərin inkişafına dəstək verir, savadlı və şüurlu bir gələcək üçün fürsətlər yaradırıq.",
    image: Image4,
  },
  {
    id: 5,
    topTitle: "Xalqımızın maarifləndirilməsi üçün hər yerde və hər zaman.",
    mainTitle: "...",
    desc:
      "Maarifləndirmə proqramlarımızla cəmiyyətin hər təbəqəsinə çatır, hüquqi və sosial mövzularda məlumatlılığın artmasına töhfə veririk.",
    image: Image5,
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

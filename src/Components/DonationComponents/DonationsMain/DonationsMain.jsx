import React from "react";
import "./DonationsMain.scss";
import { FaShareAlt } from "react-icons/fa";
import { FaShareFromSquare } from "react-icons/fa6";
const projects = [
  {
    id: 1,
    title: '"Gələcəyi Qur"',
    description:
      "Aztəminatlı ailələrə gündəlik ehtiyac dəstəyi göstərən xeyriyyə təşəbbüsü.",
  },
  {
    id: 2,
    title: '"İsti Yuva"',
    description:
      "Aztəminatlı ailələrə gündəlik ehtiyac dəstəyi göstərən xeyriyyə təşəbbüsü.",
  },
  {
    id: 3,
    title: '"Ümidli Sabahlar"',
    description:
      "Aztəminatlı ailələrə gündəlik ehtiyac dəstəyi göstərən xeyriyyə təşəbbüsü.",
  },
  {
    id: 4,
    title: "Az təminatlı ailələrə dəstək",
    description:
      "Aztəminatlı ailələrə gündəlik ehtiyac dəstəyi göstərən xeyriyyə təşəbbüsü.",
  },
  {
    id: 5,
    title: '"Gələcəyi Qur"',
    description:
      "Aztəminatlı ailələrə gündəlik ehtiyac dəstəyi göstərən xeyriyyə təşəbbüsü.",
  },
  {
    id: 6,
    title: '"İsti Yuva"',
    description:
      "Aztəminatlı ailələrə gündəlik ehtiyac dəstəyi göstərən xeyriyyə təşəbbüsü.",
  },
  {
    id: 7,
    title: '"Ümidli Sabahlar"',
    description:
      "Aztəminatlı ailələrə gündəlik ehtiyac dəstəyi göstərən xeyriyyə təşəbbüsü.",
  },
  {
    id: 8,
    title: "Az təminatlı ailələrə dəstək",
    description:
      "Aztəminatlı ailələrə gündəlik ehtiyac dəstəyi göstərən xeyriyyə təşəbbüsü.",
  },
];

// Placeholder image (replace with actual images)
import donationImg from "../../../image/about-album-1.png";
import donaitionsBackImage from "../../../image/donations-image.png";

function DonationCard({ title, description }) {
  return (
    <div className="donation-card">
      <div className="donation-card__image-wrapper">
        <img src={donationImg} alt={title} />
        <button className="donation-card__share">
          <FaShareFromSquare />
        </button>
      </div>
      <div className="donation-card__body">
        <h4 className="donation-card__title">{title}</h4>
        <p className="donation-card__desc">{description}</p>
        <div className="donation-card__footer">
          <button className="donation-card__icon-btn">
            <FaShareFromSquare />
          </button>
          <button className="donation-card__donate-btn">İanə et</button>
        </div>
      </div>
    </div>
  );
}

function DonationsMain() {
  return (
    <div className="donations-main">
      {/* Cards Section */}
      <section className="donations-main__section">
        <h2 className="donations-main__heading">
          Birlikdə dünyanı daha yaxşı edə bilərik
        </h2>
        <div className="donations-main__grid">
          {projects.map((project) => (
            <DonationCard
              key={project.id}
              title={project.title}
              description={project.description}
            />
          ))}
        </div>
      </section>

      {/* Volunteer Banner */}
      <section
        className="volunteer-banner"
        style={{ backgroundImage: `url(${donaitionsBackImage})` }}
      >
        <div className="volunteer-banner__left">
          <h3 className="volunteer-banner__title">Könüllü olmağa tələs!</h3>
          <p className="volunteer-banner__text">
            Peşəkar və təcrübəli komandamız hər gün daha yaxşı dəyişikliklər
            yaratmaq üçün çalışır. Səndə bizim bir parçamız ol...
          </p>
        </div>
        <div className="volunteer-banner__right">
          <p className="volunteer-banner__right-text">
            Missiyamıza qoşulun və dəstəyinizin necə real dəyişiklik yaratdığını
            görün.
          </p>
          <button className="volunteer-banner__btn">Forma keçid et ↗</button>
        </div>
      </section>
    </div>
  );
}

export default DonationsMain;

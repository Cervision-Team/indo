import React from "react";
import "./TeamLittle.scss";
import icon from "../../../image/team-cion.png";
// Təkrar olunan kart komponenti
const StatCard = () => {
  return (
    <div className="stat-card">
        <img src={icon} alt="" />

      <div className="stat-card__number">8</div>
      <div className="stat-card__label">Komanda Üzvü</div>
    </div>
  );
};

function TeamLittle() {
  // 5 ədəd kart yaradırıq
  return (
    <div className="team-little">
      <StatCard />
      <StatCard />
      <StatCard />
      <StatCard />
      <StatCard />
    </div>
  );
}

export default TeamLittle;

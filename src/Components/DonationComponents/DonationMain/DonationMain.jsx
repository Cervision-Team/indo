import React, { useState } from "react";
import { FaRegAddressCard, FaHeart, FaShieldAlt } from "react-icons/fa";
import "./DonationMain.scss";
import icon1 from "../../../image/icon1.png";
import icon2 from "../../../image/icon2.png";
import donationImage from "../../../image/donation-image.png";

function DonationMain() {
  const [isMonthly, setIsMonthly] = useState(false);
  const [selectedAmount, setSelectedAmount] = useState(null);
  const [customAmount, setCustomAmount] = useState(""); // Digər məbləğ üçün
  const [selectedCategory, setSelectedCategory] = useState("Ümumi ianə");

  const categories = [
    { name: "Ümumi ianə", desc: "Ehtiyacı olanlara təcili yardım." },
    { name: "Təhsil", desc: "Tələbələr üçün təqaüd və ləvazimatlar." },
    { name: "Sağlamlıq", desc: "Xəstə uşaqların müalicəsi üçün." },
    { name: "Qida Yardımı", desc: "Azminatlı ailələr üçün ərzaq." },
  ];

  const onceAmounts = [20, 50, 100, 150, 200, 300];
  const monthlyAmounts = [5, 10, 15, 20, 25, 30];
  const currentAmounts = isMonthly ? monthlyAmounts : onceAmounts;

  // Hər hansı bir məbləğ seçilibmi və ya yazılıbmı?
  const hasValue = selectedAmount !== null || customAmount.length > 0;

  return (
    <div className="donation-wrapper">
      <div className="donation-container">
        <div className="donation-info">
          <h1>Dəyişikliyin bir hissəsi olun.</h1>
          <p className="subtitle">
            Sizin dəstəyinizlə biz minlərlə insanın həyatına toxuna bilərik.
          </p>

          <div className="info-cards">
            <div className="info-card">
              <img src={icon1} alt="" />
              <h3>100 % Şəffafılq</h3>
              <p>
                Hər bir ianənin hara xərcləndiyini hesabatlarda görə bilərsiniz.
              </p>
            </div>
            <div className="info-card">
              <img src={icon2} alt="" />
              <h3>Xeyriyyə</h3>
              <p>Məlumatlarınız 256-bit SSL şifrələmə ilə qorunur.</p>
            </div>
          </div>

          <div className="main-image">
            <img
              src={donationImage}
              alt="Donation"
            />
          </div>
        </div>

        <div className="donation-form-card">
          {/* Header & Toggle eyni qalır */}
          <div className="form-header">
            <FaRegAddressCard /> <span>Balansı Artır / ianə et</span>
          </div>

          <div className="toggle-container">
            <button
              className={!isMonthly ? "active" : ""}
              onClick={() => {
                setIsMonthly(false);
                setSelectedAmount(null);
              }}
            >
              Birdəfəlik
            </button>
            <button
              className={isMonthly ? "active" : ""}
              onClick={() => {
                setIsMonthly(true);
                setSelectedAmount(null);
              }}
            >
              Aylıq
            </button>
          </div>

          {/* Kateqoriya hissəsi eyni qalır */}
          <div className="category-section">
            <label>İanə Kateqoriyası:</label>
            {categories.map((cat) => (
              <div
                key={cat.name}
                className={`category-item ${selectedCategory === cat.name ? "active" : ""}`}
                onClick={() => setSelectedCategory(cat.name)}
              >
                <div className="text">
                  <strong>{cat.name}</strong>
                  <span>{cat.desc}</span>
                </div>
                <div className="radio-circle">
                  {selectedCategory === cat.name && (
                    <div className="inner-dot"></div>
                  )}
                </div>
              </div>
            ))}
          </div>

          <div className="amount-section">
            <label>Məbləğ seçin (AZN)</label>
            <div className="amounts-grid">
              {currentAmounts.map((amount) => (
                <button
                  key={amount}
                  className={selectedAmount === amount ? "selected" : ""}
                  onClick={() => {
                    setSelectedAmount(amount);
                    setCustomAmount("");
                  }}
                >
                  {amount} ₼
                </button>
              ))}
            </div>
            <div className="custom-amount">
              <label>Digər məbləğ *</label>
              <input
                type="number"
                placeholder="Digər məbləğ"
                value={customAmount}
                onChange={(e) => {
                  setCustomAmount(e.target.value);
                  setSelectedAmount(null);
                }}
              />
            </div>
          </div>

          {/* ŞƏRTİ GÖRÜNÜŞ: Yalnız məbləğ varsa görsənir */}
          {hasValue && (
            <div className="contribution-box">
              <div className="icon">🎁</div>
              <div className="text">
                <strong>Sizin töhfəniz:</strong>
                <p>
                  Bu məbləğlə siz {isMonthly ? "hər ay " : ""}ehtiyac
                  sahiblərinə böyük dəstək olursunuz.
                </p>
              </div>
            </div>
          )}

          <button className="submit-donation">İanə et →</button>
          <p className="terms">
            "İanə et" düyməsini seçməklə siz şərtlər və qaydalan qəbul
            edirsiniz.
          </p>
        </div>
      </div>
    </div>
  );
}

export default DonationMain;

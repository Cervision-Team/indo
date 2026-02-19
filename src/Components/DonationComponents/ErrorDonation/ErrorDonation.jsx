import React from "react";
import { useNavigate } from "react-router-dom";
import "./ErrorDonation.scss";
import Logo from "../../../image/white-logo.png"; // Logo yolunu layihənizə uyğun düzəldin
import Icon from "../../../image/register-icon.png"; // İkon yolunu layihənizə uyğun düzəldin
import { FaXmark, FaRotateLeft } from "react-icons/fa6"; // FontAwesome 6 (X və Yenilə ikonları)
import Error from '../../../image/error-donation.png'

function ErrorDonation() {
  const navigate = useNavigate();

  return (
    <div className="error-wrapper">
      <div className="error-container">
        {/* SOL TƏRƏF (Success və Register ilə eyni) */}
        <div className="info-side">
          <div className="logo-box">
            <img src={Logo} alt="indo.az logo" />
          </div>
          <h2>Yaxşılıq etmək birgə daha asan</h2>
          <p className="description">
            Hər bir ianə bir ümiddir. Birlikdə daha çox insana kömək edə bilərik
          </p>
          <ul className="benefits-list">
            <li>
              <img src={Icon} alt="" />
              <p>Etibarlı platformada təhlükəsiz ianə</p>
            </li>
            <li>
              <img src={Icon} alt="" />
              <p>Şəffaf və izlənilə bilən yardım</p>
            </li>
            <li>
              <img src={Icon} alt="" />
              <p>Hədəflərinizi seçin və dəstək olun</p>
            </li>
          </ul>
        </div>

        {/* SAĞ TƏRƏF - ERROR CARD */}
        <div className="content-side">
          <div className="error-card">
            <div className="error-icon-wrapper">
              <div className="icon-circle">
               <img src={Error} alt="" />
              </div>
              <div className="ripple"></div>
            </div>

            <h3>Xəta baş verdi</h3>
            <p className="subtitle">
              Təəssüf ki, ödəniş zamanı xəta baş verdi. Zəhmət olmasa yenidən
              cəhd edin və ya bankınızla əlaqə saxlayın.
            </p>

            {/* Səbəblər Qutusu */}
            <div className="reasons-box">
              <h4>Uğursuzluğun ümumi səbəbləri:</h4>
              <ul>
                <li>• Balansınızda kifayət qədər vəsaitin olmaması</li>
                <li>• Səhv kart məlumatları və ya vaxtı keçmiş kart</li>
                <li>• Ödənişin bankınız tərəfindən rədd edilməsi</li>
                <li>• Şəbəkə bağlantısı problemləri</li>
              </ul>
            </div>

            <div className="action-buttons">
              <button
                className="btn retry-btn"
                onClick={() => window.location.reload()} // Və ya ödəniş səhifəsinə yönləndirin
              >
                <FaRotateLeft className="btn-icon" /> Yenidən cəhd edin
              </button>
              <button
                className="btn home-btn"
                onClick={() => navigate("/")}
              >
                Əsas səhifəyə qayıt
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default ErrorDonation;

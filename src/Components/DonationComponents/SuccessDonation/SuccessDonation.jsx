import React from "react";
import { useNavigate } from "react-router-dom";
import "./SuccessDonation.scss";
import Logo from "../../../image/white-logo.png"; // Logo yolunu yoxlayın
import Icon from "../../../image/register-icon.png"; // İkon yolunu yoxlayın
import { FaCheck, FaDownload } from "react-icons/fa6"; // FontAwesome 6 istifadə olunur
import Success from "../../../image/success-doantion.png"; 

function SuccessDonation() {
  const navigate = useNavigate();

  // Nümunə üçün statik data (Real layihədə props və ya state-dən gələcək)
  const transactionData = {
    status: "Uğurlu",
    date: "1/29/2026",
    trxId: "TRX-8829301",
  };

  return (
    <div className="success-wrapper">
      <div className="success-container">
        {/* SOL TƏRƏF - REGISTER İLƏ EYNİ */}
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

        {/* SAĞ TƏRƏF - SUCCESS CARD */}
        <div className="content-side">
          <div className="success-card">
            <div className="success-icon-wrapper">
              <div className="icon-circle">
                <img src={Success} alt="Success Icon" />
              </div>
              <div className="ripple"></div>
            </div>

            <h3>Təşəkkür edirik!</h3>
            <p className="subtitle">
              Ödənişiniz uğurla tamamlandı. Sizin dəstəyiniz bizim üçün çox
              önəmlidir.
            </p>

            <div className="details-box">
              <div className="detail-row">
                <span className="label">Ödəniş statusu</span>
                <span className="value status-success">{transactionData.status}</span>
              </div>
              <div className="detail-row">
                <span className="label">Tarix</span>
                <span className="value">{transactionData.date}</span>
              </div>
              <div className="detail-row">
                <span className="label">Tranzaksiya ID</span>
                <span className="value">{transactionData.trxId}</span>
              </div>
            </div>

            <div className="action-buttons">
              <button className="btn download-btn">
                <FaDownload className="btn-icon" /> Qəbzi Yüklə
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

export default SuccessDonation;

import React, { useState, useEffect } from "react";
import { useNavigate, useLocation } from "react-router-dom";
import "./OtpMain.scss"; 
import Logo from "../../../image/white-logo.png";
import Icon from "../../../image/register-icon.png"; 

function OtpMain() {
  const [otp, setOtp] = useState(new Array(6).fill(""));
  const [timer, setTimer] = useState(59);
  const [isLoading, setIsLoading] = useState(false);
  
  const navigate = useNavigate();
  const location = useLocation();
  const fromPage = location.state?.from || "auth";

  useEffect(() => {
    if (timer > 0) {
      const interval = setInterval(() => setTimer(timer - 1), 1000);
      return () => clearInterval(interval);
    }
  }, [timer]);

  const handleChange = (element, index) => {
    if (isNaN(element.value)) return false;
    
    let newOtp = [...otp];
    newOtp[index] = element.value;
    setOtp(newOtp);

    if (element.value !== "" && element.nextSibling) {
      element.nextSibling.focus();
    }
  };

  const handleKeyDown = (e, index) => {
    if (e.key === "Backspace" && !otp[index] && e.target.previousSibling) {
      e.target.previousSibling.focus();
    }
  };

  const handleConfirm = (e) => {
    e.preventDefault();
    const code = otp.join("");
    if (code.length === 6) {
        if (fromPage === "forgot") {
            navigate("/reset");
        } else {
            setIsLoading(true);
            setTimeout(() => {
                navigate("/");
            }, 3000);
        }
    }
  };

  return (
    <div className="login-wrapper">
      <div className="login-container">
        {/* SOL TƏRƏF - LoginMain Standartı */}
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

        {/* SAĞ TƏRƏF - Şəkilə uyğunlaşdırılmış Form */}
        <div className="form-side">
          <div className="auth-cardd">
            <h3>Giriş kodu</h3>
            <p className="subtitle">
              Zəhmət olmasa, nömrənizə göndərilən 6 rəqəmli təsdiq kodunu daxil edin.
            </p>

            <form onSubmit={handleConfirm}>
              
              <div className="form-group" style={{ marginBottom: '25px', marginTop: '30px' }}>
                <div className="otp-container-box">
                    {otp.map((data, index) => (
                        <input
                        key={index}
                        type="text"
                        maxLength="1"
                        value={data}
                        disabled={isLoading}
                        onChange={(e) => handleChange(e.target, index)}
                        onKeyDown={(e) => handleKeyDown(e, index)}
                        className="otp-field"
                        />
                    ))}
                </div>
              </div>

              <p className="footer-text" style={{ marginBottom: '30px', marginTop: '0', fontSize: '13px', color: '#666' }}>
                Kodu almadınız? 
                {timer > 0 ? (
                    <span style={{ marginLeft: '5px', color: '#999' }}>
                        00:{timer < 10 ? `0${timer}` : timer}
                    </span>
                ) : null}
                <button 
                    type="button"
                    onClick={() => setTimer(59)}
                    disabled={timer > 0}
                    style={{ 
                        background: 'none', 
                        border: 'none', 
                        color: '#008767', // Şəkildəki yaşıl rəng
                        fontWeight: '500', 
                        cursor: timer > 0 ? 'default' : 'pointer',
                        marginLeft: '5px',
                        fontFamily: 'inherit',
                        fontSize: 'inherit',
                        textDecoration: 'underline',
                        opacity: timer > 0 ? 0.5 : 1
                    }}
                >
                    yenidən göndər
                </button>
              </p>

              <button
                type="submit"
                className="submit-btn"
                disabled={otp.join("").length < 6 || isLoading}
              >
                {isLoading ? "Yüklənir..." : "Davam et"}
              </button>

            </form>
          </div>
        </div>
      </div>
    </div>
  );
}

export default OtpMain;

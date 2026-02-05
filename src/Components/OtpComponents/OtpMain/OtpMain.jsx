import React, { useState, useEffect } from 'react';
import './OtpMain.scss';
import Logo from '../../../image/white-logo.png';

function OtpMain() {
  const [otp, setOtp] = useState(new Array(6).fill(""));
  const [timer, setTimer] = useState(59);
  const [hasError, setHasError] = useState(false); // Error vəziyyəti

  useEffect(() => {
    if (timer > 0) {
      const interval = setInterval(() => setTimer(timer - 1), 1000);
      return () => clearInterval(interval);
    }
  }, [timer]);

  const handleChange = (element, index) => {
    if (isNaN(element.value)) return false;
    setHasError(false); // Yazmağa başlayanda erroru silirik
    
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

  const handleConfirm = () => {
    const code = otp.join("");
    if (code !== "123456") { // Nümunə yoxlama
      setHasError(true);
    } else {
      alert("Təsdiqləndi!");
    }
  };

  return (
    <div className="otp-wrapper">
      <div className="otp-container">
        <div className="info-side">
          <div className="logo-box">
            <img src={Logo} alt="indo.az logo" />
          </div>
          <h2>Yaxşılıq etmək birgə daha asan</h2>
          <p className="description">Hər bir ianə bir ümiddir. Birlikdə daha çox insana kömək edə bilərik</p>
          <ul className="benefits-list">
            <li>Etibarlı platformada təhlükəsiz ianə</li>
            <li>Şəffaf və izlənilə bilən yardım</li>
            <li>Hədəflərinizi seçin və dəstək olun</li>
          </ul>
        </div>

        <div className="form-side">
          <div className="auth-card">
            <h3>Giriş kodu</h3>
            <p className="subtitle">
              Zəhmət olmasa nömrənizə göndərilən 6 rəqəmli təsdiq kodunu daxil edin.
            </p>

            <div className="otp-inputs">
              {otp.map((data, index) => (
                <input
                  key={index}
                  type="text"
                  maxLength="1"
                  value={data}
                  className={hasError ? "error-input" : ""}
                  onChange={(e) => handleChange(e.target, index)}
                  onKeyDown={(e) => handleKeyDown(e, index)}
                />
              ))}
            </div>

            <div className="timer-box">
              <p>
                Kodu görmədiniz? 
                <span className="time"> 00:{timer < 10 ? `0${timer}` : timer}</span>
                <button 
                  className="resend-btn" 
                  disabled={timer > 0}
                  onClick={() => setTimer(59)}
                >
                   yenidən göndər
                </button>
              </p>
            </div>

            <button 
              className="submit-btn" 
              onClick={handleConfirm}
              disabled={otp.join("").length < 6}
            >
              Davam et
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}

export default OtpMain;

import React, { useState, useEffect } from "react";
import "./EveryBodyMain.scss";
import Logo from "../../../image/Vector.svg";

function EveryBodyMain() {
  const [timeLeft, setTimeLeft] = useState({
    gün: 0,
    saat: 0,
    dəqiqə: 0,
    saniyə: 0,
  });
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");

  useEffect(() => {
    const targetDate = new Date("February 27, 2026 00:00:00").getTime();
    const timer = setInterval(() => {
      const now = new Date().getTime();
      const distance = targetDate - now;
      if (distance < 0) {
        clearInterval(timer);
        setTimeLeft({ gün: 0, saat: 0, dəqiqə: 0, saniyə: 0 });
      } else {
        setTimeLeft({
          gün: Math.floor(distance / (1000 * 60 * 60 * 24)),
          saat: Math.floor(
            (distance % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60),
          ),
          dəqiqə: Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60)),
          saniyə: Math.floor((distance % (1000 * 60)) / 1000),
        });
      }
    }, 1000);
    return () => clearInterval(timer);
  }, []);

  const handleLogin = (e) => {
    e.preventDefault();
    // Doğru məlumatlar yazıldıqda token təyin olunur
    if (username === "admin" && password === "12345") {
      localStorage.setItem("app_token", "secret_key_2026");
      window.location.href = "/"; // Səhifəni yeniləyərək yönləndirir
    } else {
      alert("İstifadəçi adı və ya şifrə yanlışdır!");
    }
  };

  return (
    <div className="coming-soon-fixed">
      <div className="content-card">
        <div className="top-section">
          <img src={Logo} alt="indo.az" className="logo" />
          <p className="tagline">
            Azərbaycanın ən böyük xeyriyyəçilik platforması
          </p>
        </div>
        <div className="middle-section">
          <h1 className="main-title">ÇOX YAXINDA</h1>
          <div className="timer-grid">
            {Object.entries(timeLeft).map(([label, value]) => (
              <div key={label} className="timer-item">
                <span className="num">{value < 10 ? `0${value}` : value}</span>
                <span className="unit">{label.toUpperCase()}</span>
              </div>
            ))}
          </div>
          <div className="progress-wrapper">
            <div className="bar" style={{ width: "45%" }}></div>
          </div>
        </div>
        <div className="bottom-section">
          <form className="mini-login" onSubmit={handleLogin}>
            <input
              type="text"
              placeholder="İstifadəçi adı"
              value={username}
              onChange={(e) => setUsername(e.target.value)}
            />
            <input
              type="password"
              placeholder="Şifrə"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
            />
            <button type="submit">DAXİL OL</button>
          </form>
          <footer className="copy">
            © 2026 indo.az. Bütün hüquqlar qorunur.
          </footer>
        </div>
      </div>
    </div>
  );
}

export default EveryBodyMain;

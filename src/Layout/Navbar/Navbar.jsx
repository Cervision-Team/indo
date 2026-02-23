import React, { useState, useEffect } from "react";
import { Link, NavLink } from "react-router-dom";
import "./Navbar.scss";
import Logo from "../../image/Vector.svg";
import { X, Menu } from "lucide-react";

function Navbar() {
  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const personalInfo = false; // Test üçün dəyişə bilərsiniz
  const userName = "Əli";

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 50);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const toggleMenu = () => setIsOpen(!isOpen);
  const closeMenu = () => setIsOpen(false);

  // Linkləri təkrarlamamaq üçün array (optional)
  const navLinks = [
    { to: "/", label: "Ana Səhifə", end: true },
    { to: "/about", label: "Haqqımızda" },
    { to: "/ianeler", label: "İanələr" },
    { to: "/team", label: "Komandamız" },
    { to: "/bloq", label: "Bloq" },
    { to: "/contact", label: "Əlaqə" },
  ];

  return (
    <header className={`header-container ${scrolled ? "scrolled" : ""}`}>
      {/* TOP BAR - Eyni qalır */}
      <div className="top-bar">
        <div className="container">
          <div className="contact-info">
            <a
              href="https://www.google.com/maps/search/?api=1&query=Nizami+street+203+AZ1010+Baku+Azerbaijan"
              target="_blank"
              rel="noopener noreferrer"
              style={{ textDecoration: "none", color: "inherit" }}
            >
              <span>Baku, Azerbaijan. Nizami street 203 AZ1010</span>
            </a>
          </div>
          <div className="contact-links">
            <span>
              Qaynar xətt: <a href="tel:+994505418049">+994 50 541 80 49</a>
            </span>
            <a href="mailto:info@indo.az">info@indo.az</a>
          </div>
        </div>
      </div>

      <nav className="navbar">
        <div className="container">
          {/* 1. SOL TƏRƏF: LOGO */}
          <div className="logo">
            <Link to="/" onClick={closeMenu}>
              <img src={Logo} alt="indo.az logo" />
            </Link>
          </div>

          {/* 2. ORTA HİSSƏ: LİNKLƏR (Desktop) */}
          <div className="nav-center desktop-only">
            <ul>
              {navLinks.map((link) => (
                <li key={link.to}>
                  <NavLink to={link.to} end={link.end}>
                    {link.label}
                  </NavLink>
                </li>
              ))}
            </ul>
          </div>

          {/* 3. SAĞ TƏRƏF: QEYDİYYAT + İANƏ (Desktop) */}
          <div className="nav-right desktop-only">
            {personalInfo ? (
              <Link to="/profile" className="user-greeting">
                Salam {userName}
              </Link>
            ) : (
              <NavLink to="/register" className="register-link">
                Qeydiyyat
              </NavLink>
            )}
            
            <Link to="/donation" className="donate-btn-desktop">
              İanə et
            </Link>
          </div>

          {/* MOBILE TOGGLE BUTTON */}
          <div className="menu-toggle" onClick={toggleMenu}>
            {isOpen ? <X size={24} className="close-icon" /> : <Menu size={24} className="menu-icon" />}
          </div>

          {/* 4. MOBİL MENYU (Overlay) */}
          <div className={`mobile-menu ${isOpen ? "active" : ""}`}>
            <ul>
              {navLinks.map((link) => (
                <li key={link.to}>
                  <NavLink to={link.to} onClick={closeMenu} end={link.end}>
                    {link.label}
                  </NavLink>
                </li>
              ))}
              
              {/* Mobil Qeydiyyat/Profil */}
              <li>
                {personalInfo ? (
                  <Link to="/profile" onClick={closeMenu} className="user-greeting">
                    Salam {userName}
                  </Link>
                ) : (
                  <NavLink to="/register" onClick={closeMenu}>
                    Qeydiyyatdan keç
                  </NavLink>
                )}
              </li>

              {/* Mobil İanə */}
              <li className="donate-mobile-li">
                <Link to="/donation" className="donate-btn-mobile" onClick={closeMenu}>
                  İanə et
                </Link>
              </li>
            </ul>
          </div>

        </div>
      </nav>
    </header>
  );
}

export default Navbar;

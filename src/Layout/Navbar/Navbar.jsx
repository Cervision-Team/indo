import React, { useState, useEffect } from "react";
import { Link, NavLink } from "react-router-dom";
import "./Navbar.scss";
import Logo from "../../image/Vector.svg";
import { X, Menu } from "lucide-react"; // npm i lucide-react

function Navbar() {
  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const personalInfo = false;
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

  return (
    <header className={`header-container ${scrolled ? "scrolled" : ""}`}>
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
          <div className="logo">
            <Link to="/" onClick={closeMenu}>
              <img src={Logo} alt="indo.az logo" />
            </Link>
          </div>

          <div className={`nav-elements ${isOpen ? "active" : ""}`}>
            <ul>
              <li><NavLink to="/" onClick={closeMenu} end>Ana Səhifə</NavLink></li>
              <li><NavLink to="/haqqimizda" onClick={closeMenu}>Haqqımızda</NavLink></li>
              <li><NavLink to="/ianeler" onClick={closeMenu}>İanələr</NavLink></li>
              <li><NavLink to="/komandamis" onClick={closeMenu}>Komandamız</NavLink></li>
              <li><NavLink to="/bloq" onClick={closeMenu}>Bloq</NavLink></li>
              <li><NavLink to="/elaqe" onClick={closeMenu}>Əlaqə</NavLink></li>
              <li>
                {personalInfo ? (
                  <Link to="/profile" onClick={closeMenu} className="user-greeting">
                    Salam {userName}
                  </Link>
                ) : (
                  <NavLink to="/register" onClick={closeMenu}>Qeydiyyatdan keç</NavLink>
                )}
              </li>
              {/* MOBILE DONATE BUTTON */}
              <li className="donate-mobile">
                <Link to="/donation" className="donate-btn" onClick={closeMenu}>
                  İanə et
                </Link>
              </li>
            </ul>
          </div>

          {/* DESKTOP DONATE */}
          <Link to="/donation" className="donate-btn-desktop" onClick={closeMenu}>
            İanə et
          </Link>

          {/* MOBILE MENU TOGGLE */}
          <div className="menu-toggle" onClick={toggleMenu}>
            {isOpen ? <X size={24} className="close-icon" /> : <Menu size={24} className="menu-icon" />}
          </div>
        </div>
      </nav>
    </header>
  );
}

export default Navbar;

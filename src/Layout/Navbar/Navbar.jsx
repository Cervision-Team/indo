import React, { useState } from 'react';
import { Link, NavLink } from 'react-router-dom'; // React Router DOM komponentləri
import './Navbar.scss';
import Logo from '../../image/Vector.svg';

function Navbar() {
  const [isOpen, setIsOpen] = useState(false);

  const closeMenu = () => setIsOpen(false);

  return (
    <header className="header-container">
      {/* Top Contact Bar */}
      <div className="top-bar">
        <div className="container">
          <div className="contact-info">
            <span>Baku, Azerbaijan. Nizami street 203 AZ1010</span>
          </div>
          <div className="contact-links">
            <span>Qaynar xətt: +050 541 80 49</span>
            <a href="mailto:info@indo.az">info@indo.az</a>
          </div>
        </div>
      </div>

      {/* Main Navigation */}
      <nav className="navbar">
        <div className="container">
          <div className="logo">
            <Link to="/" onClick={closeMenu}>
              <img src={Logo} alt="indo.az logo" />
            </Link>
          </div>

          <div className={`nav-elements ${isOpen ? 'active' : ''}`}>
            <ul>
              <li>
                <NavLink to="/" onClick={closeMenu} end>
                  Ana Səhifə
                </NavLink>
              </li>
              <li>
                <NavLink to="/haqqimizda" onClick={closeMenu}>
                  Haqqımızda
                </NavLink>
              </li>
              <li>
                <NavLink to="/ianeler" onClick={closeMenu}>
                  İanələr
                </NavLink>
              </li>
              <li>
                <NavLink to="/komandamis" onClick={closeMenu}>
                  Komandamız
                </NavLink>
              </li>
              <li>
                <NavLink to="/bloq" onClick={closeMenu}>
                  Bloq
                </NavLink>
              </li>
              <li>
                <NavLink to="/elaqe" onClick={closeMenu}>
                  Əlaqə
                </NavLink>
              </li>
              <li className="auth-link">
                <NavLink to="/register" onClick={closeMenu}>
                  Qeydiyyatdan keç
                </NavLink>
              </li>
              <li>
                <Link to="/doantion" className="donate-btn" onClick={closeMenu}>
                  İanə et
                </Link>
              </li>
            </ul>
          </div>

          <div className="menu-icon" onClick={() => setIsOpen(!isOpen)}>
            <div className={`hamburger ${isOpen ? 'open' : ''}`}></div>
          </div>
        </div>
      </nav>
    </header>
  );
}

export default Navbar;

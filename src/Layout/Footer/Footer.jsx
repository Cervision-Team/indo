import React from 'react';
import { Link } from 'react-router-dom';
import { FaInstagram, FaFacebookF, FaLinkedinIn } from 'react-icons/fa';
import { FaXTwitter } from 'react-icons/fa6';
import { HiArrowRight } from 'react-icons/hi2';
import './Footer.scss';
import Logo from '../../image/Vector.svg';

function Footer() {
  return (
    <footer className="footer">
      <div className="container">
        <div className="footer-top">
          <div className="footer-links-grid">
            <div className="footer-col">
              <h4>Şirkət</h4>
              <ul>
                <li><Link to="/about">Haqqımızda</Link></li>
                <li><Link to="/team">Komandamız</Link></li>
                <li><Link to="/donations">İanələr</Link></li>
                <li><Link to="/contact">Bizimlə əlaqə</Link></li>
              </ul>
            </div>
            <div className="footer-col">
              <h4>İnformasiya</h4>
              <ul>
                <li><Link to="/faq">FAQ</Link></li>
                <li><Link to="/blog">Bloq</Link></li>
                <li><Link to="/support">Dəstək xətti</Link></li>
              </ul>
            </div>
          </div>

          <div className="footer-subscribe">
            <div className="subscribe-box">
              <h3>Abunə ol</h3>
              <p>Hər gün bir az daha xeyirxahlıq.. Sən də bu yolun bir parçası ol! Yeniliklərdən xəbərdar olmaq üçün abunə ol.</p>
              <div className="subscribe-input">
                <input type="email" placeholder="Email ünvanı" />
                <button><HiArrowRight /></button>
              </div>
            </div>
          </div>
        </div>

        <div className="footer-bottom">
          <div className="bottom-left">
            <Link to="/terms">Terms</Link>
            <Link to="/privacy">Privacy</Link>
            <Link to="/cookies">Cookies</Link>
          </div>

          <div className="bottom-center">
            <div className="footer-logo">
              <img src={Logo} alt="indo.az" />
              </div>
          </div>

          <div className="bottom-right">
            <div className="social-icons">
              <a href="#"><FaInstagram /></a>
              <a href="#"><FaFacebookF /></a>
              <a href="#"><FaLinkedinIn /></a>
              <a href="#"><FaXTwitter /></a>
            </div>
          </div>
        </div>

        <div className="footer-copyright">
          <p>© 2025 indo.az . All Rights Reserved.</p>
        </div>
      </div>
    </footer>
  );
}

export default Footer;

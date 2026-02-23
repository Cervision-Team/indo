import React from "react";
import "./ContactMain.scss";
import {
  MapPin,
  Phone,
  Mail,
  MessageSquare,
  Send,
  RefreshCcw,
  Instagram,
  ChevronRight,
} from "lucide-react";

function ContactMain() {
  const handleSubmit = (e) => {
    e.preventDefault();
    // Form göndərmə məntiqi
  };

  return (
    <div className="contact-wrapper">
      {/* Green Header Section */}
      <div className="contact-header">
        <div className="container">
          <h1>Bizimlə Əlaqə Saxlayın</h1>
          <p>
            Hər hansı sualınız, təklifiniz və ya əməkdaşlıq üçün bizimlə əlaqə
            saxlaya bilərsiniz. Biz həmişə sizin yanınızdayıq!
          </p>
        </div>
      </div>

      <div className="container">
        <div className="contact-content">
          {/* Left Side: Info Cards */}
          <div className="info-side">
            <div className="info-card">
              <div className="icon-box-text">
                <div className="icon-box">
                  <MapPin size={24} />
                </div>
                <h3>Ofis Ünvanımız</h3>
              </div>

              <div className="details">
                <p className="bold">Bakı, Azərbaycan</p>
                <p>Nizami küçəsi 203 AZ1010</p>
                <p>Bazar ertəsi - Cümə: 09:00 - 18:00</p>
                <a href="#" className="link">
                  Xəritədə Gör <ChevronRight size={16} />
                </a>
              </div>
            </div>

            <div className="info-card">
              <div className="icon-box-text">
                <div className="icon-box">
                  <Phone size={24} />
                </div>
                <h3>Telefon</h3>
              </div>

              <div className="details">
                <p className="bold">Bizə zəng edin</p>
                <p>Qaynar xətt: +994 50 541 80 49</p>
                <p>Mobil: +994 51 541 80 49</p>
                <a href="#" className="link">
                  İndi Zəng Et <ChevronRight size={16} />
                </a>
              </div>
            </div>

            <div className="info-card">
              <div className="icon-box-text">
                <div className="icon-box">
                  <Mail size={24} />
                </div>
                <h3>Email</h3>
              </div>

              <div className="details">
                <p className="bold">Bizə Yazın</p>
                <p>Ümumi: info@indo.az</p>
                <p>Dəstək: support@indo.az</p>
                <a href="#" className="link">
                  Mesaj Yaz <ChevronRight size={16} />
                </a>
              </div>
            </div>
          </div>

          {/* Right Side: Contact Form */}
          <div className="form-side">
            <div className="form-card">
              <h3>Mesaj Göndərin</h3>
              <p className="subtitle">
                Formu doldurun və biz 24 saat ərzində sizə cavab verəcəyik.
              </p>

              <form onSubmit={handleSubmit}>
                <div className="row">
                  <div className="form-group">
                    <label>Ad *</label>
                    <input type="text" placeholder="Adınız" required />
                  </div>
                  <div className="form-group">
                    <label>Soyad *</label>
                    <input type="text" placeholder="Soyadınız" required />
                  </div>
                </div>

                <div className="row">
                  <div className="form-group">
                    <label>Email *</label>
                    <input
                      type="email"
                      placeholder="E-mail ünvanınız"
                      required
                    />
                  </div>
                  <div className="form-group">
                    <label>Telefon nömrəsi</label>
                    <div className="phone-input">
                      <select>
                        <option>+994</option>
                      </select>
                      <input type="tel" placeholder="XX XXX XX XX" />
                    </div>
                  </div>
                </div>

                <div className="form-group">
                  <label>Mövzu *</label>
                  <select required>
                    <option value="">Mövzu seçin</option>
                    <option value="1">Sosial Yardım</option>
                    <option value="2">Əməkdaşlıq</option>
                  </select>
                </div>

                <div className="form-group">
                  <label>Mesajınız *</label>
                  <textarea
                    placeholder="Mesajınızı bura yazın..."
                    rows="4"
                    required
                  ></textarea>
                </div>

                <div className="button-group">
                  <button type="submit" className="btn-send">
                    <Mail size={18} /> Mesaj Göndər
                  </button>
                  <button type="reset" className="btn-clear">
                    Sıfırla
                  </button>
                </div>
              </form>

              <div className="social-footer">
                <p>Və ya tez əlaqə</p>
                <div className="social-buttons">
                  <button className="social-btn whatsapp">
                    <MessageSquare size={18} /> Whatsapp
                  </button>
                  <button className="social-btn instagram">
                    <Instagram size={18} /> Instagram
                  </button>
                  <button className="social-btn call">
                    <Phone size={18} /> Zəng Et
                  </button>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default ContactMain;

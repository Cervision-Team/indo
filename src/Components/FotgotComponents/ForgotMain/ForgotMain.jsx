import React from "react";
import { useFormik } from "formik";
import * as Yup from "yup";
import { FaChevronDown } from "react-icons/fa";
import { MdLocalPhone } from "react-icons/md"; // LoginMain stilinə uyğun ikon
import { useNavigate } from "react-router-dom";
import Logo from "../../../image/white-logo.png";
import Icon from "../../../image/register-icon.png"; // Sol tərəfdəki siyahı üçün
import './ForgotMain.scss';

const validationSchema = Yup.object({
  phone: Yup.string()
    .matches(/^\d{2}\s?\d{3}\s?\d{2}\s?\d{2}$/, "Nümunə: 557895456")
    .required("Telefon nömrəsi mütləqdir"),
});

function ForgotMain() {
  const navigate = useNavigate();

  const formik = useFormik({
    initialValues: { phone: "" },
    validationSchema,
    onSubmit: (values) => {
      console.log("OTP göndəriləcək nömrə:", values.phone);
      navigate("/otp");
    },
  });

  return (
    <div className="login-wrapper">
      <div className="login-container">
        
        {/* Sol Tərəf - Info (Dizayn Sisteminə uyğunlaşdırıldı) */}
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

        {/* Sağ Tərəf - Form */}
        <div className="form-side">
          <div className="auth-cardd"> {/* Class adı 'auth-cardd' olaraq dəyişdirildi */}
            <h3>Şifrənizi unutmusunuz?</h3>
            <p className="subtitle">
              Mobil nömrənizi daxil edin. Təsdiq üçün sizə OTP kodu göndəriləcək.
            </p>

            <form onSubmit={formik.handleSubmit}>
              <div className="form-group">
                <label>Telefon nömrəniz*</label>
                <div
                  className={`phone-input-group ${
                    formik.touched.phone && formik.errors.phone ? "error-border" : ""
                  }`}
                >
                  <div className="country-select">
                    <span>+994</span>
                    <FaChevronDown className="arrow" />
                  </div>
                  <input
                    name="phone"
                    type="tel"
                    placeholder="557895456"
                    {...formik.getFieldProps("phone")}
                  />
                  <MdLocalPhone className="icon" />
                </div>
                {formik.touched.phone && formik.errors.phone && (
                  <span className="error-text">{formik.errors.phone}</span>
                )}
              </div>

              <button
                type="submit"
                className="submit-btn"
                disabled={formik.isSubmitting}
              >
                {formik.isSubmitting ? "Göndərilir..." : "Davam et"}
              </button>

              <p className="footer-text">
                <a href="/login" onClick={(e) => { e.preventDefault(); navigate("/login"); }}>
                  Geri qayıt
                </a>
              </p>
            </form>
          </div>
        </div>
      </div>
    </div>
  );
}

export default ForgotMain;

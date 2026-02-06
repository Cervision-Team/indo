import React from "react";
import { useFormik } from "formik";
import * as Yup from "yup";
import { FaPhone, FaChevronDown } from "react-icons/fa";
import Logo from "../../../image/white-logo.png";
import './ForgotMain.scss'

const validationSchema = Yup.object({
  phone: Yup.string()
    .matches(/^\d{2} \d{3} \d{2} \d{2}$/, "Nümunə: 55 789 54 56")
    .required("Telefon nömrəsi mütləqdir"),
});

function ForgotMain() {
  const formik = useFormik({
    initialValues: { phone: "" },
    validationSchema,
    onSubmit: (values) => {
      console.log("OTP göndəriləcək nömrə:", values.phone);
      // Bura OTP göndərmə API-ı əlavə olunacaq
    },
  });

  return (
    <div className="login-wrapper">
      <div className="login-container">
        {/* Sol tərəf (Login ilə eyni) */}
        <div className="info-side">
          <div className="logo-box">
            <img src={Logo} alt="indo.az logo" />
          </div>
          <h2>Yaxşılıq etmək birgə daha asan</h2>
          <p className="description">
            Hər bir ianə bir ümiddir. Birlikdə daha çox insana kömək edə bilərik
          </p>
          <ul className="benefits-list">
            <li>Etibarlı platformada təhlükəsiz ianə</li>
            <li>Şəffaf və izlənilə bilən yardım</li>
            <li>Hədəflərinizi seçin və dəstək olun</li>
          </ul>
        </div>

        {/* Sağ tərəf: Şifrə bərpa kartı */}
        <div className="form-side">
          <div className="auth-card">
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
                    <img src="https://flagcdn.com/w20/az.png" alt="AZ" />
                    <span>+994</span>
                    <FaChevronDown className="arrow" />
                  </div>
                  <input
                    name="phone"
                    type="tel"
                    placeholder="55 789 54 56"
                    {...formik.getFieldProps("phone")}
                  />
                  <FaPhone className="icon" />
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
                <a href="/login" style={{ fontSize: "14px" }}>Geri qayıt</a>
              </p>
            </form>
          </div>
        </div>
      </div>
    </div>
  );
}

export default ForgotMain;

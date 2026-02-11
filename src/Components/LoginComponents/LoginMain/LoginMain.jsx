import React, { useState } from "react";
import { useFormik } from "formik";
import * as Yup from "yup";
import { useNavigate } from "react-router-dom"; // Yönləndirmə üçün əlavə edildi
import "./LoginMain.scss";
import {
  FaPhone,
  FaLock,
  FaEyeSlash,
  FaEye,
  FaChevronDown,
} from "react-icons/fa";
import { FcGoogle } from "react-icons/fc";
import Logo from "../../../image/white-logo.png";

const validationSchema = Yup.object({
  phone: Yup.string()
    // Həm boşluqlu, həm də boşluqsuz 9 rəqəmli formatı qəbul edir (məs: 557895456)
    .matches(/^\d{2}\s?\d{3}\s?\d{2}\s?\d{2}$/, "Nümunə: 557895456")
    .required("Telefon nömrəsi mütləqdir"),
  password: Yup.string().required("Şifrə tələb olunur"),
});

function LoginMain() {
  const [showPassword, setShowPassword] = useState(false);
  const navigate = useNavigate(); // Hook-u çağırırıq

  const formik = useFormik({
    initialValues: { phone: "", password: "" },
    validationSchema,
    onSubmit: (values) => {
      console.log("Giriş məlumatları:", values);
      // Uğurlu giriş simulyasiyası və OTP-yə yönləndirmə
      navigate("/otp"); 
    },
  });

  return (
    <div className="login-wrapper">
      <div className="login-container">
        {/* Sol tərəf */}
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

        {/* Sağ tərəf: Giriş Kartı */}
        <div className="form-side">
          <div className="auth-card">
            <h3>Xoş gəlmisiniz</h3>
            <p className="subtitle">Sistemə giriş edin</p>

            <form onSubmit={formik.handleSubmit}>
              <div className="form-group">
                <label>Telefon nömrəniz*</label>
                <div
                  className={`phone-input-group ${formik.touched.phone && formik.errors.phone ? "error-border" : ""}`}
                >
                  <div className="country-select">
                    <img src="https://flagcdn.com/w20/az.png" alt="AZ" />
                    <span>+994</span>
                    <FaChevronDown className="arrow" />
                  </div>
                  <input
                    name="phone"
                    type="tel"
                    placeholder="557895456" // Placeholder yeniləndi
                    {...formik.getFieldProps("phone")}
                  />
                  <FaPhone className="icon" />
                </div>
                {formik.touched.phone && formik.errors.phone && (
                  <span className="error-text">{formik.errors.phone}</span>
                )}
              </div>

              <div className="form-group">
                <label>Şifrə*</label>
                <div
                  className={`input-field ${formik.touched.password && formik.errors.password ? "error-border" : ""}`}
                >
                  <FaLock className="icon-left" />
                  <input
                    name="password"
                    type={showPassword ? "text" : "password"}
                    placeholder="******"
                    {...formik.getFieldProps("password")}
                  />
                  <div
                    className="eye-icon"
                    onClick={() => setShowPassword(!showPassword)}
                  >
                    {showPassword ? (
                      <FaEye className="icon-right" />
                    ) : (
                      <FaEyeSlash className="icon-right" />
                    )}
                  </div>
                </div>
                {formik.touched.password && formik.errors.password && (
                  <span className="error-text">{formik.errors.password}</span>
                )}
                <div className="forgot-password-link">
                  <a href="/forgot">Şifrənizi unutmusunuz?</a>
                </div>
              </div>

              <button
                type="submit"
                className="submit-btn"
                disabled={formik.isSubmitting}
              >
                {formik.isSubmitting ? "Giriş edilir..." : "Daxil ol"}
              </button>

              <div className="divider">ve ya</div>

              <button type="button" className="google-btn">
                <FcGoogle size={22} />
                Google ilə daxil ol
              </button>

              <p className="footer-text">
                Hesabınız yoxdur? <a href="/register">Qeydiyyatdan keçin</a>
              </p>
            </form>
          </div>
        </div>
      </div>
    </div>
  );
}

export default LoginMain;

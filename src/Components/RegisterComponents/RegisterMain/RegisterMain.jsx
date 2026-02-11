import React, { useState } from "react";
import { useFormik } from "formik";
import * as Yup from "yup";
import { useNavigate } from "react-router-dom"; // Yönləndirmə üçün
import "./RegisterMain.scss";
import {
  FaUser,
  FaEnvelope,
  FaPhone,
  FaLock,
  FaEyeSlash,
  FaEye,
  FaChevronDown,
} from "react-icons/fa";
import { FcGoogle } from "react-icons/fc";
import Logo from "../../../image/white-logo.png";

const validationSchema = Yup.object({
  fullName: Yup.string().required("Ad və Soyad daxil edilməlidir"),
  email: Yup.string().email("Düzgün e-poçt ünvanı daxil edin"),
  phone: Yup.string()
    // Həm boşluqlu, həm də boşluqsuz 9 rəqəmli formatı qəbul edir
    .matches(/^\d{2}\s?\d{3}\s?\d{2}\s?\d{2}$/, "Nümunə: 557895456")
    .required("Telefon nömrəsi mütləqdir"),
  password: Yup.string()
    .min(8, "Şifrə ən azı 8 simvol olmalıdır")
    .matches(/[a-zA-Z]/, "Şifrədə hərflər olmalıdır")
    .matches(/[0-9]/, "Şifrədə rəqəmlər olmalıdır")
    .required("Şifrə tələb olunur"),
});

function RegisterMain() {
  const [showPassword, setShowPassword] = useState(false);
  const navigate = useNavigate(); // Hook-u çağırırıq

  const formik = useFormik({
    initialValues: {
      fullName: "",
      email: "",
      phone: "",
      password: "",
    },
    validationSchema,
    onSubmit: (values) => {
      console.log("Qeydiyyat məlumatları:", values);
      // OTP-yə yönləndiririk və haradan gəldiyimizi bildiririk (3 saniyə loading üçün)
      navigate("/otp", { state: { from: "auth" } });
    },
  });

  return (
    <div className="register-wrapper">
      <div className="register-container">
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

        <div className="form-side">
          <div className="auth-card">
            <h3>Xoş gəlmisiniz</h3>
            <p className="subtitle">Qeydiyyatdan keçin</p>

            <form onSubmit={formik.handleSubmit}>
              <div className="form-group">
                <label>Ad və Soyad*</label>
                <div
                  className={`input-field ${formik.touched.fullName && formik.errors.fullName ? "error-border" : ""}`}
                >
                  <input
                    name="fullName"
                    type="text"
                    placeholder="Güllü Əliyeva"
                    {...formik.getFieldProps("fullName")}
                  />
                  <FaUser className="icon" />
                </div>
                {formik.touched.fullName && formik.errors.fullName && (
                  <span className="error-text">{formik.errors.fullName}</span>
                )}
              </div>

              <div className="form-group">
                <label>E-poçt</label>
                <div
                  className={`input-field ${formik.touched.email && formik.errors.email ? "error-border" : ""}`}
                >
                  <input
                    name="email"
                    type="email"
                    placeholder="E-poçtunuzu daxil edin"
                    {...formik.getFieldProps("email")}
                  />
                  <FaEnvelope className="icon" />
                </div>
                {formik.touched.email && formik.errors.email && (
                  <span className="error-text">{formik.errors.email}</span>
                )}
              </div>

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
                    placeholder="557895456" // Boşluqsuz placeholder
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
                {formik.touched.password && formik.errors.password ? (
                  <span className="error-text">{formik.errors.password}</span>
                ) : (
                  <span className="hint">
                    Şifrə 8 simvol olmalıdır. ( A-Z, a-z, 0-9 )
                  </span>
                )}
              </div>

              <button
                type="submit"
                className="submit-btn"
                disabled={formik.isSubmitting}
              >
                {formik.isSubmitting ? "Gözləyin..." : "Qeydiyyatdan keç"}
              </button>

              <div className="divider">ve ya</div>

              <button type="button" className="google-btn">
                <FcGoogle size={22} />
                Google ilə daxil ol
              </button>

              <p className="footer-text">
                Hesabınız var? <a href="/login">Daxil olun</a>
              </p>
            </form>
          </div>
        </div>
      </div>
    </div>
  );
}

export default RegisterMain;

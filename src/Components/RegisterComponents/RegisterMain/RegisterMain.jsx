import React, { useState } from "react";
import { useFormik } from "formik";
import * as Yup from "yup";
import { useNavigate } from "react-router-dom";
import "./RegisterMain.scss";
import {
  FaLock,
  FaEyeSlash,
  FaEye,
  FaChevronDown,
} from "react-icons/fa";
import { FcGoogle } from "react-icons/fc";
import Logo from "../../../image/white-logo.png";
import Icon from "../../../image/register-icon.png";
import { MdLocalPhone } from "react-icons/md";
import { IoMailOutline } from "react-icons/io5";

const validationSchema = Yup.object({
  fullName: Yup.string().required("Ad və Soyad daxil edilməlidir"),
  email: Yup.string().email("Düzgün e-poçt ünvanı daxil edin"),
  phone: Yup.string()
    .matches(/^\d{2}\s?\d{3}\s?\d{2}\s?\d{2}$/, "Nümunə: 557895456")
    .required("Telefon nömrəsi mütləqdir"),
  password: Yup.string()
    .min(8, "Şifrə ən azı 8 simvol olmalıdır")
    .matches(/[a-zA-Z]/, "Şifrədə hərflər olmalıdır")
    .matches(/[0-9]/, "Şifrədə rəqəmlər olmalıdır")
    .required("Şifrə tələb olunur"),
  agreeToTerms: Yup.boolean()
    .oneOf([true], "Şərtləri qəbul etməlisiniz")
    .required("Şərtləri qəbul etməlisiniz"),
});

function RegisterMain() {
  const [showPassword, setShowPassword] = useState(false);
  const navigate = useNavigate();

  const formik = useFormik({
    initialValues: {
      fullName: "",
      email: "",
      phone: "",
      password: "",
      agreeToTerms: false,
    },
    validationSchema,
    onSubmit: (values) => {
      console.log("Qeydiyyat məlumatları:", values);
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

        <div className="form-side">
          <div className="auth-cardd">
            <h3>Xoş gəlmisiniz</h3>
            <p className="subtitle">Qeydiyyatdan keçin</p>

            <form onSubmit={formik.handleSubmit}>
              {/* Ad və Soyad */}
              <div className="form-group">
                <label>Ad və Soyad*</label>
                <div
                  className={`input-field ${
                    formik.touched.fullName && formik.errors.fullName
                      ? "error-border"
                      : ""
                  }`}
                >
                  <input
                    name="fullName"
                    type="text"
                    placeholder="Güllü Əliyeva"
                    {...formik.getFieldProps("fullName")}
                  />
                  <MdLocalPhone className="icon" />
                </div>
                {formik.touched.fullName && formik.errors.fullName && (
                  <span className="error-text">{formik.errors.fullName}</span>
                )}
              </div>

              {/* E-poçt */}
              <div className="form-group">
                <label>E-poçt</label>
                <div
                  className={`input-field ${
                    formik.touched.email && formik.errors.email
                      ? "error-border"
                      : ""
                  }`}
                >
                  <input
                    name="email"
                    type="email"
                    placeholder="E-poçtunuzu daxil edin"
                    {...formik.getFieldProps("email")}
                  />
                  <IoMailOutline className="icon" />
                </div>
                {formik.touched.email && formik.errors.email && (
                  <span className="error-text">{formik.errors.email}</span>
                )}
              </div>

              {/* Telefon */}
              <div className="form-group">
                <label>Telefon nömrəniz*</label>
                <div
                  className={`phone-input-group ${
                    formik.touched.phone && formik.errors.phone
                      ? "error-border"
                      : ""
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

              {/* Şifrə */}
              <div className="form-group">
                <label>Şifrə*</label>
                <div
                  className={`input-field ${
                    formik.touched.password && formik.errors.password
                      ? "error-border"
                      : ""
                  }`}
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

              {/* Şərtlər Checkbox */}
              <div className="terms-checkbox">
                <label className="checkbox-label">
                  <input
                    type="checkbox"
                    name="agreeToTerms"
                    checked={formik.values.agreeToTerms}
                    onChange={formik.handleChange}
                    onBlur={formik.handleBlur}
                  />
                  <span className="custom-checkbox"></span>
                  <span className="terms-text">
                    <a
                      href="https://investhome.az/terms-and-conditions"
                      target="_blank"
                      rel="noopener noreferrer"
                    >
                      Şərtlər və qaydaları
                    </a>{" "}
                    oxudum, razıyam.
                  </span>
                </label>
                {formik.touched.agreeToTerms && formik.errors.agreeToTerms && (
                  <span className="error-text">
                    {formik.errors.agreeToTerms}
                  </span>
                )}
              </div>

              {/* Submit */}
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

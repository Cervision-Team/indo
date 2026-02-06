import React, { useState } from "react";
import { useFormik } from "formik";
import * as Yup from "yup";
import { FaLock, FaEye, FaEyeSlash } from "react-icons/fa";
import Logo from "../../../image/white-logo.png";
import './ResetMain.scss'

const validationSchema = Yup.object({
  password: Yup.string()
    .min(8, "Şifrə 8 simvol olmalıdır")
    .required("Yeni şifrə tələb olunur"),
  confirmPassword: Yup.string()
    .oneOf([Yup.ref("password"), null], "Şifrələr eyni deyil")
    .required("Şifrəni təkrar daxil edin"),
});

function ResetMain() {
  const [isSuccess, setIsSuccess] = useState(false);
  const [showPass, setShowPass] = useState(false);
  const [showConfirmPass, setShowConfirmPass] = useState(false);

  const formik = useFormik({
    initialValues: { password: "", confirmPassword: "" },
    validationSchema,
    onSubmit: (values) => {
      console.log("Şifrə sıfırlandı:", values);
      setIsSuccess(true); // Uğurlu ekranı göstər
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

        {/* Sağ tərəf */}
        <div className="form-side">
          <div className="auth-card">
            {!isSuccess ? (
              <>
                <h3>Yeni şifrə təyin edin</h3>
                <p className="subtitle">Yeni şifrənizi daxil edin və təsdiqləyin.</p>

                <form onSubmit={formik.handleSubmit}>
                  <div className="form-group">
                    <label>Yeni şifrə*</label>
                    <div className={`input-field ${formik.touched.password && formik.errors.password ? "error-border" : ""}`}>
                      <FaLock className="icon-left" />
                      <input
                        type={showPass ? "text" : "password"}
                        placeholder="******"
                        {...formik.getFieldProps("password")}
                      />
                      <div className="eye-icon" onClick={() => setShowPass(!showPass)}>
                        {showPass ? <FaEye className="icon-right" /> : <FaEyeSlash className="icon-right" />}
                      </div>
                    </div>
                    <span className="hint">Şifrə 8 simvol olmalıdır. ( A-Z,a-z,0-9)</span>
                  </div>

                  <div className="form-group">
                    <label>Şifrəni təkrarla*</label>
                    <div className={`input-field ${formik.touched.confirmPassword && formik.errors.confirmPassword ? "error-border" : ""}`}>
                      <FaLock className="icon-left" />
                      <input
                        type={showConfirmPass ? "text" : "password"}
                        placeholder="******"
                        {...formik.getFieldProps("confirmPassword")}
                      />
                      <div className="eye-icon" onClick={() => setShowConfirmPass(!showConfirmPass)}>
                        {showConfirmPass ? <FaEye className="icon-right" /> : <FaEyeSlash className="icon-right" />}
                      </div>
                    </div>
                    {formik.touched.confirmPassword && formik.errors.confirmPassword && (
                      <span className="error-text">{formik.errors.confirmPassword}</span>
                    )}
                  </div>

                  <button type="submit" className="submit-btn">
                    Təsdiqlə
                  </button>
                </form>
              </>
            ) : (
              <div className="success-content">
                <img src="https://cdn-icons-png.flaticon.com/512/1644/1644011.png" alt="Uğurlu" className="success-img" />
                <h3>Şifrəniz uğurla yeniləndi</h3>
                <p className="subtitle">İndi yeni şifrə ilə hesabınıza daxil ola bilərsiniz.</p>
                <button className="submit-btn" onClick={() => window.location.href = "/login"}>
                  Daxil ol
                </button>
              </div>
            )}
          </div>
        </div>
      </div>
    </div>
  );
}

export default ResetMain;

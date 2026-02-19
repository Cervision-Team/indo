import React, { useState, useEffect } from "react";
import { useFormik } from "formik";
import * as Yup from "yup";
import { FaLock, FaEye, FaEyeSlash } from "react-icons/fa";
import { useNavigate } from "react-router-dom";
import Logo from "../../../image/white-logo.png";
import Icon from "../../../image/register-icon.png";
import SuccessIcon from "../../../image/success-icon.png"; // Şəkildəki telefon/qalxan ikonunu bura qoymalısınız
import './ResetMain.scss';

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
  const navigate = useNavigate();

  // Şəkildəki "Daxil ol" düyməsi olduğu üçün avtomatik yönləndirməni yığışdırdım
  // Və ya istəyə görə saxlaya bilərsiniz. Şəkildə "Yönləndirilirsiniz" yazısı yoxdur, ona görə sildim.

  const formik = useFormik({
    initialValues: { password: "", confirmPassword: "" },
    validationSchema,
    onSubmit: (values) => {
      console.log("Şifrə sıfırlandı:", values);
      setIsSuccess(true);
    },
  });

  return (
    <div className="login-wrapper">
      <div className="login-container">
        
        {/* SOL TƏRƏF (LoginMain standartı - Şəkil 2-dəki kimi) */}
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

        {/* SAĞ TƏRƏF */}
        <div className="form-side">
          <div className="auth-cardd">
            {!isSuccess ? (
              // ------------------------------------------
              // HAL 1: Şifrə Yeniləmə Formu (Şəkil 2)
              // ------------------------------------------
              <>
                <h3>Yeni şifrə təyin edin</h3>
                <p className="subtitle">Yeni şifrənizi daxil edin və təsdiqləyin.</p>

                <form onSubmit={formik.handleSubmit}>
                  <div className="form-group">
                    <label>Yeni şifrə*</label>
                    <div className={`input-field ${formik.touched.password && formik.errors.password ? "error-border" : ""}`}>
                      <FaLock className="icon-left" />
                      <input
                        name="password"
                        type={showPass ? "text" : "password"}
                        placeholder="******"
                        {...formik.getFieldProps("password")}
                      />
                      <div className="eye-icon" onClick={() => setShowPass(!showPass)}>
                        {showPass ? <FaEye className="icon-right" /> : <FaEyeSlash className="icon-right" />}
                      </div>
                    </div>
                    <span className="hint">Şifrə 8 simvol olmalıdır. ( A-Z,a-z,0-9)</span>
                    {formik.touched.password && formik.errors.password && (
                        <span className="error-text">{formik.errors.password}</span>
                    )}
                  </div>

                  <div className="form-group">
                    <label>Şifrəni təkrarla*</label>
                    <div className={`input-field ${formik.touched.confirmPassword && formik.errors.confirmPassword ? "error-border" : ""}`}>
                      <FaLock className="icon-left" />
                      <input
                        name="confirmPassword"
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
                    {/* Şəkildə ikinci inputun altında da hint var */}
                    <span className="hint">Şifrə 8 simvol olmalıdır. ( A-Z,a-z,0-9)</span>
                  </div>

                  <button type="submit" className="submit-btn" disabled={formik.isSubmitting}>
                    Təsdiqlə
                  </button>
                </form>
              </>
            ) : (
              // ------------------------------------------
              // HAL 2: Uğurlu Nəticə (Şəkil 3)
              // ------------------------------------------
              <div className="success-content">
                {/* Bu hissə Şəkil 3-dəki dizayna uyğundur */}
                <div className="img-wrapper">
                    {/* Şəkil 3-dəki telefon şəkli bura qoyulmalıdır */}
                    <img 
                      src={SuccessIcon} // və ya https://cdn-icons-png.flaticon.com/... linki
                      alt="Uğurlu" 
                      className="success-img"
                    />
                </div>
                
                <h3>Şifrəniz uğurla yeniləndi</h3>
                
                <p className="subtitle-success">
                    İndi yeni şifrə ilə hesabınıza daxil ola bilərsiniz.
                </p>
                
                <button className="submit-btn" onClick={() => navigate("/login")}>
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

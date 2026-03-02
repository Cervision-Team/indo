import React, { useState } from "react";
import "./VolunteerMain.scss";
import background from "../../../image/contact-header.png";
function VolunteerMain() {
  const [activeStep, setActiveStep] = useState(1);

  // Addım dəyişmək üçün funksiyalar
  const handleNext = () => {
    if (activeStep < 3) setActiveStep(activeStep + 1);
  };

  const handleBack = () => {
    if (activeStep > 1) setActiveStep(activeStep - 1);
  };

  const setStep = (step) => {
    setActiveStep(step);
  };

  // Addım nömrəsinə görə formun məzmununu qaytaran funksiya
  const renderFormContent = () => {
    switch (activeStep) {
      case 1:
        return (
          <>
            <div className="form-header">
              <h2>Şəxsi məlumatlar</h2>
              <p>Əlaqə və iş təcrübəsi</p>
            </div>
            <div className="form-grid">
              <div className="input-group">
                <label>Ad*</label>
                <input type="text" placeholder="Güllü" />
              </div>
              <div className="input-group">
                <label>Soyad*</label>
                <input type="text" placeholder="Əliyeva" />
              </div>
              <div className="input-group">
                <label>Email*</label>
                <input type="email" placeholder="sevgi@gmail.com" />
              </div>
              <div className="input-group">
                <label>Telefon*</label>
                <input type="tel" placeholder="+9947895554" />
              </div>
            </div>
            <div className="experience-section">
              <div className="experience-header">
                <h3>Təcrübələr</h3>
                <button className="btn-add-experience">
                  + Təcrübə əlavə et
                </button>
              </div>
              <div className="empty-experience">Təcrübə əlavə edilməyib</div>
            </div>
          </>
        );
      case 2:
        return (
          <>
            <div className="form-header">
              <h2>Digər məlumatlar</h2>
              <p>Təhsil, ünvan və digərləri</p>
            </div>
            <div className="form-grid">
              <div className="input-group">
                <label>Təhsil*</label>
                <input type="text" placeholder="Bakı Dövlət Universiteti" />
              </div>
              <div className="input-group">
                <label>Ünvan*</label>
                <input type="text" placeholder="Bakı ş. Nərimanov ray" />
              </div>
            </div>

            <div className="skills-section">
              <h3>Bacarıqlar</h3>
              <div className="skills-tags">
                <span className="tag">Təlim</span>
                <span className="tag">Tibb</span>
                <span className="tag">Texnologiya</span>
                <span className="tag">İdarəetmə</span>
                <span className="tag">Marketinq</span>
                <span className="tag">Təşkilatçılıq</span>
                <span className="tag">Dizayn</span>
                <span className="tag">Tərcümə</span>
              </div>
            </div>

            <div className="motivation-section">
              <h3>Motivasiya məktubu</h3>
              <textarea placeholder="Niyə könüllü olmaq istəyirsiniz?"></textarea>
            </div>
          </>
        );
      case 3:
        return (
          <>
            <div className="form-header">
              <h2>Ön baxış</h2>
              <p>Bütün məlumatların doğruluğunu yoxlayın.</p>
            </div>
            <div className="preview-grid">
              {/* Ad Soyad qismi (Şəkil 3-dəki kimi non-editable görünüş) */}
              <div className="form-grid">
                <div className="input-group">
                  <label>Ad*</label>
                  <input type="text" value="Güllü" disabled />
                </div>
                <div className="input-group">
                  <label>Soyad*</label>
                  <input type="text" value="Əliyeva" disabled />
                </div>
                <div className="input-group">
                  <label>Email*</label>
                  <input type="email" value="sevgi@gmail.com" disabled />
                </div>
                <div className="input-group">
                  <label>Telefon*</label>
                  <input type="tel" value="+9947895554" disabled />
                </div>
              </div>

              <div className="experience-section">
                <div className="experience-header">
                  <h3>Təcrübələr</h3>
                  <button className="btn-add-experience">
                    + Təcrübə əlavə et
                  </button>
                </div>
                <div className="document-item">
                  <span className="doc-icon">📄</span>
                  <span className="doc-name">
                    Lorem_ipsum_has been the 5.2MBPS
                  </span>
                  <span className="doc-date">08.02.2026</span>
                </div>
              </div>

              <div className="form-grid">
                <div className="input-group">
                  <label>Təhsil*</label>
                  <input
                    type="text"
                    value="Bakı Dövlət Universiteti"
                    disabled
                  />
                </div>
                <div className="input-group">
                  <label>Ünvan*</label>
                  <input type="text" value="Bakı ş. Nərimanov ray" disabled />
                </div>
              </div>

              <div className="skills-section">
                <h3>Bacarıqlar</h3>
                <div className="skills-tags">
                  <span className="tag">Təlim</span>
                  <span className="tag">Tibb</span>
                  <span className="tag">Texnologiya</span>
                  <span className="tag">İdarəetmə</span>
                  <span className="tag">Marketinq</span>
                  <span className="tag active">Təşkilatçılıq</span>
                  <span className="tag active">Dizayn</span>
                  <span className="tag">Tərcümə</span>
                </div>
              </div>

              <div className="motivation-section">
                <h3>Motivasiya məktubu</h3>
                <div className="motivation-preview">
                  Vebsaytınızda Kompyuter elmləri və Mühəndislik üzrə bakalavr
                  təhsili haqqında məlumatları böyük maraqla oxudum. Motivasiya
                  məktubu ilə bu ixtisas üçün namizədliyimi irəli sürmək
                  istədim. 2016-cı ildə ADA universitetinin IT ixtisasını
                  bitirmişəm...
                </div>
              </div>
            </div>
          </>
        );
      default:
        return null;
    }
  };

  return (
    <div className="volunteer-main">
      <div className="volunteer-header" style={{ backgroundImage: background }}>
        <div className="container">
          <h1>Könüllü Müraciəti</h1>
          <p>Könüllü kimi qoşulmaq üçün formu doldurun</p>
        </div>
      </div>

      <div className="volunteer-content container">
        <div className="sidebar">
          <div className="card steps-card">
            <h3>Addımlar</h3>
            <span className="step-count">{activeStep}/3</span>

            {/* Step 1 */}
            <div
              className={`step ${activeStep === 1 ? "active" : ""} ${activeStep > 1 ? "completed" : ""}`}
              onClick={() => setStep(1)}
              style={{ cursor: "pointer" }}
            >
              <div className="step-icon">{activeStep > 1 ? "✓" : "1"}</div>
              <div className="step-info">
                <h4>Şəxsi məlumatlar</h4>
                <p>Əlaqə və iş təcrübəsi</p>
              </div>
            </div>

            {/* Step 2 */}
            <div
              className={`step ${activeStep === 2 ? "active" : ""} ${activeStep > 2 ? "completed" : ""}`}
              onClick={() => setStep(2)}
              style={{ cursor: "pointer" }}
            >
              <div className="step-icon">{activeStep > 2 ? "✓" : "2"}</div>
              <div className="step-info">
                <h4>Digər məlumatlar</h4>
                <p>Təhsil, ünvan və digərləri</p>
              </div>
            </div>

            {/* Step 3 */}
            <div
              className={`step ${activeStep === 3 ? "active" : ""}`}
              onClick={() => setStep(3)}
              style={{ cursor: "pointer" }}
            >
              <div className="step-icon">3</div>
              <div className="step-info">
                <h4>Ön baxış</h4>
                <p>Yekun yoxlama və təsdiq</p>
              </div>
            </div>
          </div>

          <div className="card requests-card">
            <div className="requests-header">
              <div className="requests-info">
                <h3>Sorğularım</h3>
                <p>Əvvəl göndərdiyiniz müraciətlər</p>
              </div>
              <a href="#all" className="view-all">
                Formu Yenilə
              </a>
            </div>
            <p className="error-text">Sorğular yüklənmədi</p>
          </div>
        </div>

        <div className="main-form">
          <div className="card form-card">
            {/* Dinamik Form Məzmunu */}
            {renderFormContent()}

            {/* Form Düymələri */}
            <div className="form-actions">
              <button
                className="btn-back"
                onClick={handleBack}
                disabled={activeStep === 1}
              >
                Geri
              </button>

              {activeStep < 3 ? (
                <button className="btn-next" onClick={handleNext}>
                  Növbəti
                </button>
              ) : (
                <button className="btn-next">Göndər</button>
              )}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default VolunteerMain;

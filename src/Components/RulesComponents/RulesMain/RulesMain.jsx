import React from "react";
import "./RulesMain.scss";
import { FileText } from "lucide-react"; // İkonlar üçün
import Icon1 from "../../../image/rules-icon1.png";
import Icon2 from "../../../image/rules-icon2.png";
import Icon3 from "../../../image/rules-icon3.png";
import Icon4 from "../../../image/rules-icon4.png";
import Icon5 from "../../../image/rules-icon5.png";
import Icon6 from "../../../image/rules-icon6.png";

function RulesMain() {
  const lastUpdated = "28 Yanvar 2026";

  const rulesData = [
    {
      id: 1,
      title: "Qəbul və Razılıq",
      icon: Icon1,
      content: [
        "Xeyriyyə platformasından istifadə etməklə, bu istifadə şərtlərini tam olaraq oxuduğunuzu, başa düşdüyünüzü və qəbul etdiyinizi təsdiq edirsiniz. Əgər bu şərtlərlə razı deyilsinizsə, xahiş edirik platformamızdan istifadə etməyin.",
        "Platformamız yalnız 18 yaşından yuxarı istifadəçilər üçün nəzərdə tutulmuşdur.",
        "Qeydiyyatdan keçməklə yaşınızın 18-dən yuxarı olduğunu təsdiq edirsiniz.",
      ],
    },
    {
      id: 2,
      title: "İstifadəçi Hesabları",
      icon: Icon2,
      content: [
        "Platformamızda hesab yaratmaq üçün düzgün və tam məlumat təqdim etməlisiniz. Hesab məlumatlarınızın məxfiliyini qorumaq və hesabınızda baş verən bütün fəaliyyətlərə görə məsuliyyət daşımaq sizin öhdəliyinizdir.",
        "Yalnız bir hesab yarada bilərsiniz",
        "Şifrənizi heç kimlə paylaşmamalısınız",
        "Hesabınızda şübhəli fəaliyyət aşkar etsəniz, dərhal bizimlə əlaqə saxlayın",
        "Hesab məlumatlarınızı aktual saxlamalısınız",
      ],
    },
    {
      id: 3,
      title: "İanələr və Ödənişlər",
      icon: Icon3,

      content: [
        "Platformamız vasitəsilə edilən bütün ianələr könüllüdür və geri qaytarılmır. İanə edərkən aşağıdakı şərtləri qəbul edirsiniz:",
        "İanələr müvafiq kampaniyalara yönəldiləcək",
        "Şifrənizi heç kimlə paylaşmamalısınız", // (Şəkildə təkrar gedib, amma olduğu kimi yazdım)",
        "Hesabınızda şübhəli fəaliyyət aşkar etsəniz, dərhal bizimlə əlaqə saxlayın",
        "Hesab məlumatlarınızı aktual saxlamalısınız",
      ],
    },
    {
      id: 4,
      title: "Qadağan Edilən Fəaliyyətlər",
      icon: Icon4,
      content: [
        "Platformadan istifadə edərkən aşağıdakı fəaliyyətlər qadağandır:",
        "Saxta və ya aldadıcı məlumat paylaşmaq",
        "Digər istifadəçiləri aldatmaq və ya onlara zərər vermək",
        "Platformanın təhlükəsizliyini pozmağa cəhd etmək",
        "Spam və ya avtomatlaşdırılmış sistemlərdən istifadə etmək",
        "Müəllif hüquqlarını pozacaq məzmun yerləşdirmək",
      ],
    },
    {
      id: 5,
      title: "Məsuliyyətin Məhdudlaşdırılması",
      icon: Icon5,
      content: [
        "Xeyriyyə platforması kampaniya təşkilatçıları və ianə edənlər arasında vasitəçi rolunu oynayır. Biz kampaniyaların həqiqiliyinə görə tam məsuliyyət daşımırıq, lakin hər bir kampaniyanı yoxlayır və təsdiq edirik.",
        "Platformadan istifadə nəticəsində yarana biləcək hər hansı birbaşa və ya dolayı zərərə görə məsuliyyət daşımırıq.",
      ],
    },
    {
      id: 6,
      title: "Şərtlərdə Dəyişikliklər",
      icon: Icon6,
      content: [
        "Bu istifadə şərtlərini istənilən vaxt dəyişdirmək hüququmuz var. Dəyişikliklər platformada dərc edildikdən sonra qüvvəyə minir. Davamlı istifadə dəyişiklikləri qəbul etdiyiniz hesab olunur.",
      ],
    },
  ];

  return (
    <div className="rules-wrapper">
      <div className="rules-container">
        {/* HEADER */}
        <div className="rules-header">
          <div className="icon-box">
            <FileText className="icon" size={32} />
          </div>
          <div className="title-box">
            <h1>İstifadə Şərtlər</h1>
            <span className="last-updated">Son yenilənmə: {lastUpdated}</span>
          </div>
        </div>

        {/* CONTENT */}
        <div className="rules-content">
          {rulesData.map((rule) => (
            <div key={rule.id} className="rule-section">
              <div className="section-title">
                <span className="section-icon">
                  <img src={rule.icon} alt="" />
                </span>
                <h2>
                  {rule.id}. {rule.title}
                </h2>
              </div>
              <div className="section-text">
                {rule.content.map((text, index) => (
                  <p key={index}>{text}</p>
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}

export default RulesMain;

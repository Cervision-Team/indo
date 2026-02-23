import React from "react";
import "./RulesMain.scss";
import { FileText } from "lucide-react";
import Icon1 from "../../../image/rules-icon1.png";
import Icon2 from "../../../image/rules-icon2.png";
import Icon3 from "../../../image/rules-icon3.png";
import Icon4 from "../../../image/rules-icon4.png";
import Icon5 from "../../../image/rules-icon5.png";
import Icon6 from "../../../image/rules-icon6.png";

function RulesMain() {
  const lastUpdated = "22 Fevral 2026";

  const rulesData = [
    {
      id: 1,
      title: "Biz Kimik və Məxfilik Öhdəliyimiz",
      icon: Icon1,
      content: [
        "Biz kimik?",
        "indo.az sosial cəhətdən həssas əhali qruplarına sosial dəstək və inkişaf yönümlü xeyriyyə fəaliyyətlərinin və hüquqi maarifləndirmənin həyata keçirilməsi üzrə aparıcı milli təminatçılarından və Azərbaycanın ən böyük xeyriyyəçilik platformasıdır.",
        "Məxfilik öhdəliyimiz:",
        "Bizə təqdim olunan şəxsi məlumatların qorunmasına olan məsuliyyətimizi ciddi şəkildə qəbul edirik. Bu bəyanat, bu məlumatların necə toplandığını, necə istifadə olunduğunu, necə qorunduğunu və sizin məxfilik hüquqlarınızı (əgər tətbiq olunursa) izah edir.",
        "Bu Məxfilik Bəyanatı dəyişərsə:",
        "indo.az bu Məxfilik Bəyanatını zaman-zaman yeniləyə bilər. Belə hallarda, yenilənmiş bəyanat bu səhifədə dərc olunacaq və lazım gəldikdə ana səhifəmizdə bildiriş yerləşdiriləcək. Dəyişiklikləri nəzərdən keçirmək üçün bu səhifəyə qayıda bilərsiniz. Bundan əlavə, bizdə olan şəxsi məlumatlarınızın dəqiq, aktual və müvafiq olması vacibdir. Bizimlə münasibətiniz dövründə məlumatlarınızda dəyişiklik olarsa, zəhmət olmasa bizi məlumatlandırın."
      ],
    },
    {
      id: 2,
      title: "Topladığımız Şəxsi Məlumatlar (Kommersiya və Əlaqə)",
      icon: Icon2,
      content: [
        "Aşağıdakı şəxsi məlumat kateqoriyaları nəyin toplanıldığını, haradan və niyə toplandığını və kimlərlə paylaşa biləcəyimizi göstərir. Saytdan istifadə etdiyiniz xidmətlərə və indo.az ilə əlaqənizin xarakterinə görə, aşağıda sadalanan bütün şəxsi məlumatlar toplanmaya da bilər.",
        "1. Kommersiya Məlumatları",
        "Daxil ola bilər: Hər kəs.",
        "Məlumatın mənbələri: Birbaşa olaraq sizdən, Açıq ictimai məlumat bazaları, Rəqəmsal marketinq və analitika xidmətləri göstərən üçüncü şəxslər (məsələn: reklam ID-ləri olan kukilər vasitəsilə), Hüquqi nümayəndələr, Ödəniş prosessorları və maliyyə qurumları, Fırıldaqçılığın qarşısını alan xidmət təminatçıları, Məlumat yoxlayan digər şəxslər, Sosial media platformaları, Sizin kompüter və mobil cihazlarınız, Kukilər və bənzər texnologiyalar, Zəng mərkəzimizə zəng etdikdə və ya bizi ziyarət etdikdə (məsələn, qapalı dövrə müşahidə sistemi çəkilişləri), Cihazlarınız və tətbiqləriniz (avtomatik).",
        "Toplanma məqsədləri: İstifadəçi və xidmət uyğunluğunu müəyyənləşdirmək, Xidmət göstərmək və idarə etmək, Ödəniş və hesablamaların aparılması, Marketinq, reklam və məhsul təşviqatı, Rəqəmsal analiz və ehtiyacların müəyyən edilməsi, Hüquqi və tənzimləyici tələblərə uyğunluq, Fırıldaqçılığın qarşısını alma və riskin azaldılması.",
        "Məlumatın paylaşılacağı tərəflər: indo.az əməkdaşları, Hüquqi nümayəndələr, Marketinq partnyorları, Məhsul/tətbiq təminatçıları, Maliyyə qurumları və ödəniş sistemləri, Poçt və kuryer xidmətləri, Analitika və reklam təminatçıları, İT və təhlükəsizlik xidmətləri, Mühasiblər və hüquqşünaslar, Tənzimləyici orqanlar.",
        "2. Əlaqə məlumatları",
        "Daxil ola bilər: Ad, soyad, Ünvan, Elektron poçt ünvanı, Telefon nömrəsi.",
        "Məlumatın mənbələri: Siz (birbaşa), Hüquqi nümayəndələr, Ödəniş sistemləri, İT avadanlıqları və tətbiqlər, Məlumat yoxlayan üçüncü tərəflər.",
        "Toplanma məqsədləri: Uyğunluğun müəyyənləşdirilməsi, Xidmət göstərilməsi və idarə olunması, Sizinlə ünsiyyətin qurulması, Hesabların hazırlanması və ödənişlərin toplanması, Marketinq, yeniliklər və tətbiqlərlə bağlı məlumat verilməsi, Hüquqi öhdəliklərə əməl olunması, Sistem və məlumat təhlükəsizliyinin təmin edilməsi, Müqavilə öhdəliklərinin yerinə yetirilməsi.",
        "Məlumatın paylaşılacağı tərəflər: indo.az əməkdaşları, Marketinq və reklam təminatçıları, Hüquqşünaslar, tənzimləyici orqanlar, Fırıldaqçılığa qarşı xidmətlər, İT təhlükəsizliyi və proqram təminatçıları."
      ],
    },
    {
      id: 3,
      title: "Maliyyə və Şəxsiyyət Məlumatları",
      icon: Icon3,
      content: [
        "3. Maliyyə Məlumatları",
        "Daxil ola bilər: Bank hesab nömrəsi, kredit və ya debet kartı nömrəsi, ödəniş məbləğləri, maliyyə imkanları və digər maliyyə məlumatları.",
        "Mənbələr: Sizin tərəfinizdən birbaşa təqdim edilən məlumatlar, Açıq mənbələr, Səlahiyyətli/hüquqi nümayəndələr, Ödəniş əməliyyatlarını həyata keçirən maliyyə institutları, Dələduzluğun qarşısının alınması ilə məşğul olan üçüncü tərəflər, Təqdim etdiyiniz məlumatı yoxlayan digər üçüncü şəxslər.",
        "Toplanma məqsədləri: İanələrin qeydə alınması və ödəniş proseslərinin icrası, Sosial yardım və xeyriyyə xidmətləri üzrə öhdəliklərin yerinə yetirilməsi, İanə etdiyiniz və ya müraciət etdiyiniz sosial layihələrin icrasının təmin olunması, Müəyyən sosial yardım və hüquqi maarifləndirmə xidmətlərinə uyğunluğun qiymətləndirilməsi, Müraciət və fəaliyyətlərinizə dair ehtiyac və maraqların daha yaxşı anlaşılması, Daxili təhlillərin aparılması, Qanuni və normativ öhdəliklərə əməl edilməsi, Sizi və istifadə etdiyiniz cihaz(lar)ı identifikasiya etmək.",
        "Paylaşıla biləcək tərəflər: indo.az əməkdaşları, Səlahiyyətli/hüquqi nümayəndələr, Sifariş icrası xidmətləri göstərən üçüncü tərəflər, Maliyyə institutları, Digər lazımi tərəflər, Dələduzluğun qarşısının alınması ilə məşğul olan tərəflər, Hüquqşünaslarımız, auditorlarımız və məsləhətçilərimiz, Qanunla tələb olunan hallarda hüquqi və tənzimləyici orqanlar.",
        "4. Şəxsiyyəti Təsdiqləyən Məlumatlar",
        "Daxil ola bilər: Doğum tarixi, yaşayış yerini təsdiq edən sənədlər, dövlət tərəfindən verilmiş şəxsiyyət vəsiqəsi, sürücülük vəsiqəsi nömrəsi, pasport nömrəsi və ya digər oxşar identifikasiya vasitələri.",
        "Mənbələr: Sizin tərəfinizdən təqdim edilən məlumat, Səlahiyyətli/hüquqi nümayəndələr, Dələduzluğun qarşısının alınması ilə məşğul olan üçüncü tərəflər, Məlumatlarınızı yoxlayan digər üçüncü şəxslər, Bizimlə əlaqə saxladığınız və ya bizi ziyarət etdiyiniz zaman.",
        "Toplanma məqsədləri: İanə və digər ödənişlərlə bağlı öhdəliklərin yerinə yetirilməsi, İT sistemlərinə girişin təmin edilməsi və təhlükəsizliyin qorunması, Dələduzluq və sui-istifadə hallarının qarşısının alınması, Qanuni və tənzimləyici öhdəliklərin icrası.",
        "Paylaşılan tərəflər: indo.az əməkdaşları, Hüquqi nümayəndələr, Ödəniş sistemlərinin və təhlükəsizlik tədbirlərinin icrasında iştirak edən tərəflər, Hüquqşünaslar, auditorlar, məsləhətçilər, Qanunvericiliyə əsasən müvafiq orqanlar."
      ],
    },
    {
      id: 4,
      title: "Məkan, Peşəkar və Digər Məlumatlar",
      icon: Icon4,
      content: [
        "5. Məkan Məlumatları",
        "Daxil ola bilər: GPS koordinatları və ya cihazın yerləşdiyi yerə dair bənzər məlumatlar.",
        "Mənbələr: Sayt və xidmətlərdən istifadə zamanı, İstifadəçi tərəfindən birbaşa təqdim olunan məlumatlar, Mobil və digər internetə qoşulmuş cihazlar vasitəsilə avtomatik əldə olunan yerləşmə məlumatları.",
        "Toplanma məqsədləri: Sosial yardım xidmətlərinə uyğunluğun müəyyən edilməsi, Təhlükəsizlik insidentlərinin aşkar edilməsi, Saytın istifadəsi zamanı daxili siyasətlərə əməl olunmasının monitorinqi, İdentifikasiya proseslərinin həyata keçirilməsi.",
        "6. Peşəkar Məlumatlar",
        "Daxil ola bilər: İş vəzifəsi, tutduğu mövqe, çalışdığı təşkilat, tabelilik strukturu və s.",
        "Toplanma məqsədləri: Sosial yardım proqramlarına uyğunluğun müəyyən edilməsi, Xidmətlərin effektiv çatdırılması, İctimai maarifləndirmə və sosial təşəbbüslərin təşkili.",
        "7. İcarəçi Məlumatları (Tenant data)",
        "Daxil ola bilər: İstehlak göstəriciləri, ailə üzvləri haqqında məlumatlar.",
        "Toplanma məqsədləri: Məhsul və xidmətlər üzrə uyğunluğun müəyyən edilməsi, İdarəetmə, təhlil və xidmətlərin təkmilləşdirilməsi.",
        "8. Vizual və Səs Yazıları",
        "Daxil ola bilər: Zənglərin yazıları, səsli əmrlər, fotoşəkillər, təhlükəsizlik kameraları vasitəsilə qeydə alınan görüntülər.",
        "9. Yazılı İmza",
        "Daxil ola bilər: Müqavilələrdə və ya icarə sənədlərindəki yazılı imza."
      ],
    },
    {
      id: 5,
      title: "Hüquqi Əsaslar və Məxfilik Sorğuları",
      icon: Icon5,
      content: [
        "Məlumatların Emalı üçün Hüquqi Əsaslar:",
        "Şəxsi məlumatların və xüsusi kateqoriyalı məlumatların emalı müvafiq məxfilik qanunvericiliyinə uyğun aşağıdakı hüquqi əsaslarla həyata keçirilir: Müqavilənin icrası üçün zərurət, Hüquqi öhdəliklərin yerinə yetirilməsi, İcazəniz əsasında, Bizim qanuni maraqlarımız əsasında.",
        "Qanuni maraqlara əsaslanaraq, şəxsi məlumatlardan biznesin idarə olunması və xidmətlərin göstərilməsi məqsədi ilə istifadə edilir. Əgər siz bu məlumatları təqdim etməsəniz, bəzi məhsul və xidmətləri təqdim edə bilmərik.",
        "Hər hansı bir sual vermək istəyirsinizsə:",
        "Əgər şəxsi məlumatlarınızın işlənməsi ilə bağlı narahatlığınız varsa və ya hər hansı sualınız yaranıbsa, zəhmət olmasa məxfiliklə bağlı müraciətlər üçün onlayn formanı doldurun və ya bizə yazın.",
        "Email: (private)",
        "Yazılı formada əlaqə: indo.az, (Poçt indeksi). Qəbul edən şəxs: ...",
        "Şəxsi məlumatlarla bağlı olmayan suallar üçün zəhmət olmasa ümumi əlaqə vasitələrimizdən istifadə edin."
      ],
    },
    {
      id: 6,
      title: "İstifadə Qaydaları və Qeydiyyat",
      icon: Icon6,
      content: [
        "İSTİFADƏ QAYDALARI VƏ HÜQUQİ QEYD",
        "Zəhmət olmasa, bu vebsaytdan istifadədən əvvəl aşağıdakı qaydaları diqqətlə oxuyun.",
        "Qaydaların qəbul edilməsi:",
        "“indo.az” vebsaytı, əlaqəli mobil tətbiqləri və onların vasitəsilə təqdim edilən bütün xidmət və məzmunu (“Sayt”) sizin şəxsi istifadəniz üçün təqdim edir. Sayta daxil olmaqla və ya ondan istifadə etməklə, bu İstifadə Qaydalarını qeyd-şərtsiz qəbul etmiş sayılırsınız. Əgər bu İstifadə Qaydaları ilə razı deyilsinizsə, zəhmət olmasa Saytdan istifadə etməyin. Əgər siz bu qaydaları hüquqi şəxs adından qəbul edirsinizsə, təsdiq edirsiniz ki, həmin hüquqi şəxsi bu şərtlərlə hüquqi cəhətdən bağlamaq səlahiyyətiniz var.",
        "Qeydiyyat:",
        "Saytın müəyyən funksiyalarından istifadə etmək üçün siz qeydiyyatdan keçməli və hesab yaratmalısınız. Bəzi məlumatlara baxış yalnız sizin onlayn məxfilik razılaşmasını qəbul etməniz şərti ilə mümkün ola bilər.",
        "Qeydiyyat zamanı özünüz və/və ya təmsil etdiyiniz təşkilat barəsində doğru, dəqiq və aktual məlumatlar təqdim etməli, bu məlumatları zərurət olduqda yeniləməlisiniz. Şəxsi şifrənizi heç kimlə paylaşmamalı və onun məxfiliyini qorumalısınız. Əməkdaşınız sayta giriş səlahiyyətini itirdikdə, dərhal indo.az-a bu barədə məlumat verməlisiniz."
      ],
    },
    {
      id: 7,
      title: "Xidmətlər və Saytdan İstifadə",
      icon: Icon1,
      content: [
        "Xidmətlərin təsviri: Sayt üzərindən indo.az tərəfindən təqdim edilən müxtəlif xidmətlər mövcuddur.",
        "Məlumatların düzgünlüyü: indo.az saytda yerləşdirilən məlumatların mümkün qədər dəqiq və etibarlı olmasına çalışır. Bununla belə, məzmunun bir hissəsi süni intellekt və digər avtomatlaşdırılmış texnologiyalar vasitəsilə formalaşdırıla bildiyindən, məlumatların tam və dəyişməz dəqiqliyinə zəmanət verilmir.",
        "Saytda dəyişikliklər: indo.az bu Saytda və ya onun vasitəsilə təqdim olunan xidmətlərdə istənilən vaxt dəyişiklik etmək hüququnu özündə saxlayır. Belə dəyişikliklər barədə əvvəlcədən xəbərdarlıq edilməyə bilər.",
        "Saytdan istifadə şərtləri: Saytdan yalnız şəxsi və qeyri-kommersiya məqsədləri üçün istifadə edilməsinə icazə verilir. Saytda yerləşdirilən bütün məzmunlar — o cümlədən mətnlər, vizual materiallar, loqolar və proqram təminatı — indo.az və ya “İnkişafa doğru imkansız ailələrə sosial yardım və hüquqi maarifləndirmə” İctimai Birliyinə məxsusdur və qüvvədə olan qanunvericiliklə qorunur. Saytda yerləşdirilən materiallardan istifadə sizə hər hansı müəlliflik və ya mülkiyyət hüququ vermir.",
        "Aşağıdakılar qəti qadağandır:",
        "1. Saytdakı məlumatları sistematik olaraq toplayaraq baza yaratmaq.",
        "2. Saytı və ya onun hissələrini “ayna etmək” (təkrarlamaq).",
        "3. Saytın qorunmasını təmin edən texnoloji tədbirləri pozmaq və ya əngəlləmək.",
        "4. Saytın koduna, sisteminə və ya onun texniki təminatına icazəsiz müdaxilə etmək."
      ],
    },
    {
      id: 8,
      title: "Məzmun, Məsuliyyət və Əlaqə",
      icon: Icon2,
      content: [
        "İstifadəçi Məzmunu:",
        "Əgər siz Sayt üzərindən hər hansı məzmun təqdim edirsinizsə (şəkil, elan, rəy və s.), bu zaman indo.az həmin məzmundan limitsiz istifadə etmək, onu paylaşmaq, redaktə etmək və təqdim etmək hüququ əldə edir. Siz təqdim etdiyiniz məzmunun hüquqlarına malik olduğunuzu və üçüncü şəxslərin hüquqlarını pozmadığını təsdiq edirsiniz.",
        "Məsuliyyətin Məhdudlaşdırılması:",
        "indo.az heç bir halda aşağıdakılara görə məsuliyyət daşımır: Saytın fəaliyyətində yaranmış texniki nasazlıqlar; Sayt vasitəsilə əldə edilmiş məlumatlara əsaslanan qərarlardan irəli gələn nəticələr; Üçüncü tərəf vebsaytlarına keçidlərdən qaynaqlanan zərərlər; Gözlənilən faydanın əldə olunmaması və ya itkilər.",
        "Üçüncü Tərəflərə Aid Keçidlər:",
        "Saytımızda istifadəçilərin rahatlığı üçün üçüncü tərəflərə məxsus digər vebsaytlara keçidlər təqdim edilə bilər. Lakin həmin saytlar indo.az tərəfindən idarə olunmur və onların məxfilik siyasəti, hüquqi şərtləri və məzmunlarına görə məsuliyyət daşımırıq. Belə keçidlərdən istifadə tamamilə sizin riskiniz altındadır.",
        "Yurisdiksiya:",
        "indo.az saytına daxil olmaqla, siz bu İstifadə Şərtləri ilə bağlı yaranan hər hansı mübahisənin Azərbaycan Respublikasının qanunvericiliyinə uyğun şəkildə tənzimlənəcəyini və müvafiq məhkəmələrdə baxılacağını qəbul edirsiniz. Əgər bu Şərtlərin hər hansı bir bəndi qanunsuz və ya icra olunmaz hesab edilərsə, həmin bənd ayrılacaq və qalan bəndlər öz qüvvəsində qalacaq.",
        "Əlaqə:",
        "Məxfilik və ya bu qaydalarla bağlı hər hansı sualınız və ya narahatlığınız olduqda aşağıdakı vasitələrlə bizimlə əlaqə saxlaya bilərsiniz:",
        "Ünvan: (salonun real ünvanı)",
        "Telefon: (əlavə ediləcək)",
        "E-mail: (əlavə ediləcək)"
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
            <h1>Məxfilik və İstifadə Şərtləri</h1>
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

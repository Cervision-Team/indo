import {
  BrowserRouter,
  Route,
  Routes,
  useLocation,
  Navigate,
} from "react-router-dom";
import "./App.css";
import Footer from "./Layout/Footer/Footer";
import Navbar from "./Layout/Navbar/Navbar";
import HomePage from "./Pages/HomePage";
import RegisterPage from "./Pages/RegisterPage";
import LoginPage from "./Pages/LoginPage";
import OtpPage from "./Pages/OtpPage";
import EveryBody from "./Pages/EveryBody";
import ForgotPage from "./Pages/ForgotPage";
import ResetPage from "./Pages/ResetPage";
import DonationPage from "./Pages/DonationPage";
import NotMean from "./Components/NotMean/NotMean";
import SuccessDonation from "./Components/DonationComponents/SuccessDonation/SuccessDonation";
import ErrorDonation from "./Components/DonationComponents/ErrorDonation/ErrorDonation";
import RulesPage from "./Pages/RulesPage";
import AboutPage from "./Pages/AboutPage";
import TeamPage from "./Pages/TeamPage";
import ContactPage from "./Pages/ContactPage";

const AppContent = () => {
  const location = useLocation();
  const token = localStorage.getItem("app_token");

  // Əgər token yoxdursa, hər şeyi EveryBody səhifəsinə yönləndir
  if (!token) {
    return (
      <Routes>
        <Route path="/everybody" element={<EveryBody />} />
        <Route path="*" element={<Navigate to="/everybody" />} />
      </Routes>
    );
  }

  // Token varsa, normal marşrutlaşdırma işləyir
  const noLayoutPages = [
    "/register",
    "/login",
    "/otp",
    "/everybody",
    "/forgot",
    "/reset",
    "/donation-success",
    "/donation-error",
  ];
  const hideLayout = noLayoutPages.includes(location.pathname);

  return (
    <>
      {!hideLayout && <Navbar />}
      {!hideLayout && <NotMean />}
      <Routes>
        <Route path="/" element={<HomePage />} />

        <Route path="/about" element={<AboutPage />} />

        <Route path="/register" element={<RegisterPage />} />
        <Route path="/login" element={<LoginPage />} />
        <Route path="/otp" element={<OtpPage />} />
        <Route path="/forgot" element={<ForgotPage />} />
        <Route path="/reset" element={<ResetPage />} />

        <Route path="/donation" element={<DonationPage />} />
        <Route path="/donation-success" element={<SuccessDonation />} />
        <Route path="/donation-error" element={<ErrorDonation />} />

        <Route path="/rules" element={<RulesPage />} />
        <Route path="/contact" element={<ContactPage />} />

        {/* <Route path="/team" element={<TeamPage />} /> */}

        <Route path="/everybody" element={<Navigate to="/" />} />
        <Route path="*" element={<Navigate to="/" />} />
      </Routes>
      {!hideLayout && <Footer />}
    </>
  );
};

function App() {
  return (
    <BrowserRouter>
      <AppContent />
    </BrowserRouter>
  );
}

export default App;

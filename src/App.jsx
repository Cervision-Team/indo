import { BrowserRouter, Route, Routes, useLocation, Navigate } from "react-router-dom";
import "./App.css";
import Footer from "./Layout/Footer/Footer";
import Navbar from "./Layout/Navbar/Navbar";
import HomePage from "./Pages/HomePage";
import RegisterPage from "./Pages/RegisterPage";
import LoginPage from "./Pages/LoginPage";
import OtpPage from "./Pages/OtpPage";
import EveryBody from "./Pages/EveryBody";

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
  const noLayoutPages = ["/register", "/login", "/otp", "/everybody"];
  const hideLayout = noLayoutPages.includes(location.pathname);

  return (
    <>
      {!hideLayout && <Navbar />}
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/register" element={<RegisterPage />} />
        <Route path="/login" element={<LoginPage />} />
        <Route path="/otp" element={<OtpPage />} />
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

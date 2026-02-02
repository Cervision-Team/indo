import React, { useState, useEffect } from "react";
import {
  BrowserRouter,
  Routes,
  Route,
  Navigate,
  useNavigate,
} from "react-router-dom";
import Navbar from "./Layout/Navbar/Navbar";
import Footer from "./Layout/Footer/Footer";
import HomePage from "./Pages/HomePage";

// Login Səhifəsi Komponenti
const LoginPage = ({ setIsAuth }) => {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const navigate = useNavigate();

  const handleLogin = (e) => {
    e.preventDefault();
    if (username === "admin" && password === "12345") {
      localStorage.setItem("isLoggedIn", "true");
      setIsAuth(true); // Navbar və Footer-in görünməsi üçün statusu yeniləyirik
      navigate("/");
    } else {
      alert("Məlumatlar yanlışdır!");
    }
  };

  return (
    <div
      style={{
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
        height: "100vh",
        backgroundColor: "#ececec",
      }}
    >
      <form
        onSubmit={handleLogin}
        style={{
          padding: "30px",
          background: "#fff",
          borderRadius: "10px",
          display: "flex",
          flexDirection: "column",
          gap: "10px",
          width: "320px",
          boxShadow: "0 10px 25px rgba(0,0,0,0.1)",
        }}
      >
        <h2 style={{ textAlign: "center", color: "#333" }}>Sistemə Giriş</h2>
        <input
          type="text"
          placeholder="İstifadəçi adı"
          value={username}
          onChange={(e) => setUsername(e.target.value)}
          style={{
            padding: "12px",
            borderRadius: "5px",
            border: "1px solid #ddd",
          }}
        />
        <input
          type="password"
          placeholder="Şifrə"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
          style={{
            padding: "12px",
            borderRadius: "5px",
            border: "1px solid #ddd",
          }}
        />
        <button
          type="submit"
          style={{
            padding: "12px",
            backgroundColor: "#28a745",
            color: "white",
            border: "none",
            borderRadius: "5px",
            cursor: "pointer",
            fontWeight: "bold",
          }}
        >
          Daxil Ol
        </button>
      </form>
    </div>
  );
};

function App() {
  // Giriş statusunu yaddaşdan oxuyuruq
  const [isAuth, setIsAuth] = useState(
    localStorage.getItem("isLoggedIn") === "true",
  );

  // Çıxış funksiyası (Navbar-da istifadə edə bilərsiniz)
  const handleLogout = () => {
    localStorage.removeItem("isLoggedIn");
    setIsAuth(false);
  };

  return (
    <BrowserRouter>
      {/* Yalnız giriş edilibsə Navbar görünür */}
      {isAuth && <Navbar onLogout={handleLogout} />}

      <Routes>
        <Route
          path="/login"
          element={
            !isAuth ? <LoginPage setIsAuth={setIsAuth} /> : <Navigate to="/" />
          }
        />

        <Route
          path="/"
          element={isAuth ? <HomePage /> : <Navigate to="/login" />}
        />

        {/* Digər bütün naməlum yollar login-ə atır */}
        <Route path="*" element={<Navigate to={isAuth ? "/" : "/login"} />} />
      </Routes>

      {/* Yalnız giriş edilibsə Footer görünür */}
      {isAuth && <Footer />}
    </BrowserRouter>
  );
}

export default App;

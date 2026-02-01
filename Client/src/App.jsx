import "./App.css";
import Navbar from "./Layout/Navbar/Navbar";
import { BrowserRouter, Routes, Route, useLocation } from "react-router-dom";
import HomePage from "./Pages/HomePage";
import Footer from "./Layout/Footer/Footer";

function App() {
  return (
      <BrowserRouter>
        <Navbar />
        <Routes>
          <Route path="/" element={<HomePage />} />
        </Routes>
        <Footer/>
      </BrowserRouter>
  );
}

export default App;

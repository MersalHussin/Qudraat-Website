import React from "react";
import { Routes, Route } from "react-router-dom"; // لازم تضيف دول
import Navbar from "./components/Navbar";
import "./App.css";
import "./landing.css";
import Landing from "./Landing";
import SupportPage from "./pages/SupportPage"; // <-- استخدم PascalCase

const App = () => {
  return (
    <>
      {/* زر الواتساب */}
      <a
        className="whatsapp-btn"
        target="_blank"
        href="https://wa.me/+201040031584?text=السلام%20عليكم%20كنت%20عاوز/ة%20أعرف%20تفاصيل"
        rel="noopener noreferrer"
      >
        <i className="fa-brands fa-whatsapp"></i>
      </a>

      {/* الناف بار */}

      {/* المسارات */}
      <Routes>
        <Route path="/" element={<Landing />} />
        <Route path="/support" element={<SupportPage />} /> {/* <-- هنا أيضًا */}
      </Routes>
    </>
  );
};

export default App;
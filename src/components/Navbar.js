import React, { useState, useEffect } from "react";
import "../components/css/navbar.css";
import supportPage from "../pages/SupportPage";
import { Link } from "react-router-dom";

const Navbar = () => {
  const [menuOpen, setMenuOpen] = useState(false);
  const [activeLink, setActiveLink] = useState("#");

  const handleLinkClick = (link) => {
    setActiveLink(link);
    setMenuOpen(false);

    // Scroll إلى العنصر
    const target = document.querySelector(link);
    if (target) {
      target.scrollIntoView({ behavior: "smooth" });
    } else {
      window.scrollTo({ top: 0, behavior: "smooth" }); // يرجع للرئيسية
    }
  };

  useEffect(() => {
    const handleScroll = () => {
      const sections = [
        { id: "#landing", offset: 0 },
        { id: "#about-sec", offset: document.getElementById("about-sec")?.offsetTop },
        { id: "#journy", offset: document.getElementById("journy")?.offsetTop },
        { id: "#CTA", offset: document.getElementById("CTA")?.offsetTop },
        { id: "#Location", offset: document.getElementById("Location")?.offsetTop },
      ];

      const scrollPosition = window.scrollY + 150;

      let current = "#landing";
      for (let i = 0; i < sections.length; i++) {
        if (
          sections[i].offset !== undefined &&
          scrollPosition >= sections[i].offset
        ) {
          current = sections[i].id;
        }
      }

      setActiveLink(current);
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <>
      <div className="nav-size"></div>
      <header className="navbar">
        <a href="#" className="logo">
          <img src="/assets/Logo-txt.png" alt="logo" />
        </a>
        <div
          className={`menu-toggle ${menuOpen ? "active" : ""}`}
          onClick={() => setMenuOpen(!menuOpen)}
        >
          <span className="bar"></span>
          <span className="bar"></span>
          <span className="bar"></span>
        </div>
        <ul className={`nav-list ${menuOpen ? "active" : ""}`}>
          <li>
            <a
              href="#landing"
              className={activeLink === "#landing" ? "active" : ""}
              onClick={() => handleLinkClick("#landing")}
            >
              الرئيسية
            </a>
          </li>
          <li>
            <a
              href="#about-sec"
              className={activeLink === "#about-sec" ? "active" : ""}
              onClick={() => handleLinkClick("#about-sec")}
            >
              عن قدرات
            </a>
          </li>
          <li>
            <a
              href="#journy"
              className={activeLink === "#journy" ? "active" : ""}
              onClick={() => handleLinkClick("#journy")}
            >
              رحلة قدرات
            </a>
          </li>
          <li>
            <a
              href="#CTA"
              className={activeLink === "#CTA" ? "active" : ""}
              onClick={() => handleLinkClick("#CTA")}
            >
              رحلة الـ 6ps
            </a>
          </li>
          <li>
            <a
              href="#Location"
              className={activeLink === "#Location" ? "active" : ""}
              onClick={() => handleLinkClick("#Location")}
            >
              موقعنا
            </a>
          </li>
          <li>
            <Link
              to="/support"
              className="contact-link"
             
            >
              تواصل معنا
            </Link>
          </li>
        </ul>
        <Link
          className="contact-us"
          to="/support"
          // onClick={() => handleLinkClick("#contact")}
        >
          تواصل معنا  
        </Link>
      </header>
    </>
  );
};

export default Navbar;

"use client";

import { useRef } from "react";
import emailjs from "@emailjs/browser";
import Swal from "sweetalert2";
import { Link } from "react-router-dom";
import Footer from "../components/Footer";
import "./support-page.css";

export default function SupportPage() {
  const form = useRef();

  const sendEmail = (e) => {
    e.preventDefault();

    emailjs.sendForm(
        "service_onlzlej",     // ← Service ID
        "template_rw71d2t",    // ← Template ID
        form.current,
        "fkKJG7roR1QOsClVf"    // ← Public Key
      )
      .then(
        (result) => {
          Swal.fire({
            title: "تم الإرسال بنجاح",
            icon: "success",
            confirmButtonColor: "#052ED8",
          });
          e.target.reset();
        },
        (error) => {
          Swal.fire({
            title: "حدث خطأ",
            text: error.text || "تعذر إرسال الرسالة. تأكد من الاتصال بالإنترنت.",
            icon: "error",
          });
        }
      );
  };

  return (
    <div className="support-page">
      <div className="header-section">
        <div className="header-content">
          <h1 className="main-title">صفحة الدعم</h1>
          <Link to="/" className="back-button">
            الرجوع للصفحة الرئيسية
          </Link>
        </div>
      </div>

      <div className="content-section">
        <div className="content-container">
          <div className="intro-section">
            <h2 className="section-title">نحن هنا لمساعدتك</h2>
            <p className="section-description">
              إذا كان لديك أي استفسار وتريد المزيد من التواصل، لا تتردد في التواصل معنا عبر البريد الإلكتروني.
            </p>
          </div>

          <form ref={form} onSubmit={sendEmail} className="contact-form">
            <div className="form-group">
              <label htmlFor="name" className="form-label">
                الاسم
              </label>
              <input
                type="text"
                id="name"
                name="user_name"
                placeholder="قم بإدخال اسمك"
                className="form-input"
                required
              />
            </div>   

            <div className="form-group">
              <label htmlFor="email" className="form-label">
                البريد الإلكتروني
              </label>
              <input
                type="email"
                id="email"
                name="user_email"
                placeholder="قم بإدخال بريدك الإلكتروني"
                className="form-input"
                required
              />
            </div>

            <div className="form-group">
              <label htmlFor="message" className="form-label">
                الرسالة
              </label>
              <textarea
                id="message"
                name="message"
                placeholder="اكتب رسالتك هنا..."
                rows={6}
                className="form-textarea"
                required
              />
            </div>

            <button type="submit" className="submit-button">
              إرسال
            </button>
          </form>
        </div>
      </div>

      <Footer />
    </div>
  );
}
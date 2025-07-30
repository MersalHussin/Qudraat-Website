import React, { useEffect, useState } from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css"; // استيراد أنماط المكتبة
import "swiper/css/navigation";
import { Navigation } from "swiper/modules";
import Navbar from "./components/Navbar";
import Footer from "./components/Footer";


const Landing = () => {
  const [isModalOpen, setIsModalOpen] = useState(false);

  const openModal = () => {
    setIsModalOpen(true);
  };

  const closeModal = () => {
    setIsModalOpen(false);
  };

  const discoverItems = [
    {
      title: "اكتشاف القدرات",
      imageSrc: "/assets/explore.png",
      className: "frist",
      details: "جلسة تفاعلية مع كوتش متخصص تساعدك على تحديد ميولك المهنية",
    },
    {
      title: "تنمية القدرات ",
      imageSrc: "/assets/skills.png",
      className: "second",
      details:
        "بناءً على ميولك، نقدم لك تدريبًا على المهارات التكنولوجيا التي تحتاجها مثل التصميم وغيرها",
    },
    {
      title: "توظيف القدرات",
      imageSrc: "/assets/growth.png",
      className: "third",
      details:
        "تعلم كيف توظف ما تعلمته لتبدأ أولى الخطوات في عالم ريادة الأعمال",
    },
  ];

  const courses = [
    {
      title: "نينجا جين",
      instructor: "د. محمود دويدار",
      imageSrc: "/assets/C1.png",
    },
    {
      title: "اكتشاف الميول للأطفال",
      instructor: "كوتش شيماء سعيد",
      imageSrc: "/assets/C2.png",
    },
    {
      title: "اكتشف نفسك",
      instructor: "د. محمد حربي",
      imageSrc: "/assets/Video.png",
    },
  ];

  const [activeVideo, setActiveVideo] = useState(null); // لتتبع الفيديو النشط

  const videos = [
    {
      id: 1,
      title: "ورشة إكتشاف الميول المهنية 1",
      thumbnail: "/assets/1.jpeg",
      videoSrc: "https://www.youtube.com/embed/-M4EvJRSmjg?si=c2UrK7YFWZQvU1mQ",

    },
    {
      id: 2,
      title: "ورشة إكتشاف الميول المهنية 2",
      thumbnail: "/assets/2.jpeg",
      videoSrc: "https://www.youtube.com/embed/OOujVJMOt7s?si=DFQhstC-tyXNzE3O",
    },
    {
      id: 3,
      title: "ورشة إكتشاف الميول المهنية 3",
      thumbnail: "/assets/3.jpeg",
      videoSrc: "https://www.youtube.com/embed/u75iRPkR3Cw?si=No0sMMjVZy8O3xcL",
    },
  ];

  const handleVideoClick = (videoSrc) => {
    setActiveVideo(videoSrc); // تعيين الفيديو النشط
  };

  const closeVideo = () => {
    setActiveVideo(null); // إغلاق الفيديو
  };

  const [activeIndex, setActiveIndex] = useState(null);

  const toggleFAQ = (index) => {
    setActiveIndex(index === activeIndex ? null : index);
  };

  const faqs = [
    {
      question: "ما هي قدرات؟",
      answer:
        "قدرات هي شركة تهدف إلى تمكين الشباب ليصبحوا رواد أعمال من خلال نظام ASK الذي يعتمد على اكتشاف الميول، تعلم المهارات، وتطبيق المعرفة.",
    },
    {
      question: "ما هي قدرات شباب",
      answer:
        "مبادرة قدرات شباب هي تهدف إلى مساعدة الشباب في تعليم مجالات مطلوبة في سوق العمل فتساعدهم على مهارات المجالات الأساسية",
    },
    {
      question: "لمن تقدم قدرات خدماتها؟",
      answer: "قدرات تقدم خدماتها للأطفال والشباب من عمر 8 إلى 16 عامًا, والشباب من 16 لـ 25 سنة",
    },
    {
      question: "ما هي المهارات التي يمكن تعلمها؟",
      answer:
        "من المهارات التي يمكن تعلمها البرمجة، التصميم، الروبوت، التسويق",
    },

  ];

  return (
    <>
    <Navbar />
      <main>
        <section className="landing" id="landing">
            <a href="#about-sec" className="scroll-down">
              <i className="fa-solid fa-angle-down"></i>
            </a>
          <div className="container">
            <div className="landing-box-txt">
              <h1 className="heading-landing">
                {" "}
                نبني اليوم رواد <span>تكنولوجيا </span>الغد
              </h1>
              <ul className="features">
                <li>
                  {" "}
                  جلسات مع متخصصين <span>اكتشاف ميول طفلك المهنية</span>
                </li>
                <li>
                  {" "}
                  مناهج تعليمية متطورة تربط بين <span>الشغف وسوق العمل</span>
                </li>
                <li>
                  {" "}
                  التعرف على التسويق و إدارة المشاريع{" "}
                  <span>لبناء رائد أعمال</span>
                </li>
              </ul>

              <div className="btn-container">
                <a className="btn explore" href="#about-sec">
                  <i className="fa-solid fa-rocket" style={{margin:"0 5px"}}></i>
                  أكتشف أكتر
                </a>
                <a className="btn chat" href="https://wa.me/+201040031584?text=السلام%20عليكم%20كنت%20عاوز/ة%20أعرف%20تفاصيل">
                  تحدث معانا <i className="fa-solid fa-comments"></i>
                </a>
              </div>
            </div>
            <img src="/assets/Qudraat-Website.webp" alt="image" />
          </div>
        </section>
        <section id="about-sec">
          <div className="container">
            <div className="about-txt">
              <h1 className="title">عن قدرات</h1>
              <p className="about-data">
              قدرات هي أكاديمية متخصصة في تكنولوجــيا المعلومات وريادة الأعمال، تهدف إلى تمكين الأطفال والشباب من معرفة أنفسهم، واكتشـاف شغفهم، وتعلّم المهارات المناسبة له، ثم توظيف هذه القدرات في مشروعات حقيقيـة تعزز ثقتهم بأنفسهم وتُنمّي حس المبادرة لديهم.
              </p>
              {/* <a href="#about">نزل الكتالوج</a> */}
            </div>
            <img src="/assets/about.jpg" className="about-image" alt="about" />
          </div>
        </section>


        <section id="journy">
          <div className="container">
            <div className="journy-txt">
              <h1 className="title">رحلة قدرات</h1>
              <p>
                رحلتك مع <span>قدرات</span> تتكون من 3 مراحل مميزة
              </p>
            </div>
            <div className="journies-container">
              <div>
                {discoverItems.map((journy, index) => (
                  <div
                    key={index}
                    className={`journy-data ${journy.className}`}
                  >
                    <h2>{journy.title}</h2>
                    <div className="image-journy-cont">
                      <img
                        src={journy.imageSrc}
                        alt={`journy-icon-${journy.title}`}
                      />
                    </div>
                    <p>{journy.details}</p>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </section>
        <section id="video">
          <img
            src="/assets/Video.png"
            alt="video-img"
            onClick={openModal}
            style={{ cursor: "pointer" }}
          />
          {isModalOpen && (
            <div className="modal-overlay" onClick={closeModal}>
              <div
                className="modal-content"
                onClick={(e) => e.stopPropagation()}
              >
                <button className="close-modal" onClick={closeModal}>
                  &times;
                </button>
                <iframe
                  width="100%"
                  src="https://www.youtube.com/embed//xnq7Es2y15A?si=GbkGEeO3abVkMSiP"
                  title="Video"
                  allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                  allowFullScreen
                ></iframe>
              </div>
            </div>
          )}
        </section>
        <section id="CTA">
          <h1>جاهز لاكتشاف قدراتك الحقيقية
            في اختبار الـ 6ps
          </h1>
          <a target="_blank" href="https://qudraat.com/6ps">أبدا الاختبار الان</a>
        </section>
{/* 
        <section id="courses">
          <div className="container">
            <h1 className="title">الدورات</h1>
            <div className="courses-container">
              {courses.map((course, index) => (
                <a key={index} href={`# ${course.title}`}>
                  <div className="course-box">
                    <img src={course.imageSrc} alt={course.title} />
                    <h1>{course.title}</h1>
                    <p>{course.instructor}</p>
                  </div>
                </a>
              ))}
            </div>
            <a className="btn explore"  href="https://wa.me/+201040031584?text=السلام عليكم كنت عاوز أعرف الكورسات اللي عندكم وتفاصيلها" target="_blank">
              {" "}
              أكتشف المزيد
            </a>
          </div>
        </section>
*/}
        <section id="Certifcate">
          <div className="container">
            <img src="/assets/Qudraat Certifacte.png"></img>
          </div>
        </section> 

        
    <section id="Feedback">
      {activeVideo && (
        <div className="video-overlay" onClick={closeVideo}>
          <div className="video-container">
            <button className="close-button">&times;</button>
            <iframe
              width="1080px"
              height="607px"
              src={activeVideo}
              title="Active Video"
              frameBorder="0"
              allow="autoplay; encrypted-media"
              allowFullScreen
            ></iframe>
          </div>
        </div>
      )}

      <div className="reels-container">
        <h1 className="title">اراء الأهالي</h1>
        <Swiper
          spaceBetween={20}
          slidesPerView={3}
          navigation={true} // تفعيل الـ Navigation
          modules={[Navigation]} // إضافة Navigation كـ Module
          breakpoints={{
            900: { slidesPerView: 3 },
            480: { slidesPerView: 2 },
            0: { slidesPerView: 1 },
          }}
        >
          {videos.map((video) => (
            <SwiperSlide key={video.id}>
              <div
                className="reel-card"
                onClick={() => handleVideoClick(video.videoSrc)}
              >
                <img
                  src={video.thumbnail}
                  alt={video.title}
                  className="thumbnail"
                />
                <h3 className="video-title">{video.title}</h3>
              </div>
            </SwiperSlide>
          ))}
        </Swiper>
      </div>
    </section>  
        <section id="Location">
          <div className="container">
            <h1 className="title">موقعنا</h1>
        <iframe className="map-iframe"
  src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3454.103170803096!2d31.20482988270451!3d30.033897854443936!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x145847817ad9870d%3A0x89c6ea279bddca2f!2zUXVkcmFhdCAtINmC2K_Ysdin2Ko!5e0!3m2!1sen!2seg!4v1752688743420!5m2!1sen!2seg"
  style={{ border: 0 }}
  allowFullScreen=""
  loading="lazy"
  referrerPolicy="no-referrer-when-downgrade"
/>
  </div>

        </section>
        <section id="FAQ">
          <div className="container">
            <h1 className="title">الأسئلة الشائعة</h1>
            <div className="FAQ-box">
              {faqs.map((faq, index) => (
                <div
                  key={index}
                  className={`faq-item ${
                    activeIndex === index ? "active" : ""
                  }`}
                >
                  <div
                    className="faq-question"
                    onClick={() => toggleFAQ(index)}
                  >
                    {faq.question}
                    <span className="icon">
                      {activeIndex === index ? "-" : "+"}
                    </span>
                  </div>
                  <div
                    className="faq-answer"
                    style={{
                      display: activeIndex === index ? "block" : "none",
                    }}
                  >
                    {faq.answer}
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>
    
        <section className="contact">
          <div className="container">
            <a href="mailto:qudraatteam@gmail.com" className="email">
              <h2>راسلنا دلوقتي على</h2>
              <h1>QudraatTeam@gmail.com</h1>
            </a>
            <a href="tel:+201040031584" className="phone">
              <h2>اتصل بنا على </h2>
              <h1>01040031584</h1>
            </a>
            <div>
              <a className="btn chat" href="https://wa.me/+201040031584?text=السلام%20عليكم%20كنت%20عاوز/ة%20أعرف%20تفاصيل">
                تحدث معانا <i className="fa-solid fa-comments"></i>
              </a>
            </div>
          </div>
        </section>

 <Footer />
      </main>
    </>
  );
};

export default Landing;
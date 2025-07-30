const Footer = () => {
    return (
           <footer id="footer">
        
          <div className="logo-footer">
            <img
              src="/assets/Qudraat White.png"
              alt="logo-footer"
              className="logo-qudraat"
            />
            </div>
            <div className="social-media">
              <a href="https://www.youtube.com/channel/UCQFUhLEiFUjj2JXPSt_45dA">
                <img src="/assets/Youtube.svg" alt="Youtube" />
              </a>
              <a href="https://www.tiktok.com/@qudraat?is_from_webapp=1&sender_device=pc">
                <img src="/assets/Tiktok.svg" alt="Tiktok" />
              </a>
              <a href="https://www.facebook.com/profile.php?id=61571035216683&mibextid=ZbWKwL">
                <img src="/assets/Facebook.svg" alt="Facebook" />
              </a>
              <a href="">
                <img src="/assets/Insta.svg" alt="Insta" />
              </a>
              <a href="https://wa.me/+201040031584">
                <img src="/assets/Whatsapp.svg" alt="Whatsapp" />
              </a>
            </div>
            <div className="line"></div>
            <div className="copyright">جميع الحقوق محفوظة لـ قدرات © 2025</div>
        </footer>
    );
}

export default Footer;
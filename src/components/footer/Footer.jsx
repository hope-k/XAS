import "./Footer.css";

export const Footer = () => {
  return (
    <div>
      <section className="footer-content-wrapper">
        <div className="footer-container">
          <div className="footer-logo">
            <img src="../../assets/images/xlogo.svg" alt="xcelsz logo" />
            <h2>Xcelsz Agile Solutions</h2>
          </div>
          <div className="footer-link-bars">
            <div className="footer-bar-left">
              <p>
                Helping Businesses of any size to
                <br /> maximise measurable Value Faster
              </p>
              <p>
                Registered Address
                <br />
                AT-1130-0938 (GH) | CM20 1YS (UK)
              </p>
            </div>
            <div className="footer-bar">
              <ul>
                <li>Home</li>
                <li>Talk to Us</li>
                <li>Get Started</li>
              </ul>
            </div>
            <div className="footer-bar">
              <ul>
                <li>About</li>
                <li>Our Story</li>
                <li>Our Work</li>
              </ul>
            </div>
            <div className="footer-bar">
              <ul>
                <li>Our Terms</li>
                <li>Cookie Policy</li>
                <li>Privacy Policy</li>
              </ul>
            </div>
          </div>
          <div className="footer-email-subz">
            <div className="foot-text">
              <p>Subscribe to news letter</p>
            </div>
            <div className="footer-nls">
              <form className="form-group">
                <input type="text" placeholder="ENTER YOUR EMAIL" />
                <button className="btn">SEND</button>
              </form>
            </div>
          </div>
          <div className="footer-social-links">
            <div className="social-link-left">
              <p>Follow us </p>
              <img src="../../assets/images/telegram.png" alt="Telegram Image"/>
            </div>
            <div className="copyright-field">
              <img src="../../assets/images/copyright.png" alt="A meaningful description"/>
              <p>2023 Xcelsz Agile Solutions</p>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

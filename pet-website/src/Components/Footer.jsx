import "./Footer.css";

function Footer() {
  return (
    <footer className="footer">

      <img
        src="/pink-bg.jpg"
        alt=""
        className="footer-bg"
      />

      <div className="footer-content">

        <div className="footer-brand">

          <img
            src="/footer-logo.png"
            alt="Pawsitive"
            className="footer-logo"
          />

          <div className="social-icons">

            <a href="#" aria-label="Twitter">
              <i className="fa-brands fa-twitter"></i>
            </a>

            <a href="#" aria-label="Instagram">
              <i className="fa-brands fa-instagram"></i>
            </a>

            <a href="#" aria-label="Facebook">
              <i className="fa-brands fa-facebook-f"></i>
            </a>

          </div>

        </div>

        <div className="footer-column">

          <h3>About</h3>

          <p>
            <i className="fa-solid fa-location-dot"></i>
            PO BOX Collins Street West
          </p>

          <p>
            <i className="fa-solid fa-phone"></i>
            +2342 5446 67
          </p>

          <p>
            <i className="fa-regular fa-clock"></i>
            Mon - Sun: 8AM - 8PM
          </p>

        </div>

        <div className="footer-column">

          <h3>Quick Links</h3>

          <a href="#dog">Dog Boarding Services</a>
          <a href="#cats">Cat Boarding Services</a>
          <a href="#grooming">Spa and Grooming Services</a>

        </div>

        <div className="footer-column newsletter">

          <h3>Newsletter</h3>

          <input
            type="email"
            placeholder="Your email"
          />

          <button>SUBSCRIBE</button>

        </div>

      </div>

    </footer>
  );
}

export default Footer;
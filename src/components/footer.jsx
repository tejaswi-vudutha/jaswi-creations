import "../styles/footer.css";
import {
  FaInstagram,
  FaWhatsapp,
  FaEnvelope,
  FaPhoneAlt,
} from "react-icons/fa";

function Footer() {
  return (
    <footer className="footer">

      <div className="footer-container">

        <div className="footer-brand">
          <h2>Jaswi Creations</h2>
          <p>
            Handmade gifts crafted with creativity, passion, and love.
            Every creation is unique, just like your memories.
          </p>
        </div>

        <div className="footer-links">
          <h3>Quick Links</h3>

          <a href="#home">Home</a>
          <a href="#about">About</a>
          <a href="#services">Services</a>
          <a href="#gallery">Gallery</a>
          <a href="#contact">Contact</a>
        </div>

        <div className="footer-contact">
          <h3>Contact</h3>

          <p>
            <FaPhoneAlt /> +91 95500 05825
          </p>

          <p>
            <FaEnvelope /> jaswi.creationss@gmail.com
          </p>

          <p>📍 Guntur, Andhra Pradesh</p>

          <div className="social-icons">

            <a
              href="https://www.instagram.com/jaswi_artsncrafts"
              target="_blank"
              rel="noreferrer"
            >
              <FaInstagram />
            </a>

            <a
              href="https://wa.me/919550005825"
              target="_blank"
              rel="noreferrer"
            >
              <FaWhatsapp />
            </a>

          </div>
        </div>

      </div>

      <div className="footer-bottom">
        © {new Date().getFullYear()} Jaswi Creations. All Rights Reserved.
      </div>

    </footer>
  );
}

export default Footer;
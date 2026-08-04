import "../styles/Contact.css";
import { useState } from "react";
import emailjs from "@emailjs/browser";
import {
  FaPhoneAlt,
  FaWhatsapp,
  FaInstagram,
  FaEnvelope,
  FaMapMarkerAlt,
} from "react-icons/fa";

function Contact() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    product: "",
    message: "",
  });

  const [loading, setLoading] = useState(false);
  const [success, setSuccess] = useState(false);

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  const sendEmail = (e) => {
    e.preventDefault();

    setLoading(true);

    emailjs
      .send(
        import.meta.env.VITE_EMAILJS_SERVICE_ID,
        import.meta.env.VITE_EMAILJS_TEMPLATE_ID,
        {
          name: formData.name,
          email: formData.email,
          phone: formData.phone,
          product: formData.product,
          message: formData.message,
        },
        import.meta.env.VITE_EMAILJS_PUBLIC_KEY
      )
      .then(() => {
        setSuccess(true);

        setFormData({
          name: "",
          email: "",
          phone: "",
          product: "",
          message: "",
        });

        setLoading(false);

        setTimeout(() => {
          setSuccess(false);
        }, 3000);
      })
      .catch((error) => {
        console.log("EmailJS Error:", error);
        alert(error.text || error.message || "Unknown error");
        setLoading(false);
      });
  };

  return (
    <section className="contact-section" id="contact">
      <div className="contact-header">
        <p className="section-tag">GET IN TOUCH</p>

        <h2>Let's Create Something Beautiful Together</h2>

        <p>
          Have an idea for a personalized gift? We'd love to bring it to life.
          Reach out to us and we'll make something truly special.
        </p>
      </div>

      <div className="contact-container">
        <div className="contact-info">
          <div className="info-card">
            <FaPhoneAlt />
            <div>
              <h3>Call Us</h3>
              <p>+91 95500 05825</p>
            </div>
          </div>

          <div className="info-card">
            <FaWhatsapp />
            <div>
              <h3>WhatsApp</h3>
              <a
                href="https://wa.me/919550005825"
                target="_blank"
                rel="noreferrer"
              >
                Chat with us
              </a>
            </div>
          </div>

          <div className="info-card">
            <FaEnvelope />
            <div>
              <h3>Email</h3>
              <p>jaswi.creationss@gmail.com</p>
            </div>
          </div>

          <div className="info-card">
            <FaInstagram />
            <div>
              <h3>Instagram</h3>
              <a
                href="https://www.instagram.com/jaswi_artsncrafts"
                target="_blank"
                rel="noreferrer"
              >
                @jaswi_artsncrafts
              </a>
            </div>
          </div>

          <div className="info-card">
            <FaMapMarkerAlt />
            <div>
              <h3>Location</h3>
              <p>Guntur, Andhra Pradesh</p>
            </div>
          </div>
        </div>

        {success && (
          <div className="success-message">
            ✅ Thank you! Your inquiry has been sent successfully.
          </div>
        )}

        <form className="contact-form" onSubmit={sendEmail}>
          <input
            type="text"
            name="name"
            placeholder="Your Name"
            value={formData.name}
            onChange={handleChange}
            required
          />

          <input
            type="email"
            name="email"
            placeholder="Email Address"
            value={formData.email}
            onChange={handleChange}
            required
          />

          <input
            type="tel"
            name="phone"
            placeholder="Phone Number"
            value={formData.phone}
            onChange={handleChange}
            required
          />

          <select
            name="product"
            value={formData.product}
            onChange={handleChange}
            required
          >
            <option value="">Select Product</option>
            <option>String Art</option>
            <option>Doodle Art</option>
            <option>Fabric Painting</option>
            <option>Fridge Magnet</option>
            <option>Customized Bouquet</option>
            <option>Other</option>
          </select>

          <textarea
            rows="5"
            name="message"
            placeholder="Tell us about your custom order..."
            value={formData.message}
            onChange={handleChange}
            required
          ></textarea>

          <button type="submit" disabled={loading}>
            {loading ? "Sending..." : "Send Inquiry"}
          </button>
        </form>
      </div>
    </section>
  );
}

export default Contact;
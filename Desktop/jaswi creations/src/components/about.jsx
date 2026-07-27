import "../styles/about.css";
import { motion } from "framer-motion";
import aboutImage from "../assets/profile-image.jpeg";
function About() {
  return (
    <section className="about-section" id="about">
      <motion.div
        className="about-image"
        initial={{ opacity: 0, x: -80 }}
        whileInView={{ opacity: 1, x: 0 }}
        transition={{ duration: 0.8 }}
        viewport={{ once: true }}
      >
        <img src={aboutImage} alt="About Jaswi Creations" />
      </motion.div>

      <motion.div
        className="about-content"
        initial={{ opacity: 0, x: 80 }}
        whileInView={{ opacity: 1, x: 0 }}
        transition={{ duration: 0.8 }}
        viewport={{ once: true }}
      >
        <p className="section-tag">OUR STORY</p>

        <h2>
          Handmade with
          <br />
          Passion & Love
        </h2>

        <p>
          At Jaswi Creations, every artwork is thoughtfully handcrafted to
          celebrate life's special moments. We believe every gift should tell a
          story, and every creation should leave a lasting memory.
        </p>

        <div className="about-features">
          <div>✨ 100% Handmade</div>
          <div>🎨 Personalized Designs</div>
          <div>💝 Crafted with Love</div>
          <div>🚚 PAN India Delivery</div>
        </div>

        <button className="primary-button">
          Discover More
        </button>
      </motion.div>
    </section>
  );
}

export default About;
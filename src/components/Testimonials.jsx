import "../styles/Testimonials.css";
import { motion } from "framer-motion";
import { FaStar } from "react-icons/fa";

const testimonials = [
  {
    name: "Poornima",
    review:
      "Absolutely loved the handmade string art! The quality exceeded my expectations and it made the perfect gift.",
  },
  {
    name: "Vidya",
    review:
      "Beautiful craftsmanship and timely delivery. Highly recommended for personalized gifts.",
  },
  {
    name: "Sneha",
    review:
      "Every detail was perfect. The painting was exactly how I imagined it. Will definitely order again!",
  },
];

function Testimonials() {
  return (
    <section className="testimonials-section">
      <motion.p
        className="section-tag"
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
      >
        CUSTOMER LOVE
      </motion.p>

      <motion.h2
        className="testimonial-title"
        initial={{ opacity: 0, y: 40 }}
        whileInView={{ opacity: 1, y: 0 }}
      >
        What Our Customers Say
      </motion.h2>

      <div className="testimonial-grid">
        {testimonials.map((item, index) => (
          <motion.div
            className="testimonial-card"
            key={index}
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ delay: index * 0.2 }}
          >
            <div className="stars">
              {[...Array(5)].map((_, i) => (
                <FaStar key={i} />
              ))}
            </div>

            <p>"{item.review}"</p>

            <h4>{item.name}</h4>
          </motion.div>
        ))}
      </div>
    </section>
  );
}

export default Testimonials;
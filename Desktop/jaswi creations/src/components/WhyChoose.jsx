import "../styles/whychoose.css";
import {
  FaHeart,
  FaPalette,
  FaAward,
  FaShippingFast,
} from "react-icons/fa";

function WhyChoose() {
  const features = [
    {
      icon: <FaHeart />,
      title: "Handmade with Love",
      description:
        "Every gift is carefully handcrafted with passion and attention to every detail.",
    },
    {
      icon: <FaPalette />,
      title: "100% Customized",
      description:
        "We create personalized gifts that perfectly match your ideas and special moments.",
    },
    {
      icon: <FaAward />,
      title: "Premium Quality",
      description:
        "High-quality materials and beautiful finishing ensure every creation lasts for years.",
    },
    {
      icon: <FaShippingFast />,
      title: "Fast & Safe Delivery",
      description:
        "We carefully pack every order and deliver it safely to your doorstep.",
    },
  ];

  return (
    <section className="why-section">
      <div className="why-header">
        <p className="section-tag">WHY CHOOSE US</p>

        <h2>Why Choose Jaswi Creations?</h2>

        <p>
          We don't just make gifts—we create memories that last forever.
        </p>
      </div>

      <div className="why-grid">
        {features.map((item, index) => (
          <div className="why-card" key={index}>
            <div className="why-icon">{item.icon}</div>

            <h3>{item.title}</h3>

            <p>{item.description}</p>
          </div>
        ))}
      </div>
    </section>
  );
}

export default WhyChoose;
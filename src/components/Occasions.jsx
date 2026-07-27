import "../styles/occasions.css";
import {
  FaBirthdayCake,
  FaHeart,
  FaGraduationCap,
  FaBaby,
  FaRing,
  FaGift,
  FaHome,
  FaBriefcase,
} from "react-icons/fa";

const occasions = [
  {
    icon: <FaBirthdayCake />,
    title: "Birthday",
  },
  {
    icon: <FaHeart />,
    title: "Anniversary",
  },
  
  {
    icon: <FaBaby />,
    title: "Baby Shower",
  },
  {
    icon: <FaRing />,
    title: "Wedding",
  },
  {
    icon: <FaGift />,
    title: "Festivals",
  },
  {
    icon: <FaHome />,
    title: "Housewarming",
  },
 
];

function Occasions() {
  return (
    <section className="occasion-section">
      <div className="occasion-header">
        <p className="section-tag">SPECIAL OCCASIONS</p>

        <h2>Perfect Gifts For Every Occasion</h2>

        <p>
          Every celebration deserves something unique and memorable.
        </p>
      </div>

      <div className="occasion-grid">
        {occasions.map((item, index) => (
          <a
            href="#gallery"
            className="occasion-card"
            key={index}
          >
            <div className="occasion-icon">
              {item.icon}
            </div>

            <h3>{item.title}</h3>
          </a>
        ))}
      </div>
    </section>
  );
}

export default Occasions;
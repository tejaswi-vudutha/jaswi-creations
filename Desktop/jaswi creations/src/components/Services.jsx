import ServiceCard from "./ServiceCard";
import services from "../data/services";
import "../styles/services.css";


function Services() {
  return (
    <section className="services-section" id="services">
        
      <p className="section-subtitle">WHAT WE CRAFT</p>

      <h2 className="section-title">
        Five ways to
        <br />
        keep a memory
      </h2>

      <div className="services-container">
        {services.map((service, index) => (
          <ServiceCard
            key={service.id}
            service={service}
            reverse={index % 2 !== 0}
          />
        ))}
      </div>
    </section>
  );
}

export default Services;
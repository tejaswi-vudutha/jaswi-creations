import "../styles/Services.css";

function ServiceCard({ service, reverse }) {
  return (
    <div className={`service-card ${reverse ? "reverse" : ""}`}>
      <div className="service-image">
        <img src={service.image} alt={service.title} />
      </div>

      <div className="service-content">
        <span className="service-number">
          {String(service.id).padStart(2, "0")}
        </span>

        <h2>{service.title}</h2>

        <p>{service.description}</p>

        <button>{service.button}</button>
      </div>
    </div>
  );
}

export default ServiceCard;
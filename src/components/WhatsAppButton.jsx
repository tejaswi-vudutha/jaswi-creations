import { FaWhatsapp } from "react-icons/fa";
import "../styles/Whatsapp.css";

function WhatsAppButton() {
  return (
    <a
      href="https://wa.me/919550005825?text=Hi%20Jaswi%20Creations!%20I'm%20interested%20in%20a%20customized%20gift."
      className="whatsapp-btn"
      target="_blank"
      rel="noreferrer"
      aria-label="Chat on WhatsApp"
    >
      <FaWhatsapp />
    </a>
  );
}

export default WhatsAppButton;
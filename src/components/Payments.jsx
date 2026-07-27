import qrCode from "../assets/upi-qr.jpeg";
import "../styles/Payments.css";
import { SiPhonepe, SiGooglepay, SiPaytm } from "react-icons/si";
import { FaShieldAlt } from "react-icons/fa";

function Payments() {
  return (
    <section className="payments-section" id="payments">
      <p className="payments-subtitle">SECURE PAYMENTS</p>

      <h2>Pay Securely with UPI</h2>

      <p className="payments-text">
        After confirming your order, scan the QR code below using any UPI app
        to complete your payment securely.
      </p>

      <div className="qr-box">
        <img src={qrCode} alt="UPI QR Code" className="qr-image" />
      </div>

      <div className="payment-methods">
        <div><SiPhonepe /> PhonePe</div>
        <div><SiGooglepay /> Google Pay</div>
        <div><SiPaytm /> Paytm</div>
        <div>🏦 Any UPI App</div>
      </div>

      <div className="payment-note">
        <FaShieldAlt />
        <span>Pay only after your order is confirmed.</span>
      </div>
    </section>
  );
}

export default Payments;
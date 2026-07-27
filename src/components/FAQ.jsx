import "../styles/faq.css";
import { useState } from "react";
import { FaChevronDown } from "react-icons/fa";

const faqs = [
  {
    question: "Can I customize my order?",
    answer:
      "Yes! Every product can be customized according to your preferences, including colors, names, and designs.",
  },
  {
    question: "Do you deliver across India?",
    answer:
      "Yes, we provide PAN India delivery with secure packaging to ensure your handcrafted products arrive safely.",
  },
  {
    question: "How long does an order take?",
    answer:
      "Most customized orders are completed within 5–7 business days depending on the design complexity.",
  },
  {
    question: "How can I place an order?",
    answer:
      "You can contact us through WhatsApp, Instagram, or the Contact form on this website.",
  },
];

function FAQ() {
  const [active, setActive] = useState(null);

  const toggle = (index) => {
    setActive(active === index ? null : index);
  };

  return (
    <section className="faq-section">
      <p className="section-tag">FREQUENTLY ASKED QUESTIONS</p>

      <h2>Everything You Need to Know</h2>

      <div className="faq-container">
        {faqs.map((item, index) => (
          <div
            className={`faq-item ${active === index ? "open" : ""}`}
            key={index}
          >
            <button
              className="faq-question"
              onClick={() => toggle(index)}
            >
              <span>{item.question}</span>
              <FaChevronDown />
            </button>

            {active === index && (
              <div className="faq-answer">
                <p>{item.answer}</p>
              </div>
            )}
          </div>
        ))}
      </div>
    </section>
  );
}

export default FAQ;
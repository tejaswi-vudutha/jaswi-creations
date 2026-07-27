import { useEffect, useState } from "react";
import { FaArrowUp } from "react-icons/fa";
import "../styles/scrollTop.css";

function ScrollTop() {
  const [show, setShow] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setShow(window.scrollY > 300);
    };

    window.addEventListener("scroll", handleScroll);

    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: "smooth",
    });
  };

  return (
    show && (
      <button className="scroll-top" onClick={scrollToTop}>
        <FaArrowUp />
      </button>
    )
  );
}

export default ScrollTop;
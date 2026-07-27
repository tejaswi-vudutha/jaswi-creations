import { useState, useEffect } from "react";
import "../styles/hero.css";

import stringArt from "../assets/string-art-2.jpeg";
import fabricPainting from "../assets/fabric-painting.jpeg";
import doodleArt from "../assets/doodle-art.jpeg";
import fridgeMagnet from "../assets/fridge-magnet-1.jpeg";

function Hero() {
  const images = [
    stringArt,
    fabricPainting,
    doodleArt,
    fridgeMagnet,
  ];

  const [currentImage, setCurrentImage] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentImage((prev) => (prev + 1) % images.length);
    }, 3000); // changes every 3 seconds

    return () => clearInterval(interval);
  }, []);

  return (
    <section className="hero-section" id="home">
      <div className="hero-content">
        <p className="hero-tag">✨ Handcrafted Gifts & Personalized Art</p>

        <h1>
          Handmade Gifts
          <span> Crafted With Love</span>
        </h1>

        <p className="hero-description">
          Discover handcrafted gifts designed with creativity, passion, and
          attention to every detail. Every piece is personalized to celebrate
          your special moments.
        </p>

        <div className="hero-buttons">
          <a href="#gallery" className="primary-btn">
            Explore Creations
          </a>

          <a href="#contact" className="secondary-btn">
            Get a Quote
          </a>
        </div>
      </div>

      <div className="hero-image">
        <img
          src={images[currentImage]}
          alt="Jaswi Creations"
        />
      </div>
    </section>
  );
}

export default Hero;
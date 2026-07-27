import { useState } from "react";
import Lightbox from "yet-another-react-lightbox";
import "yet-another-react-lightbox/styles.css";

import "../styles/gallery.css";

import img1 from "../assets/fabric-painting.jpeg";
import img2 from "../assets/string-art-1.jpeg";
import img3 from "../assets/customized doodle art new.jpeg";
import img4 from "../assets/fridge-magnet-1.jpeg";
import img5 from "../assets/customized-accessory-bouquet.png";
import img6 from "../assets/terachala-painting.jpeg";
import img7 from "../assets/backprinted-jacket.png";
import img8 from "../assets/all-string-arts.jpeg";

const images = [
  { src: img1, title: "Fabric Painting" },
  { src: img2, title: "String Art" },
  { src: img3, title: "customized doodle art new.jpeg" },
  { src: img4, title: "Fridge Magnets" },
  { src: img5, title: "Customized Bouquet" },
  { src: img6, title: "Terachala Painting" },
  { src: img7, title: "Back Printed Jacket" },
  { src: img8, title: "all-string-arts" },
];

function Gallery() {
  const [open, setOpen] = useState(false);
  const [index, setIndex] = useState(0);

  return (
    <>
      <section className="gallery-section" id="gallery">
        <p className="gallery-subtitle">OUR CREATIONS</p>

        <h2 className="gallery-title">
          Crafted with
          <br />
          Love & Passion
        </h2>

        <div className="gallery-grid">
          {images.map((item, i) => (
            <div
              className="gallery-card"
              key={i}
              onClick={() => {
                setIndex(i);
                setOpen(true);
              }}
            >
              <img src={item.src} alt={item.title} />

              <div className="gallery-overlay">
                <h3>{item.title}</h3>
              </div>
            </div>
          ))}
        </div>
      </section>

      <Lightbox
        open={open}
        close={() => setOpen(false)}
        index={index}
        slides={images}
      />
    </>
  );
}

export default Gallery;
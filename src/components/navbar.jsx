import "../styles/navbar.css";
import { Link } from "react-scroll";
import { HiOutlineMenu, HiOutlineX } from "react-icons/hi";
import { useState } from "react";

function Navbar() {
  const [menuOpen, setMenuOpen] = useState(false);

  return (
    <header className="navbar">
      <div className="logo">
        Jaswi <span>Creations</span>
      </div>

      <nav className={menuOpen ? "nav-links active" : "nav-links"}>
        <Link to="home" smooth duration={500}>Home</Link>
        <Link to="about" smooth duration={500}>About</Link>
        <Link to="services" smooth duration={500}>Services</Link>
        <Link to="gallery" smooth duration={500}>Gallery</Link>
        <Link to="contact" smooth duration={500}>Contact</Link>

        <button className="nav-btn">
          Get Quote
        </button>
      </nav>

      <div
        className="menu-icon"
        onClick={() => setMenuOpen(!menuOpen)}
      >
        {menuOpen ? <HiOutlineX /> : <HiOutlineMenu />}
      </div>
    </header>
  );
}

export default Navbar;
import { useState } from "react";
import { Menu, Sun, Moon } from "lucide-react";
import "./Navbar.css";
import FriendTech from "./assets/logo.png";

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <nav className="navbar">
      <div className="nav-left">
        <div className="logo">
          <img src={FriendTech} alt="Logo" className="logo-img" />
        </div>

        <div className={`nav-links ${isOpen ? "open" : ""}`}>
          <a href="#">features</a>
          <a href="#">about us</a>
          <a href="#">Tools</a>
          <a href="#">Contact</a>
        </div>
      </div>

      <div className="nav-actions">
      </div>

      <button
        className="menu-toggle"
        onClick={() => setIsOpen(!isOpen)}
        aria-label="Open menu"
      >
        <Menu size={24} />
      </button>
    </nav>
  );
};

export default Navbar;

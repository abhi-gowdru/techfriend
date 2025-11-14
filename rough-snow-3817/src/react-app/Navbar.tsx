import { useState, useEffect } from "react";
import { Menu, Sun, Moon } from "lucide-react";
import "./Navbar.css";
import FriendTech from "./assets/logo.png";

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [darkMode, setDarkMode] = useState(
    localStorage.getItem("theme") === "dark"
  );

  useEffect(() => {
    document.documentElement.setAttribute(
      "data-theme",
      darkMode ? "dark" : "light"
    );
    localStorage.setItem("theme", darkMode ? "dark" : "light");
  }, [darkMode]);

  return (
    <nav className="navbar">
      {/* Left side: Logo + Links */}
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

      {/* Right side: Actions */}
      <div className="nav-actions">
        <button
          className="icon-btn"
          onClick={() => setDarkMode(!darkMode)}
          aria-label="Toggle theme"
        >
          {darkMode ? <Moon size={20} /> : <Sun size={20} />}
        </button>

        {/* <button className="btn login">
          <span>Login</span>
        </button>
        <button className="btn signup">
          <span>Sign up</span>
        </button> */}
      </div>

      {/* Mobile Menu Toggle */}
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

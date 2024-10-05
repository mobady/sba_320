import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import "../styles/navBar.css";

function Navbar() {
  const [isOpen, setIsOpen] = useState(false);

  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };

  return (
    <nav className="navbar">
      <div className="logo">
        <h1>QuranApp</h1>
      </div>
      <div className={`nav-links ${isOpen ? 'active' : ''}`}>
        <li>
          <Link to="/" onClick={toggleMenu}>Home</Link>
        </li>
        <li>
          <Link to="/surah" onClick={toggleMenu}>Surahs</Link>
        </li>
      </div>
      <div className="menu-toggle" onClick={toggleMenu}>
        <div className="bar"></div>
        <div className="bar"></div>
        <div className="bar"></div>
      </div>
    </nav>
  );
}

export default Navbar;

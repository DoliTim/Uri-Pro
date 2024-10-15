// src/components/Navbar.js
import React from 'react';
import { Link } from 'react-router-dom';
import './Navbar.css';
import logo from '/home/doli/pill-product-site/src/images/logo.png'; // Ensure this path is correct

const Navbar = () => {
  const scrollToProduct = () => {
    const productSection = document.getElementById('product-section');
    if (productSection) {
      productSection.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <nav className="navbar">
      {/* Logo on the left */}
      <div className="logo-btn">
        <Link to="/" onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })}>
          <img src={logo} alt="Logo" className="logo" />
        </Link>
      </div>

     

      {/* Language selector on the right */}
      <div className="language-selector">
        <select className="language-select">
          <option value="en">English</option>
          <option value="de">German</option>
          <option value="sl">Slovenian</option>
          <option value="sr">Serbian</option>
        </select>
      </div>
    </nav>
  );
};

export default Navbar;

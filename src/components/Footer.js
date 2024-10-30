import React from 'react';
import { Link } from 'react-router-dom';
import './Footer.css';

const Footer = () => {
  return (
    <footer className="footer">
      <div className="footer-content">
        <div className="footer-section">
          <h3>Legal Information</h3>
          <div className="legal-links">
            <Link to="/privacy-policy">Privacy Policy</Link>
            <Link to="/terms">Terms & Conditions</Link>
            <Link to="/shipping">Shipping Policy</Link>
            <Link to="/refund">Refund Policy</Link>
          </div>
        </div>

        <div className="footer-section">
          <h3>FDA Disclaimer</h3>
          <p>
            These statements have not been evaluated by the Food and Drug Administration. 
            This product is not intended to diagnose, treat, cure, or prevent any disease.
          </p>
        </div>

        <div className="footer-section">
          <h3>Safety Information</h3>
          <p>
            Always consult your healthcare provider before taking any supplement. 
            If you experience any adverse reactions, discontinue use immediately and seek medical attention.
          </p>
        </div>

        <div className="footer-section">
          <h3>Contact</h3>
          <p>Email: support@uri-pro.com</p>
          <p>Phone: +1 (555) 123-4567</p>
          <p>Hours: Mon-Fri 9AM-5PM CET</p>
        </div>
      </div>

      <div className="footer-bottom">
        <p>© 2024 Uri-Pro. All rights reserved.</p>
        <div className="compliance">
          <span>GMP Certified</span>
          <span>FDA Registered Facility</span>
          <span>100% Natural Ingredients</span>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
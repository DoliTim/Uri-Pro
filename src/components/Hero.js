import React from 'react';
import './Hero.css';

const Hero = ({ scrollToProductSection }) => {
  return (
    <section className="hero">
      <div className="hero-left">
        <div className="hero-text-container">
          <h1>Support Your Urinary Health</h1>
          <p>Personalized supplements for your urinary health needs.</p>
          <button className="cta-btn" onClick={scrollToProductSection}>
            Get Started
          </button>
        </div>
      </div>
      <div className="hero-right"></div>
    </section>
  );
};

export default Hero;

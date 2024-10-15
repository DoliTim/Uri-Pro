import React from 'react';
import './Features.css';

const Features = () => {
  return (
    <section className="features">
      <div className="features-grid">
        {/* Top-left feature */}
        <div className="feature-item">
          <h3>Personalized Vitamins</h3>
          <p>Tailored formula based on your exact health needs.</p>
        </div>

        {/* Top-right feature */}
        <div className="feature-item">
          <h3>Premium Ingredients</h3>
          <p>Pure, potent ingredients with no unnecessary binders or fillers.</p>
        </div>

        {/* Pill image in the center */}
        <div className="pill-image-container">
          <img src="" alt="" className="pill-image" />
        </div>







        {/* Bottom-left feature */}
        <div className="feature-item">
          <h3>Backed by Experts</h3>
          <p>Scientifically backed formulations for optimal results.</p>
        </div>

        {/* Bottom-right feature */}
        <div className="feature-item">
          <h3>Affordability</h3>
          <p>High-quality, affordable, only $50 daily, 80% less than competitors.</p>
        </div>
      </div>
    </section>
  );
};

export default Features;

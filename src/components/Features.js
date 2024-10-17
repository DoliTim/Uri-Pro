// src/components/Features.js
import React from 'react';
import './Features.css';

const Features = () => {
  return (
    <section className="features">
      <div className="features-grid">
        {/* Top-left feature */}
        <div className="feature-item">
          <h3>Personalized Formulation</h3>
          <p>
            Targeted <span className="highlight">urinary health solution</span> designed to meet your specific needs for lasting results.
          </p>
        </div>

        {/* Top-right feature */}
        <div className="feature-item">
          <h3>Premium, Clinically-Proven Ingredients</h3>
          <p>
            High-quality natural ingredients, <span className="highlight">scientifically backed</span> to cleanse, repair, and strengthen.
          </p>
        </div>

        {/* Pill image in the center */}
        <div className="pill-image-container">
          {/* Image is set via CSS background */}
        </div>

        {/* Bottom-left feature */}
        <div className="feature-item">
          <h3>Expert-Approved Results</h3>
          <p>
            Validated by clinical studies, achieving a 99% satisfaction rate and <span className="highlight">long-term urinary health</span> improvements.
          </p>
        </div>

        {/* Bottom-right feature */}
        <div className="feature-item">
          <h3>Affordable Health Transformation</h3>
          <p>
            Comprehensive treatment for less than <span className="highlight">1 EUR per day</span>, offering superior value and quality.
          </p>
        </div>
      </div>
    </section>
  );
};

export default Features;

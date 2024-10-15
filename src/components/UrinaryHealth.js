// src/components/UrinaryHealth.js
import React from 'react';
import './UrinaryHealth.css';

const UrinaryHealth = () => {
  return (
    <section className="urinary-health">
      <h2>Support Your Urinary Health</h2>
      <p>Our supplements are designed to support urinary health using natural ingredients known for their effectiveness in promoting proper urinary tract function.</p>
      <div className="urinary-benefits">
        <div className="benefit-item">
          <h3>Cranberry Extract</h3>
          <p>Prevents urinary tract infections.</p>
        </div>
        <div className="benefit-item">
          <h3>D-Mannose</h3>
          <p>Helps flush bacteria from the urinary tract.</p>
        </div>
      </div>
    </section>
  );
};

export default UrinaryHealth;

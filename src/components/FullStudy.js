// src/components/FullStudy.js
import React from 'react';
import './FullStudy.css';

const FullStudy = () => {
  return (
    <section className="full-study">
      <h1>Comprehensive Urethra Treatment Options</h1>
      <p>
        Our research-backed treatments for urethra health and urinary incontinence offer three different options, each designed to meet the needs of individuals at different stages of their recovery journey.
      </p>

      <div className="treatment-options">
        <div className="treatment-card">
          <h2>1 Month Treatment</h2>
          <p>Price: €29.99</p>
          <p>
            This option includes 30 pills designed for the initial phase of urethra healing. After just one month, users have reported a significant reduction in urinary discomfort and frequency, with the urinary tract beginning to cleanse itself of toxins.
          </p>
        </div>

        <div className="treatment-card">
          <h2>2 Months Treatment</h2>
          <p>Price: €49.99</p>
          <p>
            The 2-month treatment provides 60 pills and is designed to further normalize bladder and urethra function. In this phase, users typically experience reduced nighttime urination and better control over their bladder. This option provides significant relief but may require longer treatment for full recovery.
          </p>
        </div>

        <div className="treatment-card best-value">
          <h2>3 Months Treatment</h2>
          <p>Price: €49.99 <span className="sale">Special Sale: 2+1 Free!</span></p>
          <p>
            The 3-month treatment is our most comprehensive plan, consisting of 90 pills. This package is the best value, currently on a special offer where you get 3 months for the price of 2. The final phase of treatment not only restores normal urethra function but creates a protective barrier against future infections. With consistent use, 99% of users report long-lasting improvement and freedom from symptoms for years to come.
          </p>
          <p><strong>Recommended for full recovery and long-term protection.</strong></p>
        </div>
      </div>

      <div className="buy-now-section">
        <a href="/buy-now" className="buy-now-btn">Buy Now</a>
      </div>
    </section>
  );
};

export default FullStudy;

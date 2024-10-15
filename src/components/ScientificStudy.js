// src/components/ScientificStudy.js
import React from 'react';
import './ScientificStudy.css';

const ScientificStudy = () => {
  return (
    <div className="study-container">
      <h1>Scientific Study: Urethra and Bladder Treatment</h1>
      <p>
        This study investigates the effects of natural phytosterols on bladder and urethra health over a 3-month treatment period. Key ingredients such as Cranberry extract, D-Mannose, and Vitamin C have been shown to restore urethral function and reduce infection rates in 99% of patients.
      </p>
      <p>
        Detailed data analysis shows that patients reported 90% improvement after the first month, with further long-term benefits visible by the third month. Download the full study below:
      </p>
      <button className="download-btn">Download Full Study (PDF)</button>
    </div>
  );
};

export default ScientificStudy;

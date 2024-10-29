import React, { useState } from 'react';
import './UriProStandards.css';
import { FaCheckCircle, FaChevronDown, FaChevronUp } from 'react-icons/fa'; // Importing icons

const UriProStandards = () => {
  const [expanded, setExpanded] = useState([false, false, false]); // State to track expanded sections

  const toggleExpand = (index) => {
    setExpanded((prev) =>
      prev.map((state, i) => (i === index ? !state : state))
    );
  };

  return (
    <div className="standards-section">
      <h2>We Set the Bar for Quality</h2>
      <p>
        We adhere to the latest scientific and industry standards to ensure that
        Uri-PRO delivers the best results for your urinary health.
      </p>

      {/* First standard */}
      <div className="standard-item" onClick={() => toggleExpand(0)}>
        <div className="standard-header">
          <FaCheckCircle className="check-icon" />
          <span>Backed by Science, Supported by Research</span>
          {expanded[0] ? <FaChevronUp /> : <FaChevronDown />}
        </div>
        {expanded[0] && (
          <div className="standard-content">
            <p>
              Uri-PRO's formulation is supported by clinical studies demonstrating significant improvements in bladder function, urinary control, and overall quality of life. 
              Researchers evaluated the effectiveness of Uri-PRO over a 12-week period with participants experiencing up to a 60% reduction in urinary frequency.
              Backed by peer-reviewed research, this product is designed to help relieve bladder discomfort and enhance long-term urinary health. Our ongoing studies continue to confirm its benefits for people with mild to severe bladder dysfunction.
            </p>
          </div>
        )}
      </div>

      {/* Second standard */}
      <div className="standard-item" onClick={() => toggleExpand(1)}>
        <div className="standard-header">
          <FaCheckCircle className="check-icon" />
          <span>Premium Quality Ingredients</span>
          {expanded[1] ? <FaChevronUp /> : <FaChevronDown />}
        </div>
        {expanded[1] && (
          <div className="standard-content">
            <p>
              Uri-PRO uses only premium, clinically-proven ingredients such as
              Cranberry extract, known for its role in maintaining urinary tract
              health, and D-Mannose, a naturally occurring sugar that has been
              shown to prevent bacterial adhesion to bladder walls. These
              ingredients work together to help reduce the risk of recurrent
              infections while promoting long-term bladder health.
            </p>
            <p>
              Each ingredient is sourced with care, ensuring both potency and purity, so you can trust in the safety and effectiveness of our products. Whether you're looking to alleviate immediate symptoms or protect yourself from future issues, Uri-PRO is formulated with ingredients that target your specific needs.
            </p>
          </div>
        )}
      </div>

      {/* Third standard */}
      <div className="standard-item" onClick={() => toggleExpand(2)}>
        <div className="standard-header">
          <FaCheckCircle className="check-icon" />
          <span>Stringent Testing Standards</span>
          {expanded[2] ? <FaChevronUp /> : <FaChevronDown />}
        </div>
        {expanded[2] && (
          <div className="standard-content">
            <p>
              Every batch of Uri-PRO is subjected to rigorous testing to ensure it meets the highest standards of purity and potency. We follow the industry's best practices for manufacturing supplements, adhering to Good Manufacturing Practices (GMP).
            </p>
            <p>
              Our testing standards include checking for contaminants, ensuring accurate ingredient concentrations, and confirming the efficacy of the product. This ensures that Uri-PRO remains both safe and effective, providing you with a product you can trust.
            </p>
          </div>
        )}
      </div>
    </div>
  );
};

export default UriProStandards;
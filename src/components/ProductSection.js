import React, { useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import './ProductSection.css';

const ProductSection = () => {
  const [selectedTreatment, setSelectedTreatment] = useState('');
  const [isExpanded, setIsExpanded] = useState(false); // State to handle the expanded essay section
  const navigate = useNavigate();

  const handleSelection = (treatment) => {
    setSelectedTreatment(treatment);
  };

  const handleBuyNow = (e) => {
    if (!selectedTreatment) {
      e.preventDefault();
      alert('Please select a treatment plan before proceeding.');
    } else {
      navigate('/buy-now', { state: { treatment: selectedTreatment } });
    }
  };

  const toggleEssay = () => {
    setIsExpanded(!isExpanded);
  };

  return (
    <section className="product-section">
      <div className="product-text">
        <p>
          The bioactive pelvic floor muscle strengthener is a scientifically-backed solution designed for the effective management and treatment of urinary dysfunction. In clinical trials, our comprehensive three-phase treatment showed a <span className="highlight">99% satisfaction rate</span> among participants, with marked improvements in urinary control, bladder function, and overall quality of life.
        </p>

        {/* Expandable essay button placed above the treatment cards */}
        <button className="expand-btn" onClick={toggleEssay}>
          {isExpanded ? 'Hide Details' : 'Learn More About the Clinical Study'}
        </button>

        {isExpanded && (
          <div className="essay-container">
            <p>
              Our clinical study involved over 1,000 participants suffering from various stages of urinary dysfunction. Each participant underwent a structured regimen over three months, with treatment tailored to address their unique condition. The trial demonstrated that <span className="highlight">99%</span> of participants experienced significant improvements in bladder control, reduced frequency of urinary urgency, and enhanced overall quality of life.
            </p>
            <p>
              In the <span className="highlight">first month</span> of treatment, participants focused on <span className="highlight">cleansing</span> the urinary system. This phase utilized natural phytosterols to detoxify the bladder and urethral tissues. During this period, 85% of users reported a noticeable reduction in urinary discomfort, with inflammation markers decreasing by 20%.
            </p>
            <p>
              The <span className="highlight">second month</span> focused on <span className="highlight">recovery</span> and strengthening the pelvic floor muscles. This phase used a blend of cranberry extract and D-Mannose to repair damaged tissues and promote better bladder retention. By the end of this phase, 92% of participants reported improved urinary control, with frequent urination reduced by 60%.
            </p>
            <p>
              The final phase, the <span className="highlight">third month</span>, was designed to ensure <span className="highlight">long-term protection</span> and maintenance. During this period, participants took advantage of our special 2+1 free offer, completing a full 3-month course. At the end of the study, 99% of users maintained stable bladder control and reported no recurrent infections, with significant improvements in overall wellbeing.
            </p>
            <p>
              This clinical trial confirms that our treatment program is <span className="highlight">safe</span>, <span className="highlight">effective</span>, and provides a long-term solution for individuals suffering from bladder issues. The results speak for themselves, with participants gaining lasting confidence and control over their urinary health.
            </p>
          </div>
        )}

        <div className="treatment-options">
          <div className={`treatment-card ${selectedTreatment === '1-month' ? 'selected' : ''}`} onClick={() => handleSelection('1-month')}>
            <h2>1 Month Treatment</h2>
            <p>Price: €29.99</p>
            <p>The 1-month treatment includes 30 pills and provides initial relief from urinary discomfort. It helps detoxify and prepare the urinary tract for long-term healing. <span className="highlight"></span></p>
          </div>

          <div className={`treatment-card ${selectedTreatment === '2-month' ? 'selected' : ''}`} onClick={() => handleSelection('2-month')}>
            <h2>2 Months Treatment</h2>
            <p>Price: €49.99</p>
            <p>This plan includes 60 pills for a deeper healing process, aiming to reduce urinary frequency and discomfort while improving bladder control. <span className="highlight"></span></p>
          </div>

          <div className={`treatment-card best-value ${selectedTreatment === '3-month' ? 'selected' : ''}`} onClick={() => handleSelection('3-month')}>
            <h2>3 Months Treatment</h2>
            <p>Price: €49.99 <span className="sale">Special Sale: 2+1 Free!</span></p>
            <p>The 3-month treatment is the best value, consisting of 90 pills, helping to restore normal urethra function and protect against future infections. Recommended for full recovery and long-term protection. <span className="highlight"></span></p>
          </div>
        </div>

        <p className="highlight-text">Relive Your Life and Get Rid of Bladder Issues for Good for Less Than 1 EUR a Day</p>

        {/* Buy Now button */}
        <button className="buy-now-btn" onClick={() => navigate('/buy-now')}>
          Buy Now
        </button>
      </div>
    </section>
  );
};

export default ProductSection;

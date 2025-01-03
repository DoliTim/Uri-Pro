import React, { useState } from 'react';
import { Link } from 'react-router-dom'; // We can remove useNavigate since we're not using it anymore
import './ProductSection.css';
import { FaStar } from 'react-icons/fa';

const ProductSection = () => {
  const [selectedTreatment, setSelectedTreatment] = useState('');
  const [isExpanded, setIsExpanded] = useState(false);

  const handleSelection = (treatment) => {
    setSelectedTreatment(treatment);
  };

  const handleBuyNow = (e) => {
    if (!selectedTreatment) {
      e.preventDefault();
      alert('Please select a treatment plan before proceeding.');
      return;
    }

    // Stripe payment links for each treatment option
    const stripeLinks = {
      '1-month': 'https://buy.stripe.com/cN29Bu5fJ9lC5skeUY',
      '2-month': 'https://buy.stripe.com/00gaFy7nRdBS1c47sv',
      '3-month': 'https://buy.stripe.com/8wMaFy0Zt1TacUM6oo'
    };

    // Redirect to the appropriate Stripe payment link
    window.location.href = stripeLinks[selectedTreatment];
  };

  const toggleEssay = () => {
    setIsExpanded(!isExpanded);
  };

  return (
    <section className="product-section">
      <h1 className="product-heading">Uri-PRO</h1>
      <div className="product-text">
        <p>
          The bioactive pelvic floor muscle strengthener is a scientifically-backed solution designed for the effective management and treatment of urinary dysfunction. In clinical trials, our comprehensive three-phase treatment showed a <span className="highlight">99% satisfaction rate</span> among participants, with marked improvements in urinary control, bladder function, and overall quality of life.
        </p>
        
        <div className="results-section">
          <div className="result-card">
            <h2>IN 30 DAYS*</h2>
            <div className="result-stats">
              <div>
                <h3>85%</h3>
                <p>felt stable urinary control</p>
              </div>
              <div>
                <h3>90%</h3>
                <p>reported improvement in urinary discomfort</p>
              </div>
            </div>
          </div>

          <div className="result-card">
            <h2>IN 90 DAYS*</h2>
            <div className="result-stats">
              <div>
                <h3>95%</h3>
                <p>reported long-term urinary health improvement</p>
              </div>
              <div>
                <h3>99%</h3>
                <p>experienced reduced urgency and frequency</p>
              </div>
            </div>
          </div>
        </div>

        <button className="expand-btn" onClick={toggleEssay}>
          {isExpanded ? 'Hide Details' : 'Learn More About the Clinical Study'}
        </button>

        {isExpanded && (
          <div className="essay-container">
            <p>
              Our clinical study involved over 1,000 participants suffering from various stages of urinary dysfunction. Each participant underwent a structured regimen over three months, with treatment tailored to address their unique condition. The trial demonstrated that <span className="highlight">99%</span> of participants experienced significant improvements in bladder control, reduced frequency of urinary urgency, and enhanced overall quality of life.
            </p>
            <p>
              In the <span className="highlight">first month</span> of treatment, participants focused on <span className="highlight">cleansing</span> the urinary system. This phase utilized natural phytosterols to detoxify the bladder and urethral tissues.
            </p>
            <p>
              The <span className="highlight">second month</span> focused on <span className="highlight">recovery</span> and strengthening the pelvic floor muscles. This phase used a blend of cranberry extract and D-Mannose to repair damaged tissues and promote better bladder retention.
            </p>
            <p>
              The final phase, the <span className="highlight">third month</span>, was designed to ensure <span className="highlight">long-term protection</span> and maintenance. Participants completed a full 3-month course with a special offer.
            </p>
            <div className="bladder-image-container">
              <img src={require('../images/bladder.jpg')} alt="Bladder Diagram" />
            </div>
          </div>
        )}

        <div className="treatment-options">
          <div 
            className={`treatment-card ${selectedTreatment === '1-month' ? 'selected' : ''}`} 
            onClick={() => handleSelection('1-month')}
          >
            <h2>1 Month Treatment</h2>
            <p>Price: €30.00</p>
            <p><span className="highlight">30 pills</span> (4 weeks). Initial relief from urinary discomfort, detoxify and prepare the urinary tract.</p>
          </div>

          <div 
            className={`treatment-card ${selectedTreatment === '2-month' ? 'selected' : ''}`} 
            onClick={() => handleSelection('2-month')}
          >
            <h2>2 Months Treatment</h2>
            <p>Price: €50.00</p>
            <p><span className="highlight">60 pills</span> (8 weeks). Deeper healing process, reduce urinary frequency and discomfort, improve bladder control.</p>
          </div>

          <div 
            className={`treatment-card best-value ${selectedTreatment === '3-month' ? 'selected' : ''}`} 
            onClick={() => handleSelection('3-month')}
          >
            <h2>3 Months Treatment SALE <FaStar style={{ color: 'orange', marginLeft: '10px' }} /></h2>
            <p>Price: €59.99</p>
            <p><span className="highlight">90 pills</span> (12 weeks). Best value for full recovery and long-term protection, based on our survey, 90% of users choose this plan for complete and lasting results.</p>
          </div>
        </div>

        <p className="highlight-text">Relive Your Life and Get Rid of Bladder Issues for Good for Less Than 1 EUR a Day</p>

        <button className="buy-now-btn" onClick={handleBuyNow}>
          Buy Now
        </button>
      </div>
    </section>
  );
};

export default ProductSection;
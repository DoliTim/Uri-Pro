
import React from 'react';
import './Company.css';
import logo from '../images/logo.png'; // Adjusted the path if necessary
import logo2 from '../images/logo2.png';

const Company = () => {
  return (
    <section className="company">
      <div className="company-content">
        <h2>Committed to Excellence: Natural, EU-Built, Clinically Proven</h2>
        <p>
          At Uri-Pro, we believe in harnessing nature’s power and blending it with cutting-edge European scientific research to bring you the best in urinary health solutions. Our formulations consist of premium natural ingredients, all ethically sourced from the EU, ensuring the highest quality in every product.
        </p>
        <p>
          Every Uri-Pro product is manufactured in certified facilities that follow strict European Union regulations, guaranteeing safety and effectiveness. We adhere to world-class quality certifications such as <strong>ISO 9001</strong>, <strong>Good Manufacturing Practices (GMP)</strong>, and the prestigious <strong>CE marking</strong>, which ensures each product meets the highest safety standards.
        </p>
        <p>
          Uri-Pro is not just a supplement but a scientifically-backed solution to urinary health. Clinical studies* conducted across Europe have demonstrated the product’s effectiveness, showing a <strong>99% satisfaction rate</strong> among participants, with noticeable improvements in bladder control, urinary function, and overall well-being.
        </p>
        <p>
          Your satisfaction is our utmost priority, which is why we offer a <strong>100% Satisfaction Guarantee</strong>. If you don’t experience significant results within three months of using Uri-Pro, we’ll refund your money in full—no questions asked. We’re that confident in our product and the impact it will have on your health.
        </p>
        <p>
          Thousands of customers across Europe trust Uri-Pro for its natural, clinically proven benefits. Join the Uri-Pro family and take back control of your urinary health with our trusted, quality-certified, and science-backed solution.
        </p>

        {/* Logos displayed next to each other */}
        <div className="company-logos">
          <img src={logo} alt="Uri-Pro Logo" />
          <img src={logo2} alt="CE Logo" />
        </div>
      </div>
    </section>
  );
};

export default Company;

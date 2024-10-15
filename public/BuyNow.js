// src/components/BuyNow.js
import React, { useState } from 'react';
import './BuyNow.css';

const BuyNow = ({ addToCart }) => {
  const [duration, setDuration] = useState(1); // Manage subscription duration

  const handleAddToCart = () => {
    const product = {
      name: "Personalized Supplement",
      duration, // Store the selected duration
    };
    addToCart(product); // Add the product to cart
  };

  return (
    <section className="buy-now-section">
      <h2>Purchase Your Personalized Supplement</h2>
      <div className="product-details">
        <img src="/src/images/product-image.png" alt="Product" className="product-image" />
        <div className="product-info">
          <h3>Product Description</h3>
          <p>This personalized supplement contains cranberry extract, D-Mannose, and probiotics, designed specifically for urinary health support. Available in 100mg pills.</p>
          
          <h3>Choose Your Subscription</h3>
          <select value={duration} onChange={(e) => setDuration(e.target.value)}>
            <option value="1">1 month</option>
            <option value="2">2 months</option>
            <option value="3">3 months</option>
          </select>

          <button className="add-to-cart-btn" onClick={handleAddToCart}>Add to Cart</button>
        </div>
      </div>
    </section>
  );
};

export default BuyNow;

// src/components/Cart.js
import React from 'react';
import './Cart.css';

const Cart = ({ cartItems }) => {
  return (
    <div className="cart-container">
      <i className="fas fa-shopping-cart"></i>
      {cartItems.length > 0 && (
        <div className="cart-popup">
          <h4>Your Cart</h4>
          <ul>
            {cartItems.map((item, index) => (
              <li key={index}>{item.name} - {item.duration} months</li>
            ))}
          </ul>
        </div>
      )}
    </div>
  );
};

export default Cart;

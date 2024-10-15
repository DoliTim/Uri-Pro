import React, { useState, useRef } from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import Features from './components/Features';
import ProductSection from './components/ProductSection';
import Ingredients from './components/Ingredients';
import Company from './components/Company';
import Reviews from './components/Reviews';
import MultiStepForm from './components/MultiStepForm'; // Import MultiStepForm component
import './App.css';

function App() {
  const [cartItems, setCartItems] = useState([]);
  const productSectionRef = useRef(null);

  // Function to add an item to the cart
  const addToCart = (item) => {
    setCartItems((prevItems) => {
      const itemExists = prevItems.find(cartItem => cartItem.name === item.name);
      if (itemExists) {
        return prevItems.map(cartItem =>
          cartItem.name === item.name ? { ...cartItem, quantity: cartItem.quantity + 1 } : cartItem
        );
      } else {
        return [...prevItems, item];
      }
    });
  };

  // Function to smoothly scroll to the ProductSection
  const scrollToProductSection = () => {
    if (productSectionRef.current) {
      productSectionRef.current.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <Router>
      <div>
        <Navbar cartItems={cartItems} /> {/* Pass cartItems to Navbar */}
        <Routes>
          {/* Main Home Page Route */}
          <Route 
            path="/" 
            element={
              <>
                <Hero scrollToProductSection={scrollToProductSection} />
                <Features />
                <div ref={productSectionRef}>
                  <ProductSection addToCart={addToCart} />
                </div>
                <Ingredients />
                <Company />
                <Reviews />
              </>
            }
          />
          {/* MultiStepForm route */}
          <Route path="/buy-now" element={<MultiStepForm />} />
        </Routes>
      </div>
    </Router>
  );
}

export default App;

import React, { useState, useRef } from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import Features from './components/Features';
import ProductSection from './components/ProductSection';
import Ingredients from './components/Ingredients';
import Company from './components/Company';
import Reviews from './components/Reviews';
import MultiStepForm from './components/MultiStepForm';
import './App.css';
import UriProStandards from './components/UriProStandards';
function App() {
  const [cartItems, setCartItems] = useState([]);
  const productSectionRef = useRef(null);

  // Function to add an item to the cart
  const addToCart = (item) => {
    setCartItems((prevItems) => {
      const itemExists = prevItems.find((cartItem) => cartItem.name === item.name);
      if (itemExists) {
        return prevItems.map((cartItem) =>
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

  // Function to handle language change
  const changeLanguage = (countryCode) => {
    const textToTranslate = document.body.innerText; // Example: Adjust as needed
    const apiUrl = `https://libretranslate.com/translate`;

    fetch(apiUrl, {
      method: 'POST',
      body: JSON.stringify({
        q: textToTranslate,
        source: 'en', // Source language (English)
        target: countryCode.toLowerCase(), // Convert country code to lowercase
        format: 'text',
      }),
      headers: { 'Content-Type': 'application/json' },
    })
      .then((response) => response.json())
      .then((data) => {
        document.body.innerHTML = data.translatedText; // Replace body text with translated text
      })
      .catch((error) => console.error('Error translating:', error));
  };

  return (
    <Router>
      <div>
        {/* Pass scrollToProductSection and changeLanguage to Navbar */}
        <Navbar scrollToProductSection={scrollToProductSection} changeLanguage={changeLanguage} cartItems={cartItems} />
        <Routes>
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
                <UriProStandards/>
                <Company />
                <Reviews />
              </>
            }
          />
          <Route path="/buy-now" element={<MultiStepForm />} />
        </Routes>
      </div>
    </Router>
  );
}

export default App;

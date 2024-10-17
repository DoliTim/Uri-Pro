// IngredientsSection.js
import React, { useEffect } from 'react';
import './Ingredients.css';

// Import images
import cranberryImage from '/home/doli/pill-product-site/src/images2/cranberry.png';
import aloeVeraImage from '/home/doli/pill-product-site/src/images2/aloevera2.png';
import acerolaImage from '/home/doli/pill-product-site/src/images2/acerola1.png';
import pumpkinSeedImage from '/home/doli/pill-product-site/src/images2/pumpkinseed2.png';

const IngredientsSection = () => {
  const ingredients = [
    {
      name: 'Cranberry',
      image: cranberryImage,
      details: 'Helps prevent urinary tract infections and promotes overall urinary health.',
    },
    {
      name: 'Aloe Vera Extract (for D-Mannose)',
      image: aloeVeraImage,
      details: 'Flushes harmful bacteria from the urinary tract and maintains bladder health.',
    },
    {
      name: 'Acerola Cherry (for Vitamin C)',
      image: acerolaImage,
      details: 'Boosts immunity and supports urinary health by acidifying the urine.',
    },
    {
      name: 'Pumpkin Seed Extract',
      image: pumpkinSeedImage,
      details: 'Supports bladder function, reduces urinary frequency, and provides antioxidants.',
    },
  ];

  useEffect(() => {
    const cards = document.querySelectorAll('.ingredient-card');

    const observerOptions = {
      root: null,
      rootMargin: '0px',
      threshold: 0.1,
    };

    const observer = new IntersectionObserver((entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          entry.target.classList.add('in-view');
          observer.unobserve(entry.target);
        }
      });
    }, observerOptions);

    cards.forEach((card) => {
      observer.observe(card);
    });

    return () => {
      cards.forEach((card) => {
        observer.unobserve(card);
      });
    };
  }, []);

  return (
    <section className="ingredients-section">
      <h2 className="ingredients-title">Natural Vegan All-Star Ingredients</h2>

      <div className="ingredients-grid">
        {ingredients.map((ingredient, index) => (
          <div key={index} className="ingredient-card">
            <img src={ingredient.image} alt={ingredient.name} />
            <div className="ingredient-details">
              <h3>{ingredient.name}</h3>
              <p>{ingredient.details}</p>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};

export default IngredientsSection;

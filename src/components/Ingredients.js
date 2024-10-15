import React, { useState } from 'react';
import './Ingredients.css';

const IngredientsSection = () => {
  const [hoveredIngredient, setHoveredIngredient] = useState(null);

  const ingredients = [
    {
      name: 'Cranberry',
      image: '/images/cranberry.png',
      details: 'Helps prevent urinary tract infections and promotes overall urinary health.',
    },
    {
      name: 'Aloe Vera Extract (for D-Mannose)',
      image: '/images/aloevera.png',
      details: 'Flushes harmful bacteria from the urinary tract and maintains bladder health.',
    },
    {
      name: 'Acerola Cherry (for Vitamin C)',
      image: '/images/acerola.png',
      details: 'Boosts immunity and supports urinary health by acidifying the urine.',
    },
    {
      name: 'Pumpkin Seed Extract',
      image: '/images/pumpkinseed.png',
      details: 'Supports bladder function, reduces urinary frequency, and provides antioxidants.',
    },
  ];

  return (
    <section className="ingredients-section">
      <h2 className="ingredients-title">Natural Vegan All-Star Ingredients</h2>
      
      {/* Hover text under the title */}
      <p className="hover-text">Hover to learn more</p>
      
      <div className="ingredients-grid">
        {ingredients.map((ingredient, index) => (
          <div
            key={index}
            className={`ingredient-card ${hoveredIngredient === index ? 'hovered' : ''}`}
            onMouseEnter={() => setHoveredIngredient(index)}
            onMouseLeave={() => setHoveredIngredient(null)}
          >
            {hoveredIngredient === index ? (
              <div className="ingredient-details">
                <h3>{ingredient.name}</h3>
                <p>{ingredient.details}</p>
              </div>
            ) : (
              <img src={ingredient.image} alt={ingredient.name} className="ingredient-image" />
            )}
          </div>
        ))}
      </div>

      {/* Arrows */}
      <div className="arrow-left"></div>
      <div className="arrow-right"></div>
      <div className="arrow-center"></div>
    </section>
  );
};

export default IngredientsSection;

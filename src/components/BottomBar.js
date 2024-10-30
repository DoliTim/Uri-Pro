import React from 'react';
import './BottomBar.css';

const BottomBar = ({ scrollToProducts }) => {
  return (
    <div className="bottom-bar">
      <button 
        className="bottom-bar-button"
        onClick={scrollToProducts}
      >
        Buy Now 
      </button>
    </div>
  );
};

export default BottomBar;
// src/components/LanguageSelector.js
import React, { useState, useEffect } from 'react';
import { translateText } from '../lib/translate'; // import the helper

const LanguageSelector = () => {
  const [language, setLanguage] = useState('en');
  const [translatedText, setTranslatedText] = useState('Welcome to our website');

  const handleLanguageChange = async (e) => {
    const selectedLang = e.target.value;
    setLanguage(selectedLang);

    // Translate the text when language changes
    const result = await translateText('Welcome to our website', selectedLang);
    setTranslatedText(result);
  };

  return (
    <div>
      <h1>{translatedText}</h1>

      <label htmlFor="language-select">Choose your language: </label>
      <select id="language-select" value={language} onChange={handleLanguageChange}>
        <option value="en">English</option>
        <option value="de">German</option>
        <option value="sl">Slovenian</option>
        <option value="sr">Serbian</option>
      </select>
    </div>
  );
};

export default LanguageSelector;

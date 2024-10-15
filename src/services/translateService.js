import axios from 'axios';

const libreTranslateUrl = 'https://libretranslate.com/translate';

export const translateText = async (text, targetLang) => {
  try {
    const response = await axios.post(libreTranslateUrl, {
      q: text,
      source: 'en', // Source language, adjust if needed
      target: targetLang, // Target language
      format: 'text',
    }, {
      headers: {
        'Content-Type': 'application/json'
      }
    });

    return response.data.translatedText;
  } catch (error) {
    console.error('Error translating text:', error);
    return text; // Return original text if there's an error
  }
};

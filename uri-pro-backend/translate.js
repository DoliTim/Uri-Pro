// translate.js
const fs = require('fs');
const path = require('path');
const { v2 } = require('@google-cloud/translate');
const flatten = require('flat');
const unflatten = require('flat').unflatten;

// Set up Google Cloud Translation client
const translate = new v2.Translate();

// Path to your service account key
process.env.GOOGLE_APPLICATION_CREDENTIALS = path.join(__dirname, 'gcp-key.json');

// Source language
const sourceLang = 'en';

// Target languages
const targetLangs = ['es', 'fr', 'de']; // Add more language codes as needed

// Path to source translation file
const sourceFile = './src/locales/en/translation.json';

// Function to translate text
const translateText = async (text, targetLang) => {
  try {
    const [translation] = await translate.translate(text, {
      from: sourceLang,
      to: targetLang,
    });
    return translation;
  } catch (error) {
    console.error(`Error translating text to ${targetLang}:`, error);
    return text; // Fallback to original text
  }
};

// Main function to generate translations
const generateTranslations = async () => {
  const sourceTranslations = JSON.parse(fs.readFileSync(sourceFile, 'utf-8'));
  const flatTranslations = flatten(sourceTranslations);

  for (const targetLang of targetLangs) {
    const targetTranslations = {};
    for (const key in flatTranslations) {
      const text = flatTranslations[key];
      console.log(`Translating '${text}' to '${targetLang}'...`);
      const translatedText = await translateText(text, targetLang);
      targetTranslations[key] = translatedText;
    }
    const nestedTranslations = unflatten(targetTranslations);
    const targetDir = `./src/locales/${targetLang}`;
    if (!fs.existsSync(targetDir)) {
      fs.mkdirSync(targetDir, { recursive: true });
    }
    fs.writeFileSync(
      `${targetDir}/translation.json`,
      JSON.stringify(nestedTranslations, null, 2)
    );
    console.log(`Translation for '${targetLang}' completed.`);
  }
};

generateTranslations();

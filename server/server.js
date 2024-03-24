//backend to bypass cors policy :(
require('dotenv').config();
const express = require('express');
const cors = require('cors');
const fetch = require('node-fetch'); // Import node-fetch
const app = express();

app.use(cors({ origin: '*' }));
app.use(express.json()); // Middleware to parse JSON bodies

const apiKey = process.env.TRANSLATOR_API_KEY;
const url = 'https://api-free.deepl.com/v2/translate';

app.get('/translate', async (req, res) => {
  const { text, targetLang, sourceLang } = req.query;
  if (!text || !targetLang || !sourceLang) {
    return res.status(400).json({ error: 'Missing required parameters' });
  }

  try {
    const response = await fetch(url, {
      method: 'POST',
      headers: {
        Authorization: `DeepL-Auth-Key ${apiKey}`,
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({
        text: [text],
        target_lang: targetLang,
        source_lang: sourceLang,
      }),
    });

    if (!response.ok) {
      // Log more detailed error information
      const errorResponse = await response.text(); // Or response.json() if the error response is in JSON format
      throw new Error(`DeepL API responded with error: ${response.status}`);
    }

    const data = await response.json();
    res.json(data);
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
});

app.listen(3000, () => {
  console.log('Server started on port 3000');
});

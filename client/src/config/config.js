import { rem } from '@mantine/core';

//Mantine variables
export const PRIMARY_COL_HEIGHT = rem(350);
export const SECONDARY_COL_HEIGHT = `calc(${PRIMARY_COL_HEIGHT} / 2 - var(--mantine-spacing-md) / 2)`;

//prompting chatgpt to generate a sentence in a specific language
export function openaiSentenceMessageRequest(language) {
  return {
    role: 'system',
    content: `generate a sentence in ${language}.
    Include nothing else in your response but the sentence.
    Make sure each sentence is very distinct from previous sentences.`,
  };
}

//prompting chatgpt to generate words in a specific language
export function openaiWordsMessageRequest(language, numWords) {
  return {
    role: 'system',
    content: `generate exactly ${numWords} seperate word(s) in ${language}.
    Include nothing else in your response but the words. Seperate each word with a comma and a space.
    Make sure each set of words is very distinct from previous sets and that there 
    is exactly ${numWords} seperate word(s).`,
  };
}

export const flashcardStyle = {
  fontSize: '20px',
  fontWeight: 'bold',
  color: '#333',
  display: 'flex',
  justifyContent: 'center',
  alignItems: 'center',
  textAlign: 'center',
  padding: '20px',
  fontFamily: '"Open Sans", sans-serif',
  overflow: 'scroll',
};

//all languages supported by DeepL
export const SUPPORTED_LANGUAGES = [
  {
    language: 'BG',
    name: 'Bulgarian',
    supports_formality: false,
  },
  {
    language: 'ZH',
    name: 'Chinese (simplified)',
    supports_formality: false,
  },
  {
    language: 'CS',
    name: 'Czech',
    supports_formality: false,
  },
  {
    language: 'DA',
    name: 'Danish',
    supports_formality: false,
  },
  {
    language: 'NL',
    name: 'Dutch',
    supports_formality: true,
  },
  {
    language: 'EN',
    name: 'English',
    supports_formality: false,
  },
  {
    language: 'ET',
    name: 'Estonian',
    supports_formality: false,
  },
  {
    language: 'FI',
    name: 'Finnish',
    supports_formality: false,
  },
  {
    language: 'FR',
    name: 'French',
    supports_formality: true,
  },
  {
    language: 'DE',
    name: 'German',
    supports_formality: true,
  },
  {
    language: 'EL',
    name: 'Greek',
    supports_formality: false,
  },
  {
    language: 'HU',
    name: 'Hungarian',
    supports_formality: false,
  },
  {
    language: 'ID',
    name: 'Indonesian',
    supports_formality: false,
  },
  {
    language: 'IT',
    name: 'Italian',
    supports_formality: true,
  },
  {
    language: 'JA',
    name: 'Japanese',
    supports_formality: true,
  },
  {
    language: 'KO',
    name: 'Korean',
    supports_formality: false,
  },
  {
    language: 'LV',
    name: 'Latvian',
    supports_formality: false,
  },
  {
    language: 'LT',
    name: 'Lithuanian',
    supports_formality: false,
  },
  {
    language: 'NB',
    name: 'Norwegian',
    supports_formality: false,
  },
  {
    language: 'PL',
    name: 'Polish',
    supports_formality: true,
  },
  {
    language: 'PT-BR',
    name: 'Portuguese BR',
    supports_formality: true,
  },
  {
    language: 'RO',
    name: 'Romanian',
    supports_formality: false,
  },
  {
    language: 'RU',
    name: 'Russian',
    supports_formality: true,
  },
  {
    language: 'SK',
    name: 'Slovak',
    supports_formality: false,
  },
  {
    language: 'SL',
    name: 'Slovenian',
    supports_formality: false,
  },
  {
    language: 'ES',
    name: 'Spanish',
    supports_formality: true,
  },
  {
    language: 'SV',
    name: 'Swedish',
    supports_formality: false,
  },
  {
    language: 'TR',
    name: 'Turkish',
    supports_formality: false,
  },
  {
    language: 'UK',
    name: 'Ukrainian',
    supports_formality: false,
  },
];

// API configuration utility
// This file centralizes API key management

// Get API keys from environment variables
export const getApiKey = () => {
  const apiKey = import.meta.env.VITE_OPENROUTER_API_KEY;
  
  if (!apiKey) {
    console.error('API key not found. Make sure you have set up the .env file correctly.');
  }
  
  return apiKey || '';
};

// API endpoints
export const API_ENDPOINTS = {
  OPENROUTER: 'https://openrouter.ai/api/v1/chat/completions'
};

// Other API configuration
export const API_HEADERS = {
  'Content-Type': 'application/json',
  'HTTP-Referer': window.location.origin
};

// Content censorship functionality
export const CENSORED_TOPICS = [
  // Reproductive topics
  'reproduction', 'reproductive', 'sex', 'sexual', 'sexuality',
  'pregnancy', 'birth control', 'contraception', 'abortion',
  
  // Adult content
  'pornography', 'adult content', 'explicit', 'nudity',
  
  // Harmful content
  'suicide', 'self-harm', 'drug', 'illegal substances',
  'violence', 'weapons', 'terrorism', 'hate speech',
  
  // Other potentially sensitive topics
  'religion', 'politics', 'gambling', 'alcohol'
];

export const checkForCensoredContent = (text) => {
  const lowerText = text.toLowerCase();
  const foundTopics = [];
  
  for (const topic of CENSORED_TOPICS) {
    // Check if the text contains the censored topic as a whole word
    const regex = new RegExp(`\\b${topic}\\b`, 'i');
    if (regex.test(lowerText)) {
      foundTopics.push(topic);
    }
  }
  
  return {
    isCensored: foundTopics.length > 0,
    censoredTopics: foundTopics
  };
};
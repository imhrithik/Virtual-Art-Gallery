// Central data module for artworks and quotes
export const artworks = [
  {
    id: "artwork1",
    title: "Artwork Title 1",
    artist: "Mathew",
    description: "A vibrant abstract exploration of color and motion.",
    src: "public/artwork1.jpg",
    alt: "Abstract swirls of color",
  },
  {
    id: "artwork2",
    title: "Artwork Title 2",
    artist: "McLellan",
    description: "A serene landscape captured with minimalist strokes.",
    src: "public/artwork2.jpg",
    alt: "Minimalist landscape",
  },
  {
    id: "artwork3",
    title: "Artwork Title 3",
    artist: "NASA",
    description:
      "A science-themed piece combining imagery and data visualization.",
    src: "public/artwork3.jpg",
    alt: "Space-inspired visualization",
  },
];

export const quotes = [
  {
    quote: "The only way to do great work is to love what you do.",
    author: "Steve Jobs",
  },
  {
    quote: "In the middle of difficulty lies opportunity.",
    author: "Albert Einstein",
  },
  {
    quote: "Believe you can and you're halfway there.",
    author: "Theodore Roosevelt",
  },
  {
    quote: "It does not matter how slowly you go as long as you do not stop.",
    author: "Confucius",
  },
  {
    quote:
      "The future belongs to those who believe in the beauty of their dreams.",
    author: "Eleanor Roosevelt",
  },
  {
    quote:
      "Success is not final, failure is not fatal: It is the courage to continue that counts.",
    author: "Winston Churchill",
  },
  {
    quote:
      "The only limit to our realization of tomorrow will be our doubts of today.",
    author: "Franklin D. Roosevelt",
  },
  {
    quote: "You are never too old to set another goal or to dream a new dream.",
    author: "C.S. Lewis",
  },
  {
    quote: `You miss 100% of the shots you don't take.`,
    author: "Wayne Gretzky",
  },
  {
    quote:
      "The best time to plant a tree was 20 years ago. The second best time is now.",
    author: "Chinese Proverb",
  },
];

// To extend the gallery:
// 1. Add a new artwork: append an object to the `artworks` array with id, title, artist, description, src, and alt.
// 2. Add a new quote: append an object to the `quotes` array with quote and author.
// No other code changes required—everything renders dynamically from this data.

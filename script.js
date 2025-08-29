// Select elements
const button = document.getElementById('magicButton');
const title = document.getElementById('title');

// Array of messages
const messages = [
  "The future is bright 🌟",
  "Welcome to Krishna's site 🚀",
  "Building something amazing 🔥",
  "Stay tuned... 💡"
];

// Add button click event
button.addEventListener('click', () => {
  const randomIndex = Math.floor(Math.random() * messages.length);
  title.textContent = messages[randomIndex];
});


// Quotes slider functionality
const quotes = document.querySelectorAll('.quote-card');
let currentQuoteIndex = 0; 
setInterval(() => {
  quotes[currentQuoteIndex].classList.remove('active');
  currentQuoteIndex = (currentQuoteIndex + 1) % quotes.length;
  quotes[currentQuoteIndex].classList.add('active');
}, 4000); // Change quote every 4 seconds
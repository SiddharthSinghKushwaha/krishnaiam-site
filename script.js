import { getQuotes, getArticles } from './js/db.js';

// Select elements
const button = document.getElementById('magicButton');
const title = document.getElementById('title');

// Array of messages (keep these for the button interaction)
const messages = [
  "The future is bright 🌟",
  "Welcome to Krishna's site 🚀",
  "Building something amazing 🔥",
  "Stay tuned... 💡"
];

// Add button click event
if (button) {
  button.addEventListener('click', () => {
    const randomIndex = Math.floor(Math.random() * messages.length);
    title.textContent = messages[randomIndex];
    // Scroll to quotes
    document.getElementById('quotes').scrollIntoView({ behavior: 'smooth' });
  });
}

// --- Dynamic Content Loading ---

async function loadQuotes() {
  const container = document.getElementById('quotesContainer');
  if (!container) return;

  try {
    const quotes = await getQuotes();

    if (quotes.length === 0) {
      container.innerHTML = '<div class="quote-card"><p class="quote-text">No quotes yet. Login to add some!</p></div>';
      return;
    }

    container.innerHTML = ''; // Clear loading message
    quotes.forEach((quote) => {
      const div = document.createElement('div');
      div.className = 'quote-card';
      div.innerHTML = `
        <p class="quote-text">“${quote.text}”</p>
        <p class="quote-author">- Krishna</p>
      `;
      container.appendChild(div);
    });

  } catch (error) {
    console.error("Error loading quotes:", error);
    container.innerHTML = '<div class="quote-card"><p class="quote-text">Error loading quotes.</p></div>';
  }
}

let articlesLimit = 6; // Initial limit
async function loadArticles(limitCount = 6) {
  const list = document.getElementById('articlesList');
  if (!list) return;

  try {
    const articles = await getArticles(limitCount);

    if (articles.length === 0) {
      list.innerHTML = '<p style="text-align:center; width:100%;">No articles posted yet.</p>';
      return;
    }

    list.innerHTML = ''; // Clear loading
    articles.forEach(article => {
      const div = document.createElement('div');
      div.className = 'article-card';
      div.onclick = () => window.location.href = `article.html?id=${article.id}`;

      div.innerHTML = `
        <div class="article-content">
            <h3 class="article-title">${article.title}</h3>
            <p class="article-summary">${article.summary}</p>
            <span class="read-more">Read Article <i class="fas fa-arrow-right"></i></span>
        </div>
      `;
      list.appendChild(div);
    });

  } catch (error) {
    console.error("Error loading articles:", error);
    list.innerHTML = '<p>Error loading articles.</p>';
  }
}

// Load More Button
const loadMoreBtn = document.getElementById('loadMoreArticles');
if (loadMoreBtn) {
  loadMoreBtn.addEventListener('click', () => {
    articlesLimit += 6;
    loadArticles(articlesLimit);
  });
}

// Initialize
document.addEventListener('DOMContentLoaded', () => {
  loadQuotes();
  loadArticles(articlesLimit);
});
// Lightweight vanilla quote widget — data moved to data.js
import { quotes } from './data.js';

function getRandom() {
  return quotes[Math.floor(Math.random() * quotes.length)];
}

function render(container){
  // Show the classic proverb first for a predictable initial state
  const initial = quotes[9] || getRandom();
  container.innerHTML = `
    <div class="quote-card" role="region" aria-label="Inspirational Quote">
      <div>
        <p class="quote-text">${initial.quote}</p>
        <p class="quote-author">— ${initial.author}</p>
      </div>
      <button class="quote-btn" aria-label="New quote">New Quote</button>
    </div>
  `;
  const btn = container.querySelector('.quote-btn');
  const text = container.querySelector('.quote-text');
  const author = container.querySelector('.quote-author');
  btn.addEventListener('click', ()=>{ 
    const next = getRandom();
    text.textContent = next.quote;
    author.textContent = `— ${next.author}`;
    btn.blur();
  });
}

document.addEventListener('DOMContentLoaded', ()=>{
  const el = document.getElementById('quote-widget');
  if(el) render(el);
});

export { render as initQuote };

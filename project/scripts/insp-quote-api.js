const quoteURL = "data/inspirational-quotes.json";

async function getQuote() {
  try {
    const response = await fetch(quoteURL);
    const data = await response.json();
    const quotes = data.quotes;
    const randomIndex = Math.floor(Math.random() * quotes.length);
    const quote = quotes[randomIndex];

    const quoteBox = document.querySelector(".quote");
    quoteBox.innerHTML = `
      <p class="quote-text">"${quote.text}"</p>
      <p class="quote-author">— ${quote.author}</p>
    `;
  } catch (error) {
    console.error("Could not load local quote data:", error);
  }
}

getQuote();

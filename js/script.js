/******************************************
Treehouse FSJS Techdegree:
project 1 - A Random Quote Generator
******************************************/

/**
 * List of quotes to display.
 */
var quotes = [
  {
    quote: 'Life is about making an impact, not making an income',
    source: 'Kevin Kruse',
    citation: 'Forbes',
    tags: ['#inspiration', '#life']
  },
  {
    quote: 'Whatever the mind of man can conceive and believe, it can achieve',
    source: 'Napoleon Hill',
    citation: 'Forbes',
    tags: ['#inspiration', '#history']

  },
  {
    quote: 'You miss 100% of the shots you don’t take.',
    source: 'Wayne Gretzky',
    citation: 'Forbes',
    tags: ['#basketball', '#life']
  },
  {
    quote: 'What we do in life echoes in eternity.',
    source: 'Gladiator',
    citation: 'https://www.filmsite.org/2000squotes.html',
    year: '2000',
    tags: ['#film', '#life']
  },
  {
    quote: 'My precious.',
    source: 'The Lord of the Rings: The Two Towers',
    citation: 'https://www.filmsite.org/2000squotes.html',
    year: '2002',
    tags: ['#film', '#fantasy']
  }
];

/**
 * Returns a random quote from the quotes object.
 */

function getRandomQuote() {
  return quotes[Math.floor(Math.random() * quotes.length)];
}

/**
 * Generates html template for a random quote.
 */
function printQuote() {
  const quote = getRandomQuote(); 
  var html = '';
  html += `<p class="quote">` + quote.quote + `</p>
  <p class="source">` + quote.source;
  if (quote.citation) {
    html += `<span class="citation">` + quote.citation + `</span>`;
  }
  if (quote.year) {
    html += `<span class="year">` + quote.year + `</span>`;
  }
  if (quote.tags) {
    html += `<span class="tags">` + quote.tags.join(', ') + `</span>`;
  }
  html += `</p>`;
  console.log(html);
  document.getElementById('quote-box').innerHTML = html;
  document.body.style.backgroundColor = getRandomColor();
}

function getRandomColor() {
  const colors = ['red', 'green', 'blue', 'orange'];
  return colors[Math.floor(Math.random() * colors.length)];
}

setInterval(printQuote, 10000);

/**
 * Button listener for showing a new random quote.
 */
document.getElementById('loadQuote').addEventListener("click", printQuote, false);
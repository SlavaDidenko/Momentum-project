const quoteText = document.querySelector('.quote');
const authorText = document.querySelector('.author')
const reload = document.querySelector('.reload')
const request = 'https://www.breakingbadapi.com/api/quotes'

showQuotes();

async function getQuotes() {  
  const res = await fetch(request);
  const data = await res.json(); 
  return data;
}

async function showQuotes() {
  try {
    const result = await getQuotes()
    updateQuote();

    function updateQuote() {
      let rundomNumber = Math.floor(Math.random() * 70);
      const { author, quote } = result[rundomNumber];
      quoteText.textContent = quote;
      authorText.textContent = author;  
    }
    reload.classList.add('reload-active')

    reload.addEventListener('click', updateQuote)
  } catch (error) {
  }
}
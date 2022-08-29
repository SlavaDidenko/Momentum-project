const settingsBtn = document.querySelector('.settings-btn');
export const settings = document.querySelector('.settings');

const player = document.getElementById('player');
const weather = document.getElementById('weather');
const time = document.getElementById('time');
const date = document.getElementById('date');
const greetings = document.getElementById('greetings');
const quotes = document.getElementById('quotes');
const toDo = document.getElementById('to-do');


blockVisible(player, document.querySelector('.player') )
blockVisible(weather, document.querySelector('.weather'))
blockVisible(time, document.querySelector('.time'))
blockVisible(date, document.querySelector('.date'))
blockVisible(greetings, document.querySelector('.greeting-container'))
blockVisible(quotes, document.querySelector('.quote-wrapper'))
blockVisible(toDo, document.querySelector('.open-to-do'))

settingsBtn.addEventListener('click', function () {
  settings.classList.toggle('visible');
})

function blockVisible(selectedElement, visibleElement ) {
  selectedElement.addEventListener('change', () => {
    visibleElement.classList.toggle('visible');
  });
}
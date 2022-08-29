import { recursionShowTime, showDate} from './date';
import { updateGreeting } from './greetings';
import { showWeather } from './weather';

export const ukrainianLang = document.querySelector('.ukrainian-lang');

ukrainianLang.addEventListener('click', () => {
  clearTimeout(recursionShowTime);
  showDate('uk-UA');

  updateGreeting('ua')

  ukrainianLang.classList.add('lang-btn-active');

  showWeather(localStorage.getItem('city'), 'ua');
})
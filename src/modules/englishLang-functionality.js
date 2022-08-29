import { recursionShowTime, showDate} from './date';
import { ukrainianLang } from './ukrainianLang-functionality';
import { updateGreeting } from './greetings';
import { showWeather } from './weather';

const englishLang = document.querySelector('.english-lang');

englishLang.addEventListener('click', () => {
  clearTimeout(recursionShowTime);
  showDate();

  updateGreeting('en');

  englishLang.classList.add('lang-btn-active');

  showWeather(localStorage.getItem('city'));
})

if (localStorage.getItem('lang') == 'ua') {
  ukrainianLang.classList.add('lang-btn-active');
} else {
  englishLang.classList.add('lang-btn-active');
}
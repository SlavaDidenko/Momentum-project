import { textTranslation } from './translation';
import { getTimeOfDay } from './time-of-day';

const greetings = document.querySelector('.greeting')
export const name = document.getElementsByClassName('name')[0]

export let renewal;

name.placeholder = textTranslation['name'][localStorage.getItem('lang')] ? textTranslation['name'][localStorage.getItem('lang')] : '[Enter name]'

showGreeting(localStorage.getItem('lang') ? localStorage.getItem('lang') : 'en')

export function updateGreeting (lang) {
  clearTimeout(renewal);
  showGreeting(lang);
  name.placeholder = textTranslation['name'][lang];
  document.querySelector('.lang-btn.lang-btn-active')?.classList.remove('lang-btn-active');
}

export function showGreeting(lang) {
  greetings.textContent = getTimeOfDay(lang);
  renewal =  setTimeout(() => { showGreeting(lang) }, 1000);
}
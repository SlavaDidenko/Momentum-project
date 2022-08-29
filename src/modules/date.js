const time = document.querySelector('.time');
export let recursionShowTime;

showTime();
showDate(localStorage.getItem('lang') == 'ua' ? 'uk-UA' : 'en-US');
console.log(localStorage.getItem('lang'))
function showTime() {
  const date = new Date;
  const currentTime = date.toLocaleTimeString();
  time.textContent = currentTime;
  setTimeout(showTime, 1000);
}

export function showDate(lang = 'en-US') {

  const date = new Date();
  const options = {weekday: 'long', month: 'long', day: 'numeric',};
  const currentDate = date.toLocaleDateString(lang, options);
  document.querySelector('.date').textContent = currentDate;
  recursionShowTime = setTimeout(() => showDate(lang), 1000);
}
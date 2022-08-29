import { textTranslation } from './translation';

const weatherCity = document.querySelector('.weather__city');
const weatherIcon = document.querySelector('.weather__icon');
const weatherTemperature = document.querySelector('.weather__temperature');
const weatherDescription = document.querySelector('.weather__description');
const weatherSpeed = document.querySelector('.weather__speed');
const weatherHumidity = document.querySelector('.weather__humidity');

weatherCity.addEventListener('change', () => {
  showWeather(weatherCity.value, localStorage.getItem('lang') ? localStorage.getItem('lang') : 'en')
  displayWeather('block')
})

showWeather(localStorage.getItem('city') ? localStorage.getItem('city') : 'Kyiv', localStorage.getItem('lang') ? localStorage.getItem('lang') : 'en');


async function getWeather(city, lang) {
  const url = `https://api.openweathermap.org/data/2.5/weather?q=${city}&lang=${lang}&appid=c8bba06fab9555c58d1b83dc573f39c6&units=metric`;
  const res = await fetch(url);
  return await res.json(); 
}

export async function showWeather(city = 'Київ', lang = 'en') {
  try {
    let {
      name,
      weather: [arr],
      wind: { speed },
      main: { humidity, temp }} = await getWeather(city, lang);
    let {
      description,
      id } = arr;
    localStorage.setItem('city', name)
    weatherCity.value = name;
    weatherIcon.className = 'weather__icon owf';
    weatherIcon.classList.add(`owf-${id}`);
    weatherTemperature.textContent = `${Math.round(temp)} °C`;
    weatherDescription.textContent = description.replace(/(^|\s)\S/g, function(a) {return a.toUpperCase()});
    weatherSpeed.textContent = `${textTranslation['speed'][lang][0]}: ${Math.floor(speed)} ${textTranslation['speed'][lang][1]}`;
    weatherHumidity.textContent = `${textTranslation['humidity'][lang]}: ${humidity}%`
    
  } catch (error) {
    displayWeather('none')
    weatherDescription.textContent =`Error! The city of ${city} was not found.`;
  }

}

function displayWeather(value) {
  weatherIcon.style.display = value;
  weatherTemperature.style.display = value;
  weatherHumidity.style.display = value;
  weatherSpeed.style.display = value;
}

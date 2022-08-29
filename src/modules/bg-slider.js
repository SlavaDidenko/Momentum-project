import { getTimeOfDay } from './time-of-day';

const slideNext = document.querySelector('.slide-next');
const slidePrev = document.querySelector('.slide-prev');

let rundomNumber = Math.floor(Math.random() * 20) + 1;
let timesOfDay = getTimeOfDay().split(' ')[1];

setBg(rundomNumber, timesOfDay);

slideNext.addEventListener('click', () => {
  rundomNumber = rundomNumber == 20 ? 1 : rundomNumber + 1
  setBg(rundomNumber, timesOfDay)
})

slidePrev.addEventListener('click', () => {
  rundomNumber = rundomNumber == 1 ? 20 : rundomNumber - 1
    setBg(rundomNumber , timesOfDay)
})

function setBg(Number , timesOfDay) {
  const img = new Image();
  img.src = `https://raw.githubusercontent.com/rolling-scopes-school/stage1-tasks/assets/images/${timesOfDay}/${(`${rundomNumber}`.length == 1) ? '0' + Number : Number}.jpg`
  img.addEventListener('load', () => {      
    document.body.style.backgroundImage = `url('https://raw.githubusercontent.com/rolling-scopes-school/stage1-tasks/assets/images/${timesOfDay}/${(`${rundomNumber}`.length == 1) ? '0' + Number : Number}.jpg')`
  })
}
import playList from './playList.js';

const audio = new Audio();
const playerPlay = document.querySelector('.player__play');
export const playerMusic = document.querySelector('.player__music');
const mobileBtnList = document.querySelector('.player__mobile-list');
export const wrapper = document.querySelector('.wrapper');

let isPlay = false;
let playNum = 0;

mobileBtnList.addEventListener('click', () => {
  playerMusic.classList.toggle('window');
  wrapper.classList.toggle('wrapper-bg')
})

playList.forEach((track ,index) => {
  let { title } = track;
  const li = document.createElement('li');
  li.classList.add('player__music-item')
  li.textContent = title;
  playerMusic.append(li)

  li.addEventListener('click', function () {
    document.querySelector('.item-active')?.classList.remove('item-active')
    this.classList.add('item-active')
    playMusic(index);
    playNum = index;
  })
})

document.querySelector('.player__music-item').classList.add('item-active')

playerPlay.addEventListener('click', function () {
  this.classList.toggle('pause');
  pauseOrPlay();
})

document.querySelector('.player__play-next').addEventListener('click', () => {
  playNext();
})

document.querySelector('.player__play-prev').addEventListener('click', () => {
  playPrev();
})

playAudio(playList[0].src);
audio.addEventListener('ended',playNext)

function playAudio(src) {
  audio.src = src;
  audio.currentTime = 0;
}

function pauseOrPlay() {
  if (!isPlay) {
    audio.play();
    isPlay = true;
  } else {
    audio.pause();
    isPlay = false;
  }
}

function playNext() {
  (playNum < playList.length - 1) ? playNum += 1 : playNum = 0;
  playMusic(playNum);
  document.querySelector('.item-active')?.classList.remove('item-active')
  document.querySelectorAll('.player__music-item')[playNum].classList.add('item-active')
}

function playPrev() {
  (playNum == 0) ?  playNum = playList.length - 1 : playNum -= 1;
  playMusic(playNum);
  document.querySelector('.item-active')?.classList.remove('item-active')
  document.querySelectorAll('.player__music-item')[playNum].classList.add('item-active')
}

function playMusic(playNum) {
  isPlay = true;
  playerPlay.classList.add('pause');
  playAudio(playList[playNum].src);
  audio.play();
}
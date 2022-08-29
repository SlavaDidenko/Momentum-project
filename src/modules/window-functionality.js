import { playerMusic, wrapper } from './player';
import { settings } from './settings';
import { toDoList } from './to-do-list';

window.addEventListener('beforeunload', setLocalStorage);
window.addEventListener('load', () => {
  getLocalStorage();
});

window.addEventListener('click', (e) => {
  if ( !e.target.closest('.player__music') && !e.target.closest('.player__mobile-list')) {
    playerMusic.classList.remove('window');
    wrapper.classList.remove('wrapper-bg');
  }

  if ( !e.target.closest('.settings-btn') && !e.target.closest('.settings')) {
    settings.classList.add('visible')
  }

  if ( !e.target.closest('.to-do') && !e.target.closest('.open-to-do')) {
    toDoList.parentElement.classList.add('visible')
  }
})


function setLocalStorage() {
  localStorage.setItem('name', document.getElementsByName('name')[0].value);
  localStorage.setItem('lang' , document.querySelector('.lang-btn-active').textContent.toLowerCase())
}

function getLocalStorage() {
  if(localStorage.getItem('name')) {
    document.getElementsByName('name')[0].value = localStorage.getItem('name');
  }
}
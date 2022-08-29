const toDoForm = document.querySelector('.to-do__input-wrapper');
const toDoInput = document.querySelector('.to-do__input');
export const toDoList = document.querySelector('.to-do__list');
const clearBtn = document.querySelector('.to-do__clear-btn');
let number = 1;
export let taskList = [];

window.addEventListener('load', () => {
  let saved = localStorage.getItem("taskList");
  if (saved) {
    taskList = JSON.parse(localStorage.getItem("taskList"));
    taskList.forEach(element => {
      createTask(element[0],element[1])
    });
  }
})

document.querySelector('.open-to-do').addEventListener('click', () => {
  toDoList.parentElement.classList.toggle('visible')
})

toDoForm.addEventListener('submit', (e) => {
  e.preventDefault();
  if (toDoInput.value.replace(/\s/g, "") == "") {
    return;
  }
  createNewTask();
});

clearBtn.addEventListener('click', () => {
  toDoList.innerHTML = ''
  taskList = [];
  localStorage.setItem(`taskList`,JSON.stringify(taskList));
})

function createNewTask() {
  createTask(toDoInput.value , false);
  taskList.push([toDoInput.value , false])
  localStorage.setItem(`taskList`,JSON.stringify(taskList));
  toDoInput.value = '';
}

function createTask(value , checked) {
  const li = document.createElement('li');
  li.classList.add('to-do__item')
  li.innerHTML = `
  <div class="input-wrapper">
    <input ${checked ? 'checked' : ''} data-checkbox="${number}" class="to-do__custom-checkbox" id="task-${number}" type="checkbox" name="happy">
    <label for="task-${number}" class="to-do__checkbox"></label>
  </div>
  <p class="to-do__text">${value}</p>
  `
  toDoList.prepend(li);

  document.querySelector(`#task-${number}`)?.addEventListener('change', function () {
    console.log(this.checked)
    console.log(taskList[this.dataset.checkbox - 1][1])
    taskList[this.dataset.checkbox - 1][1] = this.checked;
    localStorage.setItem(`taskList`,JSON.stringify(taskList));
  })

  number += 1;
}
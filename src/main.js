const addBtn = document.querySelector('#addBtn');
const todoInput = document.querySelector('#todoInput');
const todoList = document.querySelector('#todoList');

addBtn.addEventListener('click', () => {
  if (todoInput.value !== '') {
    const todoItem = document.createElement('li');
    todoItem.classList.add('list-group-item');
    todoItem.innerText = todoInput.value;
    todoList.appendChild(todoItem);
    todoInput.value = '';
  }
});
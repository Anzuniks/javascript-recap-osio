// array for todo list
const todoList = [
  {
    id: 1,
    task: 'Learn HTML',
    completed: true,
  },
  {
    id: 2,
    task: 'Learn CSS',
    completed: true,
  },
  {
    id: 3,
    task: 'Learn JS',
    completed: false,
  },
  {
    id: 4,
    task: 'Learn TypeScript',
    completed: false,
  },
  {
    id: 5,
    task: 'Learn React',
    completed: false,
  },
];

// add your code here
const target = document.querySelector('ul');
const modal = document.querySelector('dialog');
const openModalBtn = document.querySelector('#open-modal');
const form = document.querySelector('form');

function renderTodo() {
  target.innerHTML = '';

  todoList.forEach((todo) => {
    const li = document.createElement('li');


    const checkbox = document.createElement('input');
    checkbox.type = 'checkbox';
    checkbox.id = `todo-${todo.id}`;
    checkbox.checked = todo.completed;

    checkbox.addEventListener('change', () => {
      todo.completed = checkbox.checked;
      console.log("Pävitetty todo:", todoList);

});

    const Label = document.createElement('label');
    Label.htmlFor = `todo-${todo.id}`;
    Label.textContent = todo.task;


    const  deleteBtn = document.createElement('button');
    deleteBtn.textContent = 'Delete';
    deleteBtn.addEventListener('click', () => {
      const index = todoList.indexOf(todo);
      todoList.splice(index, 1);

      target.removeChild(li);
      console.log("Päivitetty todo poiston jälkeen:", todoList);
    });

    li.appendChild(checkbox);
    li.appendChild(Label);
    li.appendChild(deleteBtn);
    target.appendChild(li);
  });
}

openModalBtn.addEventListener('click', () => {
  modal.showModal();
});

form.addEventListener('submit', (evt) => {
  evt.preventDefault();

  const taskName = document.querySelector('#task-input').value;

  const newTodo = {
    id: todoList.length > 0 ? todoList[todoList.length - 1].id + 1 : 1,
    task: taskName,
    completed: false,
  };

  todoList.push(newTodo);
  renderTodo();
  modal.close();
  form.reset();
});

renderTodo();

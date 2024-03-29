function handleFormSubmit(event) {
  event.preventDefault();
  const toDo = event.target.elements.todo.value.trim();
  if (toDo === '') {
    return;
  }
  addToDo(toDo);
  event.target.elements.todo.value = "";
}

function addToDo(text) {
  const li = document.createElement("li");
  const checkbox = document.createElement("input");
  checkbox.type = "checkbox";
  checkbox.addEventListener("click", checkComplete);
  const span = document.createElement('span');
  span.textContent = text;
  span.classList.add('todo-text');
  span.addEventListener('click', editToDo); // Add event listener for editing
  const button = document.createElement('button');
  button.classList.add('todo-remove');
  button.textContent = 'X';
  button.addEventListener('click', removeItem);
  li.appendChild(checkbox);
  li.appendChild(span);
  li.appendChild(button);
  document.querySelector(".todo-list").appendChild(li);
}

function checkComplete() {
  this.parentElement.classList.toggle('completed');
}

function removeItem() {
  this.parentElement.remove();
}

function editToDo() {
  const newText = prompt("Edit your to-do:", this.textContent);
  if (newText !== null) {
    this.textContent = newText.trim();
  }
}

document.querySelector("form").addEventListener("submit", handleFormSubmit);

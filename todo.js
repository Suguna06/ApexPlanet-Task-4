let tasks = [];

document.addEventListener("DOMContentLoaded", () => {
  loadTasks();
  document.getElementById("toggleTheme").onclick = toggleTheme;
});

function addTask() {
  const input = document.getElementById("taskInput");
  const taskText = input.value.trim();

  if (taskText === "") return;

  tasks.push(taskText);
  input.value = "";
  saveTasks();
  renderTasks();
}

function renderTasks() {
  const list = document.getElementById("taskList");
  list.innerHTML = "";

  tasks.forEach((task, index) => {
    const li = document.createElement("li");

    const span = document.createElement("span");
    span.textContent = task;

    const editBtn = document.createElement("button");
    editBtn.textContent = "✏";
    editBtn.onclick = () => editTask(index);

    const deleteBtn = document.createElement("button");
    deleteBtn.textContent = "🗑";
    deleteBtn.onclick = () => deleteTask(index);

    li.appendChild(span);
    li.appendChild(editBtn);
    li.appendChild(deleteBtn);
    list.appendChild(li);
  });
}

function deleteTask(index) {
  tasks.splice(index, 1);
  saveTasks();
  renderTasks();
}

function editTask(index) {
  const newTask = prompt("Edit task:", tasks[index]);
  if (newTask && newTask.trim() !== "") {
    tasks[index] = newTask.trim();
    saveTasks();
    renderTasks();
  }
}

function saveTasks() {
  localStorage.setItem("tasks", JSON.stringify(tasks));
}

function loadTasks() {
  const stored = localStorage.getItem("tasks");
  if (stored) {
    tasks = JSON.parse(stored);
    renderTasks();
  }
}

function toggleTheme() {
  document.body.classList.toggle("dark");
}
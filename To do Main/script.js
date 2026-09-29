const time = document.querySelector("#time");
function showTime() {
  const now = new Date();

  time.innerText = now.toLocaleTimeString([], {
    hour: "2-digit",
    minute: "2-digit",
  });
}

showTime();
setInterval(showTime, 1000);

const taskInput = document.querySelector("#taskInput");
const addButton = document.querySelector("#addBtn");
const taskList = document.querySelector(".task-list");

let localTask = JSON.parse(localStorage.getItem("task")) || [];

addButton.addEventListener("click", () => {
  const task = taskInput.value;

  localTask.push(task)

  const newTask = document.createElement("div");
  newTask.classList.add("task");

  newTask.innerHTML = `<div class="task-left">
                <input type="checkbox" />
                <span>${task}</span>
              </div>

              <button class="delete-btn">×</button>`;

  const deleteBtn = newTask.querySelector(".delete-btn");
  deleteBtn.addEventListener("click", () => {
    newTask.remove();
  });
  localStorage.setItem("task",JSON.stringify(localTask))
  taskList.appendChild(newTask);
  taskInput.value = "";
});


function showTasks() {
  taskList.innerHTML = "";

  localTask.forEach((task) => {
    const newTask = document.createElement("div");
WWWWW
    newTask.classList.add("task");

    newTask.innerHTML = `
      <div class="task-left">
        <input type="checkbox">
        <span>${task}</span>
      </div>

      <button class="delete-btn">×</button>
    `;

    const deleteBtn = newTask.querySelector(".delete-btn");

    deleteBtn.addEventListener("click", () => {
      newTask.remove();
    });

    taskList.appendChild(newTask);
  });
}

showTasks()
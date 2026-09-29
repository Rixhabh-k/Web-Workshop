const taskInput = document.querySelector(".task-input")
const addBtn = document.querySelector(".add-btn")
const taskContainer = document.querySelector(".task-container")

addBtn.addEventListener("click",()=>{
    const task = taskInput.value;

    const newTask = document.createElement("div")

    newTask.classList.add("task")

    newTask.innerHTML = `<div class="task-title">
                        <input type="checkbox">
                        <p>${task}</p>
                    </div>
                    <span class="delete-btn">x</span>`

    taskContainer.appendChild(newTask)

    const deleteBtn = newTask.querySelector(".delete-btn")

    deleteBtn.addEventListener("click",()=>{
        taskContainer.remove(newTask)
    })
    taskInput.value = "";
})





let tasks = localStorage.getItem("tasks");
if (tasks === null) {
  tasks = [];
} else {
  tasks = JSON.parse(tasks);
}
console.log(tasks);

const getTasks = () => {
  const tasksList = document.getElementById("tasks");
  tasksList.innerHTML = "";
  let tasks = localStorage.getItem("tasks");
  if (tasks === null) {
    tasks = [];
  } else {
    tasks = JSON.parse(tasks);
  }
  for (task of tasks) {
    const p = document.createElement("p");
    p.className = "list-group-item";
    p.textContent = task;
    tasksList.appendChild(p);
  }
};

document.getElementById("add-task-form").addEventListener("submit", (e) => {
  e.preventDefault();
  let task = document.getElementById("task-id").value;
  if (task === "") {
    alert("Please fill all the fields");
  } else {
    tasks.push(task);
    localStorage.setItem("tasks", JSON.stringify(tasks));
    getTasks();
  }
});

getTasks();

let tasks = ["Do Laundry", "Wash dishes"];


function showTasks() {
    let taskListUl = document.getElementById("task-list");
    taskListUl.innerHTML = "";
  
  for(let i = 0; i < tasks.length; i++) {
    let li = document.createElement("li");
    li.innerText = tasks[i];
    taskListUl.appendChild(li);
  }
}

function addTask() {
  let task = prompt("enter your task");
  tasks.push(task);
  showTasks();
}

function clearTasks() {
  tasks = [];
  showTasks();
}

function prioritizeTask() {
  let task = prompt("Enter your task: ");
  let listItems = taskListUl.getElementsByTagName("li");
  for (let i =0; i < tasks.length; i++) {
    if (task[i] == task)  {
      listItems[i].style.color = "red";
    }
  }
}
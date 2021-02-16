var formEl = document.querySelector("#task-form");

var tasksToDoEl = document.querySelector("#tasks-to-do");

var createTaskHandler = function(event) {

    event.preventDefault();

    // Variables
    var taskNameInput = document.querySelector("input[name='task-name']").value;
    var taskTypeInput = document.querySelector("select[name='task-type']").value;

    // Create List Item
    var listItemEl = document.createElement("li");
    listItemEl.className = "task-item";

  // create div to hold task info 
  var taskInfoEl = document.createElement("div");

  // Give Class Name
  taskInfoEl.className = "task-info";

  // Add HTML Content
    taskInfoEl.innerHTML = "<h3 class='task-name'>" + taskNameInput + "</h3><span class ='take-type'>" + taskTypeInput + "</span>";

    listItemEl.appendChild(taskInfoEl);

    // Add entire list item to list
    tasksToDoEl.appendChild(listItemEl);
  };

  formEl.addEventListener("submit", createTaskHandler);

var formEl = document.querySelector("#task-form");

var tasksToDoEl = document.querySelector("#tasks-to-do");

var taskFormHandler = function(event) {

    event.preventDefault();

    // Variables
    var taskNameInput = document.querySelector("input[name='task-name']").value;
    var taskTypeInput = document.querySelector("select[name='task-type']").value;

    // Package Data as an Object
    var taskDataObj = {
      name: taskNameInput,
      type: taskTypeInput,
    };

    if (!taskNameInput || !taskTypeInput) {
      alert("Your need to fill out the task form!");
      return false;
    }

    formEl.reset();

    // Send as argument to TaskEl
    createTaskEl(taskDataObj);
  };

  var createTaskEl = function(taskDataObj) {
  
    // Create List Item
  var listItemEl = document.createElement("li");
  listItemEl.className = "task-item";

// create div to hold task info 
var taskInfoEl = document.createElement("div");

// Give Class Name
taskInfoEl.className = "task-info";

// Add HTML Content
  taskInfoEl.innerHTML = "<h3 class='task-name'>" + taskDataObj.name + "</h3><span class ='take-type'>" + taskDataObj.type + "</span>";

  listItemEl.appendChild(taskInfoEl);

  // Add entire list item to list
  tasksToDoEl.appendChild(listItemEl);

  }

  formEl.addEventListener("submit", taskFormHandler);

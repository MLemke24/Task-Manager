var formEl = document.querySelector("#task-form");

var tasksToDoEl = document.querySelector("#tasks-to-do");

var taskIdCounter = 0;

var pageContentEl = document.querySelector("#page-content");

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

  // Add Task id to custom attribute
   listItemEl.setAttribute("data-task-id", taskIdCounter);

// create div to hold task info 
var taskInfoEl = document.createElement("div");

// Give Class Name
taskInfoEl.className = "task-info";

// Add HTML Content
  taskInfoEl.innerHTML = "<h3 class='task-name'>" + taskDataObj.name + "</h3><span class ='take-type'>" + taskDataObj.type + "</span>";

  listItemEl.appendChild(taskInfoEl);

  var taskActionsEl = createTaskActions(taskIdCounter);
  listItemEl.appendChild(taskActionsEl);

  // Add entire list item to list
  tasksToDoEl.appendChild(listItemEl);

  taskIdCounter++;

  };

  var createTaskActions = function(taskId) {
    // Create new div
    var actionContainerEl = document.createElement("div");
    actionContainerEl.className = "task-actions";

    // create edit button 
    var editButtonEl = document.createElement("button");
    editButtonEl.textContent = "Edit";
    editButtonEl.className = "btn edit-btn"
    editButtonEl.setAttribute("data-task-id", taskId);

    actionContainerEl.appendChild(editButtonEl);

    // Create Delete Button

    var deleteButtonEl = document.createElement("button");
    deleteButtonEl.textContent = "Delete";
    deleteButtonEl.className = "btn delete-btn";
    deleteButtonEl.setAttribute("data-task-id", taskId);

    actionContainerEl.appendChild(deleteButtonEl);

    //status select 
    var statusSelectEl = document.createElement("select");
    statusSelectEl.className = "select-status";
    statusSelectEl.setAttribute("name", "status-change");
    statusSelectEl.setAttribute("data-task-id", taskId);

    // For Loop 
    var statusChoices = ["To Do", "In Progress", "Completed"];

    for (var i = 0; i < statusChoices.length; i++) {

      var statusOptionEl = document.createElement("option");
      statusOptionEl.textContent = statusChoices[i];
      statusOptionEl.setAttribute("value", statusChoices[i]);

      statusSelectEl.appendChild(statusOptionEl);
    }

    actionContainerEl.appendChild(statusSelectEl);


    return actionContainerEl;

  };



  // delete button function 
  var taskButtonHandler = function(event) {
    console.log(event.target);

    if (event.target.matches(".delete-btn")) {
      var taskId = event.target.getAttribute("data-task-id");
      console.log(taskId);
    }
  };

  var deleteTask = function(taskId) {
    console.log(taskId);
    
    if (event.target.matches(".delete-btn")) {
       var taskId = event.target.getAttribute("data-task-id");
       deleteTaks(taskId);
    }
  };

// submit listener
  formEl.addEventListener("submit", taskFormHandler);

  // delete button listener
  pageContentEl.addEventListener("click", taskButtonHandler);
  
  

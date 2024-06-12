function saveTask(){//save the task to the local storage
    console.log("Task Saved");//display task saved in the console
}
function init(){//initialize the application
    console.log("task manager");
//load data
//hook the events
$("#btnSave").click(saveTask);
}
//function getTask{//get the task from the local storage

//}
window.onload = init;//calls the init function when the page is loaded// This is the parent